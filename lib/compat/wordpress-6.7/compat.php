<?php
/**
 * WordPress 6.7 compatibility functions.
 *
 * @package gutenberg
 */

/**
 * Hooks into `get_block_templates` so templates from the registry are also returned, as long as there
 * isn't a theme template with the same slug.
 *
 * @param WP_Block_Template[] $query_result Array of found block templates.
 * @param array               $query {
 *     Arguments to retrieve templates. All arguments are optional.
 *
 *     @type string[] $slug__in  List of slugs to include.
 *     @type int      $wp_id     Post ID of customized template.
 *     @type string   $area      A 'wp_template_part_area' taxonomy value to filter by (for 'wp_template_part' template type only).
 *     @type string   $post_type Post type to get the templates for.
 * }
 * @param string              $template_type wp_template or wp_template_part.
 * @return WP_Block_Template[] The same $query_result but might contain some additional templates from
 * the registry.
 */
function _gutenberg_add_block_templates_from_registry( $query_result, $query, $template_type ) {
	if ( ! isset( $query['wp_id'] ) ) {
		$template_files = _gutenberg_get_block_templates_files( $template_type, $query );

		/*
		 * Add templates registered in the template registry. Filtering out the ones which have a theme file.
		 */
		$registered_templates          = WP_Block_Templates_Registry::get_instance()->get_by_query( $template_type, $query );
		$matching_registered_templates = array_filter(
			$registered_templates,
			function ( $registered_template ) use ( $template_files ) {
				foreach ( $template_files as $template_file ) {
					if ( $template_file['slug'] === $registered_template->slug ) {
						return false;
					}
				}
				return true;
			}
		);
		$query_result                  = array_merge( $query_result, $matching_registered_templates );
	}

	return $query_result;
}
add_filter( 'get_block_templates', '_gutenberg_add_block_templates_from_registry', 10, 3 );

/**
 * Hooks into `get_block_file_template` so templates from the registry are also returned.
 *
 * @param WP_Block_Template|null $block_template The found block template, or null if there is none.
 * @param string                 $id             Template unique identifier (example: 'theme_slug//template_slug').
 * @param string                 $template_type  Template type. Either 'wp_template' or 'wp_template_part'.
 * @return WP_Block_Template|null The block template that was already found or from the registry. In case the template was already found, add the necessary details from the registry.
 */
function _gutenberg_add_block_file_templates_from_registry( $block_template, $id, $template_type ) {
	if ( $block_template ) {
		$registered_template = WP_Block_Templates_Registry::get_instance()->get_by_slug( $template_type, $block_template->slug );
		if ( $registered_template ) {
			$block_template->plugin = $registered_template->plugin;
		}
		return $block_template;
	}

	$parts = explode( '//', $id, 2 );

	if ( count( $parts ) < 2 ) {
		return $block_template;
	}

	list( , $slug ) = $parts;
	return WP_Block_Templates_Registry::get_instance()->get_by_slug( $template_type, $slug );
}
add_filter( 'get_block_file_template', '_gutenberg_add_block_file_templates_from_registry', 10, 3 );

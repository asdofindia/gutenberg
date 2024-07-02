"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[9395],{"./packages/components/build-module/range-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>range_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),icon=__webpack_require__("./packages/components/build-module/icon/index.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),use_controlled_state=__webpack_require__("./packages/components/build-module/utils/hooks/use-controlled-state.js"),math=__webpack_require__("./packages/components/build-module/utils/math.js");function floatClamp(value,min,max){return"number"!=typeof value?null:parseFloat(`${(0,math.uZ)(value,min,max)}`)}var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),number_control=__webpack_require__("./packages/components/build-module/number-control/index.js"),rtl=__webpack_require__("./packages/components/build-module/utils/rtl.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js");const rangeHeight=()=>(0,emotion_react_browser_esm.iv)({height:30,minHeight:30},"","","",""),deprecatedHeight=({__next40pxDefaultSize})=>!__next40pxDefaultSize&&(0,emotion_react_browser_esm.iv)({minHeight:30},"","","",""),Root=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1epgpqk14"})("-webkit-tap-highlight-color:transparent;align-items:center;display:flex;justify-content:flex-start;padding:0;position:relative;touch-action:none;width:100%;min-height:40px;",deprecatedHeight,";"),wrapperColor=({color=colors_values.D.ui.borderFocus})=>(0,emotion_react_browser_esm.iv)({color},"","","",""),wrapperMargin=({marks,__nextHasNoMarginBottom})=>__nextHasNoMarginBottom?"":(0,emotion_react_browser_esm.iv)({marginBottom:marks?16:void 0},"","","",""),Wrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1epgpqk13"})("display:block;flex:1;position:relative;width:100%;",wrapperColor,";",rangeHeight,";",wrapperMargin,";"),BeforeIconWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk12"})("display:flex;margin-top:",4,"px;",(0,rtl.b)({marginRight:6}),";"),AfterIconWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk11"})("display:flex;margin-top:",4,"px;",(0,rtl.b)({marginLeft:6}),";"),railBackgroundColor=({disabled,railColor})=>{let background=railColor||"";return disabled&&(background=colors_values.D.ui.backgroundDisabled),(0,emotion_react_browser_esm.iv)({background},"","","","")},Rail=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk10"})("background-color:",colors_values.D.gray[300],";left:0;pointer-events:none;right:0;display:block;height:",4,"px;position:absolute;margin-top:",13,"px;top:0;border-radius:",4,"px;",railBackgroundColor,";"),trackBackgroundColor=({disabled,trackColor})=>{let background=trackColor||"currentColor";return disabled&&(background=colors_values.D.gray[400]),(0,emotion_react_browser_esm.iv)({background},"","","","")},Track=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk9"})("background-color:currentColor;border-radius:",4,"px;height:",4,"px;pointer-events:none;display:block;position:absolute;margin-top:",13,"px;top:0;",trackBackgroundColor,";"),MarksWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk8"})({name:"l7tjj5",styles:"display:block;pointer-events:none;position:relative;width:100%;user-select:none"}),markFill=({disabled,isFilled})=>{let backgroundColor=isFilled?"currentColor":colors_values.D.gray[300];return disabled&&(backgroundColor=colors_values.D.gray[400]),(0,emotion_react_browser_esm.iv)({backgroundColor},"","","","")},Mark=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk7"})("height:",12,"px;left:0;position:absolute;top:-4px;width:1px;",markFill,";"),markLabelFill=({isFilled})=>(0,emotion_react_browser_esm.iv)({color:isFilled?colors_values.D.gray[700]:colors_values.D.gray[300]},"","","",""),MarkLabel=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk6"})("color:",colors_values.D.gray[300],";left:0;font-size:11px;position:absolute;top:12px;transform:translateX( -50% );white-space:nowrap;",markLabelFill,";"),thumbColor=({disabled})=>disabled?(0,emotion_react_browser_esm.iv)("background-color:",colors_values.D.gray[400],";","","",""):(0,emotion_react_browser_esm.iv)("background-color:",colors_values.D.theme.accent,";","","",""),ThumbWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk5"})("align-items:center;display:flex;height:",12,"px;justify-content:center;margin-top:",9,"px;outline:0;pointer-events:none;position:absolute;top:0;user-select:none;width:",12,"px;border-radius:50%;",thumbColor,";",(0,rtl.b)({marginLeft:-10}),";",(0,rtl.b)({transform:"translateX( 4.5px )"},{transform:"translateX( -4.5px )"}),";"),thumbFocus=({isFocused})=>isFocused?(0,emotion_react_browser_esm.iv)("&::before{content:' ';position:absolute;background-color:",colors_values.D.theme.accent,";opacity:0.4;border-radius:50%;height:",20,"px;width:",20,"px;top:-4px;left:-4px;}","","",""):"",Thumb=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk4"})("align-items:center;border-radius:50%;height:100%;outline:0;position:absolute;user-select:none;width:100%;",thumbColor,";",thumbFocus,";"),InputRange=(0,emotion_styled_base_browser_esm.Z)("input",{target:"e1epgpqk3"})("box-sizing:border-box;cursor:pointer;display:block;height:100%;left:0;margin:0 -",6,"px;opacity:0;outline:none;position:absolute;right:0;top:0;width:calc( 100% + ",12,"px );"),tooltipShow=({show})=>(0,emotion_react_browser_esm.iv)({opacity:show?1:0},"","","","");var _ref={name:"1cypxip",styles:"top:-80%"},_ref2={name:"1lr98c4",styles:"bottom:-80%"};const tooltipPosition=({position})=>"bottom"===position?_ref2:_ref,Tooltip=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk2"})("background:rgba( 0, 0, 0, 0.8 );border-radius:2px;color:white;display:inline-block;font-size:12px;min-width:32px;opacity:0;padding:4px 8px;pointer-events:none;position:absolute;text-align:center;user-select:none;line-height:1.4;@media not ( prefers-reduced-motion ){transition:opacity 120ms ease;}",tooltipShow,";",tooltipPosition,";",(0,rtl.b)({transform:"translateX(-50%)"},{transform:"translateX(50%)"}),";"),InputNumber=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"e1epgpqk1"})("display:inline-block;font-size:13px;margin-top:0;input[type='number']&{",rangeHeight,";}",(0,rtl.b)({marginLeft:`${(0,space.D)(4)} !important`}),";"),ActionRightWrapper=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1epgpqk0"})("display:block;margin-top:0;button,button.is-small{margin-left:0;",rangeHeight,";}",(0,rtl.b)({marginLeft:8}),";");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const input_range=(0,react.forwardRef)((function input_range_InputRange(props,ref){const{describedBy,label,value,...otherProps}=props;return(0,jsx_runtime.jsx)(InputRange,{...otherProps,"aria-describedby":describedBy,"aria-label":label,"aria-hidden":!1,ref,tabIndex:0,type:"range",value})}));function RangeMark(props){const{className,isFilled=!1,label,style={},...otherProps}=props,classes=(0,clsx.Z)("components-range-control__mark",isFilled&&"is-filled",className),labelClasses=(0,clsx.Z)("components-range-control__mark-label",isFilled&&"is-filled");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Mark,{...otherProps,"aria-hidden":"true",className:classes,isFilled,style}),label&&(0,jsx_runtime.jsx)(MarkLabel,{"aria-hidden":"true",className:labelClasses,isFilled,style,children:label})]})}function RangeRail(props){const{disabled=!1,marks=!1,min=0,max=100,step=1,value=0,...restProps}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Rail,{disabled,...restProps}),marks&&(0,jsx_runtime.jsx)(Marks,{disabled,marks,min,max,step,value})]})}function Marks(props){const{disabled=!1,marks=!1,min=0,max=100,step:stepProp=1,value=0}=props,marksData=function useMarks({marks,min=0,max=100,step=1,value=0}){if(!marks)return[];const range=max-min;if(!Array.isArray(marks)){marks=[];const count=1+Math.round(range/step);for(;count>marks.push({value:step*marks.length+min}););}const placedMarks=[];return marks.forEach(((mark,index)=>{if(mark.value<min||mark.value>max)return;const key=`mark-${index}`,isFilled=mark.value<=value,offset=(mark.value-min)/range*100+"%",offsetStyle={[(0,build_module.dZ)()?"right":"left"]:offset};placedMarks.push({...mark,isFilled,key,style:offsetStyle})})),placedMarks}({marks,min,max,step:"any"===stepProp?1:stepProp,value});return(0,jsx_runtime.jsx)(MarksWrapper,{"aria-hidden":"true",className:"components-range-control__marks",children:marksData.map((mark=>(0,react.createElement)(RangeMark,{...mark,key:mark.key,"aria-hidden":"true",disabled})))})}function SimpleTooltip(props){const{className,inputRef,tooltipPosition,show=!1,style={},value=0,renderTooltipContent=v=>v,zIndex=100,...restProps}=props,position=function useTooltipPosition({inputRef,tooltipPosition}){const[position,setPosition]=(0,react.useState)(),setTooltipPosition=(0,react.useCallback)((()=>{inputRef&&inputRef.current&&setPosition(tooltipPosition)}),[tooltipPosition,inputRef]);return(0,react.useEffect)((()=>{setTooltipPosition()}),[setTooltipPosition]),(0,react.useEffect)((()=>(window.addEventListener("resize",setTooltipPosition),()=>{window.removeEventListener("resize",setTooltipPosition)}))),position}({inputRef,tooltipPosition}),classes=(0,clsx.Z)("components-simple-tooltip",className),styles={...style,zIndex};return(0,jsx_runtime.jsx)(Tooltip,{...restProps,"aria-hidden":show,className:classes,position,show,role:"tooltip",style:styles,children:renderTooltipContent(value)})}const noop=()=>{};const RangeControl=(0,react.forwardRef)((function UnforwardedRangeControl(props,forwardedRef){const{__nextHasNoMarginBottom=!1,afterIcon,allowReset=!1,beforeIcon,className,color:colorProp=colors_values.D.theme.accent,currentInput,disabled=!1,help,hideLabelFromVision=!1,initialPosition,isShiftStepEnabled=!0,label,marks=!1,max=100,min=0,onBlur=noop,onChange=noop,onFocus=noop,onMouseLeave=noop,onMouseMove=noop,railColor,renderTooltipContent=v=>v,resetFallbackValue,__next40pxDefaultSize=!1,shiftStep=10,showTooltip:showTooltipProp,step=1,trackColor,value:valueProp,withInputField=!0,...otherProps}=props,[value,setValue]=function useControlledRangeValue(settings){const{min,max,value:valueProp,initial}=settings,[state,setInternalState]=(0,use_controlled_state.Z)(floatClamp(valueProp,min,max),{initial:floatClamp(null!=initial?initial:null,min,max),fallback:null});return[state,(0,react.useCallback)((nextValue=>{setInternalState(null===nextValue?null:floatClamp(nextValue,min,max))}),[min,max,setInternalState])]}({min,max,value:null!=valueProp?valueProp:null,initial:initialPosition}),isResetPendent=(0,react.useRef)(!1);let hasTooltip=showTooltipProp,hasInputField=withInputField;"any"===step&&(hasTooltip=!1,hasInputField=!1);const[showTooltip,setShowTooltip]=(0,react.useState)(hasTooltip),[isFocused,setIsFocused]=(0,react.useState)(!1),inputRef=(0,react.useRef)(),isCurrentlyFocused=inputRef.current?.matches(":focus"),isThumbFocused=!disabled&&isFocused,isValueReset=null===value,inputSliderValue=isValueReset?"":void 0!==value?value:currentInput,rangeFillValue=isValueReset?(max-min)/2+min:value,fillValue=isValueReset?50:(value-min)/(max-min)*100,fillValueOffset=`${(0,math.uZ)(fillValue,0,100)}%`,classes=(0,clsx.Z)("components-range-control",className),wrapperClasses=(0,clsx.Z)("components-range-control__wrapper",!!marks&&"is-marked"),id=(0,use_instance_id.Z)(UnforwardedRangeControl,"inspector-range-control"),describedBy=help?`${id}__help`:void 0,enableTooltip=!1!==hasTooltip&&Number.isFinite(value),handleOnReset=()=>{let resetValue=parseFloat(`${resetFallbackValue}`),onChangeResetValue=resetValue;isNaN(resetValue)&&(resetValue=null,onChangeResetValue=void 0),setValue(resetValue),onChange(onChangeResetValue)},offsetStyle={[(0,build_module.dZ)()?"right":"left"]:fillValueOffset};return(0,jsx_runtime.jsx)(base_control.ZP,{__nextHasNoMarginBottom,className:classes,label,hideLabelFromVision,id:`${id}`,help,children:(0,jsx_runtime.jsxs)(Root,{className:"components-range-control__root",__next40pxDefaultSize,children:[beforeIcon&&(0,jsx_runtime.jsx)(BeforeIconWrapper,{children:(0,jsx_runtime.jsx)(icon.Z,{icon:beforeIcon})}),(0,jsx_runtime.jsxs)(Wrapper,{__nextHasNoMarginBottom,className:wrapperClasses,color:colorProp,marks:!!marks,children:[(0,jsx_runtime.jsx)(input_range,{...otherProps,className:"components-range-control__slider",describedBy,disabled,id:`${id}`,label,max,min,onBlur:event=>{onBlur(event),setIsFocused(!1),setShowTooltip(!1)},onChange:event=>{const nextValue=parseFloat(event.target.value);setValue(nextValue),onChange(nextValue)},onFocus:event=>{onFocus(event),setIsFocused(!0),setShowTooltip(!0)},onMouseMove,onMouseLeave,ref:(0,use_merge_refs.Z)([inputRef,forwardedRef]),step,value:null!=inputSliderValue?inputSliderValue:void 0}),(0,jsx_runtime.jsx)(RangeRail,{"aria-hidden":!0,disabled,marks,max,min,railColor,step,value:rangeFillValue}),(0,jsx_runtime.jsx)(Track,{"aria-hidden":!0,className:"components-range-control__track",disabled,style:{width:fillValueOffset},trackColor}),(0,jsx_runtime.jsx)(ThumbWrapper,{className:"components-range-control__thumb-wrapper",style:offsetStyle,disabled,children:(0,jsx_runtime.jsx)(Thumb,{"aria-hidden":!0,isFocused:isThumbFocused,disabled})}),enableTooltip&&(0,jsx_runtime.jsx)(SimpleTooltip,{className:"components-range-control__tooltip",inputRef,tooltipPosition:"bottom",renderTooltipContent,show:isCurrentlyFocused||showTooltip,style:offsetStyle,value})]}),afterIcon&&(0,jsx_runtime.jsx)(AfterIconWrapper,{children:(0,jsx_runtime.jsx)(icon.Z,{icon:afterIcon})}),hasInputField&&(0,jsx_runtime.jsx)(InputNumber,{"aria-label":label,className:"components-range-control__number",disabled,inputMode:"decimal",isShiftStepEnabled,max,min,onBlur:()=>{isResetPendent.current&&(handleOnReset(),isResetPendent.current=!1)},onChange:next=>{let nextValue=parseFloat(next);setValue(nextValue),isNaN(nextValue)?allowReset&&(isResetPendent.current=!0):((nextValue<min||nextValue>max)&&(nextValue=floatClamp(nextValue,min,max)),onChange(nextValue),isResetPendent.current=!1)},shiftStep,size:__next40pxDefaultSize?"__unstable-large":"default",__unstableInputWidth:__next40pxDefaultSize?(0,space.D)(20):(0,space.D)(16),step,value:inputSliderValue}),allowReset&&(0,jsx_runtime.jsx)(ActionRightWrapper,{children:(0,jsx_runtime.jsx)(build_module_button.ZP,{className:"components-range-control__reset",disabled:disabled||void 0===value,variant:"secondary",size:"small",onClick:handleOnReset,children:(0,build_module.__)("Reset")})})]})})})),range_control=RangeControl}}]);
(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2760],{"./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{useDrag:()=>useDrag});const V={toVector:(v,fallback)=>(void 0===v&&(v=fallback),Array.isArray(v)?v:[v,v]),add:(v1,v2)=>[v1[0]+v2[0],v1[1]+v2[1]],sub:(v1,v2)=>[v1[0]-v2[0],v1[1]-v2[1]],addTo(v1,v2){v1[0]+=v2[0],v1[1]+=v2[1]},subTo(v1,v2){v1[0]-=v2[0],v1[1]-=v2[1]}};function rubberband(distance,dimension,constant){return 0===dimension||Math.abs(dimension)===1/0?Math.pow(distance,5*constant):distance*dimension*constant/(dimension+constant*distance)}function rubberbandIfOutOfBounds(position,min,max,constant=.15){return 0===constant?function clamp(v,min,max){return Math.max(min,Math.min(v,max))}(position,min,max):position<min?-rubberband(min-position,max-min,constant)+min:position>max?+rubberband(position-max,max-min,constant)+max:position}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const EVENT_TYPE_MAP={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function capitalize(string){return string?string[0].toUpperCase()+string.slice(1):""}const actionsWithoutCaptureSupported=["enter","leave"];function toHandlerProp(device,action="",capture=!1){const deviceProps=EVENT_TYPE_MAP[device],actionKey=deviceProps&&deviceProps[action]||action;return"on"+capitalize(device)+capitalize(actionKey)+(function hasCapture(capture=!1,actionKey){return capture&&!actionsWithoutCaptureSupported.includes(actionKey)}(capture,actionKey)?"Capture":"")}const pointerCaptureEvents=["gotpointercapture","lostpointercapture"];function parseProp(prop){let eventKey=prop.substring(2).toLowerCase();const passive=!!~eventKey.indexOf("passive");passive&&(eventKey=eventKey.replace("passive",""));const captureKey=pointerCaptureEvents.includes(eventKey)?"capturecapture":"capture",capture=!!~eventKey.indexOf(captureKey);return capture&&(eventKey=eventKey.replace("capture","")),{device:eventKey,capture,passive}}function isTouch(event){return"touches"in event}function getPointerType(event){return isTouch(event)?"touch":"pointerType"in event?event.pointerType:"mouse"}function getValueEvent(event){return isTouch(event)?function getTouchList(event){return"touchend"===event.type||"touchcancel"===event.type?event.changedTouches:event.targetTouches}(event)[0]:event}function touchIds(event){return function getCurrentTargetTouchList(event){return Array.from(event.touches).filter((e=>{var _event$currentTarget,_event$currentTarget$;return e.target===event.currentTarget||(null===(_event$currentTarget=event.currentTarget)||void 0===_event$currentTarget||null===(_event$currentTarget$=_event$currentTarget.contains)||void 0===_event$currentTarget$?void 0:_event$currentTarget$.call(_event$currentTarget,e.target))}))}(event).map((touch=>touch.identifier))}function pointerId(event){const valueEvent=getValueEvent(event);return isTouch(event)?valueEvent.identifier:valueEvent.pointerId}function pointerValues(event){const valueEvent=getValueEvent(event);return[valueEvent.clientX,valueEvent.clientY]}function call(v,...args){return"function"==typeof v?v(...args):v}function noop(){}function chain(...fns){return 0===fns.length?noop:1===fns.length?fns[0]:function(){let result;for(const fn of fns)result=fn.apply(this,arguments)||result;return result}}function assignDefault(value,fallback){return Object.assign({},fallback,value||{})}class Engine{constructor(ctrl,args,key){this.ctrl=ctrl,this.args=args,this.key=key,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(state){this.ctrl.state[this.key]=state}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state,shared,ingKey,args}=this;shared[ingKey]=state._active=state.active=state._blocked=state._force=!1,state._step=[!1,!1],state.intentional=!1,state._movement=[0,0],state._distance=[0,0],state._direction=[0,0],state._delta=[0,0],state._bounds=[[-1/0,1/0],[-1/0,1/0]],state.args=args,state.axis=void 0,state.memo=void 0,state.elapsedTime=state.timeDelta=0,state.direction=[0,0],state.distance=[0,0],state.overflow=[0,0],state._movementBound=[!1,!1],state.velocity=[0,0],state.movement=[0,0],state.delta=[0,0],state.timeStamp=0}start(event){const state=this.state,config=this.config;state._active||(this.reset(),this.computeInitial(),state._active=!0,state.target=event.target,state.currentTarget=event.currentTarget,state.lastOffset=config.from?call(config.from,state):state.offset,state.offset=state.lastOffset,state.startTime=state.timeStamp=event.timeStamp)}computeValues(values){const state=this.state;state._values=values,state.values=this.config.transform(values)}computeInitial(){const state=this.state;state._initial=state._values,state.initial=state.values}compute(event){const{state,config,shared}=this;state.args=this.args;let dt=0;if(event&&(state.event=event,config.preventDefault&&event.cancelable&&state.event.preventDefault(),state.type=event.type,shared.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,shared.locked=!!document.pointerLockElement,Object.assign(shared,function getEventDetails(event){const payload={};if("buttons"in event&&(payload.buttons=event.buttons),"shiftKey"in event){const{shiftKey,altKey,metaKey,ctrlKey}=event;Object.assign(payload,{shiftKey,altKey,metaKey,ctrlKey})}return payload}(event)),shared.down=shared.pressed=shared.buttons%2==1||shared.touches>0,dt=event.timeStamp-state.timeStamp,state.timeStamp=event.timeStamp,state.elapsedTime=state.timeStamp-state.startTime),state._active){const _absoluteDelta=state._delta.map(Math.abs);V.addTo(state._distance,_absoluteDelta)}this.axisIntent&&this.axisIntent(event);const[_m0,_m1]=state._movement,[t0,t1]=config.threshold,{_step,values}=state;if(config.hasCustomTransform?(!1===_step[0]&&(_step[0]=Math.abs(_m0)>=t0&&values[0]),!1===_step[1]&&(_step[1]=Math.abs(_m1)>=t1&&values[1])):(!1===_step[0]&&(_step[0]=Math.abs(_m0)>=t0&&Math.sign(_m0)*t0),!1===_step[1]&&(_step[1]=Math.abs(_m1)>=t1&&Math.sign(_m1)*t1)),state.intentional=!1!==_step[0]||!1!==_step[1],!state.intentional)return;const movement=[0,0];if(config.hasCustomTransform){const[v0,v1]=values;movement[0]=!1!==_step[0]?v0-_step[0]:0,movement[1]=!1!==_step[1]?v1-_step[1]:0}else movement[0]=!1!==_step[0]?_m0-_step[0]:0,movement[1]=!1!==_step[1]?_m1-_step[1]:0;this.restrictToAxis&&!state._blocked&&this.restrictToAxis(movement);const previousOffset=state.offset,gestureIsActive=state._active&&!state._blocked||state.active;gestureIsActive&&(state.first=state._active&&!state.active,state.last=!state._active&&state.active,state.active=shared[this.ingKey]=state._active,event&&(state.first&&("bounds"in config&&(state._bounds=call(config.bounds,state)),this.setup&&this.setup()),state.movement=movement,this.computeOffset()));const[ox,oy]=state.offset,[[x0,x1],[y0,y1]]=state._bounds;state.overflow=[ox<x0?-1:ox>x1?1:0,oy<y0?-1:oy>y1?1:0],state._movementBound[0]=!!state.overflow[0]&&(!1===state._movementBound[0]?state._movement[0]:state._movementBound[0]),state._movementBound[1]=!!state.overflow[1]&&(!1===state._movementBound[1]?state._movement[1]:state._movementBound[1]);const rubberband=state._active&&config.rubberband||[0,0];if(state.offset=function computeRubberband(bounds,[Vx,Vy],[Rx,Ry]){const[[X0,X1],[Y0,Y1]]=bounds;return[rubberbandIfOutOfBounds(Vx,X0,X1,Rx),rubberbandIfOutOfBounds(Vy,Y0,Y1,Ry)]}(state._bounds,state.offset,rubberband),state.delta=V.sub(state.offset,previousOffset),this.computeMovement(),gestureIsActive&&(!state.last||dt>32)){state.delta=V.sub(state.offset,previousOffset);const absoluteDelta=state.delta.map(Math.abs);V.addTo(state.distance,absoluteDelta),state.direction=state.delta.map(Math.sign),state._direction=state._delta.map(Math.sign),!state.first&&dt>0&&(state.velocity=[absoluteDelta[0]/dt,absoluteDelta[1]/dt],state.timeDelta=dt)}}emit(){const state=this.state,shared=this.shared,config=this.config;if(state._active||this.clean(),(state._blocked||!state.intentional)&&!state._force&&!config.triggerAllEvents)return;const memo=this.handler(_objectSpread2(_objectSpread2(_objectSpread2({},shared),state),{},{[this.aliasKey]:state.values}));void 0!==memo&&(state.memo=memo)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}class CoordinatesEngine extends Engine{constructor(...args){super(...args),_defineProperty(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=V.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=V.sub(this.state.offset,this.state.lastOffset)}axisIntent(event){const state=this.state,config=this.config;if(!state.axis&&event){const threshold="object"==typeof config.axisThreshold?config.axisThreshold[getPointerType(event)]:config.axisThreshold;state.axis=function selectAxis([dx,dy],threshold){const absDx=Math.abs(dx),absDy=Math.abs(dy);return absDx>absDy&&absDx>threshold?"x":absDy>absDx&&absDy>threshold?"y":void 0}(state._movement,threshold)}state._blocked=(config.lockDirection||!!config.axis)&&!state.axis||!!config.axis&&config.axis!==state.axis}restrictToAxis(v){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":v[1]=0;break;case"y":v[0]=0}}}const identity=v=>v,commonConfigResolver={enabled:(value=!0)=>value,eventOptions:(value,_k,config)=>_objectSpread2(_objectSpread2({},config.shared.eventOptions),value),preventDefault:(value=!1)=>value,triggerAllEvents:(value=!1)=>value,rubberband(value=0){switch(value){case!0:return[.15,.15];case!1:return[0,0];default:return V.toVector(value)}},from:value=>"function"==typeof value?value:null!=value?V.toVector(value):void 0,transform(value,_k,config){const transform=value||config.shared.transform;return this.hasCustomTransform=!!transform,transform||identity},threshold:value=>V.toVector(value,0)};const coordinatesConfigResolver=_objectSpread2(_objectSpread2({},commonConfigResolver),{},{axis(_v,_k,{axis}){if(this.lockDirection="lock"===axis,!this.lockDirection)return axis},axisThreshold:(value=0)=>value,bounds(value={}){if("function"==typeof value)return state=>coordinatesConfigResolver.bounds(value(state));if("current"in value)return()=>value.current;if("function"==typeof HTMLElement&&value instanceof HTMLElement)return value;const{left=-1/0,right=1/0,top=-1/0,bottom=1/0}=value;return[[left,right],[top,bottom]]}}),KEYS_DELTA_MAP={ArrowRight:(displacement,factor=1)=>[displacement*factor,0],ArrowLeft:(displacement,factor=1)=>[-1*displacement*factor,0],ArrowUp:(displacement,factor=1)=>[0,-1*displacement*factor],ArrowDown:(displacement,factor=1)=>[0,displacement*factor]};const isBrowser="undefined"!=typeof window&&window.document&&window.document.createElement;function supportsTouchEvents(){return isBrowser&&"ontouchstart"in window}const SUPPORT={isBrowser,gesture:function supportsGestureEvents(){try{return"constructor"in GestureEvent}catch(e){return!1}}(),touch:supportsTouchEvents(),touchscreen:function isTouchScreen(){return supportsTouchEvents()||isBrowser&&window.navigator.maxTouchPoints>1}(),pointer:function supportsPointerEvents(){return isBrowser&&"onpointerdown"in window}(),pointerLock:function supportsPointerLock(){return isBrowser&&"exitPointerLock"in window.document}()},DEFAULT_DRAG_AXIS_THRESHOLD={mouse:0,touch:0,pen:8},dragConfigResolver=_objectSpread2(_objectSpread2({},coordinatesConfigResolver),{},{device(_v,_k,{pointer:{touch=!1,lock=!1,mouse=!1}={}}){return this.pointerLock=lock&&SUPPORT.pointerLock,SUPPORT.touch&&touch?"touch":this.pointerLock?"mouse":SUPPORT.pointer&&!mouse?"pointer":SUPPORT.touch?"touch":"mouse"},preventScrollAxis(value,_k,{preventScroll}){if(this.preventScrollDelay="number"==typeof preventScroll?preventScroll:preventScroll||void 0===preventScroll&&value?250:void 0,SUPPORT.touchscreen&&!1!==preventScroll)return value||(void 0!==preventScroll?"y":void 0)},pointerCapture(_v,_k,{pointer:{capture=!0,buttons=1,keys=!0}={}}){return this.pointerButtons=buttons,this.keys=keys,!this.pointerLock&&"pointer"===this.device&&capture},threshold(value,_k,{filterTaps=!1,tapsThreshold=3,axis}){const threshold=V.toVector(value,filterTaps?tapsThreshold:axis?1:0);return this.filterTaps=filterTaps,this.tapsThreshold=tapsThreshold,threshold},swipe({velocity=.5,distance=50,duration=250}={}){return{velocity:this.transform(V.toVector(velocity)),distance:this.transform(V.toVector(distance)),duration}},delay(value=0){switch(value){case!0:return 180;case!1:return 0;default:return value}},axisThreshold:value=>value?_objectSpread2(_objectSpread2({},DEFAULT_DRAG_AXIS_THRESHOLD),value):DEFAULT_DRAG_AXIS_THRESHOLD,keyboardDisplacement:(value=10)=>value});_objectSpread2(_objectSpread2({},commonConfigResolver),{},{device(_v,_k,{shared,pointer:{touch=!1}={}}){if(shared.target&&!SUPPORT.touch&&SUPPORT.gesture)return"gesture";if(SUPPORT.touch&&touch)return"touch";if(SUPPORT.touchscreen){if(SUPPORT.pointer)return"pointer";if(SUPPORT.touch)return"touch"}},bounds(_v,_k,{scaleBounds={},angleBounds={}}){const _scaleBounds=state=>{const D=assignDefault(call(scaleBounds,state),{min:-1/0,max:1/0});return[D.min,D.max]},_angleBounds=state=>{const A=assignDefault(call(angleBounds,state),{min:-1/0,max:1/0});return[A.min,A.max]};return"function"!=typeof scaleBounds&&"function"!=typeof angleBounds?[_scaleBounds(),_angleBounds()]:state=>[_scaleBounds(state),_angleBounds(state)]},threshold(value,_k,config){this.lockDirection="lock"===config.axis;return V.toVector(value,this.lockDirection?[.1,3]:0)},modifierKey:value=>void 0===value?"ctrlKey":value,pinchOnWheel:(value=!0)=>value});_objectSpread2(_objectSpread2({},coordinatesConfigResolver),{},{mouseOnly:(value=!0)=>value});_objectSpread2(_objectSpread2({},coordinatesConfigResolver),{},{mouseOnly:(value=!0)=>value});const actions_fe213e88_esm_EngineMap=new Map,ConfigResolverMap=new Map;const actions_fe213e88_esm_dragAction={key:"drag",engine:class DragEngine extends CoordinatesEngine{constructor(...args){super(...args),_defineProperty(this,"ingKey","dragging")}reset(){super.reset();const state=this.state;state._pointerId=void 0,state._pointerActive=!1,state._keyboardActive=!1,state._preventScroll=!1,state._delayed=!1,state.swipe=[0,0],state.tap=!1,state.canceled=!1,state.cancel=this.cancel.bind(this)}setup(){const state=this.state;if(state._bounds instanceof HTMLElement){const boundRect=state._bounds.getBoundingClientRect(),targetRect=state.currentTarget.getBoundingClientRect(),_bounds={left:boundRect.left-targetRect.left+state.offset[0],right:boundRect.right-targetRect.right+state.offset[0],top:boundRect.top-targetRect.top+state.offset[1],bottom:boundRect.bottom-targetRect.bottom+state.offset[1]};state._bounds=coordinatesConfigResolver.bounds(_bounds)}}cancel(){const state=this.state;state.canceled||(state.canceled=!0,state._active=!1,setTimeout((()=>{this.compute(),this.emit()}),0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(event){const config=this.config,state=this.state;if(null!=event.buttons&&(Array.isArray(config.pointerButtons)?!config.pointerButtons.includes(event.buttons):-1!==config.pointerButtons&&config.pointerButtons!==event.buttons))return;const ctrlIds=this.ctrl.setEventIds(event);config.pointerCapture&&event.target.setPointerCapture(event.pointerId),ctrlIds&&ctrlIds.size>1&&state._pointerActive||(this.start(event),this.setupPointer(event),state._pointerId=pointerId(event),state._pointerActive=!0,this.computeValues(pointerValues(event)),this.computeInitial(),config.preventScrollAxis&&"mouse"!==getPointerType(event)?(state._active=!1,this.setupScrollPrevention(event)):config.delay>0?(this.setupDelayTrigger(event),config.triggerAllEvents&&(this.compute(event),this.emit())):this.startPointerDrag(event))}startPointerDrag(event){const state=this.state;state._active=!0,state._preventScroll=!0,state._delayed=!1,this.compute(event),this.emit()}pointerMove(event){const state=this.state,config=this.config;if(!state._pointerActive)return;const id=pointerId(event);if(void 0!==state._pointerId&&id!==state._pointerId)return;const _values=pointerValues(event);return document.pointerLockElement===event.target?state._delta=[event.movementX,event.movementY]:(state._delta=V.sub(_values,state._values),this.computeValues(_values)),V.addTo(state._movement,state._delta),this.compute(event),state._delayed&&state.intentional?(this.timeoutStore.remove("dragDelay"),state.active=!1,void this.startPointerDrag(event)):config.preventScrollAxis&&!state._preventScroll?state.axis?state.axis===config.preventScrollAxis||"xy"===config.preventScrollAxis?(state._active=!1,void this.clean()):(this.timeoutStore.remove("startPointerDrag"),void this.startPointerDrag(event)):void 0:void this.emit()}pointerUp(event){this.ctrl.setEventIds(event);try{this.config.pointerCapture&&event.target.hasPointerCapture(event.pointerId)&&event.target.releasePointerCapture(event.pointerId)}catch(_unused){0}const state=this.state,config=this.config;if(!state._active||!state._pointerActive)return;const id=pointerId(event);if(void 0!==state._pointerId&&id!==state._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(event);const[dx,dy]=state._distance;if(state.tap=dx<=config.tapsThreshold&&dy<=config.tapsThreshold,state.tap&&config.filterTaps)state._force=!0;else{const[_dx,_dy]=state._delta,[_mx,_my]=state._movement,[svx,svy]=config.swipe.velocity,[sx,sy]=config.swipe.distance,sdt=config.swipe.duration;if(state.elapsedTime<sdt){const _vx=Math.abs(_dx/state.timeDelta),_vy=Math.abs(_dy/state.timeDelta);_vx>svx&&Math.abs(_mx)>sx&&(state.swipe[0]=Math.sign(_dx)),_vy>svy&&Math.abs(_my)>sy&&(state.swipe[1]=Math.sign(_dy))}}this.emit()}pointerClick(event){!this.state.tap&&event.detail>0&&(event.preventDefault(),event.stopPropagation())}setupPointer(event){const config=this.config,device=config.device;config.pointerLock&&event.currentTarget.requestPointerLock(),config.pointerCapture||(this.eventStore.add(this.sharedConfig.window,device,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,device,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,device,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(event){this.state._preventScroll&&event.cancelable&&event.preventDefault()}setupScrollPrevention(event){this.state._preventScroll=!1,function persistEvent(event){"persist"in event&&"function"==typeof event.persist&&event.persist()}(event);const remove=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",remove),this.eventStore.add(this.sharedConfig.window,"touch","cancel",remove),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,event)}setupDelayTrigger(event){this.state._delayed=!0,this.timeoutStore.add("dragDelay",(()=>{this.state._step=[0,0],this.startPointerDrag(event)}),this.config.delay)}keyDown(event){const deltaFn=KEYS_DELTA_MAP[event.key];if(deltaFn){const state=this.state,factor=event.shiftKey?10:event.altKey?.1:1;this.start(event),state._delta=deltaFn(this.config.keyboardDisplacement,factor),state._keyboardActive=!0,V.addTo(state._movement,state._delta),this.compute(event),this.emit()}}keyUp(event){event.key in KEYS_DELTA_MAP&&(this.state._keyboardActive=!1,this.setActive(),this.compute(event),this.emit())}bind(bindFunction){const device=this.config.device;bindFunction(device,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(bindFunction(device,"change",this.pointerMove.bind(this)),bindFunction(device,"end",this.pointerUp.bind(this)),bindFunction(device,"cancel",this.pointerUp.bind(this)),bindFunction("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(bindFunction("key","down",this.keyDown.bind(this)),bindFunction("key","up",this.keyUp.bind(this))),this.config.filterTaps&&bindFunction("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}},resolver:dragConfigResolver};var react=__webpack_require__("./node_modules/react/index.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const sharedConfigResolver={target(value){if(value)return()=>"current"in value?value.current:value},enabled:(value=!0)=>value,window:(value=(SUPPORT.isBrowser?window:void 0))=>value,eventOptions:({passive=!0,capture=!1}={})=>({passive,capture}),transform:value=>value},_excluded=["target","eventOptions","window","enabled","transform"];function resolveWith(config={},resolvers){const result={};for(const[key,resolver]of Object.entries(resolvers))switch(typeof resolver){case"function":result[key]=resolver.call(result,config[key],key,config);break;case"object":result[key]=resolveWith(config[key],resolver);break;case"boolean":resolver&&(result[key]=config[key])}return result}class EventStore{constructor(ctrl,gestureKey){_defineProperty(this,"_listeners",new Set),this._ctrl=ctrl,this._gestureKey=gestureKey}add(element,device,action,handler,options){const listeners=this._listeners,type=function toDomEventType(device,action=""){const deviceProps=EVENT_TYPE_MAP[device];return device+(deviceProps&&deviceProps[action]||action)}(device,action),eventOptions=_objectSpread2(_objectSpread2({},this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{}),options);element.addEventListener(type,handler,eventOptions);const remove=()=>{element.removeEventListener(type,handler,eventOptions),listeners.delete(remove)};return listeners.add(remove),remove}clean(){this._listeners.forEach((remove=>remove())),this._listeners.clear()}}class TimeoutStore{constructor(){_defineProperty(this,"_timeouts",new Map)}add(key,callback,ms=140,...args){this.remove(key),this._timeouts.set(key,window.setTimeout(callback,ms,...args))}remove(key){const timeout=this._timeouts.get(key);timeout&&window.clearTimeout(timeout)}clean(){this._timeouts.forEach((timeout=>{window.clearTimeout(timeout)})),this._timeouts.clear()}}class Controller{constructor(handlers){_defineProperty(this,"gestures",new Set),_defineProperty(this,"_targetEventStore",new EventStore(this)),_defineProperty(this,"gestureEventStores",{}),_defineProperty(this,"gestureTimeoutStores",{}),_defineProperty(this,"handlers",{}),_defineProperty(this,"config",{}),_defineProperty(this,"pointerIds",new Set),_defineProperty(this,"touchIds",new Set),_defineProperty(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),function resolveGestures(ctrl,internalHandlers){internalHandlers.drag&&setupGesture(ctrl,"drag");internalHandlers.wheel&&setupGesture(ctrl,"wheel");internalHandlers.scroll&&setupGesture(ctrl,"scroll");internalHandlers.move&&setupGesture(ctrl,"move");internalHandlers.pinch&&setupGesture(ctrl,"pinch");internalHandlers.hover&&setupGesture(ctrl,"hover")}(this,handlers)}setEventIds(event){return isTouch(event)?(this.touchIds=new Set(touchIds(event)),this.touchIds):"pointerId"in event?("pointerup"===event.type||"pointercancel"===event.type?this.pointerIds.delete(event.pointerId):"pointerdown"===event.type&&this.pointerIds.add(event.pointerId),this.pointerIds):void 0}applyHandlers(handlers,nativeHandlers){this.handlers=handlers,this.nativeHandlers=nativeHandlers}applyConfig(config,gestureKey){this.config=function parse(newConfig,gestureKey,_config={}){const _ref=newConfig,{target,eventOptions,window,enabled,transform}=_ref,rest=_objectWithoutProperties(_ref,_excluded);if(_config.shared=resolveWith({target,eventOptions,window,enabled,transform},sharedConfigResolver),gestureKey){const resolver=ConfigResolverMap.get(gestureKey);_config[gestureKey]=resolveWith(_objectSpread2({shared:_config.shared},rest),resolver)}else for(const key in rest){const resolver=ConfigResolverMap.get(key);resolver&&(_config[key]=resolveWith(_objectSpread2({shared:_config.shared},rest[key]),resolver))}return _config}(config,gestureKey,this.config)}clean(){this._targetEventStore.clean();for(const key of this.gestures)this.gestureEventStores[key].clean(),this.gestureTimeoutStores[key].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...args){const sharedConfig=this.config.shared,props={};let target;if(!sharedConfig.target||(target=sharedConfig.target(),target)){if(sharedConfig.enabled){for(const gestureKey of this.gestures){const gestureConfig=this.config[gestureKey],bindFunction=bindToProps(props,gestureConfig.eventOptions,!!target);if(gestureConfig.enabled){new(actions_fe213e88_esm_EngineMap.get(gestureKey))(this,args,gestureKey).bind(bindFunction)}}const nativeBindFunction=bindToProps(props,sharedConfig.eventOptions,!!target);for(const eventKey in this.nativeHandlers)nativeBindFunction(eventKey,"",(event=>this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({},this.state.shared),{},{event,args}))),void 0,!0)}for(const handlerProp in props)props[handlerProp]=chain(...props[handlerProp]);if(!target)return props;for(const handlerProp in props){const{device,capture,passive}=parseProp(handlerProp);this._targetEventStore.add(target,device,"",props[handlerProp],{capture,passive})}}}}function setupGesture(ctrl,gestureKey){ctrl.gestures.add(gestureKey),ctrl.gestureEventStores[gestureKey]=new EventStore(ctrl,gestureKey),ctrl.gestureTimeoutStores[gestureKey]=new TimeoutStore}const bindToProps=(props,eventOptions,withPassiveOption)=>(device,action,handler,options={},isNative=!1)=>{var _options$capture,_options$passive;const capture=null!==(_options$capture=options.capture)&&void 0!==_options$capture?_options$capture:eventOptions.capture,passive=null!==(_options$passive=options.passive)&&void 0!==_options$passive?_options$passive:eventOptions.passive;let handlerProp=isNative?device:toHandlerProp(device,action,capture);withPassiveOption&&passive&&(handlerProp+="Passive"),props[handlerProp]=props[handlerProp]||[],props[handlerProp].push(handler)};function useRecognizers(handlers,config={},gestureKey,nativeHandlers){const ctrl=react.useMemo((()=>new Controller(handlers)),[]);if(ctrl.applyHandlers(handlers,nativeHandlers),ctrl.applyConfig(config,gestureKey),react.useEffect(ctrl.effect.bind(ctrl)),react.useEffect((()=>ctrl.clean.bind(ctrl)),[]),void 0===config.target)return ctrl.bind.bind(ctrl)}function useDrag(handler,config){return function actions_fe213e88_esm_registerAction(action){actions_fe213e88_esm_EngineMap.set(action.key,action.engine),ConfigResolverMap.set(action.key,action.resolver)}(actions_fe213e88_esm_dragAction),useRecognizers({drag:handler},config||{},"drag")}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])}}]);
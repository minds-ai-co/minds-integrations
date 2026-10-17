const Rl=globalThis.__MINDS_WIDGET_VUE__;if(!Rl)throw new Error("The Minds widget Vue runtime is not available");const{BaseTransition:RS,BaseTransitionPropsValidators:PS,Comment:LS,DeprecationTypes:IS,EffectScope:DS,ErrorCodes:NS,ErrorTypeStrings:US,Fragment:Pl,KeepAlive:OS,ReactiveEffect:FS,Static:kS,Suspense:zS,Teleport:BS,Text:uh,TrackOpTypes:HS,Transition:VS,TransitionGroup:GS,TriggerOpTypes:WS,VueElement:XS,__esModule:jS,assertNumber:YS,callWithAsyncErrorHandling:qS,callWithErrorHandling:ZS,camelize:JS,capitalize:KS,cloneVNode:$S,compatUtils:QS,compile:eM,computed:Kt,createApp:tM,createBlock:iM,createCommentVNode:dh,createElementBlock:hs,createElementVNode:hh,createHydrationRenderer:rM,createPropsRestProxy:aM,createRenderer:nM,createSSRApp:sM,createSlots:oM,createStaticVNode:lM,createTextVNode:cM,createVNode:ph,customRef:uM,defineAsyncComponent:dM,defineComponent:Ll,defineCustomElement:hM,defineEmits:pM,defineExpose:fM,defineModel:mM,defineOptions:gM,defineProps:_M,defineSSRCustomElement:vM,defineSlots:xM,devtools:yM,effect:SM,effectScope:MM,getCurrentInstance:ba,getCurrentScope:fh,getCurrentWatcher:bM,getTransitionRawChildren:EM,guardReactiveProps:TM,h:mh,handleError:wM,hasInjectionContext:Il,hydrate:AM,hydrateOnIdle:CM,hydrateOnInteraction:RM,hydrateOnMediaQuery:PM,hydrateOnVisible:LM,initCustomFormatter:IM,initDirectivesForSSR:DM,inject:tn,isMemoSame:NM,isProxy:UM,isReactive:OM,isReadonly:FM,isRef:kM,isRuntimeOnly:zM,isShallow:BM,isVNode:HM,markRaw:VM,mergeDefaults:Dl,mergeModels:GM,mergeProps:WM,nextTick:gh,nodeOps:XM,normalizeClass:Nl,normalizeProps:jM,normalizeStyle:_h,onActivated:YM,onBeforeMount:qM,onBeforeUnmount:ZM,onBeforeUpdate:JM,onDeactivated:KM,onErrorCaptured:$M,onMounted:rn,onRenderTracked:QM,onRenderTriggered:eb,onScopeDispose:tb,onServerPrefetch:ib,onUnmounted:ps,onUpdated:rb,onWatcherCleanup:ab,openBlock:fs,patchProp:nb,popScopeId:sb,provide:ob,proxyRefs:lb,pushScopeId:cb,queuePostFlushCb:ub,reactive:db,readonly:hb,ref:Fi,registerRuntimeCompiler:pb,render:fb,renderList:mb,renderSlot:gb,resolveComponent:_b,resolveDirective:vb,resolveDynamicComponent:xb,resolveFilter:yb,resolveTransitionHooks:Sb,setBlockTracking:Mb,setDevtoolsHook:bb,setTransitionHooks:Eb,shallowReactive:Tb,shallowReadonly:wb,shallowRef:Ea,ssrContextKey:Ab,ssrUtils:Cb,stop:Rb,toDisplayString:vh,toHandlerKey:Pb,toHandlers:Lb,toRaw:Ib,toRef:Db,toRefs:Nb,toValue:zr,transformVNodeArgs:Ub,triggerRef:Ob,unref:an,useAttrs:Fb,useCssModule:kb,useCssVars:zb,useHost:Bb,useId:Hb,useModel:Vb,useSSRContext:Gb,useShadowRoot:Wb,useSlots:Xb,useTemplateRef:jb,useTransitionState:Yb,vModelCheckbox:qb,vModelDynamic:Zb,vModelRadio:Jb,vModelSelect:Kb,vModelText:$b,vShow:Qb,version:eE,warn:tE,watch:Yt,watchEffect:xh,watchPostEffect:iE,watchSyncEffect:rE,withAsyncContext:aE,withCtx:nE,withDefaults:sE,withDirectives:oE,withKeys:lE,withMemo:cE,withModifiers:uE,withScopeId:dE}=Rl,ms="178",yh=0,Ul=1,Sh=2,Ol=1,Mh=2,ki=3,tr=0,si=1,bi=2,ir=0,Br=1,Fl=2,kl=3,zl=4,bh=5,xr=100,Eh=101,Th=102,wh=103,Ah=104,Ch=200,Rh=201,Ph=202,Lh=203,gs=204,_s=205,Ih=206,Dh=207,Nh=208,Uh=209,Oh=210,Fh=211,kh=212,zh=213,Bh=214,vs=0,xs=1,ys=2,Hr=3,Ss=4,Ms=5,bs=6,Es=7,Bl=0,Hh=1,Vh=2,rr=0,Gh=1,Wh=2,Xh=3,jh=4,Yh=5,qh=6,Zh=7,Hl=300,Vr=301,Gr=302,Ts=303,ws=304,nn=306,As=1e3,yr=1001,Cs=1002,Bt=1003,Jh=1004,sn=1005,Pi=1006,Rs=1007,Sr=1008,Li=1009,Vl=1010,Gl=1011,Ta=1012,Ps=1013,Mr=1014,fi=1015,wa=1016,Ls=1017,Is=1018,Aa=1020,Wl=35902,Xl=1021,jl=1022,oi=1023,Ca=1026,Ra=1027,Yl=1028,Ds=1029,ql=1030,Ns=1031,Us=1033,on=33776,ln=33777,cn=33778,un=33779,Os=35840,Fs=35841,ks=35842,zs=35843,Bs=36196,Hs=37492,Vs=37496,Gs=37808,Ws=37809,Xs=37810,js=37811,Ys=37812,qs=37813,Zs=37814,Js=37815,Ks=37816,$s=37817,Qs=37818,eo=37819,to=37820,io=37821,dn=36492,ro=36494,ao=36495,Zl=36283,no=36284,so=36285,oo=36286,Kh=3200,$h=3201,Qh=0,ep=1,ar="",mi="srgb",Wr="srgb-linear",hn="linear",wt="srgb",Xr=7680,Jl=519,tp=512,ip=513,rp=514,Kl=515,ap=516,np=517,sp=518,op=519,$l=35044,lp=35048,Ql="300 es",zi=2e3,pn=2001;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const n=a.indexOf(t);n!==-1&&a.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let n=0,s=a.length;n<s;n++)a[n].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const Pa=Math.PI/180,La=180/Math.PI;function Yr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function lo(i,e){return(i%e+e)%e}function cp(i,e,t,r,a){return r+(i-e)*(a-r)/(t-e)}function up(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function dp(i,e,t,r){return Ia(i,e,1-Math.exp(-t*r))}function hp(i,e=1){return e-Math.abs(lo(i,e*2)-e)}function pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gp(i,e){return i+Math.random()*(e-i)}function _p(i){return i*(.5-Math.random())}function vp(i){i!==void 0&&(ec=i);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(i){return i*Pa}function yp(i){return i*La}function Sp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ep(i,e,t,r,a){const n=Math.cos,s=Math.sin,o=n(t/2),l=s(t/2),c=n((e+r)/2),d=s((e+r)/2),p=n((e-r)/2),h=s((e-r)/2),m=n((r-e)/2),g=s((r-e)/2);switch(a){case"XYX":i.set(o*d,l*p,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*p,o*c);break;case"ZXZ":i.set(l*p,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function qr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tc={DEG2RAD:Pa,RAD2DEG:La,generateUUID:Yr,clamp:pt,euclideanModulo:lo,mapLinear:cp,inverseLerp:up,lerp:Ia,damp:dp,pingpong:hp,smoothstep:pp,smootherstep:fp,randInt:mp,randFloat:gp,randFloatSpread:_p,seededRandom:vp,degToRad:xp,radToDeg:yp,isPowerOfTwo:Sp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:Ep,normalize:ri,denormalize:qr};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*a+e.x,this.y=n*a+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,n,s,o){let l=r[a+0],c=r[a+1],d=r[a+2],p=r[a+3];const h=n[s+0],m=n[s+1],g=n[s+2],v=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==h||c!==m||d!==g){let f=1-o;const u=l*h+c*m+d*g+p*v,S=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,u*S);f=Math.sin(f*A)/R,o=Math.sin(o*A)/R}const _=o*S;if(l=l*f+h*_,c=c*f+m*_,d=d*f+g*_,p=p*f+v*_,f===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=R,c*=R,d*=R,p*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,r,a,n,s){const o=r[a],l=r[a+1],c=r[a+2],d=r[a+3],p=n[s],h=n[s+1],m=n[s+2],g=n[s+3];return e[t]=o*g+d*p+l*m-c*h,e[t+1]=l*g+d*h+c*p-o*m,e[t+2]=c*g+d*m+o*h-l*p,e[t+3]=d*g-o*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),d=o(a/2),p=o(n/2),h=l(r/2),m=l(a/2),g=l(n/2);switch(s){case"XYZ":this._x=h*d*p+c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p-h*m*g;break;case"YXZ":this._x=h*d*p+c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p+h*m*g;break;case"ZXY":this._x=h*d*p-c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p-h*m*g;break;case"ZYX":this._x=h*d*p-c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p+h*m*g;break;case"YZX":this._x=h*d*p+c*m*g,this._y=c*m*p+h*d*g,this._z=c*d*g-h*m*p,this._w=c*d*p-h*m*g;break;case"XZY":this._x=h*d*p-c*m*g,this._y=c*m*p-h*d*g,this._z=c*d*g+h*m*p,this._w=c*d*p+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=r+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(n-c)*m,this._z=(s-a)*m}else if(r>o&&r>p){const m=2*Math.sqrt(1+r-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(n+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-r-p);this._w=(n-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-r-o);this._w=(s-a)/m,this._x=(n+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=r*d+s*o+a*c-n*l,this._y=a*d+s*l+n*o-r*c,this._z=n*d+s*c+r*l-a*o,this._w=s*d-r*o-a*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,n=this._z,s=this._w;let o=s*e._w+r*e._x+a*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=a,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*a+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),p=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*p+this._w*h,this._x=r*p+this._x*h,this._y=a*p+this._y*h,this._z=n*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*a,this.y=n[1]*t+n[4]*r+n[7]*a,this.z=n[2]*t+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*r),d=2*(o*t-n*a),p=2*(n*r-s*t);return this.x=t+l*c+s*p-o*d,this.y=r+l*d+o*c-n*p,this.z=a+l*p+n*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a,this.y=n[1]*t+n[5]*r+n[9]*a,this.z=n[2]*t+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new B,ic=new Zr;class nt{constructor(e,t,r,a,n,s,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c)}set(e,t,r,a,n,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=n,d[5]=l,d[6]=r,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],d=r[4],p=r[7],h=r[2],m=r[5],g=r[8],v=a[0],f=a[3],u=a[6],S=a[1],b=a[4],_=a[7],R=a[2],A=a[5],w=a[8];return n[0]=s*v+o*S+l*R,n[3]=s*f+o*b+l*A,n[6]=s*u+o*_+l*w,n[1]=c*v+d*S+p*R,n[4]=c*f+d*b+p*A,n[7]=c*u+d*_+p*w,n[2]=h*v+m*S+g*R,n[5]=h*f+m*b+g*A,n[8]=h*u+m*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-r*n*d+r*o*l+a*n*c-a*s*l}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,h=o*l-d*n,m=c*n-s*l,g=t*p+r*h+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(a*c-d*r)*v,e[2]=(o*r-a*s)*v,e[3]=h*v,e[4]=(d*t-a*l)*v,e[5]=(a*n-o*t)*v,e[6]=m*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new nt;function rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){const i=fn("canvas");return i.style.display="block",i}const ac={};function Jr(i){i in ac||(ac[i]=!0,console.warn(i))}function wp(i,e,t){return new Promise(function(r,a){function n(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}function Ap(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){const i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===wt&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===wt&&(a.r=Kr(a.r),a.g=Kr(a.g),a.b=Kr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ar?hn:this.spaces[a].transfer},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Wr]:{primaries:e,whitePoint:r,transfer:hn,toXYZ:nc,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:wt,toXYZ:nc,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),i}const vt=Rp();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $r;class Pp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=fn("canvas")),$r.width=e.width,$r.height=e.height;const a=$r.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=Bi(n[s]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Bi(t[r]/255)*255):t[r]=Bi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lp=0;class ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(po(a[s].image)):n.push(po(a[s]))}else n=po(a);r.url=n}return t||(e.images[this.uuid]=r),r}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ip=0;const fo=new B;class ni extends jr{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,r=yr,a=yr,n=Pi,s=Sr,o=oi,l=Li,c=ni.DEFAULT_ANISOTROPY,d=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Yr(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fo).x}get height(){return this.source.getSize(fo).y}get depth(){return this.source.getSize(fo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null,ni.DEFAULT_MAPPING=Hl,ni.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,r=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*r+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,n;const s=e.elements,o=s[0],l=s[4],c=s[8],d=s[1],p=s[5],h=s[9],m=s[2],g=s[6],v=s[10];if(Math.abs(l-d)<.01&&Math.abs(c-m)<.01&&Math.abs(h-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+m)<.1&&Math.abs(h+g)<.1&&Math.abs(o+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,S=(p+1)/2,b=(v+1)/2,_=(l+d)/4,R=(c+m)/4,A=(h+g)/4;return u>S&&u>b?u<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(u),a=_/r,n=R/r):S>b?S<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(S),r=_/a,n=A/a):b<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(b),r=R/n,a=A/n),this.set(r,a,n,t),this}let f=Math.sqrt((g-h)*(g-h)+(c-m)*(c-m)+(d-l)*(d-l));return Math.abs(f)<.001&&(f=1),this.x=(g-h)/f,this.y=(c-m)/f,this.z=(d-l)/f,this.w=Math.acos((o+p+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends jr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:r.depth},n=new ni(a);this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends Dp{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class oc extends ni{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Np extends ni{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ei):Ei.fromBufferAttribute(n,s),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mn.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mn.copy(r.boundingBox)),mn.applyMatrix4(e.matrixWorld),this.union(mn)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),gn.subVectors(this.max,Na),Qr.subVectors(e.a,Na),ea.subVectors(e.b,Na),ta.subVectors(e.c,Na),sr.subVectors(ea,Qr),or.subVectors(ta,ea),br.subVectors(Qr,ta);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-br.z,br.y,sr.z,0,-sr.x,or.z,0,-or.x,br.z,0,-br.x,-sr.y,sr.x,0,-or.y,or.x,0,-br.y,br.x,0];return!mo(t,Qr,ea,ta,gn)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Qr,ea,ta,gn))?!1:(_n.crossVectors(sr,or),t=[_n.x,_n.y,_n.z],mo(t,Qr,ea,ta,gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new B,new B,new B,new B,new B,new B,new B,new B],Ei=new B,mn=new Da,Qr=new B,ea=new B,ta=new B,sr=new B,or=new B,br=new B,Na=new B,gn=new B,_n=new B,Er=new B;function mo(i,e,t,r,a){for(let n=0,s=i.length-3;n<=s;n+=3){Er.fromArray(i,n);const o=a.x*Math.abs(Er.x)+a.y*Math.abs(Er.y)+a.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),d=r.dot(Er);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Up=new Da,Ua=new B,go=new B;class ia{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Up.setFromPoints(e).getCenter(r);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ua,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(go)),this.expandByPoint(Ua.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vi=new B,_o=new B,vn=new B,lr=new B,vo=new B,xn=new B,xo=new B;class yn{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){_o.copy(e).add(t).multiplyScalar(.5),vn.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(_o);const n=e.distanceTo(t)*.5,s=-this.direction.dot(vn),o=lr.dot(this.direction),l=-lr.dot(vn),c=lr.lengthSq(),d=Math.abs(1-s*s);let p,h,m,g;if(d>0)if(p=s*l-o,h=s*o-l,g=n*d,p>=0)if(h>=-g)if(h<=g){const v=1/d;p*=v,h*=v,m=p*(p+s*h+2*o)+h*(s*p+h+2*l)+c}else h=n,p=Math.max(0,-(s*h+o)),m=-p*p+h*(h+2*l)+c;else h=-n,p=Math.max(0,-(s*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-s*n+o)),h=p>0?-n:Math.min(Math.max(-n,-l),n),m=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-n,-l),n),m=h*(h+2*l)+c):(p=Math.max(0,-(s*n+o)),h=p>0?n:Math.min(Math.max(-n,-l),n),m=-p*p+h*(h+2*l)+c);else h=s>0?-n:n,p=Math.max(0,-(s*h+o)),m=-p*p+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(_o).addScaledVector(vn,h),m}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const r=Vi.dot(this.direction),a=Vi.dot(Vi)-r*r,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,n,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(n=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(n=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),r>s||n>a||((n>r||isNaN(r))&&(r=n),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),r>l||o>a)||((o>r||r!==r)&&(r=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,r,a,n){vo.subVectors(t,e),xn.subVectors(r,e),xo.crossVectors(vo,xn);let s=this.direction.dot(xo),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(xn.crossVectors(lr,xn));if(l<0)return null;const c=o*this.direction.dot(vo.cross(lr));if(c<0||l+c>s)return null;const d=-o*lr.dot(xo);return d<0?null:this.at(d/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,r,a,n,s,o,l,c,d,p,h,m,g,v,f){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,l,c,d,p,h,m,g,v,f)}set(e,t,r,a,n,s,o,l,c,d,p,h,m,g,v,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=r,u[12]=a,u[1]=n,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=m,u[7]=g,u[11]=v,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ra.setFromMatrixColumn(e,0).length(),n=1/ra.setFromMatrixColumn(e,1).length(),s=1/ra.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,n=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),d=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const h=s*d,m=s*p,g=o*d,v=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*d,m=l*p,g=c*d,v=c*p;t[0]=h+v*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=m*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*d,m=l*p,g=c*d,v=c*p;t[0]=h-v*o,t[4]=-s*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*d,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*d,m=s*p,g=o*d,v=o*p;t[0]=l*d,t[4]=g*c-m,t[8]=h*c+v,t[1]=l*p,t[5]=v*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*p,t[8]=g*p+m,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=s*l,m=s*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+v,t[5]=s*d,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*d,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,Fp)}lookAt(e,t,r){const a=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),cr.crossVectors(r,ci),cr.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),cr.crossVectors(r,ci)),cr.normalize(),Sn.crossVectors(ci,cr),a[0]=cr.x,a[4]=Sn.x,a[8]=ci.x,a[1]=cr.y,a[5]=Sn.y,a[9]=ci.y,a[2]=cr.z,a[6]=Sn.z,a[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],d=r[1],p=r[5],h=r[9],m=r[13],g=r[2],v=r[6],f=r[10],u=r[14],S=r[3],b=r[7],_=r[11],R=r[15],A=a[0],w=a[4],P=a[8],T=a[12],M=a[1],D=a[5],O=a[9],z=a[13],X=a[2],ee=a[6],Y=a[10],ae=a[14],G=a[3],le=a[7],J=a[11],ne=a[15];return n[0]=s*A+o*M+l*X+c*G,n[4]=s*w+o*D+l*ee+c*le,n[8]=s*P+o*O+l*Y+c*J,n[12]=s*T+o*z+l*ae+c*ne,n[1]=d*A+p*M+h*X+m*G,n[5]=d*w+p*D+h*ee+m*le,n[9]=d*P+p*O+h*Y+m*J,n[13]=d*T+p*z+h*ae+m*ne,n[2]=g*A+v*M+f*X+u*G,n[6]=g*w+v*D+f*ee+u*le,n[10]=g*P+v*O+f*Y+u*J,n[14]=g*T+v*z+f*ae+u*ne,n[3]=S*A+b*M+_*X+R*G,n[7]=S*w+b*D+_*ee+R*le,n[11]=S*P+b*O+_*Y+R*J,n[15]=S*T+b*z+_*ae+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],m=e[14],g=e[3],v=e[7],f=e[11],u=e[15];return g*(+n*l*p-a*c*p-n*o*h+r*c*h+a*o*m-r*l*m)+v*(+t*l*m-t*c*h+n*s*h-a*s*m+a*c*d-n*l*d)+f*(+t*c*p-t*o*m-n*s*p+r*s*m+n*o*d-r*c*d)+u*(-a*o*d-t*l*p+t*o*h+a*s*p-r*s*h+r*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],m=e[11],g=e[12],v=e[13],f=e[14],u=e[15],S=p*f*c-v*h*c+v*l*m-o*f*m-p*l*u+o*h*u,b=g*h*c-d*f*c-g*l*m+s*f*m+d*l*u-s*h*u,_=d*v*c-g*p*c+g*o*m-s*v*m-d*o*u+s*p*u,R=g*p*l-d*v*l-g*o*h+s*v*h+d*o*f-s*p*f,A=t*S+r*b+a*_+n*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(v*h*n-p*f*n-v*a*m+r*f*m+p*a*u-r*h*u)*w,e[2]=(o*f*n-v*l*n+v*a*c-r*f*c-o*a*u+r*l*u)*w,e[3]=(p*l*n-o*h*n-p*a*c+r*h*c+o*a*m-r*l*m)*w,e[4]=b*w,e[5]=(d*f*n-g*h*n+g*a*m-t*f*m-d*a*u+t*h*u)*w,e[6]=(g*l*n-s*f*n-g*a*c+t*f*c+s*a*u-t*l*u)*w,e[7]=(s*h*n-d*l*n+d*a*c-t*h*c-s*a*m+t*l*m)*w,e[8]=_*w,e[9]=(g*p*n-d*v*n-g*r*m+t*v*m+d*r*u-t*p*u)*w,e[10]=(s*v*n-g*o*n+g*r*c-t*v*c-s*r*u+t*o*u)*w,e[11]=(d*o*n-s*p*n-d*r*c+t*p*c+s*r*m-t*o*m)*w,e[12]=R*w,e[13]=(d*v*a-g*p*a+g*r*h-t*v*h-d*r*f+t*p*f)*w,e[14]=(g*o*a-s*v*a-g*r*l+t*v*l+s*r*f-t*o*f)*w,e[15]=(s*p*a-d*o*a+d*r*l-t*p*l-s*r*h+t*o*h)*w,this}scale(e){const t=this.elements,r=e.x,a=e.y,n=e.z;return t[0]*=r,t[4]*=a,t[8]*=n,t[1]*=r,t[5]*=a,t[9]*=n,t[2]*=r,t[6]*=a,t[10]*=n,t[3]*=r,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),n=1-r,s=e.x,o=e.y,l=e.z,c=n*s,d=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+r,d*l-a*s,0,c*l-a*o,d*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,n,s){return this.set(1,r,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,d=s+s,p=o+o,h=n*c,m=n*d,g=n*p,v=s*d,f=s*p,u=o*p,S=l*c,b=l*d,_=l*p,R=r.x,A=r.y,w=r.z;return a[0]=(1-(v+u))*R,a[1]=(m+_)*R,a[2]=(g-b)*R,a[3]=0,a[4]=(m-_)*A,a[5]=(1-(h+u))*A,a[6]=(f+S)*A,a[7]=0,a[8]=(g+b)*w,a[9]=(f-S)*w,a[10]=(1-(h+v))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let n=ra.set(a[0],a[1],a[2]).length();const s=ra.set(a[4],a[5],a[6]).length(),o=ra.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Ti.copy(this);const l=1/n,c=1/s,d=1/o;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=c,Ti.elements[5]*=c,Ti.elements[6]*=c,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),r.x=n,r.y=s,r.z=o,this}makePerspective(e,t,r,a,n,s,o=zi){const l=this.elements,c=2*n/(t-e),d=2*n/(r-a),p=(t+e)/(t-e),h=(r+a)/(r-a);let m,g;if(o===zi)m=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===pn)m=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,a,n,s,o=zi){const l=this.elements,c=1/(t-e),d=1/(r-a),p=1/(s-n),h=(t+e)*c,m=(r+a)*d;let g,v;if(o===zi)g=(s+n)*p,v=-2*p;else if(o===pn)g=n*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ra=new B,Ti=new Lt,Op=new B(0,0,0),Fp=new B(1,1,1),cr=new B,Sn=new B,ci=new B,lc=new Lt,cc=new Zr;class Ki{constructor(e=0,t=0,r=0,a=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],h=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kp=0;const uc=new B,aa=new Zr,Gi=new Lt,Mn=new B,Oa=new B,zp=new B,Bp=new Zr,dc=new B(1,0,0),hc=new B(0,1,0),pc=new B(0,0,1),fc={type:"added"},Hp={type:"removed"},na={type:"childadded",child:null},So={type:"childremoved",child:null};class Xt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new B,t=new Ki,r=new Zr,a=new B(1,1,1);function n(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Lt},normalMatrix:{value:new nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Mn.copy(e):Mn.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Oa,Mn,this.up):Gi.lookAt(Mn,Oa,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(Gi),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fc),na.child=e,this.dispatchEvent(na),na.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fc),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];n(e.shapes,p)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),d.length>0&&(r.images=d),p.length>0&&(r.shapes=p),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Xt.DEFAULT_UP=new B(0,1,0),Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new B,Wi=new B,Mo=new B,Xi=new B,sa=new B,oa=new B,mc=new B,bo=new B,Eo=new B,To=new B,wo=new Ot,Ao=new Ot,Co=new Ot;class Ci{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),wi.subVectors(e,t),a.cross(wi);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,r,a,n){wi.subVectors(a,t),Wi.subVectors(r,t),Mo.subVectors(e,t);const s=wi.dot(wi),o=wi.dot(Wi),l=wi.dot(Mo),c=Wi.dot(Wi),d=Wi.dot(Mo),p=s*c-o*o;if(p===0)return n.set(0,0,0),null;const h=1/p,m=(c*l-o*d)*h,g=(s*d-o*l)*h;return n.set(1-m-g,g,m)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,r,a,n,s,o,l){return this.getBarycoord(e,t,r,a,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Xi.x),l.addScaledVector(s,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,r,a,n,s){return wo.setScalar(0),Ao.setScalar(0),Co.setScalar(0),wo.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,r),Co.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(wo,n.x),s.addScaledVector(Ao,n.y),s.addScaledVector(Co,n.z),s}static isFrontFacing(e,t,r,a){return wi.subVectors(r,t),Wi.subVectors(e,t),wi.cross(Wi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),wi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,n){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,n=this.c;let s,o;sa.subVectors(a,r),oa.subVectors(n,r),bo.subVectors(e,r);const l=sa.dot(bo),c=oa.dot(bo);if(l<=0&&c<=0)return t.copy(r);Eo.subVectors(e,a);const d=sa.dot(Eo),p=oa.dot(Eo);if(d>=0&&p<=d)return t.copy(a);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(r).addScaledVector(sa,s);To.subVectors(e,n);const m=sa.dot(To),g=oa.dot(To);if(g>=0&&m<=g)return t.copy(n);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(oa,o);const f=d*g-m*p;if(f<=0&&p-d>=0&&m-g>=0)return mc.subVectors(n,a),o=(p-d)/(p-d+(m-g)),t.copy(a).addScaledVector(mc,o);const u=1/(f+v+h);return s=v*u,o=h*u,t.copy(r).addScaledVector(sa,s).addScaledVector(oa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},bn={h:0,s:0,l:0};function Ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,vt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=vt.workingColorSpace){if(e=lo(e,1),t=pt(t,0,1),r=pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,s=2*r-n;this.r=Ro(s,n,e+1/3),this.g=Ro(s,n,e),this.b=Ro(s,n,e-1/3)}return vt.colorSpaceToWorking(this,a),this}setStyle(e,t=mi){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const r=gc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return vt.workingToColorSpace(ei.copy(this),e),Math.round(pt(ei.r*255,0,255))*65536+Math.round(pt(ei.g*255,0,255))*256+Math.round(pt(ei.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(ei.copy(this),t);const r=ei.r,a=ei.g,n=ei.b,s=Math.max(r,a,n),o=Math.min(r,a,n);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case r:l=(a-n)/p+(a<n?6:0);break;case a:l=(n-r)/p+2;break;case n:l=(r-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=mi){vt.workingToColorSpace(ei.copy(this),e);const t=ei.r,r=ei.g,a=ei.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(bn);const r=Ia(ur.h,bn.h,t),a=Ia(ur.s,bn.s,t),n=Ia(ur.l,bn.l,t);return this.setHSL(r,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*a,this.g=n[1]*t+n[4]*r+n[7]*a,this.b=n[2]*t+n[5]*r+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new at;at.NAMES=gc;let Vp=0;class la extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=Br,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gs&&(r.blendSrc=this.blendSrc),this.blendDst!==_s&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(r.textures=n),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new B,En=new ft;let Gp=0;class Ii{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$l,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXY(t,En.x,En.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=qr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ri(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array),a=ri(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array),a=ri(a,this.array),n=ri(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}}class _c extends Ii{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class vc extends Ii{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Nt extends Ii{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Wp=0;const gi=new Lt,Lo=new Xt,ca=new B,ui=new Da,Fa=new Da,qt=new B;class pi extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rc(e)?vc:_c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new nt().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,r){return gi.makeTranslation(e,t,r),this.applyMatrix4(gi),this}scale(e,t,r){return gi.makeScale(e,t,r),this.applyMatrix4(gi),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Nt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const n=e[a];t.setXYZ(a,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const n=t[r];ui.setFromBufferAttribute(n),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(ui.min,Fa.min),ui.expandByPoint(qt),qt.addVectors(ui.max,Fa.max),ui.expandByPoint(qt)):(ui.expandByPoint(Fa.min),ui.expandByPoint(Fa.max))}ui.getCenter(r);let a=0;for(let n=0,s=e.count;n<s;n++)qt.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(qt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)qt.fromBufferAttribute(o,c),l&&(ca.fromBufferAttribute(e,c),qt.add(ca)),a=Math.max(a,r.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new B,l[P]=new B;const c=new B,d=new B,p=new B,h=new ft,m=new ft,g=new ft,v=new B,f=new B;function u(P,T,M){c.fromBufferAttribute(r,P),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.fromBufferAttribute(n,P),m.fromBufferAttribute(n,T),g.fromBufferAttribute(n,M),d.sub(c),p.sub(c),m.sub(h),g.sub(h);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(D),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),o[P].add(v),o[T].add(v),o[M].add(v),l[P].add(f),l[T].add(f),l[M].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,T=S.length;P<T;++P){const M=S[P],D=M.start,O=M.count;for(let z=D,X=D+O;z<X;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new B,_=new B,R=new B,A=new B;function w(P){R.fromBufferAttribute(a,P),A.copy(R);const T=o[P];b.copy(T),b.sub(R.multiplyScalar(R.dot(T))).normalize(),_.crossVectors(A,T);const M=_.dot(l[P])<0?-1:1;s.setXYZW(P,b.x,b.y,b.z,M)}for(let P=0,T=S.length;P<T;++P){const M=S[P],D=M.start,O=M.count;for(let z=D,X=D+O;z<X;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const a=new B,n=new B,s=new B,o=new B,l=new B,c=new B,d=new B,p=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),v=e.getX(h+1),f=e.getX(h+2);a.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),s.fromBufferAttribute(t,f),d.subVectors(s,n),p.subVectors(a,n),d.cross(p),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,f),o.add(d),l.add(d),c.add(d),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)a.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,n),p.subVectors(a,n),d.cross(p),r.setXYZ(h+0,d.x,d.y,d.z),r.setXYZ(h+1,d.x,d.y,d.z),r.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let u=0;u<d;u++)h[g++]=c[m++]}return new Ii(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,r=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,r);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let d=0,p=c.length;d<p;d++){const h=c[d],m=e(h,r);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];d.push(m.toJSON(e.data))}d.length>0&&(a[l]=d,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const n=e.morphAttributes;for(const c in n){const d=[],p=n[c];for(let h=0,m=p.length;h<m;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new Lt,Tr=new yn,Tn=new ia,yc=new B,wn=new B,An=new B,Cn=new B,Io=new B,Rn=new B,Sc=new B,Pn=new B;class di extends Xt{constructor(e=new pi,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){Rn.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const d=o[l],p=n[l];d!==0&&(Io.fromBufferAttribute(p,e),s?Rn.addScaledVector(Io,d):Rn.addScaledVector(Io.sub(t),d))}t.add(Rn)}return t}raycast(e,t){const r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tn.copy(r.boundingSphere),Tn.applyMatrix4(n),Tr.copy(e.ray).recast(e.near),!(Tn.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Tn,yc)===null||Tr.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(n).invert(),Tr.copy(e.ray).applyMatrix4(xc),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,r){let a;const n=this.geometry,s=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,d=n.attributes.uv1,p=n.attributes.normal,h=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const f=h[g],u=s[f.materialIndex],S=Math.max(f.start,m.start),b=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let _=S,R=b;_<R;_+=3){const A=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);a=Ln(this,u,e,r,c,d,p,A,w,P),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,u=v;f<u;f+=3){const S=o.getX(f),b=o.getX(f+1),_=o.getX(f+2);a=Ln(this,s,e,r,c,d,p,S,b,_),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const f=h[g],u=s[f.materialIndex],S=Math.max(f.start,m.start),b=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let _=S,R=b;_<R;_+=3){const A=_,w=_+1,P=_+2;a=Ln(this,u,e,r,c,d,p,A,w,P),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,u=v;f<u;f+=3){const S=f,b=f+1,_=f+2;a=Ln(this,s,e,r,c,d,p,S,b,_),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function Xp(i,e,t,r,a,n,s,o){let l;if(e.side===si?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,e.side===tr,o),l===null)return null;Pn.copy(o),Pn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pn);return c<t.near||c>t.far?null:{distance:c,point:Pn.clone(),object:i}}function Ln(i,e,t,r,a,n,s,o,l,c){i.getVertexPosition(o,wn),i.getVertexPosition(l,An),i.getVertexPosition(c,Cn);const d=Xp(i,e,t,r,wn,An,Cn,Sc);if(d){const p=new B;Ci.getBarycoord(Sc,wn,An,Cn,p),a&&(d.uv=Ci.getInterpolatedAttribute(a,o,l,c,p,new ft)),n&&(d.uv1=Ci.getInterpolatedAttribute(n,o,l,c,p,new ft)),s&&(d.normal=Ci.getInterpolatedAttribute(s,o,l,c,p,new B),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};Ci.getNormal(wn,An,Cn,h.normal),d.face=h,d.barycoord=p}return d}class Ja extends pi{constructor(e=1,t=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],p=[];let h=0,m=0;g("z","y","x",-1,-1,r,t,e,s,n,0),g("z","y","x",1,-1,r,t,-e,s,n,1),g("x","z","y",1,1,e,r,t,a,s,2),g("x","z","y",1,-1,e,r,-t,a,s,3),g("x","y","z",1,-1,e,t,r,a,n,4),g("x","y","z",-1,-1,e,t,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(p,2));function g(v,f,u,S,b,_,R,A,w,P,T){const M=_/w,D=R/P,O=_/2,z=R/2,X=A/2,ee=w+1,Y=P+1;let ae=0,G=0;const le=new B;for(let J=0;J<Y;J++){const ne=J*D-z;for(let me=0;me<ee;me++){const ye=me*M-O;le[v]=ye*S,le[f]=ne*b,le[u]=X,c.push(le.x,le.y,le.z),le[v]=0,le[f]=0,le[u]=A>0?1:-1,d.push(le.x,le.y,le.z),p.push(me/w),p.push(1-J/P),ae+=1}}for(let J=0;J<P;J++)for(let ne=0;ne<w;ne++){const me=h+ne+ee*J,ye=h+ne+ee*(J+1),H=h+(ne+1)+ee*(J+1),K=h+(ne+1)+ee*J;l.push(me,ye,K),l.push(ye,H,K),G+=6}o.addGroup(m,G,T),m+=G,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ua(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function ai(i){const e={};for(let t=0;t<i.length;t++){const r=ua(i[t]);for(const a in r)e[a]=r[a]}return e}function jp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Yp={clone:ua,merge:ai};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class bc extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new B,Ec=new ft,Tc=new ft;class hi extends bc{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Tc),t.subVectors(Tc,Ec)}setViewOffset(e,t,r,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*a/l,t-=s.offsetY*r/c,a*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,ha=1;class Jp extends Xt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hi(da,ha,e,t);a.layers=this.layers,this.add(a);const n=new hi(da,ha,e,t);n.layers=this.layers,this.add(n);const s=new hi(da,ha,e,t);s.layers=this.layers,this.add(s);const o=new hi(da,ha,e,t);o.layers=this.layers,this.add(o);const l=new hi(da,ha,e,t);l.layers=this.layers,this.add(l);const c=new hi(da,ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,n,s,o,l]=t;for(const c of t)this.remove(c);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pn)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,n),e.setRenderTarget(r,1,a),e.render(t,s),e.setRenderTarget(r,2,a),e.render(t,o),e.setRenderTarget(r,3,a),e.render(t,l),e.setRenderTarget(r,4,a),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,a),e.render(t,d),e.setRenderTarget(p,h,m),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class wc extends ni{constructor(e=[],t=Vr,r,a,n,s,o,l,c,d){super(e,t,r,a,n,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kp extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new wc(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ja(5,5,5),n=new _i({name:"CubemapFromEquirect",uniforms:ua(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:ir});n.uniforms.tEquirect.value=t;const s=new di(a,n),o=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Pi),new Jp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,a);e.setRenderTarget(n)}}class pa extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,r),u=this._getHandJoint(c,v);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new pa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class No extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uo extends ni{constructor(e=null,t=1,r=1,a,n,s,o,l,c=Bt,d=Bt,p,h){super(null,s,o,l,c,d,a,n,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oo=new B,Qp=new B,ef=new nt;class wr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Oo.subVectors(r,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Oo),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ef.getNormalMatrix(e),a=this.coplanarPoint(Oo).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ia,tf=new ft(.5,.5),In=new B;class Fo{constructor(e=new wr,t=new wr,r=new wr,a=new wr,n=new wr,s=new wr){this.planes=[e,t,r,a,n,s]}set(e,t,r,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi){const r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],d=a[5],p=a[6],h=a[7],m=a[8],g=a[9],v=a[10],f=a[11],u=a[12],S=a[13],b=a[14],_=a[15];if(r[0].setComponents(l-n,h-c,f-m,_-u).normalize(),r[1].setComponents(l+n,h+c,f+m,_+u).normalize(),r[2].setComponents(l+s,h+d,f+g,_+S).normalize(),r[3].setComponents(l-s,h-d,f-g,_-S).normalize(),r[4].setComponents(l-o,h-p,f-v,_-b).normalize(),t===zi)r[5].setComponents(l+o,h+p,f+v,_+b).normalize();else if(t===pn)r[5].setComponents(o,p,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const t=tf.distanceTo(e.center);return Ar.radius=.7071067811865476+t,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(In.x=a.normal.x>0?e.max.x:e.min.x,In.y=a.normal.y>0?e.max.y:e.min.y,In.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(In)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dn=new B,Nn=new B,Ac=new Lt,ka=new yn,Un=new ia,ko=new B,Cc=new B;class af extends Xt{constructor(e=new pi,t=new rf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,n=t.count;a<n;a++)Dn.fromBufferAttribute(t,a-1),Nn.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Dn.distanceTo(Nn);e.setAttribute("lineDistance",new Nt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Un.copy(r.boundingSphere),Un.applyMatrix4(a),Un.radius+=n,e.ray.intersectsSphere(Un)===!1)return;Ac.copy(a).invert(),ka.copy(e.ray).applyMatrix4(Ac);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=r.index,p=r.attributes.position;if(d!==null){const h=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=h,v=m-1;g<v;g+=c){const f=d.getX(g),u=d.getX(g+1),S=On(this,e,ka,l,f,u,g);S&&t.push(S)}if(this.isLineLoop){const g=d.getX(m-1),v=d.getX(h),f=On(this,e,ka,l,g,v,m-1);f&&t.push(f)}}else{const h=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let g=h,v=m-1;g<v;g+=c){const f=On(this,e,ka,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=On(this,e,ka,l,m-1,h,m-1);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function On(i,e,t,r,a,n,s){const o=i.geometry.attributes.position;if(Dn.fromBufferAttribute(o,a),Nn.fromBufferAttribute(o,n),t.distanceSqToSegment(Dn,Nn,ko,Cc)>r)return;ko.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rc=new B,Pc=new B;class nf extends af{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,n=t.count;a<n;a+=2)Rc.fromBufferAttribute(t,a),Pc.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Rc.distanceTo(Pc);e.setAttribute("lineDistance",new Nt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sf extends la{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new Lt,zo=new yn,Fn=new ia,kn=new B;class of extends Xt{constructor(e=new pi,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fn.copy(r.boundingSphere),Fn.applyMatrix4(a),Fn.radius+=n,e.ray.intersectsSphere(Fn)===!1)return;Lc.copy(a).invert(),zo.copy(e.ray).applyMatrix4(Lc);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,d=r.attributes.position;if(c!==null){const p=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let m=p,g=h;m<g;m++){const v=c.getX(m);kn.fromBufferAttribute(d,v),Ic(kn,v,l,a,e,t,this)}}else{const p=Math.max(0,s.start),h=Math.min(d.count,s.start+s.count);for(let m=p,g=h;m<g;m++)kn.fromBufferAttribute(d,m),Ic(kn,m,l,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Ic(i,e,t,r,a,n,s){const o=zo.distanceSqToPoint(i);if(o<t){const l=new B;zo.closestPointToPoint(i,l),l.applyMatrix4(r);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Bo extends ni{constructor(e,t,r=Mr,a,n,s,o=Bt,l=Bt,c,d=Ca,p=1){if(d!==Ca&&d!==Ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,a,n,s,o,l,d,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ls extends pi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(r),l=Math.floor(a),c=o+1,d=l+1,p=e/o,h=t/l,m=[],g=[],v=[],f=[];for(let u=0;u<d;u++){const S=u*h-s;for(let b=0;b<c;b++){const _=b*p-n;g.push(_,-S,0),v.push(0,0,1),f.push(b/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const b=S+c*u,_=S+c*(u+1),R=S+1+c*(u+1),A=S+1+c*u;m.push(b,_,A),m.push(_,R,A)}this.setIndex(m),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class Al extends pi{constructor(e=1,t=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const d=[],p=new B,h=new B,m=[],g=[],v=[],f=[];for(let u=0;u<=r;u++){const S=[],b=u/r;let _=0;u===0&&s===0?_=.5/t:u===r&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const A=R/t;p.x=-e*Math.cos(a+A*n)*Math.sin(s+b*o),p.y=e*Math.cos(s+b*o),p.z=e*Math.sin(a+A*n)*Math.sin(s+b*o),g.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),f.push(A+_,1-b),S.push(c++)}d.push(S)}for(let u=0;u<r;u++)for(let S=0;S<t;S++){const b=d[u][S+1],_=d[u][S],R=d[u+1][S],A=d[u+1][S+1];(u!==0||s>0)&&m.push(b,_,A),(u!==r-1||l<Math.PI)&&m.push(_,R,A)}this.setIndex(m),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lf extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cf extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ho=new Lt,Nc=new B,Uc=new B;class uf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oc extends bc{constructor(e=-1,t=1,r=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=r-e,s=r+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends uf{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fc extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new df}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hf extends Dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pf extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kc=new Lt;class Vo{constructor(e,t,r=0,a=1/0){this.ray=new yn(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kc),this}intersectObject(e,t=!0,r=[]){return Go(e,this,r,t),r.sort(zc),r}intersectObjects(e,t=!0,r=[]){for(let a=0,n=e.length;a<n;a++)Go(e[a],this,r,t);return r.sort(zc),r}}function zc(i,e){return i.distance-e.distance}function Go(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const n=i.children;for(let s=0,o=n.length;s<o;s++)Go(n[s],e,t,!0)}}function Bc(i,e,t,r){const a=ff(r);switch(t){case Xl:return i*e;case Yl:return i*e/a.components*a.byteLength;case Ds:return i*e/a.components*a.byteLength;case ql:return i*e*2/a.components*a.byteLength;case Ns:return i*e*2/a.components*a.byteLength;case jl:return i*e*3/a.components*a.byteLength;case oi:return i*e*4/a.components*a.byteLength;case Us:return i*e*4/a.components*a.byteLength;case on:case ln:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cn:case un:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fs:case zs:return Math.max(i,16)*Math.max(e,8)/4;case Os:case ks:return Math.max(i,8)*Math.max(e,8)/2;case Bs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ks:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $s:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dn:case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case so:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ff(i){switch(i){case Li:case Vl:return{byteLength:1,components:1};case Ta:case Gl:case wa:return{byteLength:2,components:1};case Ls:case Is:return{byteLength:2,components:4};case Mr:case Ps:case fi:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ms}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ms);function Hc(){let i=null,e=!1,t=null,r=null;function a(n,s){t(n,s),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function mf(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,c){const d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<p.length;m++){const g=p[h],v=p[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let m=0,g=p.length;m<g;m++){const v=p[m];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:xf,alphatest_fragment:yf,alphatest_pars_fragment:Sf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Ef,batching_vertex:Tf,begin_vertex:wf,beginnormal_vertex:Af,bsdfs:Cf,iridescence_fragment:Rf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Nf,color_fragment:Uf,color_pars_fragment:Of,color_pars_vertex:Ff,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:jf,colorspace_pars_fragment:Yf,envmap_fragment:qf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:lm,envmap_vertex:$f,fog_vertex:Qf,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:im,gradientmap_pars_fragment:rm,lightmap_pars_fragment:am,lights_lambert_fragment:nm,lights_lambert_pars_fragment:sm,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:hm,lights_physical_fragment:pm,lights_physical_pars_fragment:fm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Sm,map_fragment:Mm,map_pars_fragment:bm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Cm,morphcolor_vertex:Rm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Im,normal_fragment_begin:Dm,normal_fragment_maps:Nm,normal_pars_fragment:Um,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:jm,dithering_fragment:Ym,dithering_pars_fragment:qm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:$m,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:ng,specularmap_pars_fragment:sg,tonemapping_fragment:og,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:hg,uv_vertex:pg,worldpos_vertex:fg,background_vert:mg,background_frag:gg,backgroundCube_vert:_g,backgroundCube_frag:vg,cube_vert:xg,cube_frag:yg,depth_vert:Sg,depth_frag:Mg,distanceRGBA_vert:bg,distanceRGBA_frag:Eg,equirect_vert:Tg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Rg,meshbasic_frag:Pg,meshlambert_vert:Lg,meshlambert_frag:Ig,meshmatcap_vert:Dg,meshmatcap_frag:Ng,meshnormal_vert:Ug,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:kg,meshphysical_vert:zg,meshphysical_frag:Bg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:jg,sprite_vert:Yg,sprite_frag:qg},Ie={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Di={basic:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:ai([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:ai([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:ai([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:ai([Ie.points,Ie.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:ai([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:ai([Ie.common,Ie.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:ai([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:ai([Ie.sprite,Ie.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:ai([Ie.common,Ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:ai([Ie.lights,Ie.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Di.physical={uniforms:ai([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const zn={r:0,b:0,g:0},Cr=new Ki,Zg=new Lt;function Jg(i,e,t,r,a,n,s){const o=new at(0);let l=n===!0?0:1,c,d,p=null,h=0,m=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function v(b){let _=!1;const R=g(b);R===null?u(o,l):R&&R.isColor&&(u(R,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?r.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===nn)?(d===void 0&&(d=new di(new Ja(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ua(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Cr.copy(_.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Cr)),d.material.toneMapped=vt.getTransfer(R.colorSpace)!==wt,(p!==R||h!==R.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=R,h=R.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new di(new ls(2,2),new _i({name:"BackgroundMaterial",uniforms:ua(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=vt.getTransfer(R.colorSpace)!==wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||h!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=R,h=R.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,_){b.getRGB(zn,Mc(i)),r.buffers.color.setClear(zn.r,zn.g,zn.b,_,s)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:v,addToRenderList:f,dispose:S}}function Kg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=h(null);let n=a,s=!1;function o(M,D,O,z,X){let ee=!1;const Y=p(z,O,D);n!==Y&&(n=Y,c(n.object)),ee=m(M,z,O,X),ee&&g(M,z,O,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(ee||s)&&(s=!1,_(M,D,O,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function p(M,D,O){const z=O.wireframe===!0;let X=r[M.id];X===void 0&&(X={},r[M.id]=X);let ee=X[D.id];ee===void 0&&(ee={},X[D.id]=ee);let Y=ee[z];return Y===void 0&&(Y=h(l()),ee[z]=Y),Y}function h(M){const D=[],O=[],z=[];for(let X=0;X<t;X++)D[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,D,O,z){const X=n.attributes,ee=D.attributes;let Y=0;const ae=O.getAttributes();for(const G in ae)if(ae[G].location>=0){const le=X[G];let J=ee[G];if(J===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),le===void 0||le.attribute!==J||J&&le.data!==J.data)return!0;Y++}return n.attributesNum!==Y||n.index!==z}function g(M,D,O,z){const X={},ee=D.attributes;let Y=0;const ae=O.getAttributes();for(const G in ae)if(ae[G].location>=0){let le=ee[G];le===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const J={};J.attribute=le,le&&le.data&&(J.data=le.data),X[G]=J,Y++}n.attributes=X,n.attributesNum=Y,n.index=z}function v(){const M=n.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function f(M){u(M,0)}function u(M,D){const O=n.newAttributes,z=n.enabledAttributes,X=n.attributeDivisors;O[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),X[M]!==D&&(i.vertexAttribDivisor(M,D),X[M]=D)}function S(){const M=n.newAttributes,D=n.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==M[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function b(M,D,O,z,X,ee,Y){Y===!0?i.vertexAttribIPointer(M,D,O,X,ee):i.vertexAttribPointer(M,D,O,z,X,ee)}function _(M,D,O,z){v();const X=z.attributes,ee=O.getAttributes(),Y=D.defaultAttributeValues;for(const ae in ee){const G=ee[ae];if(G.location>=0){let le=X[ae];if(le===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const J=le.normalized,ne=le.itemSize,me=e.get(le);if(me===void 0)continue;const ye=me.buffer,H=me.type,K=me.bytesPerElement,oe=H===i.INT||H===i.UNSIGNED_INT||le.gpuType===Ps;if(le.isInterleavedBufferAttribute){const he=le.data,ce=he.stride,Ae=le.offset;if(he.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)u(G.location+Be,he.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Be=0;Be<G.locationSize;Be++)f(G.location+Be);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Be=0;Be<G.locationSize;Be++)b(G.location+Be,ne/G.locationSize,H,J,ce*K,(Ae+ne/G.locationSize*Be)*K,oe)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)u(G.location+he,le.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<G.locationSize;he++)f(G.location+he);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let he=0;he<G.locationSize;he++)b(G.location+he,ne/G.locationSize,H,J,ne*K,ne/G.locationSize*he*K,oe)}}else if(Y!==void 0){const J=Y[ae];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}S()}function R(){P();for(const M in r){const D=r[M];for(const O in D){const z=D[O];for(const X in z)d(z[X].object),delete z[X];delete D[O]}delete r[M]}}function A(M){if(r[M.id]===void 0)return;const D=r[M.id];for(const O in D){const z=D[O];for(const X in z)d(z[X].object),delete z[X];delete D[O]}delete r[M.id]}function w(M){for(const D in r){const O=r[D];if(O[M.id]===void 0)continue;const z=O[M.id];for(const X in z)d(z[X].object),delete z[X];delete O[M.id]}}function P(){T(),s=!0,n!==a&&(n=a,c(n.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:f,disableUnusedAttributes:S}}function $g(i,e,t){let r;function a(c){r=c}function n(c,d){i.drawArrays(r,c,d),t.update(d,r,1)}function s(c,d,p){p!==0&&(i.drawArraysInstanced(r,c,d,p),t.update(d,r,p))}function o(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,d,0,p);let h=0;for(let m=0;m<p;m++)h+=d[m];t.update(h,r,1)}function l(c,d,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)s(c[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,d,0,h,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*h[v];t.update(g,r,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qg(i,e,t,r){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==oi&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Li&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function e_(i){const e=this;let t=null,r=0,a=!1,n=!1;const s=new wr,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||r!==0||a;return a=h,r=p.length,m},this.beginShadows=function(){n=!0,d(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,m){const g=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!a||g===null||g.length===0||n&&!f)n?d(null):c();else{const S=n?0:r,b=S*4;let _=u.clippingState||null;l.value=_,_=d(g,h,b,m);for(let R=0;R!==b;++R)_[R]=t[R];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function d(p,h,m,g){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const u=m+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let b=0,_=m;b!==v;++b,_+=4)s.copy(p[b]).applyMatrix4(S,o),s.normal.toArray(f,_),f[_+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function t_(i){let e=new WeakMap;function t(s,o){return o===Ts?s.mapping=Vr:o===ws&&(s.mapping=Gr),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ts||o===ws)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Kp(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}const fa=4,Vc=[.125,.215,.35,.446,.526,.582],Rr=20,Wo=new Oc,Gc=new at;let Xo=null,jo=0,Yo=0,qo=!1;const Pr=(1+Math.sqrt(5))/2,ma=1/Pr,Wc=[new B(-Pr,ma,0),new B(Pr,ma,0),new B(-ma,0,Pr),new B(ma,0,Pr),new B(0,Pr,-ma),new B(0,Pr,ma),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],i_=new B;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,n={}){const{size:s=256,position:o=i_}=n;Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,jo,Yo),this._renderer.xr.enabled=qo,e.scissorTest=!1,Bn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:wa,format:oi,colorSpace:Wr,depthBuffer:!1},a=jc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(n)),this._blurMaterial=a_(n,e,t)}return a}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,r,a,n){const s=new hi(90,1,t,r),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,p=c.toneMapping;c.getClearColor(Gc),c.toneMapping=rr,c.autoClear=!1;const h=new Po({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),m=new di(new Ja,h);let g=!1;const v=e.background;v?v.isColor&&(h.color.copy(v),e.background=null,g=!0):(h.color.copy(Gc),g=!0);for(let f=0;f<6;f++){const u=f%3;u===0?(s.up.set(0,o[f],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+l[f],n.y,n.z)):u===1?(s.up.set(0,0,o[f]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+l[f],n.z)):(s.up.set(0,o[f],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+l[f]));const S=this._cubeSize;Bn(a,u*S,f>2?S:0,S,S),c.setRenderTarget(a),g&&c.render(m,s),c.render(e,s)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=p,c.autoClear=d,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Vr||e.mapping===Gr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const n=a?this._cubemapMaterial:this._equirectMaterial,s=new di(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;Bn(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Wo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let n=1;n<a;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Wc[(a-n-1)%Wc.length];this._blur(e,n-1,n,s,o)}t.autoClear=r}_blur(e,t,r,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,a,"latitudinal",n),this._halfBlur(s,e,r,r,a,"longitudinal",n)}_halfBlur(e,t,r,a,n,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new di(this._lodPlanes[a],c),h=c.uniforms,m=this._sizeLods[r]-1,g=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Rr-1),v=n/g,f=isFinite(n)?1+Math.floor(d*v):Rr;f>Rr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Rr}`);const u=[];let S=0;for(let w=0;w<Rr;++w){const P=w/v,T=Math.exp(-P*P/2);u.push(T),w===0?S+=T:w<f&&(S+=2*T)}for(let w=0;w<u.length;w++)u[w]=u[w]/S;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-r;const _=this._sizeLods[a],R=3*_*(a>b-fa?a-b+fa:0),A=4*(this._cubeSize-_);Bn(t,R,A,3*_,2*_),l.setRenderTarget(t),l.render(p,Wo)}}function r_(i){const e=[],t=[],r=[];let a=i;const n=i-fa+1+Vc.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>i-fa?l=Vc[s-i+fa-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,v=3,f=2,u=1,S=new Float32Array(v*g*m),b=new Float32Array(f*g*m),_=new Float32Array(u*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,P=A>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];S.set(T,v*g*A),b.set(h,f*g*A);const M=[A,A,A,A,A,A];_.set(M,u*g*A)}const R=new pi;R.setAttribute("position",new Ii(S,v)),R.setAttribute("uv",new Ii(b,f)),R.setAttribute("faceIndex",new Ii(_,u)),e.push(R),a>fa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function jc(i,e,t){const r=new nr(i,e,t);return r.texture.mapping=nn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bn(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function a_(i,e,t){const r=new Float32Array(Rr),a=new B(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Yc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function qc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n_(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ts||l===ws,d=l===Vr||l===Gr;if(c||d){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Xc(i)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&a(m)?(t===null&&(t=new Xc(i)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",n),p.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function s_(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Jr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function o_(i,e,t,r){const a={},n=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete a[h.id];const m=n.get(h);m&&(e.remove(m),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let b=0,_=S.length;b<_;b+=3){const R=S[b+0],A=S[b+1],w=S[b+2];h.push(R,A,A,w,w,R)}}else if(g!==void 0){const S=g.array;v=g.version;for(let b=0,_=S.length/3-1;b<_;b+=3){const R=b+0,A=b+1,w=b+2;h.push(R,A,A,w,w,R)}}else return;const f=new(rc(h)?vc:_c)(h,1);f.version=v;const u=n.get(p);u&&e.remove(u),n.set(p,f)}function d(p){const h=n.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function l_(i,e,t){let r;function a(h){r=h}let n,s;function o(h){n=h.type,s=h.bytesPerElement}function l(h,m){i.drawElements(r,m,n,h*s),t.update(m,r,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(r,m,n,h*s,g),t.update(m,r,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,n,h,0,g);let v=0;for(let f=0;f<g;f++)v+=m[f];t.update(v,r,1)}function p(h,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<h.length;u++)c(h[u]/s,m[u],v[u]);else{f.multiDrawElementsInstancedWEBGL(r,m,0,n,h,0,v,0,g);let u=0;for(let S=0;S<g;S++)u+=m[S]*v[S];t.update(u,r,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function c_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(n/3);break;case i.LINES:t.lines+=o*(n/2);break;case i.LINE_STRIP:t.lines+=o*(n-1);break;case i.LINE_LOOP:t.lines+=o*n;break;case i.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function u_(i,e,t){const r=new WeakMap,a=new Ot;function n(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let h=r.get(o);if(h===void 0||h.count!==p){let m=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",m)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),f===!0&&(_=3);let R=o.attributes.position.count*_,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*p),P=new oc(w,R,A,p);P.type=fi,P.needsUpdate=!0;const T=_*4;for(let M=0;M<p;M++){const D=u[M],O=S[M],z=b[M],X=R*A*4*M;for(let ee=0;ee<D.count;ee++){const Y=ee*T;g===!0&&(a.fromBufferAttribute(D,ee),w[X+Y+0]=a.x,w[X+Y+1]=a.y,w[X+Y+2]=a.z,w[X+Y+3]=0),v===!0&&(a.fromBufferAttribute(O,ee),w[X+Y+4]=a.x,w[X+Y+5]=a.y,w[X+Y+6]=a.z,w[X+Y+7]=0),f===!0&&(a.fromBufferAttribute(z,ee),w[X+Y+8]=a.x,w[X+Y+9]=a.y,w[X+Y+10]=a.z,w[X+Y+11]=z.itemSize===4?a.w:1)}}h={count:p,texture:P,size:new ft(R,A)},r.set(o,h),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:n}}function d_(i,e,t,r){let a=new WeakMap;function n(l){const c=r.render.frame,d=l.geometry,p=e.get(l,d);if(a.get(p)!==c&&(e.update(p),a.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return p}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}const Zc=new ni,Jc=new Bo(1,1),Kc=new oc,$c=new Np,Qc=new wc,eu=[],tu=[],iu=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function ga(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let n=eu[a];if(n===void 0&&(n=new Float32Array(a),eu[a]=n),e!==0){r.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(n,o)}return n}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Hn(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function h_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function f_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function g_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;au.set(r),i.uniformMatrix2fv(this.addr,!1,au),Vt(t,r)}}function __(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;ru.set(r),i.uniformMatrix3fv(this.addr,!1,ru),Vt(t,r)}}function v_(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,r))return;iu.set(r),i.uniformMatrix4fv(this.addr,!1,iu),Vt(t,r)}}function x_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function b_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function A_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let n;this.type===i.SAMPLER_2D_SHADOW?(Jc.compareFunction=Kl,n=Jc):n=Zc,t.setTexture2D(e||n,a)}function C_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||$c,a)}function R_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Qc,a)}function P_(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Kc,a)}function L_(i){switch(i){case 5126:return h_;case 35664:return p_;case 35665:return f_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return S_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return E_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}function I_(i,e){i.uniform1fv(this.addr,e)}function D_(i,e){const t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){const t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function U_(i,e){const t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function O_(i,e){const t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){const t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k_(i,e){const t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z_(i,e){i.uniform1iv(this.addr,e)}function B_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function V_(i,e){i.uniform4iv(this.addr,e)}function G_(i,e){i.uniform1uiv(this.addr,e)}function W_(i,e){i.uniform2uiv(this.addr,e)}function X_(i,e){i.uniform3uiv(this.addr,e)}function j_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){const r=this.cache,a=e.length,n=Hn(t,a);Ht(r,n)||(i.uniform1iv(this.addr,n),Vt(r,n));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Zc,n[s])}function q_(i,e,t){const r=this.cache,a=e.length,n=Hn(t,a);Ht(r,n)||(i.uniform1iv(this.addr,n),Vt(r,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||$c,n[s])}function Z_(i,e,t){const r=this.cache,a=e.length,n=Hn(t,a);Ht(r,n)||(i.uniform1iv(this.addr,n),Vt(r,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Qc,n[s])}function J_(i,e,t){const r=this.cache,a=e.length,n=Hn(t,a);Ht(r,n)||(i.uniform1iv(this.addr,n),Vt(r,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Kc,n[s])}function K_(i){switch(i){case 5126:return I_;case 35664:return D_;case 35665:return N_;case 35666:return U_;case 35674:return O_;case 35675:return F_;case 35676:return k_;case 5124:case 35670:return z_;case 35667:case 35671:return B_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}class $_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=L_(t.type)}}class Q_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}}class ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],r)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function tv(i,e,t){const r=i.name,a=r.length;for(Jo.lastIndex=0;;){const n=Jo.exec(r),s=Jo.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){nu(t,c===void 0?new $_(o,i,e):new Q_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new ev(o),nu(t,d)),t=d}}}class Vn{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const n=e.getActiveUniform(t,a),s=e.getUniformLocation(t,n.name);tv(n,s,this)}}setValue(e,t,r,a){const n=this.map[t];n!==void 0&&n.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&r.push(s)}return r}}function su(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const iv=37297;let rv=0;function av(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const ou=new nt;function nv(i){vt._getMatrix(ou,vt.workingColorSpace,i);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case hn:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(r&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+av(i.getShaderSource(e),s)}else return a}function sv(i,e){const t=nv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ov(i,e){let t;switch(e){case Gh:t="Linear";break;case Wh:t="Reinhard";break;case Xh:t="Cineon";break;case jh:t="ACESFilmic";break;case qh:t="AgX";break;case Zh:t="Neutral";break;case Yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gn=new B;function lv(){vt.getLuminanceCoefficients(Gn);const i=Gn.x.toFixed(4),e=Gn.y.toFixed(4),t=Gn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function uv(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function dv(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const n=i.getActiveAttrib(e,a),s=n.name;let o=1;n.type===i.FLOAT_MAT2&&(o=2),n.type===i.FLOAT_MAT3&&(o=3),n.type===i.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function za(i){return i!==""}function cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(hv,fv)}const pv=new Map;function fv(i,e){let t=ot[e];if(t===void 0){const r=pv.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ko(t)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(mv,gv)}function gv(i,e,t,r){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function hu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _v(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function vv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vr:case Gr:e="ENVMAP_TYPE_CUBE";break;case nn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Gr&&(e="ENVMAP_MODE_REFRACTION"),e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hh:e="ENVMAP_BLENDING_MIX";break;case Vh:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Mv(i,e,t,r){const a=i.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=_v(t),c=vv(t),d=xv(t),p=yv(t),h=Sv(t),m=cv(t),g=uv(n),v=a.createProgram();let f,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(za).join(`
`),u.length>0&&(u+=`
`)):(f=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),u=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?ot.tonemapping_pars_fragment:"",t.toneMapping!==rr?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),s=Ko(s),s=cu(s,t),s=uu(s,t),o=Ko(o),o=cu(o,t),o=uu(o,t),s=du(s),o=du(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=S+f+s,_=S+u+o,R=su(a,a.VERTEX_SHADER,b),A=su(a,a.FRAGMENT_SHADER,_);a.attachShader(v,R),a.attachShader(v,A),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function w(D){if(i.debug.checkShaderErrors){const O=a.getProgramInfoLog(v).trim(),z=a.getShaderInfoLog(R).trim(),X=a.getShaderInfoLog(A).trim();let ee=!0,Y=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,R,A);else{const ae=lu(a,R,"vertex"),G=lu(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ae+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||X==="")&&(Y=!1);Y&&(D.diagnostics={runnable:ee,programLog:O,vertexShader:{log:z,prefix:f},fragmentShader:{log:X,prefix:u}})}a.deleteShader(R),a.deleteShader(A),P=new Vn(a,v),T=dv(a,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(v,iv)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let bv=0;class Ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Tv(e),t.set(e,r)),r}}class Tv{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}}function wv(i,e,t,r,a,n,s){const o=new yo,l=new Ev,c=new Set,d=[],p=a.logarithmicDepthBuffer,h=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function f(T,M,D,O,z){const X=O.fog,ee=z.geometry,Y=T.isMeshStandardMaterial?O.environment:null,ae=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),G=ae&&ae.mapping===nn?ae.image.height:null,le=g[T.type];T.precision!==null&&(m=a.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const J=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ne=J!==void 0?J.length:0;let me=0;ee.morphAttributes.position!==void 0&&(me=1),ee.morphAttributes.normal!==void 0&&(me=2),ee.morphAttributes.color!==void 0&&(me=3);let ye,H,K,oe;if(le){const mt=Di[le];ye=mt.vertexShader,H=mt.fragmentShader}else ye=T.vertexShader,H=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),oe=l.getFragmentShaderID(T);const he=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,Ye=!!T.map,Je=!!T.matcap,ct=!!ae,I=!!T.aoMap,Se=!!T.lightMap,xe=!!T.bumpMap,qe=!!T.normalMap,C=!!T.displacementMap,L=!!T.emissiveMap,W=!!T.metalnessMap,re=!!T.roughnessMap,V=T.anisotropy>0,y=T.clearcoat>0,x=T.dispersion>0,U=T.iridescence>0,$=T.sheen>0,ie=T.transmission>0,Q=V&&!!T.anisotropyMap,Ve=y&&!!T.clearcoatMap,be=y&&!!T.clearcoatNormalMap,Fe=y&&!!T.clearcoatRoughnessMap,Ne=U&&!!T.iridescenceMap,se=U&&!!T.iridescenceThicknessMap,De=$&&!!T.sheenColorMap,Qe=$&&!!T.sheenRoughnessMap,Ze=!!T.specularMap,Te=!!T.specularColorMap,Ke=!!T.specularIntensityMap,N=ie&&!!T.transmissionMap,Ce=ie&&!!T.thicknessMap,ue=!!T.gradientMap,ke=!!T.alphaMap,ge=T.alphaTest>0,te=!!T.alphaHash,Pe=!!T.extensions;let Xe=rr;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const Ct={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:H,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:Je,envMap:ct,envMapMode:ct&&ae.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Se,bumpMap:xe,normalMap:qe,displacementMap:h&&C,emissiveMap:L,normalMapObjectSpace:qe&&T.normalMapType===ep,normalMapTangentSpace:qe&&T.normalMapType===Qh,metalnessMap:W,roughnessMap:re,anisotropy:V,anisotropyMap:Q,clearcoat:y,clearcoatMap:Ve,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,dispersion:x,iridescence:U,iridescenceMap:Ne,iridescenceThicknessMap:se,sheen:$,sheenColorMap:De,sheenRoughnessMap:Qe,specularMap:Ze,specularColorMap:Te,specularIntensityMap:Ke,transmission:ie,transmissionMap:N,thicknessMap:Ce,gradientMap:ue,opaque:T.transparent===!1&&T.blending===Br&&T.alphaToCoverage===!1,alphaMap:ke,alphaTest:ge,alphaHash:te,combine:T.combine,mapUv:Ye&&v(T.map.channel),aoMapUv:I&&v(T.aoMap.channel),lightMapUv:Se&&v(T.lightMap.channel),bumpMapUv:xe&&v(T.bumpMap.channel),normalMapUv:qe&&v(T.normalMap.channel),displacementMapUv:C&&v(T.displacementMap.channel),emissiveMapUv:L&&v(T.emissiveMap.channel),metalnessMapUv:W&&v(T.metalnessMap.channel),roughnessMapUv:re&&v(T.roughnessMap.channel),anisotropyMapUv:Q&&v(T.anisotropyMap.channel),clearcoatMapUv:Ve&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ze&&v(T.specularMap.channel),specularColorMapUv:Te&&v(T.specularColorMap.channel),specularIntensityMapUv:Ke&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:Ce&&v(T.thicknessMap.channel),alphaMapUv:ke&&v(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(qe||V),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(Ye||ke),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ce,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===wt,decodeVideoTextureEmissive:L&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bi,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(S(M,T),b(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function S(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function _(T){const M=g[T.type];let D;if(M){const O=Di[M];D=Yp.clone(O.uniforms)}else D=T.uniforms;return D}function R(T,M){let D;for(let O=0,z=d.length;O<z;O++){const X=d[O];if(X.cacheKey===M){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Mv(i,M,T,n),d.push(D)),D}function A(T){if(--T.usedTimes===0){const M=d.indexOf(T);d[M]=d[d.length-1],d.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:P}}function Av(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function n(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:n}}function Cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fu(){const i=[];let e=0;const t=[],r=[],a=[];function n(){e=0,t.length=0,r.length=0,a.length=0}function s(p,h,m,g,v,f){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:f},i[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=f),e++,u}function o(p,h,m,g,v,f){const u=s(p,h,m,g,v,f);m.transmission>0?r.push(u):m.transparent===!0?a.push(u):t.push(u)}function l(p,h,m,g,v,f){const u=s(p,h,m,g,v,f);m.transmission>0?r.unshift(u):m.transparent===!0?a.unshift(u):t.unshift(u)}function c(p,h){t.length>1&&t.sort(p||Cv),r.length>1&&r.sort(h||pu),a.length>1&&a.sort(h||pu)}function d(){for(let p=e,h=i.length;p<h;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:d,sort:c}}function Rv(){let i=new WeakMap;function e(r,a){const n=i.get(r);let s;return n===void 0?(s=new fu,i.set(r,[s])):a>=n.length?(s=new fu,n.push(s)):s=n[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new at};break;case"SpotLight":t={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Iv=0;function Dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nv(i){const e=new Pv,t=Lv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const a=new B,n=new Lt,s=new Lt;function o(c){let d=0,p=0,h=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let m=0,g=0,v=0,f=0,u=0,S=0,b=0,_=0,R=0,A=0,w=0;c.sort(Dv);for(let T=0,M=c.length;T<M;T++){const D=c[T],O=D.color,z=D.intensity,X=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*z,p+=O.g*z,h+=O.b*z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(D.sh.coefficients[Y],z);w++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=ee,r.directionalShadowMatrix[m]=D.shadow.matrix,S++}r.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,r.spot[v]=Y;const ae=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,ae.updateMatrices(D),D.castShadow&&A++),r.spotLightMatrix[v]=ae.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,r.spotShadow[v]=G,r.spotShadowMap[v]=ee,_++}v++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),r.rectArea[f]=Y,f++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ae=D.shadow,G=t.get(D);G.shadowIntensity=ae.intensity,G.shadowBias=ae.bias,G.shadowNormalBias=ae.normalBias,G.shadowRadius=ae.radius,G.shadowMapSize=ae.mapSize,G.shadowCameraNear=ae.camera.near,G.shadowCameraFar=ae.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=ee,r.pointShadowMatrix[g]=D.shadow.matrix,b++}r.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(z),Y.groundColor.copy(D.groundColor).multiplyScalar(z),r.hemi[u]=Y,u++}}f>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=h;const P=r.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==f||P.hemiLength!==u||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==w)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=f,r.point.length=g,r.hemi.length=u,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=_+R-A,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=w,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=f,P.hemiLength=u,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=w,r.version=Iv++)}function l(c,d){let p=0,h=0,m=0,g=0,v=0;const f=d.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){const b=c[u];if(b.isDirectionalLight){const _=r.directional[p];_.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(f),p++}else if(b.isSpotLight){const _=r.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(f),m++}else if(b.isRectAreaLight){const _=r.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(f),s.identity(),n.copy(b.matrixWorld),n.premultiply(f),s.extractRotation(n),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const _=r.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(f),h++}else if(b.isHemisphereLight){const _=r.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:r}}function mu(i){const e=new Nv(i),t=[],r=[];function a(d){c.camera=d,t.length=0,r.length=0}function n(d){t.push(d)}function s(d){r.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Uv(i){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new mu(i),e.set(a,[o])):n>=s.length?(o=new mu(i),s.push(o)):o=s[n],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kv(i,e,t){let r=new Fo;const a=new ft,n=new ft,s=new Ot,o=new lf({depthPacking:$h}),l=new cf,c={},d=t.maxTextureSize,p={[tr]:si,[si]:tr,[bi]:bi},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Ov,fragmentShader:Fv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new pi;g.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new di(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let u=this.type;this.render=function(A,w,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ir),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=u!==ki&&this.type===ki,X=u===ki&&this.type!==ki;for(let ee=0,Y=A.length;ee<Y;ee++){const ae=A[ee],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const le=G.getFrameExtents();if(a.multiply(le),n.copy(G.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(n.x=Math.floor(d/le.x),a.x=n.x*le.x,G.mapSize.x=n.x),a.y>d&&(n.y=Math.floor(d/le.y),a.y=n.y*le.y,G.mapSize.y=n.y)),G.map===null||z===!0||X===!0){const ne=this.type!==ki?{minFilter:Bt,magFilter:Bt}:{};G.map!==null&&G.map.dispose(),G.map=new nr(a.x,a.y,ne),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const J=G.getViewportCount();for(let ne=0;ne<J;ne++){const me=G.getViewport(ne);s.set(n.x*me.x,n.y*me.y,n.x*me.z,n.y*me.w),O.viewport(s),G.updateMatrices(ae,ne),r=G.getFrustum(),_(w,P,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===ki&&S(G,P),G.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(T,M,D)};function S(A,w){const P=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new nr(a.x,a.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,P,h,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,P,m,v,null)}function b(A,w,P,T){let M=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=M.uuid,z=w.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let ee=X[z];ee===void 0&&(ee=M.clone(),X[z]=ee,w.addEventListener("dispose",R)),M=ee}if(M.visible=w.visible,M.wireframe=w.wireframe,T===ki?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:p[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=P}return M}function _(A,w,P,T,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ki)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),z=A.material;if(Array.isArray(z)){const X=O.groups;for(let ee=0,Y=X.length;ee<Y;ee++){const ae=X[ee],G=z[ae.materialIndex];if(G&&G.visible){const le=b(A,G,T,M);A.onBeforeShadow(i,A,w,P,O,le,ae),i.renderBufferDirect(P,null,O,le,A,ae),A.onAfterShadow(i,A,w,P,O,le,ae)}}}else if(z.visible){const X=b(A,z,T,M);A.onBeforeShadow(i,A,w,P,O,X,null),i.renderBufferDirect(P,null,O,X,A,null),A.onAfterShadow(i,A,w,P,O,X,null)}}const D=A.children;for(let O=0,z=D.length;O<z;O++)_(D[O],w,P,T,M)}function R(A){A.target.removeEventListener("dispose",R);for(const w in c){const P=c[w],T=A.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}const zv={[vs]:xs,[ys]:bs,[Ss]:Es,[Hr]:Ms,[xs]:vs,[bs]:ys,[Es]:Ss,[Ms]:Hr};function Bv(i,e){function t(){let N=!1;const Ce=new Ot;let ue=null;const ke=new Ot(0,0,0,0);return{setMask:function(ge){ue!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),ue=ge)},setLocked:function(ge){N=ge},setClear:function(ge,te,Pe,Xe,Ct){Ct===!0&&(ge*=Xe,te*=Xe,Pe*=Xe),Ce.set(ge,te,Pe,Xe),ke.equals(Ce)===!1&&(i.clearColor(ge,te,Pe,Xe),ke.copy(Ce))},reset:function(){N=!1,ue=null,ke.set(-1,0,0,0)}}}function r(){let N=!1,Ce=!1,ue=null,ke=null,ge=null;return{setReversed:function(te){if(Ce!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ce=te;const Xe=ge;ge=null,this.setClear(Xe)}},getReversed:function(){return Ce},setTest:function(te){te?he(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(te){ue!==te&&!N&&(i.depthMask(te),ue=te)},setFunc:function(te){if(Ce&&(te=zv[te]),ke!==te){switch(te){case vs:i.depthFunc(i.NEVER);break;case xs:i.depthFunc(i.ALWAYS);break;case ys:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case Ss:i.depthFunc(i.EQUAL);break;case Ms:i.depthFunc(i.GEQUAL);break;case bs:i.depthFunc(i.GREATER);break;case Es:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=te}},setLocked:function(te){N=te},setClear:function(te){ge!==te&&(Ce&&(te=1-te),i.clearDepth(te),ge=te)},reset:function(){N=!1,ue=null,ke=null,ge=null,Ce=!1}}}function a(){let N=!1,Ce=null,ue=null,ke=null,ge=null,te=null,Pe=null,Xe=null,Ct=null;return{setTest:function(mt){N||(mt?he(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!N&&(i.stencilMask(mt),Ce=mt)},setFunc:function(mt,ti,yi){(ue!==mt||ke!==ti||ge!==yi)&&(i.stencilFunc(mt,ti,yi),ue=mt,ke=ti,ge=yi)},setOp:function(mt,ti,yi){(te!==mt||Pe!==ti||Xe!==yi)&&(i.stencilOp(mt,ti,yi),te=mt,Pe=ti,Xe=yi)},setLocked:function(mt){N=mt},setClear:function(mt){Ct!==mt&&(i.clearStencil(mt),Ct=mt)},reset:function(){N=!1,Ce=null,ue=null,ke=null,ge=null,te=null,Pe=null,Xe=null,Ct=null}}}const n=new t,s=new r,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},h=new WeakMap,m=[],g=null,v=!1,f=null,u=null,S=null,b=null,_=null,R=null,A=null,w=new at(0,0,0),P=0,T=!1,M=null,D=null,O=null,z=null,X=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ae=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=ae>=2);let le=null,J={};const ne=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),ye=new Ot().fromArray(ne),H=new Ot().fromArray(me);function K(N,Ce,ue,ke){const ge=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<ue;Pe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(Ce+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return te}const oe={};oe[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(i.DEPTH_TEST),s.setFunc(Hr),xe(!1),qe(Ul),he(i.CULL_FACE),I(ir);function he(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ce(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ae(N,Ce){return p[N]!==Ce?(i.bindFramebuffer(N,Ce),p[N]=Ce,N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ce),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Be(N,Ce){let ue=m,ke=!1;if(N){ue=h.get(Ce),ue===void 0&&(ue=[],h.set(Ce,ue));const ge=N.textures;if(ue.length!==ge.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Pe=ge.length;te<Pe;te++)ue[te]=i.COLOR_ATTACHMENT0+te;ue.length=ge.length,ke=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ke=!0);ke&&i.drawBuffers(ue)}function Ye(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Je={[xr]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};Je[wh]=i.MIN,Je[Ah]=i.MAX;const ct={[Ch]:i.ZERO,[Rh]:i.ONE,[Ph]:i.SRC_COLOR,[gs]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[_s]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[kh]:i.ONE_MINUS_CONSTANT_COLOR,[zh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,Ce,ue,ke,ge,te,Pe,Xe,Ct,mt){if(N===ir){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),N!==bh){if(N!==f||mt!==T){if((u!==xr||_!==xr)&&(i.blendEquation(i.FUNC_ADD),u=xr,_=xr),mt)switch(N){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,b=null,R=null,A=null,w.set(0,0,0),P=0,f=N,T=mt}return}ge=ge||Ce,te=te||ue,Pe=Pe||ke,(Ce!==u||ge!==_)&&(i.blendEquationSeparate(Je[Ce],Je[ge]),u=Ce,_=ge),(ue!==S||ke!==b||te!==R||Pe!==A)&&(i.blendFuncSeparate(ct[ue],ct[ke],ct[te],ct[Pe]),S=ue,b=ke,R=te,A=Pe),(Xe.equals(w)===!1||Ct!==P)&&(i.blendColor(Xe.r,Xe.g,Xe.b,Ct),w.copy(Xe),P=Ct),f=N,T=!1}function Se(N,Ce){N.side===bi?ce(i.CULL_FACE):he(i.CULL_FACE);let ue=N.side===si;Ce&&(ue=!ue),xe(ue),N.blending===Br&&N.transparent===!1?I(ir):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),n.setMask(N.colorWrite);const ke=N.stencilWrite;o.setTest(ke),ke&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function qe(N){N!==yh?(he(i.CULL_FACE),N!==D&&(N===Ul?i.cullFace(i.BACK):N===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),D=N}function C(N){N!==O&&(Y&&i.lineWidth(N),O=N)}function L(N,Ce,ue){N?(he(i.POLYGON_OFFSET_FILL),(z!==Ce||X!==ue)&&(i.polygonOffset(Ce,ue),z=Ce,X=ue)):ce(i.POLYGON_OFFSET_FILL)}function W(N){N?he(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function re(N){N===void 0&&(N=i.TEXTURE0+ee-1),le!==N&&(i.activeTexture(N),le=N)}function V(N,Ce,ue){ue===void 0&&(le===null?ue=i.TEXTURE0+ee-1:ue=le);let ke=J[ue];ke===void 0&&(ke={type:void 0,texture:void 0},J[ue]=ke),(ke.type!==N||ke.texture!==Ce)&&(le!==ue&&(i.activeTexture(ue),le=ue),i.bindTexture(N,Ce||oe[N]),ke.type=N,ke.texture=Ce)}function y(){const N=J[le];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){ye.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function Qe(N){H.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function Ze(N,Ce){let ue=c.get(Ce);ue===void 0&&(ue=new WeakMap,c.set(Ce,ue));let ke=ue.get(N);ke===void 0&&(ke=i.getUniformBlockIndex(Ce,N.name),ue.set(N,ke))}function Te(N,Ce){const ue=c.get(Ce).get(N);l.get(Ce)!==ue&&(i.uniformBlockBinding(Ce,ue,N.__bindingPointIndex),l.set(Ce,ue))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},le=null,J={},p={},h=new WeakMap,m=[],g=null,v=!1,f=null,u=null,S=null,b=null,_=null,R=null,A=null,w=new at(0,0,0),P=0,T=!1,M=null,D=null,O=null,z=null,X=null,ye.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:he,disable:ce,bindFramebuffer:Ae,drawBuffers:Be,useProgram:Ye,setBlending:I,setMaterial:Se,setFlipSided:xe,setCullFace:qe,setLineWidth:C,setPolygonOffset:L,setScissorTest:W,activeTexture:re,bindTexture:V,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ne,texImage3D:se,updateUBOMapping:Ze,uniformBlockBinding:Te,texStorage2D:be,texStorage3D:Fe,texSubImage2D:$,texSubImage3D:ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ve,scissor:De,viewport:Qe,reset:Ke}}function Hv(i,e,t,r,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,d=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return m?new OffscreenCanvas(y,x):fn("canvas")}function v(y,x,U){let $=1;const ie=V(y);if((ie.width>U||ie.height>U)&&($=U/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Q=Math.floor($*ie.width),Ve=Math.floor($*ie.height);p===void 0&&(p=g(Q,Ve));const be=x?g(Q,Ve):p;return be.width=Q,be.height=Ve,be.getContext("2d").drawImage(y,0,0,Q,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Ve+")."),be}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function f(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function S(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,x,U,$,ie=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=x;if(x===i.RED&&(U===i.FLOAT&&(Q=i.R32F),U===i.HALF_FLOAT&&(Q=i.R16F),U===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.R8UI),U===i.UNSIGNED_SHORT&&(Q=i.R16UI),U===i.UNSIGNED_INT&&(Q=i.R32UI),U===i.BYTE&&(Q=i.R8I),U===i.SHORT&&(Q=i.R16I),U===i.INT&&(Q=i.R32I)),x===i.RG&&(U===i.FLOAT&&(Q=i.RG32F),U===i.HALF_FLOAT&&(Q=i.RG16F),U===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RG8UI),U===i.UNSIGNED_SHORT&&(Q=i.RG16UI),U===i.UNSIGNED_INT&&(Q=i.RG32UI),U===i.BYTE&&(Q=i.RG8I),U===i.SHORT&&(Q=i.RG16I),U===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),U===i.UNSIGNED_INT&&(Q=i.RGB32UI),U===i.BYTE&&(Q=i.RGB8I),U===i.SHORT&&(Q=i.RGB16I),U===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),U===i.UNSIGNED_INT&&(Q=i.RGBA32UI),U===i.BYTE&&(Q=i.RGBA8I),U===i.SHORT&&(Q=i.RGBA16I),U===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){const Ve=ie?hn:vt.getTransfer($);U===i.FLOAT&&(Q=i.RGBA32F),U===i.HALF_FLOAT&&(Q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Q=Ve===wt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(y,x){let U;return y?x===null||x===Mr||x===Aa?U=i.DEPTH24_STENCIL8:x===fi?U=i.DEPTH32F_STENCIL8:x===Ta&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mr||x===Aa?U=i.DEPTH_COMPONENT24:x===fi?U=i.DEPTH_COMPONENT32F:x===Ta&&(U=i.DEPTH_COMPONENT16),U}function R(y,x){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==Pi?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function A(y){const x=y.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&d.delete(x)}function w(y){const x=y.target;x.removeEventListener("dispose",w),M(x)}function P(y){const x=r.get(y);if(x.__webglInit===void 0)return;const U=y.source,$=h.get(U);if($){const ie=$[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(y),Object.keys($).length===0&&h.delete(U)}r.remove(y)}function T(y){const x=r.get(y);i.deleteTexture(x.__webglTexture);const U=y.source,$=h.get(U);delete $[x.__cacheKey],s.memory.textures--}function M(y){const x=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ie=0;ie<x.__webglFramebuffer[$].length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[$][ie]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=y.textures;for(let $=0,ie=U.length;$<ie;$++){const Q=r.get(U[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(U[$])}r.remove(y)}let D=0;function O(){D=0}function z(){const y=D;return y>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),D+=1,y}function X(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function ee(y,x){const U=r.get(y);if(y.isVideoTexture&&W(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,y,x);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function Y(y,x){const U=r.get(y);if(y.version>0&&U.__version!==y.version){oe(U,y,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function ae(y,x){const U=r.get(y);if(y.version>0&&U.__version!==y.version){oe(U,y,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function G(y,x){const U=r.get(y);if(y.version>0&&U.__version!==y.version){he(U,y,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const le={[As]:i.REPEAT,[yr]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},J={[Bt]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[sn]:i.NEAREST_MIPMAP_LINEAR,[Pi]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Sr]:i.LINEAR_MIPMAP_LINEAR},ne={[tp]:i.NEVER,[op]:i.ALWAYS,[ip]:i.LESS,[Kl]:i.LEQUAL,[rp]:i.EQUAL,[sp]:i.GEQUAL,[ap]:i.GREATER,[np]:i.NOTEQUAL};function me(y,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Pi||x.magFilter===Rs||x.magFilter===sn||x.magFilter===Sr||x.minFilter===Pi||x.minFilter===Rs||x.minFilter===sn||x.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,le[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,le[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,le[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,J[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==sn&&x.minFilter!==Sr||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function ye(y,x){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",A));const $=x.source;let ie=h.get($);ie===void 0&&(ie={},h.set($,ie));const Q=X(x);if(Q!==y.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,U=!0),ie[Q].usedTimes++;const Ve=ie[y.__cacheKey];Ve!==void 0&&(ie[y.__cacheKey].usedTimes--,Ve.usedTimes===0&&T(x)),y.__cacheKey=Q,y.__webglTexture=ie[Q].texture}return U}function H(y,x,U){return Math.floor(Math.floor(y/U)/x)}function K(y,x,U,$){const ie=y.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,$,x.data);else{ie.sort((Ne,se)=>Ne.start-se.start);let Q=0;for(let Ne=1;Ne<ie.length;Ne++){const se=ie[Q],De=ie[Ne],Qe=se.start+se.count,Ze=H(De.start,x.width,4),Te=H(se.start,x.width,4);De.start<=Qe+1&&Ze===Te&&H(De.start+De.count-1,x.width,4)===Ze?se.count=Math.max(se.count,De.start+De.count-se.start):(++Q,ie[Q]=De)}ie.length=Q+1;const Ve=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ne=0,se=ie.length;Ne<se;Ne++){const De=ie[Ne],Qe=Math.floor(De.start/4),Ze=Math.ceil(De.count/4),Te=Qe%x.width,Ke=Math.floor(Qe/x.width),N=Ze;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(i.TEXTURE_2D,0,Te,Ke,N,1,U,$,x.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function oe(y,x,U){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const ie=ye(y,x),Q=x.source;t.bindTexture($,y.__webglTexture,i.TEXTURE0+U);const Ve=r.get(Q);if(Q.version!==Ve.__version||ie===!0){t.activeTexture(i.TEXTURE0+U);const be=vt.getPrimaries(vt.workingColorSpace),Fe=x.colorSpace===ar?null:vt.getPrimaries(x.colorSpace),Ne=x.colorSpace===ar||be===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let se=v(x.image,!1,a.maxTextureSize);se=re(x,se);const De=n.convert(x.format,x.colorSpace),Qe=n.convert(x.type);let Ze=b(x.internalFormat,De,Qe,x.colorSpace,x.isVideoTexture);me($,x);let Te;const Ke=x.mipmaps,N=x.isVideoTexture!==!0,Ce=Ve.__version===void 0||ie===!0,ue=Q.dataReady,ke=R(x,se);if(x.isDepthTexture)Ze=_(x.format===Ra,x.type),Ce&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ze,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ze,se.width,se.height,0,De,Qe,null));else if(x.isDataTexture)if(Ke.length>0){N&&Ce&&t.texStorage2D(i.TEXTURE_2D,ke,Ze,Ke[0].width,Ke[0].height);for(let ge=0,te=Ke.length;ge<te;ge++)Te=Ke[ge],N?ue&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Te.width,Te.height,De,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,Te.width,Te.height,0,De,Qe,Te.data);x.generateMipmaps=!1}else N?(Ce&&t.texStorage2D(i.TEXTURE_2D,ke,Ze,se.width,se.height),ue&&K(x,se,De,Qe)):t.texImage2D(i.TEXTURE_2D,0,Ze,se.width,se.height,0,De,Qe,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ze,Ke[0].width,Ke[0].height,se.depth);for(let ge=0,te=Ke.length;ge<te;ge++)if(Te=Ke[ge],x.format!==oi)if(De!==null)if(N){if(ue)if(x.layerUpdates.size>0){const Pe=Bc(Te.width,Te.height,x.format,x.type);for(const Xe of x.layerUpdates){const Ct=Te.data.subarray(Xe*Pe/Te.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Xe,Te.width,Te.height,1,De,Ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Te.width,Te.height,se.depth,De,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,Te.width,Te.height,se.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Te.width,Te.height,se.depth,De,Qe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,Te.width,Te.height,se.depth,0,De,Qe,Te.data)}else{N&&Ce&&t.texStorage2D(i.TEXTURE_2D,ke,Ze,Ke[0].width,Ke[0].height);for(let ge=0,te=Ke.length;ge<te;ge++)Te=Ke[ge],x.format!==oi?De!==null?N?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ue&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Te.width,Te.height,De,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,Te.width,Te.height,0,De,Qe,Te.data)}else if(x.isDataArrayTexture)if(N){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ze,se.width,se.height,se.depth),ue)if(x.layerUpdates.size>0){const ge=Bc(se.width,se.height,x.format,x.type);for(const te of x.layerUpdates){const Pe=se.data.subarray(te*ge/se.data.BYTES_PER_ELEMENT,(te+1)*ge/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,De,Qe,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,De,Qe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,se.width,se.height,se.depth,0,De,Qe,se.data);else if(x.isData3DTexture)N?(Ce&&t.texStorage3D(i.TEXTURE_3D,ke,Ze,se.width,se.height,se.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,De,Qe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,se.width,se.height,se.depth,0,De,Qe,se.data);else if(x.isFramebufferTexture){if(Ce)if(N)t.texStorage2D(i.TEXTURE_2D,ke,Ze,se.width,se.height);else{let ge=se.width,te=se.height;for(let Pe=0;Pe<ke;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ze,ge,te,0,De,Qe,null),ge>>=1,te>>=1}}else if(Ke.length>0){if(N&&Ce){const ge=V(Ke[0]);t.texStorage2D(i.TEXTURE_2D,ke,Ze,ge.width,ge.height)}for(let ge=0,te=Ke.length;ge<te;ge++)Te=Ke[ge],N?ue&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,De,Qe,Te):t.texImage2D(i.TEXTURE_2D,ge,Ze,De,Qe,Te);x.generateMipmaps=!1}else if(N){if(Ce){const ge=V(se);t.texStorage2D(i.TEXTURE_2D,ke,Ze,ge.width,ge.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Qe,se)}else t.texImage2D(i.TEXTURE_2D,0,Ze,De,Qe,se);f(x)&&u($),Ve.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function he(y,x,U){if(x.image.length!==6)return;const $=ye(y,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+U);const Q=r.get(ie);if(ie.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+U);const Ve=vt.getPrimaries(vt.workingColorSpace),be=x.colorSpace===ar?null:vt.getPrimaries(x.colorSpace),Fe=x.colorSpace===ar||Ve===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,De=[];for(let te=0;te<6;te++)!Ne&&!se?De[te]=v(x.image[te],!0,a.maxCubemapSize):De[te]=se?x.image[te].image:x.image[te],De[te]=re(x,De[te]);const Qe=De[0],Ze=n.convert(x.format,x.colorSpace),Te=n.convert(x.type),Ke=b(x.internalFormat,Ze,Te,x.colorSpace),N=x.isVideoTexture!==!0,Ce=Q.__version===void 0||$===!0,ue=ie.dataReady;let ke=R(x,Qe);me(i.TEXTURE_CUBE_MAP,x);let ge;if(Ne){N&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Ke,Qe.width,Qe.height);for(let te=0;te<6;te++){ge=De[te].mipmaps;for(let Pe=0;Pe<ge.length;Pe++){const Xe=ge[Pe];x.format!==oi?Ze!==null?N?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Xe.width,Xe.height,Ze,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,Ke,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Xe.width,Xe.height,Ze,Te,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,Ke,Xe.width,Xe.height,0,Ze,Te,Xe.data)}}}else{if(ge=x.mipmaps,N&&Ce){ge.length>0&&ke++;const te=V(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Ke,te.width,te.height)}for(let te=0;te<6;te++)if(se){N?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De[te].width,De[te].height,Ze,Te,De[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,De[te].width,De[te].height,0,Ze,Te,De[te].data);for(let Pe=0;Pe<ge.length;Pe++){const Xe=ge[Pe].image[te].image;N?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Xe.width,Xe.height,Ze,Te,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,Ke,Xe.width,Xe.height,0,Ze,Te,Xe.data)}}else{N?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ze,Te,De[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,Ze,Te,De[te]);for(let Pe=0;Pe<ge.length;Pe++){const Xe=ge[Pe];N?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ze,Te,Xe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,Ke,Ze,Te,Xe.image[te])}}}f(x)&&u(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ce(y,x,U,$,ie,Q){const Ve=n.convert(U.format,U.colorSpace),be=n.convert(U.type),Fe=b(U.internalFormat,Ve,be,U.colorSpace),Ne=r.get(x),se=r.get(U);if(se.__renderTarget=x,!Ne.__hasExternalTextures){const De=Math.max(1,x.width>>Q),Qe=Math.max(1,x.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,Fe,De,Qe,x.depth,0,Ve,be,null):t.texImage2D(ie,Q,Fe,De,Qe,0,Ve,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),L(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ie,se.__webglTexture,0,C(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ie,se.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(y,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){const $=x.depthTexture,ie=$&&$.isDepthTexture?$.type:null,Q=_(x.stencilBuffer,ie),Ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=C(x);L(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Q,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,y)}else{const $=x.textures;for(let ie=0;ie<$.length;ie++){const Q=$[ie],Ve=n.convert(Q.format,Q.colorSpace),be=n.convert(Q.type),Fe=b(Q.internalFormat,Ve,be,Q.colorSpace),Ne=C(x);U&&L(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Fe,x.width,x.height):L(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=r.get(x.depthTexture);U.__renderTarget=x,(!U.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const $=U.__webglTexture,ie=C(x);if(x.depthTexture.format===Ca)L(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===Ra)L(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ye(y){const x=r.get(y),U=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const $=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=$}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const $=y.texture.mipmaps;$&&$.length>0?Be(x.__webglFramebuffer[0],y):Be(x.__webglFramebuffer,y)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Ae(x.__webglDepthbuffer[$],y,!1);else{const ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}else{const $=y.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ae(x.__webglDepthbuffer,y,!1);else{const ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(y,x,U){const $=r.get(y);x!==void 0&&ce($.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ye(y)}function ct(y){const x=y.texture,U=r.get(y),$=r.get(x);y.addEventListener("dispose",w);const ie=y.textures,Q=y.isWebGLCubeRenderTarget===!0,Ve=ie.length>1;if(Ve||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,s.memory.textures++),Q){U.__webglFramebuffer=[];for(let be=0;be<6;be++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[be]=[];for(let Fe=0;Fe<x.mipmaps.length;Fe++)U.__webglFramebuffer[be][Fe]=i.createFramebuffer()}else U.__webglFramebuffer[be]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let be=0;be<x.mipmaps.length;be++)U.__webglFramebuffer[be]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let be=0,Fe=ie.length;be<Fe;be++){const Ne=r.get(ie[be]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),s.memory.textures++)}if(y.samples>0&&L(y)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let be=0;be<ie.length;be++){const Fe=ie[be];U.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[be]);const Ne=n.convert(Fe.format,Fe.colorSpace),se=n.convert(Fe.type),De=b(Fe.internalFormat,Ne,se,Fe.colorSpace,y.isXRRenderTarget===!0),Qe=C(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,De,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,U.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),me(i.TEXTURE_CUBE_MAP,x);for(let be=0;be<6;be++)if(x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)ce(U.__webglFramebuffer[be][Fe],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else ce(U.__webglFramebuffer[be],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);f(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let be=0,Fe=ie.length;be<Fe;be++){const Ne=ie[be],se=r.get(Ne);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),me(i.TEXTURE_2D,Ne),ce(U.__webglFramebuffer,y,Ne,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),f(Ne)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,$.__webglTexture),me(be,x),x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)ce(U.__webglFramebuffer[Fe],y,x,i.COLOR_ATTACHMENT0,be,Fe);else ce(U.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,be,0);f(x)&&u(be),t.unbindTexture()}y.depthBuffer&&Ye(y)}function I(y){const x=y.textures;for(let U=0,$=x.length;U<$;U++){const ie=x[U];if(f(ie)){const Q=S(y),Ve=r.get(ie).__webglTexture;t.bindTexture(Q,Ve),u(Q),t.unbindTexture()}}}const Se=[],xe=[];function qe(y){if(y.samples>0){if(L(y)===!1){const x=y.textures,U=y.width,$=y.height;let ie=i.COLOR_BUFFER_BIT;const Q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=r.get(y),be=x.length>1;if(be)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Fe=y.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const se=r.get(x[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,ie,i.NEAREST),l===!0&&(Se.length=0,xe.length=0,Se.push(i.COLOR_ATTACHMENT0+Ne),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Se.push(Q),xe.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const se=r.get(x[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function C(y){return Math.min(a.maxSamples,y.samples)}function L(y){const x=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function W(y){const x=s.render.frame;d.get(y)!==x&&(d.set(y,x),y.update())}function re(y,x){const U=y.colorSpace,$=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==Wr&&U!==ar&&(vt.getTransfer(U)===wt?($!==oi||ie!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function V(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=Je,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=L}function Vv(i,e){function t(r,a=ar){let n;const s=vt.getTransfer(a);if(r===Li)return i.UNSIGNED_BYTE;if(r===Ls)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Is)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Vl)return i.BYTE;if(r===Gl)return i.SHORT;if(r===Ta)return i.UNSIGNED_SHORT;if(r===Ps)return i.INT;if(r===Mr)return i.UNSIGNED_INT;if(r===fi)return i.FLOAT;if(r===wa)return i.HALF_FLOAT;if(r===Xl)return i.ALPHA;if(r===jl)return i.RGB;if(r===oi)return i.RGBA;if(r===Ca)return i.DEPTH_COMPONENT;if(r===Ra)return i.DEPTH_STENCIL;if(r===Yl)return i.RED;if(r===Ds)return i.RED_INTEGER;if(r===ql)return i.RG;if(r===Ns)return i.RG_INTEGER;if(r===Us)return i.RGBA_INTEGER;if(r===on||r===ln||r===cn||r===un)if(s===wt)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===on)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ln)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===un)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===on)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ln)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===un)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Os||r===Fs||r===ks||r===zs)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Os)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fs)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ks)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bs||r===Hs||r===Vs)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Bs||r===Hs)return s===wt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Vs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gs||r===Ws||r===Xs||r===js||r===Ys||r===qs||r===Zs||r===Js||r===Ks||r===$s||r===Qs||r===eo||r===to||r===io)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Gs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ws)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===js)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ys)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Js)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ks)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$s)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qs)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eo)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===to)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return s===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dn||r===ro||r===ao)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===dn)return s===wt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ro)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ao)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zl||r===no||r===so||r===oo)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===dn)return n.COMPRESSED_RED_RGTC1_EXT;if(r===no)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===so)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Aa?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new ni,n=e.properties.get(a);n.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new _i({vertexShader:Gv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new ls(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jv extends jr{constructor(e,t){super();const r=this;let a=null,n=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,m=null,g=null;const v=new Xv,f=t.getContextAttributes();let u=null,S=null;const b=[],_=[],R=new ft;let A=null;const w=new hi;w.viewport=new Ot;const P=new hi;P.viewport=new Ot;const T=[w,P],M=new pf;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=b[H];return K===void 0&&(K=new Do,b[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=b[H];return K===void 0&&(K=new Do,b[H]=K),K.getGripSpace()},this.getHand=function(H){let K=b[H];return K===void 0&&(K=new Do,b[H]=K),K.getHandSpace()};function z(H){const K=_.indexOf(H.inputSource);if(K===-1)return;const oe=b[K];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||s),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",ee);for(let H=0;H<b.length;H++){const K=_[H];K!==null&&(_[H]=null,b[H].disconnect(K))}D=null,O=null,v.reset(),e.setRenderTarget(u),m=null,h=null,p=null,a=null,S=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){n=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",X),a.addEventListener("inputsourceschange",ee),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,oe=null,he=null;f.depth&&(he=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=f.stencil?Ra:Ca,oe=f.stencil?Aa:Mr);const ce={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:n};p=new XRWebGLBinding(a,t),h=p.createProjectionLayer(ce),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new nr(h.textureWidth,h.textureHeight,{format:oi,type:Li,depthTexture:new Bo(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(a,t,K),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new nr(m.framebufferWidth,m.framebufferHeight,{format:oi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ye.setContext(a),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ee(H){for(let K=0;K<H.removed.length;K++){const oe=H.removed[K],he=_.indexOf(oe);he>=0&&(_[he]=null,b[he].disconnect(oe))}for(let K=0;K<H.added.length;K++){const oe=H.added[K];let he=_.indexOf(oe);if(he===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=_.length){_.push(oe),he=Ae;break}else if(_[Ae]===null){_[Ae]=oe,he=Ae;break}if(he===-1)break}const ce=b[he];ce&&ce.connect(oe)}}const Y=new B,ae=new B;function G(H,K,oe){Y.setFromMatrixPosition(K.matrixWorld),ae.setFromMatrixPosition(oe.matrixWorld);const he=Y.distanceTo(ae),ce=K.projectionMatrix.elements,Ae=oe.projectionMatrix.elements,Be=ce[14]/(ce[10]-1),Ye=ce[14]/(ce[10]+1),Je=(ce[9]+1)/ce[5],ct=(ce[9]-1)/ce[5],I=(ce[8]-1)/ce[0],Se=(Ae[8]+1)/Ae[0],xe=Be*I,qe=Be*Se,C=he/(-I+Se),L=C*-I;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(L),H.translateZ(C),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ce[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const W=Be+C,re=Ye+C,V=xe-L,y=qe+(he-L),x=Je*Ye/re*W,U=ct*Ye/re*W;H.projectionMatrix.makePerspective(V,y,x,U,W,re),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function le(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;let K=H.near,oe=H.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),M.near=P.near=w.near=K,M.far=P.far=w.far=oe,(D!==M.near||O!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,O=M.far),w.layers.mask=H.layers.mask|2,P.layers.mask=H.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const he=H.parent,ce=M.cameras;le(M,he);for(let Ae=0;Ae<ce.length;Ae++)le(ce[Ae],he);ce.length===2?G(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),J(H,M,he)};function J(H,K,oe){oe===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=La*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ne=null;function me(H,K){if(d=K.getViewerPose(c||s),g=K,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let he=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Ae=0;Ae<oe.length;Ae++){const Be=oe[Ae];let Ye=null;if(m!==null)Ye=m.getViewport(Be);else{const ct=p.getViewSubImage(h,Be);Ye=ct.viewport,Ae===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let Je=T[Ae];Je===void 0&&(Je=new hi,Je.layers.enable(Ae),Je.viewport=new Ot,T[Ae]=Je),Je.matrix.fromArray(Be.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Be.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ae===0&&(M.matrix.copy(Je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Je)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&p){const Ae=p.getDepthInformation(oe[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,a.renderState)}}for(let oe=0;oe<b.length;oe++){const he=_[oe],ce=b[oe];he!==null&&ce!==void 0&&ce.update(he,K,c||s)}ne&&ne(H,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),g=null}const ye=new Hc;ye.setAnimationLoop(me),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const Lr=new Ki,Yv=new Lt;function qv(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function r(f,u){u.color.getRGB(f.fogColor.value,Mc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function a(f,u,S,b,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(f,u):u.isMeshToonMaterial?(n(f,u),p(f,u)):u.isMeshPhongMaterial?(n(f,u),d(f,u)):u.isMeshStandardMaterial?(n(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,_)):u.isMeshMatcapMaterial?(n(f,u),g(f,u)):u.isMeshDepthMaterial?n(f,u):u.isMeshDistanceMaterial?(n(f,u),v(f,u)):u.isMeshNormalMaterial?n(f,u):u.isLineBasicMaterial?(s(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,S,b):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===si&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===si&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=e.get(u),b=S.envMap,_=S.envMapRotation;b&&(f.envMap.value=b,Lr.copy(_),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),f.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(Lr)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function s(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,b){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=b*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===si&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function v(f,u){const S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Zv(i,e,t,r){let a={},n={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const _=b.program;r.uniformBlockBinding(S,_)}function c(S,b){let _=a[S.id];_===void 0&&(g(S),_=d(S),a[S.id]=_,S.addEventListener("dispose",f));const R=b.program;r.updateUBOMapping(S,R);const A=e.render.frame;n[S.id]!==A&&(h(S),n[S.id]=A)}function d(S){const b=p();S.__bindingPointIndex=b;const _=i.createBuffer(),R=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function p(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const b=a[S.id],_=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,w=_.length;A<w;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,M=P.length;T<M;T++){const D=P[T];if(m(D,A,T,R)===!0){const O=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let ee=0;ee<z.length;ee++){const Y=z[ee],ae=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,O+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,b,_,R){const A=S.value,w=b+"_"+_;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const b=S.uniforms;let _=0;const R=16;for(let w=0,P=b.length;w<P;w++){const T=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,D=T.length;M<D;M++){const O=T[M],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,ee=z.length;X<ee;X++){const Y=z[X],ae=v(Y),G=_%R,le=G%ae.boundary,J=G+le;_+=le,J!==0&&R-J<ae.storage&&(_+=R-J),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=ae.storage}}}const A=_%R;return A>0&&(_+=R-A),S.__size=_,S.__cache={},this}function v(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function f(S){const b=S.target;b.removeEventListener("dispose",f);const _=s.indexOf(b.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function u(){for(const S in a)i.deleteBuffer(a[S]);s=[],a={},n={}}return{bind:l,update:c,dispose:u}}class Wn{constructor(e={}){const{canvas:t=Tp(),context:r=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=s;const g=new Uint32Array(4),v=new Int32Array(4);let f=null,u=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=mi;let A=0,w=0,P=null,T=-1,M=null;const D=new Ot,O=new Ot;let z=null;const X=new at(0);let ee=0,Y=t.width,ae=t.height,G=1,le=null,J=null;const ne=new Ot(0,0,Y,ae),me=new Ot(0,0,Y,ae);let ye=!1;const H=new Fo;let K=!1,oe=!1;const he=new Lt,ce=new Lt,Ae=new B,Be=new Ot,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ct(){return P===null?G:1}let I=r;function Se(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ms}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",te,!1),I===null){const k="webgl2";if(I=Se(k,E),I===null)throw Se(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,qe,C,L,W,re,V,y,x,U,$,ie,Q,Ve,be,Fe,Ne,se,De,Qe,Ze,Te,Ke,N;function Ce(){xe=new s_(I),xe.init(),Te=new Vv(I,xe),qe=new Qg(I,xe,e,Te),C=new Bv(I,xe),qe.reverseDepthBuffer&&h&&C.buffers.depth.setReversed(!0),L=new c_(I),W=new Av,re=new Hv(I,xe,C,W,qe,Te,L),V=new t_(_),y=new n_(_),x=new mf(I),Ke=new Kg(I,x),U=new o_(I,x,L,Ke),$=new d_(I,U,x,L),De=new u_(I,qe,re),Fe=new e_(W),ie=new wv(_,V,y,xe,qe,Ke,Fe),Q=new qv(_,W),Ve=new Rv,be=new Uv(xe),se=new Jg(_,V,y,C,$,m,l),Ne=new kv(_,$,qe),N=new Zv(I,L,qe,C),Qe=new $g(I,xe,L),Ze=new l_(I,xe,L),L.programs=ie.programs,_.capabilities=qe,_.extensions=xe,_.properties=W,_.renderLists=Ve,_.shadowMap=Ne,_.state=C,_.info=L}Ce();const ue=new jv(_,I);this.xr=ue,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(Y,ae,!1))},this.getSize=function(E){return E.set(Y,ae)},this.setSize=function(E,k,q=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,ae=k,t.width=Math.floor(E*G),t.height=Math.floor(k*G),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Y*G,ae*G).floor()},this.setDrawingBufferSize=function(E,k,q){Y=E,ae=k,G=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,k,q,Z){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,k,q,Z),C.viewport(D.copy(ne).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,k,q,Z){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,k,q,Z),C.scissor(O.copy(me).multiplyScalar(G).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){C.setScissorTest(ye=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let Z=0;if(E){let F=!1;if(P!==null){const pe=P.texture.format;F=pe===Us||pe===Ns||pe===Ds}if(F){const pe=P.texture.type,Ue=pe===Li||pe===Mr||pe===Ta||pe===Aa||pe===Ls||pe===Is,Oe=se.getClearColor(),ze=se.getClearAlpha(),it=Oe.r,$e=Oe.g,et=Oe.b;Ue?(g[0]=it,g[1]=$e,g[2]=et,g[3]=ze,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=it,v[1]=$e,v[2]=et,v[3]=ze,I.clearBufferiv(I.COLOR,0,v))}else Z|=I.COLOR_BUFFER_BIT}k&&(Z|=I.DEPTH_BUFFER_BIT),q&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",te,!1),se.dispose(),Ve.dispose(),be.dispose(),W.dispose(),V.dispose(),y.dispose(),$.dispose(),Ke.dispose(),N.dispose(),ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ka),ue.removeEventListener("sessionend",$a),Oi.stop()};function ke(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=L.autoReset,k=Ne.enabled,q=Ne.autoUpdate,Z=Ne.needsUpdate,F=Ne.type;Ce(),L.autoReset=E,Ne.enabled=k,Ne.autoUpdate=q,Ne.needsUpdate=Z,Ne.type=F}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){const k=E.target;k.removeEventListener("dispose",Pe),Xe(k)}function Xe(E){Ct(E),W.remove(E)}function Ct(E){const k=W.get(E).programs;k!==void 0&&(k.forEach(function(q){ie.releaseProgram(q)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,Z,F,pe){k===null&&(k=Ye);const Ue=F.isMesh&&F.matrixWorld.determinant()<0,Oe=kr(E,k,q,Z,F);C.setMaterial(Z,Ue);let ze=q.index,it=1;if(Z.wireframe===!0){if(ze=U.getWireframeAttribute(q),ze===void 0)return;it=2}const $e=q.drawRange,et=q.attributes.position;let ut=$e.start*it,St=($e.start+$e.count)*it;pe!==null&&(ut=Math.max(ut,pe.start*it),St=Math.min(St,(pe.start+pe.count)*it)),ze!==null?(ut=Math.max(ut,0),St=Math.min(St,ze.count)):et!=null&&(ut=Math.max(ut,0),St=Math.min(St,et.count));const At=St-ut;if(At<0||At===1/0)return;Ke.setup(F,Z,Oe,q,ze);let Rt,Et=Qe;if(ze!==null&&(Rt=x.get(ze),Et=Ze,Et.setIndex(Rt)),F.isMesh)Z.wireframe===!0?(C.setLineWidth(Z.wireframeLinewidth*ct()),Et.setMode(I.LINES)):Et.setMode(I.TRIANGLES);else if(F.isLine){let je=Z.linewidth;je===void 0&&(je=1),C.setLineWidth(je*ct()),F.isLineSegments?Et.setMode(I.LINES):F.isLineLoop?Et.setMode(I.LINE_LOOP):Et.setMode(I.LINE_STRIP)}else F.isPoints?Et.setMode(I.POINTS):F.isSprite&&Et.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const je=F._multiDrawStarts,kt=F._multiDrawCounts,Mi=F._multiDrawCount,j=ze?x.get(ze).bytesPerElement:1,Me=W.get(Z).currentProgram.getUniforms();for(let Re=0;Re<Mi;Re++)Me.setValue(I,"_gl_DrawID",Re),Et.render(je[Re]/j,kt[Re])}else if(F.isInstancedMesh)Et.renderInstances(ut,At,F.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,kt=Math.min(q.instanceCount,je);Et.renderInstances(ut,At,kt)}else Et.render(ut,At)};function mt(E,k,q){E.transparent===!0&&E.side===bi&&E.forceSinglePass===!1?(E.side=si,E.needsUpdate=!0,$i(E,k,q),E.side=tr,E.needsUpdate=!0,$i(E,k,q),E.side=bi):$i(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),u=be.get(q),u.init(k),b.push(u),q.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),E!==q&&E.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const Z=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const pe=F.material;if(pe)if(Array.isArray(pe))for(let Ue=0;Ue<pe.length;Ue++){const Oe=pe[Ue];mt(Oe,q,F),Z.add(Oe)}else mt(pe,q,F),Z.add(pe)}),u=b.pop(),Z},this.compileAsync=function(E,k,q=null){const Z=this.compile(E,k,q);return new Promise(F=>{function pe(){if(Z.forEach(function(Ue){W.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){F(E);return}setTimeout(pe,10)}xe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ti=null;function yi(E){ti&&ti(E)}function Ka(){Oi.stop()}function $a(){Oi.start()}const Oi=new Hc;Oi.setAnimationLoop(yi),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){ti=E,ue.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},ue.addEventListener("sessionstart",Ka),ue.addEventListener("sessionend",$a),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,P),u=be.get(E,b.length),u.init(k),b.push(u),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(ce),oe=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,oe),f=Ve.get(E,S.length),f.init(),S.push(f),ue.enabled===!0&&ue.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&ya(pe,k,-1/0,_.sortObjects)}ya(E,k,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(le,J),Je=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Je&&se.addToRenderList(f,E),this.info.render.frame++,K===!0&&Fe.beginShadows();const q=u.state.shadowsArray;Ne.render(q,E,k),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=f.opaque,F=f.transmissive;if(u.setupLights(),k.isArrayCamera){const pe=k.cameras;if(F.length>0)for(let Ue=0,Oe=pe.length;Ue<Oe;Ue++){const ze=pe[Ue];Or(Z,F,E,ze)}Je&&se.render(E);for(let Ue=0,Oe=pe.length;Ue<Oe;Ue++){const ze=pe[Ue];Qa(f,E,ze,ze.viewport)}}else F.length>0&&Or(Z,F,E,k),Je&&se.render(E),Qa(f,E,k);P!==null&&w===0&&(re.updateMultisampleRenderTarget(P),re.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,k),Ke.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],K===!0&&Fe.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function ya(E,k,q,Z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){Z&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const pe=$.update(E),Ue=E.material;Ue.visible&&f.push(E,pe,Ue,q,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const pe=$.update(E),Ue=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Be.copy(pe.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Ue)){const Oe=pe.groups;for(let ze=0,it=Oe.length;ze<it;ze++){const $e=Oe[ze],et=Ue[$e.materialIndex];et&&et.visible&&f.push(E,pe,et,q,Be.z,$e)}}else Ue.visible&&f.push(E,pe,Ue,q,Be.z,null)}}const F=E.children;for(let pe=0,Ue=F.length;pe<Ue;pe++)ya(F[pe],k,q,Z)}function Qa(E,k,q,Z){const F=E.opaque,pe=E.transmissive,Ue=E.transparent;u.setupLightsView(q),K===!0&&Fe.setGlobalState(_.clippingPlanes,q),Z&&C.viewport(D.copy(Z)),F.length>0&&jt(F,k,q),pe.length>0&&jt(pe,k,q),Ue.length>0&&jt(Ue,k,q),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function Or(E,k,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Z.id]===void 0&&(u.state.transmissionRenderTarget[Z.id]=new nr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?wa:Li,minFilter:Sr,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const F=u.state.transmissionRenderTarget[Z.id],pe=Z.viewport||D;F.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);const Ue=_.getRenderTarget(),Oe=_.getActiveCubeFace(),ze=_.getActiveMipmapLevel();_.setRenderTarget(F),_.getClearColor(X),ee=_.getClearAlpha(),ee<1&&_.setClearColor(16777215,.5),_.clear(),Je&&se.render(q);const it=_.toneMapping;_.toneMapping=rr;const $e=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),u.setupLightsView(Z),K===!0&&Fe.setGlobalState(_.clippingPlanes,Z),jt(E,q,Z),re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F),xe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ut=0,St=k.length;ut<St;ut++){const At=k[ut],Rt=At.object,Et=At.geometry,je=At.material,kt=At.group;if(je.side===bi&&Rt.layers.test(Z.layers)){const Mi=je.side;je.side=si,je.needsUpdate=!0,Fr(Rt,q,Z,Et,je,kt),je.side=Mi,je.needsUpdate=!0,et=!0}}et===!0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F))}_.setRenderTarget(Ue,Oe,ze),_.setClearColor(X,ee),$e!==void 0&&(Z.viewport=$e),_.toneMapping=it}function jt(E,k,q){const Z=k.isScene===!0?k.overrideMaterial:null;for(let F=0,pe=E.length;F<pe;F++){const Ue=E[F],Oe=Ue.object,ze=Ue.geometry,it=Ue.group;let $e=Ue.material;$e.allowOverride===!0&&Z!==null&&($e=Z),Oe.layers.test(q.layers)&&Fr(Oe,k,q,ze,$e,it)}}function Fr(E,k,q,Z,F,pe){E.onBeforeRender(_,k,q,Z,F,pe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,k,q,Z,E,pe),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=si,F.needsUpdate=!0,_.renderBufferDirect(q,k,Z,F,E,pe),F.side=tr,F.needsUpdate=!0,_.renderBufferDirect(q,k,Z,F,E,pe),F.side=bi):_.renderBufferDirect(q,k,Z,F,E,pe),E.onAfterRender(_,k,q,Z,F,pe)}function $i(E,k,q){k.isScene!==!0&&(k=Ye);const Z=W.get(E),F=u.state.lights,pe=u.state.shadowsArray,Ue=F.state.version,Oe=ie.getParameters(E,F.state,pe,k,q),ze=ie.getProgramCacheKey(Oe);let it=Z.programs;Z.environment=E.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(E.isMeshStandardMaterial?y:V).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,it===void 0&&(E.addEventListener("dispose",Pe),it=new Map,Z.programs=it);let $e=it.get(ze);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Ue)return vr(E,Oe),$e}else Oe.uniforms=ie.getUniforms(E),E.onBeforeCompile(Oe,_),$e=ie.acquireProgram(Oe,ze),it.set(ze,$e),Z.uniforms=Oe.uniforms;const et=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(et.clippingPlanes=Fe.uniform),vr(E,Oe),Z.needsLights=Qi(E),Z.lightsStateVersion=Ue,Z.needsLights&&(et.ambientLightColor.value=F.state.ambient,et.lightProbe.value=F.state.probe,et.directionalLights.value=F.state.directional,et.directionalLightShadows.value=F.state.directionalShadow,et.spotLights.value=F.state.spot,et.spotLightShadows.value=F.state.spotShadow,et.rectAreaLights.value=F.state.rectArea,et.ltc_1.value=F.state.rectAreaLTC1,et.ltc_2.value=F.state.rectAreaLTC2,et.pointLights.value=F.state.point,et.pointLightShadows.value=F.state.pointShadow,et.hemisphereLights.value=F.state.hemi,et.directionalShadowMap.value=F.state.directionalShadowMap,et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,et.spotShadowMap.value=F.state.spotShadowMap,et.spotLightMatrix.value=F.state.spotLightMatrix,et.spotLightMap.value=F.state.spotLightMap,et.pointShadowMap.value=F.state.pointShadowMap,et.pointShadowMatrix.value=F.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function Si(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Vn.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function vr(E,k){const q=W.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function kr(E,k,q,Z,F){k.isScene!==!0&&(k=Ye),re.resetTextureUnits();const pe=k.fog,Ue=Z.isMeshStandardMaterial?k.environment:null,Oe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wr,ze=(Z.isMeshStandardMaterial?y:V).get(Z.envMap||Ue),it=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),et=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let At=rr;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(At=_.toneMapping);const Rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=Rt!==void 0?Rt.length:0,je=W.get(Z),kt=u.state.lights;if(K===!0&&(oe===!0||E!==M)){const we=E===M&&Z.id===T;Fe.setState(Z,E,we)}let Mi=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==kt.state.version||je.outputColorSpace!==Oe||F.isBatchedMesh&&je.batching===!1||!F.isBatchedMesh&&je.batching===!0||F.isBatchedMesh&&je.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&je.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&je.instancing===!1||!F.isInstancedMesh&&je.instancing===!0||F.isSkinnedMesh&&je.skinning===!1||!F.isSkinnedMesh&&je.skinning===!0||F.isInstancedMesh&&je.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&je.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&je.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&je.instancingMorph===!1&&F.morphTexture!==null||je.envMap!==ze||Z.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Fe.numPlanes||je.numIntersection!==Fe.numIntersection)||je.vertexAlphas!==it||je.vertexTangents!==$e||je.morphTargets!==et||je.morphNormals!==ut||je.morphColors!==St||je.toneMapping!==At||je.morphTargetsCount!==Et)&&(Mi=!0):(Mi=!0,je.__version=Z.version);let j=je.currentProgram;Mi===!0&&(j=$i(Z,k,F));let Me=!1,Re=!1,Ee=!1;const de=j.getUniforms(),fe=je.uniforms;if(C.useProgram(j.program)&&(Me=!0,Re=!0,Ee=!0),Z.id!==T&&(T=Z.id,Re=!0),Me||M!==E){C.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),Ap(he),Cp(he),de.setValue(I,"projectionMatrix",he)):de.setValue(I,"projectionMatrix",E.projectionMatrix),de.setValue(I,"viewMatrix",E.matrixWorldInverse);const we=de.map.cameraPosition;we!==void 0&&we.setValue(I,Ae.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&de.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Re=!0,Ee=!0)}if(F.isSkinnedMesh){de.setOptional(I,F,"bindMatrix"),de.setOptional(I,F,"bindMatrixInverse");const we=F.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),de.setValue(I,"boneTexture",we.boneTexture,re))}F.isBatchedMesh&&(de.setOptional(I,F,"batchingTexture"),de.setValue(I,"batchingTexture",F._matricesTexture,re),de.setOptional(I,F,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",F._indirectTexture,re),de.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",F._colorsTexture,re));const Le=q.morphAttributes;if((Le.position!==void 0||Le.normal!==void 0||Le.color!==void 0)&&De.update(F,q,j),(Re||je.receiveShadow!==F.receiveShadow)&&(je.receiveShadow=F.receiveShadow,de.setValue(I,"receiveShadow",F.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(fe.envMap.value=ze,fe.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(fe.envMapIntensity.value=k.environmentIntensity),Re&&(de.setValue(I,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Sa(fe,Ee),pe&&Z.fog===!0&&Q.refreshFogUniforms(fe,pe),Q.refreshMaterialUniforms(fe,Z,G,ae,u.state.transmissionRenderTarget[E.id]),Vn.upload(I,Si(je),fe,re)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vn.upload(I,Si(je),fe,re),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&de.setValue(I,"center",F.center),de.setValue(I,"modelViewMatrix",F.modelViewMatrix),de.setValue(I,"normalMatrix",F.normalMatrix),de.setValue(I,"modelMatrix",F.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const we=Z.uniformsGroups;for(let tt=0,st=we.length;tt<st;tt++){const rt=we[tt];N.update(rt,j),N.bind(rt,j)}}return j}function Sa(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Qi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,q){const Z=W.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=k,W.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const q=W.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Ma=I.createFramebuffer();this.setRenderTarget=function(E,k=0,q=0){P=E,A=k,w=q;let Z=!0,F=null,pe=!1,Ue=!1;if(E){const Oe=W.get(E);if(Oe.__useDefaultFramebuffer!==void 0)C.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1;else if(Oe.__webglFramebuffer===void 0)re.setupRenderTarget(E);else if(Oe.__hasExternalTextures)re.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $e=E.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&W.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ue=!0);const it=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(it[k])?F=it[k][q]:F=it[k],pe=!0):E.samples>0&&re.useMultisampledRTT(E)===!1?F=W.get(E).__webglMultisampledFramebuffer:Array.isArray(it)?F=it[q]:F=it,D.copy(E.viewport),O.copy(E.scissor),z=E.scissorTest}else D.copy(ne).multiplyScalar(G).floor(),O.copy(me).multiplyScalar(G).floor(),z=ye;if(q!==0&&(F=Ma),C.bindFramebuffer(I.FRAMEBUFFER,F)&&Z&&C.drawBuffers(E,F),C.viewport(D),C.scissor(O),C.setScissorTest(z),pe){const Oe=W.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,q)}else if(Ue){const Oe=W.get(E.texture),ze=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,q,ze)}else if(E!==null&&q!==0){const Oe=W.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oe.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(E,k,q,Z,F,pe,Ue,Oe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){C.bindFramebuffer(I.FRAMEBUFFER,ze);try{const it=E.textures[Oe],$e=it.format,et=it.type;if(!qe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Z&&q>=0&&q<=E.height-F&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Oe),I.readPixels(k,q,Z,F,Te.convert($e),Te.convert(et),pe))}finally{const it=P!==null?W.get(P).__webglFramebuffer:null;C.bindFramebuffer(I.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,Z,F,pe,Ue,Oe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(k>=0&&k<=E.width-Z&&q>=0&&q<=E.height-F){C.bindFramebuffer(I.FRAMEBUFFER,ze);const it=E.textures[Oe],$e=it.format,et=it.type;if(!qe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Oe),I.readPixels(k,q,Z,F,Te.convert($e),Te.convert(et),0);const St=P!==null?W.get(P).__webglFramebuffer:null;C.bindFramebuffer(I.FRAMEBUFFER,St);const At=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wp(I,At,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer(ut),I.deleteSync(At),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,q=0){const Z=Math.pow(2,-q),F=Math.floor(E.image.width*Z),pe=Math.floor(E.image.height*Z),Ue=k!==null?k.x:0,Oe=k!==null?k.y:0;re.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Ue,Oe,F,pe),C.unbindTexture()};const en=I.createFramebuffer(),cs=I.createFramebuffer();this.copyTextureToTexture=function(E,k,q=null,Z=null,F=0,pe=null){pe===null&&(F!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=F,F=0):pe=0);let Ue,Oe,ze,it,$e,et,ut,St,At;const Rt=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(q!==null)Ue=q.max.x-q.min.x,Oe=q.max.y-q.min.y,ze=q.isBox3?q.max.z-q.min.z:1,it=q.min.x,$e=q.min.y,et=q.isBox3?q.min.z:0;else{const Le=Math.pow(2,-F);Ue=Math.floor(Rt.width*Le),Oe=Math.floor(Rt.height*Le),E.isDataArrayTexture?ze=Rt.depth:E.isData3DTexture?ze=Math.floor(Rt.depth*Le):ze=1,it=0,$e=0,et=0}Z!==null?(ut=Z.x,St=Z.y,At=Z.z):(ut=0,St=0,At=0);const Et=Te.convert(k.format),je=Te.convert(k.type);let kt;k.isData3DTexture?(re.setTexture3D(k,0),kt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),kt=I.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),kt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Mi=I.getParameter(I.UNPACK_ROW_LENGTH),j=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Me=I.getParameter(I.UNPACK_SKIP_PIXELS),Re=I.getParameter(I.UNPACK_SKIP_ROWS),Ee=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,it),I.pixelStorei(I.UNPACK_SKIP_ROWS,$e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et);const de=E.isDataArrayTexture||E.isData3DTexture,fe=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Le=W.get(E),we=W.get(k),tt=W.get(Le.__renderTarget),st=W.get(we.__renderTarget);C.bindFramebuffer(I.READ_FRAMEBUFFER,tt.__webglFramebuffer),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<ze;rt++)de&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(E).__webglTexture,F,et+rt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(k).__webglTexture,pe,At+rt)),I.blitFramebuffer(it,$e,Ue,Oe,ut,St,Ue,Oe,I.DEPTH_BUFFER_BIT,I.NEAREST);C.bindFramebuffer(I.READ_FRAMEBUFFER,null),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||W.has(E)){const Le=W.get(E),we=W.get(k);C.bindFramebuffer(I.READ_FRAMEBUFFER,en),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,cs);for(let tt=0;tt<ze;tt++)de?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,F,et+tt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,F),fe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,pe,At+tt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,pe),F!==0?I.blitFramebuffer(it,$e,Ue,Oe,ut,St,Ue,Oe,I.COLOR_BUFFER_BIT,I.NEAREST):fe?I.copyTexSubImage3D(kt,pe,ut,St,At+tt,it,$e,Ue,Oe):I.copyTexSubImage2D(kt,pe,ut,St,it,$e,Ue,Oe);C.bindFramebuffer(I.READ_FRAMEBUFFER,null),C.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(kt,pe,ut,St,At,Ue,Oe,ze,Et,je,Rt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(kt,pe,ut,St,At,Ue,Oe,ze,Et,Rt.data):I.texSubImage3D(kt,pe,ut,St,At,Ue,Oe,ze,Et,je,Rt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,ut,St,Ue,Oe,Et,je,Rt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,ut,St,Rt.width,Rt.height,Et,Rt.data):I.texSubImage2D(I.TEXTURE_2D,pe,ut,St,Ue,Oe,Et,je,Rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,j),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee),pe===0&&k.generateMipmaps&&I.generateMipmap(kt),C.unbindTexture()},this.copyTextureToTexture3D=function(E,k,q=null,Z=null,F=0){return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,q,Z,F)},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),C.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,C.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function Jv(i,e){typeof console<"u"&&(console.warn("[intlify] "+i),e&&console.warn(e.stack))}const gu=typeof window<"u",Ir=(i,e=!1)=>e?Symbol.for(i):Symbol(i),Kv=(i,e,t)=>$v({l:i,k:e,s:t}),$v=i=>JSON.stringify(i).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Zt=i=>typeof i=="number"&&isFinite(i),Qv=i=>$o(i)==="[object Date]",Xn=i=>$o(i)==="[object RegExp]",jn=i=>xt(i)&&Object.keys(i).length===0,$t=Object.assign,e0=Object.create,Pt=(i=null)=>e0(i);let _u;const Dr=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Pt());function vu(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function xu(i){return i.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t0(i){return i=i.replace(/(\w+)\s*=\s*"([^"]*)"/g,(e,t,r)=>`${t}="${xu(r)}"`),i=i.replace(/(\w+)\s*=\s*'([^']*)'/g,(e,t,r)=>`${t}='${xu(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(i)&&(i=i.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(e=>{i=i.replace(e,"$1javascript&#58;")}),i}const i0=Object.prototype.hasOwnProperty;function Ai(i,e){return i0.call(i,e)}const Gt=Array.isArray,Dt=i=>typeof i=="function",We=i=>typeof i=="string",Ft=i=>typeof i=="boolean",yt=i=>i!==null&&typeof i=="object",r0=i=>yt(i)&&Dt(i.then)&&Dt(i.catch),yu=Object.prototype.toString,$o=i=>yu.call(i),xt=i=>$o(i)==="[object Object]",a0=i=>i==null?"":Gt(i)||xt(i)&&i.toString===yu?JSON.stringify(i,null,2):String(i);function Qo(i,e=""){return i.reduce((t,r,a)=>a===0?t+r:t+e+r,"")}const Yn=i=>!yt(i)||Gt(i);function qn(i,e){if(Yn(i)||Yn(e))throw new Error("Invalid value");const t=[{src:i,des:e}];for(;t.length;){const{src:r,des:a}=t.pop();Object.keys(r).forEach(n=>{n!=="__proto__"&&(yt(r[n])&&!yt(a[n])&&(a[n]=Array.isArray(r[n])?[]:Pt()),Yn(a[n])||Yn(r[n])?a[n]=r[n]:t.push({src:r[n],des:a[n]}))})}}function n0(i,e,t){return{line:i,column:e,offset:t}}function el(i,e,t){return{start:i,end:e}}const bt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},s0=17;function Zn(i,e,t={}){const{domain:r,messages:a,args:n}=t,s=i,o=new SyntaxError(String(s));return o.code=i,e&&(o.location=e),o.domain=r,o}function o0(i){throw i}const ji=" ",l0="\r",li=`
`,c0="\u2028",u0="\u2029";function d0(i){const e=i;let t=0,r=1,a=1,n=0;const s=w=>e[w]===l0&&e[w+1]===li,o=w=>e[w]===li,l=w=>e[w]===u0,c=w=>e[w]===c0,d=w=>s(w)||o(w)||l(w)||c(w),p=()=>t,h=()=>r,m=()=>a,g=()=>n,v=w=>s(w)||l(w)||c(w)?li:e[w],f=()=>v(t),u=()=>v(t+n);function S(){return n=0,d(t)&&(r++,a=0),s(t)&&t++,t++,a++,e[t]}function b(){return s(t+n)&&n++,n++,e[t+n]}function _(){t=0,r=1,a=1,n=0}function R(w=0){n=w}function A(){const w=t+n;for(;w!==t;)S();n=0}return{index:p,line:h,column:m,peekOffset:g,charAt:v,currentChar:f,currentPeek:u,next:S,peek:b,reset:_,resetPeek:R,skipToPeek:A}}const hr=void 0,hE=".",Su="'",h0="tokenizer";function p0(i,e={}){const t=e.location!==!1,r=d0(i),a=()=>r.index(),n=()=>n0(r.line(),r.column(),r.index()),s=n(),o=a(),l={currentType:13,offset:o,startLoc:s,endLoc:s,lastType:13,lastOffset:o,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:d}=e;function p(C,L,W,...re){const V=c();if(L.column+=W,L.offset+=W,d){const y=t?el(V.startLoc,L):null,x=Zn(C,y,{domain:h0,args:re});d(x)}}function h(C,L,W){C.endLoc=n(),C.currentType=L;const re={type:L};return t&&(re.loc=el(C.startLoc,C.endLoc)),W!=null&&(re.value=W),re}const m=C=>h(C,13);function g(C,L){return C.currentChar()===L?(C.next(),L):(p(bt.EXPECTED_TOKEN,n(),0,L),"")}function v(C){let L="";for(;C.currentPeek()===ji||C.currentPeek()===li;)L+=C.currentPeek(),C.peek();return L}function f(C){const L=v(C);return C.skipToPeek(),L}function u(C){if(C===hr)return!1;const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L===95}function S(C){if(C===hr)return!1;const L=C.charCodeAt(0);return L>=48&&L<=57}function b(C,L){const{currentType:W}=L;if(W!==2)return!1;v(C);const re=u(C.currentPeek());return C.resetPeek(),re}function _(C,L){const{currentType:W}=L;if(W!==2)return!1;v(C);const re=C.currentPeek()==="-"?C.peek():C.currentPeek(),V=S(re);return C.resetPeek(),V}function R(C,L){const{currentType:W}=L;if(W!==2)return!1;v(C);const re=C.currentPeek()===Su;return C.resetPeek(),re}function A(C,L){const{currentType:W}=L;if(W!==7)return!1;v(C);const re=C.currentPeek()===".";return C.resetPeek(),re}function w(C,L){const{currentType:W}=L;if(W!==8)return!1;v(C);const re=u(C.currentPeek());return C.resetPeek(),re}function P(C,L){const{currentType:W}=L;if(!(W===7||W===11))return!1;v(C);const re=C.currentPeek()===":";return C.resetPeek(),re}function T(C,L){const{currentType:W}=L;if(W!==9)return!1;const re=()=>{const y=C.currentPeek();return y==="{"?u(C.peek()):y==="@"||y==="|"||y===":"||y==="."||y===ji||!y?!1:y===li?(C.peek(),re()):D(C,!1)},V=re();return C.resetPeek(),V}function M(C){v(C);const L=C.currentPeek()==="|";return C.resetPeek(),L}function D(C,L=!0){const W=(V=!1,y="")=>{const x=C.currentPeek();return x==="{"||x==="@"||!x?V:x==="|"?!(y===ji||y===li):x===ji?(C.peek(),W(!0,ji)):x===li?(C.peek(),W(!0,li)):!0},re=W();return L&&C.resetPeek(),re}function O(C,L){const W=C.currentChar();return W===hr?hr:L(W)?(C.next(),W):null}function z(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36}function X(C){return O(C,z)}function ee(C){const L=C.charCodeAt(0);return L>=97&&L<=122||L>=65&&L<=90||L>=48&&L<=57||L===95||L===36||L===45}function Y(C){return O(C,ee)}function ae(C){const L=C.charCodeAt(0);return L>=48&&L<=57}function G(C){return O(C,ae)}function le(C){const L=C.charCodeAt(0);return L>=48&&L<=57||L>=65&&L<=70||L>=97&&L<=102}function J(C){return O(C,le)}function ne(C){let L="",W="";for(;L=G(C);)W+=L;return W}function me(C){let L="";for(;;){const W=C.currentChar();if(W==="{"||W==="}"||W==="@"||W==="|"||!W)break;if(W===ji||W===li)if(D(C))L+=W,C.next();else{if(M(C))break;L+=W,C.next()}else L+=W,C.next()}return L}function ye(C){f(C);let L="",W="";for(;L=Y(C);)W+=L;return C.currentChar()===hr&&p(bt.UNTERMINATED_CLOSING_BRACE,n(),0),W}function H(C){f(C);let L="";return C.currentChar()==="-"?(C.next(),L+=`-${ne(C)}`):L+=ne(C),C.currentChar()===hr&&p(bt.UNTERMINATED_CLOSING_BRACE,n(),0),L}function K(C){return C!==Su&&C!==li}function oe(C){f(C),g(C,"'");let L="",W="";for(;L=O(C,K);)L==="\\"?W+=he(C):W+=L;const re=C.currentChar();return re===li||re===hr?(p(bt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,n(),0),re===li&&(C.next(),g(C,"'")),W):(g(C,"'"),W)}function he(C){const L=C.currentChar();switch(L){case"\\":case"'":return C.next(),`\\${L}`;case"u":return ce(C,L,4);case"U":return ce(C,L,6);default:return p(bt.UNKNOWN_ESCAPE_SEQUENCE,n(),0,L),""}}function ce(C,L,W){g(C,L);let re="";for(let V=0;V<W;V++){const y=J(C);if(!y){p(bt.INVALID_UNICODE_ESCAPE_SEQUENCE,n(),0,`\\${L}${re}${C.currentChar()}`);break}re+=y}return`\\${L}${re}`}function Ae(C){return C!=="{"&&C!=="}"&&C!==ji&&C!==li}function Be(C){f(C);let L="",W="";for(;L=O(C,Ae);)W+=L;return W}function Ye(C){let L="",W="";for(;L=X(C);)W+=L;return W}function Je(C){const L=W=>{const re=C.currentChar();return re==="{"||re==="@"||re==="|"||re==="("||re===")"||!re||re===ji?W:(W+=re,C.next(),L(W))};return L("")}function ct(C){f(C);const L=g(C,"|");return f(C),L}function I(C,L){let W=null;switch(C.currentChar()){case"{":return L.braceNest>=1&&p(bt.NOT_ALLOW_NEST_PLACEHOLDER,n(),0),C.next(),W=h(L,2,"{"),f(C),L.braceNest++,W;case"}":return L.braceNest>0&&L.currentType===2&&p(bt.EMPTY_PLACEHOLDER,n(),0),C.next(),W=h(L,3,"}"),L.braceNest--,L.braceNest>0&&f(C),L.inLinked&&L.braceNest===0&&(L.inLinked=!1),W;case"@":return L.braceNest>0&&p(bt.UNTERMINATED_CLOSING_BRACE,n(),0),W=Se(C,L)||m(L),L.braceNest=0,W;default:{let re=!0,V=!0,y=!0;if(M(C))return L.braceNest>0&&p(bt.UNTERMINATED_CLOSING_BRACE,n(),0),W=h(L,1,ct(C)),L.braceNest=0,L.inLinked=!1,W;if(L.braceNest>0&&(L.currentType===4||L.currentType===5||L.currentType===6))return p(bt.UNTERMINATED_CLOSING_BRACE,n(),0),L.braceNest=0,xe(C,L);if(re=b(C,L))return W=h(L,4,ye(C)),f(C),W;if(V=_(C,L))return W=h(L,5,H(C)),f(C),W;if(y=R(C,L))return W=h(L,6,oe(C)),f(C),W;if(!re&&!V&&!y)return W=h(L,12,Be(C)),p(bt.INVALID_TOKEN_IN_PLACEHOLDER,n(),0,W.value),f(C),W;break}}return W}function Se(C,L){const{currentType:W}=L;let re=null;const V=C.currentChar();switch((W===7||W===8||W===11||W===9)&&(V===li||V===ji)&&p(bt.INVALID_LINKED_FORMAT,n(),0),V){case"@":return C.next(),re=h(L,7,"@"),L.inLinked=!0,re;case".":return f(C),C.next(),h(L,8,".");case":":return f(C),C.next(),h(L,9,":");default:return M(C)?(re=h(L,1,ct(C)),L.braceNest=0,L.inLinked=!1,re):A(C,L)||P(C,L)?(f(C),Se(C,L)):w(C,L)?(f(C),h(L,11,Ye(C))):T(C,L)?(f(C),V==="{"?I(C,L)||re:h(L,10,Je(C))):(W===7&&p(bt.INVALID_LINKED_FORMAT,n(),0),L.braceNest=0,L.inLinked=!1,xe(C,L))}}function xe(C,L){let W={type:13};if(L.braceNest>0)return I(C,L)||m(L);if(L.inLinked)return Se(C,L)||m(L);switch(C.currentChar()){case"{":return I(C,L)||m(L);case"}":return p(bt.UNBALANCED_CLOSING_BRACE,n(),0),C.next(),h(L,3,"}");case"@":return Se(C,L)||m(L);default:{if(M(C))return W=h(L,1,ct(C)),L.braceNest=0,L.inLinked=!1,W;if(D(C))return h(L,0,me(C));break}}return W}function qe(){const{currentType:C,offset:L,startLoc:W,endLoc:re}=l;return l.lastType=C,l.lastOffset=L,l.lastStartLoc=W,l.lastEndLoc=re,l.offset=a(),l.startLoc=n(),r.currentChar()===hr?h(l,13):xe(r,l)}return{nextToken:qe,currentOffset:a,currentPosition:n,context:c}}const f0="parser",m0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function g0(i,e,t){switch(i){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||t,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function _0(i={}){const e=i.location!==!1,{onError:t}=i;function r(u,S,b,_,...R){const A=u.currentPosition();if(A.offset+=_,A.column+=_,t){const w=e?el(b,A):null,P=Zn(S,w,{domain:f0,args:R});t(P)}}function a(u,S,b){const _={type:u};return e&&(_.start=S,_.end=S,_.loc={start:b,end:b}),_}function n(u,S,b,_){e&&(u.end=S,u.loc&&(u.loc.end=b))}function s(u,S){const b=u.context(),_=a(3,b.offset,b.startLoc);return _.value=S,n(_,u.currentOffset(),u.currentPosition()),_}function o(u,S){const b=u.context(),{lastOffset:_,lastStartLoc:R}=b,A=a(5,_,R);return A.index=parseInt(S,10),u.nextToken(),n(A,u.currentOffset(),u.currentPosition()),A}function l(u,S){const b=u.context(),{lastOffset:_,lastStartLoc:R}=b,A=a(4,_,R);return A.key=S,u.nextToken(),n(A,u.currentOffset(),u.currentPosition()),A}function c(u,S){const b=u.context(),{lastOffset:_,lastStartLoc:R}=b,A=a(9,_,R);return A.value=S.replace(m0,g0),u.nextToken(),n(A,u.currentOffset(),u.currentPosition()),A}function d(u){const S=u.nextToken(),b=u.context(),{lastOffset:_,lastStartLoc:R}=b,A=a(8,_,R);return S.type!==11?(r(u,bt.UNEXPECTED_EMPTY_LINKED_MODIFIER,b.lastStartLoc,0),A.value="",n(A,_,R),{nextConsumeToken:S,node:A}):(S.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Ni(S)),A.value=S.value||"",n(A,u.currentOffset(),u.currentPosition()),{node:A})}function p(u,S){const b=u.context(),_=a(7,b.offset,b.startLoc);return _.value=S,n(_,u.currentOffset(),u.currentPosition()),_}function h(u){const S=u.context(),b=a(6,S.offset,S.startLoc);let _=u.nextToken();if(_.type===8){const R=d(u);b.modifier=R.node,_=R.nextConsumeToken||u.nextToken()}switch(_.type!==9&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(_)),_=u.nextToken(),_.type===2&&(_=u.nextToken()),_.type){case 10:_.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(_)),b.key=p(u,_.value||"");break;case 4:_.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(_)),b.key=l(u,_.value||"");break;case 5:_.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(_)),b.key=o(u,_.value||"");break;case 6:_.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(_)),b.key=c(u,_.value||"");break;default:{r(u,bt.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const R=u.context(),A=a(7,R.offset,R.startLoc);return A.value="",n(A,R.offset,R.startLoc),b.key=A,n(b,R.offset,R.startLoc),{nextConsumeToken:_,node:b}}}return n(b,u.currentOffset(),u.currentPosition()),{node:b}}function m(u){const S=u.context(),b=S.currentType===1?u.currentOffset():S.offset,_=S.currentType===1?S.endLoc:S.startLoc,R=a(2,b,_);R.items=[];let A=null;do{const T=A||u.nextToken();switch(A=null,T.type){case 0:T.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(T)),R.items.push(s(u,T.value||""));break;case 5:T.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(T)),R.items.push(o(u,T.value||""));break;case 4:T.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(T)),R.items.push(l(u,T.value||""));break;case 6:T.value==null&&r(u,bt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Ni(T)),R.items.push(c(u,T.value||""));break;case 7:{const M=h(u);R.items.push(M.node),A=M.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const w=S.currentType===1?S.lastOffset:u.currentOffset(),P=S.currentType===1?S.lastEndLoc:u.currentPosition();return n(R,w,P),R}function g(u,S,b,_){const R=u.context();let A=_.items.length===0;const w=a(1,S,b);w.cases=[],w.cases.push(_);do{const P=m(u);A||(A=P.items.length===0),w.cases.push(P)}while(R.currentType!==13);return A&&r(u,bt.MUST_HAVE_MESSAGES_IN_PLURAL,b,0),n(w,u.currentOffset(),u.currentPosition()),w}function v(u){const S=u.context(),{offset:b,startLoc:_}=S,R=m(u);return S.currentType===13?R:g(u,b,_,R)}function f(u){const S=p0(u,$t({},i)),b=S.context(),_=a(0,b.offset,b.startLoc);return e&&_.loc&&(_.loc.source=u),_.body=v(S),i.onCacheKey&&(_.cacheKey=i.onCacheKey(u)),b.currentType!==13&&r(S,bt.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,u[b.offset]||""),n(_,S.currentOffset(),S.currentPosition()),_}return{parse:f}}function Ni(i){if(i.type===13)return"EOF";const e=(i.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function v0(i,e={}){const t={ast:i,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function Mu(i,e){for(let t=0;t<i.length;t++)tl(i[t],e)}function tl(i,e){switch(i.type){case 1:Mu(i.cases,e),e.helper("plural");break;case 2:Mu(i.items,e);break;case 6:{tl(i.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function x0(i,e={}){const t=v0(i);t.helper("normalize"),i.body&&tl(i.body,t);const r=t.context();i.helpers=Array.from(r.helpers)}function y0(i){const e=i.body;return e.type===2?bu(e):e.cases.forEach(t=>bu(t)),i}function bu(i){if(i.items.length===1){const e=i.items[0];(e.type===3||e.type===9)&&(i.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<i.items.length;t++){const r=i.items[t];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===i.items.length){i.static=Qo(e);for(let t=0;t<i.items.length;t++){const r=i.items[t];(r.type===3||r.type===9)&&delete r.value}}}}function _a(i){switch(i.t=i.type,i.type){case 0:{const e=i;_a(e.body),e.b=e.body,delete e.body;break}case 1:{const e=i,t=e.cases;for(let r=0;r<t.length;r++)_a(t[r]);e.c=t,delete e.cases;break}case 2:{const e=i,t=e.items;for(let r=0;r<t.length;r++)_a(t[r]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=i;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=i;_a(e.key),e.k=e.key,delete e.key,e.modifier&&(_a(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=i;e.i=e.index,delete e.index;break}case 4:{const e=i;e.k=e.key,delete e.key;break}}delete i.type}function S0(i,e){const{filename:t,breakLineCode:r,needIndent:a}=e,n=e.location!==!1,s={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:a,indentLevel:0};n&&i.loc&&(s.source=i.loc.source);const o=()=>s;function l(m,g){s.code+=m}function c(m,g=!0){const v=g?r:"";l(a?v+"  ".repeat(m):v)}function d(m=!0){const g=++s.indentLevel;m&&c(g)}function p(m=!0){const g=--s.indentLevel;m&&c(g)}function h(){c(s.indentLevel)}return{context:o,push:l,indent:d,deindent:p,newline:h,helper:m=>`_${m}`,needIndent:()=>s.needIndent}}function M0(i,e){const{helper:t}=i;i.push(`${t("linked")}(`),va(i,e.key),e.modifier?(i.push(", "),va(i,e.modifier),i.push(", _type")):i.push(", undefined, _type"),i.push(")")}function b0(i,e){const{helper:t,needIndent:r}=i;i.push(`${t("normalize")}([`),i.indent(r());const a=e.items.length;for(let n=0;n<a&&(va(i,e.items[n]),n!==a-1);n++)i.push(", ");i.deindent(r()),i.push("])")}function E0(i,e){const{helper:t,needIndent:r}=i;if(e.cases.length>1){i.push(`${t("plural")}([`),i.indent(r());const a=e.cases.length;for(let n=0;n<a&&(va(i,e.cases[n]),n!==a-1);n++)i.push(", ");i.deindent(r()),i.push("])")}}function T0(i,e){e.body?va(i,e.body):i.push("null")}function va(i,e){const{helper:t}=i;switch(e.type){case 0:T0(i,e);break;case 1:E0(i,e);break;case 2:b0(i,e);break;case 6:M0(i,e);break;case 8:i.push(JSON.stringify(e.value),e);break;case 7:i.push(JSON.stringify(e.value),e);break;case 5:i.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:i.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:i.push(JSON.stringify(e.value),e);break;case 3:i.push(JSON.stringify(e.value),e);break}}const w0=(i,e={})=>{const t=We(e.mode)?e.mode:"normal",r=We(e.filename)?e.filename:"message.intl";e.sourceMap;const a=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,n=e.needIndent?e.needIndent:t!=="arrow",s=i.helpers||[],o=S0(i,{filename:r,breakLineCode:a,needIndent:n});o.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(n),s.length>0&&(o.push(`const { ${Qo(s.map(d=>`${d}: _${d}`),", ")} } = ctx`),o.newline()),o.push("return "),va(o,i),o.deindent(n),o.push("}"),delete i.helpers;const{code:l,map:c}=o.context();return{ast:i,code:l,map:c?c.toJSON():void 0}};function A0(i,e={}){const t=$t({},e),r=!!t.jit,a=!!t.minify,n=t.optimize==null?!0:t.optimize,s=_0(t).parse(i);return r?(n&&y0(s),a&&_a(s),{ast:s,code:""}):(x0(s,t),w0(s,t))}function C0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Ui(i){return yt(i)&&il(i)===0&&(Ai(i,"b")||Ai(i,"body"))}const Eu=["b","body"];function R0(i){return pr(i,Eu)}const Tu=["c","cases"];function P0(i){return pr(i,Tu,[])}const wu=["s","static"];function L0(i){return pr(i,wu)}const Au=["i","items"];function I0(i){return pr(i,Au,[])}const Cu=["t","type"];function il(i){return pr(i,Cu)}const Ru=["v","value"];function Jn(i,e){const t=pr(i,Ru);if(t!=null)return t;throw Ba(e)}const Pu=["m","modifier"];function D0(i){return pr(i,Pu)}const Lu=["k","key"];function N0(i){const e=pr(i,Lu);if(e)return e;throw Ba(6)}function pr(i,e,t){for(let r=0;r<e.length;r++){const a=e[r];if(Ai(i,a)&&i[a]!=null)return i[a]}return t}const Iu=[...Eu,...Tu,...wu,...Au,...Lu,...Pu,...Ru,...Cu];function Ba(i){return new Error(`unhandled node type: ${i}`)}function rl(i){return e=>U0(e,i)}function U0(i,e){const t=R0(e);if(t==null)throw Ba(0);if(il(t)===1){const r=P0(t);return i.plural(r.reduce((a,n)=>[...a,Du(i,n)],[]))}else return Du(i,t)}function Du(i,e){const t=L0(e);if(t!=null)return i.type==="text"?t:i.normalize([t]);{const r=I0(e).reduce((a,n)=>[...a,al(i,n)],[]);return i.normalize(r)}}function al(i,e){const t=il(e);switch(t){case 3:return Jn(e,t);case 9:return Jn(e,t);case 4:{const r=e;if(Ai(r,"k")&&r.k)return i.interpolate(i.named(r.k));if(Ai(r,"key")&&r.key)return i.interpolate(i.named(r.key));throw Ba(t)}case 5:{const r=e;if(Ai(r,"i")&&Zt(r.i))return i.interpolate(i.list(r.i));if(Ai(r,"index")&&Zt(r.index))return i.interpolate(i.list(r.index));throw Ba(t)}case 6:{const r=e,a=D0(r),n=N0(r);return i.linked(al(i,n),a?al(i,a):void 0,i.type)}case 7:return Jn(e,t);case 8:return Jn(e,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const O0=i=>i;let Kn=Pt();function F0(i,e={}){let t=!1;const r=e.onError||o0;return e.onError=a=>{t=!0,r(a)},{...A0(i,e),detectError:t}}function k0(i,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&We(i)){Ft(e.warnHtmlMessage)&&e.warnHtmlMessage;const t=(e.onCacheKey||O0)(i),r=Kn[t];if(r)return r;const{ast:a,detectError:n}=F0(i,{...e,location:!1,jit:!0}),s=rl(a);return n?s:Kn[t]=s}else{const t=i.cacheKey;return t?Kn[t]||(Kn[t]=rl(i)):rl(i)}}let Ha=null;function z0(i){Ha=i}function B0(i,e,t){Ha&&Ha.emit("i18n:init",{timestamp:Date.now(),i18n:i,version:e,meta:t})}const H0=V0("function:translate");function V0(i){return e=>Ha&&Ha.emit(i,e)}const Yi={INVALID_ARGUMENT:s0,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},G0=24;function qi(i){return Zn(i,null,void 0)}function nl(i,e){return e.locale!=null?Nu(e.locale):Nu(i.locale)}let sl;function Nu(i){if(We(i))return i;if(Dt(i)){if(i.resolvedOnce&&sl!=null)return sl;if(i.constructor.name==="Function"){const e=i();if(r0(e))throw qi(Yi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return sl=e}else throw qi(Yi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw qi(Yi.NOT_SUPPORT_LOCALE_TYPE)}function W0(i,e,t){return[...new Set([t,...Gt(e)?e:yt(e)?Object.keys(e):We(e)?[e]:[t]])]}function Uu(i,e,t){const r=We(t)?t:Qn,a=i;a.__localeChainCache||(a.__localeChainCache=new Map);let n=a.__localeChainCache.get(r);if(!n){n=[];let s=[t];for(;Gt(s);)s=Ou(n,s,e);const o=Gt(e)||!xt(e)?e:e.default?e.default:null;s=We(o)?[o]:o,Gt(s)&&Ou(n,s,!1),a.__localeChainCache.set(r,n)}return n}function Ou(i,e,t){let r=!0;for(let a=0;a<e.length&&Ft(r);a++){const n=e[a];We(n)&&(r=X0(i,e[a],t))}return r}function X0(i,e,t){let r;const a=e.split("-");do{const n=a.join("-");r=j0(i,n,t),a.splice(-1,1)}while(a.length&&r===!0);return r}function j0(i,e,t){let r=!1;if(!i.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const a=e.replace(/!/g,"");i.push(a),(Gt(t)||xt(t))&&t[a]&&(r=t[a])}return r}const fr=[];fr[0]={w:[0],i:[3,0],"[":[4],o:[7]},fr[1]={w:[1],".":[2],"[":[4],o:[7]},fr[2]={w:[2],i:[3,0],0:[3,0]},fr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},fr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},fr[5]={"'":[4,0],o:8,l:[5,0]},fr[6]={'"':[4,0],o:8,l:[6,0]};const Y0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function q0(i){return Y0.test(i)}function Z0(i){const e=i.charCodeAt(0),t=i.charCodeAt(i.length-1);return e===t&&(e===34||e===39)?i.slice(1,-1):i}function J0(i){if(i==null)return"o";switch(i.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return i;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function K0(i){const e=i.trim();return i.charAt(0)==="0"&&isNaN(parseInt(i))?!1:q0(e)?Z0(e):"*"+e}function $0(i){const e=[];let t=-1,r=0,a=0,n,s,o,l,c,d,p;const h=[];h[0]=()=>{s===void 0?s=o:s+=o},h[1]=()=>{s!==void 0&&(e.push(s),s=void 0)},h[2]=()=>{h[0](),a++},h[3]=()=>{if(a>0)a--,r=4,h[0]();else{if(a=0,s===void 0||(s=K0(s),s===!1))return!1;h[1]()}};function m(){const g=i[t+1];if(r===5&&g==="'"||r===6&&g==='"')return t++,o="\\"+g,h[0](),!0}for(;r!==null;)if(t++,n=i[t],!(n==="\\"&&m())){if(l=J0(n),p=fr[r],c=p[l]||p.l||8,c===8||(r=c[0],c[1]!==void 0&&(d=h[c[1]],d&&(o=n,d()===!1))))return;if(r===7)return e}}const Fu=new Map;function Q0(i,e){return yt(i)?i[e]:null}function ex(i,e){if(!yt(i))return null;let t=Fu.get(e);if(t||(t=$0(e),t&&Fu.set(e,t)),!t)return null;const r=t.length;let a=i,n=0;for(;n<r;){const s=t[n];if(Iu.includes(s)&&Ui(a))return null;const o=a[s];if(o===void 0||Dt(a))return null;a=o,n++}return a}const tx="10.0.8",$n=-1,Qn="en-US",ku="",zu=i=>`${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;function ix(){return{upper:(i,e)=>e==="text"&&We(i)?i.toUpperCase():e==="vnode"&&yt(i)&&"__v_isVNode"in i?i.children.toUpperCase():i,lower:(i,e)=>e==="text"&&We(i)?i.toLowerCase():e==="vnode"&&yt(i)&&"__v_isVNode"in i?i.children.toLowerCase():i,capitalize:(i,e)=>e==="text"&&We(i)?zu(i):e==="vnode"&&yt(i)&&"__v_isVNode"in i?zu(i.children):i}}let Bu;function rx(i){Bu=i}let Hu;function ax(i){Hu=i}let Vu;function nx(i){Vu=i}let Gu=null;const pE=i=>{Gu=i},sx=()=>Gu;let Wu=null;const Xu=i=>{Wu=i},ox=()=>Wu;let ju=0;function lx(i={}){const e=Dt(i.onWarn)?i.onWarn:Jv,t=We(i.version)?i.version:tx,r=We(i.locale)||Dt(i.locale)?i.locale:Qn,a=Dt(r)?Qn:r,n=Gt(i.fallbackLocale)||xt(i.fallbackLocale)||We(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:a,s=xt(i.messages)?i.messages:ol(a),o=xt(i.datetimeFormats)?i.datetimeFormats:ol(a),l=xt(i.numberFormats)?i.numberFormats:ol(a),c=$t(Pt(),i.modifiers,ix()),d=i.pluralRules||Pt(),p=Dt(i.missing)?i.missing:null,h=Ft(i.missingWarn)||Xn(i.missingWarn)?i.missingWarn:!0,m=Ft(i.fallbackWarn)||Xn(i.fallbackWarn)?i.fallbackWarn:!0,g=!!i.fallbackFormat,v=!!i.unresolving,f=Dt(i.postTranslation)?i.postTranslation:null,u=xt(i.processor)?i.processor:null,S=Ft(i.warnHtmlMessage)?i.warnHtmlMessage:!0,b=!!i.escapeParameter,_=Dt(i.messageCompiler)?i.messageCompiler:Bu,R=Dt(i.messageResolver)?i.messageResolver:Hu||Q0,A=Dt(i.localeFallbacker)?i.localeFallbacker:Vu||W0,w=yt(i.fallbackContext)?i.fallbackContext:void 0,P=i,T=yt(P.__datetimeFormatters)?P.__datetimeFormatters:new Map,M=yt(P.__numberFormatters)?P.__numberFormatters:new Map,D=yt(P.__meta)?P.__meta:{};ju++;const O={version:t,cid:ju,locale:r,fallbackLocale:n,messages:s,modifiers:c,pluralRules:d,missing:p,missingWarn:h,fallbackWarn:m,fallbackFormat:g,unresolving:v,postTranslation:f,processor:u,warnHtmlMessage:S,escapeParameter:b,messageCompiler:_,messageResolver:R,localeFallbacker:A,fallbackContext:w,onWarn:e,__meta:D};return O.datetimeFormats=o,O.numberFormats=l,O.__datetimeFormatters=T,O.__numberFormatters=M,__INTLIFY_PROD_DEVTOOLS__&&B0(O,t,D),O}const ol=i=>({[i]:Pt()});function ll(i,e,t,r,a){const{missing:n,onWarn:s}=i;if(n!==null){const o=n(i,t,e,a);return We(o)?o:e}else return e}function Va(i,e,t){const r=i;r.__localeChainCache=new Map,i.localeFallbacker(i,t,e)}function cx(i,e){return i===e?!1:i.split("-")[0]===e.split("-")[0]}function ux(i,e){const t=e.indexOf(i);if(t===-1)return!1;for(let r=t+1;r<e.length;r++)if(cx(i,e[r]))return!0;return!1}function Yu(i,...e){const{datetimeFormats:t,unresolving:r,fallbackLocale:a,onWarn:n,localeFallbacker:s}=i,{__datetimeFormatters:o}=i,[l,c,d,p]=cl(...e),h=Ft(d.missingWarn)?d.missingWarn:i.missingWarn;Ft(d.fallbackWarn)?d.fallbackWarn:i.fallbackWarn;const m=!!d.part,g=nl(i,d),v=s(i,a,g);if(!We(l)||l==="")return new Intl.DateTimeFormat(g,p).format(c);let f={},u,S=null;const b="datetime format";for(let A=0;A<v.length&&(u=v[A],f=t[u]||{},S=f[l],!xt(S));A++)ll(i,l,u,h,b);if(!xt(S)||!We(u))return r?$n:l;let _=`${u}__${l}`;jn(p)||(_=`${_}__${JSON.stringify(p)}`);let R=o.get(_);return R||(R=new Intl.DateTimeFormat(u,$t({},S,p)),o.set(_,R)),m?R.formatToParts(c):R.format(c)}const dx=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function cl(...i){const[e,t,r,a]=i,n=Pt();let s=Pt(),o;if(We(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw qi(Yi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw qi(Yi.INVALID_ISO_DATE_ARGUMENT)}}else if(Qv(e)){if(isNaN(e.getTime()))throw qi(Yi.INVALID_DATE_ARGUMENT);o=e}else if(Zt(e))o=e;else throw qi(Yi.INVALID_ARGUMENT);return We(t)?n.key=t:xt(t)&&Object.keys(t).forEach(l=>{dx.includes(l)?s[l]=t[l]:n[l]=t[l]}),We(r)?n.locale=r:xt(r)&&(s=r),xt(a)&&(s=a),[n.key||"",o,n,s]}function qu(i,e,t){const r=i;for(const a in t){const n=`${e}__${a}`;r.__datetimeFormatters.has(n)&&r.__datetimeFormatters.delete(n)}}function Zu(i,...e){const{numberFormats:t,unresolving:r,fallbackLocale:a,onWarn:n,localeFallbacker:s}=i,{__numberFormatters:o}=i,[l,c,d,p]=ul(...e),h=Ft(d.missingWarn)?d.missingWarn:i.missingWarn;Ft(d.fallbackWarn)?d.fallbackWarn:i.fallbackWarn;const m=!!d.part,g=nl(i,d),v=s(i,a,g);if(!We(l)||l==="")return new Intl.NumberFormat(g,p).format(c);let f={},u,S=null;const b="number format";for(let A=0;A<v.length&&(u=v[A],f=t[u]||{},S=f[l],!xt(S));A++)ll(i,l,u,h,b);if(!xt(S)||!We(u))return r?$n:l;let _=`${u}__${l}`;jn(p)||(_=`${_}__${JSON.stringify(p)}`);let R=o.get(_);return R||(R=new Intl.NumberFormat(u,$t({},S,p)),o.set(_,R)),m?R.formatToParts(c):R.format(c)}const hx=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ul(...i){const[e,t,r,a]=i,n=Pt();let s=Pt();if(!Zt(e))throw qi(Yi.INVALID_ARGUMENT);const o=e;return We(t)?n.key=t:xt(t)&&Object.keys(t).forEach(l=>{hx.includes(l)?s[l]=t[l]:n[l]=t[l]}),We(r)?n.locale=r:xt(r)&&(s=r),xt(a)&&(s=a),[n.key||"",o,n,s]}function Ju(i,e,t){const r=i;for(const a in t){const n=`${e}__${a}`;r.__numberFormatters.has(n)&&r.__numberFormatters.delete(n)}}const px=i=>i,fx=i=>"",mx="text",gx=i=>i.length===0?"":Qo(i),_x=a0;function Ku(i,e){return i=Math.abs(i),e===2?i?i>1?1:0:1:i?Math.min(i,2):0}function vx(i){const e=Zt(i.pluralIndex)?i.pluralIndex:-1;return i.named&&(Zt(i.named.count)||Zt(i.named.n))?Zt(i.named.count)?i.named.count:Zt(i.named.n)?i.named.n:e:e}function xx(i,e){e.count||(e.count=i),e.n||(e.n=i)}function yx(i={}){const e=i.locale,t=vx(i),r=yt(i.pluralRules)&&We(e)&&Dt(i.pluralRules[e])?i.pluralRules[e]:Ku,a=yt(i.pluralRules)&&We(e)&&Dt(i.pluralRules[e])?Ku:void 0,n=f=>f[r(t,f.length,a)],s=i.list||[],o=f=>s[f],l=i.named||Pt();Zt(i.pluralIndex)&&xx(t,l);const c=f=>l[f];function d(f,u){return(Dt(i.messages)?i.messages(f,!!u):yt(i.messages)?i.messages[f]:!1)||(i.parent?i.parent.message(f):fx)}const p=f=>i.modifiers?i.modifiers[f]:px,h=xt(i.processor)&&Dt(i.processor.normalize)?i.processor.normalize:gx,m=xt(i.processor)&&Dt(i.processor.interpolate)?i.processor.interpolate:_x,g=xt(i.processor)&&We(i.processor.type)?i.processor.type:mx,v={list:o,named:c,plural:n,linked:(f,...u)=>{const[S,b]=u;let _="text",R="";u.length===1?yt(S)?(R=S.modifier||R,_=S.type||_):We(S)&&(R=S||R):u.length===2&&(We(S)&&(R=S||R),We(b)&&(_=b||_));const A=d(f,!0)(v),w=_==="vnode"&&Gt(A)&&R?A[0]:A;return R?p(R)(w,_):w},message:d,type:g,interpolate:m,normalize:h,values:$t(Pt(),s,l)};return v}const $u=()=>"",vi=i=>Dt(i);function Qu(i,...e){const{fallbackFormat:t,postTranslation:r,unresolving:a,messageCompiler:n,fallbackLocale:s,messages:o}=i,[l,c]=dl(...e),d=Ft(c.missingWarn)?c.missingWarn:i.missingWarn,p=Ft(c.fallbackWarn)?c.fallbackWarn:i.fallbackWarn,h=Ft(c.escapeParameter)?c.escapeParameter:i.escapeParameter,m=!!c.resolvedMessage,g=We(c.default)||Ft(c.default)?Ft(c.default)?n?l:()=>l:c.default:t?n?l:()=>l:null,v=t||g!=null&&(We(g)||Dt(g)),f=nl(i,c);h&&Sx(c);let[u,S,b]=m?[l,f,o[f]||Pt()]:ed(i,l,f,s,p,d),_=u,R=l;if(!m&&!(We(_)||Ui(_)||vi(_))&&v&&(_=g,R=_),!m&&(!(We(_)||Ui(_)||vi(_))||!We(S)))return a?$n:l;let A=!1;const w=()=>{A=!0},P=vi(_)?_:td(i,l,S,_,R,w);if(A)return _;const T=Ex(i,S,b,c),M=yx(T),D=Mx(i,P,M);let O=r?r(D,l):D;if(h&&We(O)&&(O=t0(O)),__INTLIFY_PROD_DEVTOOLS__){const z={timestamp:Date.now(),key:We(l)?l:vi(_)?_.key:"",locale:S||(vi(_)?_.locale:""),format:We(_)?_:vi(_)?_.source:"",message:O};z.meta=$t({},i.__meta,sx()||{}),H0(z)}return O}function Sx(i){Gt(i.list)?i.list=i.list.map(e=>We(e)?vu(e):e):yt(i.named)&&Object.keys(i.named).forEach(e=>{We(i.named[e])&&(i.named[e]=vu(i.named[e]))})}function ed(i,e,t,r,a,n){const{messages:s,onWarn:o,messageResolver:l,localeFallbacker:c}=i,d=c(i,r,t);let p=Pt(),h,m=null;const g="translate";for(let v=0;v<d.length&&(h=d[v],p=s[h]||Pt(),(m=l(p,e))===null&&(m=p[e]),!(We(m)||Ui(m)||vi(m)));v++)if(!ux(h,d)){const f=ll(i,e,h,n,g);f!==e&&(m=f)}return[m,h,p]}function td(i,e,t,r,a,n){const{messageCompiler:s,warnHtmlMessage:o}=i;if(vi(r)){const c=r;return c.locale=c.locale||t,c.key=c.key||e,c}if(s==null){const c=(()=>r);return c.locale=t,c.key=e,c}const l=s(r,bx(i,t,a,r,o,n));return l.locale=t,l.key=e,l.source=r,l}function Mx(i,e,t){return e(t)}function dl(...i){const[e,t,r]=i,a=Pt();if(!We(e)&&!Zt(e)&&!vi(e)&&!Ui(e))throw qi(Yi.INVALID_ARGUMENT);const n=Zt(e)?String(e):(vi(e),e);return Zt(t)?a.plural=t:We(t)?a.default=t:xt(t)&&!jn(t)?a.named=t:Gt(t)&&(a.list=t),Zt(r)?a.plural=r:We(r)?a.default=r:xt(r)&&$t(a,r),[n,a]}function bx(i,e,t,r,a,n){return{locale:e,key:t,warnHtmlMessage:a,onError:s=>{throw n&&n(s),s},onCacheKey:s=>Kv(e,t,s)}}function Ex(i,e,t,r){const{modifiers:a,pluralRules:n,messageResolver:s,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:d}=i,p={locale:e,modifiers:a,pluralRules:n,messages:(h,m)=>{let g=s(t,h);if(g==null&&(d||m)){const[,,v]=ed(d||i,h,e,o,l,c);g=s(v,h)}if(We(g)||Ui(g)){let v=!1;const f=td(i,h,e,g,h,()=>{v=!0});return v?$u:f}else return vi(g)?g:$u}};return i.processor&&(p.processor=i.processor),r.list&&(p.list=r.list),r.named&&(p.named=r.named),Zt(r.plural)&&(p.pluralIndex=r.plural),p}C0();const Tx="10.0.8";function wx(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Dr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Dr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1)}const xa={UNEXPECTED_RETURN_TYPE:G0,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function Ga(i,...e){return Zn(i,null,void 0)}const id=Ir("__translateVNode"),rd=Ir("__datetimeParts"),ad=Ir("__numberParts"),Ax=Ir("__setPluralRules"),nd=Ir("__injectWithOption"),hl=Ir("__dispose");function Wa(i){if(!yt(i)||Ui(i))return i;for(const e in i)if(Ai(i,e))if(!e.includes("."))yt(i[e])&&Wa(i[e]);else{const t=e.split("."),r=t.length-1;let a=i,n=!1;for(let s=0;s<r;s++){if(t[s]==="__proto__")throw new Error(`unsafe key: ${t[s]}`);if(t[s]in a||(a[t[s]]=Pt()),!yt(a[t[s]])){n=!0;break}a=a[t[s]]}if(n||(Ui(a)?Iu.includes(t[r])||delete i[e]:(a[t[r]]=i[e],delete i[e])),!Ui(a)){const s=a[t[r]];yt(s)&&Wa(s)}}return i}function sd(i,e){const{messages:t,__i18n:r,messageResolver:a,flatJson:n}=e,s=xt(t)?t:Gt(r)?Pt():{[i]:Pt()};if(Gt(r)&&r.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(s[l]=s[l]||Pt(),qn(c,s[l])):qn(c,s)}else We(o)&&qn(JSON.parse(o),s)}),a==null&&n)for(const o in s)Ai(s,o)&&Wa(s[o]);return s}function od(i){return i.type}function Cx(i,e,t){let r=yt(e.messages)?e.messages:Pt();"__i18nGlobal"in t&&(r=sd(i.locale.value,{messages:r,__i18n:t.__i18nGlobal}));const a=Object.keys(r);a.length&&a.forEach(n=>{i.mergeLocaleMessage(n,r[n])});{if(yt(e.datetimeFormats)){const n=Object.keys(e.datetimeFormats);n.length&&n.forEach(s=>{i.mergeDateTimeFormat(s,e.datetimeFormats[s])})}if(yt(e.numberFormats)){const n=Object.keys(e.numberFormats);n.length&&n.forEach(s=>{i.mergeNumberFormat(s,e.numberFormats[s])})}}}function ld(i){return ph(uh,null,i,0)}const cd="__INTLIFY_META__",ud=()=>[],Rx=()=>!1;let dd=0;function hd(i){return((e,t,r,a)=>i(t,r,ba()||void 0,a))}const fE=()=>{const i=ba();let e=null;return i&&(e=od(i)[cd])?{[cd]:e}:null};function Px(i={}){const{__root:e,__injectWithOption:t}=i,r=e===void 0,a=i.flatJson,n=gu?Fi:Ea;let s=Ft(i.inheritLocale)?i.inheritLocale:!0;const o=n(e&&s?e.locale.value:We(i.locale)?i.locale:Qn),l=n(e&&s?e.fallbackLocale.value:We(i.fallbackLocale)||Gt(i.fallbackLocale)||xt(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=n(sd(o.value,i)),d=n(xt(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),p=n(xt(i.numberFormats)?i.numberFormats:{[o.value]:{}});let h=e?e.missingWarn:Ft(i.missingWarn)||Xn(i.missingWarn)?i.missingWarn:!0,m=e?e.fallbackWarn:Ft(i.fallbackWarn)||Xn(i.fallbackWarn)?i.fallbackWarn:!0,g=e?e.fallbackRoot:Ft(i.fallbackRoot)?i.fallbackRoot:!0,v=!!i.fallbackFormat,f=Dt(i.missing)?i.missing:null,u=Dt(i.missing)?hd(i.missing):null,S=Dt(i.postTranslation)?i.postTranslation:null,b=e?e.warnHtmlMessage:Ft(i.warnHtmlMessage)?i.warnHtmlMessage:!0,_=!!i.escapeParameter;const R=e?e.modifiers:xt(i.modifiers)?i.modifiers:{};let A=i.pluralRules||e&&e.pluralRules,w;w=(()=>{r&&Xu(null);const V={version:Tx,locale:o.value,fallbackLocale:l.value,messages:c.value,modifiers:R,pluralRules:A,missing:u===null?void 0:u,missingWarn:h,fallbackWarn:m,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:b,escapeParameter:_,messageResolver:i.messageResolver,messageCompiler:i.messageCompiler,__meta:{framework:"vue"}};V.datetimeFormats=d.value,V.numberFormats=p.value,V.__datetimeFormatters=xt(w)?w.__datetimeFormatters:void 0,V.__numberFormatters=xt(w)?w.__numberFormatters:void 0;const y=lx(V);return r&&Xu(y),y})(),Va(w,o.value,l.value);function P(){return[o.value,l.value,c.value,d.value,p.value]}const T=Kt({get:()=>o.value,set:V=>{o.value=V,w.locale=o.value}}),M=Kt({get:()=>l.value,set:V=>{l.value=V,w.fallbackLocale=l.value,Va(w,o.value,V)}}),D=Kt(()=>c.value),O=Kt(()=>d.value),z=Kt(()=>p.value);function X(){return Dt(S)?S:null}function ee(V){S=V,w.postTranslation=V}function Y(){return f}function ae(V){V!==null&&(u=hd(V)),f=V,w.missing=u}const G=(V,y,x,U,$,ie)=>{P();let Q;try{__INTLIFY_PROD_DEVTOOLS__,r||(w.fallbackContext=e?ox():void 0),Q=V(w)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(w.fallbackContext=void 0)}if(x!=="translate exists"&&Zt(Q)&&Q===$n||x==="translate exists"&&!Q){const[Ve,be]=y();return e&&g?U(e):$(Ve)}else{if(ie(Q))return Q;throw Ga(xa.UNEXPECTED_RETURN_TYPE)}};function le(...V){return G(y=>Reflect.apply(Qu,null,[y,...V]),()=>dl(...V),"translate",y=>Reflect.apply(y.t,y,[...V]),y=>y,y=>We(y))}function J(...V){const[y,x,U]=V;if(U&&!yt(U))throw Ga(xa.INVALID_ARGUMENT);return le(y,x,$t({resolvedMessage:!0},U||{}))}function ne(...V){return G(y=>Reflect.apply(Yu,null,[y,...V]),()=>cl(...V),"datetime format",y=>Reflect.apply(y.d,y,[...V]),()=>ku,y=>We(y))}function me(...V){return G(y=>Reflect.apply(Zu,null,[y,...V]),()=>ul(...V),"number format",y=>Reflect.apply(y.n,y,[...V]),()=>ku,y=>We(y))}function ye(V){return V.map(y=>We(y)||Zt(y)||Ft(y)?ld(String(y)):y)}const H={normalize:ye,interpolate:V=>V,type:"vnode"};function K(...V){return G(y=>{let x;const U=y;try{U.processor=H,x=Reflect.apply(Qu,null,[U,...V])}finally{U.processor=null}return x},()=>dl(...V),"translate",y=>y[id](...V),y=>[ld(y)],y=>Gt(y))}function oe(...V){return G(y=>Reflect.apply(Zu,null,[y,...V]),()=>ul(...V),"number format",y=>y[ad](...V),ud,y=>We(y)||Gt(y))}function he(...V){return G(y=>Reflect.apply(Yu,null,[y,...V]),()=>cl(...V),"datetime format",y=>y[rd](...V),ud,y=>We(y)||Gt(y))}function ce(V){A=V,w.pluralRules=A}function Ae(V,y){return G(()=>{if(!V)return!1;const x=We(y)?y:o.value,U=Je(x),$=w.messageResolver(U,V);return Ui($)||vi($)||We($)},()=>[V],"translate exists",x=>Reflect.apply(x.te,x,[V,y]),Rx,x=>Ft(x))}function Be(V){let y=null;const x=Uu(w,l.value,o.value);for(let U=0;U<x.length;U++){const $=c.value[x[U]]||{},ie=w.messageResolver($,V);if(ie!=null){y=ie;break}}return y}function Ye(V){return Be(V)??(e?e.tm(V)||{}:{})}function Je(V){return c.value[V]||{}}function ct(V,y){if(a){const x={[V]:y};for(const U in x)Ai(x,U)&&Wa(x[U]);y=x[V]}c.value[V]=y,w.messages=c.value}function I(V,y){c.value[V]=c.value[V]||{};const x={[V]:y};if(a)for(const U in x)Ai(x,U)&&Wa(x[U]);y=x[V],qn(y,c.value[V]),w.messages=c.value}function Se(V){return d.value[V]||{}}function xe(V,y){d.value[V]=y,w.datetimeFormats=d.value,qu(w,V,y)}function qe(V,y){d.value[V]=$t(d.value[V]||{},y),w.datetimeFormats=d.value,qu(w,V,y)}function C(V){return p.value[V]||{}}function L(V,y){p.value[V]=y,w.numberFormats=p.value,Ju(w,V,y)}function W(V,y){p.value[V]=$t(p.value[V]||{},y),w.numberFormats=p.value,Ju(w,V,y)}dd++,e&&gu&&(Yt(e.locale,V=>{s&&(o.value=V,w.locale=V,Va(w,o.value,l.value))}),Yt(e.fallbackLocale,V=>{s&&(l.value=V,w.fallbackLocale=V,Va(w,o.value,l.value))}));const re={id:dd,locale:T,fallbackLocale:M,get inheritLocale(){return s},set inheritLocale(V){s=V,V&&e&&(o.value=e.locale.value,l.value=e.fallbackLocale.value,Va(w,o.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:D,get modifiers(){return R},get pluralRules(){return A||{}},get isGlobal(){return r},get missingWarn(){return h},set missingWarn(V){h=V,w.missingWarn=h},get fallbackWarn(){return m},set fallbackWarn(V){m=V,w.fallbackWarn=m},get fallbackRoot(){return g},set fallbackRoot(V){g=V},get fallbackFormat(){return v},set fallbackFormat(V){v=V,w.fallbackFormat=v},get warnHtmlMessage(){return b},set warnHtmlMessage(V){b=V,w.warnHtmlMessage=V},get escapeParameter(){return _},set escapeParameter(V){_=V,w.escapeParameter=V},t:le,getLocaleMessage:Je,setLocaleMessage:ct,mergeLocaleMessage:I,getPostTranslationHandler:X,setPostTranslationHandler:ee,getMissingHandler:Y,setMissingHandler:ae,[Ax]:ce};return re.datetimeFormats=O,re.numberFormats=z,re.rt=J,re.te=Ae,re.tm=Ye,re.d=ne,re.n=me,re.getDateTimeFormat=Se,re.setDateTimeFormat=xe,re.mergeDateTimeFormat=qe,re.getNumberFormat=C,re.setNumberFormat=L,re.mergeNumberFormat=W,re[nd]=t,re[id]=K,re[rd]=he,re[ad]=oe,re}const pl={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:i=>i==="parent"||i==="global",default:"parent"},i18n:{type:Object}};function mE({slots:i},e){return e.length===1&&e[0]==="default"?(i.default?i.default():[]).reduce((t,r)=>[...t,...r.type===Pl?r.children:[r]],[]):e.reduce((t,r)=>{const a=i[r];return a&&(t[r]=a()),t},Pt())}function Lx(){return Pl}$t({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:i=>Zt(i)||!isNaN(i)}},pl);function Ix(i){return Gt(i)&&!We(i[0])}function gE(i,e,t,r){const{slots:a,attrs:n}=e;return()=>{const s={part:!0};let o=Pt();i.locale&&(s.locale=i.locale),We(i.format)?s.key=i.format:yt(i.format)&&(We(i.format.key)&&(s.key=i.format.key),o=Object.keys(i.format).reduce((h,m)=>t.includes(m)?$t(Pt(),h,{[m]:i.format[m]}):h,Pt()));const l=r(i.value,s,o);let c=[s.key];Gt(l)?c=l.map((h,m)=>{const g=a[h.type],v=g?g({[h.type]:h.value,index:m,parts:l}):[h.value];return Ix(v)&&(v[0].key=`${h.type}-${m}`),v}):We(l)&&(c=[l]);const d=$t(Pt(),n),p=We(i.tag)||yt(i.tag)?i.tag:Lx();return mh(p,d,c)}}$t({value:{type:Number,required:!0},format:{type:[String,Object]}},pl),$t({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},pl);const Dx=Ir("global-vue-i18n");function pd(i={}){const e=ba();if(e==null)throw Ga(xa.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ga(xa.NOT_INSTALLED);const t=Nx(e),r=Ox(t),a=od(e),n=Ux(i,a);if(n==="global")return Cx(r,i,a),r;if(n==="parent"){let l=Fx(t,e,i.__useComponent);return l==null&&(l=r),l}const s=t;let o=s.__getInstance(e);if(o==null){const l=$t({},i);"__i18n"in a&&(l.__i18n=a.__i18n),r&&(l.__root=r),o=Px(l),s.__composerExtend&&(o[hl]=s.__composerExtend(o)),zx(s,e,o),s.__setInstance(e,o)}return o}function Nx(i){const e=tn(i.isCE?Dx:i.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ga(i.isCE?xa.NOT_INSTALLED_WITH_PROVIDE:xa.UNEXPECTED_ERROR);return e}function Ux(i,e){return jn(i)?"__i18n"in e?"local":"global":i.useScope?i.useScope:"local"}function Ox(i){return i.mode==="composition"?i.global:i.global.__composer}function Fx(i,e,t=!1){let r=null;const a=e.root;let n=kx(e,t);for(;n!=null;){const s=i;if(i.mode==="composition")r=s.__getInstance(n);else if(__VUE_I18N_LEGACY_API__){const o=s.__getInstance(n);o!=null&&(r=o.__composer,t&&r&&!r[nd]&&(r=null))}if(r!=null||a===n)break;n=n.parent}return r}function kx(i,e=!1){return i==null?null:e&&i.vnode.ctx||i.parent}function zx(i,e,t){rn(()=>{},e),ps(()=>{const r=t;i.__deleteInstance(e);const a=r[hl];a&&(a(),delete r[hl])},e)}if(wx(),rx(k0),ax(ex),nx(Uu),__INTLIFY_PROD_DEVTOOLS__){const i=Dr();i.__INTLIFY__=!0,z0(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const fd=["lived_experience","social_context","category_behaviour","product_context","education","employment","household_context","economic_context","local_context","business_operations","business_market","business_regulation","business_finance","business_workforce"];function Bx(i){return typeof i=="string"&&fd.some(e=>e===i)}function Xa(i){return i==="uncategorized"||Bx(i)}const Hx=[...fd,"uncategorized"];function ja(i){return i==="uncategorized"?"knowledgeCategories.uncategorized":`knowledgeCategories.labels.${i}`}function Vx(i){return Array.from({length:i},(e,t)=>{if(i<=3){const s=t*2*Math.PI/i;return[Math.sin(s),0,Math.cos(s)]}const r=1-2*(t+.5)/i,a=Math.sqrt(1-r*r),n=t*Math.PI*(3-Math.sqrt(5));return[Math.cos(n)*a,r,Math.sin(n)*a]})}function Gx(i){return!Number.isFinite(i)||i<=0?0:.95*(1-Math.exp(-i/28))}function fl(i){const e=new Map;for(const a of i){if(!Xa(a.categoryId))continue;const n=Number.isSafeInteger(a.sourceCount)&&(a.sourceCount??0)>0?a.sourceCount:0;e.set(a.categoryId,Math.max(e.get(a.categoryId)??0,n))}const t=Hx.filter(a=>(e.get(a)??0)>0),r=Vx(t.length);return t.map((a,n)=>({categoryId:a,count:e.get(a)??0,direction:r[n],weight:Gx(e.get(a)??0)}))}function Wx(i,e=12){if(e<=0)return 0;if(e===1)return 1;const t=Math.max(.05,1-2.4/e),r=Math.max(0,Math.min(1,(i-t)/(1-t))),a=r*r*(3-2*r);return a*a}const Xx="if (uMethodCount == 1) return 1.0; float start = max(0.05, 1.0 - 2.4 / max(float(uMethodCount), 1.0)); float t = clamp((cosPsi - start) / (1.0 - start), 0.0, 1.0); float rounded = t * t * (3.0 - 2.0 * t); return rounded * rounded;",md={selectedCategory:null,previewCategory:null,highlightedSourceIds:null,showSourceDots:!0,showSourceBulges:!0,blendBulges:!1,sourceBulgeStrength:1,categoryBulgeStrength:1,focusHighlightedSource:!0,deformationAmount:1,size:"default",isCollecting:!1,wobbleMagnitude:.22,pulseMagnitude:.12,autoRotationSpeed:.001,dragSensitivity:.005,friction:.95,cameraDistance:3.5,budgetMethods:5,gainMethods:.9,segSpreadDeg:15,segActiveWeight:.4,patSpreadDeg:15,patActiveWeight:.4,deformationLerpSpeed:.1,spreadLerpSpeed:.02,wobbleSpeedFactor:.55,pulseSpeed:35e-5,interactive:!0,targetFps:60,lowPowerMode:!1,preserveDrawingBuffer:!1,exposeMethodPositions:!1,labelPositioning:"frameworks"};function gd(i){var e,t,r="";if(typeof i=="string"||typeof i=="number")r+=i;else if(typeof i=="object")if(Array.isArray(i)){var a=i.length;for(e=0;e<a;e++)i[e]&&(t=gd(i[e]))&&(r&&(r+=" "),r+=t)}else for(t in i)i[t]&&(r&&(r+=" "),r+=t);return r}function _d(){for(var i,e,t=0,r="",a=arguments.length;t<a;t++)(i=arguments[t])&&(e=gd(i))&&(r&&(r+=" "),r+=e);return r}const jx=(i,e)=>{const t=new Array(i.length+e.length);for(let r=0;r<i.length;r++)t[r]=i[r];for(let r=0;r<e.length;r++)t[i.length+r]=e[r];return t},Yx=(i,e)=>({classGroupId:i,validator:e}),vd=(i=new Map,e=null,t)=>({nextPart:i,validators:e,classGroupId:t}),es="-",xd=[],qx="arbitrary..",Zx=i=>{const e=Kx(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=i;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return Jx(a);const n=a.split(es),s=n[0]===""&&n.length>1?1:0;return yd(n,s,e)},getConflictingClassGroupIds:(a,n)=>{if(n){const s=r[a],o=t[a];return s?o?jx(o,s):s:o||xd}return t[a]||xd}}},yd=(i,e,t)=>{if(i.length-e===0)return t.classGroupId;const r=i[e],a=t.nextPart.get(r);if(a){const l=yd(i,e+1,a);if(l)return l}const n=t.validators;if(n===null)return;const s=e===0?i.join(es):i.slice(e).join(es),o=n.length;for(let l=0;l<o;l++){const c=n[l];if(c.validator(s))return c.classGroupId}},Jx=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=i.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?qx+r:void 0})(),Kx=i=>{const{theme:e,classGroups:t}=i;return $x(t,e)},$x=(i,e)=>{const t=vd();for(const r in i){const a=i[r];ml(a,t,r,e)}return t},ml=(i,e,t,r)=>{const a=i.length;for(let n=0;n<a;n++){const s=i[n];Qx(s,e,t,r)}},Qx=(i,e,t,r)=>{if(typeof i=="string"){ey(i,e,t);return}if(typeof i=="function"){ty(i,e,t,r);return}iy(i,e,t,r)},ey=(i,e,t)=>{const r=i===""?e:Sd(e,i);r.classGroupId=t},ty=(i,e,t,r)=>{if(ry(i)){ml(i(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(Yx(t,i))},iy=(i,e,t,r)=>{const a=Object.entries(i),n=a.length;for(let s=0;s<n;s++){const[o,l]=a[s];ml(l,Sd(e,o),t,r)}},Sd=(i,e)=>{let t=i;const r=e.split(es),a=r.length;for(let n=0;n<a;n++){const s=r[n];let o=t.nextPart.get(s);o||(o=vd(),t.nextPart.set(s,o)),t=o}return t},ry=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,ay=i=>{if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const a=(n,s)=>{t[n]=s,e++,e>i&&(e=0,r=t,t=Object.create(null))};return{get(n){let s=t[n];if(s!==void 0)return s;if((s=r[n])!==void 0)return a(n,s),s},set(n,s){n in t?t[n]=s:a(n,s)}}},gl="!",Md=":",ny=[],bd=(i,e,t,r,a)=>({modifiers:i,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:a}),sy=i=>{const{prefix:e,experimentalParseClassName:t}=i;let r=a=>{const n=[];let s=0,o=0,l=0,c;const d=a.length;for(let v=0;v<d;v++){const f=a[v];if(s===0&&o===0){if(f===Md){n.push(a.slice(l,v)),l=v+1;continue}if(f==="/"){c=v;continue}}f==="["?s++:f==="]"?s--:f==="("?o++:f===")"&&o--}const p=n.length===0?a:a.slice(l);let h=p,m=!1;p.endsWith(gl)?(h=p.slice(0,-1),m=!0):p.startsWith(gl)&&(h=p.slice(1),m=!0);const g=c&&c>l?c-l:void 0;return bd(n,m,h,g)};if(e){const a=e+Md,n=r;r=s=>s.startsWith(a)?n(s.slice(a.length)):bd(ny,!1,s,void 0,!0)}if(t){const a=r;r=n=>t({className:n,parseClassName:a})}return r},oy=i=>{const e=new Map;return i.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let a=[];for(let n=0;n<t.length;n++){const s=t[n],o=s[0]==="[",l=e.has(s);o||l?(a.length>0&&(a.sort(),r.push(...a),a=[]),r.push(s)):a.push(s)}return a.length>0&&(a.sort(),r.push(...a)),r}},ly=i=>({cache:ay(i.cacheSize),parseClassName:sy(i),sortModifiers:oy(i),...Zx(i)}),cy=/\s+/,uy=(i,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:n}=e,s=[],o=i.trim().split(cy);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{isExternal:p,modifiers:h,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:v}=t(d);if(p){l=d+(l.length>0?" "+l:l);continue}let f=!!v,u=r(f?g.substring(0,v):g);if(!u){if(!f){l=d+(l.length>0?" "+l:l);continue}if(u=r(g),!u){l=d+(l.length>0?" "+l:l);continue}f=!1}const S=h.length===0?"":h.length===1?h[0]:n(h).join(":"),b=m?S+gl:S,_=b+u;if(s.indexOf(_)>-1)continue;s.push(_);const R=a(u,f);for(let A=0;A<R.length;++A){const w=R[A];s.push(b+w)}l=d+(l.length>0?" "+l:l)}return l},dy=(...i)=>{let e=0,t,r,a="";for(;e<i.length;)(t=i[e++])&&(r=Ed(t))&&(a&&(a+=" "),a+=r);return a},Ed=i=>{if(typeof i=="string")return i;let e,t="";for(let r=0;r<i.length;r++)i[r]&&(e=Ed(i[r]))&&(t&&(t+=" "),t+=e);return t},Td=(i,...e)=>{let t,r,a,n;const s=l=>{const c=e.reduce((d,p)=>p(d),i());return t=ly(c),r=t.cache.get,a=t.cache.set,n=o,o(l)},o=l=>{const c=r(l);if(c)return c;const d=uy(l,t);return a(l,d),d};return n=s,(...l)=>n(dy(...l))},hy=[],Wt=i=>{const e=t=>t[i]||hy;return e.isThemeGetter=!0,e},wd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ad=/^\((?:(\w[\w-]*):)?(.+)\)$/i,py=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,fy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,my=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,gy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_y=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vy=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,mr=i=>py.test(i),lt=i=>!!i&&!Number.isNaN(Number(i)),gr=i=>!!i&&Number.isInteger(Number(i)),_l=i=>i.endsWith("%")&&lt(i.slice(0,-1)),Zi=i=>fy.test(i),Cd=()=>!0,xy=i=>my.test(i)&&!gy.test(i),vl=()=>!1,yy=i=>_y.test(i),Sy=i=>vy.test(i),My=i=>!He(i)&&!Ge(i),by=i=>_r(i,Nd,vl),He=i=>wd.test(i),Nr=i=>_r(i,Ud,xy),Rd=i=>_r(i,Ly,lt),Ey=i=>_r(i,Fd,Cd),Ty=i=>_r(i,Od,vl),Pd=i=>_r(i,Id,vl),wy=i=>_r(i,Dd,Sy),ts=i=>_r(i,kd,yy),Ge=i=>Ad.test(i),Ya=i=>Ur(i,Ud),Ay=i=>Ur(i,Od),Ld=i=>Ur(i,Id),Cy=i=>Ur(i,Nd),Ry=i=>Ur(i,Dd),is=i=>Ur(i,kd,!0),Py=i=>Ur(i,Fd,!0),_r=(i,e,t)=>{const r=wd.exec(i);return r?r[1]?e(r[1]):t(r[2]):!1},Ur=(i,e,t=!1)=>{const r=Ad.exec(i);return r?r[1]?e(r[1]):t:!1},Id=i=>i==="position"||i==="percentage",Dd=i=>i==="image"||i==="url",Nd=i=>i==="length"||i==="size"||i==="bg-size",Ud=i=>i==="length",Ly=i=>i==="number",Od=i=>i==="family-name",Fd=i=>i==="number"||i==="weight",kd=i=>i==="shadow",zd=()=>{const i=Wt("color"),e=Wt("font"),t=Wt("text"),r=Wt("font-weight"),a=Wt("tracking"),n=Wt("leading"),s=Wt("breakpoint"),o=Wt("container"),l=Wt("spacing"),c=Wt("radius"),d=Wt("shadow"),p=Wt("inset-shadow"),h=Wt("text-shadow"),m=Wt("drop-shadow"),g=Wt("blur"),v=Wt("perspective"),f=Wt("aspect"),u=Wt("ease"),S=Wt("animate"),b=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],R=()=>[..._(),Ge,He],A=()=>["auto","hidden","clip","visible","scroll"],w=()=>["auto","contain","none"],P=()=>[Ge,He,l],T=()=>[mr,"full","auto",...P()],M=()=>[gr,"none","subgrid",Ge,He],D=()=>["auto",{span:["full",gr,Ge,He]},gr,Ge,He],O=()=>[gr,"auto",Ge,He],z=()=>["auto","min","max","fr",Ge,He],X=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ee=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...P()],ae=()=>[mr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],G=()=>[mr,"screen","full","dvw","lvw","svw","min","max","fit",...P()],le=()=>[mr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...P()],J=()=>[i,Ge,He],ne=()=>[..._(),Ld,Pd,{position:[Ge,He]}],me=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ye=()=>["auto","cover","contain",Cy,by,{size:[Ge,He]}],H=()=>[_l,Ya,Nr],K=()=>["","none","full",c,Ge,He],oe=()=>["",lt,Ya,Nr],he=()=>["solid","dashed","dotted","double"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ae=()=>[lt,_l,Ld,Pd],Be=()=>["","none",g,Ge,He],Ye=()=>["none",lt,Ge,He],Je=()=>["none",lt,Ge,He],ct=()=>[lt,Ge,He],I=()=>[mr,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Zi],breakpoint:[Zi],color:[Cd],container:[Zi],"drop-shadow":[Zi],ease:["in","out","in-out"],font:[My],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Zi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Zi],shadow:[Zi],spacing:["px",lt],text:[Zi],"text-shadow":[Zi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",mr,He,Ge,f]}],container:["container"],columns:[{columns:[lt,He,Ge,o]}],"break-after":[{"break-after":b()}],"break-before":[{"break-before":b()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:R()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[gr,"auto",Ge,He]}],basis:[{basis:[mr,"full","auto",o,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[lt,mr,"auto","initial","none",He]}],grow:[{grow:["",lt,Ge,He]}],shrink:[{shrink:["",lt,Ge,He]}],order:[{order:[gr,"first","last","none",Ge,He]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":z()}],"auto-rows":[{"auto-rows":z()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...X(),"normal"]}],"justify-items":[{"justify-items":[...ee(),"normal"]}],"justify-self":[{"justify-self":["auto",...ee()]}],"align-content":[{content:["normal",...X()]}],"align-items":[{items:[...ee(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ee(),{baseline:["","last"]}]}],"place-content":[{"place-content":X()}],"place-items":[{"place-items":[...ee(),"baseline"]}],"place-self":[{"place-self":["auto",...ee()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pbs:[{pbs:P()}],pbe:[{pbe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mbs:[{mbs:Y()}],mbe:[{mbe:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:ae()}],"inline-size":[{inline:["auto",...G()]}],"min-inline-size":[{"min-inline":["auto",...G()]}],"max-inline-size":[{"max-inline":["none",...G()]}],"block-size":[{block:["auto",...le()]}],"min-block-size":[{"min-block":["auto",...le()]}],"max-block-size":[{"max-block":["none",...le()]}],w:[{w:[o,"screen",...ae()]}],"min-w":[{"min-w":[o,"screen","none",...ae()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[s]},...ae()]}],h:[{h:["screen","lh",...ae()]}],"min-h":[{"min-h":["screen","lh","none",...ae()]}],"max-h":[{"max-h":["screen","lh",...ae()]}],"font-size":[{text:["base",t,Ya,Nr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Py,Ey]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_l,He]}],"font-family":[{font:[Ay,Ty,e]}],"font-features":[{"font-features":[He]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Ge,He]}],"line-clamp":[{"line-clamp":[lt,"none",Ge,Rd]}],leading:[{leading:[n,...P()]}],"list-image":[{"list-image":["none",Ge,He]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ge,He]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:J()}],"text-color":[{text:J()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[lt,"from-font","auto",Ge,Nr]}],"text-decoration-color":[{decoration:J()}],"underline-offset":[{"underline-offset":[lt,"auto",Ge,He]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ge,He]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ge,He]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ne()}],"bg-repeat":[{bg:me()}],"bg-size":[{bg:ye()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},gr,Ge,He],radial:["",Ge,He],conic:[gr,Ge,He]},Ry,wy]}],"bg-color":[{bg:J()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:J()}],"gradient-via":[{via:J()}],"gradient-to":[{to:J()}],rounded:[{rounded:K()}],"rounded-s":[{"rounded-s":K()}],"rounded-e":[{"rounded-e":K()}],"rounded-t":[{"rounded-t":K()}],"rounded-r":[{"rounded-r":K()}],"rounded-b":[{"rounded-b":K()}],"rounded-l":[{"rounded-l":K()}],"rounded-ss":[{"rounded-ss":K()}],"rounded-se":[{"rounded-se":K()}],"rounded-ee":[{"rounded-ee":K()}],"rounded-es":[{"rounded-es":K()}],"rounded-tl":[{"rounded-tl":K()}],"rounded-tr":[{"rounded-tr":K()}],"rounded-br":[{"rounded-br":K()}],"rounded-bl":[{"rounded-bl":K()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-bs":[{"border-bs":oe()}],"border-w-be":[{"border-be":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:J()}],"border-color-x":[{"border-x":J()}],"border-color-y":[{"border-y":J()}],"border-color-s":[{"border-s":J()}],"border-color-e":[{"border-e":J()}],"border-color-bs":[{"border-bs":J()}],"border-color-be":[{"border-be":J()}],"border-color-t":[{"border-t":J()}],"border-color-r":[{"border-r":J()}],"border-color-b":[{"border-b":J()}],"border-color-l":[{"border-l":J()}],"divide-color":[{divide:J()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[lt,Ge,He]}],"outline-w":[{outline:["",lt,Ya,Nr]}],"outline-color":[{outline:J()}],shadow:[{shadow:["","none",d,is,ts]}],"shadow-color":[{shadow:J()}],"inset-shadow":[{"inset-shadow":["none",p,is,ts]}],"inset-shadow-color":[{"inset-shadow":J()}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:J()}],"ring-offset-w":[{"ring-offset":[lt,Nr]}],"ring-offset-color":[{"ring-offset":J()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":J()}],"text-shadow":[{"text-shadow":["none",h,is,ts]}],"text-shadow-color":[{"text-shadow":J()}],opacity:[{opacity:[lt,Ge,He]}],"mix-blend":[{"mix-blend":[...ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ce()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[lt]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ae()}],"mask-image-linear-from-color":[{"mask-linear-from":J()}],"mask-image-linear-to-color":[{"mask-linear-to":J()}],"mask-image-t-from-pos":[{"mask-t-from":Ae()}],"mask-image-t-to-pos":[{"mask-t-to":Ae()}],"mask-image-t-from-color":[{"mask-t-from":J()}],"mask-image-t-to-color":[{"mask-t-to":J()}],"mask-image-r-from-pos":[{"mask-r-from":Ae()}],"mask-image-r-to-pos":[{"mask-r-to":Ae()}],"mask-image-r-from-color":[{"mask-r-from":J()}],"mask-image-r-to-color":[{"mask-r-to":J()}],"mask-image-b-from-pos":[{"mask-b-from":Ae()}],"mask-image-b-to-pos":[{"mask-b-to":Ae()}],"mask-image-b-from-color":[{"mask-b-from":J()}],"mask-image-b-to-color":[{"mask-b-to":J()}],"mask-image-l-from-pos":[{"mask-l-from":Ae()}],"mask-image-l-to-pos":[{"mask-l-to":Ae()}],"mask-image-l-from-color":[{"mask-l-from":J()}],"mask-image-l-to-color":[{"mask-l-to":J()}],"mask-image-x-from-pos":[{"mask-x-from":Ae()}],"mask-image-x-to-pos":[{"mask-x-to":Ae()}],"mask-image-x-from-color":[{"mask-x-from":J()}],"mask-image-x-to-color":[{"mask-x-to":J()}],"mask-image-y-from-pos":[{"mask-y-from":Ae()}],"mask-image-y-to-pos":[{"mask-y-to":Ae()}],"mask-image-y-from-color":[{"mask-y-from":J()}],"mask-image-y-to-color":[{"mask-y-to":J()}],"mask-image-radial":[{"mask-radial":[Ge,He]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ae()}],"mask-image-radial-from-color":[{"mask-radial-from":J()}],"mask-image-radial-to-color":[{"mask-radial-to":J()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[lt]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ae()}],"mask-image-conic-from-color":[{"mask-conic-from":J()}],"mask-image-conic-to-color":[{"mask-conic-to":J()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ne()}],"mask-repeat":[{mask:me()}],"mask-size":[{mask:ye()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ge,He]}],filter:[{filter:["","none",Ge,He]}],blur:[{blur:Be()}],brightness:[{brightness:[lt,Ge,He]}],contrast:[{contrast:[lt,Ge,He]}],"drop-shadow":[{"drop-shadow":["","none",m,is,ts]}],"drop-shadow-color":[{"drop-shadow":J()}],grayscale:[{grayscale:["",lt,Ge,He]}],"hue-rotate":[{"hue-rotate":[lt,Ge,He]}],invert:[{invert:["",lt,Ge,He]}],saturate:[{saturate:[lt,Ge,He]}],sepia:[{sepia:["",lt,Ge,He]}],"backdrop-filter":[{"backdrop-filter":["","none",Ge,He]}],"backdrop-blur":[{"backdrop-blur":Be()}],"backdrop-brightness":[{"backdrop-brightness":[lt,Ge,He]}],"backdrop-contrast":[{"backdrop-contrast":[lt,Ge,He]}],"backdrop-grayscale":[{"backdrop-grayscale":["",lt,Ge,He]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[lt,Ge,He]}],"backdrop-invert":[{"backdrop-invert":["",lt,Ge,He]}],"backdrop-opacity":[{"backdrop-opacity":[lt,Ge,He]}],"backdrop-saturate":[{"backdrop-saturate":[lt,Ge,He]}],"backdrop-sepia":[{"backdrop-sepia":["",lt,Ge,He]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ge,He]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[lt,"initial",Ge,He]}],ease:[{ease:["linear","initial",u,Ge,He]}],delay:[{delay:[lt,Ge,He]}],animate:[{animate:["none",S,Ge,He]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,Ge,He]}],"perspective-origin":[{"perspective-origin":R()}],rotate:[{rotate:Ye()}],"rotate-x":[{"rotate-x":Ye()}],"rotate-y":[{"rotate-y":Ye()}],"rotate-z":[{"rotate-z":Ye()}],scale:[{scale:Je()}],"scale-x":[{"scale-x":Je()}],"scale-y":[{"scale-y":Je()}],"scale-z":[{"scale-z":Je()}],"scale-3d":["scale-3d"],skew:[{skew:ct()}],"skew-x":[{"skew-x":ct()}],"skew-y":[{"skew-y":ct()}],transform:[{transform:[Ge,He,"","none","gpu","cpu"]}],"transform-origin":[{origin:R()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:I()}],"translate-x":[{"translate-x":I()}],"translate-y":[{"translate-y":I()}],"translate-z":[{"translate-z":I()}],"translate-none":["translate-none"],accent:[{accent:J()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:J()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ge,He]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mbs":[{"scroll-mbs":P()}],"scroll-mbe":[{"scroll-mbe":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pbs":[{"scroll-pbs":P()}],"scroll-pbe":[{"scroll-pbe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ge,He]}],fill:[{fill:["none",...J()]}],"stroke-w":[{stroke:[lt,Ya,Nr,Rd]}],stroke:[{stroke:["none",...J()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Iy=(i,{cacheSize:e,prefix:t,experimentalParseClassName:r,extend:a={},override:n={}})=>(qa(i,"cacheSize",e),qa(i,"prefix",t),qa(i,"experimentalParseClassName",r),rs(i.theme,n.theme),rs(i.classGroups,n.classGroups),rs(i.conflictingClassGroups,n.conflictingClassGroups),rs(i.conflictingClassGroupModifiers,n.conflictingClassGroupModifiers),qa(i,"orderSensitiveModifiers",n.orderSensitiveModifiers),as(i.theme,a.theme),as(i.classGroups,a.classGroups),as(i.conflictingClassGroups,a.conflictingClassGroups),as(i.conflictingClassGroupModifiers,a.conflictingClassGroupModifiers),Bd(i,a,"orderSensitiveModifiers"),i),qa=(i,e,t)=>{t!==void 0&&(i[e]=t)},rs=(i,e)=>{if(e)for(const t in e)qa(i,t,e[t])},as=(i,e)=>{if(e)for(const t in e)Bd(i,e,t)},Bd=(i,e,t)=>{const r=e[t];r!==void 0&&(i[t]=i[t]?i[t].concat(r):r)},Dy=(i,...e)=>typeof i=="function"?Td(zd,i,...e):Td(()=>Iy(zd(),i),...e),Ny=Dy({extend:{classGroups:{h:[{h:["control","selector"]}],w:[{w:["control"]}],p:[{p:["control-inset"]}]}}});function Uy(...i){return Ny(_d(i))}const Hd=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Vd=_d,Oy=(i,e)=>t=>{var r;if(e?.variants==null)return Vd(i,t?.class,t?.className);const{variants:a,defaultVariants:n}=e,s=Object.keys(a).map(c=>{const d=t?.[c],p=n?.[c];if(d===null)return null;const h=Hd(d)||Hd(p);return a[c][h]}),o=t&&Object.entries(t).reduce((c,d)=>{let[p,h]=d;return h===void 0||(c[p]=h),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:p,className:h,...m}=d;return Object.entries(m).every(g=>{let[v,f]=g;return Array.isArray(f)?f.includes({...n,...o}[v]):{...n,...o}[v]===f})?[...c,p,h]:c},[]);return Vd(i,s,l,t?.class,t?.className)},Fy=Oy("inline-flex items-center justify-center px-6 md:px-7 py-4 md:py-5 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap",{variants:{variant:{inactive:"border-[length:var(--stroke-hairline)] border-[var(--line-structural)] bg-background font-normal text-black hover:font-bold dark:text-white",active:"border-[length:var(--stroke-hairline)] border-[var(--line-structural)] bg-background font-bold text-black dark:text-white",plain:"!p-0 !text-mobile-sm md:!text-sm !normal-case font-normal text-text-grey dark:text-text-grey hover:text-black dark:hover:text-white bg-transparent shadow-none",danger:"border-[length:var(--stroke-hairline)] border-[var(--line-structural)] bg-background font-normal text-[#FF0000] hover:font-bold dark:text-[#FF0000]",mobileButton:"!p-0 !text-mobile-sm md:!text-sm !normal-case font-normal text-black dark:text-white hover:font-bold bg-transparent shadow-none",gradient:"font-bold bg-foreground text-background hover:opacity-90"},size:{default:"",xl:"px-8 md:px-10 py-5 md:py-6",icon:"!p-0 h-13 md:h-15 w-13 md:w-15 rounded-full [&_svg]:size-5 md:[&_svg]:size-6 [&_svg]:transition-all [&_svg]:duration-300","chevron-icon":"!p-0 h-7 md:h-8 w-7 md:w-8 rounded-full [&_svg]:size-3.5 md:[&_svg]:size-4 [&_svg]:transition-all [&_svg]:duration-300"}},compoundVariants:[{variant:"inactive",size:"icon",class:"[&_svg]:stroke-[0.1] hover:[&_svg]:stroke-[0.6]"},{variant:"active",size:"icon",class:"[&_svg]:stroke-[0.6]"},{variant:"inactive",size:"chevron-icon",class:"[&_svg]:stroke-[0.1] hover:[&_svg]:stroke-[0.6]"},{variant:"active",size:"chevron-icon",class:"[&_svg]:stroke-[0.6]"}],defaultVariants:{variant:"inactive",size:"default"}}),ky={start:"#C7FF00",end:"#70E800",css:"linear-gradient(135deg, #C7FF00 0%, #70E800 100%)"},ns={...ky},zy=2166136261,By=16777619,Hy=2654435769,Gd=4294967296;function Wd(i,e){let t=(zy^e)>>>0;for(let r=0;r<i.length;r++)t^=i.charCodeAt(r),t=Math.imul(t,By);return t>>>0}function xl(i){return i.normalize("NFC").replace(/\s+/g," ").trim()}function yl(i){const e=xl(i),t=1-2*(Wd(e,0)/Gd),r=Math.sqrt(Math.max(0,1-t*t)),a=2*Math.PI*(Wd(e,Hy)/Gd);return[r*Math.cos(a),r*Math.sin(a),t]}function Vy(i,e){return[...new Set(i.map(xl).filter(Boolean))].sort().slice(0,e)}const Gy=JSON.parse(`[{"id":"ocean","name":"Big Five (OCEAN)","aspects":[{"id":"ocean-O","name":"Openness to Experience","description":"Reflects intellectual curiosity, creativity, and preference for novelty. High scorers are inventive and curious; low scorers are consistent and cautious.","type":"aspect","examples":[]},{"id":"ocean-C","name":"Conscientiousness","description":"A tendency to be organized and dependable, show self-discipline, act dutifully, and aim for achievement.","type":"aspect","examples":[]},{"id":"ocean-E","name":"Extraversion","description":"Energy, positive emotions, assertiveness, sociability, and tendency to seek stimulation in company of others.","type":"aspect","examples":[]},{"id":"ocean-A","name":"Agreeableness","description":"A tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others.","type":"aspect","examples":[]},{"id":"ocean-N","name":"Neuroticism","description":"The tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability.","type":"aspect","examples":[]}],"subAspects":[{"id":"ocean-O-1","name":"Fantasy","description":"Receptivity to the inner world of imagination and daydreaming.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-O-2","name":"Aesthetics","description":"Appreciation for art and beauty in various forms.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-O-3","name":"Feelings","description":"Receptivity to one's own and others' emotions.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-O-4","name":"Actions","description":"Willingness to try new activities and experiences.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-O-5","name":"Ideas","description":"Intellectual curiosity and openness to new ideas.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-O-6","name":"Values","description":"Readiness to re-examine social, political, and religious values.","type":"subAspect","parent":"ocean-O","examples":[]},{"id":"ocean-C-1","name":"Competence","description":"Belief in one's own self-efficacy and capability.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-C-2","name":"Order","description":"Personal organization and tidiness.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-C-3","name":"Dutifulness","description":"Emphasis on fulfilling moral obligations.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-C-4","name":"Achievement Striving","description":"Need for personal accomplishment and ambition.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-C-5","name":"Self-Discipline","description":"Capacity to begin and carry through tasks despite boredom.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-C-6","name":"Deliberation","description":"Tendency to think things through before acting.","type":"subAspect","parent":"ocean-C","examples":[]},{"id":"ocean-E-1","name":"Warmth","description":"Interest in and friendliness toward others.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-E-2","name":"Gregariousness","description":"Preference for the company of others.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-E-3","name":"Assertiveness","description":"Social ascendancy and forcefulness of expression.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-E-4","name":"Activity","description":"Pace of living and need for activity.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-E-5","name":"Excitement-Seeking","description":"Need for environmental stimulation.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-E-6","name":"Positive Emotions","description":"Tendency to experience positive emotions.","type":"subAspect","parent":"ocean-E","examples":[]},{"id":"ocean-A-1","name":"Trust","description":"Belief in the sincerity and good intentions of others.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-A-2","name":"Straightforwardness","description":"Frankness, sincerity, and ingenuousness.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-A-3","name":"Altruism","description":"Active concern for the welfare of others.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-A-4","name":"Compliance","description":"Response to interpersonal conflict.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-A-5","name":"Modesty","description":"Tendency to be humble and self-effacing.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-A-6","name":"Tender-Mindedness","description":"Attitudes of sympathy and concern for others.","type":"subAspect","parent":"ocean-A","examples":[]},{"id":"ocean-N-1","name":"Anxiety","description":"Level of free-floating anxiety and nervousness.","type":"subAspect","parent":"ocean-N","examples":[]},{"id":"ocean-N-2","name":"Angry Hostility","description":"Tendency to experience anger and frustration.","type":"subAspect","parent":"ocean-N","examples":[]},{"id":"ocean-N-3","name":"Depression","description":"Tendency to experience feelings of guilt, sadness, and loneliness.","type":"subAspect","parent":"ocean-N","examples":[]},{"id":"ocean-N-4","name":"Self-Consciousness","description":"Shyness and social anxiety.","type":"subAspect","parent":"ocean-N","examples":[]},{"id":"ocean-N-5","name":"Impulsiveness","description":"Tendency to act on cravings and urges.","type":"subAspect","parent":"ocean-N","examples":[]},{"id":"ocean-N-6","name":"Vulnerability","description":"Susceptibility to stress.","type":"subAspect","parent":"ocean-N","examples":[]}]},{"id":"disc","name":"DISC","aspects":[{"id":"disc-D","name":"Dominance","description":"Emphasis on accomplishing results, confidence. Sees the big picture, can be blunt, accepts challenges.","type":"aspect","examples":[]},{"id":"disc-I","name":"Influence","description":"Emphasis on influencing or persuading others, openness, relationships. Shows enthusiasm, is optimistic.","type":"aspect","examples":[]},{"id":"disc-S","name":"Steadiness","description":"Emphasis on cooperation, sincerity, dependability. Calm manner, supportive actions.","type":"aspect","examples":[]},{"id":"disc-C","name":"Conscientiousness","description":"Emphasis on quality and accuracy, expertise, competency. Enjoys independence, objective reasoning.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"riasec","name":"Holland Codes (RIASEC)","aspects":[{"id":"riasec-R","name":"Realistic","description":"The 'Doers'. Practical, mechanical, realistic. Prefer working with objects, tools, machines, plants, or animals.","type":"aspect","examples":[]},{"id":"riasec-I","name":"Investigative","description":"The 'Thinkers'. Observant, intellectual, analytical. Prefer solving abstract problems in science or engineering.","type":"aspect","examples":[]},{"id":"riasec-A","name":"Artistic","description":"The 'Creators'. Creative, original, independent. Prefer unstructured situations where they can use creativity.","type":"aspect","examples":[]},{"id":"riasec-S","name":"Social","description":"The 'Helpers'. Helpful, responsible. Prefer working with people to inform, help, train, or cure.","type":"aspect","examples":[]},{"id":"riasec-E","name":"Enterprising","description":"The 'Persuaders'. Ambitious, energetic, sociable. Prefer influencing, leading, or managing others.","type":"aspect","examples":[]},{"id":"riasec-C","name":"Conventional","description":"The 'Organizers'. Orderly, efficient. Prefer working with data and following instructions.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"mbti","name":"Myers-Briggs (MBTI)","aspects":[{"id":"mbti-EI","name":"Extraversion vs. Introversion","description":"Where you focus attention and get energy. Extraverts are energized by outer world; introverts by inner world.","type":"aspect","examples":[]},{"id":"mbti-SN","name":"Sensing vs. Intuition","description":"How you take in information. Sensors focus on concrete present; intuitives on future possibilities.","type":"aspect","examples":[]},{"id":"mbti-TF","name":"Thinking vs. Feeling","description":"How you make decisions. Thinkers use logic; feelers use values and empathy.","type":"aspect","examples":[]},{"id":"mbti-JP","name":"Judging vs. Perceiving","description":"How you approach life. Judgers prefer planned approach; perceivers prefer flexibility.","type":"aspect","examples":[]}],"subAspects":[{"id":"mbti-EI-1","name":"Initiating/Receiving","description":"Tendency to start conversations vs. wait for others.","type":"subAspect","parent":"mbti-EI","examples":[]},{"id":"mbti-EI-2","name":"Expressive/Contained","description":"Tendency to share emotions openly vs. keep private.","type":"subAspect","parent":"mbti-EI","examples":[]},{"id":"mbti-EI-3","name":"Gregarious/Intimate","description":"Preference for large groups vs. one-on-one interactions.","type":"subAspect","parent":"mbti-EI","examples":[]},{"id":"mbti-EI-4","name":"Active/Reflective","description":"Learning by doing vs. learning by thinking.","type":"subAspect","parent":"mbti-EI","examples":[]},{"id":"mbti-EI-5","name":"Enthusiastic/Quiet","description":"Energy level and presence in social situations.","type":"subAspect","parent":"mbti-EI","examples":[]},{"id":"mbti-SN-1","name":"Concrete/Abstract","description":"Focus on tangible facts vs. theoretical concepts.","type":"subAspect","parent":"mbti-SN","examples":[]},{"id":"mbti-SN-2","name":"Realistic/Imaginative","description":"Practical orientation vs. creative thinking.","type":"subAspect","parent":"mbti-SN","examples":[]},{"id":"mbti-SN-3","name":"Practical/Conceptual","description":"Focus on usefulness vs. meaning.","type":"subAspect","parent":"mbti-SN","examples":[]},{"id":"mbti-SN-4","name":"Experiential/Theoretical","description":"Learning from experience vs. from models.","type":"subAspect","parent":"mbti-SN","examples":[]},{"id":"mbti-SN-5","name":"Traditional/Original","description":"Following established ways vs. creating new ones.","type":"subAspect","parent":"mbti-SN","examples":[]},{"id":"mbti-TF-1","name":"Logical/Empathetic","description":"Reasoning from principles vs. understanding feelings.","type":"subAspect","parent":"mbti-TF","examples":[]},{"id":"mbti-TF-2","name":"Reasonable/Compassionate","description":"Seeking fairness vs. seeking harmony.","type":"subAspect","parent":"mbti-TF","examples":[]},{"id":"mbti-TF-3","name":"Questioning/Accommodating","description":"Challenging ideas vs. accepting perspectives.","type":"subAspect","parent":"mbti-TF","examples":[]},{"id":"mbti-TF-4","name":"Critical/Accepting","description":"Evaluating flaws vs. appreciating strengths.","type":"subAspect","parent":"mbti-TF","examples":[]},{"id":"mbti-TF-5","name":"Tough/Tender","description":"Firm decisions vs. gentle approach.","type":"subAspect","parent":"mbti-TF","examples":[]},{"id":"mbti-JP-1","name":"Systematic/Casual","description":"Following procedures vs. going with flow.","type":"subAspect","parent":"mbti-JP","examples":[]},{"id":"mbti-JP-2","name":"Planful/Open-Ended","description":"Making plans vs. keeping options open.","type":"subAspect","parent":"mbti-JP","examples":[]},{"id":"mbti-JP-3","name":"Early Starting/Pressure-Prompted","description":"Starting early vs. working under deadline.","type":"subAspect","parent":"mbti-JP","examples":[]},{"id":"mbti-JP-4","name":"Scheduled/Spontaneous","description":"Following schedule vs. being flexible.","type":"subAspect","parent":"mbti-JP","examples":[]},{"id":"mbti-JP-5","name":"Methodical/Emergent","description":"Step-by-step approach vs. adaptive approach.","type":"subAspect","parent":"mbti-JP","examples":[]}]},{"id":"enneagram","name":"Enneagram","aspects":[{"id":"enneagram-1","name":"The Reformer","description":"Rational, idealistic type. Principled, purposeful, self-controlled. Core fear: Being corrupt. Core desire: To have integrity.","type":"aspect","examples":[]},{"id":"enneagram-2","name":"The Helper","description":"Caring, interpersonal type. Generous, people-pleasing. Core fear: Being unwanted. Core desire: To feel loved.","type":"aspect","examples":[]},{"id":"enneagram-3","name":"The Achiever","description":"Success-oriented, pragmatic type. Adaptable, driven. Core fear: Being worthless. Core desire: To feel valuable.","type":"aspect","examples":[]},{"id":"enneagram-4","name":"The Individualist","description":"Sensitive, introspective type. Expressive, dramatic. Core fear: No identity. Core desire: To find significance.","type":"aspect","examples":[]},{"id":"enneagram-5","name":"The Investigator","description":"Intense, cerebral type. Perceptive, innovative. Core fear: Being incapable. Core desire: To be competent.","type":"aspect","examples":[]},{"id":"enneagram-6","name":"The Loyalist","description":"Committed, security-oriented type. Responsible, anxious. Core fear: No support. Core desire: Security.","type":"aspect","examples":[]},{"id":"enneagram-7","name":"The Enthusiast","description":"Busy, variety-seeking type. Spontaneous, versatile. Core fear: Being trapped. Core desire: To be satisfied.","type":"aspect","examples":[]},{"id":"enneagram-8","name":"The Challenger","description":"Powerful, dominating type. Self-confident, decisive. Core fear: Being controlled. Core desire: To be in control.","type":"aspect","examples":[]},{"id":"enneagram-9","name":"The Peacemaker","description":"Easygoing, self-effacing type. Receptive, reassuring. Core fear: Loss and separation. Core desire: Inner peace.","type":"aspect","examples":[]}],"subAspects":[{"id":"enneagram-inst-sp","name":"Self-Preservation","description":"Focus on physical safety, comfort, health, and material security.","type":"subAspect","parent":"instinct","examples":[]},{"id":"enneagram-inst-so","name":"Social","description":"Focus on group belonging, social position, and community.","type":"subAspect","parent":"instinct","examples":[]},{"id":"enneagram-inst-sx","name":"Sexual/One-to-One","description":"Focus on intense connections, attraction, and one-to-one bonds.","type":"subAspect","parent":"instinct","examples":[]},{"id":"enneagram-triad-heart","name":"Heart Center","description":"Types 2, 3, 4 - Deal with shame and issues of identity.","type":"subAspect","parent":"triad","examples":[]},{"id":"enneagram-triad-head","name":"Head Center","description":"Types 5, 6, 7 - Deal with fear and security concerns.","type":"subAspect","parent":"triad","examples":[]},{"id":"enneagram-triad-gut","name":"Gut Center","description":"Types 8, 9, 1 - Deal with anger and autonomy issues.","type":"subAspect","parent":"triad","examples":[]}]},{"id":"belbin","name":"Belbin Team Roles","aspects":[{"id":"belbin-plant","name":"Plant","description":"Creative, imaginative, free-thinking. Generates ideas and solves difficult problems.","type":"aspect","examples":[]},{"id":"belbin-ri","name":"Resource Investigator","description":"Outgoing, enthusiastic, communicative. Explores opportunities and develops contacts.","type":"aspect","examples":[]},{"id":"belbin-co","name":"Co-ordinator","description":"Mature, confident, identifies talent. Clarifies goals, delegates effectively.","type":"aspect","examples":[]},{"id":"belbin-sh","name":"Shaper","description":"Challenging, dynamic, thrives on pressure. Has drive and courage to overcome obstacles.","type":"aspect","examples":[]},{"id":"belbin-me","name":"Monitor Evaluator","description":"Sober, strategic, discerning. Sees all options and judges accurately.","type":"aspect","examples":[]},{"id":"belbin-tw","name":"Teamworker","description":"Co-operative, perceptive, diplomatic. Listens and averts friction.","type":"aspect","examples":[]},{"id":"belbin-imp","name":"Implementer","description":"Practical, reliable, efficient. Turns ideas into actions and organizes work.","type":"aspect","examples":[]},{"id":"belbin-cf","name":"Completer Finisher","description":"Painstaking, conscientious, anxious. Searches out errors, polishes and perfects.","type":"aspect","examples":[]},{"id":"belbin-sp","name":"Specialist","description":"Single-minded, self-starting, dedicated. Provides knowledge and skills in rare supply.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"emotional-intelligence","name":"Emotional Intelligence","aspects":[{"id":"ei-sa","name":"Self-Awareness","description":"Ability to recognize your own emotions, moods, and drives, and their effect on others.","type":"aspect","examples":[]},{"id":"ei-sr","name":"Self-Regulation","description":"Ability to control disruptive impulses and moods, and think before acting.","type":"aspect","examples":[]},{"id":"ei-m","name":"Motivation","description":"Passion to work for reasons beyond money or status, with energy and persistence.","type":"aspect","examples":[]},{"id":"ei-e","name":"Empathy","description":"Ability to understand the emotional makeup of others and treat them accordingly.","type":"aspect","examples":[]},{"id":"ei-ss","name":"Social Skills","description":"Proficiency in managing relationships and building networks.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"multiple-intelligences","name":"Multiple Intelligences","aspects":[{"id":"mi-ling","name":"Linguistic","description":"Capacity to use language effectively. Writers, poets, lawyers, speakers.","type":"aspect","examples":[]},{"id":"mi-log","name":"Logical-Mathematical","description":"Capacity to use numbers and reason well. Scientists, mathematicians.","type":"aspect","examples":[]},{"id":"mi-spa","name":"Spatial","description":"Ability to perceive visual-spatial world accurately. Architects, artists.","type":"aspect","examples":[]},{"id":"mi-mus","name":"Musical","description":"Capacity to perceive and express musical forms. Composers, performers.","type":"aspect","examples":[]},{"id":"mi-bod","name":"Bodily-Kinesthetic","description":"Using body to express ideas and produce things. Athletes, dancers, surgeons.","type":"aspect","examples":[]},{"id":"mi-inter","name":"Interpersonal","description":"Ability to perceive moods and motivations of others. Teachers, social workers.","type":"aspect","examples":[]},{"id":"mi-intra","name":"Intrapersonal","description":"Self-knowledge and ability to act adaptively. Therapists, philosophers.","type":"aspect","examples":[]},{"id":"mi-nat","name":"Naturalistic","description":"Recognition and classification of species and natural phenomena. Biologists.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"kolb","name":"Kolb Learning Styles","aspects":[{"id":"kolb-div","name":"Diverging","description":"Best at viewing situations from many viewpoints. Imaginative, emotional, broad interests.","type":"aspect","examples":[]},{"id":"kolb-ass","name":"Assimilating","description":"Best at understanding wide range of information and putting it into logical form.","type":"aspect","examples":[]},{"id":"kolb-con","name":"Converging","description":"Best at finding practical uses for ideas and theories. Problem-solving.","type":"aspect","examples":[]},{"id":"kolb-acc","name":"Accommodating","description":"Relies on intuition, practical experiential approach. Attracted to new challenges.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"social-styles","name":"Social Styles","aspects":[{"id":"ss-driver","name":"Driver","description":"Action-oriented, decisive, results-focused. High assertiveness, low responsiveness.","type":"aspect","examples":[]},{"id":"ss-expressive","name":"Expressive","description":"Enthusiastic, creative, future-oriented. High assertiveness, high responsiveness.","type":"aspect","examples":[]},{"id":"ss-amiable","name":"Amiable","description":"Supportive, patient, diplomatic. Low assertiveness, high responsiveness.","type":"aspect","examples":[]},{"id":"ss-analytical","name":"Analytical","description":"Precise, systematic, quality-focused. Low assertiveness, low responsiveness.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"vark","name":"VARK Learning Styles","aspects":[{"id":"vark-v","name":"Visual","description":"Prefer charts, graphs, maps, diagrams. Think in pictures, use color-coding.","type":"aspect","examples":[]},{"id":"vark-a","name":"Auditory","description":"Prefer listening. Learn through lectures, discussions, podcasts.","type":"aspect","examples":[]},{"id":"vark-r","name":"Read/Write","description":"Prefer words. Learn through reading textbooks, writing notes.","type":"aspect","examples":[]},{"id":"vark-k","name":"Kinesthetic","description":"Prefer hands-on experience. Learn through practice, simulation, doing.","type":"aspect","examples":[]}],"subAspects":[]},{"id":"strengths-finder","name":"CliftonStrengths Domains","aspects":[{"id":"cs-exec","name":"Executing","description":"Know how to make things happen. Translate ideas into action.","type":"aspect","examples":[]},{"id":"cs-infl","name":"Influencing","description":"Know how to take charge and speak up. Help groups reach broader audiences.","type":"aspect","examples":[]},{"id":"cs-rel","name":"Relationship Building","description":"Build strong relationships that hold teams together.","type":"aspect","examples":[]},{"id":"cs-strat","name":"Strategic Thinking","description":"Help teams consider what could be. Analyze information for better decisions.","type":"aspect","examples":[]}],"subAspects":[{"id":"cs-exec-1","name":"Achiever","description":"Driven to accomplish, constant need for achievement.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-exec-2","name":"Arranger","description":"Flexible organizer who can juggle many factors.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-exec-3","name":"Discipline","description":"Creates order through structure and routine.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-exec-4","name":"Focus","description":"Takes direction and follows through on priorities.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-exec-5","name":"Responsibility","description":"Takes ownership of commitments.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-exec-6","name":"Restorative","description":"Adept at figuring out what is wrong and fixing it.","type":"subAspect","parent":"cs-exec","examples":[]},{"id":"cs-infl-1","name":"Activator","description":"Turns thoughts into immediate action.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-infl-2","name":"Command","description":"Presence that takes control of situations.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-infl-3","name":"Communication","description":"Puts thoughts into words easily.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-infl-4","name":"Competition","description":"Measures progress against others' performance.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-infl-5","name":"Maximizer","description":"Focuses on excellence and transforming good to great.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-infl-6","name":"Woo","description":"Loves meeting new people and winning them over.","type":"subAspect","parent":"cs-infl","examples":[]},{"id":"cs-rel-1","name":"Adaptability","description":"Goes with the flow and lives in the moment.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-rel-2","name":"Connectedness","description":"Sees links between all things.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-rel-3","name":"Developer","description":"Recognizes and cultivates potential in others.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-rel-4","name":"Empathy","description":"Senses the emotions of those around.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-rel-5","name":"Harmony","description":"Looks for consensus and avoids conflict.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-rel-6","name":"Relator","description":"Enjoys close relationships with others.","type":"subAspect","parent":"cs-rel","examples":[]},{"id":"cs-strat-1","name":"Analytical","description":"Searches for reasons and causes.","type":"subAspect","parent":"cs-strat","examples":[]},{"id":"cs-strat-2","name":"Context","description":"Looks back to understand the present.","type":"subAspect","parent":"cs-strat","examples":[]},{"id":"cs-strat-3","name":"Futuristic","description":"Inspired by future and what could be.","type":"subAspect","parent":"cs-strat","examples":[]},{"id":"cs-strat-4","name":"Ideation","description":"Fascinated by ideas and connections.","type":"subAspect","parent":"cs-strat","examples":[]},{"id":"cs-strat-5","name":"Learner","description":"Great desire to learn and continuously improve.","type":"subAspect","parent":"cs-strat","examples":[]},{"id":"cs-strat-6","name":"Strategic","description":"Creates alternative ways to proceed.","type":"subAspect","parent":"cs-strat","examples":[]}]}]`),Wy={frameworks:Gy},Sl=1,Xy=.08,jy=.08,Xd=48,Yy=6,Ut=128,Ji=3,Za=5,jd=.5,qy=!0,Zy=.5,Jy=.12,Ky=5e-4,$y=`
  uniform float uOpacity;
  uniform vec2 uResolution;
  uniform vec3 uGradientStart;
  uniform vec3 uGradientEnd;

  varying vec3 vColor;
  varying vec3 vPosition;
  varying float vIsHovered;

  void main() {
    // Calculate screen-space gradient (135 degree diagonal)
    vec2 screenUV = gl_FragCoord.xy / uResolution;
    // 135° diagonal: top-left (0,1) to bottom-right (1,0)
    float gradientFactor = (screenUV.x + (1.0 - screenUV.y)) * 0.5;
    gradientFactor = clamp(gradientFactor, 0.0, 1.0);

    // Create gradient color
    vec3 gradientColor = mix(uGradientStart, uGradientEnd, gradientFactor);

    // Apply gradient multiply only to non-hovered vertices
    vec3 finalColor = (vIsHovered > 0.5) ? vColor : vColor * gradientColor;

    gl_FragColor = vec4(finalColor, uOpacity);
  }
`,Qy=Ll({__name:"SphereGraphScene",props:Dl({hierarchyData:{},selectedCategory:{},previewCategory:{},showSourceDots:{type:Boolean},showSourceBulges:{type:Boolean},blendBulges:{type:Boolean},identitySeed:{},sourceBulgeStrength:{},categoryBulgeStrength:{},highlightedSourceIds:{},focusHighlightedSource:{type:Boolean},type:{},deformationAmount:{},size:{},isCollecting:{type:Boolean},cameraDistance:{},wobbleMagnitude:{},pulseMagnitude:{},autoRotationSpeed:{},dragSensitivity:{},friction:{},budgetMethods:{},gainMethods:{},segSpreadDeg:{},segActiveWeight:{},patSpreadDeg:{},patActiveWeight:{},deformationLerpSpeed:{},spreadLerpSpeed:{},wobbleSpeedFactor:{},pulseSpeed:{},interactive:{type:Boolean},targetFps:{},lowPowerMode:{type:Boolean},preserveDrawingBuffer:{type:Boolean},gradientStart:{},gradientEnd:{},exposeMethodPositions:{type:Boolean},labelPositioning:{}},md),emits:["nodeClick","node-click","deformation-started","method-positions"],setup(i,{expose:e,emit:t}){Fi("#ff8400");const r=i,a=t,{t:n}=pd(),s=Kt(()=>(r.hierarchyData?.children??[]).some(j=>Xa(j.data.categoryId)));let o=[];const l=j=>Xa(j)?n(ja(j)):j??"",c=j=>s.value?`${l(W[j])} · ${n("knowledgeCategories.sourceCount",{count:o[j]??0})}`:W[j]??"",d=Fi(null),p=tn("colorMode",null),h=Kt(()=>p?p.value==="dark":typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches),m=Kt(()=>r.gradientStart||ns.start),g=Kt(()=>r.gradientEnd||ns.end),v=Kt(()=>"#B3B3B3");let f=!0,u=null,S=null,b=null,_=null,R=null,A=null,w=null,P=null,T=!1,M=null,D=null,O=0,z=0,X=0,ee=1e3/60,Y=!1,ae=!1,G={x:0,y:0},le=null;const J={x:0,y:0};let ne=null;const me=new ft;let ye=-1;const H=Fi(null),K=Fi({sphere:null,label:null});let oe=[],he=null,ce=null;const Ae=new B(0,0,0);let Be=0;const Ye=new B(0,0,0);let Je=!0;const ct=Fi(!1);Kt(()=>r.isCollecting||!s.value&&!ct.value);let I=!1;Yt(ct,j=>{j&&!I&&(I=!0,a("deformation-started"))},{immediate:!0}),Yt(()=>r.hierarchyData,()=>{r.hierarchyData||(I=!1)});const Se=j=>{const Me=[],Re=Math.PI*(Math.sqrt(5)-1);for(let Ee=0;Ee<j;Ee++){const de=1-Ee/(j-1)*2,fe=Math.sqrt(1-de*de),Le=Re*Ee,we=Math.cos(Le)*fe,tt=Math.sin(Le)*fe;Me.push(new B(we,de,tt).normalize())}return Me},xe=Array.from(new Set(["Content Analysis",...Wy.frameworks.flatMap(j=>j.aspects.map(Me=>Me.name))])).sort(),qe=new Map([["Process Openness","Openness to Experience"],["Extraversion (E) vs. Introversion (I)","Extraversion vs. Introversion"],["Sensing (S) vs. Intuition (N)","Sensing vs. Intuition"],["Thinking (T) vs. Feeling (F)","Thinking vs. Feeling"],["Judging (J) vs. Perceiving (P)","Judging vs. Perceiving"]]),C=j=>xe.includes(j)?j:qe.has(j)?qe.get(j):xe.filter(Re=>j.includes(Re)).sort((Re,Ee)=>Ee.length-Re.length)[0]||"Content Analysis",L=(()=>{const j=new Map,Me=Se(xe.length);return xe.forEach((Re,Ee)=>{j.set(Re,Me[Ee])}),j})();let W=xe.slice(0,Ut);const re=()=>r.labelPositioning==="labels",V=j=>re()?xl(j):C(j),y=j=>re()?new B(...yl(j)):L.get(j).clone(),x=Ut*Ji,U=x*Za,$=new Float32Array(Ut*4),ie=new Float32Array(x*4),Q=new Float32Array(U*4),Ve=new Uo($,Ut,1,oi,fi),be=new Uo(ie,x,1,oi,fi),Fe=new Uo(Q,U,1,oi,fi);Ve.minFilter=Bt,Ve.magFilter=Bt,be.minFilter=Bt,be.magFilter=Bt,Fe.minFilter=Bt,Fe.magFilter=Bt;const Ne=new Array(Ut).fill(0),se=new Array(x).fill(0),De=new Array(U).fill(0),Qe=new Array(Ut).fill(0),Ze=new Array(x).fill(0),Te=new Array(U).fill(0),Ke=Array.from({length:Ut},()=>new B),N=Array.from({length:x},()=>new B),Ce=Array.from({length:U},()=>new B),ue=new Array(Ut).fill(0),ke=new Array(x).fill(0),ge=new Array(U).fill(0),te=(j,Me,Re,Ee)=>{const de=Me*4;j[de]=Re.x,j[de+1]=Re.y,j[de+2]=Re.z,j[de+3]=Ee};let Pe=0,Xe=0,Ct=0;const mt=new Array(x).fill(-1),ti=new Array(U).fill(-1),yi=new Array(Ut),Ka=new Array(Ut),$a=new Array(x),Oi=new Array(x),ya=new Array(U),Qa=new Array(U);for(let j=0;j<Ut;j++)yi[j]=Math.random()*Math.PI*2,Ka[j]=8e-4+Math.random()*.0012;for(let j=0;j<x;j++)$a[j]=Math.random()*Math.PI*2,Oi[j]=.001+Math.random()*.001;for(let j=0;j<U;j++)ya[j]=Math.random()*Math.PI*2,Qa[j]=.0012+Math.random()*8e-4;const Or=j=>Math.max(0,Math.min(1,j));let jt=Or(r.deformationAmount??1),Fr=jt,$i=-1,Si=1.5,vr=1.5,kr=!1,Sa=0,Qi=0,Ma=0;function en(j){const Me=j.clone().normalize(),Re=(Math.abs(Me.y)<.99?new B(0,1,0):new B(1,0,0)).clone().cross(Me).normalize(),Ee=Me.clone().cross(Re).normalize();return{t1:Re,t2:Ee}}function cs(j,Me){const Re=tc.degToRad(Me),{t1:Ee,t2:de}=en(j);return Array.from({length:Ji},(fe,Le)=>2*Math.PI*Le/Ji).map(fe=>{const Le=Ee.clone().multiplyScalar(Math.cos(fe)).addScaledVector(de,Math.sin(fe));return j.clone().multiplyScalar(Math.cos(Re)).addScaledVector(Le,Math.sin(Re)).normalize()})}function E(j,Me){const Re=tc.degToRad(Me),{t1:Ee,t2:de}=en(j);return Array.from({length:Za},(fe,Le)=>2*Math.PI*Le/Za).map(fe=>{const Le=Ee.clone().multiplyScalar(Math.cos(fe)).addScaledVector(de,Math.sin(fe));return j.clone().multiplyScalar(Math.cos(Re)).addScaledVector(Le,Math.sin(Re)).normalize()})}const k=()=>{const j=new Map;if(oe.forEach(_e=>{const ve=`${_e.type}:${_e.label}`;j.set(ve,_e.weight)}),oe=[],$i=-1,T=!0,Be=0,Je=!0,ct.value=!1,s.value){const _e=fl((r.hierarchyData?.children??[]).map(ve=>ve.data));ye=-1,H.value=null,ce&&(ce.uniforms.uHoveredMethod.value=-1),W=_e.map(ve=>ve.categoryId),o=_e.map(ve=>ve.count),Pe=_e.length,Xe=Ct=0,se.fill(0),De.fill(0),Ze.fill(0),Te.fill(0),ie.fill(0),Q.fill(0),_e.forEach((ve,ht)=>{const dt=new B(...ve.direction),Mt=j.get(`method:${ve.categoryId}`)??0;Ke[ht].copy(dt),Ne[ht]=ve.weight,Qe[ht]=Mt,te($,ht,dt,Mt),oe.push({direction:dt,baseWeight:ve.weight,weight:Mt,targetWeight:ve.weight,label:ve.categoryId,type:"method",wobblePhase:0,wobbleSpeed:0})});for(let ve=Pe;ve<Ut;ve++)Ne[ve]=Qe[ve]=0,te($,ve,Ke[ve],0);Ve.needsUpdate=be.needsUpdate=Fe.needsUpdate=!0,ct.value=_e.some(ve=>ve.count>0),kr=ct.value,Si=vr=1,Sa=_e.filter(ve=>ve.count>0).length,ze(jt);return}if(!r.hierarchyData){W=xe.slice(0,Ut);const _e=.008;xe.slice(0,Ut).forEach((ve,ht)=>{const dt=L.get(ve);Ke[ht].copy(dt),Ne[ht]=_e,te($,ht,dt,Qe[ht]);const Mt=`method:${ve}`,ii=j.get(Mt)??0;oe.push({direction:dt.clone(),baseWeight:_e,weight:ii||_e,targetWeight:_e,label:ve,type:"method",wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:.002+Math.random()*.003})}),Ve.needsUpdate=!0,Pe=Math.min(xe.length,Ut),Xe=0,Ct=0;for(let ve=0;ve<x;ve++)N[ve].set(0,0,0),se[ve]=0,te(ie,ve,new B(0,0,0),0);be.needsUpdate=!0;for(let ve=0;ve<U;ve++)Ce[ve].set(0,0,0),De[ve]=0,te(Q,ve,new B(0,0,0),0);Fe.needsUpdate=!0,ze(jt);return}const Me=r.hierarchyData;let Re=0;const Ee=(Me.children||[]).filter(_e=>_e.data?.type==="aspect"||_e.data?.type==="method"),de=new Set(Ee.map(_e=>V(_e.data.name||"Unknown"))),fe=new Map;for(const _e of Ee){const ve=_e.data.name||"Unknown",ht=V(ve),dt=(_e.children||[]).filter(Mt=>Mt.data?.type==="subAspect"||Mt.data?.type==="competency");fe.has(ht)?fe.get(ht).push(...dt):fe.set(ht,dt)}const Le=re()?Vy([...de],Ut):xe.slice(0,Ut);W=Le;const we=Le.map(_e=>{if(!de.has(_e))return 0;const ve=(fe.get(_e)||[]).reduce((ht,dt)=>ht+(dt.children?dt.children.length:0),0);return Re+=ve,1+ve*.2}),tt=we.reduce((_e,ve)=>_e+ve,0);let st=[];if(tt>0){const _e=we.map(Mt=>Mt/tt*r.budgetMethods),ve=r.budgetMethods/Ut,ht=.8;st=_e.map(Mt=>{const ii=Mt-ve;return ht*Math.tanh(ii*r.gainMethods)});const dt=st.reduce((Mt,ii)=>Mt+ii,0)/Ut;st=st.map(Mt=>Mt-dt)}else st=new Array(Ut).fill(0);Le.forEach((_e,ve)=>{const ht=y(_e),dt=st[ve];Ke[ve].copy(ht),Ne[ve]=dt,te($,ve,ht,Qe[ve]);const Mt=`method:${_e}`,ii=j.get(Mt)??0;oe.push({direction:ht.clone(),baseWeight:dt,weight:ii,targetWeight:dt,label:_e,type:"method",wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:.002+Math.random()*.003})});const rt=[];for(let _e=0;_e<Le.length;_e++){const ve=Le[_e],ht=y(ve).normalize(),dt=cs(ht,r.segSpreadDeg),Mt=fe.get(ve)||[],ii=Math.min(Ji,Mt.length);for(let er=0;er<Ji;er++)rt.push({dir:dt[er],active:er<ii})}rt.reduce((_e,ve)=>_e+(ve.active?1:0),0);let It=1,gt=0;for(let _e=0;_e<Le.length;_e++)for(let ve=0;ve<Ji;ve++){const ht=_e*Ji+ve;if(ht>=rt.length||gt>=x)break;const dt=rt[ht],Mt=dt.active?r.segActiveWeight*It:0,ii=Math.max(-jd,Math.min(jd,Mt));N[gt].copy(dt.dir),se[gt]=ii,te(ie,gt,dt.dir,Ze[gt]),mt[gt]=_e,gt++;const er=j.get("competency:segment")??0;oe.push({direction:dt.dir.clone(),baseWeight:ii,weight:er,targetWeight:ii,label:"segment",type:"competency",wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:.002+Math.random()*.003})}for(let _e=gt;_e<x;_e++)N[_e].set(0,0,0),se[_e]=0,te(ie,_e,new B(0,0,0),0),mt[_e]=-1;let _t=0,Tt=0;for(let _e=0;_e<Le.length;_e++){const ve=Le[_e],ht=fe.get(ve)||[],dt=Math.min(Ji,ht.length);for(let Mt=0;Mt<Ji;Mt++,Tt++){const ii=N[Tt].clone(),er=Mt<dt,us=E(ii,r.patSpreadDeg),Cl=Mt,sh=Cl<ht.length?(ht[Cl].children||[]).filter(Ri=>Ri.data?.type==="mind").length:0,oh=Math.min(Za,sh);for(let Ri=0;Ri<Za&&_t<U;Ri++){const ds=er&&Ri<oh&&qy?Math.min(Zy,r.patActiveWeight):0;Ce[_t].copy(us[Ri]),De[_t]=ds,te(Q,_t,us[Ri],Te[_t]),ti[_t]=_e;const lh=`pattern:${ve} :: comp ${Mt+1} :: pattern ${Ri+1}`,ch=j.get(lh)??0;oe.push({direction:us[Ri].clone(),baseWeight:ds,weight:ch,targetWeight:ds,label:`${ve} :: comp ${Mt+1} :: pattern ${Ri+1}`,type:"pattern",wobblePhase:Math.random()*Math.PI*2,wobbleSpeed:.002+Math.random()*.003}),_t++}}}for(let _e=_t;_e<U;_e++)Ce[_e].set(0,0,0),De[_e]=0,te(Q,_e,new B(0,0,0),0),ti[_e]=-1;Pe=Le.length,Xe=gt,Ct=_t,Ve.needsUpdate=!0,be.needsUpdate=!0,Fe.needsUpdate=!0,Sa=De.slice(0,_t).filter(_e=>_e>0).length,ct.value=Re>0,Sa>0&&!kr&&(kr=!0,vr=1),Oe(),T=!1,ze(jt)},q=`
  uniform int uMethodCount;
  uniform bool uKnowledgeCategories;
  uniform sampler2D uMethodTexture; // (x, y, z, weight)
  uniform int uHoveredMethod; // Index of hovered method (-1 = none)

  uniform int uSegCount;
  uniform sampler2D uSegTexture;

  uniform int uPatCount;
  uniform sampler2D uPatTexture;

  uniform vec3 uBaseColor;     // Base wireframe color (white for gradient multiply)
  uniform vec3 uHoverColor;    // 70% grey for hovered method
  uniform float uSpreadScale;  // 1.0 = normal, 1.5 = spread out, animates down when data arrives
  uniform float uPulseOffset;  // Uniform pulse offset for breathing animation

  varying vec3 vColor;
  varying vec3 vPosition;
  varying float vIsHovered;

  // Wide, smooth kernel for methods (ground structure)
  float Km(float cosPsi) {
    if (uKnowledgeCategories) {
${Xx}
    }
    // smoothstep(-0.2, 0.7, cosPsi) - wider base to ensure coverage
    float t = clamp((cosPsi - (-0.2)) / (0.7 - (-0.2)), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }

  // Sharp, narrow kernel for segments (extremely tight, needle-like)
  // spreadScale affects the start threshold - higher = wider influence cone
  float Ks(float cosPsi, float spreadScale) {
    // Base: 0.75..0.995, adjusted by spread scale
    float start = 0.75 - (spreadScale - 1.0) * 0.15; // spreads down from 0.75
    float t = clamp((cosPsi - start) / (0.995 - start), 0.0, 1.0);
    // Very sharp power curve for needle-like spike
    return pow(t, 12.0);
  }

  // Ultra sharp kernel for patterns (tiny petals)
  // spreadScale affects the start threshold
  float Kp(float cosPsi, float spreadScale) {
    // Base: 0.85..0.998, adjusted by spread scale
    float start = 0.85 - (spreadScale - 1.0) * 0.2; // spreads down from 0.85
    float t = clamp((cosPsi - start) / (0.998 - start), 0.0, 1.0);
    // very sharp, but still smooth
    return pow(t, 14.0);
  }

  void main() {
    vec3 n = normalize(normal);
    float dr = 0.0;
    
    // Find the dominant method at this vertex
    int dominantMethod = -1;
    float maxAbsInfluence = uKnowledgeCategories ? -1.0 : 0.0;

    // Methods (broad base) - compute displacement and track dominant method
    for (int i = 0; i < ${Ut}; i++) {
      if (i >= uMethodCount) break;
      
      // Read from texture
      vec2 uv = vec2((float(i) + 0.5) / ${Ut}.0, 0.5);
      vec4 data = texture2D(uMethodTexture, uv);
      vec3 dir = normalize(data.xyz); // normalize just in case
      float weight = data.w;
      
      float cosPsi = dot(n, dir);
      float KmVal = Km(cosPsi);
      
      // Displacement (zero-sum: can be + or -)
      dr += weight * KmVal;
      
      // Track dominant method for hover highlighting
      float influence = uKnowledgeCategories ? (cosPsi + 1.0) : abs(weight) > 0.001
        ? weight * KmVal 
        : KmVal;
      float absInfluence = abs(influence);
      if (absInfluence > maxAbsInfluence) {
        maxAbsInfluence = absInfluence;
        dominantMethod = i;
      }
    }

    // Segments (medium; three per method)
    for (int i = 0; i < ${x}; i++) {
      if (i >= uSegCount) break;
      
      vec2 uv = vec2((float(i) + 0.5) / ${x}.0, 0.5);
      vec4 data = texture2D(uSegTexture, uv);
      vec3 dir = normalize(data.xyz);
      float weight = data.w;
      
      float cosPsi = dot(n, dir);
      float KsVal = Ks(cosPsi, uSpreadScale);
      dr += weight * KsVal;
    }

    // Patterns (ultra sharp; 5 per competency)
    for (int i = 0; i < ${U}; i++) {
      if (i >= uPatCount) break;
      
      vec2 uv = vec2((float(i) + 0.5) / ${U}.0, 0.5);
      vec4 data = texture2D(uPatTexture, uv);
      vec3 dir = normalize(data.xyz);
      float weight = data.w;
      
      float cosPsi = dot(n, dir);
      float KpVal = Kp(cosPsi, uSpreadScale);
      dr += weight * KpVal;
    }

    // Clamp indentation to prevent sphere from shrinking too much (keep it roughly spherical base)
    // Relaxed to -0.9 to allow deep "magma-like" indentations
    dr = max(dr, -0.9);

    // Scale base geometry for breathing animation (mesh visibly expands/contracts)
    float pulseScale = 1.0 + uPulseOffset;
    vec3 scaledPosition = position * pulseScale;
    vec3 displaced = scaledPosition + normal * dr;
    vPosition = displaced;

    // Check if this vertex belongs to hovered method
    bool isHovered = (uHoveredMethod >= 0 && dominantMethod == uHoveredMethod);
    vIsHovered = isHovered ? 1.0 : 0.0;

    // Pass base color (gradient applied in fragment shader)
    vColor = isHovered ? uHoverColor : uBaseColor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`,Z=j=>{if(s.value)return Wx(j,Pe);const Me=Math.max(0,Math.min(1,(j- -.2)/(.7- -.2)));return Me*Me*(3-2*Me)},F=(j,Me=1)=>{const Re=.75-(Me-1)*.15,Ee=Math.max(0,Math.min(1,(j-Re)/(.995-Re)));return Math.pow(Ee,12)},pe=(j,Me=1)=>{const Re=.85-(Me-1)*.2,Ee=Math.max(0,Math.min(1,(j-Re)/(.998-Re)));return Math.pow(Ee,14)},Ue=(j=Xd)=>{const Me=new B(0,0,0);if(!ce)return Me;const Re=Se(j);let Ee=0;for(let de=0;de<j;de++){const fe=Re[de];let Le=0;for(let rt=0;rt<Pe;rt++){const It=fe.dot(Ke[rt]);Le+=ue[rt]*Z(It)}for(let rt=0;rt<Xe;rt++){const It=fe.dot(N[rt]);Le+=ke[rt]*F(It,Si)}const we=Sl+Le,tt=we*we*we,st=tt*we;Me.addScaledVector(fe,st),Ee+=tt}return Ee>1e-9&&Me.multiplyScalar(3/4/Ee),Me},Oe=()=>{if(!A||!w||!P)return;const j=A.geometry,Me=j.getAttribute("position");if(!Me)return;const Re=Me.array,Ee=w,de=P,fe=Ee.length/3;for(let Le=0;Le<fe;Le++){const we=Le*3,tt=Ee[we],st=Ee[we+1],rt=Ee[we+2],It=de[we],gt=de[we+1],_t=de[we+2];let Tt=0;for(let _e=0;_e<Pe;_e++){const ve=Ke[_e],ht=It*ve.x+gt*ve.y+_t*ve.z,dt=Z(ht);Tt+=ue[_e]*dt}for(let _e=0;_e<Xe;_e++){const ve=N[_e],ht=It*ve.x+gt*ve.y+_t*ve.z,dt=F(ht,Si);Tt+=ke[_e]*dt}Tt=Math.max(Tt,-.9),Re[we]=tt+It*Tt,Re[we+1]=st+gt*Tt,Re[we+2]=rt+_t*Tt}Me.needsUpdate=!0,j.computeBoundingBox(),j.computeBoundingSphere()},ze=j=>{const Me=Or(j);oe.forEach(Re=>{}),$i=Me,T=!0,Je=!0},it=j=>{Fr=Or(j)},$e=()=>{if(!ce||!R)return;const j=Fr-jt;Math.abs(j)>1e-4?(jt+=j*r.deformationLerpSpeed,Y=!0):jt=Fr;const Me=r.deformationLerpSpeed*.5;let Re=!1;for(let fe=0;fe<Pe;fe++){const Le=Ne[fe]-Qe[fe];Math.abs(Le)>1e-4&&(Qe[fe]+=Le*Me,Re=!0)}for(let fe=0;fe<Xe;fe++){const Le=se[fe]-Ze[fe];Math.abs(Le)>1e-4&&(Ze[fe]+=Le*Me,Re=!0)}for(let fe=0;fe<Ct;fe++){const Le=De[fe]-Te[fe];Math.abs(Le)>1e-4&&(Te[fe]+=Le*Me,Re=!0)}if(Re&&(T=r.interactive,Y=!0),Math.abs(jt-$i)>1e-4&&ze(jt),oe.forEach(fe=>{const Le=fe.targetWeight-fe.weight;Math.abs(Le)>1e-4&&(fe.weight+=Le*Xy,Y=!0)}),Y){for(let we=0;we<Pe;we++){const tt=oe[we];tt&&(ue[we]=tt.weight*jt,te($,we,Ke[we],ue[we]))}const fe=Pe;for(let we=0;we<Xe;we++){const tt=oe[fe+we];tt&&(ke[we]=tt.weight*jt,te(ie,we,N[we],ke[we]))}const Le=Pe+Xe;for(let we=0;we<Ct;we++){const tt=oe[Le+we];tt&&(ge[we]=tt.weight*jt,te(Q,we,Ce[we],ge[we]))}Ve.needsUpdate=!0,be.needsUpdate=!0,Fe.needsUpdate=!0,Y=!1}let Ee;(Je||Be++>=Yy)&&(Ye.copy(Ue(Xd)),Be=0,Je=!1),Ee=Ye,Ae.lerp(Ee,jy),R.position.copy(Ae).multiplyScalar(-1),A&&A.position.copy(R.position),ce.uniforms.uMethodCount.value=Pe,ce.uniforms.uKnowledgeCategories.value=s.value,ce.uniforms.uSegCount.value=Xe,ce.uniforms.uPatCount.value=Ct;const de=vr-Si;if(Math.abs(de)>.001&&(Si+=de*r.spreadLerpSpeed,ce.uniforms.uSpreadScale.value=Si,T=!0),r.isCollecting){Ma+=16;const fe=Jy*Math.sin(Ma*Ky);Qi+=(fe-Qi)*.05}else Qi+=(0-Qi)*.03;ce.uniforms.uPulseOffset.value=Qi},et=()=>{if(!d.value)return;_&&(d.value&&_.domElement.parentNode===d.value&&d.value.removeChild(_.domElement),_.dispose(),_=null);const j=d.value.clientWidth,Me=d.value.clientHeight;S=new No,S.background=null,b=new hi(50,j/Me,.1,1e3),b.position.z=r.cameraDistance,_=new Wn({antialias:!0,alpha:!0,preserveDrawingBuffer:r.preserveDrawingBuffer}),_.domElement.style.width="100%",_.domElement.style.height="100%",_.setSize(j,Me,!1);const Re=Math.min(window.devicePixelRatio||1,2);_.setPixelRatio(Re),d.value.appendChild(_.domElement);const Ee=r.lowPowerMode||r.size==="small"?24:32,de=new Al(Sl,Ee,Ee);he=de,w=new Float32Array(de.attributes.position.array),P=new Float32Array(de.attributes.normal.array);const fe=new at("#ffffff"),Le=new at(m.value),we=new at(g.value),tt=new at(v.value);ce=new _i({uniforms:{uMethodCount:{value:0},uKnowledgeCategories:{value:s.value},uMethodTexture:{value:Ve},uHoveredMethod:{value:-1},uSegCount:{value:0},uSegTexture:{value:be},uPatCount:{value:0},uPatTexture:{value:Fe},uBaseColor:{value:fe},uHoverColor:{value:tt},uOpacity:{value:.8},uSpreadScale:{value:Si},uPulseOffset:{value:0},uResolution:{value:new ft(j*Re,Me*Re)},uGradientStart:{value:Le},uGradientEnd:{value:we}},vertexShader:q,fragmentShader:$y,wireframe:!0,transparent:!0,side:bi}),M=new Xt,S.add(M),R=new di(de,ce),M.add(R);const st=new Po({visible:!1,side:bi});A=new di(de.clone(),st),M.add(A);const rt=A.geometry.getAttribute("position");rt&&rt.setUsage(lp),k(),$e(),ee=1e3/r.targetFps,r.interactive&&(ne=new Vo);const It=new hf(16777215,.5);S.add(It);const gt=new Fc(16777215,.8);gt.position.set(5,5,5),S.add(gt);const _t=new Fc(16777215,.3);_t.position.set(-5,0,-5),S.add(_t),ut(),At(),u=new IntersectionObserver(Tt=>{Tt.forEach(_e=>{const ve=f;f=_e.isIntersecting,f&&!ve&&!D&&ut()})},{threshold:.1}),d.value&&u.observe(d.value)},ut=j=>{if(!_||!S||!b||!R||!M)return;if(!f){D=null;return}D=requestAnimationFrame(ut);const Me=j||performance.now(),Re=Me-X;if(Re<ee){(Math.abs(J.x)>1e-4||Math.abs(J.y)>1e-4)&&(M.rotation.y+=J.x,M.rotation.x+=J.y,J.x*=r.friction,J.y*=r.friction,_.render(S,b));return}if(X=Me-Re%ee,d.value){const Ee=d.value.clientWidth,de=d.value.clientHeight;(Ee!==O||de!==z)&&Et()}if($e(),R.rotation.set(0,0,0),ae||(M.rotation.y+=r.autoRotationSpeed),(Math.abs(J.x)>1e-4||Math.abs(J.y)>1e-4)&&(M.rotation.y+=J.x,M.rotation.x+=J.y,J.x*=r.friction,J.y*=r.friction),_.render(S,b),r.exposeMethodPositions&&b&&R&&M){const Ee=[],de=d.value?.getBoundingClientRect();if(de){const fe=new B;for(let Le=0;Le<Pe;Le++){const we=oe[Le];if(!we||we.targetWeight<.01)continue;fe.copy(we.direction).multiplyScalar(Sl+we.weight*jt),fe.applyMatrix4(R.matrixWorld),fe.project(b);const tt=(fe.x*.5+.5)*de.width,st=(-fe.y*.5+.5)*de.height;Ee.push({name:s.value?l(W[Le]):W[Le],x:tt,y:st})}a("method-positions",Ee)}}};Yt(()=>r.isCollecting,j=>{j&&f&&!D&&ut()});const St=j=>{if(!R||!ce||!A)return-1;const Me=j.clone();A.worldToLocal(Me);const Re=Me.lengthSq();if(Re===0)return-1;const Ee=1/Math.sqrt(Re),de=Me.x*Ee,fe=Me.y*Ee,Le=Me.z*Ee;let we=-1,tt=s.value?-1:0;for(let st=0;st<Pe;st++){const rt=Ke[st],It=ue[st],gt=de*rt.x+fe*rt.y+Le*rt.z,_t=Z(gt),Tt=s.value?gt+1:Math.abs(It)>.001?It*_t:_t,_e=Math.abs(Tt);_e>tt&&(tt=_e,we=st)}for(let st=0;st<Xe;st++){const rt=N[st],It=ke[st];if(Math.abs(It)<.001)continue;const gt=de*rt.x+fe*rt.y+Le*rt.z,_t=F(gt),Tt=It*_t,_e=Math.abs(Tt),ve=mt[st];ve!==-1&&_e>tt&&(tt=_e,we=ve)}for(let st=0;st<Ct;st++){const rt=Ce[st],It=ge[st];if(Math.abs(It)<.001)continue;const gt=de*rt.x+fe*rt.y+Le*rt.z,_t=pe(gt),Tt=It*_t,_e=Math.abs(Tt),ve=ti[st];ve!==-1&&_e>tt&&(tt=_e,we=ve)}return we},At=()=>{if(!d.value)return;const j=d.value.querySelector("canvas");if(!j)return;let Me={x:0,y:0};j.addEventListener("mousedown",Ee=>{Me={x:Ee.clientX,y:Ee.clientY},ae=!0,G={x:Ee.clientX,y:Ee.clientY}}),j.addEventListener("mousemove",Ee=>{if(ae&&M){const de=Ee.clientX-G.x,fe=Ee.clientY-G.y;J.x=de*r.dragSensitivity,J.y=fe*r.dragSensitivity,M.rotation.y+=J.x,M.rotation.x+=J.y,G={x:Ee.clientX,y:Ee.clientY}}if(r.interactive&&ne&&b&&A&&ce){const de=j.getBoundingClientRect();me.x=(Ee.clientX-de.left)/de.width*2-1,me.y=-((Ee.clientY-de.top)/de.height)*2+1,ne.setFromCamera(me,b),T&&(Oe(),T=!1),A.updateMatrixWorld();const fe=ne.intersectObject(A);if(fe.length>0){const Le=fe[0].point,we=St(Le);if(we!==ye&&(ye=we,ce.uniforms.uHoveredMethod.value=ye,ye>=0?H.value=!s.value&&re()&&!ct.value?null:c(ye):(H.value=null,K.value={sphere:null,label:null})),ye>=0){const tt=Ee.clientX-de.left,st=Ee.clientY-de.top,rt=200,It=50,gt=20,_t=10;let Tt,_e=!1;const ve=de.width-tt,ht=tt;ve>=rt+gt+_t?(Tt=tt+gt,_e=!1):ht>=rt+gt+_t?(Tt=de.width-(tt-gt),_e=!0):ve>ht?(Tt=tt+gt,_e=!1):(Tt=de.width-(tt-gt),_e=!0),_e?Tt=Math.max(_t,Tt):Tt=Math.max(_t,Math.min(Tt,de.width-rt-_t));let dt;de.height-st>=It+gt+_t?dt=st+gt:dt=st-It-gt,dt=Math.max(_t,Math.min(dt,de.height-It-_t)),K.value={sphere:null,label:{x:Tt,y:dt,alignRight:_e}}}}else ye!==-1&&(ye=-1,H.value=null,K.value={sphere:null,label:null},ce.uniforms.uHoveredMethod.value=-1)}});const Re=()=>{ae=!1};le=Re,j.addEventListener("mouseup",Re),document.addEventListener("mouseup",Re),j.addEventListener("click",Ee=>{if(!r.interactive||!s.value||Math.hypot(Ee.clientX-Me.x,Ee.clientY-Me.y)>5||!ne||!b||!A)return;const de=j.getBoundingClientRect();me.set((Ee.clientX-de.left)/de.width*2-1,-((Ee.clientY-de.top)/de.height)*2+1),T&&(Oe(),T=!1),A.updateWorldMatrix(!0,!1),ne.setFromCamera(me,b);const fe=ne.intersectObject(A)[0],Le=fe?St(fe.point):-1,we=W[Le];Xa(we)&&a("node-click",{type:"aspect",label:n(ja(we)),categoryId:we,sourceCount:o[Le]??0},Ee)}),j.addEventListener("touchstart",Ee=>{ae=!0;const de=Ee.touches[0];Me={x:de.clientX,y:de.clientY},G={x:de.clientX,y:de.clientY}}),j.addEventListener("touchmove",Ee=>{if(!ae||!M)return;const de=Ee.touches[0],fe=de.clientX-G.x,Le=de.clientY-G.y;J.x=fe*r.dragSensitivity,J.y=Le*r.dragSensitivity,M.rotation.y+=J.x,M.rotation.x+=J.y,G={x:de.clientX,y:de.clientY}}),j.addEventListener("touchend",()=>{ae=!1}),j.addEventListener("mouseleave",()=>{ye!==-1&&ce&&(ye=-1,H.value=null,K.value={sphere:null,label:null},ce.uniforms.uHoveredMethod.value=-1)})},Rt=()=>{!R||!ce||(ce.uniforms.uGradientStart.value=new at(m.value),ce.uniforms.uGradientEnd.value=new at(g.value))},Et=()=>{if(!d.value||!b||!_)return;const j=d.value.clientWidth,Me=d.value.clientHeight;if(O=j,z=Me,b.aspect=j/Me,b.updateProjectionMatrix(),_.setSize(j,Me,!1),ce){const Re=_.getPixelRatio();ce.uniforms.uResolution.value.set(j*Re,Me*Re)}},je=()=>{le&&(document.removeEventListener("mouseup",le),le=null),D!==null&&(cancelAnimationFrame(D),D=null),u&&(u.disconnect(),u=null),R&&(R.geometry.dispose(),R.material.dispose()),A&&(A.geometry.dispose(),A.material.dispose(),A=null),he&&(he.dispose(),he=null),ce&&(ce.dispose(),ce=null),_&&(_.dispose(),d.value&&_.domElement&&d.value.removeChild(_.domElement)),S=null,b=null,_=null,R=null,M=null,ne=null,ye=-1,H.value=null,K.value={sphere:null,label:null},oe=[],Ae.set(0,0,0),Ye.set(0,0,0),Be=0,Je=!0,w=null,P=null,T=!1,O=0,z=0};let kt="";const Mi=j=>{if(!j)return"null";if(j.children?.some(fe=>Xa(fe.data.categoryId)))return fl(j.children.map(fe=>fe.data)).map(fe=>`${fe.categoryId}:${fe.count}`).join("|");const Me=j.children?.length||0;let Re=0,Ee=0;if(j.children){for(const fe of j.children)if(Re+=fe.children?.length||0,fe.children)for(const Le of fe.children)Ee+=Le.children?.length||0}const de=(j.children||[]).map(fe=>fe.data?.name??"").join("|");return`${Me}-${Re}-${Ee}:${de}`};return Yt(()=>r.hierarchyData,j=>{const Me=Mi(j);Me!==kt&&(kt=Me,j||(kr=!1,vr=1.5,Si=1.5,Ae.set(0,0,0),Ye.set(0,0,0),Je=!0,Qi=0,Ma=0),k(),ce&&$e())}),Yt(()=>r.deformationAmount,j=>{it(j??0)}),Yt(h,()=>{Rt()}),Yt([m,g],()=>{Rt()}),e({exportPng:(j=4096)=>{if(!S||!b)return null;const Me=new Wn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Me.setSize(j,j),Me.setPixelRatio(1);const Re=b.aspect;b.aspect=1,b.updateProjectionMatrix(),ce&&ce.uniforms.uResolution.value.set(j,j),Me.render(S,b);const Ee=Me.domElement.toDataURL("image/png");if(b.aspect=Re,b.updateProjectionMatrix(),ce&&d.value){const de=_?.getPixelRatio()||window.devicePixelRatio;ce.uniforms.uResolution.value.set(d.value.clientWidth*de,d.value.clientHeight*de)}return Me.dispose(),Ee}}),rn(()=>{gh(()=>{je(),et()})}),ps(()=>{je()}),(j,Me)=>(fs(),hs("div",{ref_key:"sphereContainer",ref:d,class:"w-full h-full overflow-hidden relative"},[H.value&&K.value.label?(fs(),hs("div",{key:0,class:"absolute pointer-events-none z-10",style:_h({...K.value.label.alignRight?{right:K.value.label.x+"px"}:{left:K.value.label.x+"px"},top:K.value.label.y+"px"})},[hh("div",{class:Nl(an(Uy)(an(Fy)({variant:"inactive",size:"default"}),"text-xs whitespace-nowrap !px-3 !py-2 !shadow-none"))},vh(H.value),3)],4)):dh("",!0)],512))}}),eS=(i,e)=>{const t=i.__vccOpts||i;for(const[r,a]of e)t[r]=a;return t},tS=eS(Qy,[["__scopeId","data-v-2d54cc85"]]),Ml=new WeakMap,iS=(...i)=>{var e;const t=i[0],r=(e=ba())===null||e===void 0?void 0:e.proxy,a=r??fh();if(a==null&&!Il())throw new Error("injectLocal must be called in setup");return a&&Ml.has(a)&&t in Ml.get(a)?Ml.get(a)[t]:tn(...i)},rS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const aS=Object.prototype.toString,nS=i=>aS.call(i)==="[object Object]";function Yd(i){return i.endsWith("rem")?Number.parseFloat(i)*16:Number.parseFloat(i)}function bl(i){return Array.isArray(i)?i:[i]}function sS(i,e,t){return Yt(i,e,{...t,immediate:!0})}const qd=rS?window:void 0;function oS(i){var e;const t=zr(i);return(e=t?.$el)!==null&&e!==void 0?e:t}function lS(...i){const e=(r,a,n,s)=>(r.addEventListener(a,n,s),()=>r.removeEventListener(a,n,s)),t=Kt(()=>{const r=bl(zr(i[0])).filter(a=>a!=null);return r.every(a=>typeof a!="string")?r:void 0});return sS(()=>{var r,a;return[(r=(a=t.value)===null||a===void 0?void 0:a.map(n=>oS(n)))!==null&&r!==void 0?r:[qd].filter(n=>n!=null),bl(zr(t.value?i[1]:i[0])),bl(an(t.value?i[2]:i[1])),zr(t.value?i[3]:i[2])]},([r,a,n,s],o,l)=>{if(!r?.length||!a?.length||!n?.length)return;const c=nS(s)?{...s}:s,d=r.flatMap(p=>a.flatMap(h=>n.map(m=>e(p,h,m,c))));l(()=>{d.forEach(p=>p())})},{flush:"post"})}function cS(){const i=Ea(!1),e=ba();return e&&rn(()=>{i.value=!0},e),i}function uS(i){const e=cS();return Kt(()=>(e.value,!!i()))}const dS=Symbol("vueuse-ssr-width");function hS(){const i=Il()?iS(dS,null):null;return typeof i=="number"?i:void 0}function pS(i,e={}){const{window:t=qd,ssrWidth:r=hS()}=e,a=uS(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),n=Ea(typeof r=="number"),s=Ea(),o=Ea(!1),l=c=>{o.value=c.matches};return xh(()=>{if(n.value){n.value=!a.value;const c=zr(i).split(",");o.value=c.some(d=>{const p=d.includes("not all"),h=d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),m=d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let g=!!(h||m);return h&&g&&(g=r>=Yd(h[1])),m&&g&&(g=r<=Yd(m[1])),p?!g:g});return}a.value&&(s.value=t.matchMedia(zr(i)),o.value=s.value.matches)}),lS(s,"change",l,{passive:!0}),Kt(()=>o.value)}function fS(i){const e=pS("(prefers-reduced-motion: reduce)",i);return Kt(()=>e.value?"reduce":"no-preference")}const Jt=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],xi=i=>{const e=Math.hypot(...i)||1;return[i[0]/e,i[1]/e,i[2]/e]},Zd=(i,e)=>xi([i[0]+e[0],i[1]+e[1],i[2]+e[2]]),Jd=(i,e)=>i<e?`${i}:${e}`:`${e}:${i}`,Kd=new Map;function $d(i){const e=Kd.get(i);if(e)return e;const t=(1+Math.sqrt(5))/2,r=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]].map(xi);let a=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let o=0;o<i;o++){const l=new Map,c=(d,p)=>{const h=Jd(d,p);return l.has(h)||(l.set(h,r.length),r.push(Zd(r[d],r[p]))),l.get(h)};a=a.flatMap(([d,p,h])=>{const m=c(d,p),g=c(p,h),v=c(h,d);return[[d,m,v],[p,g,m],[h,v,g],[m,g,v]]})}const n=r.map(()=>0);for(const o of a){const[l,c,d]=o.map(m=>r[m]),p=[c[1]*d[2]-c[2]*d[1],c[2]*d[0]-c[0]*d[2],c[0]*d[1]-c[1]*d[0]],h=2*Math.atan2(Math.abs(Jt(l,p)),1+Jt(l,c)+Jt(c,d)+Jt(d,l));for(const m of o)n[m]+=h/3}const s={points:r,faces:a,areas:n};return Kd.set(i,s),s}function ss(i){return xi([i[0]+.065*Math.sin(3*i[1]+2*i[2]),i[1]+.065*Math.sin(3*i[2]+2*i[0]),i[2]+.065*Math.sin(3*i[0]+2*i[1])])}function Qd(i){let e=i;for(let t=0;t<8;t++){const r=ss(e);e=xi([e[0]+i[0]-r[0],e[1]+i[1]-r[1],e[2]+i[2]-r[2]])}return e}function mS(i){return xi([i[0]+.017*Math.sin(13*i[1]+8*i[2]),i[1]+.017*Math.sin(9*i[2]+11*i[0]),i[2]+.017*Math.sin(10*i[0]+8*i[1])])}function El(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function gS(i,e){const t=[...yl(e)];let r=1;for(const a of[...i].sort((n,s)=>n.id.localeCompare(s.id))){const n=1+El(a.richness),s=yl(`${e}:${a.id}`);for(let o=0;o<3;o++)t[o]+=s[o]*n;r+=n}return[t[0]/r,t[1]/r,t[2]/r]}function _S(i,e){const t=Jt(i,e),r=[e[0]-i[0]*t,e[1]-i[1]*t,e[2]-i[2]*t];if(Math.hypot(...r)>1e-6)return xi(r);const a=Math.abs(i[0])<.9?[1,0,0]:[0,1,0],n=Jt(i,a);return xi([a[0]-i[0]*n,a[1]-i[1]*n,a[2]-i[2]*n])}function vS(i){const e=Math.min(16,Math.ceil(Math.cbrt(i.length)));if(e<=1)return()=>i;const t=Array.from({length:e**3},()=>[]),r=s=>Math.max(0,Math.min(e-1,Math.floor((s+1)*e/2))),a=(s,o,l)=>s+e*(o+e*l),n=(s,o)=>Math.max(o*2/e-1-s,s-((o+1)*2/e-1),0);for(const s of i){if(s.maximumChordSquared>=4){for(const g of t)g.push(s);continue}const o=Math.sqrt(s.maximumChordSquared),[l,c,d]=s.center,p=r(l+o),h=r(c+o),m=r(d+o);for(let g=r(l-o);g<=p;g++)for(let v=r(c-o);v<=h;v++)for(let f=r(d-o);f<=m;f++)n(l,g)**2+n(c,v)**2+n(d,f)**2<=s.maximumChordSquared&&t[a(g,v,f)].push(s)}return s=>t[a(r(s[0]),r(s[1]),r(s[2]))]}function eh(i,e){const t=i.filter(s=>s.area>0),r=-Math.log(Number.EPSILON/Math.max(1,t.length)),a=t.map(s=>{const o=s.direction?_S(s.center,s.direction):null,l=o?[s.center[1]*o[2]-s.center[2]*o[1],s.center[2]*o[0]-s.center[0]*o[2],s.center[0]*o[1]-s.center[1]*o[0]]:null,c=s.stretch??1,d=s.lean??0,p=2*Math.PI/(s.area*e),h=Math.max(c,1/c),m=o?(1-Math.abs(d)*h)/h**2:1,g=m>0?2*r/(p*m):4;return{center:s.center,height:s.height,tangent:o,cross:l,lean:d,alongScale:1/(c*c)-1,acrossScale:c*c-1,inverseWidth:p,maximumChordSquared:Number.isFinite(g)&&g>=0?g+64*Number.EPSILON:4}}),n=vS(a);return s=>{let o=0,l=0,c=1;for(const d of n(s)){let p=Math.max(0,1-Jt(s,d.center));if(2*p>d.maximumChordSquared)continue;if(d.tangent&&d.cross){const g=Jt(s,d.tangent),v=Jt(s,d.cross);p=Math.max(0,p+.5*(g*g*d.alongScale+v*v*d.acrossScale)),p*=1-d.lean*g/Math.max(1e-9,Math.sqrt(2*p))}const h=Math.max(0,p)*d.inverseWidth,m=Math.exp(-h-.18*Math.pow(h,.65));o+=m,l+=m*d.height,c*=1-m}return o>0?l/o*(1-c):0}}const th=new WeakMap;function os(i,e){let t=-1/0,r=-1;return e.centers.forEach((a,n)=>{const s=Jt(i,a)+e.biases[n];s>t&&(t=s,r=n)}),r}function Tl(i,e,t){if(e<0)return 0;if(t.centers.length===1)return Math.PI;let r=th.get(t);if(!r){const o=t.centers.length;r=new Float64Array(o*o),t.centers.forEach((l,c)=>t.centers.forEach((d,p)=>{r[c*o+p]=Math.max(1e-9,Math.hypot(l[0]-d[0],l[1]-d[1],l[2]-d[2]))})),th.set(t,r)}const a=t.centers[e],n=Jt(i,a)+t.biases[e];let s=1/0;return t.centers.forEach((o,l)=>{if(l===e)return;const c=r[e*t.centers.length+l];s=Math.min(s,(n-Jt(i,o)-t.biases[l])/c)}),Math.max(0,s)}function xS(i,e){if(!e||!i.length)return[];const t=xi(i.reduce((s,o)=>[s[0]+o[0],s[1]+o[1],s[2]+o[2]],[0,0,0]));let r=0;i.forEach((s,o)=>{Jt(s,t)>Jt(i[r],t)&&(r=o)});const a=[i[r]],n=i.map(()=>1/0);for(;a.length<e;){const s=a[a.length-1];let o=0;if(i.forEach((l,c)=>{n[c]=Math.min(n[c],1-Jt(l,s)),n[c]>n[o]&&(o=c)}),a.length>=i.length){const l=i[a.length%i.length],c=a.length*2.3999632297;a.push(xi([l[0]+.001*Math.cos(c),l[1]+.001*Math.sin(c),l[2]]))}else a.push(i[o])}return a}function ih(i,e,t,r){const a=r.map(m=>[...m]),n=t.map(()=>0),s=i.map(()=>0),o=t.map(()=>0),l=e.reduce((m,g)=>m+g,0),c=t.reduce((m,g)=>m+g,0),d=t.map(m=>l*m/c);if(!t.length)return{centers:a,biases:n,owners:i.map(()=>-1),areas:o};if(t.length===1)return{centers:a,biases:n,owners:s,areas:[l]};const p=new Float32Array(i.length*a.length);for(let m=0;m<3;m++){i.forEach((v,f)=>a.forEach((u,S)=>{p[f*a.length+S]=Jt(v,u)}));for(let v=0;v<32;v++){o.fill(0);for(let f=0;f<i.length;f++){let u=-1/0,S=0;for(let b=0;b<a.length;b++){const _=p[f*a.length+b]+n[b];_>u&&(u=_,S=b)}s[f]=S,o[S]+=e[f]}if(v<31)for(let f=0;f<a.length;f++){if(n[f]+=(d[f]-o[f])/(4*Math.PI)*(1-v/40),o[f]!==0)continue;const u=i.map((b,_)=>{let R=-1/0;for(let A=0;A<a.length;A++)A!==f&&(R=Math.max(R,p[_*a.length+A]+n[A]));return{value:R-p[_*a.length+f],area:e[_]}}).sort((b,_)=>b.value-_.value);let S=0;for(const b of u)if(S+=b.area,n[f]=b.value+1e-7,S>=d[f])break}}if(m===2)break;const g=a.map(()=>[0,0,0]);i.forEach((v,f)=>{const u=g[s[f]],S=e[f];u[0]+=v[0]*S,u[1]+=v[1]*S,u[2]+=v[2]*S}),a.forEach((v,f)=>{o[f]>0&&(a[f]=xi(g[f]))})}for(let m=0;m<8;m++){let g=!1;if(a.forEach((v,f)=>a.forEach((u,S)=>{if(f===S)return;const b=Jt(v,u),_=n[S]-.95*(1-b);n[f]<_&&(n[f]=_,g=!0)})),!g)break}o.fill(0);const h={centers:a,biases:n,owners:s,areas:o};return i.forEach((m,g)=>{const v=os(m,h);s[g]=v,o[v]+=e[g]}),h}const yS=1.6;function SS(i){return Math.pow(4,El(i))}const MS=i=>i*i*(3-2*i);function bS(i,e={}){const t=e.showSourceBulges??!0,r=e.sourceBulgeStrength??1,a=Number.isFinite(r)?Math.max(0,r):1,n=e.categoryBulgeStrength??1,s=Number.isFinite(n)?Math.max(0,n):1,o=fl(i),l=$d(4),c=$d(5),d=l.points.map(ss),p=o.map(ne=>{const me=new Map;for(const ye of i)if(ye.categoryId===ne.categoryId)for(const H of ye.sources??[])me.set(H.id,H);return[...me.values()].sort((ye,H)=>ye.id.localeCompare(H.id))}),h=e.blendBulges?o.map((ne,me)=>gS(p[me],`${e.identitySeed??""}:${ne.categoryId}`)):[],m=o.map(ne=>xi([ne.direction[0]+.35*ne.direction[1],.5*ne.direction[0]+.866*ne.direction[1],ne.direction[2]])),g=ih(d,l.areas,o.map(ne=>ne.count),m),v=o.map((ne,me)=>({...ne,area:g.areas[me],direction:Qd(g.centers[me])})),f=new Set,u=v.map((ne,me)=>{const ye=p[me].filter(Ye=>f.has(Ye.id)?!1:(f.add(Ye.id),!0)),H=g.owners.flatMap((Ye,Je)=>Ye===me?[Je]:[]),K=H.map(Ye=>d[Ye]),oe=H.map(Ye=>l.areas[Ye]),he=ye.map(Ye=>SS(Ye.richness)),ce=ih(K,oe,he,xS(K,ye.length)),Ae=ye.map(Ye=>t?a*yS*(.005+.995*El(Ye.richness)):0),Be=Math.max(1e-6,...K.map(Ye=>Tl(Ye,me,g)));return{sources:ye,heights:Ae,partition:ce,depth:Be}}),S=u.flatMap(ne=>ne.sources.map(me=>me.id)),b=new Map(S.map((ne,me)=>[ne,me])),_=e.blendBulges?eh(v.map((ne,me)=>({center:g.centers[me],area:ne.area,direction:h[me],stretch:1.2,lean:.18,height:s*.8*(1-Math.exp(-ne.count/15))})),.3):null,R=e.blendBulges?eh(u.flatMap((ne,me)=>ne.partition.centers.map((ye,H)=>({center:ye,area:ne.partition.areas[H],height:ne.heights[H],direction:h[me],stretch:1.2,lean:.12}))),.3):null;function A(ne){const me=ss(ne),ye=os(me,g);if(ye<0)return[0,0,-1,-1];const H=u[ye],K=Tl(me,ye,g),oe=_?_(me):s*.8*(1-Math.exp(-v[ye].count/15))*Math.pow(Math.sin(Math.min(1,K/H.depth)*Math.PI/2),1.4),he=os(me,H.partition);if(R)return[oe,R(me),ye,he<0?-1:b.get(H.sources[he].id)];if(he<0)return[oe,0,ye,-1];const ce=Math.min(K,Tl(me,he,H.partition)),Ae=Math.acos(Math.max(-1,Math.min(1,Jt(me,H.partition.centers[he])))),Be=MS(ce/Math.max(1e-9,ce+Ae));return[oe,H.heights[he]*Be,ye,b.get(H.sources[he].id)]}const w=c.points.flat(),P=[],T=[],M=[];for(const ne of c.points){const[me,ye,H,K]=A(ne);P.push(me,ye),T.push(H),M.push(K)}const D=c.faces.flat(),O=c.faces.map(([ne,me,ye])=>os(ss(xi([c.points[ne][0]+c.points[me][0]+c.points[ye][0],c.points[ne][1]+c.points[me][1]+c.points[ye][1],c.points[ne][2]+c.points[me][2]+c.points[ye][2]])),g)),z=[];u.forEach((ne,me)=>ne.sources.forEach((ye,H)=>{const K=ne.partition.centers[H];if(!K)return;const oe=Qd(K),he=w.length/3,[ce,Ae]=A(oe);w.push(...oe),P.push(ce,R?Ae:ne.heights[H]),T.push(me),M.push(b.get(ye.id)),z.push({vertex:he,sourceId:ye.id,region:me,area:ne.partition.areas[H]})}));const X=l.points.map(mS).flat(),ee=[],Y=[],ae=[],G=[],le=ne=>[X[ne*3],X[ne*3+1],X[ne*3+2]],J=new Set;for(const[ne,me,ye]of l.faces)for(const[H,K]of[[ne,me],[me,ye],[ye,ne]]){const oe=Jd(H,K);if(J.has(oe))continue;J.add(oe);const he=X.length/3;X.push(...Zd(le(H),le(K))),Y.push(H,he,he,K)}for(let ne=0;ne<X.length/3;ne++){const[me,ye,H,K]=A(le(ne));ee.push(me,ye),ae.push(H),G.push(K)}return{positions:w,elevations:P,indices:D,faceRegions:O,vertexRegions:T,vertexSources:M,sourceIds:S,tips:z,regions:v,wirePositions:X,wireElevations:ee,wireIndices:Y,wireRegions:ae,wireSources:G}}const ES=5,rh=13,ah=`
const float SOURCE_DOT_SIZE = ${ES.toFixed(1)};
const float SOURCE_HIGHLIGHT_SIZE = ${rh.toFixed(1)};
const float SOURCE_RING_STROKE = 1.0;
`,wl=`
attribute vec2 elevation;
attribute float region;
uniform float uSelectedRegion;
varying float vSelected;
uniform float uDeformation;
uniform float uBulge;
uniform float uLift;
#ifdef SOURCE_DOTS
${ah}
uniform float uPixelRatio;
uniform sampler2D uSurfaceDepth;
uniform vec2 uDepthResolution;
attribute float sourceHighlight;
varying float vSourceHighlight;
varying float vSourceVisible;
float anchorDepth(vec2 uv) {
  vec2 pixel = uv * uDepthResolution - 0.5;
  vec2 texel = 1.0 / uDepthResolution;
  vec2 corner = (floor(pixel) + 0.5) * texel;
  vec4 depths = vec4(texture2D(uSurfaceDepth, corner).r,
    texture2D(uSurfaceDepth, corner + vec2(texel.x, 0.0)).r,
    texture2D(uSurfaceDepth, corner + vec2(0.0, texel.y)).r,
    texture2D(uSurfaceDepth, corner + texel).r);
  // Interpolate to the exact anchor. At the silhouette, use the nearest
  // surface depth instead of letting empty background reveal a rear source.
  float nearest = min(min(depths.x, depths.y), min(depths.z, depths.w));
  if (max(max(depths.x, depths.y), max(depths.z, depths.w)) == 1.0) return nearest;
  vec2 blend = fract(pixel);
  return mix(mix(depths.x, depths.y, blend.x), mix(depths.z, depths.w, blend.x), blend.y);
}
#endif
void main() {
  vSelected = step(0.0, uSelectedRegion) * (1.0 - step(0.5, abs(region - uSelectedRegion)));
  float radius = 1.0 + uDeformation * (elevation.x * uBulge + elevation.y) + uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(normalize(position) * radius, 1.0);
#ifdef SOURCE_DOTS
  gl_PointSize = mix(SOURCE_DOT_SIZE, SOURCE_HIGHLIGHT_SIZE, sourceHighlight) * uPixelRatio;
  vSourceHighlight = sourceHighlight;
  vSourceVisible = 1.0;
  if (sourceHighlight > 0.5) {
    vec3 anchor = gl_Position.xyz / gl_Position.w * 0.5 + 0.5;
    float surfaceDepth = anchorDepth(anchor.xy);
    vSourceVisible = step(anchor.z, surfaceDepth + 0.000001) * step(0.0, anchor.z) * step(anchor.z, 1.0);
    // Test the source anchor against the surface, then keep its entire ring
    // above the local slope. Rear sources still fail the anchor depth test.
    gl_Position.z = -gl_Position.w;
  }
#endif
}`,nh=`
uniform float uSelection;
uniform vec3 uFill;
uniform vec3 uMuted;
uniform vec3 uStart;
uniform vec3 uEnd;
uniform vec2 uResolution;
varying float vSelected;
vec3 gradient() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  return mix(uStart, uEnd, clamp((uv.x + 1.0 - uv.y) * 0.5, 0.0, 1.0));
}`;function TS(i){const e=new pa,t={uDeformation:{value:1},uBulge:{value:1},uLift:{value:0},uPixelRatio:{value:1},uDark:{value:0},uSelectedRegion:{value:-1},uSelection:{value:0},uMuted:{value:new at("#bdbdbd")},uStart:{value:new at},uEnd:{value:new at},uResolution:{value:new ft(1,1)},uFill:{value:new at("#ffffff")}},r=new pi;r.setAttribute("position",new Nt(i.positions,3)),r.setAttribute("elevation",new Nt(i.elevations,2)),r.setAttribute("region",new Nt(i.vertexRegions,1)),r.setIndex(i.indices);const a=Array.from({length:i.positions.length/3},(O,z)=>{const X=new B().fromArray(i.positions,z*3);return[X,X.clone().multiplyScalar(1+i.elevations[z*2]+i.elevations[z*2+1])]}).flat(),n=new ia().setFromPoints(a);n.radius+=.015,r.boundingSphere=n.clone(),e.position.copy(n.center).negate();const s=new _i({uniforms:t,vertexShader:wl,fragmentShader:`uniform vec3 uFill;
      void main() {
        gl_FragColor = vec4(uFill, 1.0);
      }`,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),o=new di(r,s);e.add(o);const l=new nr(1,1);l.depthTexture=new Bo(1,1);const c=new No,d=new di(r,s);d.matrixAutoUpdate=!1,c.add(d);const p=new ft,h=new _i({uniforms:{...t,uLift:{value:.008}},vertexShader:wl,fragmentShader:`${nh}
      void main() {
        vec3 color = mix(gradient(), uMuted, uSelection * (1.0 - vSelected));
        gl_FragColor = vec4(color, 1.0);
      }`,depthWrite:!1}),m=new pi;m.setAttribute("position",new Nt(i.wirePositions,3)),m.setAttribute("elevation",new Nt(i.wireElevations,2)),m.setAttribute("region",new Nt(i.wireRegions,1)),m.setIndex(i.wireIndices),m.boundingSphere=r.boundingSphere.clone();const g=new nf(m,h);g.renderOrder=1,e.add(g);const v=new pi;v.setAttribute("position",new Nt(i.tips.flatMap(O=>i.positions.slice(O.vertex*3,O.vertex*3+3)),3)),v.setAttribute("elevation",new Nt(i.tips.flatMap(O=>i.elevations.slice(O.vertex*2,O.vertex*2+2)),2)),v.setAttribute("region",new Nt(i.tips.map(O=>O.region),1));const f=new Nt(i.tips.map(()=>0),1);v.setAttribute("sourceHighlight",f),v.boundingSphere=r.boundingSphere.clone();const u={...t,uLift:{value:.005},uSourceSelection:{value:0},uSurfaceDepth:{value:l.depthTexture},uDepthResolution:{value:p}},S=new _i({defines:{SOURCE_DOTS:1},uniforms:u,vertexShader:wl,fragmentShader:`${nh}
      ${ah}
      uniform float uDark;
      uniform float uPixelRatio;
      uniform float uSourceSelection;
      varying float vSourceHighlight;
      varying float vSourceVisible;
      void main() {
      if (vSourceVisible < 0.5) discard;
      float r = length(gl_PointCoord - vec2(0.5)); if (r > 0.5) discard;
      if (vSourceHighlight > 0.5) {
        // Point coordinates become CSS pixels, independent of display density.
        float distance = r * SOURCE_HIGHLIGHT_SIZE;
        float aa = 0.5 / uPixelRatio;
        float dotRadius = SOURCE_DOT_SIZE * 0.5;
        float ringHalfStroke = SOURCE_RING_STROKE * 0.5;
        float center = 1.0 - smoothstep(dotRadius - aa, dotRadius + aa, distance);
        float ring = 1.0 - smoothstep(ringHalfStroke - aa, ringHalfStroke + aa, abs(distance - 5.5));
        gl_FragColor = vec4(mix(uFill, vec3(uDark), max(center, ring)), 1.0);
        return;
      }
      float edge = smoothstep(0.30, 0.46, r) * uDark;
      vec3 color = mix(vec3(edge), uMuted, max(uSourceSelection, uSelection * (1.0 - vSelected)));
      gl_FragColor = vec4(color, 1.0);
    }`,depthTest:!0,depthWrite:!1}),b=new of(v,S);b.renderOrder=2,e.add(b);const _=new Map(i.tips.map((O,z)=>[O.sourceId,z]));let R=!1;function A(O){const z=_.get(O);if(z===void 0)return null;const X=v.getAttribute("elevation"),ee=1+t.uDeformation.value*(X.getX(z)*t.uBulge.value+X.getY(z))+u.uLift.value;return new B().fromBufferAttribute(v.getAttribute("position"),z).normalize().multiplyScalar(ee).add(e.position)}function w(O){const z=new Set(O??[]);u.uSourceSelection.value=O===null?0:1,i.tips.forEach((X,ee)=>f.setX(ee,z.has(X.sourceId)?1:0)),f.needsUpdate=!0,R=i.tips.some(X=>z.has(X.sourceId))}let P=-1,T=-1;function M(){if(P===t.uDeformation.value&&T===t.uBulge.value)return;P=t.uDeformation.value,T=t.uBulge.value;const O=r.getAttribute("position");for(let z=0;z<O.count;z++){const X=1+t.uDeformation.value*(i.elevations[z*2]*t.uBulge.value+i.elevations[z*2+1]);O.setXYZ(z,i.positions[z*3]*X,i.positions[z*3+1]*X,i.positions[z*3+2]*X)}O.needsUpdate=!0}function D(O,z,X){if(R){z.updateMatrixWorld(!0),d.matrix.copy(o.matrixWorld),O.getDrawingBufferSize(p),Math.max(p.x,p.y)<1024&&p.multiplyScalar(2),l.setSize(p.x,p.y);const ee=O.getRenderTarget();O.setRenderTarget(l);try{O.render(c,X)}finally{O.setRenderTarget(ee)}}O.render(z,X)}return{group:e,mesh:o,wireMesh:g,dots:b,uniforms:t,framingSphere:n,updateRaycast:M,highlightSources:w,getSourcePosition:A,render:D,dispose(){l.dispose(),r.dispose(),m.dispose(),v.dispose(),s.dispose(),h.dispose(),S.dispose()}}}function wS(i,e,t,r,a){const n=new Vo,s=i.tips.flatMap(o=>{const l=e.getSourcePosition(o.sourceId);if(!l)return[];e.group.parent&&l.applyMatrix4(e.group.parent.matrixWorld);const c=l.project(t);if(c.z<-1||c.z>1)return[];const d=Math.hypot((c.x-r.x)*a.width/2,(c.y-r.y)*a.height/2);return d<=rh/2?[{tip:o,screen:c,distance:d}]:[]}).sort((o,l)=>o.distance-l.distance||o.screen.z-l.screen.z);for(const{tip:o,screen:l}of s){n.setFromCamera(new ft(l.x,l.y),t);const c=n.intersectObject(e.mesh)[0];if(!c||l.z<=c.point.project(t).z+2e-6)return o}return null}const AS=["aria-label"],CS=Ll({__name:"KnowledgeSphereScene",props:Dl({hierarchyData:{},selectedCategory:{},previewCategory:{},showSourceDots:{type:Boolean},showSourceBulges:{type:Boolean},blendBulges:{type:Boolean},identitySeed:{},sourceBulgeStrength:{},categoryBulgeStrength:{},highlightedSourceIds:{},focusHighlightedSource:{type:Boolean},type:{},deformationAmount:{},size:{},isCollecting:{type:Boolean},cameraDistance:{},wobbleMagnitude:{},pulseMagnitude:{},autoRotationSpeed:{},dragSensitivity:{},friction:{},budgetMethods:{},gainMethods:{},segSpreadDeg:{},segActiveWeight:{},patSpreadDeg:{},patActiveWeight:{},deformationLerpSpeed:{},spreadLerpSpeed:{},wobbleSpeedFactor:{},pulseSpeed:{},interactive:{type:Boolean},targetFps:{},lowPowerMode:{type:Boolean},preserveDrawingBuffer:{type:Boolean},gradientStart:{},gradientEnd:{},exposeMethodPositions:{type:Boolean},labelPositioning:{}},md),emits:["node-click","node-hover","deformation-started","method-positions"],setup(i,{expose:e,emit:t}){const r=i,a=t,{t:n}=pd(),s=fS(),o=Fi(null),l=tn("colorMode",null),c=Fi(!1),d=Kt(()=>l?l.value==="dark":c.value),p=Kt(()=>bS(r.hierarchyData?.children?.map(Se=>Se.data)??[],{showSourceBulges:r.showSourceBulges,blendBulges:r.blendBulges,identitySeed:r.identitySeed,sourceBulgeStrength:r.sourceBulgeStrength,categoryBulgeStrength:r.categoryBulgeStrength}));let h=null,m=null;const g=new No,v=new pa,f=new hi(50,1,.1,100),u=new Vo;let S=0,b=0,_=!0,R=null,A=null,w=null,P=!1,T=!1,M=0,D=0,O=0,z=0,X=0,ee=null,Y=null,ae=null;const G=Fi(null);function le(){if(!h)return;h.uniforms.uFill.value.set(d.value?"#000000":"#ffffff"),h.uniforms.uDark.value=d.value?1:0;const Se=d.value?.24:.78;h.uniforms.uMuted.value.setRGB(Se,Se,Se),h.uniforms.uStart.value.set(r.gradientStart||ns.start),h.uniforms.uEnd.value.set(r.gradientEnd||ns.end)}function J(Se){const xe=Se.applyQuaternion(v.quaternion).normalize();ee=new Zr().setFromUnitVectors(xe,new B(0,0,1)).multiply(v.quaternion),s.value==="reduce"&&(v.quaternion.copy(ee),ee=null)}function ne(Se=!0){if(!h)return;const xe=r.previewCategory==="all"?null:r.previewCategory??r.selectedCategory??ae,qe=p.value.regions.findIndex(L=>L.categoryId===xe);if(h.uniforms.uSelectedRegion.value=qe,h.uniforms.uSelection.value=xe==null?0:1,!Se)return;Y=null,ee=null;const C=p.value.regions.find(L=>L.categoryId===(r.previewCategory??r.selectedCategory));C&&J(new B(...C.direction))}function me(){const Se=Y&&h?.getSourcePosition(Y);Se&&J(Se)}function ye(Se){if(!h)return;r.showSourceDots||(Se=null),h.highlightSources(G.value?[G.value]:Se);const xe=Y!==null,qe=r.focusHighlightedSource&&Se?.length===1?Se[0]:null;Y=qe&&h.getSourcePosition(qe)?qe:null,Y?me():xe&&(ee=null)}function H(){if(!o.value||!m||!h)return;const{width:Se,height:xe}=o.value.getBoundingClientRect();if(!Se||!xe)return;m.setSize(Se,xe,!1),f.aspect=Se/xe;const qe=Math.atan(Math.tan(f.fov*Math.PI/360)*Math.min(1,f.aspect));f.position.z=Math.max(r.cameraDistance,h.framingSphere.radius/Math.sin(qe)/.92),f.updateProjectionMatrix(),h.uniforms.uResolution.value.set(Se*m.getPixelRatio(),xe*m.getPixelRatio()),h.uniforms.uPixelRatio.value=m.getPixelRatio()}function K(){if(!m)return;Be();const Se=!h;h&&(v.remove(h.group),h.dispose()),h=TS(p.value),h.dots.visible=r.showSourceDots,v.add(h.group),h.uniforms.uDeformation.value=X,le(),H(),ne(Se),ye(r.highlightedSourceIds),p.value.tips.length&&a("deformation-started")}function oe(Se){if(S=requestAnimationFrame(oe),!m||!h||!_||Se-b<1e3/r.targetFps)return;const xe=Math.min(50,Se-b||16.7);b=Se;const qe=Math.max(0,Math.min(1,r.deformationAmount));X+=(qe-X)*(1-Math.pow(1-r.deformationLerpSpeed,xe/16.7)),h.uniforms.uDeformation.value=X;const C=!P&&!(r.highlightedSourceIds!==null&&!r.focusHighlightedSource);if(C&&Y&&me(),C&&ee?(v.quaternion.slerp(ee,s.value==="reduce"?1:1-Math.exp(-xe/110)),v.quaternion.angleTo(ee)<.001&&(v.quaternion.copy(ee),ee=null)):C&&r.previewCategory===null&&ae===null&&r.selectedCategory==null&&r.highlightedSourceIds===null&&s.value!=="reduce"&&(v.rotation.y+=r.autoRotationSpeed*xe/16.7),h.render(m,g,f),r.exposeMethodPositions&&o.value){const{width:L,height:W}=o.value.getBoundingClientRect(),re=h.group.matrixWorld;a("method-positions",p.value.regions.map(V=>{const y=new B(...V.direction).multiplyScalar(1.7);return y.applyMatrix4(re).project(f),{name:n(ja(V.categoryId)),x:(y.x+1)*L/2,y:(1-y.y)*W/2}}))}}function he(Se){if(!h||!o.value)return;const xe=o.value.getBoundingClientRect();if(!xe.width||!xe.height)return;h.updateRaycast(),g.updateMatrixWorld(!0),f.updateMatrixWorld(!0);const qe=new ft((Se.clientX-xe.left)/xe.width*2-1,-(Se.clientY-xe.top)/xe.height*2+1),C=r.showSourceDots?wS(p.value,h,f,qe,xe):null;if(C)return{region:p.value.regions[C.region],sourceId:C.sourceId};u.setFromCamera(qe,f);const L=u.intersectObject(h.mesh)[0];return L?.faceIndex==null?void 0:{region:p.value.regions[p.value.faceRegions[L.faceIndex]]}}function ce(Se){r.interactive&&(Be(),Y=null,ee=null,P=!0,T=!1,M=O=Se.clientX,D=z=Se.clientY,o.value?.setPointerCapture(Se.pointerId))}function Ae(Se){if(r.interactive){if(!P){if(Se.pointerType==="touch")return;const xe=he(Se),qe=xe?.region,C=qe?.categoryId??null,L=xe?.sourceId??null;(C!==ae||L!==G.value)&&(ae=C,G.value=L,ne(!1),h?.highlightSources(L?[L]:r.highlightedSourceIds),a("node-hover",qe?{type:"aspect",categoryId:qe.categoryId,label:n(ja(qe.categoryId)),sourceCount:qe.count,...L?{sourceId:L}:{}}:null));return}T||(T=Math.hypot(Se.clientX-M,Se.clientY-D)>5),v.rotation.y+=(Se.clientX-O)*r.dragSensitivity,v.rotation.x+=(Se.clientY-z)*r.dragSensitivity,O=Se.clientX,z=Se.clientY}}function Be(){ae===null&&G.value===null||(ae=null,G.value=null,ne(!1),h?.highlightSources(r.highlightedSourceIds),a("node-hover",null))}function Ye(Se){P=!1,o.value?.hasPointerCapture(Se.pointerId)&&o.value.releasePointerCapture(Se.pointerId)}function Je(Se){if(!r.interactive||T)return;Be();const xe=he(Se)?.region;xe&&a("node-click",{type:"aspect",categoryId:xe.categoryId,label:n(ja(xe.categoryId)),sourceCount:xe.count},Se)}function ct(Se=4096){if(!m||!h)return null;const xe=new Wn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});xe.setSize(Se,Se);const qe=f.aspect;f.aspect=1,f.updateProjectionMatrix(),h.uniforms.uResolution.value.set(Se,Se),h.render(xe,g,f);const C=xe.domElement.toDataURL("image/png");return xe.dispose(),f.aspect=qe,f.updateProjectionMatrix(),H(),C}e({exportPng:ct});const I=()=>{c.value=w?.matches??!1};return Yt(p,K),Yt(()=>r.selectedCategory,()=>{Be(),ne()}),Yt(()=>r.previewCategory,()=>ne()),Yt([()=>r.highlightedSourceIds,()=>r.focusHighlightedSource],()=>ye(r.highlightedSourceIds),{deep:!0}),Yt(()=>r.showSourceDots,()=>{Be(),h&&(h.dots.visible=r.showSourceDots),ye(r.highlightedSourceIds)}),Yt(()=>r.interactive,Be),Yt([d,()=>r.gradientStart,()=>r.gradientEnd],le),Yt(()=>r.cameraDistance,H),rn(()=>{o.value&&(w=window.matchMedia("(prefers-color-scheme: dark)"),I(),w.addEventListener("change",I),m=new Wn({antialias:!0,alpha:!0,preserveDrawingBuffer:r.preserveDrawingBuffer}),m.setPixelRatio(Math.min(window.devicePixelRatio,r.lowPowerMode?1:2)),m.domElement.style.cssText="width:100%;height:100%;display:block",o.value.prepend(m.domElement),g.add(v),v.rotation.set(.18,-.45,-.12),K(),R=new ResizeObserver(H),R.observe(o.value),A=new IntersectionObserver(Se=>{_=Se[0]?.isIntersecting??!0}),A.observe(o.value),S=requestAnimationFrame(oe))}),ps(()=>{Be(),cancelAnimationFrame(S),R?.disconnect(),A?.disconnect(),w?.removeEventListener("change",I),h?.dispose(),m?.dispose(),m?.domElement.remove()}),(Se,xe)=>(fs(),hs("div",{ref_key:"container",ref:o,class:Nl(["relative h-full w-full overflow-hidden",{"touch-pan-y":i.interactive,"cursor-pointer":i.interactive&&G.value!==null,"cursor-grab":i.interactive&&G.value===null}]),"aria-label":an(n)("knowledgeCategories.description"),role:"img",onPointerdown:ce,onPointermove:Ae,onPointerup:Ye,onPointerleave:Be,onPointercancel:xe[0]||(xe[0]=qe=>{Ye(qe),Be()}),onClick:Je},null,42,AS))}});export{CS as KnowledgeSphereScene,tS as SphereGraphScene};

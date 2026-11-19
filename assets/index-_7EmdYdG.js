(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="169",Zi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xd=0,Hl=1,qd=2,Sh=1,Zd=2,En=3,Xn=0,Lt=1,Tn=2,Vn=0,$i=1,wo=2,Bl=3,kl=4,$d=5,ai=100,Yd=101,jd=102,Kd=103,Jd=104,Qd=200,eu=201,tu=202,nu=203,$a=204,Ya=205,iu=206,su=207,ou=208,au=209,ru=210,lu=211,cu=212,hu=213,du=214,ja=0,Ka=1,Ja=2,Qi=3,Qa=4,er=5,tr=6,nr=7,el=0,uu=1,fu=2,Gn=0,pu=1,mu=2,gu=3,_u=4,vu=5,xu=6,yu=7,Mh=300,es=301,ts=302,ir=303,sr=304,Bo=306,or=1e3,ci=1001,ar=1002,Bt=1003,Su=1004,ks=1005,on=1006,ia=1007,hi=1008,wn=1009,bh=1010,Eh=1011,Ps=1012,tl=1013,gi=1014,mn=1015,Ls=1016,nl=1017,il=1018,ns=1020,Th=35902,Ah=1021,Ch=1022,rn=1023,wh=1024,Rh=1025,Yi=1026,is=1027,sl=1028,ol=1029,Ph=1030,al=1031,rl=1033,go=33776,_o=33777,vo=33778,xo=33779,rr=35840,lr=35841,cr=35842,hr=35843,dr=36196,ur=37492,fr=37496,pr=37808,mr=37809,gr=37810,_r=37811,vr=37812,xr=37813,yr=37814,Sr=37815,Mr=37816,br=37817,Er=37818,Tr=37819,Ar=37820,Cr=37821,yo=36492,wr=36494,Rr=36495,Oh=36283,Pr=36284,Or=36285,Lr=36286,Mu=3200,bu=3201,ll=0,Eu=1,Bn="",un="srgb",Yn="srgb-linear",cl="display-p3",ko="display-p3-linear",Ro="linear",rt="srgb",Po="rec709",Oo="p3",Ti=7680,zl=519,Tu=512,Au=513,Cu=514,Lh=515,wu=516,Ru=517,Pu=518,Ou=519,Vl=35044,Gl="300 es",An=2e3,Lo=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,Ir=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Lu(n,e){return(n%e+e)%e}function sa(n,e,t){return(1-t)*n+t*e}function ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Iu={DEG2RAD:So};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*s+e.x,this.y=o*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,o,a,r,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,r,l,c)}set(e,t,i,s,o,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=r,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],m=i[5],g=i[8],v=s[0],f=s[3],d=s[6],x=s[1],y=s[4],S=s[7],E=s[2],M=s[5],A=s[8];return o[0]=a*v+r*x+l*E,o[3]=a*f+r*y+l*M,o[6]=a*d+r*S+l*A,o[1]=c*v+h*x+p*E,o[4]=c*f+h*y+p*M,o[7]=c*d+h*S+p*A,o[2]=u*v+m*x+g*E,o[5]=u*f+m*y+g*M,o[8]=u*d+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-i*o*h+i*r*l+s*o*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],p=h*a-r*c,u=r*l-h*o,m=c*o-a*l,g=t*p+i*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(s*c-h*i)*v,e[2]=(r*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*o-r*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*r)+a+e,-s*c,s*l,-s*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new He;function Ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Du(){const n=Io("canvas");return n.style.display="block",n}const Wl={};function Mo(n){n in Wl||(Wl[n]=!0,console.warn(n))}function Nu(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function Uu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xl=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[Yn]:{transfer:Ro,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:rt,primaries:Po,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ko]:{transfer:Ro,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ql),fromReference:n=>n.applyMatrix3(Xl)},[cl]:{transfer:rt,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ql),fromReference:n=>n.applyMatrix3(Xl).convertLinearToSRGB()}},Hu=new Set([Yn,ko]),Qe={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Hu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=gs[e].toReference,s=gs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return gs[n].primaries},getTransfer:function(n){return n===Bn?Ro:gs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(gs[e].luminanceCoefficients)}};function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class Bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Io("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=ji(o[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ku=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(ra(s[a].image)):o.push(ra(s[a]))}else o=ra(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class It extends Si{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=ci,s=ci,o=on,a=hi,r=rn,l=wn,c=It.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Is(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Mh;It.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],v=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,E=(d+1)/2,M=(h+u)/4,A=(p+v)/4,R=(g+f)/4;return y>S&&y>E?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=M/i,o=A/i):S>E?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=M/s,o=R/s):E<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(E),i=A/o,s=R/o),this.set(i,s,o,t),this}let x=Math.sqrt((f-g)*(f-g)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(p-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new It(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Vu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nh extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,a,r){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3];const u=o[a+0],m=o[a+1],g=o[a+2],v=o[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(r===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==u||c!==m||h!==g){let f=1-r;const d=l*u+c*m+h*g+p*v,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const E=Math.sqrt(y),M=Math.atan2(E,d*x);f=Math.sin(f*M)/E,r=Math.sin(r*M)/E}const S=r*x;if(l=l*f+u*S,c=c*f+m*S,h=h*f+g*S,p=p*f+v*S,f===1-r){const E=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=E,c*=E,h*=E,p*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,o,a){const r=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=o[a],u=o[a+1],m=o[a+2],g=o[a+3];return e[t]=r*g+h*p+l*m-c*u,e[t+1]=l*g+h*u+c*p-r*m,e[t+2]=c*g+h*m+r*u-l*p,e[t+3]=h*g-r*p-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(s/2),p=r(o/2),u=l(i/2),m=l(s/2),g=l(o/2);switch(a){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+r+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-s)*m}else if(i>r&&i>p){const m=2*Math.sqrt(1+i-r-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(o+c)/m}else if(r>p){const m=2*Math.sqrt(1+r-i-p);this._w=(o-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-r);this._w=(a-s)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*r+s*c-o*l,this._y=s*h+a*l+o*r-i*c,this._z=o*h+a*c+i*l-s*r,this._w=a*h-i*r-s*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,a=this._w;let r=a*e._w+i*e._x+s*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),p=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*p+this._w*u,this._x=i*p+this._x*u,this._y=s*p+this._y*u,this._z=o*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*s-r*i),h=2*(r*t-o*s),p=2*(o*i-a*t);return this.x=t+l*c+a*p-r*h,this.y=i+l*h+r*c-o*p,this.z=s+l*p+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,a=t.x,r=t.y,l=t.z;return this.x=s*l-o*r,this.y=o*a-i*l,this.z=i*r-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new U,Zl=new qn;class Mi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(o,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Vs.subVectors(this.max,_s),Ci.subVectors(e.a,_s),wi.subVectors(e.b,_s),Ri.subVectors(e.c,_s),Ln.subVectors(wi,Ci),In.subVectors(Ri,wi),Kn.subVectors(Ci,Ri);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!ca(t,Ci,wi,Ri,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Ci,wi,Ri,Vs))?!1:(Gs.crossVectors(Ln,In),t=[Gs.x,Gs.y,Gs.z],ca(t,Ci,wi,Ri,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,zs=new Mi,Ci=new U,wi=new U,Ri=new U,Ln=new U,In=new U,Kn=new U,_s=new U,Vs=new U,Gs=new U,Jn=new U;function ca(n,e,t,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){Jn.fromArray(n,o);const r=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=i.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Wu=new Mi,vs=new U,ha=new U;class hs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wu.setFromPoints(e).getCenter(i);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(ha)),this.expandByPoint(vs.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new U,da=new U,Ws=new U,Dn=new U,ua=new U,Xs=new U,fa=new U;class zo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(da);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),r=Dn.dot(this.direction),l=-Dn.dot(Ws),c=Dn.lengthSq(),h=Math.abs(1-a*a);let p,u,m,g;if(h>0)if(p=a*l-r,u=a*r-l,g=o*h,p>=0)if(u>=-g)if(u<=g){const v=1/h;p*=v,u*=v,m=p*(p+a*u+2*r)+u*(a*p+u+2*l)+c}else u=o,p=Math.max(0,-(a*u+r)),m=-p*p+u*(u+2*l)+c;else u=-o,p=Math.max(0,-(a*u+r)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*o+r)),u=p>0?-o:Math.min(Math.max(-o,-l),o),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-o,-l),o),m=u*(u+2*l)+c):(p=Math.max(0,-(a*o+r)),u=p>0?o:Math.min(Math.max(-o,-l),o),m=-p*p+u*(u+2*l)+c);else u=a>0?-o:o,p=Math.max(0,-(a*u+r)),m=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(da).addScaledVector(Ws,u),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),s=yn.dot(yn)-i*i,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(o=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(o=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),p>=0?(r=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(r=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||r>s)||((r>i||i!==i)&&(i=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,s,o){ua.subVectors(t,e),Xs.subVectors(i,e),fa.crossVectors(ua,Xs);let a=this.direction.dot(fa),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=r*this.direction.dot(Xs.crossVectors(Dn,Xs));if(l<0)return null;const c=r*this.direction.dot(ua.cross(Dn));if(c<0||l+c>a)return null;const h=-r*Dn.dot(fa);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,o,a,r,l,c,h,p,u,m,g,v,f){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,a,r,l,c,h,p,u,m,g,v,f)}set(e,t,i,s,o,a,r,l,c,h,p,u,m,g,v,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=o,d[5]=a,d[9]=r,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),o=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const u=a*h,m=a*p,g=r*h,v=r*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=u-v*c,t[9]=-r*l,t[2]=v-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*p,g=c*h,v=c*p;t[0]=u+v*r,t[4]=g*r-m,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-r,t[2]=m*r-g,t[6]=v+u*r,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*p,g=c*h,v=c*p;t[0]=u-v*r,t[4]=-a*p,t[8]=g+m*r,t[1]=m+g*r,t[5]=a*h,t[9]=v-u*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*p,g=r*h,v=r*p;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+v,t[1]=l*p,t[5]=v*c+u,t[9]=m*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-u*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=m*p+g,t[10]=u-v*p}else if(e.order==="XZY"){const u=a*l,m=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+v,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=r*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,qu)}lookAt(e,t,i){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Nn.crossVectors(i,Vt),Nn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Nn.crossVectors(i,Vt)),Nn.normalize(),qs.crossVectors(Vt,Nn),s[0]=Nn.x,s[4]=qs.x,s[8]=Vt.x,s[1]=Nn.y,s[5]=qs.y,s[9]=Vt.y,s[2]=Nn.z,s[6]=qs.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],m=i[13],g=i[2],v=i[6],f=i[10],d=i[14],x=i[3],y=i[7],S=i[11],E=i[15],M=s[0],A=s[4],R=s[8],P=s[12],_=s[1],b=s[5],I=s[9],O=s[13],D=s[2],G=s[6],F=s[10],X=s[14],V=s[3],ie=s[7],re=s[11],se=s[15];return o[0]=a*M+r*_+l*D+c*V,o[4]=a*A+r*b+l*G+c*ie,o[8]=a*R+r*I+l*F+c*re,o[12]=a*P+r*O+l*X+c*se,o[1]=h*M+p*_+u*D+m*V,o[5]=h*A+p*b+u*G+m*ie,o[9]=h*R+p*I+u*F+m*re,o[13]=h*P+p*O+u*X+m*se,o[2]=g*M+v*_+f*D+d*V,o[6]=g*A+v*b+f*G+d*ie,o[10]=g*R+v*I+f*F+d*re,o[14]=g*P+v*O+f*X+d*se,o[3]=x*M+y*_+S*D+E*V,o[7]=x*A+y*b+S*G+E*ie,o[11]=x*R+y*I+S*F+E*re,o[15]=x*P+y*O+S*X+E*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],m=e[14],g=e[3],v=e[7],f=e[11],d=e[15];return g*(+o*l*p-s*c*p-o*r*u+i*c*u+s*r*m-i*l*m)+v*(+t*l*m-t*c*u+o*a*u-s*a*m+s*c*h-o*l*h)+f*(+t*c*p-t*r*m-o*a*p+i*a*m+o*r*h-i*c*h)+d*(-s*r*h-t*l*p+t*r*u+s*a*p-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],m=e[11],g=e[12],v=e[13],f=e[14],d=e[15],x=p*f*c-v*u*c+v*l*m-r*f*m-p*l*d+r*u*d,y=g*u*c-h*f*c-g*l*m+a*f*m+h*l*d-a*u*d,S=h*v*c-g*p*c+g*r*m-a*v*m-h*r*d+a*p*d,E=g*p*l-h*v*l-g*r*u+a*v*u+h*r*f-a*p*f,M=t*x+i*y+s*S+o*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=x*A,e[1]=(v*u*o-p*f*o-v*s*m+i*f*m+p*s*d-i*u*d)*A,e[2]=(r*f*o-v*l*o+v*s*c-i*f*c-r*s*d+i*l*d)*A,e[3]=(p*l*o-r*u*o-p*s*c+i*u*c+r*s*m-i*l*m)*A,e[4]=y*A,e[5]=(h*f*o-g*u*o+g*s*m-t*f*m-h*s*d+t*u*d)*A,e[6]=(g*l*o-a*f*o-g*s*c+t*f*c+a*s*d-t*l*d)*A,e[7]=(a*u*o-h*l*o+h*s*c-t*u*c-a*s*m+t*l*m)*A,e[8]=S*A,e[9]=(g*p*o-h*v*o-g*i*m+t*v*m+h*i*d-t*p*d)*A,e[10]=(a*v*o-g*r*o+g*i*c-t*v*c-a*i*d+t*r*d)*A,e[11]=(h*r*o-a*p*o-h*i*c+t*p*c+a*i*m-t*r*m)*A,e[12]=E*A,e[13]=(h*v*s-g*p*s+g*i*u-t*v*u-h*i*f+t*p*f)*A,e[14]=(g*r*s-a*v*s-g*i*l+t*v*l+a*i*f-t*r*f)*A,e[15]=(a*p*s-h*r*s+h*i*l-t*p*l-a*i*u+t*r*u)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,a=e.x,r=e.y,l=e.z,c=o*a,h=o*r;return this.set(c*a+i,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+i,h*l-s*a,0,c*l-s*r,h*l+s*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,a){return this.set(1,i,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,a=t._y,r=t._z,l=t._w,c=o+o,h=a+a,p=r+r,u=o*c,m=o*h,g=o*p,v=a*h,f=a*p,d=r*p,x=l*c,y=l*h,S=l*p,E=i.x,M=i.y,A=i.z;return s[0]=(1-(v+d))*E,s[1]=(m+S)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(m-S)*M,s[5]=(1-(u+d))*M,s[6]=(f+x)*M,s[7]=0,s[8]=(g+y)*A,s[9]=(f-x)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),r=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);const c=1/o,h=1/a,p=1/r;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=p,tn.elements[9]*=p,tn.elements[10]*=p,t.setFromRotationMatrix(tn),i.x=o,i.y=a,i.z=r,this}makePerspective(e,t,i,s,o,a,r=An){const l=this.elements,c=2*o/(t-e),h=2*o/(i-s),p=(t+e)/(t-e),u=(i+s)/(i-s);let m,g;if(r===An)m=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Lo)m=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,o,a,r=An){const l=this.elements,c=1/(t-e),h=1/(i-s),p=1/(a-o),u=(t+e)*c,m=(i+s)*h;let g,v;if(r===An)g=(a+o)*p,v=-2*p;else if(r===Lo)g=o*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new U,tn=new je,Xu=new U(0,0,0),qu=new U(1,1,1),Nn=new U,qs=new U,Vt=new U,$l=new je,Yl=new qn;class hn{constructor(e=0,t=0,i=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],a=s[4],r=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zu=0;const jl=new U,Oi=new qn,Sn=new je,Zs=new U,xs=new U,$u=new U,Yu=new qn,Kl=new U(1,0,0),Jl=new U(0,1,0),Ql=new U(0,0,1),ec={type:"added"},ju={type:"removed"},Li={type:"childadded",child:null},pa={type:"childremoved",child:null};class Et extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new U,t=new hn,i=new qn,s=new U(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new He}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zs.copy(e):Zs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(xs,Zs,this.up):Sn.lookAt(Zs,xs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ju),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];o(e.shapes,p)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));s.material=r}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Et.DEFAULT_UP=new U(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new U,Mn=new U,ma=new U,bn=new U,Ii=new U,Di=new U,tc=new U,ga=new U,_a=new U,va=new U,xa=new st,ya=new st,Sa=new st;class an{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),nn.subVectors(e,t),s.cross(nn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){nn.subVectors(s,t),Mn.subVectors(i,t),ma.subVectors(e,t);const a=nn.dot(nn),r=nn.dot(Mn),l=nn.dot(ma),c=Mn.dot(Mn),h=Mn.dot(ma),p=a*c-r*r;if(p===0)return o.set(0,0,0),null;const u=1/p,m=(c*l-r*h)*u,g=(a*h-r*l)*u;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,s,o,a,r,l){return this.getBarycoord(e,t,i,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(r,bn.z),l)}static getInterpolatedAttribute(e,t,i,s,o,a){return xa.setScalar(0),ya.setScalar(0),Sa.setScalar(0),xa.fromBufferAttribute(e,t),ya.fromBufferAttribute(e,i),Sa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xa,o.x),a.addScaledVector(ya,o.y),a.addScaledVector(Sa,o.z),a}static isFrontFacing(e,t,i,s){return nn.subVectors(i,t),Mn.subVectors(e,t),nn.cross(Mn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return an.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let a,r;Ii.subVectors(s,i),Di.subVectors(o,i),ga.subVectors(e,i);const l=Ii.dot(ga),c=Di.dot(ga);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);const h=Ii.dot(_a),p=Di.dot(_a);if(h>=0&&p<=h)return t.copy(s);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ii,a);va.subVectors(e,o);const m=Ii.dot(va),g=Di.dot(va);if(g>=0&&m<=g)return t.copy(o);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(Di,r);const f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return tc.subVectors(o,s),r=(p-h)/(p-h+(m-g)),t.copy(s).addScaledVector(tc,r);const d=1/(f+v+u);return a=v*d,r=u*d,t.copy(i).addScaledVector(Ii,a).addScaledVector(Di,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Lu(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Ma(a,o,e+1/3),this.g=Ma(a,o,e),this.b=Ma(a,o,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Uh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Qe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Pt(Ct.r*255,0,255))*65536+Math.round(Pt(Ct.g*255,0,255))*256+Math.round(Pt(Ct.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,s=Ct.g,o=Ct.b,a=Math.max(i,s,o),r=Math.min(i,s,o);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const p=a-r;switch(c=h<=.5?p/(a+r):p/(2-a-r),a){case i:l=(s-o)/p+(s<o?6:0);break;case s:l=(o-i)/p+2;break;case o:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=un){Qe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,s=Ct.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL($s);const i=sa(Un.h,$s.h,t),s=sa(Un.s,$s.s,t),o=sa(Un.l,$s.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ke;ke.NAMES=Uh;let Ku=0;class bi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=$i,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ya,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$a&&(i.blendSrc=this.blendSrc),this.blendDst!==Ya&&(i.blendDst=this.blendDst),this.blendEquation!==ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Os extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new U,Ys=new Oe;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}}class Fh extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hh extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ju=0;const $t=new je,ba=new Et,Ni=new U,Gt=new Mi,ys=new Mi,Mt=new U;class Jt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?Hh:Fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new He().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Gt.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const r=t[o];ys.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(Gt.min,ys.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,ys.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(ys.min),Gt.expandByPoint(ys.max))}Gt.getCenter(i);let s=0;for(let o=0,a=e.count;o<a;o++)Mt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let o=0,a=t.length;o<a;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Mt.fromBufferAttribute(r,c),l&&(Ni.fromBufferAttribute(e,c),Mt.add(Ni)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<i.count;R++)r[R]=new U,l[R]=new U;const c=new U,h=new U,p=new U,u=new Oe,m=new Oe,g=new Oe,v=new U,f=new U;function d(R,P,_){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,P),p.fromBufferAttribute(i,_),u.fromBufferAttribute(o,R),m.fromBufferAttribute(o,P),g.fromBufferAttribute(o,_),h.sub(c),p.sub(c),m.sub(u),g.sub(u);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(b),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(b),r[R].add(v),r[P].add(v),r[_].add(v),l[R].add(f),l[P].add(f),l[_].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,P=x.length;R<P;++R){const _=x[R],b=_.start,I=_.count;for(let O=b,D=b+I;O<D;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new U,S=new U,E=new U,M=new U;function A(R){E.fromBufferAttribute(s,R),M.copy(E);const P=r[R];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),S.crossVectors(M,P);const b=S.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,b)}for(let R=0,P=x.length;R<P;++R){const _=x[R],b=_.start,I=_.count;for(let O=b,D=b+I;O<D;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const s=new U,o=new U,a=new U,r=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,o),p.subVectors(s,o),h.cross(p),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,o),p.subVectors(s,o),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,p=r.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){r.isInterleavedBufferAttribute?m=l[v]*r.data.stride+r.offset:m=l[v]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new Kt(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=e(l,i);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let h=0,p=c.length;h<p;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],p=o[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new je,Qn=new zo,js=new hs,ic=new U,Ks=new U,Js=new U,Qs=new U,Ea=new U,eo=new U,sc=new U,to=new U;class $e extends Et{constructor(e=new Jt,t=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(o&&r){eo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=r[l],p=o[l];h!==0&&(Ea.fromBufferAttribute(p,e),a?eo.addScaledVector(Ea,h):eo.addScaledVector(Ea.sub(t),h))}t.add(eo)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(o),Qn.copy(e.ray).recast(e.near),!(js.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(js,ic)===null||Qn.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(o).invert(),Qn.copy(e.ray).applyMatrix4(nc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,i){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,p=o.attributes.normal,u=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],d=a[f.materialIndex],x=Math.max(f.start,m.start),y=Math.min(r.count,Math.min(f.start+f.count,m.start+m.count));for(let S=x,E=y;S<E;S+=3){const M=r.getX(S),A=r.getX(S+1),R=r.getX(S+2);s=no(this,d,e,i,c,h,p,M,A,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(r.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const x=r.getX(f),y=r.getX(f+1),S=r.getX(f+2);s=no(this,a,e,i,c,h,p,x,y,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const f=u[g],d=a[f.materialIndex],x=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=x,E=y;S<E;S+=3){const M=S,A=S+1,R=S+2;s=no(this,d,e,i,c,h,p,M,A,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const x=f,y=f+1,S=f+2;s=no(this,a,e,i,c,h,p,x,y,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Qu(n,e,t,i,s,o,a,r){let l;if(e.side===Lt?l=i.intersectTriangle(a,o,s,!0,r):l=i.intersectTriangle(s,o,a,e.side===Xn,r),l===null)return null;to.copy(r),to.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(to);return c<t.near||c>t.far?null:{distance:c,point:to.clone(),object:n}}function no(n,e,t,i,s,o,a,r,l,c){n.getVertexPosition(r,Ks),n.getVertexPosition(l,Js),n.getVertexPosition(c,Qs);const h=Qu(n,e,t,i,Ks,Js,Qs,sc);if(h){const p=new U;an.getBarycoord(sc,Ks,Js,Qs,p),s&&(h.uv=an.getInterpolatedAttribute(s,r,l,c,p,new Oe)),o&&(h.uv1=an.getInterpolatedAttribute(o,r,l,c,p,new Oe)),a&&(h.normal=an.getInterpolatedAttribute(a,r,l,c,p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new U,materialIndex:0};an.getNormal(Ks,Js,Qs,u.normal),h.face=u,h.barycoord=p}return h}class ds extends Jt{constructor(e=1,t=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,o,4),g("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(p,2));function g(v,f,d,x,y,S,E,M,A,R,P){const _=S/A,b=E/R,I=S/2,O=E/2,D=M/2,G=A+1,F=R+1;let X=0,V=0;const ie=new U;for(let re=0;re<F;re++){const se=re*b-O;for(let Me=0;Me<G;Me++){const De=Me*_-I;ie[v]=De*x,ie[f]=se*y,ie[d]=D,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[f]=0,ie[d]=M>0?1:-1,h.push(ie.x,ie.y,ie.z),p.push(Me/A),p.push(1-re/R),X+=1}}for(let re=0;re<R;re++)for(let se=0;se<A;se++){const Me=u+se+G*re,De=u+se+G*(re+1),K=u+(se+1)+G*(re+1),k=u+(se+1)+G*re;l.push(Me,De,k),l.push(De,K,k),V+=6}r.addGroup(m,V,P),m+=V,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function ef(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const tf={clone:ss,merge:Rt};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kh extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new U,oc=new Oe,ac=new Oe;class Wt extends kh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,oc,ac),t.subVectors(ac,oc)}setViewOffset(e,t,i,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Fi=1;class of extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const r=new Wt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const l=new Wt(Ui,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,a,r,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,r),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zh extends It{constructor(e,t,i,s,o,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,i,s,o,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class af extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new zh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),o=new Rn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Vn});o.uniforms.tEquirect.value=t;const a=new $e(s,o),r=t.minFilter;return t.minFilter===hi&&(t.minFilter=on),new of(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(o)}}const Ta=new U,rf=new U,lf=new He;class Hn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ta.subVectors(i,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lf.getNormalMatrix(e),s=this.coplanarPoint(Ta).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new hs,io=new U;class dl{constructor(e=new Hn,t=new Hn,i=new Hn,s=new Hn,o=new Hn,a=new Hn){this.planes=[e,t,i,s,o,a]}set(e,t,i,s,o,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,s=e.elements,o=s[0],a=s[1],r=s[2],l=s[3],c=s[4],h=s[5],p=s[6],u=s[7],m=s[8],g=s[9],v=s[10],f=s[11],d=s[12],x=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-o,u-c,f-m,S-d).normalize(),i[1].setComponents(l+o,u+c,f+m,S+d).normalize(),i[2].setComponents(l+a,u+h,f+g,S+x).normalize(),i[3].setComponents(l-a,u-h,f-g,S-x).normalize(),i[4].setComponents(l-r,u-p,f-v,S-y).normalize(),t===An)i[5].setComponents(l+r,u+p,f+v,S+y).normalize();else if(t===Lo)i[5].setComponents(r,p,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let n=null,e=!1,t=null,i=null;function s(o,a){t(o,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function cf(n){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),r.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:p}}function i(r,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,r),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],v=p[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,p[u]=v)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const v=p[m];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:s,remove:o,update:a}}class Vo extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,a=t/2,r=Math.floor(i),l=Math.floor(s),c=r+1,h=l+1,p=e/r,u=t/l,m=[],g=[],v=[],f=[];for(let d=0;d<h;d++){const x=d*u-a;for(let y=0;y<c;y++){const S=y*p-o;g.push(S,-x,0),v.push(0,0,1),f.push(y/r),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<r;x++){const y=x+c*d,S=x+c*(d+1),E=x+1+c*(d+1),M=x+1+c*d;m.push(y,S,M),m.push(S,E,M)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:hf,alphahash_pars_fragment:df,alphamap_fragment:uf,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:yf,beginnormal_vertex:Sf,bsdfs:Mf,iridescence_fragment:bf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Pf,color_pars_vertex:Of,color_vertex:Lf,common:If,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Hf,emissivemap_pars_fragment:Bf,colorspace_fragment:kf,colorspace_pars_fragment:zf,envmap_fragment:Vf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:qf,fog_vertex:Zf,fog_pars_vertex:$f,fog_fragment:Yf,fog_pars_fragment:jf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:rp,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:dp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Mp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Cp,normal_fragment_maps:wp,normal_pars_fragment:Rp,normal_pars_vertex:Pp,normal_vertex:Op,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Hp,premultiplied_alpha_fragment:Bp,project_vertex:kp,dithering_fragment:zp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Zp,shadowmask_pars_fragment:$p,skinbase_vertex:Yp,skinning_pars_vertex:jp,skinning_vertex:Kp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:rm,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:dm,backgroundCube_frag:um,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:ym,linedashed_vert:Sm,linedashed_frag:Mm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:wm,meshnormal_vert:Rm,meshnormal_frag:Pm,meshphong_vert:Om,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Hm,shadow_vert:Bm,shadow_frag:km,sprite_vert:zm,sprite_frag:Vm},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},fn={basic:{uniforms:Rt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Rt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Rt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Rt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Rt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Rt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Rt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Rt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Rt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Rt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Rt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Rt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Rt([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};fn.physical={uniforms:Rt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const so={r:0,b:0,g:0},ti=new hn,Gm=new je;function Wm(n,e,t,i,s,o,a){const r=new ke(0);let l=o===!0?0:1,c,h,p=null,u=0,m=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const S=g(x);S===null?d(r,l):S&&S.isColor&&(d(S,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(x,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===Bo)?(h===void 0&&(h=new $e(new ds(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ss(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(y.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(ti)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(p!==S||u!==S.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=S,u=S.version,m=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $e(new Vo(2,2),new Rn({name:"BackgroundMaterial",uniforms:ss(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||u!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=S,u=S.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,y){x.getRGB(so,Bh(n)),i.buffers.color.setClear(so.r,so.g,so.b,y,a)}return{getClearColor:function(){return r},setClearColor:function(x,y=1){r.set(x),l=y,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(r,l)},render:v,addToRenderList:f}}function Xm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let o=s,a=!1;function r(_,b,I,O,D){let G=!1;const F=p(O,I,b);o!==F&&(o=F,c(o.object)),G=m(_,O,I,D),G&&g(_,O,I,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(_,b,I,O),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function p(_,b,I){const O=I.wireframe===!0;let D=i[_.id];D===void 0&&(D={},i[_.id]=D);let G=D[b.id];G===void 0&&(G={},D[b.id]=G);let F=G[O];return F===void 0&&(F=u(l()),G[O]=F),F}function u(_){const b=[],I=[],O=[];for(let D=0;D<t;D++)b[D]=0,I[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:O,object:_,attributes:{},index:null}}function m(_,b,I,O){const D=o.attributes,G=b.attributes;let F=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){const re=D[V];let se=G[V];if(se===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;F++}return o.attributesNum!==F||o.index!==O}function g(_,b,I,O){const D={},G=b.attributes;let F=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){let re=G[V];re===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),D[V]=se,F++}o.attributes=D,o.attributesNum=F,o.index=O}function v(){const _=o.newAttributes;for(let b=0,I=_.length;b<I;b++)_[b]=0}function f(_){d(_,0)}function d(_,b){const I=o.newAttributes,O=o.enabledAttributes,D=o.attributeDivisors;I[_]=1,O[_]===0&&(n.enableVertexAttribArray(_),O[_]=1),D[_]!==b&&(n.vertexAttribDivisor(_,b),D[_]=b)}function x(){const _=o.newAttributes,b=o.enabledAttributes;for(let I=0,O=b.length;I<O;I++)b[I]!==_[I]&&(n.disableVertexAttribArray(I),b[I]=0)}function y(_,b,I,O,D,G,F){F===!0?n.vertexAttribIPointer(_,b,I,D,G):n.vertexAttribPointer(_,b,I,O,D,G)}function S(_,b,I,O){v();const D=O.attributes,G=I.getAttributes(),F=b.defaultAttributeValues;for(const X in G){const V=G[X];if(V.location>=0){let ie=D[X];if(ie===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),ie!==void 0){const re=ie.normalized,se=ie.itemSize,Me=e.get(ie);if(Me===void 0)continue;const De=Me.buffer,K=Me.type,k=Me.bytesPerElement,Y=K===n.INT||K===n.UNSIGNED_INT||ie.gpuType===tl;if(ie.isInterleavedBufferAttribute){const $=ie.data,he=$.stride,ve=ie.offset;if($.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)d(V.location+be,$.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let be=0;be<V.locationSize;be++)f(V.location+be);n.bindBuffer(n.ARRAY_BUFFER,De);for(let be=0;be<V.locationSize;be++)y(V.location+be,se/V.locationSize,K,re,he*k,(ve+se/V.locationSize*be)*k,Y)}else{if(ie.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)d(V.location+$,ie.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<V.locationSize;$++)f(V.location+$);n.bindBuffer(n.ARRAY_BUFFER,De);for(let $=0;$<V.locationSize;$++)y(V.location+$,se/V.locationSize,K,re,se*k,se/V.locationSize*$*k,Y)}}else if(F!==void 0){const re=F[X];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(V.location,re);break;case 3:n.vertexAttrib3fv(V.location,re);break;case 4:n.vertexAttrib4fv(V.location,re);break;default:n.vertexAttrib1fv(V.location,re)}}}}x()}function E(){R();for(const _ in i){const b=i[_];for(const I in b){const O=b[I];for(const D in O)h(O[D].object),delete O[D];delete b[I]}delete i[_]}}function M(_){if(i[_.id]===void 0)return;const b=i[_.id];for(const I in b){const O=b[I];for(const D in O)h(O[D].object),delete O[D];delete b[I]}delete i[_.id]}function A(_){for(const b in i){const I=i[b];if(I[_.id]===void 0)continue;const O=I[_.id];for(const D in O)h(O[D].object),delete O[D];delete I[_.id]}}function R(){P(),a=!0,o!==s&&(o=s,c(o.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:R,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function qm(n,e,t){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),t.update(h,i,p))}function r(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,i,1)}function l(c,h,p,u){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v];for(let v=0;v<u.length;v++)t.update(g,i,u[v])}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Zm(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const R=A===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:E,maxSamples:M}}function $m(n){const e=this;let t=null,i=0,s=!1,o=!1;const a=new Hn,r=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||i!==0||s;return s=u,i=p.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,d=n.get(p);if(!s||g===null||g.length===0||o&&!f)o?h(null):c();else{const x=o?0:i,y=x*4;let S=d.clippingState||null;l.value=S,S=h(g,u,y,m);for(let E=0;E!==y;++E)S[E]=t[E];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,m,g){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const d=m+v*4,x=u.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<d)&&(f=new Float32Array(d));for(let y=0,S=m;y!==v;++y,S+=4)a.copy(p[y]).applyMatrix4(x,r),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Ym(n){let e=new WeakMap;function t(a,r){return r===ir?a.mapping=es:r===sr&&(a.mapping=ts),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===ir||r===sr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new af(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Gh extends kh{constructor(e=-1,t=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,a=i+e,r=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,rc=[.125,.215,.35,.446,.526,.582],ri=20,Aa=new Gh,lc=new ke;let Ca=null,wa=0,Ra=0,Pa=!1;const oi=(1+Math.sqrt(5))/2,Hi=1/oi,cc=[new U(-oi,Hi,0),new U(oi,Hi,0),new U(-Hi,0,oi),new U(Hi,0,oi),new U(0,oi,-Hi),new U(0,oi,Hi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Dr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ca=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,wa,Ra),this._renderer.xr.enabled=Pa,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ls,format:rn,colorSpace:Yn,depthBuffer:!1},s=hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(o)),this._blurMaterial=Km(o,e,t)}return s}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,s){const r=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(lc),h.toneMapping=Gn,h.autoClear=!1;const m=new Os({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new $e(new ds,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(lc),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(r.up.set(0,l[d],0),r.lookAt(c[d],0,0)):x===1?(r.up.set(0,0,l[d]),r.lookAt(0,c[d],0)):(r.up.set(0,l[d],0),r.lookAt(0,0,c[d]));const y=this._cubeSize;oo(s,x*y,d>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=cc[(s-o-1)%cc.length];this._blur(e,o-1,o,a,r)}t.autoClear=i}_blur(e,t,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",o),this._halfBlur(a,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new $e(this._lodPlanes[s],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*ri-1),v=o/g,f=isFinite(o)?1+Math.floor(h*v):ri;f>ri&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ri}`);const d=[];let x=0;for(let A=0;A<ri;++A){const R=A/v,P=Math.exp(-R*R/2);d.push(P),A===0?x+=P:A<f&&(x+=2*P)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=d,u.latitudinal.value=a==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const S=this._sizeLods[s],E=3*S*(s>y-Wi?s-y+Wi:0),M=4*(this._cubeSize-S);oo(t,E,M,3*S,2*S),l.setRenderTarget(t),l.render(p,Aa)}}function jm(n){const e=[],t=[],i=[];let s=n;const o=n-Wi+1+rc.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);t.push(r);let l=1/r;a>n-Wi?l=rc[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,v=3,f=2,d=1,x=new Float32Array(v*g*m),y=new Float32Array(f*g*m),S=new Float32Array(d*g*m);for(let M=0;M<m;M++){const A=M%3*2/3-1,R=M>2?0:-1,P=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(P,v*g*M),y.set(u,f*g*M);const _=[M,M,M,M,M,M];S.set(_,d*g*M)}const E=new Jt;E.setAttribute("position",new Kt(x,v)),E.setAttribute("uv",new Kt(y,f)),E.setAttribute("faceIndex",new Kt(S,d)),e.push(E),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hc(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Km(n,e,t){const i=new Float32Array(ri),s=new U(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function dc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function uc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Jm(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===ir||l===sr,h=l===es||l===ts;if(c||h){let p=e.get(r);const u=p!==void 0?p.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return t===null&&(t=new Dr(n)),p=c?t.fromEquirectangular(r,p):t.fromCubemap(r,p),p.texture.pmremVersion=r.pmremVersion,e.set(r,p),p.texture;if(p!==void 0)return p.texture;{const m=r.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Dr(n)),p=c?t.fromEquirectangular(r):t.fromCubemap(r),p.texture.pmremVersion=r.pmremVersion,e.set(r,p),r.addEventListener("dispose",o),p.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,e,t,i){const s={},o=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let f=0,d=v.length;f<d;f++)e.remove(v[f])}u.removeEventListener("dispose",a),delete s[u.id];const m=o.get(u);m&&(e.remove(m),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(p){const u=p.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let f=0,d=v.length;f<d;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(p){const u=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let y=0,S=x.length;y<S;y+=3){const E=x[y+0],M=x[y+1],A=x[y+2];u.push(E,M,M,A,A,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const E=y+0,M=y+1,A=y+2;u.push(E,M,M,A,A,E)}}else return;const f=new(Ih(u)?Hh:Fh)(u,1);f.version=v;const d=o.get(p);d&&e.remove(d),o.set(p,f)}function h(p){const u=o.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return o.get(p)}return{get:r,update:l,getWireframeAttribute:h}}function tg(n,e,t){let i;function s(u){i=u}let o,a;function r(u){o=u.type,a=u.bytesPerElement}function l(u,m){n.drawElements(i,m,o,u*a),t.update(m,i,1)}function c(u,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,u*a,g),t.update(m,i,g))}function h(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,u,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];t.update(f,i,1)}function p(u,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u.length;d++)c(u[d]/a,m[d],v[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,o,u,0,v,0,g);let d=0;for(let x=0;x<g;x++)d+=m[x];for(let x=0;x<v.length;x++)t.update(d,i,v[x])}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ng(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,r){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=r*(o/3);break;case n.LINES:t.lines+=r*(o/2);break;case n.LINE_STRIP:t.lines+=r*(o-1);break;case n.LINE_LOOP:t.lines+=r*o;break;case n.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,e,t){const i=new WeakMap,s=new st;function o(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(r);if(u===void 0||u.count!==p){let _=function(){R.dispose(),i.delete(r),r.removeEventListener("dispose",_)};var m=_;u!==void 0&&u.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,f=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],x=r.morphAttributes.normal||[],y=r.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),f===!0&&(S=3);let E=r.attributes.position.count*S,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*M*4*p),R=new Nh(A,E,M,p);R.type=mn,R.needsUpdate=!0;const P=S*4;for(let b=0;b<p;b++){const I=d[b],O=x[b],D=y[b],G=E*M*4*b;for(let F=0;F<I.count;F++){const X=F*P;g===!0&&(s.fromBufferAttribute(I,F),A[G+X+0]=s.x,A[G+X+1]=s.y,A[G+X+2]=s.z,A[G+X+3]=0),v===!0&&(s.fromBufferAttribute(O,F),A[G+X+4]=s.x,A[G+X+5]=s.y,A[G+X+6]=s.z,A[G+X+7]=0),f===!0&&(s.fromBufferAttribute(D,F),A[G+X+8]=s.x,A[G+X+9]=s.y,A[G+X+10]=s.z,A[G+X+11]=D.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new Oe(E,M)},i.set(r,u),r.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function sg(n,e,t,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return p}function a(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}class Wh extends It{constructor(e,t,i,s,o,a,r,l,c,h=Yi){if(h!==Yi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yi&&(i=gi),i===void 0&&h===is&&(i=ns),super(null,s,o,a,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xh=new It,fc=new Wh(1,1),qh=new Nh,Zh=new Gu,$h=new zh,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=pc[s];if(o===void 0&&(o=new Float32Array(s),pc[s]=o),e!==0){i.toArray(o,0);for(let a=1,r=0;a!==e;++a)r+=t,n[a].toArray(o,r)}return o}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;vc.set(i),n.uniformMatrix2fv(this.addr,!1,vc),St(t,i)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;_c.set(i),n.uniformMatrix3fv(this.addr,!1,_c),St(t,i)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;gc.set(i),n.uniformMatrix4fv(this.addr,!1,gc),St(t,i)}}function ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function yg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(fc.compareFunction=Lh,o=fc):o=Xh,t.setTexture2D(e||o,s)}function Sg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zh,s)}function Mg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||$h,s)}function bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qh,s)}function Eg(n){switch(n){case 5126:return og;case 35664:return ag;case 35665:return rg;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return dg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}function Tg(n,e){n.uniform1fv(this.addr,e)}function Ag(n,e){const t=us(e,this.size,2);n.uniform2fv(this.addr,t)}function Cg(n,e){const t=us(e,this.size,3);n.uniform3fv(this.addr,t)}function wg(n,e){const t=us(e,this.size,4);n.uniform4fv(this.addr,t)}function Rg(n,e){const t=us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pg(n,e){const t=us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Og(n,e){const t=us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lg(n,e){n.uniform1iv(this.addr,e)}function Ig(n,e){n.uniform2iv(this.addr,e)}function Dg(n,e){n.uniform3iv(this.addr,e)}function Ng(n,e){n.uniform4iv(this.addr,e)}function Ug(n,e){n.uniform1uiv(this.addr,e)}function Fg(n,e){n.uniform2uiv(this.addr,e)}function Hg(n,e){n.uniform3uiv(this.addr,e)}function Bg(n,e){n.uniform4uiv(this.addr,e)}function kg(n,e,t){const i=this.cache,s=e.length,o=Go(t,s);yt(i,o)||(n.uniform1iv(this.addr,o),St(i,o));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xh,o[a])}function zg(n,e,t){const i=this.cache,s=e.length,o=Go(t,s);yt(i,o)||(n.uniform1iv(this.addr,o),St(i,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,o[a])}function Vg(n,e,t){const i=this.cache,s=e.length,o=Go(t,s);yt(i,o)||(n.uniform1iv(this.addr,o),St(i,o));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$h,o[a])}function Gg(n,e,t){const i=this.cache,s=e.length,o=Go(t,s);yt(i,o)||(n.uniform1iv(this.addr,o),St(i,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qh,o[a])}function Wg(n){switch(n){case 5126:return Tg;case 35664:return Ag;case 35665:return Cg;case 35666:return wg;case 35674:return Rg;case 35675:return Pg;case 35676:return Og;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Hg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(e,t[r.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function xc(n,e){n.seq.push(e),n.map[e.id]=e}function $g(n,e,t){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const o=Oa.exec(i),a=Oa.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===s){xc(t,c===void 0?new Xg(r,n,e):new qg(r,n,e));break}else{let p=t.map[r];p===void 0&&(p=new Zg(r),xc(t,p)),t=p}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);$g(o,a,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,a=t.length;o!==a;++o){const r=t[o],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yg=37297;let jg=0;function Kg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const r=a+1;i.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return i.join(`
`)}function Jg(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Oo&&t===Po?i="LinearDisplayP3ToLinearSRGB":e===Po&&t===Oo&&(i="LinearSRGBToLinearDisplayP3"),n){case Yn:case ko:return[i,"LinearTransferOETF"];case un:case cl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Kg(n.getShaderSource(e),a)}else return s}function Qg(n,e){const t=Jg(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function e0(n,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="Cineon";break;case _u:t="ACESFilmic";break;case xu:t="AgX";break;case yu:t="Neutral";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new U;function t0(){Qe.getLuminanceCoefficients(ao);const n=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function i0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),a=o.name;let r=1;o.type===n.FLOAT_MAT2&&(r=2),o.type===n.FLOAT_MAT3&&(r=3),o.type===n.FLOAT_MAT4&&(r=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:r}}return t}function Es(n){return n!==""}function Mc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nr(n){return n.replace(o0,r0)}const a0=new Map;function r0(n,e){let t=Fe[e];if(t===void 0){const i=a0.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nr(t)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(n){return n.replace(l0,c0)}function c0(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Tc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function d0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function f0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case el:e="ENVMAP_BLENDING_MULTIPLY";break;case uu:e="ENVMAP_BLENDING_MIX";break;case fu:e="ENVMAP_BLENDING_ADD";break}return e}function p0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function m0(n,e,t,i){const s=n.getContext(),o=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=h0(t),c=d0(t),h=u0(t),p=f0(t),u=p0(t),m=n0(t),g=i0(o),v=s.createProgram();let f,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),d.length>0&&(d+=`
`)):(f=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),d=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Nr(a),a=Mc(a,t),a=bc(a,t),r=Nr(r),r=Mc(r,t),r=bc(r,t),a=Ec(a),r=Ec(r),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+f+a,S=x+d+r,E=yc(s,s.VERTEX_SHADER,y),M=yc(s,s.FRAGMENT_SHADER,S);s.attachShader(v,E),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(b){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(E).trim(),D=s.getShaderInfoLog(M).trim();let G=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,M);else{const X=Sc(s,E,"vertex"),V=Sc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+I+`
`+X+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||D==="")&&(F=!1);F&&(b.diagnostics={runnable:G,programLog:I,vertexShader:{log:O,prefix:f},fragmentShader:{log:D,prefix:d}})}s.deleteShader(E),s.deleteShader(M),R=new bo(s,v),P=s0(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Yg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=M,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new v0(e),t.set(e,i)),i}}class v0{constructor(e){this.id=g0++,this.code=e,this.usedTimes=0}}function x0(n,e,t,i,s,o,a){const r=new hl,l=new _0,c=new Set,h=[],p=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function d(_,b,I,O,D){const G=O.fog,F=D.geometry,X=_.isMeshStandardMaterial?O.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),ie=V&&V.mapping===Bo?V.image.height:null,re=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Me=se!==void 0?se.length:0;let De=0;F.morphAttributes.position!==void 0&&(De=1),F.morphAttributes.normal!==void 0&&(De=2),F.morphAttributes.color!==void 0&&(De=3);let K,k,Y,$;if(re){const Nt=fn[re];K=Nt.vertexShader,k=Nt.fragmentShader}else K=_.vertexShader,k=_.fragmentShader,l.update(_),Y=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);const he=n.getRenderTarget(),ve=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,ze=!!_.map,Ne=!!_.matcap,N=!!V,lt=!!_.aoMap,Ve=!!_.lightMap,Ge=!!_.bumpMap,Ae=!!_.normalMap,et=!!_.displacementMap,we=!!_.emissiveMap,w=!!_.metalnessMap,T=!!_.roughnessMap,W=_.anisotropy>0,Q=_.clearcoat>0,ne=_.dispersion>0,J=_.iridescence>0,ye=_.sheen>0,le=_.transmission>0,fe=W&&!!_.anisotropyMap,We=Q&&!!_.clearcoatMap,oe=Q&&!!_.clearcoatNormalMap,ge=Q&&!!_.clearcoatRoughnessMap,Le=J&&!!_.iridescenceMap,Ie=J&&!!_.iridescenceThicknessMap,_e=ye&&!!_.sheenColorMap,Xe=ye&&!!_.sheenRoughnessMap,Ue=!!_.specularMap,ot=!!_.specularColorMap,H=!!_.specularIntensityMap,pe=le&&!!_.transmissionMap,j=le&&!!_.thicknessMap,ee=!!_.gradientMap,de=!!_.alphaMap,me=_.alphaTest>0,qe=!!_.alphaHash,ft=!!_.extensions;let Dt=Gn;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const Ye={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:k,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Yn,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Ne,envMap:N,envMapMode:N&&V.mapping,envMapCubeUVHeight:ie,aoMap:lt,lightMap:Ve,bumpMap:Ge,normalMap:Ae,displacementMap:m&&et,emissiveMap:we,normalMapObjectSpace:Ae&&_.normalMapType===Eu,normalMapTangentSpace:Ae&&_.normalMapType===ll,metalnessMap:w,roughnessMap:T,anisotropy:W,anisotropyMap:fe,clearcoat:Q,clearcoatMap:We,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:ne,iridescence:J,iridescenceMap:Le,iridescenceThicknessMap:Ie,sheen:ye,sheenColorMap:_e,sheenRoughnessMap:Xe,specularMap:Ue,specularColorMap:ot,specularIntensityMap:H,transmission:le,transmissionMap:pe,thicknessMap:j,gradientMap:ee,opaque:_.transparent===!1&&_.blending===$i&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:me,alphaHash:qe,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:lt&&f(_.aoMap.channel),lightMapUv:Ve&&f(_.lightMap.channel),bumpMapUv:Ge&&f(_.bumpMap.channel),normalMapUv:Ae&&f(_.normalMap.channel),displacementMapUv:et&&f(_.displacementMap.channel),emissiveMapUv:we&&f(_.emissiveMap.channel),metalnessMapUv:w&&f(_.metalnessMap.channel),roughnessMapUv:T&&f(_.roughnessMap.channel),anisotropyMapUv:fe&&f(_.anisotropyMap.channel),clearcoatMapUv:We&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&f(_.sheenRoughnessMap.channel),specularMapUv:Ue&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:H&&f(_.specularIntensityMap.channel),transmissionMapUv:pe&&f(_.transmissionMap.channel),thicknessMapUv:j&&f(_.thicknessMap.channel),alphaMapUv:de&&f(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ae||W),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(ze||de),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Lt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(y(b,_),S(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function y(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.alphaToCoverage&&r.enable(20),_.push(r.mask)}function E(_){const b=v[_.type];let I;if(b){const O=fn[b];I=tf.clone(O.uniforms)}else I=_.uniforms;return I}function M(_,b){let I;for(let O=0,D=h.length;O<D;O++){const G=h[O];if(G.cacheKey===b){I=G,++I.usedTimes;break}}return I===void 0&&(I=new m0(n,b,_,o),h.push(I)),I}function A(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function R(_){l.remove(_)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:x,getUniforms:E,acquireProgram:M,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function y0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let r=n.get(a);return r===void 0&&(r={},n.set(a,r)),r}function i(a){n.delete(a)}function s(a,r,l){n.get(a)[r]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ac(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cc(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function a(p,u,m,g,v,f){let d=n[e];return d===void 0?(d={id:p.id,object:p,geometry:u,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:f},n[e]=d):(d.id=p.id,d.object=p,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=p.renderOrder,d.z=v,d.group=f),e++,d}function r(p,u,m,g,v,f){const d=a(p,u,m,g,v,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(p,u,m,g,v,f){const d=a(p,u,m,g,v,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(p,u){t.length>1&&t.sort(p||S0),i.length>1&&i.sort(u||Ac),s.length>1&&s.sort(u||Ac)}function h(){for(let p=e,u=n.length;p<u;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:r,unshift:l,finish:h,sort:c}}function M0(){let n=new WeakMap;function e(i,s){const o=n.get(i);let a;return o===void 0?(a=new Cc,n.set(i,[a])):s>=o.length?(a=new Cc,o.push(a)):a=o[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function b0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function E0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T0=0;function A0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C0(n){const e=new b0,t=E0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,o=new je,a=new je;function r(c){let h=0,p=0,u=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let m=0,g=0,v=0,f=0,d=0,x=0,y=0,S=0,E=0,M=0,A=0;c.sort(A0);for(let P=0,_=c.length;P<_;P++){const b=c[P],I=b.color,O=b.intensity,D=b.distance,G=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=I.r*O,p+=I.g*O,u+=I.b*O;else if(b.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(b.sh.coefficients[F],O);A++}else if(b.isDirectionalLight){const F=e.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const X=b.shadow,V=t.get(b);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=b.shadow.matrix,x++}i.directional[m]=F,m++}else if(b.isSpotLight){const F=e.get(b);F.position.setFromMatrixPosition(b.matrixWorld),F.color.copy(I).multiplyScalar(O),F.distance=D,F.coneCos=Math.cos(b.angle),F.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),F.decay=b.decay,i.spot[v]=F;const X=b.shadow;if(b.map&&(i.spotLightMap[E]=b.map,E++,X.updateMatrices(b),b.castShadow&&M++),i.spotLightMatrix[v]=X.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=G,S++}v++}else if(b.isRectAreaLight){const F=e.get(b);F.color.copy(I).multiplyScalar(O),F.halfWidth.set(b.width*.5,0,0),F.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=F,f++}else if(b.isPointLight){const F=e.get(b);if(F.color.copy(b.color).multiplyScalar(b.intensity),F.distance=b.distance,F.decay=b.decay,b.castShadow){const X=b.shadow,V=t.get(b);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=b.shadow.matrix,y++}i.point[g]=F,g++}else if(b.isHemisphereLight){const F=e.get(b);F.skyColor.copy(b.color).multiplyScalar(O),F.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[d]=F,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==f||R.hemiLength!==d||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==S||R.numSpotMaps!==E||R.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+E-M,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=f,R.hemiLength=d,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=S,R.numSpotMaps=E,R.numLightProbes=A,i.version=T0++)}function l(c,h){let p=0,u=0,m=0,g=0,v=0;const f=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const y=c[d];if(y.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),p++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),u++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),v++}}}return{setup:r,setupView:l,state:i}}function wc(n){const e=new C0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function w0(n){let e=new WeakMap;function t(s,o=0){const a=e.get(s);let r;return a===void 0?(r=new wc(n),e.set(s,[r])):o>=a.length?(r=new wc(n),a.push(r)):r=a[o],r}function i(){e=new WeakMap}return{get:t,dispose:i}}class R0 extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,e,t){let i=new dl;const s=new Oe,o=new Oe,a=new st,r=new R0({depthPacking:bu}),l=new P0,c={},h=t.maxTextureSize,p={[Xn]:Lt,[Lt]:Xn,[Tn]:Tn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:O0,fragmentShader:L0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let d=this.type;this.render=function(M,A,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const P=n.getRenderTarget(),_=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Vn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=d!==En&&this.type===En,D=d===En&&this.type!==En;for(let G=0,F=M.length;G<F;G++){const X=M[G],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),o.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ie.x),s.x=o.x*ie.x,V.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ie.y),s.y=o.y*ie.y,V.mapSize.y=o.y)),V.map===null||O===!0||D===!0){const se=this.type!==En?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new _i(s.x,s.y,se),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const re=V.getViewportCount();for(let se=0;se<re;se++){const Me=V.getViewport(se);a.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),I.viewport(a),V.updateMatrices(X,se),i=V.getFrustum(),S(A,R,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===En&&x(V,R),V.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(P,_,b)};function x(M,A){const R=e.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _i(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,R,u,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,R,m,v,null)}function y(M,A,R,P){let _=null;const b=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)_=b;else if(_=R.isPointLight===!0?l:r,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=_.uuid,O=A.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let G=D[O];G===void 0&&(G=_.clone(),D[O]=G,A.addEventListener("dispose",E)),_=G}if(_.visible=A.visible,_.wireframe=A.wireframe,P===En?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:p[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=R}return _}function S(M,A,R,P,_){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===En)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const O=e.update(M),D=M.material;if(Array.isArray(D)){const G=O.groups;for(let F=0,X=G.length;F<X;F++){const V=G[F],ie=D[V.materialIndex];if(ie&&ie.visible){const re=y(M,ie,P,_);M.onBeforeShadow(n,M,A,R,O,re,V),n.renderBufferDirect(R,null,O,re,M,V),M.onAfterShadow(n,M,A,R,O,re,V)}}}else if(D.visible){const G=y(M,D,P,_);M.onBeforeShadow(n,M,A,R,O,G,null),n.renderBufferDirect(R,null,O,G,M,null),M.onAfterShadow(n,M,A,R,O,G,null)}}const I=M.children;for(let O=0,D=I.length;O<D;O++)S(I[O],A,R,P,_)}function E(M){M.target.removeEventListener("dispose",E);for(const R in c){const P=c[R],_=M.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const D0={[ja]:Ka,[Ja]:tr,[Qa]:nr,[Qi]:er,[Ka]:ja,[tr]:Ja,[nr]:Qa,[er]:Qi};function N0(n){function e(){let H=!1;const pe=new st;let j=null;const ee=new st(0,0,0,0);return{setMask:function(de){j!==de&&!H&&(n.colorMask(de,de,de,de),j=de)},setLocked:function(de){H=de},setClear:function(de,me,qe,ft,Dt){Dt===!0&&(de*=ft,me*=ft,qe*=ft),pe.set(de,me,qe,ft),ee.equals(pe)===!1&&(n.clearColor(de,me,qe,ft),ee.copy(pe))},reset:function(){H=!1,j=null,ee.set(-1,0,0,0)}}}function t(){let H=!1,pe=!1,j=null,ee=null,de=null;return{setReversed:function(me){pe=me},setTest:function(me){me?Y(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(me){j!==me&&!H&&(n.depthMask(me),j=me)},setFunc:function(me){if(pe&&(me=D0[me]),ee!==me){switch(me){case ja:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Ja:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case er:n.depthFunc(n.GEQUAL);break;case tr:n.depthFunc(n.GREATER);break;case nr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=me}},setLocked:function(me){H=me},setClear:function(me){de!==me&&(n.clearDepth(me),de=me)},reset:function(){H=!1,j=null,ee=null,de=null}}}function i(){let H=!1,pe=null,j=null,ee=null,de=null,me=null,qe=null,ft=null,Dt=null;return{setTest:function(Ye){H||(Ye?Y(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!H&&(n.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,Nt,vn){(j!==Ye||ee!==Nt||de!==vn)&&(n.stencilFunc(Ye,Nt,vn),j=Ye,ee=Nt,de=vn)},setOp:function(Ye,Nt,vn){(me!==Ye||qe!==Nt||ft!==vn)&&(n.stencilOp(Ye,Nt,vn),me=Ye,qe=Nt,ft=vn)},setLocked:function(Ye){H=Ye},setClear:function(Ye){Dt!==Ye&&(n.clearStencil(Ye),Dt=Ye)},reset:function(){H=!1,pe=null,j=null,ee=null,de=null,me=null,qe=null,ft=null,Dt=null}}}const s=new e,o=new t,a=new i,r=new WeakMap,l=new WeakMap;let c={},h={},p=new WeakMap,u=[],m=null,g=!1,v=null,f=null,d=null,x=null,y=null,S=null,E=null,M=new ke(0,0,0),A=0,R=!1,P=null,_=null,b=null,I=null,O=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=F>=2);let V=null,ie={};const re=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Me=new st().fromArray(re),De=new st().fromArray(se);function K(H,pe,j,ee){const de=new Uint8Array(4),me=n.createTexture();n.bindTexture(H,me),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<j;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(pe+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return me}const k={};k[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(Qi),Ve(!1),Ge(Hl),Y(n.CULL_FACE),N(Vn);function Y(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function $(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function he(H,pe){return h[H]!==pe?(n.bindFramebuffer(H,pe),h[H]=pe,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ve(H,pe){let j=u,ee=!1;if(H){j=p.get(pe),j===void 0&&(j=[],p.set(pe,j));const de=H.textures;if(j.length!==de.length||j[0]!==n.COLOR_ATTACHMENT0){for(let me=0,qe=de.length;me<qe;me++)j[me]=n.COLOR_ATTACHMENT0+me;j.length=de.length,ee=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ee=!0);ee&&n.drawBuffers(j)}function be(H){return m!==H?(n.useProgram(H),m=H,!0):!1}const ze={[ai]:n.FUNC_ADD,[Yd]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};ze[Kd]=n.MIN,ze[Jd]=n.MAX;const Ne={[Qd]:n.ZERO,[eu]:n.ONE,[tu]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[ru]:n.SRC_ALPHA_SATURATE,[ou]:n.DST_COLOR,[iu]:n.DST_ALPHA,[nu]:n.ONE_MINUS_SRC_COLOR,[Ya]:n.ONE_MINUS_SRC_ALPHA,[au]:n.ONE_MINUS_DST_COLOR,[su]:n.ONE_MINUS_DST_ALPHA,[lu]:n.CONSTANT_COLOR,[cu]:n.ONE_MINUS_CONSTANT_COLOR,[hu]:n.CONSTANT_ALPHA,[du]:n.ONE_MINUS_CONSTANT_ALPHA};function N(H,pe,j,ee,de,me,qe,ft,Dt,Ye){if(H===Vn){g===!0&&($(n.BLEND),g=!1);return}if(g===!1&&(Y(n.BLEND),g=!0),H!==$d){if(H!==v||Ye!==R){if((f!==ai||y!==ai)&&(n.blendEquation(n.FUNC_ADD),f=ai,y=ai),Ye)switch(H){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wo:n.blendFunc(n.ONE,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}d=null,x=null,S=null,E=null,M.set(0,0,0),A=0,v=H,R=Ye}return}de=de||pe,me=me||j,qe=qe||ee,(pe!==f||de!==y)&&(n.blendEquationSeparate(ze[pe],ze[de]),f=pe,y=de),(j!==d||ee!==x||me!==S||qe!==E)&&(n.blendFuncSeparate(Ne[j],Ne[ee],Ne[me],Ne[qe]),d=j,x=ee,S=me,E=qe),(ft.equals(M)===!1||Dt!==A)&&(n.blendColor(ft.r,ft.g,ft.b,Dt),M.copy(ft),A=Dt),v=H,R=!1}function lt(H,pe){H.side===Tn?$(n.CULL_FACE):Y(n.CULL_FACE);let j=H.side===Lt;pe&&(j=!j),Ve(j),H.blending===$i&&H.transparent===!1?N(Vn):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const ee=H.stencilWrite;a.setTest(ee),ee&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),et(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function Ge(H){H!==Xd?(Y(n.CULL_FACE),H!==_&&(H===Hl?n.cullFace(n.BACK):H===qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),_=H}function Ae(H){H!==b&&(G&&n.lineWidth(H),b=H)}function et(H,pe,j){H?(Y(n.POLYGON_OFFSET_FILL),(I!==pe||O!==j)&&(n.polygonOffset(pe,j),I=pe,O=j)):$(n.POLYGON_OFFSET_FILL)}function we(H){H?Y(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function w(H){H===void 0&&(H=n.TEXTURE0+D-1),V!==H&&(n.activeTexture(H),V=H)}function T(H,pe,j){j===void 0&&(V===null?j=n.TEXTURE0+D-1:j=V);let ee=ie[j];ee===void 0&&(ee={type:void 0,texture:void 0},ie[j]=ee),(ee.type!==H||ee.texture!==pe)&&(V!==j&&(n.activeTexture(j),V=j),n.bindTexture(H,pe||k[H]),ee.type=H,ee.texture=pe)}function W(){const H=ie[V];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(H){Me.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function _e(H){De.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),De.copy(H))}function Xe(H,pe){let j=l.get(pe);j===void 0&&(j=new WeakMap,l.set(pe,j));let ee=j.get(H);ee===void 0&&(ee=n.getUniformBlockIndex(pe,H.name),j.set(H,ee))}function Ue(H,pe){const ee=l.get(pe).get(H);r.get(pe)!==ee&&(n.uniformBlockBinding(pe,ee,H.__bindingPointIndex),r.set(pe,ee))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,ie={},h={},p=new WeakMap,u=[],m=null,g=!1,v=null,f=null,d=null,x=null,y=null,S=null,E=null,M=new ke(0,0,0),A=0,R=!1,P=null,_=null,b=null,I=null,O=null,Me.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:$,bindFramebuffer:he,drawBuffers:ve,useProgram:be,setBlending:N,setMaterial:lt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Ae,setPolygonOffset:et,setScissorTest:we,activeTexture:w,bindTexture:T,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:ge,texImage3D:Le,updateUBOMapping:Xe,uniformBlockBinding:Ue,texStorage2D:We,texStorage3D:oe,texSubImage2D:J,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ie,viewport:_e,reset:ot}}function Rc(n,e,t,i){const s=U0(i);switch(t){case Ah:return n*e;case wh:return n*e;case Rh:return n*e*2;case sl:return n*e/s.components*s.byteLength;case ol:return n*e/s.components*s.byteLength;case Ph:return n*e*2/s.components*s.byteLength;case al:return n*e*2/s.components*s.byteLength;case Ch:return n*e*3/s.components*s.byteLength;case rn:return n*e*4/s.components*s.byteLength;case rl:return n*e*4/s.components*s.byteLength;case go:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lr:case hr:return Math.max(n,16)*Math.max(e,8)/4;case rr:case cr:return Math.max(n,8)*Math.max(e,8)/2;case dr:case ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _r:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mr:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case br:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Er:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ar:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case wr:case Rr:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oh:case Pr:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Or:case Lr:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U0(n){switch(n){case wn:case bh:return{byteLength:1,components:1};case Ps:case Eh:case Ls:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case gi:case tl:case mn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function F0(n,e,t,i,s,o,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,T){return m?new OffscreenCanvas(w,T):Io("canvas")}function v(w,T,W){let Q=1;const ne=we(w);if((ne.width>W||ne.height>W)&&(Q=W/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Q*ne.width),ye=Math.floor(Q*ne.height);p===void 0&&(p=g(J,ye));const le=T?g(J,ye):p;return le.width=J,le.height=ye,le.getContext("2d").drawImage(w,0,0,J,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+ye+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==Bt&&w.minFilter!==on}function d(w){n.generateMipmap(w)}function x(w,T,W,Q,ne=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=T;if(T===n.RED&&(W===n.FLOAT&&(J=n.R32F),W===n.HALF_FLOAT&&(J=n.R16F),W===n.UNSIGNED_BYTE&&(J=n.R8)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.R8UI),W===n.UNSIGNED_SHORT&&(J=n.R16UI),W===n.UNSIGNED_INT&&(J=n.R32UI),W===n.BYTE&&(J=n.R8I),W===n.SHORT&&(J=n.R16I),W===n.INT&&(J=n.R32I)),T===n.RG&&(W===n.FLOAT&&(J=n.RG32F),W===n.HALF_FLOAT&&(J=n.RG16F),W===n.UNSIGNED_BYTE&&(J=n.RG8)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RG8UI),W===n.UNSIGNED_SHORT&&(J=n.RG16UI),W===n.UNSIGNED_INT&&(J=n.RG32UI),W===n.BYTE&&(J=n.RG8I),W===n.SHORT&&(J=n.RG16I),W===n.INT&&(J=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGB8UI),W===n.UNSIGNED_SHORT&&(J=n.RGB16UI),W===n.UNSIGNED_INT&&(J=n.RGB32UI),W===n.BYTE&&(J=n.RGB8I),W===n.SHORT&&(J=n.RGB16I),W===n.INT&&(J=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),W===n.UNSIGNED_INT&&(J=n.RGBA32UI),W===n.BYTE&&(J=n.RGBA8I),W===n.SHORT&&(J=n.RGBA16I),W===n.INT&&(J=n.RGBA32I)),T===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),T===n.RGBA){const ye=ne?Ro:Qe.getTransfer(Q);W===n.FLOAT&&(J=n.RGBA32F),W===n.HALF_FLOAT&&(J=n.RGBA16F),W===n.UNSIGNED_BYTE&&(J=ye===rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(w,T){let W;return w?T===null||T===gi||T===ns?W=n.DEPTH24_STENCIL8:T===mn?W=n.DEPTH32F_STENCIL8:T===Ps&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===ns?W=n.DEPTH_COMPONENT24:T===mn?W=n.DEPTH_COMPONENT32F:T===Ps&&(W=n.DEPTH_COMPONENT16),W}function S(w,T){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function E(w){const T=w.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function M(w){const T=w.target;T.removeEventListener("dispose",M),P(T)}function A(w){const T=i.get(w);if(T.__webglInit===void 0)return;const W=w.source,Q=u.get(W);if(Q){const ne=Q[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(w),Object.keys(Q).length===0&&u.delete(W)}i.remove(w)}function R(w){const T=i.get(w);n.deleteTexture(T.__webglTexture);const W=w.source,Q=u.get(W);delete Q[T.__cacheKey],a.memory.textures--}function P(w){const T=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ne=0;ne<T.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=w.textures;for(let Q=0,ne=W.length;Q<ne;Q++){const J=i.get(W[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(w)}let _=0;function b(){_=0}function I(){const w=_;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),_+=1,w}function O(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function D(w,T){const W=i.get(w);if(w.isVideoTexture&&Ae(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(W,w,T);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function G(w,T){const W=i.get(w);if(w.version>0&&W.__version!==w.version){De(W,w,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function F(w,T){const W=i.get(w);if(w.version>0&&W.__version!==w.version){De(W,w,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function X(w,T){const W=i.get(w);if(w.version>0&&W.__version!==w.version){K(W,w,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const V={[or]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[ar]:n.MIRRORED_REPEAT},ie={[Bt]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},re={[Tu]:n.NEVER,[Ou]:n.ALWAYS,[Au]:n.LESS,[Lh]:n.LEQUAL,[Cu]:n.EQUAL,[Pu]:n.GEQUAL,[wu]:n.GREATER,[Ru]:n.NOTEQUAL};function se(w,T){if(T.type===mn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===ia||T.magFilter===ks||T.magFilter===hi||T.minFilter===on||T.minFilter===ia||T.minFilter===ks||T.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,V[T.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,V[T.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,V[T.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ie[T.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==ks&&T.minFilter!==hi||T.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Me(w,T){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",E));const Q=T.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const J=O(T);if(J!==w.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[J].usedTimes++;const ye=ne[w.__cacheKey];ye!==void 0&&(ne[w.__cacheKey].usedTimes--,ye.usedTimes===0&&R(T)),w.__cacheKey=J,w.__webglTexture=ne[J].texture}return W}function De(w,T,W){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=Me(w,T),J=T.source;t.bindTexture(Q,w.__webglTexture,n.TEXTURE0+W);const ye=i.get(J);if(J.version!==ye.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);const le=Qe.getPrimaries(Qe.workingColorSpace),fe=T.colorSpace===Bn?null:Qe.getPrimaries(T.colorSpace),We=T.colorSpace===Bn||le===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let oe=v(T.image,!1,s.maxTextureSize);oe=et(T,oe);const ge=o.convert(T.format,T.colorSpace),Le=o.convert(T.type);let Ie=x(T.internalFormat,ge,Le,T.colorSpace,T.isVideoTexture);se(Q,T);let _e;const Xe=T.mipmaps,Ue=T.isVideoTexture!==!0,ot=ye.__version===void 0||ne===!0,H=J.dataReady,pe=S(T,oe);if(T.isDepthTexture)Ie=y(T.format===is,T.type),ot&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,Le,null));else if(T.isDataTexture)if(Xe.length>0){Ue&&ot&&t.texStorage2D(n.TEXTURE_2D,pe,Ie,Xe[0].width,Xe[0].height);for(let j=0,ee=Xe.length;j<ee;j++)_e=Xe[j],Ue?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ie,_e.width,_e.height,0,ge,Le,_e.data);T.generateMipmaps=!1}else Ue?(ot&&t.texStorage2D(n.TEXTURE_2D,pe,Ie,oe.width,oe.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Le,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,Le,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ie,Xe[0].width,Xe[0].height,oe.depth);for(let j=0,ee=Xe.length;j<ee;j++)if(_e=Xe[j],T.format!==rn)if(ge!==null)if(Ue){if(H)if(T.layerUpdates.size>0){const de=Rc(_e.width,_e.height,T.format,T.type);for(const me of T.layerUpdates){const qe=_e.data.subarray(me*de/_e.data.BYTES_PER_ELEMENT,(me+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,me,_e.width,_e.height,1,ge,qe,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,oe.depth,ge,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ie,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,oe.depth,ge,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ie,_e.width,_e.height,oe.depth,0,ge,Le,_e.data)}else{Ue&&ot&&t.texStorage2D(n.TEXTURE_2D,pe,Ie,Xe[0].width,Xe[0].height);for(let j=0,ee=Xe.length;j<ee;j++)_e=Xe[j],T.format!==rn?ge!==null?Ue?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,j,Ie,_e.width,_e.height,0,ge,Le,_e.data)}else if(T.isDataArrayTexture)if(Ue){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ie,oe.width,oe.height,oe.depth),H)if(T.layerUpdates.size>0){const j=Rc(oe.width,oe.height,T.format,T.type);for(const ee of T.layerUpdates){const de=oe.data.subarray(ee*j/oe.data.BYTES_PER_ELEMENT,(ee+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,ge,Le,de)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Le,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,ge,Le,oe.data);else if(T.isData3DTexture)Ue?(ot&&t.texStorage3D(n.TEXTURE_3D,pe,Ie,oe.width,oe.height,oe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Le,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,ge,Le,oe.data);else if(T.isFramebufferTexture){if(ot)if(Ue)t.texStorage2D(n.TEXTURE_2D,pe,Ie,oe.width,oe.height);else{let j=oe.width,ee=oe.height;for(let de=0;de<pe;de++)t.texImage2D(n.TEXTURE_2D,de,Ie,j,ee,0,ge,Le,null),j>>=1,ee>>=1}}else if(Xe.length>0){if(Ue&&ot){const j=we(Xe[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ie,j.width,j.height)}for(let j=0,ee=Xe.length;j<ee;j++)_e=Xe[j],Ue?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,Le,_e):t.texImage2D(n.TEXTURE_2D,j,Ie,ge,Le,_e);T.generateMipmaps=!1}else if(Ue){if(ot){const j=we(oe);t.texStorage2D(n.TEXTURE_2D,pe,Ie,j.width,j.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Le,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ge,Le,oe);f(T)&&d(Q),ye.__version=J.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function K(w,T,W){if(T.image.length!==6)return;const Q=Me(w,T),ne=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+W);const J=i.get(ne);if(ne.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const ye=Qe.getPrimaries(Qe.workingColorSpace),le=T.colorSpace===Bn?null:Qe.getPrimaries(T.colorSpace),fe=T.colorSpace===Bn||ye===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const We=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let ee=0;ee<6;ee++)!We&&!oe?ge[ee]=v(T.image[ee],!0,s.maxCubemapSize):ge[ee]=oe?T.image[ee].image:T.image[ee],ge[ee]=et(T,ge[ee]);const Le=ge[0],Ie=o.convert(T.format,T.colorSpace),_e=o.convert(T.type),Xe=x(T.internalFormat,Ie,_e,T.colorSpace),Ue=T.isVideoTexture!==!0,ot=J.__version===void 0||Q===!0,H=ne.dataReady;let pe=S(T,Le);se(n.TEXTURE_CUBE_MAP,T);let j;if(We){Ue&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,Le.width,Le.height);for(let ee=0;ee<6;ee++){j=ge[ee].mipmaps;for(let de=0;de<j.length;de++){const me=j[de];T.format!==rn?Ie!==null?Ue?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,me.width,me.height,Ie,_e,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,Xe,me.width,me.height,0,Ie,_e,me.data)}}}else{if(j=T.mipmaps,Ue&&ot){j.length>0&&pe++;const ee=we(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Ue?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge[ee].width,ge[ee].height,Ie,_e,ge[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,ge[ee].width,ge[ee].height,0,Ie,_e,ge[ee].data);for(let de=0;de<j.length;de++){const qe=j[de].image[ee].image;Ue?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,qe.width,qe.height,Ie,_e,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Xe,qe.width,qe.height,0,Ie,_e,qe.data)}}else{Ue?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,_e,ge[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ie,_e,ge[ee]);for(let de=0;de<j.length;de++){const me=j[de];Ue?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,Ie,_e,me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,Xe,Ie,_e,me.image[ee])}}}f(T)&&d(n.TEXTURE_CUBE_MAP),J.__version=ne.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function k(w,T,W,Q,ne,J){const ye=o.convert(W.format,W.colorSpace),le=o.convert(W.type),fe=x(W.internalFormat,ye,le,W.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>J),ge=Math.max(1,T.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,fe,oe,ge,T.depth,0,ye,le,null):t.texImage2D(ne,J,fe,oe,ge,0,ye,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ge(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,i.get(W).__webglTexture,0,Ve(T)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,i.get(W).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(w,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,w),T.depthBuffer){const Q=T.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=y(T.stencilBuffer,ne),ye=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Ve(T);Ge(T)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,J,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,J,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,w)}else{const Q=T.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],ye=o.convert(J.format,J.colorSpace),le=o.convert(J.type),fe=x(J.internalFormat,ye,le,J.colorSpace),We=Ve(T);W&&Ge(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,fe,T.width,T.height):Ge(T)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,fe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,ne=Ve(T);if(T.depthTexture.format===Yi)Ge(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===is)Ge(T)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function he(w){const T=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ne=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),T.__depthDisposeCallback=ne}T.__boundDepthTexture=Q}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$(T.__webglFramebuffer,w)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),Y(T.__webglDepthbuffer[Q],w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Y(T.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(w,T,W){const Q=i.get(w);T!==void 0&&k(Q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&he(w)}function be(w){const T=w.texture,W=i.get(w),Q=i.get(T);w.addEventListener("dispose",M);const ne=w.textures,J=w.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,a.memory.textures++),J){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let fe=0;fe<T.mipmaps.length;fe++)W.__webglFramebuffer[le][fe]=n.createFramebuffer()}else W.__webglFramebuffer[le]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)W.__webglFramebuffer[le]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ye)for(let le=0,fe=ne.length;le<fe;le++){const We=i.get(ne[le]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ge(w)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const fe=ne[le];W.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const We=o.convert(fe.format,fe.colorSpace),oe=o.convert(fe.type),ge=x(fe.internalFormat,We,oe,fe.colorSpace,w.isXRRenderTarget===!0),Le=Ve(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,W.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),se(n.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)k(W.__webglFramebuffer[le][fe],w,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else k(W.__webglFramebuffer[le],w,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);f(T)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,fe=ne.length;le<fe;le++){const We=ne[le],oe=i.get(We);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),se(n.TEXTURE_2D,We),k(W.__webglFramebuffer,w,We,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),f(We)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),se(le,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)k(W.__webglFramebuffer[fe],w,T,n.COLOR_ATTACHMENT0,le,fe);else k(W.__webglFramebuffer,w,T,n.COLOR_ATTACHMENT0,le,0);f(T)&&d(le),t.unbindTexture()}w.depthBuffer&&he(w)}function ze(w){const T=w.textures;for(let W=0,Q=T.length;W<Q;W++){const ne=T[W];if(f(ne)){const J=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(ne).__webglTexture;t.bindTexture(J,ye),d(J),t.unbindTexture()}}}const Ne=[],N=[];function lt(w){if(w.samples>0){if(Ge(w)===!1){const T=w.textures,W=w.width,Q=w.height;let ne=n.COLOR_BUFFER_BIT;const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(w),le=T.length>1;if(le)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);const We=i.get(T[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,ne,n.NEAREST),l===!0&&(Ne.length=0,N.length=0,Ne.push(n.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);const We=i.get(T[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const T=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ve(w){return Math.min(s.maxSamples,w.samples)}function Ge(w){const T=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(w){const T=a.render.frame;h.get(w)!==T&&(h.set(w,T),w.update())}function et(w,T){const W=w.colorSpace,Q=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Yn&&W!==Bn&&(Qe.getTransfer(W)===rt?(Q!==rn||ne!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=b,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Ge}function H0(n,e){function t(i,s=Bn){let o;const a=Qe.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.BYTE;if(i===Eh)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===tl)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===Ah)return n.ALPHA;if(i===Ch)return n.RGB;if(i===rn)return n.RGBA;if(i===wh)return n.LUMINANCE;if(i===Rh)return n.LUMINANCE_ALPHA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===sl)return n.RED;if(i===ol)return n.RED_INTEGER;if(i===Ph)return n.RG;if(i===al)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===go||i===_o||i===vo||i===xo)if(a===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rr||i===lr||i===cr||i===hr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===rr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dr||i===ur||i===fr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===dr||i===ur)return a===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===fr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pr||i===mr||i===gr||i===_r||i===vr||i===xr||i===yr||i===Sr||i===Mr||i===br||i===Er||i===Tr||i===Ar||i===Cr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===pr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_r)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===br)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Er)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ar)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cr)return a===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===wr||i===Rr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yo)return a===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oh||i===Pr||i===Or||i===Lr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Pr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Or)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class B0 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),d=this._getHandJoint(c,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V0=`
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

}`;class G0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new It,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rn({vertexShader:z0,fragmentShader:V0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Vo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends Si{constructor(e,t){super();const i=this;let s=null,o=1,a=null,r="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null;const v=new G0,f=t.getContextAttributes();let d=null,x=null;const y=[],S=[],E=new Oe;let M=null;const A=new Wt;A.layers.enable(1),A.viewport=new st;const R=new Wt;R.layers.enable(2),R.viewport=new st;const P=[A,R],_=new B0;_.layers.enable(1),_.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let k=y[K];return k===void 0&&(k=new La,y[K]=k),k.getTargetRaySpace()},this.getControllerGrip=function(K){let k=y[K];return k===void 0&&(k=new La,y[K]=k),k.getGripSpace()},this.getHand=function(K){let k=y[K];return k===void 0&&(k=new La,y[K]=k),k.getHandSpace()};function O(K){const k=S.indexOf(K.inputSource);if(k===-1)return;const Y=y[k];Y!==void 0&&(Y.update(K.inputSource,K.frame,c||a),Y.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",G);for(let K=0;K<y.length;K++){const k=S[K];k!==null&&(S[K]=null,y[K].disconnect(k))}b=null,I=null,v.reset(),e.setRenderTarget(d),m=null,u=null,p=null,s=null,x=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",D),s.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const k={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new _i(m.framebufferWidth,m.framebufferHeight,{format:rn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let k=null,Y=null,$=null;f.depth&&($=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=f.stencil?is:Yi,Y=f.stencil?ns:gi);const he={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:o};p=new XRWebGLBinding(s,t),u=p.createProjectionLayer(he),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new _i(u.textureWidth,u.textureHeight,{format:rn,type:wn,depthTexture:new Wh(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(r),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(K){for(let k=0;k<K.removed.length;k++){const Y=K.removed[k],$=S.indexOf(Y);$>=0&&(S[$]=null,y[$].disconnect(Y))}for(let k=0;k<K.added.length;k++){const Y=K.added[k];let $=S.indexOf(Y);if($===-1){for(let ve=0;ve<y.length;ve++)if(ve>=S.length){S.push(Y),$=ve;break}else if(S[ve]===null){S[ve]=Y,$=ve;break}if($===-1)break}const he=y[$];he&&he.connect(Y)}}const F=new U,X=new U;function V(K,k,Y){F.setFromMatrixPosition(k.matrixWorld),X.setFromMatrixPosition(Y.matrixWorld);const $=F.distanceTo(X),he=k.projectionMatrix.elements,ve=Y.projectionMatrix.elements,be=he[14]/(he[10]-1),ze=he[14]/(he[10]+1),Ne=(he[9]+1)/he[5],N=(he[9]-1)/he[5],lt=(he[8]-1)/he[0],Ve=(ve[8]+1)/ve[0],Ge=be*lt,Ae=be*Ve,et=$/(-lt+Ve),we=et*-lt;if(k.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),he[10]===-1)K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const w=be+et,T=ze+et,W=Ge-we,Q=Ae+($-we),ne=Ne*ze/T*w,J=N*ze/T*w;K.projectionMatrix.makePerspective(W,Q,ne,J,w,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ie(K,k){k===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(k.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let k=K.near,Y=K.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(Y=v.depthFar)),_.near=R.near=A.near=k,_.far=R.far=A.far=Y,(b!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,I=_.far);const $=K.parent,he=_.cameras;ie(_,$);for(let ve=0;ve<he.length;ve++)ie(he[ve],$);he.length===2?V(_,A,R):_.projectionMatrix.copy(A.projectionMatrix),re(K,_,$)};function re(K,k,Y){Y===null?K.matrix.copy(k.matrixWorld):(K.matrix.copy(Y.matrixWorld),K.matrix.invert(),K.matrix.multiply(k.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(k.projectionMatrix),K.projectionMatrixInverse.copy(k.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let se=null;function Me(K,k){if(h=k.getViewerPose(c||a),g=k,h!==null){const Y=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let $=!1;Y.length!==_.cameras.length&&(_.cameras.length=0,$=!0);for(let ve=0;ve<Y.length;ve++){const be=Y[ve];let ze=null;if(m!==null)ze=m.getViewport(be);else{const N=p.getViewSubImage(u,be);ze=N.viewport,ve===0&&(e.setRenderTargetTextures(x,N.colorTexture,u.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(x))}let Ne=P[ve];Ne===void 0&&(Ne=new Wt,Ne.layers.enable(ve),Ne.viewport=new st,P[ve]=Ne),Ne.matrix.fromArray(be.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(be.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ze.x,ze.y,ze.width,ze.height),ve===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),$===!0&&_.cameras.push(Ne)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){const ve=p.getDepthInformation(Y[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,s.renderState)}}for(let Y=0;Y<y.length;Y++){const $=S[Y],he=y[Y];$!==null&&he!==void 0&&he.update($,k,c||a)}se&&se(K,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const De=new Vh;De.setAnimationLoop(Me),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const ni=new hn,X0=new je;function q0(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Bh(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,x,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(f,d):d.isMeshToonMaterial?(o(f,d),p(f,d)):d.isMeshPhongMaterial?(o(f,d),h(f,d)):d.isMeshStandardMaterial?(o(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(o(f,d),g(f,d)):d.isMeshDepthMaterial?o(f,d):d.isMeshDistanceMaterial?(o(f,d),v(f,d)):d.isMeshNormalMaterial?o(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&r(f,d)):d.isPointsMaterial?l(f,d,x,y):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Lt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Lt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,S=x.envMapRotation;y&&(f.envMap.value=y,ni.copy(S),ni.x*=-1,ni.y*=-1,ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),f.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ni)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function r(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,x,y){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*x,f.scale.value=y*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,x){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){const x=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z0(n,e,t,i){let s={},o={},a=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const S=y.program;i.uniformBlockBinding(x,S)}function c(x,y){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",f));const E=y.program;i.updateUBOMapping(x,E);const M=e.render.frame;o[x.id]!==M&&(u(x),o[x.id]=M)}function h(x){const y=p();x.__bindingPointIndex=y;const S=n.createBuffer(),E=x.__size,M=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function p(){for(let x=0;x<r;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=s[x.id],S=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,A=S.length;M<A;M++){const R=Array.isArray(S[M])?S[M]:[S[M]];for(let P=0,_=R.length;P<_;P++){const b=R[P];if(m(b,M,P,E)===!0){const I=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let G=0;G<O.length;G++){const F=O[G],X=v(F);typeof F=="number"||typeof F=="boolean"?(b.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,I+D,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=0,b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=0,b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=0):(F.toArray(b.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,y,S,E){const M=x.value,A=y+"_"+S;if(E[A]===void 0)return typeof M=="number"||typeof M=="boolean"?E[A]=M:E[A]=M.clone(),!0;{const R=E[A];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return E[A]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(x){const y=x.uniforms;let S=0;const E=16;for(let A=0,R=y.length;A<R;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,b=P.length;_<b;_++){const I=P[_],O=Array.isArray(I.value)?I.value:[I.value];for(let D=0,G=O.length;D<G;D++){const F=O[D],X=v(F),V=S%E,ie=V%X.boundary,re=V+ie;S+=ie,re!==0&&E-re<X.storage&&(S+=E-re),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=X.storage}}}const M=S%E;return M>0&&(S+=E-M),x.__size=S,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function f(x){const y=x.target;y.removeEventListener("dispose",f);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},o={}}return{bind:l,update:c,dispose:d}}class $0{constructor(e={}){const{canvas:t=Du(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Gn,this.toneMappingExposure=1;const y=this;let S=!1,E=0,M=0,A=null,R=-1,P=null;const _=new st,b=new st;let I=null;const O=new ke(0);let D=0,G=t.width,F=t.height,X=1,V=null,ie=null;const re=new st(0,0,G,F),se=new st(0,0,G,F);let Me=!1;const De=new dl;let K=!1,k=!1;const Y=new je,$=new je,he=new U,ve=new st,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Ne(){return A===null?X:1}let N=i;function lt(C,B){return t.getContext(C,B)}try{const C={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const B="webgl2";if(N=lt(B,C),N===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,Ge,Ae,et,we,w,T,W,Q,ne,J,ye,le,fe,We,oe,ge,Le,Ie,_e,Xe,Ue,ot,H;function pe(){Ve=new Qm(N),Ve.init(),Ue=new H0(N,Ve),Ge=new Zm(N,Ve,e,Ue),Ae=new N0(N),Ge.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),et=new ng(N),we=new y0,w=new F0(N,Ve,Ae,we,Ge,Ue,et),T=new Ym(y),W=new Jm(y),Q=new cf(N),ot=new Xm(N,Q),ne=new eg(N,Q,et,ot),J=new sg(N,ne,Q,et),Ie=new ig(N,Ge,w),oe=new $m(we),ye=new x0(y,T,W,Ve,Ge,ot,oe),le=new q0(y,we),fe=new M0,We=new w0(Ve),Le=new Wm(y,T,W,Ae,J,u,l),ge=new I0(y,J,Ge),H=new Z0(N,et,Ge,Ae),_e=new qm(N,Ve,et),Xe=new tg(N,Ve,et),et.programs=ye.programs,y.capabilities=Ge,y.extensions=Ve,y.properties=we,y.renderLists=fe,y.shadowMap=ge,y.state=Ae,y.info=et}pe();const j=new W0(y,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(G,F,!1))},this.getSize=function(C){return C.set(G,F)},this.setSize=function(C,B,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,F=B,t.width=Math.floor(C*X),t.height=Math.floor(B*X),q===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(G*X,F*X).floor()},this.setDrawingBufferSize=function(C,B,q){G=C,F=B,X=q,t.width=Math.floor(C*q),t.height=Math.floor(B*q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(_)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,B,q,Z){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,B,q,Z),Ae.viewport(_.copy(re).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,B,q,Z){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,B,q,Z),Ae.scissor(b.copy(se).multiplyScalar(X).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){Ae.setScissorTest(Me=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,B=!0,q=!0){let Z=0;if(C){let z=!1;if(A!==null){const ae=A.texture.format;z=ae===rl||ae===al||ae===ol}if(z){const ae=A.texture.type,ue=ae===wn||ae===gi||ae===Ps||ae===ns||ae===nl||ae===il,xe=Le.getClearColor(),Se=Le.getClearAlpha(),Re=xe.r,Pe=xe.g,Ee=xe.b;ue?(m[0]=Re,m[1]=Pe,m[2]=Ee,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Re,g[1]=Pe,g[2]=Ee,g[3]=Se,N.clearBufferiv(N.COLOR,0,g))}else Z|=N.COLOR_BUFFER_BIT}B&&(Z|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",me,!1),fe.dispose(),We.dispose(),we.dispose(),T.dispose(),W.dispose(),J.dispose(),ot.dispose(),H.dispose(),ye.dispose(),j.dispose(),j.removeEventListener("sessionstart",Pl),j.removeEventListener("sessionend",Ol),jn.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=et.autoReset,B=ge.enabled,q=ge.autoUpdate,Z=ge.needsUpdate,z=ge.type;pe(),et.autoReset=C,ge.enabled=B,ge.autoUpdate=q,ge.needsUpdate=Z,ge.type=z}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const B=C.target;B.removeEventListener("dispose",qe),ft(B)}function ft(C){Dt(C),we.remove(C)}function Dt(C){const B=we.get(C).programs;B!==void 0&&(B.forEach(function(q){ye.releaseProgram(q)}),C.isShaderMaterial&&ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,q,Z,z,ae){B===null&&(B=be);const ue=z.isMesh&&z.matrixWorld.determinant()<0,xe=zd(C,B,q,Z,z);Ae.setMaterial(Z,ue);let Se=q.index,Re=1;if(Z.wireframe===!0){if(Se=ne.getWireframeAttribute(q),Se===void 0)return;Re=2}const Pe=q.drawRange,Ee=q.attributes.position;let tt=Pe.start*Re,at=(Pe.start+Pe.count)*Re;ae!==null&&(tt=Math.max(tt,ae.start*Re),at=Math.min(at,(ae.start+ae.count)*Re)),Se!==null?(tt=Math.max(tt,0),at=Math.min(at,Se.count)):Ee!=null&&(tt=Math.max(tt,0),at=Math.min(at,Ee.count));const ht=at-tt;if(ht<0||ht===1/0)return;ot.setup(z,Z,xe,q,Se);let kt,Ke=_e;if(Se!==null&&(kt=Q.get(Se),Ke=Xe,Ke.setIndex(kt)),z.isMesh)Z.wireframe===!0?(Ae.setLineWidth(Z.wireframeLinewidth*Ne()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(z.isLine){let Te=Z.linewidth;Te===void 0&&(Te=1),Ae.setLineWidth(Te*Ne()),z.isLineSegments?Ke.setMode(N.LINES):z.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else z.isPoints?Ke.setMode(N.POINTS):z.isSprite&&Ke.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ke.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Te=z._multiDrawStarts,Tt=z._multiDrawCounts,Je=z._multiDrawCount,Qt=Se?Q.get(Se).bytesPerElement:1,Ei=we.get(Z).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)Ei.setValue(N,"_gl_DrawID",zt),Ke.render(Te[zt]/Qt,Tt[zt])}else if(z.isInstancedMesh)Ke.renderInstances(tt,ht,z.count);else if(q.isInstancedBufferGeometry){const Te=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,Te);Ke.renderInstances(tt,ht,Tt)}else Ke.render(tt,ht)};function Ye(C,B,q){C.transparent===!0&&C.side===Tn&&C.forceSinglePass===!1?(C.side=Lt,C.needsUpdate=!0,Bs(C,B,q),C.side=Xn,C.needsUpdate=!0,Bs(C,B,q),C.side=Tn):Bs(C,B,q)}this.compile=function(C,B,q=null){q===null&&(q=C),f=We.get(q),f.init(B),x.push(f),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),C!==q&&C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const Z=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let ue=0;ue<ae.length;ue++){const xe=ae[ue];Ye(xe,q,z),Z.add(xe)}else Ye(ae,q,z),Z.add(ae)}),x.pop(),f=null,Z},this.compileAsync=function(C,B,q=null){const Z=this.compile(C,B,q);return new Promise(z=>{function ae(){if(Z.forEach(function(ue){we.get(ue).currentProgram.isReady()&&Z.delete(ue)}),Z.size===0){z(C);return}setTimeout(ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Nt=null;function vn(C){Nt&&Nt(C)}function Pl(){jn.stop()}function Ol(){jn.start()}const jn=new Vh;jn.setAnimationLoop(vn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){Nt=C,j.setAnimationLoop(C),C===null?jn.stop():jn.start()},j.addEventListener("sessionstart",Pl),j.addEventListener("sessionend",Ol),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,A),f=We.get(C,x.length),f.init(B),x.push(f),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),De.setFromProjectionMatrix($),k=this.localClippingEnabled,K=oe.init(this.clippingPlanes,k),v=fe.get(C,d.length),v.init(),d.push(v),j.enabled===!0&&j.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Qo(ae,B,-1/0,y.sortObjects)}Qo(C,B,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(V,ie),ze=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ze&&Le.addToRenderList(v,C),this.info.render.frame++,K===!0&&oe.beginShadows();const q=f.state.shadowsArray;ge.render(q,C,B),K===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,z=v.transmissive;if(f.setupLights(),B.isArrayCamera){const ae=B.cameras;if(z.length>0)for(let ue=0,xe=ae.length;ue<xe;ue++){const Se=ae[ue];Il(Z,z,C,Se)}ze&&Le.render(C);for(let ue=0,xe=ae.length;ue<xe;ue++){const Se=ae[ue];Ll(v,C,Se,Se.viewport)}}else z.length>0&&Il(Z,z,C,B),ze&&Le.render(C),Ll(v,C,B);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,B),ot.resetDefaultState(),R=-1,P=null,x.pop(),x.length>0?(f=x[x.length-1],K===!0&&oe.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Qo(C,B,q,Z){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){Z&&ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const ue=J.update(C),xe=C.material;xe.visible&&v.push(C,ue,xe,q,ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const ue=J.update(C),xe=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ve.copy(C.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ve.copy(ue.boundingSphere.center)),ve.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(xe)){const Se=ue.groups;for(let Re=0,Pe=Se.length;Re<Pe;Re++){const Ee=Se[Re],tt=xe[Ee.materialIndex];tt&&tt.visible&&v.push(C,ue,tt,q,ve.z,Ee)}}else xe.visible&&v.push(C,ue,xe,q,ve.z,null)}}const ae=C.children;for(let ue=0,xe=ae.length;ue<xe;ue++)Qo(ae[ue],B,q,Z)}function Ll(C,B,q,Z){const z=C.opaque,ae=C.transmissive,ue=C.transparent;f.setupLightsView(q),K===!0&&oe.setGlobalState(y.clippingPlanes,q),Z&&Ae.viewport(_.copy(Z)),z.length>0&&Hs(z,B,q),ae.length>0&&Hs(ae,B,q),ue.length>0&&Hs(ue,B,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Il(C,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new _i(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ls:wn,minFilter:hi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ae=f.state.transmissionRenderTarget[Z.id],ue=Z.viewport||_;ae.setSize(ue.z,ue.w);const xe=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(O),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),ze&&Le.render(q);const Se=y.toneMapping;y.toneMapping=Gn;const Re=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),K===!0&&oe.setGlobalState(y.clippingPlanes,Z),Hs(C,q,Z),w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ee=0,tt=B.length;Ee<tt;Ee++){const at=B[Ee],ht=at.object,kt=at.geometry,Ke=at.material,Te=at.group;if(Ke.side===Tn&&ht.layers.test(Z.layers)){const Tt=Ke.side;Ke.side=Lt,Ke.needsUpdate=!0,Dl(ht,q,Z,kt,Ke,Te),Ke.side=Tt,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae))}y.setRenderTarget(xe),y.setClearColor(O,D),Re!==void 0&&(Z.viewport=Re),y.toneMapping=Se}function Hs(C,B,q){const Z=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ae=C.length;z<ae;z++){const ue=C[z],xe=ue.object,Se=ue.geometry,Re=Z===null?ue.material:Z,Pe=ue.group;xe.layers.test(q.layers)&&Dl(xe,B,q,Se,Re,Pe)}}function Dl(C,B,q,Z,z,ae){C.onBeforeRender(y,B,q,Z,z,ae),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(y,B,q,Z,C,ae),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,y.renderBufferDirect(q,B,Z,z,C,ae),z.side=Xn,z.needsUpdate=!0,y.renderBufferDirect(q,B,Z,z,C,ae),z.side=Tn):y.renderBufferDirect(q,B,Z,z,C,ae),C.onAfterRender(y,B,q,Z,z,ae)}function Bs(C,B,q){B.isScene!==!0&&(B=be);const Z=we.get(C),z=f.state.lights,ae=f.state.shadowsArray,ue=z.state.version,xe=ye.getParameters(C,z.state,ae,B,q),Se=ye.getProgramCacheKey(xe);let Re=Z.programs;Z.environment=C.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(C.isMeshStandardMaterial?W:T).get(C.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Re===void 0&&(C.addEventListener("dispose",qe),Re=new Map,Z.programs=Re);let Pe=Re.get(Se);if(Pe!==void 0){if(Z.currentProgram===Pe&&Z.lightsStateVersion===ue)return Ul(C,xe),Pe}else xe.uniforms=ye.getUniforms(C),C.onBeforeCompile(xe,y),Pe=ye.acquireProgram(xe,Se),Re.set(Se,Pe),Z.uniforms=xe.uniforms;const Ee=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Ul(C,xe),Z.needsLights=Gd(C),Z.lightsStateVersion=ue,Z.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.directionalShadowMap.value=z.state.directionalShadowMap,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotShadowMap.value=z.state.spotShadowMap,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMap.value=z.state.pointShadowMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Pe,Z.uniformsList=null,Pe}function Nl(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=bo.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Ul(C,B){const q=we.get(C);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function zd(C,B,q,Z,z){B.isScene!==!0&&(B=be),w.resetTextureUnits();const ae=B.fog,ue=Z.isMeshStandardMaterial?B.environment:null,xe=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yn,Se=(Z.isMeshStandardMaterial?W:T).get(Z.envMap||ue),Re=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ee=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,at=!!q.morphAttributes.color;let ht=Gn;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ht=y.toneMapping);const kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ke=kt!==void 0?kt.length:0,Te=we.get(Z),Tt=f.state.lights;if(K===!0&&(k===!0||C!==P)){const Zt=C===P&&Z.id===R;oe.setState(Z,C,Zt)}let Je=!1;Z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Tt.state.version||Te.outputColorSpace!==xe||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Se||Z.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==oe.numPlanes||Te.numIntersection!==oe.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Pe||Te.morphTargets!==Ee||Te.morphNormals!==tt||Te.morphColors!==at||Te.toneMapping!==ht||Te.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Te.__version=Z.version);let Qt=Te.currentProgram;Je===!0&&(Qt=Bs(Z,B,z));let Ei=!1,zt=!1,ea=!1;const dt=Qt.getUniforms(),On=Te.uniforms;if(Ae.useProgram(Qt.program)&&(Ei=!0,zt=!0,ea=!0),Z.id!==R&&(R=Z.id,zt=!0),Ei||P!==C){Ge.reverseDepthBuffer?(Y.copy(C.projectionMatrix),Uu(Y),Fu(Y),dt.setValue(N,"projectionMatrix",Y)):dt.setValue(N,"projectionMatrix",C.projectionMatrix),dt.setValue(N,"viewMatrix",C.matrixWorldInverse);const Zt=dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(N,he.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,zt=!0,ea=!0)}if(z.isSkinnedMesh){dt.setOptional(N,z,"bindMatrix"),dt.setOptional(N,z,"bindMatrixInverse");const Zt=z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),dt.setValue(N,"boneTexture",Zt.boneTexture,w))}z.isBatchedMesh&&(dt.setOptional(N,z,"batchingTexture"),dt.setValue(N,"batchingTexture",z._matricesTexture,w),dt.setOptional(N,z,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",z._indirectTexture,w),dt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",z._colorsTexture,w));const ta=q.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Ie.update(z,q,Qt),(zt||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,dt.setValue(N,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(On.envMap.value=Se,On.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(On.envMapIntensity.value=B.environmentIntensity),zt&&(dt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Vd(On,ea),ae&&Z.fog===!0&&le.refreshFogUniforms(On,ae),le.refreshMaterialUniforms(On,Z,X,F,f.state.transmissionRenderTarget[C.id]),bo.upload(N,Nl(Te),On,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(bo.upload(N,Nl(Te),On,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(N,"center",z.center),dt.setValue(N,"modelViewMatrix",z.modelViewMatrix),dt.setValue(N,"normalMatrix",z.normalMatrix),dt.setValue(N,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Zt=Z.uniformsGroups;for(let na=0,Wd=Zt.length;na<Wd;na++){const Fl=Zt[na];H.update(Fl,Qt),H.bind(Fl,Qt)}}return Qt}function Vd(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Gd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,q){we.get(C.texture).__webglTexture=B,we.get(C.depthTexture).__webglTexture=q;const Z=we.get(C);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const q=we.get(C);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,q=0){A=C,E=B,M=q;let Z=!0,z=null,ae=!1,ue=!1;if(C){const Se=we.get(C);if(Se.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(Se.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Se.__hasExternalTextures)w.rebindTextures(C,we.get(C.texture).__webglTexture,we.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ee=C.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&we.has(Ee)&&(C.width!==Ee.image.width||C.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Re=C.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ue=!0);const Pe=we.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?z=Pe[B][q]:z=Pe[B],ae=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?z=we.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[q]:z=Pe,_.copy(C.viewport),b.copy(C.scissor),I=C.scissorTest}else _.copy(re).multiplyScalar(X).floor(),b.copy(se).multiplyScalar(X).floor(),I=Me;if(Ae.bindFramebuffer(N.FRAMEBUFFER,z)&&Z&&Ae.drawBuffers(C,z),Ae.viewport(_),Ae.scissor(b),Ae.setScissorTest(I),ae){const Se=we.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,q)}else if(ue){const Se=we.get(C.texture),Re=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,q||0,Re)}R=-1},this.readRenderTargetPixels=function(C,B,q,Z,z,ae,ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Ae.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Se=C.texture,Re=Se.format,Pe=Se.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Z&&q>=0&&q<=C.height-z&&N.readPixels(B,q,Z,z,Ue.convert(Re),Ue.convert(Pe),ae)}finally{const Se=A!==null?we.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(C,B,q,Z,z,ae,ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const Se=C.texture,Re=Se.format,Pe=Se.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-Z&&q>=0&&q<=C.height-z){Ae.bindFramebuffer(N.FRAMEBUFFER,xe);const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(B,q,Z,z,Ue.convert(Re),Ue.convert(Pe),0);const tt=A!==null?we.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(N.FRAMEBUFFER,tt);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nu(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(Ee),N.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,q=0){C.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const Z=Math.pow(2,-q),z=Math.floor(C.image.width*Z),ae=Math.floor(C.image.height*Z),ue=B!==null?B.x:0,xe=B!==null?B.y:0;w.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ue,xe,z,ae),Ae.unbindTexture()},this.copyTextureToTexture=function(C,B,q=null,Z=null,z=0){C.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1],B=arguments[2],z=arguments[3]||0,q=null);let ae,ue,xe,Se,Re,Pe;q!==null?(ae=q.max.x-q.min.x,ue=q.max.y-q.min.y,xe=q.min.x,Se=q.min.y):(ae=C.image.width,ue=C.image.height,xe=0,Se=0),Z!==null?(Re=Z.x,Pe=Z.y):(Re=0,Pe=0);const Ee=Ue.convert(B.format),tt=Ue.convert(B.type);w.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const at=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),kt=N.getParameter(N.UNPACK_SKIP_PIXELS),Ke=N.getParameter(N.UNPACK_SKIP_ROWS),Te=N.getParameter(N.UNPACK_SKIP_IMAGES),Tt=C.isCompressedTexture?C.mipmaps[z]:C.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Tt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Re,Pe,ae,ue,Ee,tt,Tt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Re,Pe,Tt.width,Tt.height,Ee,Tt.data):N.texSubImage2D(N.TEXTURE_2D,z,Re,Pe,ae,ue,Ee,tt,Tt),N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,kt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Te),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,B,q=null,Z=null,z=0){C.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,C=arguments[2],B=arguments[3],z=arguments[4]||0);let ae,ue,xe,Se,Re,Pe,Ee,tt,at;const ht=C.isCompressedTexture?C.mipmaps[z]:C.image;q!==null?(ae=q.max.x-q.min.x,ue=q.max.y-q.min.y,xe=q.max.z-q.min.z,Se=q.min.x,Re=q.min.y,Pe=q.min.z):(ae=ht.width,ue=ht.height,xe=ht.depth,Se=0,Re=0,Pe=0),Z!==null?(Ee=Z.x,tt=Z.y,at=Z.z):(Ee=0,tt=0,at=0);const kt=Ue.convert(B.format),Ke=Ue.convert(B.type);let Te;if(B.isData3DTexture)w.setTexture3D(B,0),Te=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)w.setTexture2DArray(B,0),Te=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Tt=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qt=N.getParameter(N.UNPACK_SKIP_PIXELS),Ei=N.getParameter(N.UNPACK_SKIP_ROWS),zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe),C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Te,z,Ee,tt,at,ae,ue,xe,kt,Ke,ht.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,z,Ee,tt,at,ae,ue,xe,kt,ht.data):N.texSubImage3D(Te,z,Ee,tt,at,ae,ue,xe,kt,Ke,ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,Tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt),z===0&&B.generateMipmaps&&N.generateMipmap(Te),Ae.unbindTexture()},this.initRenderTarget=function(C){we.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){E=0,M=0,A=null,Ae.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===ko?"display-p3":"srgb"}}class Yh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y0 extends It{constructor(e=null,t=1,i=1,s,o,a,r,l,c=Bt,h=Bt,p,u){super(null,a,r,l,c,h,s,o,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new je,Oc=new je,ro=[],Lc=new Mi,j0=new je,Ss=new $e,Ms=new hs;class K0 extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,j0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),Lc.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),Ms.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,a=e*o+1;for(let r=0;r<i.length;r++)i[r]=s[a+r]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),e.ray.intersectsSphere(Ms)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Bi),Oc.multiplyMatrices(i,Bi),Ss.matrixWorld=Oc,Ss.raycast(e,ro);for(let a=0,r=ro.length;a<r;a++){const l=ro[a];l.instanceId=o,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Y0(new Float32Array(s*this.count),s,this.count,sl,mn));const o=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=s*e;o[l]=r,o.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jh extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ic=new je,Ur=new zo,lo=new hs,co=new U;class J0 extends Et{constructor(e=new Jt,t=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(s),lo.radius+=o,e.ray.intersectsSphere(lo)===!1)return;Ic.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Ic);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,v=m;g<v;g++){const f=c.getX(g);co.fromBufferAttribute(p,f),Dc(co,f,l,s,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,v=m;g<v;g++)co.fromBufferAttribute(p,g),Dc(co,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Dc(n,e,t,i,s,o,a){const r=Ur.distanceSqToPoint(n);if(r<t){const l=new U;Ur.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wo extends Jt{constructor(e=1,t=1,i=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],p=[],u=[],m=[];let g=0;const v=[],f=i/2;let d=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(m,2));function x(){const S=new U,E=new U;let M=0;const A=(t-e)/i;for(let R=0;R<=o;R++){const P=[],_=R/o,b=_*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,D=O*l+r,G=Math.sin(D),F=Math.cos(D);E.x=b*G,E.y=-_*i+f,E.z=b*F,p.push(E.x,E.y,E.z),S.set(G,A,F).normalize(),u.push(S.x,S.y,S.z),m.push(O,1-_),P.push(g++)}v.push(P)}for(let R=0;R<s;R++)for(let P=0;P<o;P++){const _=v[P][R],b=v[P+1][R],I=v[P+1][R+1],O=v[P][R+1];e>0&&(h.push(_,b,O),M+=3),t>0&&(h.push(b,I,O),M+=3)}c.addGroup(d,M,0),d+=M}function y(S){const E=g,M=new Oe,A=new U;let R=0;const P=S===!0?e:t,_=S===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,f*_,0),u.push(0,_,0),m.push(.5,.5),g++;const b=g;for(let I=0;I<=s;I++){const D=I/s*l+r,G=Math.cos(D),F=Math.sin(D);A.x=P*F,A.y=f*_,A.z=P*G,p.push(A.x,A.y,A.z),u.push(0,_,0),M.x=G*.5+.5,M.y=F*.5*_+.5,m.push(M.x,M.y),g++}for(let I=0;I<s;I++){const O=E+I,D=b+I;S===!0?h.push(D,D+1,O):h.push(D+1,D,O),R+=3}c.addGroup(d,R,S===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends Jt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let c=0;const h=[],p=new U,u=new U,m=[],g=[],v=[],f=[];for(let d=0;d<=i;d++){const x=[],y=d/i;let S=0;d===0&&a===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){const M=E/t;p.x=-e*Math.cos(s+M*o)*Math.sin(a+y*r),p.y=e*Math.cos(a+y*r),p.z=e*Math.sin(s+M*o)*Math.sin(a+y*r),g.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),f.push(M+S,1-y),x.push(c++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const y=h[d][x+1],S=h[d][x],E=h[d+1][x],M=h[d+1][x+1];(d!==0||a>0)&&m.push(y,S,M),(d!==i-1||l<Math.PI)&&m.push(S,E,M)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fl extends Jt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],r=[],l=[],c=[],h=new U,p=new U,u=new U;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const v=g/s*o,f=m/i*Math.PI*2;p.x=(e+t*Math.cos(f))*Math.cos(v),p.y=(e+t*Math.cos(f))*Math.sin(v),p.z=t*Math.sin(f),r.push(p.x,p.y,p.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(p,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,f=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,x=(s+1)*m+g;a.push(v,f,x),a.push(f,d,x)}this.setIndex(a),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class os extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kh extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pl extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ia=new je,Nc=new U,Uc=new U;class Jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fc=new je,bs=new U,Da=new U;class Q0 extends Jh{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),i.position.copy(bs),Da.copy(i.position),Da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Da),i.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}}class e_ extends pl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Q0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t_ extends Jh{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Na extends pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new t_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n_ extends pl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class i_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hc(){return performance.now()}const Bc=new je;class s_{constructor(e,t,i=0,s=1/0){this.ray=new zo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(e,t=!0,i=[]){return Fr(e,this,i,t),i.sort(kc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,o=e.length;s<o;s++)Fr(e[s],this,i,t);return i.sort(kc),i}}function kc(n,e){return n.distance-e.distance}function Fr(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const o=n.children;for(let a=0,r=o.length;a<r;a++)Fr(o[a],e,t,!0)}}class zc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o_ extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const Vc={type:"change"},ml={type:"start"},Qh={type:"end"},ho=new zo,Gc=new Hn,a_=Math.cos(70*Iu.DEG2RAD),mt=new U,Ft=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ua=1e-6;class r_ extends o_{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new qn,this._lastTargetPosition=new U,this._quat=new qn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zc,this._sphericalDelta=new zc,this._scale=1,this._panOffset=new U,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new U,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=h_.bind(this),this._onContextMenu=__.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=d_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=v_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;mt.copy(t).sub(this.target),mt.applyQuaternion(this._quat),this._spherical.setFromVector3(mt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ft:i>Math.PI&&(i-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(mt.setFromSpherical(this._spherical),mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const r=mt.length();a=this._clampDistance(r*this._scale);const l=r-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const r=new U(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),a=mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ho.origin.copy(this.object.position),ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ho.direction))<a_?this.object.lookAt(this.target):(Gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ho.intersectPlane(Gc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ua||this._lastTargetPosition.distanceToSquared(this.target)>Ua?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mt.setFromMatrixColumn(t,0),mt.multiplyScalar(-e),this._panOffset.add(mt)}_panUp(e,t){this.screenSpacePanning===!0?mt.setFromMatrixColumn(t,1):(mt.setFromMatrixColumn(t,0),mt.crossVectors(this.object.up,mt)),mt.multiplyScalar(e),this._panOffset.add(mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;mt.copy(s).sub(this.target);let o=mt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,a=i.width,r=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function l_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function c_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function h_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qh),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function d_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(ml)}function u_(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function f_(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(ml),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qh))}function p_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function m_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(ml)}function g_(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function __(n){this.enabled!==!1&&n.preventDefault()}function v_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class as extends Et{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Oe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const ki=new U,Wc=new je,Xc=new je,qc=new U,Zc=new U;class y_{constructor(e={}){const t=this;let i,s,o,a;const r={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Wc.copy(v.matrixWorldInverse),Xc.multiplyMatrices(v.projectionMatrix,Wc),h(g,g,v),m(g)},this.setSize=function(g,v){i=g,s=v,o=i/2,a=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,f=g.children.length;v<f;v++)c(g.children[v])}function h(g,v,f){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ki.setFromMatrixPosition(g.matrixWorld),ki.applyMatrix4(Xc);const d=ki.z>=-1&&ki.z<=1&&g.layers.test(f.layers)===!0,x=g.element;x.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(t,v,f),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ki.x*o+o)+"px,"+(-ki.y*a+a)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(t,v,f));const y={distanceToCameraSquared:p(f,g)};r.objects.set(g,y)}for(let d=0,x=g.children.length;d<x;d++)h(g.children[d],v,f)}function p(g,v){return qc.setFromMatrixPosition(g.matrixWorld),Zc.setFromMatrixPosition(v.matrixWorld),qc.distanceToSquared(Zc)}function u(g){const v=[];return g.traverseVisible(function(f){f.isCSS2DObject&&v.push(f)}),v}function m(g){const v=u(g).sort(function(d,x){if(d.renderOrder!==x.renderOrder)return x.renderOrder-d.renderOrder;const y=r.objects.get(d).distanceToCameraSquared,S=r.objects.get(x).distanceToCameraSquared;return y-S}),f=v.length;for(let d=0,x=v.length;d<x;d++)v[d].element.style.zIndex=f-d}}}class S_ extends Yh{constructor(){super();const e=new ds;e.deleteAttribute("uv");const t=new os({side:Lt}),i=new os,s=new e_(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new $e(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const a=new $e(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const r=new $e(e,i);r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),this.add(r);const l=new $e(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new $e(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new $e(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new $e(e,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const u=new $e(e,zi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const m=new $e(e,zi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new $e(e,zi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new $e(e,zi(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const f=new $e(e,zi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new $e(e,zi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function zi(n){const e=new Os;return e.color.setScalar(n),e}function M_(n){const e=new Yh,t=new Wt(50,1,.1,200);t.position.set(0,2.5,9);const i=new $0({antialias:!0,alpha:!0,powerPreference:"high-performance"});let s=Math.min(window.devicePixelRatio,1.5);i.setPixelRatio(s),n.appendChild(i.domElement);const o=new y_;o.domElement.className="labels3d",n.appendChild(o.domElement);const a=new r_(t,i.domElement);a.enableDamping=!0,a.dampingFactor=.12,a.enablePan=!1,a.minDistance=3,a.maxDistance=40;const r=new n_(16777215,.62);e.add(r);const l=new Na(16777215,1.55);l.position.set(4,6,5),e.add(l);const c=new Na(8956671,.45);c.position.set(-5,-3,-4),e.add(c);const h=new Na(10475775,.75);h.position.set(-3,4,-6),e.add(h);const p=new Cn;e.add(p);const m=new Dr(i).fromScene(new S_,.05).texture;e.environment=m,e.environmentIntensity=.5;let g=null;const v=new i_;let f=null;const d=new U;let x=0;const y=O=>{const D=t.fov*Math.PI/360,G=Math.atan(Math.tan(D)*t.aspect);return O/Math.tan(Math.min(D,G))*1.08},S=()=>{const O=n.clientWidth||1,D=n.clientHeight||1;if(t.aspect=O/D,t.updateProjectionMatrix(),i.setSize(O,D),o.setSize(O,D),!x)return;const G=t.position.clone().sub(a.target).normalize();t.position.copy(a.target).addScaledVector(G,Math.max(y(x),.5)),a.update()};new ResizeObserver(S).observe(n),S();let E=16,M=performance.now(),A=0,R=0;const P=new Map;let _=-1;const b=O=>{if(O-_<.1)return;_=O;const D=o.domElement.children;if(D.length<2){P.size&&P.clear();return}if(D.length>80)return;const G=new Map,F=[];for(const X of D){if(X.style.display==="none"||+X.style.opacity<.12)continue;const V=P.get(X)||{x:0,y:0},ie=X.getBoundingClientRect();if(ie.width<1)continue;const re={el:X,x:ie.left-V.x-3,y:ie.top-V.y-3,w:ie.width+6,h:ie.height+6,ox:0,oy:0};F.push(re),G.set(X,re)}for(let X=0;X<4;X++){let V=!1;for(let ie=0;ie<F.length;ie++)for(let re=ie+1;re<F.length;re++){const se=F[ie],Me=F[re],De=se.x+se.ox+se.w/2-(Me.x+Me.ox+Me.w/2),K=se.y+se.oy+se.h/2-(Me.y+Me.oy+Me.h/2),k=(se.w+Me.w)/2-Math.abs(De),Y=(se.h+Me.h)/2-Math.abs(K);if(!(k<=0||Y<=0))if(V=!0,Y<=k*1.6){const $=(K>=0?1:-1)*(Y/2+.5);se.oy+=$,Me.oy-=$}else{const $=(De>=0?1:-1)*(k/2+.5);se.ox+=$,Me.ox-=$}}if(!V)break}for(const X of F){const V=Math.max(-28,Math.min(28,X.ox)),ie=Math.max(-28,Math.min(28,X.oy));Math.abs(V)>.4||Math.abs(ie)>.4?X.el.style.translate=V.toFixed(1)+"px "+ie.toFixed(1)+"px":X.el.style.translate="",G.set(X.el,{x:V,y:ie})}P.clear();for(const[X,V]of G)P.set(X,V)},I=()=>{const O=performance.now(),D=Math.min(O-M,100);M=O,document.hidden||(E=E*.92+D*.08,A=E>26?A+1:0,R=E<9?R+1:0,A>90&&s>1?(s=Math.max(1,s-.25),i.setPixelRatio(s),E=16,A=0,R=0):R>300&&s<Math.min(window.devicePixelRatio,1.5)&&(s=Math.min(window.devicePixelRatio,1.5),i.setPixelRatio(s),R=0));const G=v.getElapsedTime();if(f){const F=Math.min(1,(O-f.t0)/f.ms),X=1-Math.pow(1-F,3);t.position.lerpVectors(f.from,f.to,X),d.lerpVectors(f.fromAim,f.toAim,X),a.target.copy(d),F>=1&&(f=null)}a.update(),g&&g(G),i.render(e,t),o.render(e,t),b(G)};return i.setAnimationLoop(I),{scene:e,root:p,camera:t,controls:a,renderer:i,labels:o,pause(){i.setAnimationLoop(null)},resume(){M=performance.now(),i.setAnimationLoop(I)},onTick(O){g=O},fitTo(O,D,G=700){x=D;const F=y(D)/Math.max(1e-4,Math.hypot(O[0],O[1],O[2]));f={from:t.position.clone(),to:new U(O[0]*F,O[1]*F,O[2]*F),fromAim:a.target.clone(),toAim:new U(0,0,0),t0:performance.now(),ms:G}},snapshot(){i.render(e,t);const O=i.domElement.width,D=i.domElement.height,G=document.createElement("canvas");G.width=O,G.height=D;const F=G.getContext("2d"),X=getComputedStyle(n),V=new Image,ie=i.domElement.toDataURL("image/png"),re=()=>{const se=n.getBoundingClientRect(),Me=O/se.width,De=D/se.height,K=F.createRadialGradient(O/2,D*.36,0,O/2,D*.36,Math.max(O,D)*.72);if(K.addColorStop(0,X.getPropertyValue("--panel").trim()||"#101619"),K.addColorStop(1,X.getPropertyValue("--bg").trim()||"#080c0e"),F.fillStyle=K,F.fillRect(0,0,O,D),!document.body.classList.contains("noGrid")){const k=(he,ve)=>{F.fillStyle=he;for(let be=0;be<se.width;be+=ve)F.fillRect(Math.round(be*Me),0,Math.max(1,Me),D);for(let be=0;be<se.height;be+=ve)F.fillRect(0,Math.round(be*De),O,Math.max(1,De))},Y=X.getPropertyValue("--gridFine").trim(),$=X.getPropertyValue("--gridBold").trim();Y&&k(Y,32),$&&k($,128)}F.drawImage(V,0,0),F.textAlign="center",F.textBaseline="middle",F.shadowColor="rgba(0,0,0,0.75)";for(const k of o.domElement.children){const Y=k.textContent;if(!Y||k.style.opacity==="0")continue;const $=k.getBoundingClientRect();if(!$.width)continue;const he=getComputedStyle(k);F.font=`${he.fontWeight} ${parseFloat(he.fontSize)*De}px ${he.fontFamily}`,F.shadowBlur=6*De,F.fillStyle=he.color,F.fillText(Y,($.left+$.width/2-se.left)*Me,($.top+$.height/2-se.top)*De)}G.toBlob(k=>{const Y=document.createElement("a");Y.href=URL.createObjectURL(k),Y.download="chemistry.png",Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),4e3)},"image/png")};V.onload=re,V.src=ie},setGridVisible(O){document.body.classList.toggle("noGrid",!O)},getGridVisible(){return!document.body.classList.contains("noGrid")},setLegacyLook(O){e.environment=O?null:m,r.intensity=O?1.05:.62,c.intensity=O?.22:.45,h.intensity=O?0:.75},clear(){for(;p.children.length;){const O=p.children.pop();O.traverse(D=>{var G,F,X,V;if(D.isCSS2DObject&&D.element&&D.element.remove(),(F=(G=D.geometry)==null?void 0:G.dispose)==null||F.call(G),D.material&&!((X=D.material.userData)!=null&&X.shared))for(const ie of Array.isArray(D.material)?D.material:[D.material])(V=ie.dispose)==null||V.call(ie)}),p.remove(O)}},add(...O){for(const D of O)p.add(D)}}}function vi(n,e){const t=document.createElement("div");return e&&(t.className=e),t.textContent=n,t}const Hr={ru:{metaTitle:"3D-визуализатор химии",brand:"3D-визуализатор химии",brandGrade:"8 класс",inputPlaceholder:"Формула: Al2(SO4)3, H2O…",inputAria:"Формула вещества",showBtn:"Показать",tabViz:"Визуализатор",exNum:"атомный номер",exSym:"символ",exName:"название",exMass:"атомная масса",rxBtnTitle:"Конструктор реакций",rxBtnText:"Реакции",guideBtnTitle:"Справочник",metaDesc:"3D-визуализатор химии: таблица Менделеева, 3D-атом и модели молекул по формуле с проверкой из школьного курса",titleFree:"вне школьных правил: только атомы по формуле",settingsTitle:"Настройки",settingsAria:"Настройки",stageHint:"Вращение — левая кнопка, приближение — колесо, информация — правая кнопка",infoClose:"Скрыть панель",infoShow:"Подробнее",shotBtnTitle:"Скачать картинку модели",tabTable:"Периодическая таблица",tabGuide:"Справочник",readElectrons:"электронов {n}",readShells:"оболочек {n}",readAtoms:"атомов {n}",readType:"тип: {type}",readBalOk:"баланс сходится",readBalBad:"баланс не сходится",titleAtom:"Атом: {name}",titleSimple:"Простое вещество: {f}",titleEnter:"Введи формулу",titleErr:"Ошибка ввода",titleImpossible:"Такое соединение построить нельзя",vOk:"Соединение возможно",vBad:"Соединение невозможно",vErr:"Ошибка ввода",hintSec:"Подсказка",rxBtn2Title:"Собрать реакции из веществ",rxBtn2Text:"Собрать реакцию",labHint:"Введи элементы или вещества (2–5 штук), выбери тип реакции — соберу все школьные реакции этого набора.",labPh:"Zn, HCl, CuO…",labNeed:"Введи хотя бы два вещества — по одному в каждом поле.",labNeedOne:"Введи вещество, которое нужно разложить.",labNone:"Школьной реакции этого типа с таким набором нет.",labNoneSub:"Правила проверяют: активный металл вытесняет, обмен идёт только если уходит осадок, газ или вода, для горения нужен кислород. Меняй тип, добавляй реагент или убирай лишнее — ниже подсказки.",labUnused:"Не участвуют: {list}",labBuild:"Собрать",labAdd:"Добавить вещество",labTypes:"Тип реакции",labWhyRightOfH:"не берёт водород из {other}: металл стоит правее H в ряду активности",labWhyMoreActive:"не вытесняется из {other}: этот металл активнее — он сам вытесняет",labWhyAlreadyOxide:"уже оксид — горение оксидов школьный курс не рассматривает",labWhyNeedO2:"для горения нужен {other} — добавь его в набор",labWhyNoDriving:"обмен с {other} не идёт: оба продукта растворимы и сильны — нет ни осадка, ни газа, ни воды",labWhyNotIonic:"не обменивается ионами с {other}: это не соль, не кислота и не основание — обмен идёт между ионными веществами",labWhyNoPartner:"нечего соединять: в наборе нет пары (второго простого вещества или оксида-партнёра)",labWhyNoTemplate:"шаблона разложения для этого вещества в школьном наборе нет",labWhyInert:"не входит ни в одну школьную реакцию этого типа с данным набором",labUnusedTitle:"Не участвуют",labDropUnused:"Убрать лишние и пересобрать",labNearTypes:"С этим набором есть реакции других типов:",labDropBuild:"Убрать {f} и собрать",pickClear:"Сбросить выбор",pickShow:"Показать в 3D",correct:"Правильная формула: {f}",applyFix:"Применить",diffAdd:"добавь {need} (сейчас {have})",diffRemove:"убери лишние — {have} вместо {need}",badCh:"именно этот элемент ломает состав",fNoBalance:"Атомы не сходятся: {sym} слева {left}, справа {right} — коэффициентами это не исправить. Добавь вещество с {sym} туда, где его не хватает, или убери лишнее.",fNoBalancePlain:"Ни при каких целых коэффициентах атомы не уравниваются: составы веществ не подходят друг другу. Проверь, что справа есть все элементы, которые были слева.",secComp:"Состав",secSteps:"Решение по шагам",secFractions:"Массовые доли",secSummary:"Сводка",secData:"Данные",secShells:"Электронные оболочки",secCard:"Карточка элемента",secEquation:"Уравнение",secRxType:"Тип реакции",secBalance:"Баланс атомов",colEl:"Элемент",colAtoms:"Атомов",colTotal:"Вклад",colHint:"Вклад = Ar · n — сколько элемент добавляет в Mr.",colLeft:"Слева",colRight:"Справа",sumMr:"Относительная молекулярная масса",sumKlass:"Класс вещества",sumCount:"Всего атомов",sumKinds:"Элементов",sumType:"Тип вещества",sumTypeSimple:"простое",sumTypeComplex:"сложное",frAtoms:"×{n}",secSpeed:"Скорость электронов",speedVal:"×{v}",sumSymbol:"Символ",sumZ:"Порядковый номер Z",sumProtons:"Протонов",sumNeutrons:"Нейтронов",sumMass:"Относительная масса",sumFill:"Заполнение",sumETotal:"Всего электронов",noteSchool:"Проверка идёт по правилам школьной химии, а не по существованию вещества в природе.",noteAtom:"Крути модель мышью, приближай колесом. Введи формулу сверху — покажет молекулу.",noteReaction:"Крути сцену мышью. Правая кнопка на атоме — карточка элемента.",noteRxScheme:"Анимация — учебная схема сохранения атомов: реальная реакция идёт через промежуточные стадии, а не одним шагом.",animBuildFail:"Не удалось построить анимацию — проверь формулы реакции.",cardCharge:"Заряд ядра: +{z}",cardElectrons:"Электронов столько же, сколько протонов: {z}",cardValence:"Валентность: {vals}",cardOxidation:"Степени окисления: {vals}",klassOxide:"оксид",klassBase:"основание",klassAcid:"кислота",klassSalt:"соль",klassOther:"прочее",nameWater:"вода (оксид водорода)",nameMethane:"метан",nameMethanol:"метанол",nameEthanol:"этанол (этиловый спирт)",nameAceticAcid:"уксусная кислота",nameEthane:"этан",namePropane:"пропан",nameButane:"бутан",nameAmmonia:"аммиак",namePhosphine:"фосфин",nameSilane:"силан",nameBenzene:"бензол",nameToluene:"толуол",nameEthene:"этилен (этен)",nameEthyne:"ацетилен",nameCyclohexane:"циклогексан",nameAcidNamed:"{nm} кислота",nameAcid:"кислота",nameHydroxide:"гидроксид {el}{val}",nameOxide:"оксид {el}{val}",nameSalt:"{res} {el}{val}",nameCompound:"соединение {el} и {an}",acidNitric:"азотная",acidNitrous:"азотистая",acidSulfuric:"серная",acidSulfurous:"сернистая",acidCarbonic:"угольная",acidSilicic:"кремнёвая",acidPhosphoric:"фосфорная",acidHydrogenSulfide:"сероводородная",acidHydrochloric:"соляная",acidHydrofluoric:"фтороводородная",acidHydrobromic:"бромоводородная",acidHydroiodic:"иодоводородная",acidChromic:"хромовая",stepValences:"Валентности: {list}",stepCheck:"Проверка: {a}·{b} = {c}·{d} — сходится",stepIndexes:"Индексы: {list}",stepFor:"{n} для {sym}",stepMr:"Mr = {parts} = {mr}",stepW:"w({sym}) = {mass} / {mr} ≈ {pct} %",eEmpty:"Пустая формула. Введите, например, H2O",eExtraClose:"Лишняя закрывающая скобка",eDigitPos:"Индекс не на месте: число пишется после элемента или скобки",eChar:"Странный символ: «{ch}»",eUnclosed:"Не закрыта скобка",eZeroIndex:"Индекс не может быть равен нулю",eHugeIndex:"Слишком большой индекс",fZeroIndex:"Индекс 0 не используется в химии",fUnknown:"Элемента {sym} нет в таблице",fNoAtoms:"В формуле нет атомов",fExH2O2:"Пероксид водорода: у кислорода особая валентность, это вне школьной программы",fExFe3O4:"Смешанная валентность железа (II и III одновременно), это вне школьной программы",fIdxResidue:"{sym} ({rom1}) и {res} {formula} ({rom2}): индексы не сходятся",fOhBrackets:"{sym}: гидроксогруппы записываются в скобках с индексом",fIdxPlain:"{sym} ({rom1}) и {list}: индексы не сходятся",fNoMatch:"Соединение не сходится по правилам школьного курса{culprit}",rEmpty:"Пустая реакция",rEmptyLeft:"Левая часть пуста",rEmptyRight:"Правая часть пуста",rArrow:"Знак реакции не нужен: слева и справа свои поля",rEqual:"Знак равенства внутри вещества",rCoef:"«{text}»: после коэффициента не осталось формулы",rSubstance:"«{text}»: {msg}",rSame:"Слева и справа одно и то же вещество — реакции не происходит",rNoBalance:"Составы не сходятся: справа должно быть столько же атомов каждого элемента, сколько слева",rxConversion:"реакция",rxBurning:"горение",rxCombination:"соединение",rxDecomposition:"разложение",rxSubstitution:"замещение",rxExchange:"обмен",rxElectrolysis:"электролиз",rxDescConversion:"Одно вещество превращается в другое",rxDescBurning:"Вещество окисляется кислородом — реакция горения",rxDescCombination:"Два и более вещества образуют одно — реакция соединения",rxDescDecomposition:"Одно вещество распадается на два и более — реакция разложения",rxDescSubstitution:"Простое вещество замещает часть сложного — реакция замещения",rxDescExchange:"Вещества обмениваются составными частями — реакция обмена",rxDescElectrolysis:"Электрический ток разлагает вещество — реакция электролиза",rxOk:"Уравнение сбалансировано",rxOkSub:"Коэффициенты расставлены автоматически",rxBadBal:"Баланс не сходится",rxBadSub:"Проверьте формулы веществ",copyEq:"Скопировать уравнение",copySteps:"Скопировать решение",sumLeftN:"Веществ слева",sumRightN:"Веществ справа",sumCoefs:"Коэффициентов больше 1",rxHint:"Введите формулы веществ. Коэффициенты писать не нужно — приложение уравняет само. Вещества разделяйте кнопкой «+».",rxReagents:"Реагенты",rxProducts:"Продукты",rxAdd:"вещество",rxPhLeft:"например, H2",rxPhRight:"например, H2O",rxRemove:"Убрать поле",rxReagent:"Реагент ",rxProduct:"Продукт ",rxSubmit:"Уравнять и показать",rxEmpty:"Пустая реакция",rxEmptySub:"Введите хотя бы по одному веществу с каждой стороны",rxMissing:"Не хватает веществ {side}",rxMissLeft:"слева",rxMissRight:"справа",rxMissingSub:"Реакция записывается в две части: что вступило и что получилось",rxFail:"Уравнение не составляется",rxFound:"Коэффициенты найдены",presetBurnCh4:"Горение метана",presetZnHCl:"Цинк + соляная кислота",presetNa2oWater:"Оксид натрия + вода",presetChalk:"Разложение мела",presetExchange:"Реакция обмена",presetBurnAl:"Горение алюминия",catAlkali:"щелочные металлы",catAlkaline:"щелочноземельные",catTransition:"переходные металлы",catPostmetal:"другие металлы",catMetalloid:"полуметаллы",catNonmetal:"неметаллы",catHalogen:"галогены",catNoble:"благородные газы",catLanthanide:"лантаноиды",catActinide:"актиноиды",cellTip:"{name} · Z={z} · Mr={m} · {cat}",sLang:"Язык",sAccent:"Акцентный цвет",sTheme:"Тема",sGrid:"Сетка на сцене",sSfx:"Звуки",sSfxHint:"щелчки, разрыв и образование связей",sFx:"Эффекты",sFxHint:"искры при разрыве связей и тряска при горении",sMolOld:"Старый вид молекул",sMolOldHint:"простой матовый вид без бликов и свечения",sLone:"Неподелённые пары",sLoneHint:"облака пар на O, N, S — из-за них вода угловатая",sPal:"Цвета атомов",sPalCpk:"Стандарт",sPalPastel:"Пастель",sPalMono:"Ч/б",sPalContrast:"Контраст",gSite:"Как пользоваться сайтом",gTerms:"Химические термины и формулы",sDark:"Тёмная",sLight:"Светлая",sDone:"Готово",sGreen:"Зелёный",sBlue:"Синий",sViolet:"Фиолетовый",sAmber:"Янтарный",sTeal:"Бирюзовый",sRose:"Розовый",sIndigo:"Индиго",sSlate:"Серый",sAbout:"3D-визуализатор химии — учебный проект для 8 класса: таблица Менделеева, 3D-атом и 3D-модели молекул по формуле с проверкой по школьным правилам валентностей и индексов. Правая кнопка мыши на сцене — карточка элемента или соединения. <b>/</b> — фокус на строку формулы, <b>Esc</b> — закрыть панель или окно.",showAnyway:"Всё равно показать 3D",freeNote:"Модель без связей: расстановка атомов условная, по школьным правилам эта формула не складывается.",animPhase0:"Молекулы на местах",animPhase1:"Связи рвутся — пульсируют",animPhase2:"Связи рвутся",animPhase3:"Атомы перемещаются",animPhase4:"Новые связи образуются",animPhase5:"Реакция завершена",animPlay:"Пуск",animPause:"Пауза",animRepeat:"Повтор",animStepBack:"Фаза назад",animStepFwd:"Фаза вперёд",animProgress:"Прогресс анимации"},en:{metaTitle:"3D Chemistry Visualizer",brand:"3D Chemistry Visualizer",brandGrade:"Grade 8",inputPlaceholder:"Formula: Al2(SO4)3, H2O…",inputAria:"Substance formula",showBtn:"Show",tabViz:"Visualizer",exNum:"atomic number",exSym:"symbol",exName:"name",exMass:"atomic mass",rxBtnTitle:"Reaction builder",rxBtnText:"Reactions",guideBtnTitle:"Reference",metaDesc:"3D chemistry visualizer: periodic table, 3D atom and molecule models built from a formula and checked by school-course rules",titleFree:"beyond school rules: only atoms from the formula",settingsTitle:"Settings",settingsAria:"Settings",stageHint:"Rotate — left button, zoom — wheel, info — right button",infoClose:"Hide panel",infoShow:"Details",shotBtnTitle:"Download a picture",tabTable:"Periodic table",tabGuide:"Reference",readElectrons:"{n} electrons",readShells:"{n} shells",readAtoms:"{n} atoms",readType:"type: {type}",readBalOk:"balance matches",readBalBad:"balance doesn't match",titleAtom:"Atom: {name}",titleSimple:"Simple substance: {f}",titleEnter:"Enter a formula",titleErr:"Input error",titleImpossible:"This compound cannot be built",vOk:"Compound is possible",vBad:"Compound is impossible",vErr:"Input error",hintSec:"Hint",rxBtn2Title:"Build reactions from substances",rxBtn2Text:"Build reaction",labHint:"Enter elements or substances (2–5), pick a reaction type — I'll build every school reaction this set supports.",labPh:"Zn, HCl, CuO…",labNeed:"Enter at least two substances — one per field.",labNeedOne:"Enter the substance to decompose.",labNone:"There is no school reaction of this type for this set.",labNoneSub:"The rules check that an active metal displaces, that exchange leaves a precipitate, a gas or water, and that burning has oxygen. Change the type, add a reagent or drop the extras — hints are below.",labUnused:"Not involved: {list}",labBuild:"Build",labAdd:"Add substance",labTypes:"Reaction type",labWhyRightOfH:"doesn't take hydrogen from {other}: the metal sits right of H in the activity series",labWhyMoreActive:"isn't displaced from {other}: this metal is more active — it does the displacing",labWhyAlreadyOxide:"already an oxide — the school course skips burning oxides",labWhyNeedO2:"burning needs {other} — add it to the set",labWhyNoDriving:"no exchange with {other}: both products stay dissolved and strong — no precipitate, gas or water",labWhyNotIonic:"doesn't exchange ions with {other}: not a salt, acid or base — exchange runs between ionic substances",labWhyNoPartner:"nothing to combine: the set has no partner (a second simple substance or an oxide)",labWhyNoTemplate:"no decomposition template for this substance in the school set",labWhyInert:"takes part in no school reaction of this type with this set",labUnusedTitle:"Not involved",labDropUnused:"Drop extras and rebuild",labNearTypes:"This set does have reactions of other types:",labDropBuild:"Drop {f} and build",pickClear:"Clear selection",pickShow:"Show in 3D",correct:"Correct formula: {f}",applyFix:"Apply",diffAdd:"add {need} (now {have})",diffRemove:"remove the extra — {have} instead of {need}",badCh:"this exact element breaks the compound",fNoBalance:"The atoms do not match: {sym} is {left} on the left and {right} on the right, and no coefficient can fix that. Add a substance with {sym} where it is missing, or remove the extra one.",fNoBalancePlain:"No integer coefficients make the atoms match: the substances themselves do not fit. Check that the right side contains every element from the left.",secComp:"Composition",secSteps:"Step-by-step solution",secFractions:"Mass fractions",secSummary:"Summary",secData:"Data",secShells:"Electron shells",secCard:"Element card",secEquation:"Equation",secRxType:"Reaction type",secBalance:"Atom balance",colEl:"Element",colAtoms:"Atoms",colTotal:"Share",colHint:"Share = Ar · n — how much the element adds to Mr.",colLeft:"Left",colRight:"Right",sumMr:"Relative molecular mass",sumKlass:"Substance class",sumCount:"Total atoms",sumKinds:"Elements",sumType:"Substance type",sumTypeSimple:"simple",sumTypeComplex:"compound",frAtoms:"×{n}",secSpeed:"Electron speed",speedVal:"×{v}",sumSymbol:"Symbol",sumZ:"Atomic number Z",sumProtons:"Protons",sumNeutrons:"Neutrons",sumMass:"Relative mass",sumFill:"Filling",sumETotal:"Total electrons",noteSchool:"The check follows school chemistry rules, not whether the substance exists in nature.",noteAtom:"Rotate the model with the mouse, zoom with the wheel. Type a formula above to see a molecule.",noteReaction:"Rotate the scene with the mouse. Right-click an atom for its card.",noteRxScheme:"The animation is a teaching scheme of atom conservation: the real reaction passes through intermediate steps rather than happening in one shot.",animBuildFail:"Could not build the animation - check the reaction formulas.",cardCharge:"Nucleus charge: +{z}",cardElectrons:"As many electrons as protons: {z}",cardValence:"Valence: {vals}",cardOxidation:"Oxidation states: {vals}",klassOxide:"oxide",klassBase:"base",klassAcid:"acid",klassSalt:"salt",klassOther:"other",nameWater:"water",nameMethane:"methane",nameMethanol:"methanol",nameEthanol:"ethanol (ethyl alcohol)",nameAceticAcid:"acetic acid",nameEthane:"ethane",namePropane:"propane",nameButane:"butane",nameAmmonia:"ammonia",namePhosphine:"phosphine",nameSilane:"silane",nameBenzene:"benzene",nameToluene:"toluene",nameEthene:"ethene (ethylene)",nameEthyne:"ethyne (acetylene)",nameCyclohexane:"cyclohexane",nameAcidNamed:"{nm} acid",nameAcid:"acid",nameHydroxide:"{el} hydroxide{val}",nameOxide:"{el} oxide{val}",nameSalt:"{el}{val} {res}",nameCompound:"compound of {el} and {an}",acidNitric:"nitric",acidNitrous:"nitrous",acidSulfuric:"sulfuric",acidSulfurous:"sulfurous",acidCarbonic:"carbonic",acidSilicic:"silicic",acidPhosphoric:"phosphoric",acidHydrogenSulfide:"hydrosulfide",acidHydrochloric:"hydrochloric",acidHydrofluoric:"hydrofluoric",acidHydrobromic:"hydrobromic",acidHydroiodic:"hydroiodic",acidChromic:"chromic",stepValences:"Valences: {list}",stepCheck:"Check: {a}·{b} = {c}·{d} — matches",stepIndexes:"Indexes: {list}",stepFor:"{n} for {sym}",stepMr:"Mr = {parts} = {mr}",stepW:"w({sym}) = {mass} / {mr} ≈ {pct} %",eEmpty:"Empty formula. Try, for example, H2O",eExtraClose:"Extra closing bracket",eDigitPos:"Digit out of place: a number goes after an element or a bracket",eChar:'Strange character: "{ch}"',eUnclosed:"Unclosed bracket",eZeroIndex:"An index cannot be zero",eHugeIndex:"The index is too large",fZeroIndex:"Index 0 is not used in chemistry",fUnknown:"Element {sym} is not in the table",fNoAtoms:"The formula has no atoms",fExH2O2:"Hydrogen peroxide: oxygen has a special valence here, beyond the school course",fExFe3O4:"Mixed iron valences (II and III at once), beyond the school course",fIdxResidue:"{sym} ({rom1}) and {res} {formula} ({rom2}): the indexes don't match",fOhBrackets:"{sym}: hydroxide groups are written in brackets with an index",fIdxPlain:"{sym} ({rom1}) and {list}: the indexes don't match",fNoMatch:"The compound doesn't follow the school-course rules{culprit}",rEmpty:"Empty reaction",rEmptyLeft:"The left side is empty",rEmptyRight:"The right side is empty",rArrow:"No reaction sign needed: each side has its own field",rEqual:"An equals sign inside a substance",rCoef:'"{text}": nothing left after the coefficient',rSubstance:'"{text}": {msg}',rSame:"Both sides hold the same substance — no reaction happens",rNoBalance:"The compositions do not match: the right side needs the same atoms of every element as the left",rxConversion:"conversion",rxBurning:"combustion",rxCombination:"combination",rxDecomposition:"decomposition",rxSubstitution:"substitution",rxExchange:"exchange",rxElectrolysis:"electrolysis",rxDescConversion:"One substance turns into another",rxDescBurning:"A substance is oxidized by oxygen — a combustion reaction",rxDescCombination:"Two or more substances form one — a combination reaction",rxDescDecomposition:"One substance breaks into two or more — a decomposition reaction",rxDescSubstitution:"A simple substance replaces part of a compound — a substitution reaction",rxDescExchange:"Substances exchange their parts — an exchange reaction",rxDescElectrolysis:"A current splits the substance apart — an electrolysis reaction",rxOk:"Equation balanced",rxOkSub:"Coefficients placed automatically",rxBadBal:"Balance doesn't match",rxBadSub:"Check the substance formulas",copyEq:"Copy equation",copySteps:"Copy solution",sumLeftN:"Substances on the left",sumRightN:"Substances on the right",sumCoefs:"Coefficients above 1",rxHint:'Enter substance formulas. No need to write coefficients — the app balances them itself. Separate substances with the "+" button.',rxReagents:"Reagents",rxProducts:"Products",rxAdd:"substance",rxPhLeft:"e.g. H2",rxPhRight:"e.g. H2O",rxRemove:"Remove field",rxReagent:"Reagent ",rxProduct:"Product ",rxSubmit:"Balance and show",rxEmpty:"Empty reaction",rxEmptySub:"Enter at least one substance on each side",rxMissing:"Missing substances {side}",rxMissLeft:"on the left",rxMissRight:"on the right",rxMissingSub:"A reaction has two parts: what reacts and what forms",rxFail:"The equation cannot be balanced",rxFound:"Coefficients found",presetBurnCh4:"Methane burning",presetZnHCl:"Zinc + hydrochloric acid",presetNa2oWater:"Sodium oxide + water",presetChalk:"Chalk decomposition",presetExchange:"Exchange reaction",presetBurnAl:"Aluminium burning",catAlkali:"alkali metals",catAlkaline:"alkaline earth metals",catTransition:"transition metals",catPostmetal:"other metals",catMetalloid:"metalloids",catNonmetal:"nonmetals",catHalogen:"halogens",catNoble:"noble gases",catLanthanide:"lanthanides",catActinide:"actinides",cellTip:"{name} · Z={z} · Mr={m} · {cat}",sLang:"Language",sAccent:"Accent color",sTheme:"Theme",sGrid:"Scene grid",sSfx:"Sounds",sSfxHint:"clicks, bond tearing and forming",sFx:"Effects",sFxHint:"bond-break sparks and burning shake",sMolOld:"Old molecule view",sMolOldHint:"simple matte look without highlights or glow",sLone:"Lone pairs",sLoneHint:"electron-pair clouds on O, N, S — why water is bent",sPal:"Atom colours",sPalCpk:"Standard",sPalPastel:"Pastel",sPalMono:"Mono",sPalContrast:"Contrast",gSite:"How to use the site",gTerms:"Chemistry terms and formulas",sDark:"Dark",sLight:"Light",sDone:"Done",sGreen:"Green",sBlue:"Blue",sViolet:"Violet",sAmber:"Amber",sTeal:"Teal",sRose:"Rose",sIndigo:"Indigo",sSlate:"Slate",sAbout:"3D Chemistry Visualizer is a school project for grade 8: the periodic table, a 3D atom and 3D molecule models built from a formula and checked by school rules of valences and indexes. Right-click on the scene opens a card of an element or compound. <b>/</b> focuses the formula line, <b>Esc</b> closes the panel or window.",showAnyway:"Show 3D anyway",freeNote:"A model without bonds: the atom layout is conventional — by school rules this formula doesn't come together.",animPhase0:"Molecules in place",animPhase1:"Bonds pulse before breaking",animPhase2:"Bonds break",animPhase3:"Atoms move",animPhase4:"New bonds form",animPhase5:"Reaction complete",animPlay:"Play",animPause:"Pause",animRepeat:"Replay",animStepBack:"Phase back",animStepFwd:"Phase forward",animProgress:"Animation progress"}},ed=()=>typeof localStorage<"u"&&typeof document<"u";let Zn=ed()&&localStorage.getItem("lang")==="en"?"en":"ru";const Br=new Set,L=(n,e)=>{let t=Hr[Zn][n]??Hr.ru[n]??n;if(e)for(const i in e)t=t.replaceAll("{"+i+"}",String(e[i]));return t},fs=()=>Zn,b_=n=>{if(!(!Hr[n]||n===Zn)){Zn=n,ed()&&(localStorage.setItem("lang",n),document.documentElement.lang=n);for(const e of Br)e()}},E_=n=>(Br.add(n),()=>Br.delete(n)),ui=n=>Zn==="en"?n.nameEn??n.name:n.name,gl=n=>Zn==="en"?n.nameEn??n.name:n.name,_t=n=>Zn==="en"?String(n):String(n).replace(".",","),T_=(n,e)=>n.map(e).join(Zn==="en"?" and ":" и "),A_=["","I","II","III","IV","V","VI","VII","VIII"],C_=n=>A_[n]??String(n),w_=n=>n[0].toUpperCase()+n.slice(1),td=n=>L("e"+w_(n.code??""),n),nd=n=>{switch(n.code){case"zeroIndex":return L("fZeroIndex");case"unknown":return L("fUnknown",n);case"noAtoms":return L("fNoAtoms");case"exH2O2":return L("fExH2O2");case"exFe3O4":return L("fExFe3O4");case"idxResidue":return L("fIdxResidue",{...n,res:gl(n.re)});case"ohBrackets":return L("fOhBrackets",n);case"idxPlain":return L("fIdxPlain",{...n,list:T_(n.others,e=>`${e.sym} (${C_(e.val)})`)});case"noMatch":return L("fNoMatch",{culprit:n.sym?` — ${L("badCh")}: ${n.sym}`:""});case"noBalance":return n.bad?L("fNoBalance",n.bad):L("fNoBalancePlain");default:return L(n.code)}},R_=16739179,P_=10134968,O_=5088255,L_=5991570,I_=(n,e,t)=>{const i=e+t,s=l=>{const c=Math.sin(l[0]*12.9898+l[1]*78.233+l[2]*37.719)*43758.5453;return c-Math.floor(c)},o=n.map((l,c)=>c).sort((l,c)=>s(n[l])-s(n[c])),a=new Array(i).fill(P_);let r=0;for(let l=0;l<i;l++)r+=e,r>=i&&(a[o[l]]=R_,r-=i);return a};function D_(n){const e=new Cn,t=n.Z,i=Math.max(0,Math.round(n.mass-n.Z)),s=t+i,o=.4+Math.pow(s,.36)*.13,a=o*.62,r=Math.min(.115,a*.88/Math.cbrt(s)),l=new Wn(r,12,12),c=new os({roughness:.45,metalness:.05}),h=r*2.06,p=h*Math.sqrt(2/3),u=h*Math.sqrt(3)/2,m=I=>{const O=Math.ceil(I/h)+1,D=[];for(let G=-O;G<=O;G++){const F=G*p,X=Math.abs(G)%2;for(let V=-O;V<=O;V++){const ie=V*u+X*(u/3),re=(X+(V%2+2)%2)*(h/2);for(let se=-O;se<=O;se++){const Me=se*h+re,De=Math.sqrt(Me*Me+ie*ie+F*F);De<=I&&D.push([Me,ie,F,De])}}}return D.sort((G,F)=>G[3]-F[3]),D};let g=a,v=m(g);for(;v.length<s;)g*=1.15,v=m(g);const f=v.slice(0,s).map(I=>[I[0],I[1],I[2]]),d=I_(f,t,i),x=new K0(l,c,s),y=new je;for(let I=0;I<s;I++)y.makeTranslation(f[I][0],f[I][1],f[I][2]),x.setMatrixAt(I,y),x.setColorAt(I,new ke(d[I]));const S=new Cn;S.add(x),e.add(S);const E=[];let M=o*1.35+.75;for(let I=0;I<n.shells.length;I++){const O=n.shells[I],D=Math.PI/2+(I%2?.28:-.28),G=new $e(new fl(M,.014,8,72),new Os({color:L_,transparent:!0,opacity:.4}));G.rotation.x=D,e.add(G);const F=new Wn(.075,10,10),X=new Os({color:O_});for(let V=0;V<O;V++){const ie=new $e(F,X);e.add(ie),E.push({sph:ie,r:M,start:V/O*Math.PI*2,tilt:D,speed:.55/(1+I*.35),dir:I%2?1:-1})}M+=.62}const A=vi(n.symbol,"atomSym");A.style.color=n.color??"#ffffff";const R=new as(A);R.position.set(0,M+.35,0),e.add(R);const P=vi(`${ui(n)} · Z=${n.Z}`,"atomSub"),_=new as(P);return _.position.set(0,-(M+.5),0),e.add(_),{group:e,update:I=>{const O=Math.min(Math.max(I-$c,0),.05);$c=I,S.rotation.y=I*.1;for(const D of E){D.phase=(D.phase??D.start)+O*D.speed*_l*D.dir;const G=D.phase;D.sph.position.set(Math.cos(G)*D.r,Math.sin(G)*D.r*Math.cos(D.tilt),Math.sin(G)*D.r*Math.sin(D.tilt))}},lastR:M}}let _l=1,$c=0;const Fa=()=>_l,N_=n=>{_l=Math.min(Math.max(n,0),3)},jt=[{Z:1,symbol:"H",name:"Водород",mass:1.008,group:1,period:1,category:"nonmetal",valences:[1],oxidationStates:[1,-1],shells:[1],color:"#e8e8e8",nameEn:"Hydrogen"},{Z:2,symbol:"He",name:"Гелий",mass:4.0026,group:18,period:1,category:"noble",valences:[],oxidationStates:[0],shells:[2],color:"#d9ffff",nameEn:"Helium"},{Z:3,symbol:"Li",name:"Литий",mass:6.94,group:1,period:2,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,1],color:"#cc80ff",nameEn:"Lithium"},{Z:4,symbol:"Be",name:"Бериллий",mass:9.0122,group:2,period:2,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,2],color:"#c2ff00",nameEn:"Beryllium"},{Z:5,symbol:"B",name:"Бор",mass:10.81,group:13,period:2,category:"metalloid",valences:[3],oxidationStates:[3],shells:[2,3],color:"#ffb5b5",nameEn:"Boron"},{Z:6,symbol:"C",name:"Углерод",mass:12.011,group:14,period:2,category:"nonmetal",valences:[4,2],oxidationStates:[4,2,-4],shells:[2,4],color:"#909090",nameEn:"Carbon"},{Z:7,symbol:"N",name:"Азот",mass:14.007,group:15,period:2,category:"nonmetal",valences:[3,4,5,1,2],oxidationStates:[-3,3,5,2,1],shells:[2,5],color:"#3050f8",nameEn:"Nitrogen"},{Z:8,symbol:"O",name:"Кислород",mass:15.999,group:16,period:2,category:"nonmetal",valences:[2],oxidationStates:[-2,-1],shells:[2,6],color:"#ff0d0d",nameEn:"Oxygen"},{Z:9,symbol:"F",name:"Фтор",mass:18.998,group:17,period:2,category:"halogen",valences:[1],oxidationStates:[-1],shells:[2,7],color:"#90e050",nameEn:"Fluorine"},{Z:10,symbol:"Ne",name:"Неон",mass:20.18,group:18,period:2,category:"noble",valences:[],oxidationStates:[0],shells:[2,8],color:"#b3e3f5",nameEn:"Neon"},{Z:11,symbol:"Na",name:"Натрий",mass:22.99,group:1,period:3,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,8,1],color:"#ab5cf2",nameEn:"Sodium"},{Z:12,symbol:"Mg",name:"Магний",mass:24.305,group:2,period:3,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,8,2],color:"#8aff00",nameEn:"Magnesium"},{Z:13,symbol:"Al",name:"Алюминий",mass:26.982,group:13,period:3,category:"postmetal",valences:[3],oxidationStates:[3],shells:[2,8,3],color:"#bfa6a6",nameEn:"Aluminium"},{Z:14,symbol:"Si",name:"Кремний",mass:28.085,group:14,period:3,category:"metalloid",valences:[4],oxidationStates:[4,-4],shells:[2,8,4],color:"#f0c8a0",nameEn:"Silicon"},{Z:15,symbol:"P",name:"Фосфор",mass:30.974,group:15,period:3,category:"nonmetal",valences:[3,5],oxidationStates:[-3,3,5],shells:[2,8,5],color:"#ff8000",nameEn:"Phosphorus"},{Z:16,symbol:"S",name:"Сера",mass:32.06,group:16,period:3,category:"nonmetal",valences:[2,4,6],oxidationStates:[-2,4,6],shells:[2,8,6],color:"#ffff30",nameEn:"Sulfur"},{Z:17,symbol:"Cl",name:"Хлор",mass:35.45,group:17,period:3,category:"halogen",valences:[1,3,5,7],oxidationStates:[-1,1,5,7],shells:[2,8,7],color:"#1ff01f",nameEn:"Chlorine"},{Z:18,symbol:"Ar",name:"Аргон",mass:39.948,group:18,period:3,category:"noble",valences:[],oxidationStates:[0],shells:[2,8,8],color:"#80d1e3",nameEn:"Argon"},{Z:19,symbol:"K",name:"Калий",mass:39.098,group:1,period:4,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,8,8,1],color:"#8f40d4",nameEn:"Potassium"},{Z:20,symbol:"Ca",name:"Кальций",mass:40.078,group:2,period:4,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,8,8,2],color:"#3dff00",nameEn:"Calcium"},{Z:21,symbol:"Sc",name:"Скандий",mass:44.956,group:3,period:4,category:"transition",valences:[3],oxidationStates:[3],shells:[2,8,9,2],color:"#e6d25b",nameEn:"Scandium"},{Z:22,symbol:"Ti",name:"Титан",mass:47.867,group:4,period:4,category:"transition",valences:[2,3,4],oxidationStates:[2,3,4],shells:[2,8,10,2],color:"#bfc2c7",nameEn:"Titanium"},{Z:23,symbol:"V",name:"Ванадий",mass:50.942,group:5,period:4,category:"transition",valences:[2,3,4,5],oxidationStates:[2,3,4,5],shells:[2,8,11,2],color:"#a6a6ab",nameEn:"Vanadium"},{Z:24,symbol:"Cr",name:"Хром",mass:51.996,group:6,period:4,category:"transition",valences:[2,3,6],oxidationStates:[2,3,6],shells:[2,8,13,1],color:"#8a99c7",nameEn:"Chromium"},{Z:25,symbol:"Mn",name:"Марганец",mass:54.938,group:7,period:4,category:"transition",valences:[2,3,4,6,7],oxidationStates:[2,3,4,6,7],shells:[2,8,13,2],color:"#9c7ac7",nameEn:"Manganese"},{Z:26,symbol:"Fe",name:"Железо",mass:55.845,group:8,period:4,category:"transition",valences:[2,3],oxidationStates:[2,3],shells:[2,8,14,2],color:"#e06633",nameEn:"Iron"},{Z:27,symbol:"Co",name:"Кобальт",mass:58.933,group:9,period:4,category:"transition",valences:[2,3],oxidationStates:[2,3],shells:[2,8,15,2],color:"#f090a0",nameEn:"Cobalt"},{Z:28,symbol:"Ni",name:"Никель",mass:58.693,group:10,period:4,category:"transition",valences:[2,3],oxidationStates:[2,3],shells:[2,8,16,2],color:"#50d050",nameEn:"Nickel"},{Z:29,symbol:"Cu",name:"Медь",mass:63.546,group:11,period:4,category:"transition",valences:[1,2],oxidationStates:[1,2],shells:[2,8,18,1],color:"#c88033",nameEn:"Copper"},{Z:30,symbol:"Zn",name:"Цинк",mass:65.38,group:12,period:4,category:"transition",valences:[2],oxidationStates:[2],shells:[2,8,18,2],color:"#7d80b0",nameEn:"Zinc"},{Z:31,symbol:"Ga",name:"Галлий",mass:69.723,group:13,period:4,category:"postmetal",valences:[3],oxidationStates:[3],shells:[2,8,18,3],color:"#c28f8f",nameEn:"Gallium"},{Z:32,symbol:"Ge",name:"Германий",mass:72.63,group:14,period:4,category:"metalloid",valences:[2,4],oxidationStates:[4,2],shells:[2,8,18,4],color:"#668f8f",nameEn:"Germanium"},{Z:33,symbol:"As",name:"Мышьяк",mass:74.922,group:15,period:4,category:"metalloid",valences:[3,5],oxidationStates:[-3,3,5],shells:[2,8,18,5],color:"#bd80e3",nameEn:"Arsenic"},{Z:34,symbol:"Se",name:"Селен",mass:78.971,group:16,period:4,category:"nonmetal",valences:[2,4,6],oxidationStates:[-2,4,6],shells:[2,8,18,6],color:"#ffa100",nameEn:"Selenium"},{Z:35,symbol:"Br",name:"Бром",mass:79.904,group:17,period:4,category:"halogen",valences:[1,3,5,7],oxidationStates:[-1,1,5],shells:[2,8,18,7],color:"#a62929",nameEn:"Bromine"},{Z:36,symbol:"Kr",name:"Криптон",mass:83.798,group:18,period:4,category:"noble",valences:[],oxidationStates:[0],shells:[2,8,18,8],color:"#5cb8d1",nameEn:"Krypton"},{Z:37,symbol:"Rb",name:"Рубидий",mass:85.468,group:1,period:5,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,8,18,8,1],color:"#702eb0",nameEn:"Rubidium"},{Z:38,symbol:"Sr",name:"Стронций",mass:87.62,group:2,period:5,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,8,18,8,2],color:"#00ff00",nameEn:"Strontium"},{Z:39,symbol:"Y",name:"Иттрий",mass:88.906,group:3,period:5,category:"transition",valences:[3],oxidationStates:[3],shells:[2,8,18,9,2],color:"#94ffff",nameEn:"Yttrium"},{Z:40,symbol:"Zr",name:"Цирконий",mass:91.224,group:4,period:5,category:"transition",valences:[2,3,4],oxidationStates:[4],shells:[2,8,18,10,2],color:"#94e0e0",nameEn:"Zirconium"},{Z:41,symbol:"Nb",name:"Ниобий",mass:92.906,group:5,period:5,category:"transition",valences:[3,5],oxidationStates:[3,5],shells:[2,8,18,12,1],color:"#73c2c9",nameEn:"Niobium"},{Z:42,symbol:"Mo",name:"Молибден",mass:95.95,group:6,period:5,category:"transition",valences:[2,3,4,5,6],oxidationStates:[2,3,4,6],shells:[2,8,18,13,1],color:"#54b5b5",nameEn:"Molybdenum"},{Z:43,symbol:"Tc",name:"Технеций",mass:98,group:7,period:5,category:"transition",valences:[2,4,7],oxidationStates:[7],shells:[2,8,18,13,2],color:"#3b9e9e",nameEn:"Technetium"},{Z:44,symbol:"Ru",name:"Рутений",mass:101.07,group:8,period:5,category:"transition",valences:[2,3,4,6,8],oxidationStates:[3,4,8],shells:[2,8,18,15,1],color:"#248f8f",nameEn:"Ruthenium"},{Z:45,symbol:"Rh",name:"Родий",mass:102.906,group:9,period:5,category:"transition",valences:[2,3,4],oxidationStates:[3],shells:[2,8,18,16,1],color:"#15a0a0",nameEn:"Rhodium"},{Z:46,symbol:"Pd",name:"Палладий",mass:106.42,group:10,period:5,category:"transition",valences:[2,4],oxidationStates:[2,4],shells:[2,8,18,18],color:"#fcc0c0",nameEn:"Palladium"},{Z:47,symbol:"Ag",name:"Серебро",mass:107.868,group:11,period:5,category:"transition",valences:[1],oxidationStates:[1],shells:[2,8,18,18,1],color:"#c0c0c0",nameEn:"Silver"},{Z:48,symbol:"Cd",name:"Кадмий",mass:112.414,group:12,period:5,category:"transition",valences:[2],oxidationStates:[2],shells:[2,8,18,18,2],color:"#ffd98f",nameEn:"Cadmium"},{Z:49,symbol:"In",name:"Индий",mass:114.818,group:13,period:5,category:"postmetal",valences:[1,3],oxidationStates:[3,1],shells:[2,8,18,18,3],color:"#a67573",nameEn:"Indium"},{Z:50,symbol:"Sn",name:"Олово",mass:118.71,group:14,period:5,category:"postmetal",valences:[2,4],oxidationStates:[2,4],shells:[2,8,18,18,4],color:"#668080",nameEn:"Tin"},{Z:51,symbol:"Sb",name:"Сурьма",mass:121.76,group:15,period:5,category:"metalloid",valences:[3,5],oxidationStates:[-3,3,5],shells:[2,8,18,18,5],color:"#9e63b5",nameEn:"Antimony"},{Z:52,symbol:"Te",name:"Теллур",mass:127.6,group:16,period:5,category:"metalloid",valences:[2,4,6],oxidationStates:[-2,4,6],shells:[2,8,18,18,6],color:"#d47a00",nameEn:"Tellurium"},{Z:53,symbol:"I",name:"Иод",mass:126.904,group:17,period:5,category:"halogen",valences:[1,3,5,7],oxidationStates:[-1,1,5,7],shells:[2,8,18,18,7],color:"#940094",nameEn:"Iodine"},{Z:54,symbol:"Xe",name:"Ксенон",mass:131.293,group:18,period:5,category:"noble",valences:[],oxidationStates:[0],shells:[2,8,18,18,8],color:"#429eb0",nameEn:"Xenon"},{Z:55,symbol:"Cs",name:"Цезий",mass:132.905,group:1,period:6,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,8,18,18,8,1],color:"#57178f",nameEn:"Caesium"},{Z:56,symbol:"Ba",name:"Барий",mass:137.327,group:2,period:6,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,8,18,18,8,2],color:"#00c900",nameEn:"Barium"},{Z:57,symbol:"La",name:"Лантан",mass:138.905,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,18,9,2],color:"#70d4ff",nameEn:"Lanthanum"},{Z:58,symbol:"Ce",name:"Церий",mass:140.116,group:3,period:6,category:"lanthanide",valences:[2,3,4],oxidationStates:[3,4],shells:[2,8,18,19,9,2],color:"#ffffc7",nameEn:"Cerium"},{Z:59,symbol:"Pr",name:"Празеодим",mass:140.908,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,20,9,2],color:"#d9ffc7",nameEn:"Praseodymium"},{Z:60,symbol:"Nd",name:"Неодим",mass:144.242,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,22,8,2],color:"#c7ffc7",nameEn:"Neodymium"},{Z:61,symbol:"Pm",name:"Прометий",mass:145,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,23,8,2],color:"#a3ffc7",nameEn:"Promethium"},{Z:62,symbol:"Sm",name:"Самарий",mass:150.36,group:3,period:6,category:"lanthanide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,24,8,2],color:"#8fffc7",nameEn:"Samarium"},{Z:63,symbol:"Eu",name:"Европий",mass:151.964,group:3,period:6,category:"lanthanide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,25,8,2],color:"#8affc7",nameEn:"Europium"},{Z:64,symbol:"Gd",name:"Гадолиний",mass:157.25,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,25,9,2],color:"#a0ffc7",nameEn:"Gadolinium"},{Z:65,symbol:"Tb",name:"Тербий",mass:158.925,group:3,period:6,category:"lanthanide",valences:[3,4],oxidationStates:[3,4],shells:[2,8,18,27,8,2],color:"#c0ffc7",nameEn:"Terbium"},{Z:66,symbol:"Dy",name:"Диспрозий",mass:162.5,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,28,8,2],color:"#e0ffc7",nameEn:"Dysprosium"},{Z:67,symbol:"Ho",name:"Гольмий",mass:164.93,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,29,8,2],color:"#ffe3c7",nameEn:"Holmium"},{Z:68,symbol:"Er",name:"Эрбий",mass:167.259,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,30,8,2],color:"#ffd0c7",nameEn:"Erbium"},{Z:69,symbol:"Tm",name:"Тулий",mass:168.934,group:3,period:6,category:"lanthanide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,31,8,2],color:"#ffbfc7",nameEn:"Thulium"},{Z:70,symbol:"Yb",name:"Иттербий",mass:173.045,group:3,period:6,category:"lanthanide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,32,8,2],color:"#ffb3c7",nameEn:"Ytterbium"},{Z:71,symbol:"Lu",name:"Лютеций",mass:174.967,group:3,period:6,category:"lanthanide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,9,2],color:"#ffabb5",nameEn:"Lutetium"},{Z:72,symbol:"Hf",name:"Гафний",mass:178.49,group:4,period:6,category:"transition",valences:[4],oxidationStates:[4],shells:[2,8,18,32,10,2],color:"#76bd81",nameEn:"Hafnium"},{Z:73,symbol:"Ta",name:"Тантал",mass:180.948,group:5,period:6,category:"transition",valences:[3,5],oxidationStates:[5],shells:[2,8,18,32,11,2],color:"#4da6d1",nameEn:"Tantalum"},{Z:74,symbol:"W",name:"Вольфрам",mass:183.84,group:6,period:6,category:"transition",valences:[2,3,4,5,6],oxidationStates:[6,4],shells:[2,8,18,32,12,2],color:"#2194d6",nameEn:"Tungsten"},{Z:75,symbol:"Re",name:"Рений",mass:186.207,group:7,period:6,category:"transition",valences:[2,3,4,6,7],oxidationStates:[4,7],shells:[2,8,18,32,13,2],color:"#267dab",nameEn:"Rhenium"},{Z:76,symbol:"Os",name:"Осмий",mass:190.23,group:8,period:6,category:"transition",valences:[2,3,4,6,8],oxidationStates:[4,8],shells:[2,8,18,32,14,2],color:"#266d96",nameEn:"Osmium"},{Z:77,symbol:"Ir",name:"Иридий",mass:192.217,group:9,period:6,category:"transition",valences:[2,3,4],oxidationStates:[3,4],shells:[2,8,18,32,15,2],color:"#0e5f66",nameEn:"Iridium"},{Z:78,symbol:"Pt",name:"Платина",mass:195.084,group:10,period:6,category:"transition",valences:[2,4],oxidationStates:[2,4],shells:[2,8,18,32,17,1],color:"#d0d0e0",nameEn:"Platinum"},{Z:79,symbol:"Au",name:"Золото",mass:196.967,group:11,period:6,category:"transition",valences:[1,3],oxidationStates:[3,1],shells:[2,8,18,32,18,1],color:"#ffd123",nameEn:"Gold"},{Z:80,symbol:"Hg",name:"Ртуть",mass:200.592,group:12,period:6,category:"transition",valences:[1,2],oxidationStates:[2,1],shells:[2,8,18,32,18,2],color:"#b8b8d0",nameEn:"Mercury"},{Z:81,symbol:"Tl",name:"Таллий",mass:204.38,group:13,period:6,category:"postmetal",valences:[1,3],oxidationStates:[1,3],shells:[2,8,18,32,18,3],color:"#a6544d",nameEn:"Thallium"},{Z:82,symbol:"Pb",name:"Свинец",mass:207.2,group:14,period:6,category:"postmetal",valences:[2,4],oxidationStates:[2,4],shells:[2,8,18,32,18,4],color:"#575961",nameEn:"Lead"},{Z:83,symbol:"Bi",name:"Бисмут",mass:208.98,group:15,period:6,category:"postmetal",valences:[3,5],oxidationStates:[3,5],shells:[2,8,18,32,18,5],color:"#9e4fb5",nameEn:"Bismuth"},{Z:84,symbol:"Po",name:"Полоний",mass:209,group:16,period:6,category:"postmetal",valences:[2,4,6],oxidationStates:[4,2,6],shells:[2,8,18,32,18,6],color:"#ab5c00",nameEn:"Polonium"},{Z:85,symbol:"At",name:"Астат",mass:210,group:17,period:6,category:"halogen",valences:[1],oxidationStates:[-1],shells:[2,8,18,32,18,7],color:"#754f45",nameEn:"Astatine"},{Z:86,symbol:"Rn",name:"Радон",mass:222,group:18,period:6,category:"noble",valences:[],oxidationStates:[0],shells:[2,8,18,32,18,8],color:"#428296",nameEn:"Radon"},{Z:87,symbol:"Fr",name:"Франций",mass:223,group:1,period:7,category:"alkali",valences:[1],oxidationStates:[1],shells:[2,8,18,32,18,8,1],color:"#420066",nameEn:"Francium"},{Z:88,symbol:"Ra",name:"Радий",mass:226,group:2,period:7,category:"alkaline",valences:[2],oxidationStates:[2],shells:[2,8,18,32,18,8,2],color:"#007d00",nameEn:"Radium"},{Z:89,symbol:"Ac",name:"Актиний",mass:227,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,18,9,2],color:"#70abfa",nameEn:"Actinium"},{Z:90,symbol:"Th",name:"Торий",mass:232.038,group:3,period:7,category:"actinide",valences:[4],oxidationStates:[4],shells:[2,8,18,32,18,10,2],color:"#00baff",nameEn:"Thorium"},{Z:91,symbol:"Pa",name:"Протактиний",mass:231.036,group:3,period:7,category:"actinide",valences:[4,5],oxidationStates:[4,5],shells:[2,8,18,32,20,9,2],color:"#00a1ff",nameEn:"Protactinium"},{Z:92,symbol:"U",name:"Уран",mass:238.029,group:3,period:7,category:"actinide",valences:[4,6],oxidationStates:[6,4],shells:[2,8,18,32,21,9,2],color:"#108eff",nameEn:"Uranium"},{Z:93,symbol:"Np",name:"Нептуний",mass:237,group:3,period:7,category:"actinide",valences:[4,5,6],oxidationStates:[5,3],shells:[2,8,18,32,22,9,2],color:"#219fff",nameEn:"Neptunium"},{Z:94,symbol:"Pu",name:"Плутоний",mass:244,group:3,period:7,category:"actinide",valences:[4,6],oxidationStates:[4,6],shells:[2,8,18,32,24,8,2],color:"#3395ff",nameEn:"Plutonium"},{Z:95,symbol:"Am",name:"Америций",mass:243,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,25,8,2],color:"#458fff",nameEn:"Americium"},{Z:96,symbol:"Cm",name:"Кюрий",mass:247,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,25,9,2],color:"#5c8fff",nameEn:"Curium"},{Z:97,symbol:"Bk",name:"Берклий",mass:247,group:3,period:7,category:"actinide",valences:[3,4],oxidationStates:[3,4],shells:[2,8,18,32,27,8,2],color:"#7285ff",nameEn:"Berkelium"},{Z:98,symbol:"Cf",name:"Калифорний",mass:251,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,28,8,2],color:"#857fff",nameEn:"Californium"},{Z:99,symbol:"Es",name:"Эйнштейний",mass:252,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,29,8,2],color:"#917aff",nameEn:"Einsteinium"},{Z:100,symbol:"Fm",name:"Фермий",mass:257,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,30,8,2],color:"#a366ff",nameEn:"Fermium"},{Z:101,symbol:"Md",name:"Менделевий",mass:258,group:3,period:7,category:"actinide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,32,31,8,2],color:"#b05aff",nameEn:"Mendelevium"},{Z:102,symbol:"No",name:"Нобелий",mass:259,group:3,period:7,category:"actinide",valences:[2,3],oxidationStates:[3,2],shells:[2,8,18,32,32,8,2],color:"#bd4fff",nameEn:"Nobelium"},{Z:103,symbol:"Lr",name:"Лоуренсий",mass:262,group:3,period:7,category:"actinide",valences:[3],oxidationStates:[3],shells:[2,8,18,32,32,8,3],color:"#c93cff",nameEn:"Lawrencium"},{Z:104,symbol:"Rf",name:"Резерфордий",mass:267,group:4,period:7,category:"transition",valences:[4],oxidationStates:[4],shells:[2,8,18,32,32,10,2],color:"#76bd81",nameEn:"Rutherfordium"},{Z:105,symbol:"Db",name:"Дубний",mass:268,group:5,period:7,category:"transition",valences:[4,5],oxidationStates:[5],shells:[2,8,18,32,32,11,2],color:"#4da6d1",nameEn:"Dubnium"},{Z:106,symbol:"Sg",name:"Сиборгий",mass:269,group:6,period:7,category:"transition",valences:[6],oxidationStates:[6],shells:[2,8,18,32,32,12,2],color:"#2194d6",nameEn:"Seaborgium"},{Z:107,symbol:"Bh",name:"Борий",mass:270,group:7,period:7,category:"transition",valences:[7],oxidationStates:[7],shells:[2,8,18,32,32,13,2],color:"#267dab",nameEn:"Bohrium"},{Z:108,symbol:"Hs",name:"Хассий",mass:269,group:8,period:7,category:"transition",valences:[8],oxidationStates:[8],shells:[2,8,18,32,32,14,2],color:"#266d96",nameEn:"Hassium"},{Z:109,symbol:"Mt",name:"Мейтнерий",mass:278,group:9,period:7,category:"transition",valences:[],oxidationStates:[],shells:[2,8,18,32,32,15,2],color:"#0e5f66",nameEn:"Meitnerium"},{Z:110,symbol:"Ds",name:"Дармштадтий",mass:281,group:10,period:7,category:"transition",valences:[],oxidationStates:[],shells:[2,8,18,32,32,16,2],color:"#d0d0e0",nameEn:"Darmstadtium"},{Z:111,symbol:"Rg",name:"Рентгений",mass:282,group:11,period:7,category:"transition",valences:[],oxidationStates:[],shells:[2,8,18,32,32,17,2],color:"#ffd123",nameEn:"Roentgenium"},{Z:112,symbol:"Cn",name:"Коперниций",mass:285,group:12,period:7,category:"transition",valences:[2],oxidationStates:[2],shells:[2,8,18,32,32,18,2],color:"#b8b8d0",nameEn:"Copernicium"},{Z:113,symbol:"Nh",name:"Нихоний",mass:286,group:13,period:7,category:"postmetal",valences:[1,3],oxidationStates:[1,3],shells:[2,8,18,32,32,18,3],color:"#a6544d",nameEn:"Nihonium"},{Z:114,symbol:"Fl",name:"Флеровий",mass:289,group:14,period:7,category:"postmetal",valences:[2,4],oxidationStates:[2,4],shells:[2,8,18,32,32,18,4],color:"#575961",nameEn:"Flerovium"},{Z:115,symbol:"Mc",name:"Московий",mass:290,group:15,period:7,category:"postmetal",valences:[3],oxidationStates:[3],shells:[2,8,18,32,32,18,5],color:"#9e4fb5",nameEn:"Moscovium"},{Z:116,symbol:"Lv",name:"Ливерморий",mass:293,group:16,period:7,category:"postmetal",valences:[2],oxidationStates:[2],shells:[2,8,18,32,32,18,6],color:"#ab5c00",nameEn:"Livermorium"},{Z:117,symbol:"Ts",name:"Теннессин",mass:294,group:17,period:7,category:"halogen",valences:[1],oxidationStates:[-1],shells:[2,8,18,32,32,18,7],color:"#754f45",nameEn:"Tennessine"},{Z:118,symbol:"Og",name:"Оганесон",mass:294,group:18,period:7,category:"noble",valences:[],oxidationStates:[0],shells:[2,8,18,32,32,18,8],color:"#428296",nameEn:"Oganesson"}],Xo={};for(const n of jt)Xo[n.symbol]=n;const U_=["alkali","alkaline","transition","postmetal","lanthanide","actinide"],F_=n=>{var e;return U_.includes((e=Xo[n])==null?void 0:e.category)},H_={CO2:"linear",CS2:"linear",H2O:"bent",H2S:"bent",SO2:"bent",NH3:"pyramid",PH3:"pyramid",BF3:"flat3",SO3:"flat3",CH4:"tetra",SiH4:"tetra",CCl4:"tetra"},B_=104.5*(Math.PI/180),k_=107*(Math.PI/180),Yc={H2O:104.5,H2S:92.1,H2Se:90.6,H2Te:89.5,OF2:103.2,SCl2:102.7,SO2:119.5,O3:116.8,NO2:134.3,NH3:107,PH3:93.5,AsH3:91.8,SbH3:91.7,NF3:102.5,PF3:97.8,PCl3:100.3,NCl3:107.1,AsCl3:98.8},Pn=n=>{var e;return .3+Math.min(((e=Xo[n])==null?void 0:e.period)??2,6)*.075},z_={H:.31,B:.84,C:.76,N:.71,O:.66,F:.57,Si:1.11,P:1.07,S:1.05,Cl:1.02,As:1.19,Se:1.2,Br:1.2,Te:1.38,I:1.39},jc=n=>{var e;return z_[n]??.6+Math.min(((e=Xo[n])==null?void 0:e.period)??3,6)*.1},V_=(n,e)=>(jc(n)+jc(e))*.75+.35,id=(n,e,t,i)=>{const s=[];if(!e.length)return s;if(n==="linear")s.push([t,0,0]),s.push([-t,0,0]);else if(n==="chain2"||e.length===1)s.push([t,0,0]);else if(n==="bent"||e.length===2){const o=(i??B_)/2;s.push([-t*Math.sin(o),t*Math.cos(o),0]),s.push([t*Math.sin(o),t*Math.cos(o),0])}else if(n==="pyramid"||e.length===3&&!G_(n)){const a=Math.acos(Math.sqrt((Math.cos(i??k_)+.5)/1.5));for(let r=0;r<3;r++){const l=r*2*Math.PI/3;s.push([Math.sin(a)*Math.cos(l),Math.cos(a),Math.sin(a)*Math.sin(l)].map(c=>c*t))}}else if(n==="flat3"||e.length===3)for(let o=0;o<3;o++){const a=o*2*Math.PI/3;s.push([t*Math.sin(a),0,t*Math.cos(a)])}else{const o=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]];for(const l of o)s.push(l.map(c=>c/Math.sqrt(3)*t));const a=Math.max(e.length,5),r=Math.PI*(3-Math.sqrt(5));for(let l=4;l<e.length;l++){const c=1-2*(l-3.5)/a,h=Math.sqrt(Math.max(0,1-c*c)),p=r*l;s.push([Math.cos(p)*h*t,c*t,Math.sin(p)*h*t])}}return s},G_=n=>n==="flat3",W_=()=>{const n=[-.72,-.72,.72];return{atoms:[{sym:"C",pos:[0,0,0]},{sym:"H",pos:[.63,.63,.63]},{sym:"H",pos:[.63,-.63,-.63]},{sym:"H",pos:[-.63,.63,-.63]},{sym:"O",pos:n},{sym:"H",pos:[n[0]+.49,n[1]-.74,n[2]+.13]}],bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:4,b:5,order:1}],labels:[],ionMode:!1}},X_=n=>{const e=[],t=[];for(let i=0;i<n;i++)e.push({sym:"C",pos:[i*1.15,i%2?.32:-.32,i%2?-.32:.32]}),i>0&&t.push({a:i-1,b:i,order:1});for(let i=0;i<n;i++){const o=i===0||i===n-1?[[0,.85,.6],[0,-.85,.6],[0,0,-1]]:[[0,.9,.45],[0,-.9,.45]],a=e[i].pos;for(const r of o)e.push({sym:"H",pos:[a[0]+r[0],a[1]+r[1],a[2]+r[2]]}),t.push({a:i,b:e.length-1,order:1})}return{atoms:e,bonds:t,labels:[],ionMode:!1}},q_=()=>({atoms:[{sym:"C",pos:[-1.3,0,0]},{sym:"C",pos:[0,0,0]},{sym:"O",pos:[1.14,.72,0]},{sym:"H",pos:[1.78,1.14,.3]},{sym:"H",pos:[-1.95,.72,.36]},{sym:"H",pos:[-1.95,-.72,-.36]},{sym:"H",pos:[-1.55,.02,1.02]},{sym:"H",pos:[-.12,.86,-.74]},{sym:"H",pos:[.22,-.86,-.52]}],bonds:[{a:0,b:1,order:1},{a:0,b:4,order:1},{a:0,b:5,order:1},{a:0,b:6,order:1},{a:1,b:7,order:1},{a:1,b:8,order:1},{a:1,b:2,order:1},{a:2,b:3,order:1}],labels:[],ionMode:!1}),Z_=()=>({atoms:[{sym:"C",pos:[-1.35,.1,0]},{sym:"C",pos:[0,0,0]},{sym:"O",pos:[.18,.95,.86]},{sym:"O",pos:[.86,-.74,-.56]},{sym:"H",pos:[1.56,-.34,-.76]},{sym:"H",pos:[-2,.82,.36]},{sym:"H",pos:[-2,-.62,-.44]},{sym:"H",pos:[-1.62,-.02,1.04]}],bonds:[{a:0,b:1,order:1},{a:0,b:5,order:1},{a:0,b:6,order:1},{a:0,b:7,order:1},{a:1,b:2,order:2},{a:1,b:3,order:1},{a:3,b:4,order:1}],labels:[],ionMode:!1}),sd=(n,e)=>Array.from({length:n},(t,i)=>{const s=i*2*Math.PI/n;return[e*Math.cos(s),e*Math.sin(s),0]}),$_=()=>{const e=sd(6,1.39),t=e.map(s=>({sym:"C",pos:s})),i=[];for(let s=0;s<6;s++){const o=1.776978417266187;t.push({sym:"H",pos:[e[s][0]*o,e[s][1]*o,0]}),i.push({a:s,b:(s+1)%6,order:s%2?1:2}),i.push({a:s,b:6+s,order:1})}return{atoms:t,bonds:i,labels:[],ionMode:!1}},Y_=()=>{const e=sd(6,1.39),t=e.map(o=>({sym:"C",pos:o})),i=[],s=[1.39+1.52,0,0];t.push({sym:"C",pos:s}),i.push({a:0,b:6,order:1});for(let o=0;o<6;o++){if(i.push({a:o,b:(o+1)%6,order:o%2?1:2}),o===0)continue;const a=1+1.08/1.39;t.push({sym:"H",pos:[e[o][0]*a,e[o][1]*a,0]}),i.push({a:o,b:t.length-1,order:1})}for(const o of[[.62,.88,.55],[.62,-.88,.55],[.62,0,-1.02]])t.push({sym:"H",pos:[s[0]+o[0],s[1]+o[1],s[2]+o[2]]}),i.push({a:6,b:t.length-1,order:1});return{atoms:t,bonds:i,labels:[],ionMode:!1}},j_=()=>{const e=[],t=[],i=[];for(let s=0;s<6;s++){const o=s*2*Math.PI/6,a=s%2?1:-1;i.push([1.46*Math.cos(o),a*.25,1.46*Math.sin(o)]),e.push({sym:"C",pos:i[s]})}for(let s=0;s<6;s++)t.push({a:s,b:(s+1)%6,order:1});for(let s=0;s<6;s++){const o=s*2*Math.PI/6,a=s%2?1:-1,r=i[s];e.push({sym:"H",pos:[r[0],r[1]-a*1.05,r[2]]}),t.push({a:s,b:e.length-1,order:1}),e.push({sym:"H",pos:[r[0]+Math.cos(o)*.85,r[1]+a*.5,r[2]+Math.sin(o)*.85]}),t.push({a:s,b:e.length-1,order:1})}return{atoms:e,bonds:t,labels:[],ionMode:!1}},K_=()=>{const e=[{sym:"C",pos:[-.665,0,0]},{sym:"C",pos:[.665,0,0]}],t=[{a:0,b:1,order:2}];for(const[i,s]of[[0,-1],[1,1]])for(const o of[1,-1])e.push({sym:"H",pos:[s*(.665+.56),o*.92,0]}),t.push({a:i,b:e.length-1,order:1});return{atoms:e,bonds:t,labels:[],ionMode:!1}},J_=()=>({atoms:[{sym:"C",pos:[-.6,0,0]},{sym:"C",pos:[.6,0,0]},{sym:"H",pos:[-1.66,0,0]},{sym:"H",pos:[1.66,0,0]}],bonds:[{a:0,b:1,order:3},{a:0,b:2,order:1},{a:1,b:3,order:1}],labels:[],ionMode:!1}),Q_={H:1,B:3,C:4,N:5,O:6,F:7,Si:4,P:5,S:6,Cl:7,As:5,Se:6,Br:7,Te:6,I:7},ev=(n,e,t,i)=>{const s=Q_[n]??0,o=Math.max(0,Math.round((s-t)/2));if(!o)return[];const a=[];if(e==="chain2"&&o===3)for(let r=0;r<3;r++){const l=r*2*Math.PI/3+Math.PI/2;a.push([Math.cos(l)*i*.95,0,Math.sin(l)*i*.95])}else e==="pyramid"&&o===1?a.push([0,-i,0]):e==="bent"&&o===2&&(a.push([-Math.sin(.9)*i,-Math.cos(.9)*i,0]),a.push([Math.sin(.9)*i,-Math.cos(.9)*i,0]));return a};function od(n,e){var R,P;const t=e.replace(/[()]/g,"");if(t==="CH3OH"||t==="CH4O")return W_();if(t==="C2H5OH"||t==="C2H6O")return q_();if(t==="CH3COOH"||t==="C2H4O2")return Z_();if(t==="H2O2")return{atoms:[{sym:"O",pos:[-.62,0,0]},{sym:"O",pos:[.62,0,0]},{sym:"H",pos:[-1.18,.42,.35]},{sym:"H",pos:[1.18,-.42,.35]}],bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:1,b:3,order:1}],labels:[],ionMode:!1};if(t==="C6H6")return $_();if(t==="C7H8")return Y_();if(t==="C6H12")return j_();if(t==="C2H4")return K_();if(t==="C2H2")return J_();const i=/^C(\d+)H(\d+)$/.exec(t);if(i&&+i[1]>=2&&+i[2]===2*+i[1]+2)return X_(+i[1]);const s=n.cat[0],o=n.an;if(F_(s.sym)&&o.kind!=="plain")return nv(n);const a=[];if(o.kind==="group")for(const _ of o.items)_.sym!==s.sym&&a.push({sym:_.sym,n:_.n});else if(o.kind==="fold")for(const _ of o.items)a.push({sym:_.sym,n:_.n});else for(const _ of o.parts)a.push({sym:_.sym,n:_.n});const r=o.kind!=="plain"&&((R=o.re)==null?void 0:R.formula)==="OH",l=[],c=s.sym==="H"&&o.kind!=="plain";if(c)for(let _=0;_<s.n;_++)l.push("H");else if(r)for(let _=0;_<o.n;_++)l.push("O");else{const _=["S","N","P","C","Si","Cr","Cl"],b=a.find(I=>_.includes(I.sym));for(const I of a)if(!(b&&I.sym===b.sym))for(let O=0;O<I.n;O++)l.push(I.sym);if(b)for(let I=0;I<b.n;I++)l.push(b.sym)}const h=c?((P=o.re)==null?void 0:P.formula)??"O":s.sym,p=e.replace(/[()]/g,"");let u=H_[p];u||(l.length===1?u="chain2":l.length===2?u="bent":l.length===3?u="pyramid":u="tetra");const m=Pn(h),g=l.length?V_(h,l[0]):m+.65,v=Yc[p]?Yc[p]*(Math.PI/180):null,f=id(u,l,g,v),d=c?1:Math.max(1,s.n??1),x=_=>d===1?[0,0,0]:[(_-(d-1)/2)*1.15,0,0],y=[],S=[];for(let _=0;_<d;_++)y.push({sym:h,pos:x(_)});for(let _=1;_<d;_++)S.push({a:_-1,b:_,order:1});l.forEach((_,b)=>{const I=b%d,O=x(I),D=f[b];y.push({sym:_,pos:[O[0]+D[0],O[1]+D[1],O[2]+D[2]]}),S.push({a:I,b:y.length-1,order:tv(n,l)})});const E=[],M=S.reduce((_,b)=>_+(b.order??1),0),A=d===1?ev(h,u,M,Pn(h)*.85+.2):[];return{atoms:y,bonds:S,labels:E,lonePairs:A,ionMode:!1}}const tv=(n,e)=>{const t=n.cat[0],i=n.an,s=t.val*t.n,o=i.kind==="plain"?(i.parts??[]).reduce((r,l)=>r+l.val*l.n,0):i.val*i.n;if(s!==o)return 1;const a=s/Math.max(e.length,1);return Number.isInteger(a)&&a>=1&&a<=3?a:1};function nv(n){const e=n.cat[0],t=n.an,i=t.re,s=[],o=[],a=[],r=e.val,l=t.val,c=e.n,h=t.n??1,p=Eo(i.formula,[0,0,0],1).length===1,u=(d,x)=>d*2*Math.PI/Math.max(x,1),m=new Set,g=(d,x)=>{const y=d<x?d+":"+x:x+":"+d;m.has(y)||d===x||(m.add(y),a.push({a:d,b:x,order:1,thin:!0,ionic:!0}))},v=d=>(s.push({sym:e.sym,pos:d,big:!0}),o.push({pos:[d[0],d[1]+.75,d[2]],txt:e.sym+Kc(r,!0)}),s.length-1),f=d=>{const x=Eo(i.formula,d,.55),y=s.length;for(const S of x)s.push(S);o.push({pos:[d[0],d[1]+.9,d[2]],txt:sv(i)+Kc(l,!1)});for(let S=y+1;S<s.length;S++)a.push({a:y,b:S,order:1,thin:!0});return y};if(p)if(c+h===2){const d=Eo(i.formula,[0,0,0],.55).reduce((E,M)=>Math.max(E,Math.hypot(M.pos[0],M.pos[1],M.pos[2])),.4),x=Pn(e.sym)+d+.5,y=v([x*.62,.3,0]),S=f([-x*.62,-.3,0]);g(y,S)}else if(c===2&&h===3||c===3&&h===2){const d=h===3,x=1.5,y=[];for(let E=0;E<3;E++){const M=u(E,3)+Math.PI/6;y.push((d?f:v)([Math.cos(M)*x,Math.sin(M)*x,0]))}const S=[];for(const E of[.95,-.95])S.push((d?v:f)([0,0,E]));for(const E of S)for(const M of y)g(E,M)}else if(Math.abs(c-h)<=1){const d=c+h,x=c>h,y=[];for(let M=0;M<d;M++){const A=c===h?M%2===0:M%2===(x?0:1);y.push({isCat:A,k:M})}const S=[],E=Math.max(1.4,.55+.22*d);for(const M of y){const A=u(M.k,d),R=1+.14*Math.cos((A+(d%2?.5:0))*d),P=[Math.cos(A)*E*R,Math.sin(A)*E*.82,R-1];S.push(M.isCat?v(P):f(P))}for(let M=0;M<d;M++){const A=(M+1)%d;y[M].isCat!==y[A].isCat&&g(S[M],S[A])}}else{const d=Math.max(1.4,.55+.22*(h+1)),x=v([0,0,0]);for(let y=0;y<h;y++){const S=u(y,h),E=[Math.cos(S)*d,y%2?.55:-.55,Math.sin(S)*d],M=f(E);g(x,M)}}else{const d=1.6+.4*Math.max(c,h),x=[],y=[];for(let E=0;E<c;E++){const M=E+h/(c*2),A=[Math.cos(u(M,c+h))*d,Math.sin(u(M,c+h))*d*.7,E%2?.3:-.3];x.push({i:v(A),x:A[0],z:A[1]})}for(let E=0;E<h;E++){const M=[Math.cos(u(E,c+h))*-d,Math.sin(u(E,c+h))*-d*.7,E%2?-.3:.3];y.push({start:f(M),x:M[0],z:M[1]})}const S=(E,M)=>{let A=null,R=1/0;for(const P of E){const _=(P.x-M.x)*(P.x-M.x)+(P.z-M.z)*(P.z-M.z);_<R&&(R=_,A=P)}return A};for(const E of y)g(S(x,E).i,E.start);for(const E of x)g(E.i,S(y,E).start)}return{atoms:s,bonds:a,labels:o,ionMode:!0}}function iv(n){const e=[],t=[];for(const o in n)for(let a=0;a<n[o];a++)t.push(o);const i=t.length,s=i>1?.62*Math.cbrt(3*i/(4*Math.PI))*1.7:0;for(let o=0;o<i;o++){const a=o+.5,r=Math.acos(1-2*a/i),l=Math.PI*(1+Math.sqrt(5))*a,c=s*Math.cbrt(a/i),h=[Math.cos(l)*Math.sin(r),Math.cos(r),Math.sin(l)*Math.sin(r)];e.push({sym:t[o],pos:h.map(p=>p*c),big:!1})}return{atoms:e,bonds:[],labels:[],ionMode:!1}}const Kc=(n,e)=>n===1?e?"+":"−":n+(e?"+":"−"),sv=n=>n.formula,Eo=(n,e,t)=>{const i=[];for(const p of av(n))for(let u=0;u<p.n;u++)i.push(p.sym);const s=i[0],o=i.slice(1),r=Pn(s)*t+Pn(o[0]??"O")*t+.05,l=o.length>4?"sphere":o.length===4?"tetra":o.length===3?"flat3":o.length===2?"bent":"chain2",c=id(l,o,r),h=[{sym:s,pos:e.slice()}];return o.forEach((p,u)=>h.push({sym:p,pos:ov(e,c[u])})),h},ov=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],av=n=>{const e=[];let t=0;for(;t<n.length;)if(n[t]>="A"&&n[t]<="Z"){let i=n[t++];t<n.length&&n[t]>="a"&&n[t]<="z"&&(i+=n[t++]);let s="";for(;t<n.length&&n[t]>="0"&&n[t]<="9";)s+=n[t++];e.push({sym:i,n:s===""?1:Number(s)})}else t++;return e},Do=new U(0,1,0),ad=(n,e)=>({rad:(n?.042:.062)/(e>1?1.5:1),offs:e===1?[0]:[-.08,.08]}),rd=n=>{const e=Math.abs(n.y)>.92?new U(1,0,0):Do;return new U().crossVectors(n,e).normalize()},$n=new Map,xi={legacy:!1},rv=n=>{xi.legacy=n},ld={lone:!0},cd=n=>{ld.lone=n},qo=n=>(n.userData.shared=!0,n),lv=n=>{let e=$n.get("r"+n);return e||(e=qo(new Rn({uniforms:{uColor:{value:new ke(n)}},vertexShader:["varying vec3 vN;","varying vec3 vP;","void main() {","  vN = normalize(normalMatrix * normal);","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  vP = mv.xyz;","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["varying vec3 vN;","varying vec3 vP;","uniform vec3 uColor;","void main() {","  float f = pow(1.0 - abs(dot(normalize(vN), normalize(-vP))), 2.4);","  gl_FragColor = vec4(uColor, f * 0.55);","}"].join(`
`),blending:wo,transparent:!0,depthWrite:!1})),$n.set("r"+n,e),e)},cv=n=>{const e=(xi.legacy?"lb":"b")+n;let t=$n.get(e);return t||(t=xi.legacy?new Kh({color:n}):new os({color:n,roughness:.32,metalness:.12}),qo(t),$n.set(e,t),t)},hv=n=>{const e=(xi.legacy?"l":"")+(n?"sl":"s");let t=$n.get(e);if(t)return t;const i=n?9413312:14146790;return t=xi.legacy?new Kh({color:i}):new os({color:i,roughness:.5}),qo(t),$n.set(e,t),t},dv=n=>{const e="l"+n;let t=$n.get(e);return t||(t=qo(new os({color:n,transparent:!0,opacity:.5,roughness:.6,depthWrite:!1})),$n.set(e,t),t)},Xi={body:cv,rim:lv,stick:hv,lone:dv};function hd(n,e){const t=new Cn,i=new Wn(1,18,14),s=new Wn(1,16,12),o=new Wo(1,1,1,10),a=[],r=n.atoms.length<=60&&!xi.legacy;for(const c of n.atoms){const h=(c.big?Pn(c.sym)*1.15:Pn(c.sym))*.85,p=e(c.sym),u=new $e(i,Xi.body(p));if(u.scale.setScalar(h),u.position.set(c.pos[0],c.pos[1],c.pos[2]),u.userData.sym=c.sym,t.add(u),r){const m=new $e(s,Xi.rim(p));m.scale.setScalar(h*1.07),m.position.copy(u.position),t.add(m)}a.push({sym:c.sym,pos:c.pos,r:h})}for(const c of n.bonds){const h=a[c.a],p=a[c.b];if(!h||!p)continue;const u=new U(p.pos[0]-h.pos[0],p.pos[1]-h.pos[1],p.pos[2]-h.pos[2]),m=u.length();if(m<1e-4)continue;const g=u.clone().normalize(),v=c.thin?1:c.order??1,{rad:f,offs:d}=ad(c.thin,v),x=new qn().setFromUnitVectors(Do,g),y=rd(g),S=new U(h.pos[0],h.pos[1],h.pos[2]),E=c.ionic?5:1;for(const M of d)for(let A=0;A<E;A++){const R=new $e(o,Xi.stick(c.thin));if(E===1)R.scale.set(f,m,f),R.position.copy(S).addScaledVector(g,m*.5).addScaledVector(y,M);else{const P=m/E,_=P*.55,b=(A+.5)*P;R.scale.set(f*.85,_,f*.85),R.position.copy(S).addScaledVector(g,b).addScaledVector(y,M)}R.quaternion.copy(x),t.add(R)}}if(!n.ionMode)for(const c of a){const h=vi(c.sym,"molSym"),p=new as(h);p.position.set(c.pos[0],c.pos[1]+c.r+.28,c.pos[2]),t.add(p)}const l=ld.lone&&!xi.legacy?n.lonePairs??[]:[];if(l.length){const c=new Wn(1,14,12),h=new U;for(const p of l){const u=new $e(c,Xi.lone(8374527));u.scale.set(.19,.28,.19),u.position.set(p[0],p[1],p[2]),h.set(p[0],p[1],p[2]).normalize(),u.quaternion.setFromUnitVectors(Do,h),t.add(u)}}for(const c of n.labels??[]){const h=vi(c.txt,"molIon"),p=new as(h);p.position.set(c.pos[0],c.pos[1],c.pos[2]),t.add(p)}return{group:t}}const uv=n=>n>="A"&&n<="Z",fv=n=>n>="a"&&n<="z",dd=n=>n>="0"&&n<="9",ud=n=>{const e=(n??"").trim().replace(/\s/g,"");return e===""&&di("empty"),e};function Ds(n){return vl(ud(n),0,!1,null).items}function pv(n){const e=[];return vl(ud(n),0,!1,e),e}function vl(n,e,t,i){const s=[];for(;e<n.length;){const o=n[e];if(o===")"){if(t)return{items:s,i:e+1};di("extraClose",{ch:o})}if(o==="("){const a=vl(n,e+1,!0,i),r=Jc(n,a.i);s.push({type:"group",items:a.items,n:r.n}),e=r.i}else if(uv(o)){let a=o;e++,e<n.length&&fv(n[e])&&(a+=n[e++]);const r=e-a.length,l=Jc(n,e);s.push({type:"el",sym:a,n:l.n}),i&&i.push({sym:a,n:l.n,start:r,end:e}),e=l.i}else dd(o)?di("digitPos",{ch:o,at:e}):di("char",{ch:o,at:e})}return t&&di("unclosed",{at:e}),{items:s,i:e}}const di=(n,e)=>{const t=new Error(n);throw t.code=n,Object.assign(t,e),t};function Jc(n,e){let t="";for(;e<n.length&&dd(n[e]);)t+=n[e++];return t!==""&&Number(t)===0&&di("zeroIndex"),t.length>3&&di("hugeIndex"),{n:t===""?1:Number(t),i:e}}function Zo(n){const e={};for(const t of n)if(t.type==="el")e[t.sym]=(e[t.sym]||0)+t.n;else{const i=Zo(t.items);for(const s in i)e[s]=(e[s]||0)+i[s]*t.n}return e}const mv=[{formula:"O",name:"оксид",valence:2,charge:-2,acid:"",nameEn:"oxide"},{formula:"OH",name:"гидроксид",valence:1,charge:-1,acid:"",nameEn:"hydroxide"},{formula:"NO3",name:"нитрат",valence:1,charge:-1,acid:"HNO3",nameEn:"nitrate"},{formula:"NO2",name:"нитрит",valence:1,charge:-1,acid:"HNO2",nameEn:"nitrite"},{formula:"HSO4",name:"гидросульфат",valence:1,charge:-1,acid:"H2SO4",nameEn:"hydrogensulfate"},{formula:"HCO3",name:"гидрокарбонат",valence:1,charge:-1,acid:"H2CO3",nameEn:"hydrogencarbonate"},{formula:"H2PO4",name:"дигидрофосфат",valence:1,charge:-1,acid:"H3PO4",nameEn:"dihydrogenphosphate"},{formula:"SO4",name:"сульфат",valence:2,charge:-2,acid:"H2SO4",nameEn:"sulfate"},{formula:"SO3",name:"сульфит",valence:2,charge:-2,acid:"H2SO3",nameEn:"sulfite"},{formula:"CO3",name:"карбонат",valence:2,charge:-2,acid:"H2CO3",nameEn:"carbonate"},{formula:"SiO3",name:"силикат",valence:2,charge:-2,acid:"H2SiO3",nameEn:"silicate"},{formula:"CrO4",name:"хромат",valence:2,charge:-2,acid:"H2CrO4",nameEn:"chromate"},{formula:"S",name:"сульфид",valence:2,charge:-2,acid:"H2S",nameEn:"sulfide"},{formula:"Cl",name:"хлорид",valence:1,charge:-1,acid:"HCl",nameEn:"chloride"},{formula:"F",name:"фторид",valence:1,charge:-1,acid:"HF",nameEn:"fluoride"},{formula:"Br",name:"бромид",valence:1,charge:-1,acid:"HBr",nameEn:"bromide"},{formula:"I",name:"иодид",valence:1,charge:-1,acid:"HI",nameEn:"iodide"},{formula:"PO4",name:"фосфат",valence:3,charge:-3,acid:"H3PO4",nameEn:"phosphate"},{formula:"PO3",name:"фосфит",valence:3,charge:-3,acid:"H3PO3",nameEn:"phosphite"},{formula:"MnO4",name:"перманганат",valence:1,charge:-1,acid:"HMnO4",nameEn:"permanganate"},{formula:"MnO4",name:"манганат",valence:2,charge:-2,acid:"H2MnO4",nameEn:"manganate"},{formula:"ClO3",name:"хлорат",valence:1,charge:-1,acid:"HClO3",nameEn:"chlorate"},{formula:"ClO4",name:"перхлорат",valence:1,charge:-1,acid:"HClO4",nameEn:"perchlorate"},{formula:"ClO",name:"гипохлорит",valence:1,charge:-1,acid:"HClO",nameEn:"hypochlorite"},{formula:"BrO3",name:"бромат",valence:1,charge:-1,acid:"HBrO3",nameEn:"bromate"},{formula:"IO3",name:"иодат",valence:1,charge:-1,acid:"HIO3",nameEn:"iodate"},{formula:"Cr2O7",name:"дихромат",valence:2,charge:-2,acid:"H2Cr2O7",nameEn:"dichromate"}],sn={};for(const n of jt)sn[n.symbol]=n;const gv=["","I","II","III","IV","V","VI","VII","VIII"],ii=n=>gv[n]??n,_v={Fe3O4:"exFe3O4"},rs=n=>{const e={};for(const t of n)if(t.type==="el")e[t.sym]=(e[t.sym]||0)+t.n;else{const i=rs(t.items);for(const s in i)e[s]=(e[s]||0)+i[s]*t.n}return e},Ha={},vv=n=>(Ha[n]||(Ha[n]=rs(Ds(n))),Ha[n]),Qc=n=>{const e=[];for(const t of mv){const i=vv(t.formula);let s=null,o=!0;for(const a in i){if(!n[a]){o=!1;break}const r=n[a]/i[a];if(!Number.isInteger(r)||r<1){o=!1;break}if(s===null)s=r;else if(s!==r){o=!1;break}}if(o){for(const a in n)if(!i[a]){o=!1;break}o&&e.push({...t,n:s})}}return e},kr=n=>n.length===1&&n[0].type==="group"?Qc(rs(n[0].items)).map(e=>({re:e,n:n[0].n,kind:"group",items:n[0].items})):Qc(rs(n)).map(e=>({re:e,n:e.n,kind:"fold",items:n})),fd=n=>n.kind==="fold"?n.items.map(e=>({sym:e.sym,n:e.n/n.n})):n.items.map(e=>({...e})),Ba=n=>{var t;let e=[[]];for(const i of n){const s=(((t=sn[i.sym])==null?void 0:t.valences)??[]).filter(a=>a>0);if(!s.length)return null;const o=[];for(const a of e)for(const r of s)o.push([...a,r]);e=o}return e},qi=n=>{for(const e of n)if(e.type==="group")return null;return n.map(e=>({sym:e.sym,n:e.n}))},ka=(n,e)=>e.reduce((t,i,s)=>t+i*n[s].n,0),xv=(n,e)=>{let t=Math.abs(Math.trunc(n))||0,i=Math.abs(Math.trunc(e))||0;for(;i;){const s=t%i;t=i,i=s}return t},No=(n,e)=>n*e/xv(n,e),pd=(n,e,t)=>{const i=No(e,t.val),s=i/e,o=i/t.val,a=t.items.map(l=>l.sym+(l.n===1?"":l.n)).join(""),r=t.items.length>1?"("+a+")"+(o===1?"":o):a+(o===1?"":o);return n+(s===1?"":s)+r},zr=n=>n.map(e=>e.type==="el"?e.sym+e.n:"("+zr(e.items)+")"+e.n).join("");let za=!1;const To=(n,e)=>{if(za)return null;za=!0;try{const t=_n(e);if(t.verdict!=="ok")return null;const i=t.atoms,s=[];for(const o in i)(n[o]??0)!==i[o]&&s.push({sym:o,dir:i[o]>(n[o]??0)?"add":"remove",have:n[o]??0,need:i[o]});for(const o in n)i[o]||s.push({sym:o,dir:"remove",have:n[o],need:0});return s.length?s:null}finally{za=!1}};function _n(n){var c,h,p;let e;try{e=Ds(n)}catch(u){return{verdict:"err",code:u.code,ch:u.ch}}for(const u of e)if(u.n===0)return{verdict:"fail",code:"zeroIndex"};const t=u=>{for(const m of u){if(m.type==="el"&&!sn[m.sym])return m.sym;if(m.type==="group"){const g=t(m.items);if(g)return g}}return null},i=t(e);if(i)return{verdict:"fail",code:"unknown",sym:i};const s=rs(e);if(!Object.values(s).some(u=>u>0))return{verdict:"fail",code:"noAtoms"};if(Object.keys(s).length===1&&e[0].n===1)return{verdict:"ok",kind:"atom",items:e,atoms:s};if(zr(e)==="H2O2")return{verdict:"ok",kind:"molecule",items:e,atoms:s,solution:{covalent:!0,cat:[{sym:"O",n:2,val:2,rom:"II"}],an:{kind:"plain",items:[],parts:[],n:1,val:1}}};const a=e.every(u=>u.type==="el")?_v[zr(e)]:null;if(a)return{verdict:"fail",code:a,atoms:s};if(e.length===1&&e[0].type==="el")return{verdict:"ok",kind:"simple",items:e,atoms:s};const r=[];for(let u=1;u<e.length;u++){const m=e.slice(0,u),g=e.slice(u),v=qi(m)??[];if(v.length!==m.length)continue;const f=kr(g);for(const x of f)for(const y of Ba(v)??[])ka(v,y)===x.re.valence*x.n&&r.push({cat:v.map((S,E)=>({...S,val:y[E],rom:ii(y[E])})),an:{kind:x.kind,items:x.items.map(S=>({...S})),re:x.re,n:x.n,val:x.re.valence}});const d=qi(g);if(d){const x=Ba(v),y=Ba(d);if(x&&y)for(const S of x)for(const E of y)ka(v,S)===ka(d,E)&&r.push({cat:v.map((M,A)=>({...M,val:S[A],rom:ii(S[A])})),an:{kind:"plain",items:g.map(M=>({type:"el",sym:M.sym,n:M.n})),parts:d.map((M,A)=>({...M,val:E[A],rom:ii(E[A])}))}})}}if(r.length){const u=r.find(m=>m.an.kind!=="plain")??r[0];return{verdict:"ok",kind:"molecule",items:e,atoms:s,solution:u,solCount:r.length}}if(!e.some(u=>u.type==="group")){const u=n.replace(/[()]/g,""),m=Object.keys(s).map(y=>{var S;return{sym:y,n:s[y],v:(((S=sn[y])==null?void 0:S.valences)??[]).filter(E=>E>0)[0]??0}}),g=m.reduce((y,S)=>y+S.n,0),v=m.reduce((y,S)=>y+S.v*S.n,0),f=/^C(\d+)H(\d+)$/.exec(u),d=new Set(["C2H2","C2H4","C6H6","C6H12","C7H8"]);if((u==="CH3OH"||u==="CH4O"||d.has(u)||f&&+f[1]>=2&&+f[2]===2*+f[1]+2)&&s.C>0&&m.every(y=>y.v>0)&&(d.has(u)||g>2&&v===2*(g-1)&&m.every(y=>y.v<=g-1)))return{verdict:"ok",kind:"molecule",items:e,atoms:s,solution:{covalent:!0,cat:[{sym:m[0].sym,n:m[0].n,val:m[0].v,rom:ii(m[0].v)}],an:{kind:"plain",items:[],parts:[],n:1,val:1}}}}for(let u=1;u<e.length;u++){const m=e.slice(0,u),g=e.slice(u),v=qi(m);if(!v||v.length!==m.length)continue;const f=kr(g)[0]??null;if(f){const x=(((c=sn[v[0].sym])==null?void 0:c.valences)??[1])[0]??1,y=fd(f),S=pd(v[0].sym,x,{val:f.re.valence,items:y});return{verdict:"fail",code:"idxResidue",sym:v[0].sym,rom1:ii(x),formula:f.re.formula,rom2:ii(f.re.valence),re:f.re,hint:S,diff:To(s,S),atoms:s}}const d=qi(g);if(d){const x=(((h=sn[v[0].sym])==null?void 0:h.valences)??[1])[0]??1,y=rs(g);if(y.H&&y.O&&v.length===1){const P=No(x,1),_=P/x,b=P,O=`${v[0].sym+(_===1?"":_)}(OH)${b}`;return{verdict:"fail",code:"ohBrackets",sym:v[0].sym,hint:O,diff:To(s,O),atoms:s}}const S=d[0],E=(((p=sn[S.sym])==null?void 0:p.valences)??[2]).filter(P=>P>0)[0]??2,M=No(x,E),A=v[0].sym+(M/x===1?"":M/x)+d.map(P=>P.sym+(M/E*P.n===1?"":M/E*P.n)).join(""),R=d.map(P=>{var b;const _=(((b=sn[P.sym])==null?void 0:b.valences)??[]).filter(I=>I>0);return{sym:P.sym,val:_[0]??1}});return{verdict:"fail",code:"idxPlain",sym:v[0].sym,rom1:ii(x),others:R,hint:A,diff:To(s,A),atoms:s}}}const l=yv(e,s);return{verdict:"fail",code:"noMatch",atoms:s,...l}}const yv=(n,e)=>{var s,o;const t=n.filter(a=>a.type==="el").map(a=>({sym:a.sym,n:a.n}));if(t.length<2)return{};const i=t.find(a=>{var r;return!(((r=sn[a.sym])==null?void 0:r.valences)??[]).some(l=>l>0)});for(let a=1;a<n.length;a++){const r=n.slice(0,a),l=n.slice(a),c=qi(r);if(!c||c.length!==r.length)continue;const h=(()=>{const g=kr(l)[0];if(g)return{kind:"residue",re:g.re,perUnit:fd(g)};const v=qi(l);return v?{kind:"plain",perUnit:v.map(f=>({sym:f.sym,n:f.n}))}:null})();if(!h)continue;const p=(((s=sn[c[0].sym])==null?void 0:s.valences)??[1]).filter(g=>g>0)[0]??1;let u;if(h.kind==="residue")u=pd(c[0].sym,p,{val:h.re.valence,items:h.perUnit});else{const g=(((o=sn[h.perUnit[0].sym])==null?void 0:o.valences)??[1]).filter(x=>x>0)[0]??1,v=No(p,g),f=v/p,d=v/g;u=c[0].sym+(f===1?"":f)+h.perUnit.map(x=>x.sym+(d*x.n===1?"":d*x.n)).join("")}const m=To(e,u);if(m)return{sym:i==null?void 0:i.sym,hint:u,diff:m}}return{sym:i==null?void 0:i.sym}},dn={};for(const n of jt)dn[n.symbol]=n;const Sv=["","I","II","III","IV","V","VI","VII","VIII"],As=n=>Sv[n]??String(n),eh={Na:"натрия",K:"калия",Ca:"кальция",Mg:"магния",Al:"алюминия",Fe:"железа",Cu:"меди",Zn:"цинка",Pb:"свинца",Ba:"бария",Ag:"серебра",H:"водорода",C:"углерода",N:"азота",Si:"кремния",P:"фосфора",S:"серы"},Vi=n=>{var t,i;if(fs()==="en")return(((t=dn[n])==null?void 0:t.nameEn)??n).toLowerCase();if(eh[n])return eh[n];const e=((i=dn[n])==null?void 0:i.name)??n;return e.endsWith("ий")?e.slice(0,-2)+"ия":e.endsWith("ь")?e.slice(0,-1)+"и":e.endsWith("о")?e.slice(0,-1)+"а":e.endsWith("а")?e.slice(0,-1)+"ы":e+"а"},th={HNO3:"Nitric",HNO2:"Nitrous",H2SO4:"Sulfuric",H2SO3:"Sulfurous",H2CO3:"Carbonic",H2SiO3:"Silicic",H3PO4:"Phosphoric",H2S:"HydrogenSulfide",HCl:"Hydrochloric",HF:"Hydrofluoric",HBr:"Hydrobromic",HI:"Hydroiodic",H2CrO4:"Chromic"},nh={H4C1:"Methane",H3N1:"Ammonia",H3P1:"Phosphine",H4Si1:"Silane",H4C1O1:"Methanol",H6C2:"Ethane",H8C3:"Propane",H10C4:"Butane",H6C2O1:"Ethanol",H4C2O2:"AceticAcid",H6C6:"Benzene",H8C7:"Toluene",H12C6:"Cyclohexane",H4C2:"Ethene",H2C2:"Ethyne"},Mv=n=>Object.keys(n).sort((e,t)=>{var i,s;return(((i=dn[e])==null?void 0:i.Z)??0)-(((s=dn[t])==null?void 0:s.Z)??0)}).map(e=>e+n[e]).join("");function bv(n){var c;const e=n.atoms??{},t=Ev(e);if(n.verdict!=="ok")return{mr:t,fr:[],klass:"",name:"",steps:[],arOf:{},bad:n};const i=n.solution,s=Cv(i.an,e,i.cat),o=Ov(i,e,s),a=Tv(e,t),r=Lv(i,e,t,a),l={};for(const h in e)l[h]=((c=dn[h])==null?void 0:c.mass)??0;return{mr:t,fr:a,klass:s,name:o,steps:r,arOf:l,bad:null}}const Ev=n=>{var t;let e=0;for(const i in n)e+=(((t=dn[i])==null?void 0:t.mass)??0)*n[i];return Math.round(e*10)/10},Tv=(n,e)=>{var i;const t=[];for(const s in n){const o=(((i=dn[s])==null?void 0:i.mass)??0)*n[s];t.push({sym:s,mass:o,pct:e?o/e*100:0})}return t.sort((s,o)=>o.pct-s.pct),t},Av=n=>{var t;if(n.kind==="group"||n.kind==="fold")return((t=n.re)==null?void 0:t.formula)==="OH";const e={};for(const i of n.parts??[])e[i.sym]=(e[i.sym]||0)+i.n;return e.H===1&&e.O===1&&Object.keys(e).length===2},Cv=(n,e,t)=>{var a;if(Object.keys(e).length===2&&e.H===2&&e.O===1)return"oxide";if(Av(n))return"base";const i=t[0],s=n.parts??[],o=n.kind==="group"||n.kind==="fold"?((a=n.re)==null?void 0:a.formula)==="O":s.length>0&&s.every(r=>r.sym==="O");return i.sym==="H"&&!o&&n.kind!=="plain"&&Pv(e)?"acid":i.sym==="H"&&n.kind==="plain"?"other":o&&i.sym!=="H"?"oxide":n.kind==="group"||n.kind==="fold"?"salt":"other"},ih={},wv=n=>Zo(Ds(n)),Rv=(n,e)=>{for(const t in e)if(n[t]!==e[t])return!1;for(const t in n)if(!e[t])return!1;return!0},md=n=>{for(const e in th){const t=ih[e]??(ih[e]=wv(e));if(Rv(n,t))return th[e]}return null},Pv=n=>md(n)!==null,sh=n=>n&&n[0].toUpperCase()+n.slice(1),Ov=(n,e,t)=>{const i=Mv(e);if(i==="H2O1")return L("nameWater");if(nh[i])return L("name"+nh[i]);if(n.covalent)return"";const s=n.cat,o=n.an,a=fs()==="en";if(t==="acid"){const l=md(e);return l?L("nameAcidNamed",{nm:L("acid"+l)}):L("nameAcid")}if(t==="base")return L("nameHydroxide",{el:Vi(s[0].sym),val:uo(s[0])});if(t==="oxide")return L("nameOxide",{el:Vi(s[0].sym),val:uo(s[0])});if(o.kind==="group"||o.kind==="fold"){const l=L("nameSalt",{res:sh(gl(o.re)),el:Vi(s[0].sym),val:uo(s[0])});return a?sh(l):l}if(o.kind==="plain"&&(o.parts??[]).length>0&&(o.parts??[]).every(l=>l.sym==="O"))return L("nameOxide",{el:Vi(s[0].sym),val:uo(s[0])});const r=(o.parts??[]).map(l=>Vi(l.sym)).join(a?" and ":" и ");return L("nameCompound",{el:Vi(s[0].sym),an:r})},uo=n=>{const e=dn[n.sym];return!e||e.valences.filter(t=>t>0).length<2?"":fs()==="en"?`(${As(n.val)})`:` (${As(n.val)})`},Lv=(n,e,t,i)=>{const s=n.cat,o=n.an,a=[];if(n.covalent){const m=Object.keys(e).map(g=>`${e[g]} × ${_t(dn[g].mass)}`);a.push(L("stepMr",{parts:m.join(" + "),mr:_t(t)}));for(const g of i)a.push(L("stepW",{sym:g.sym,mass:_t(g.mass),mr:_t(t),pct:_t(g.pct.toFixed(1))}));return a}const r=s.map(m=>`${m.sym} (${As(m.val)})`).join(", "),l=o.kind==="plain"?o.parts.map(m=>`${m.sym} (${As(m.val)})`).join(", "):`${gl(o.re)} ${o.re.formula} (${As(o.val)})`;a.push(L("stepValences",{list:`${r}, ${l}`}));const c=s[0].val*s[0].n;o.kind==="plain"?o.parts.reduce((m,g)=>m+g.val*g.n,0):o.val*o.n,a.push(L("stepCheck",{a:s[0].val,b:s[0].n,c:o.kind==="plain"?o.parts[0].val:o.val,d:o.kind==="plain"?o.parts[0].n:o.n}));const h=c,p=[];for(const m of s)p.push(L("stepFor",{n:h/m.val,sym:m.sym}));if(o.kind==="plain")for(const m of o.parts)p.push(L("stepFor",{n:h/m.val,sym:m.sym}));else p.push(L("stepFor",{n:h/o.val,sym:o.re.formula}));p.length&&a.push(L("stepIndexes",{list:p.join(", ")}));const u=Object.keys(e).map(m=>`${e[m]}·${_t(dn[m].mass)}`);a.push(L("stepMr",{parts:u.join(" + "),mr:_t(t)}));for(const m of i)a.push(L("stepW",{sym:m.sym,mass:_t(m.mass),mr:_t(t),pct:_t(m.pct.toFixed(1))}));return a},gd="sfx",Vr=()=>localStorage.getItem(gd)!=="off",Iv=n=>{localStorage.setItem(gd,n?"on":"off"),!n&&Yt?Yt.suspend():n&&(Yt==null||Yt.resume())};let Yt=null,Cs=null;const _d=n=>{if(!n&&!Vr())return null;if(!Yt){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Yt=new e,Cs=Yt.createGain(),Cs.gain.value=.18,Cs.connect(Yt.destination)}return Yt.state==="suspended"&&Yt.resume(),Yt},vd=.02,si=({freq:n,to:e,dur:t,type:i="sine",gain:s=1,delay:o=0,force:a=!1})=>{const r=_d(a);if(!r)return;const l=r.currentTime+o+vd,c=r.createOscillator(),h=r.createGain();c.type=i,c.frequency.setValueAtTime(n,l),e&&c.frequency.exponentialRampToValueAtTime(e,l+t),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(s,l+Math.min(.012,t*.3)),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(Cs),c.start(l),c.stop(l+t+.02)},Dv=({dur:n=.16,gain:e=1,from:t=1800,to:i=400,delay:s=0,force:o=!1})=>{const a=_d(o);if(!a)return;const r=a.currentTime+s+vd,l=Math.max(1,Math.floor(a.sampleRate*n)),c=a.createBuffer(1,l,a.sampleRate),h=c.getChannelData(0);for(let g=0;g<l;g++){const v=1-g/l;h[g]=(Math.random()*2-1)*v*v}const p=a.createBufferSource();p.buffer=c;const u=a.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(t,r),u.frequency.exponentialRampToValueAtTime(i,r+n),u.Q.value=.9;const m=a.createGain();m.gain.setValueAtTime(e,r),m.gain.exponentialRampToValueAtTime(1e-4,r+n),p.connect(u).connect(m).connect(Cs),p.start(r)};let oh=0;const Ht={tick(n=!1){const e=Date.now();e-oh<45||(oh=e,si({freq:1180,to:900,dur:.05,type:"triangle",gain:.35,force:n}))},snap(n=0){Dv({dur:.17,gain:.9,from:2400,to:380,delay:n}),si({freq:320,to:150,dur:.12,type:"square",gain:.16,delay:n})},grow(n=0){si({freq:420,to:880,dur:.14,type:"sine",gain:.5,delay:n})},done(){si({freq:660,dur:.16,type:"sine",gain:.5}),si({freq:990,dur:.28,type:"sine",gain:.4,delay:.12})},err(){si({freq:200,to:130,dur:.22,type:"sawtooth",gain:.28})},open(){si({freq:520,to:700,dur:.1,type:"sine",gain:.3})}},fo={alkali:"#b25750",alkaline:"#ab7847",transition:"#9c8a52",postmetal:"#5d84a3",metalloid:"#4f9180",nonmetal:"#4fa070",halogen:"#96619c",noble:"#55809f",lanthanide:"#a06687",actinide:"#7f63a8"},Gr=n=>L("cat"+n[0].toUpperCase()+n.slice(1)),ah=n=>Number.isInteger(n)?`(${n})`:_t(n),Nv=n=>n>=57&&n<=71||n>=89&&n<=103;let Va=[];function Uv(n,e){n.innerHTML="";for(const E of Va)E.disconnect();Va=[];const t=document.createElement("div");t.id="ptWrap";const i=document.createElement("div");i.id="ptScale",t.appendChild(i);const s=document.createElement("div");s.id="ptable",s.style.gridTemplateColumns="24px repeat(18, 68px)",s.style.gridTemplateRows="18px repeat(7, 56px) 10px repeat(2, 56px)";const o=[];for(let E=1;E<=18;E++){const M=document.createElement("div");M.className="gHead",M.style.gridRow="1",M.style.gridColumn=String(E+1),M.textContent=String(E),o.push(M),s.appendChild(M)}const a=[];for(let E=1;E<=7;E++){const M=document.createElement("div");M.className="pHead",M.style.gridRow=String(E+1),M.style.gridColumn="1",M.textContent=String(E),a.push(M),s.appendChild(M)}const r=(E,M)=>{for(let A=0;A<o.length;A++)o[A].classList.toggle("axis",A+1===E);for(let A=0;A<a.length;A++)a[A].classList.toggle("axis",A+1===M)},l=[],c=E=>{for(const M of l)M.node.classList.toggle("on",M.cat===E);s.classList.toggle("focus",!!E);for(const M of s.children)M.classList.toggle("lit",!!E&&M.dataset.cat===E)},h=document.createElement("div");h.id="ptLegend",h.style.gridRow="2 / span 3",h.style.gridColumn="4 / span 9";const p=document.createElement("div");p.className="legendCats";for(const E in fo){const M=document.createElement("button");M.type="button",M.className="legendItem",M.innerHTML=`<span class="dot" style="background:${fo[E]}"></span>${Gr(E)}`,M.addEventListener("mouseenter",()=>c(E)),M.addEventListener("mouseleave",()=>c(null)),l.push({cat:E,node:M}),p.appendChild(M)}h.appendChild(p);const u=document.createElement("div");u.className="legendEx";const m=jt.find(E=>E.symbol==="Pt"),g=document.createElement("div");g.className="cell demo",g.style.background=fo[m.category],g.innerHTML=`<span class="z">78</span><span class="sym">Pt</span><span class="nm">${ui(m)}</span><span class="ms">${ah(m.mass)}</span>`,u.appendChild(g);const v=document.createElement("div");v.className="legendRows";for(const E of["exNum","exSym","exName","exMass"]){const M=document.createElement("span");M.textContent=L(E),v.appendChild(M)}u.appendChild(v),h.appendChild(u),s.appendChild(h);const f=[];for(let E=1;E<=7;E++)for(let M=1;M<=18;M++){const A=jt.find(R=>R.period===E&&R.group===M&&!Nv(R.Z));A&&f.push({el:A,r:E,c:M})}for(const E of jt)E.Z>=57&&E.Z<=71&&f.push({el:E,r:9,c:3+(E.Z-57)});for(const E of jt)E.Z>=89&&E.Z<=103&&f.push({el:E,r:10,c:3+(E.Z-89)});const d=(E,M,A)=>{const R=document.createElement("div");R.className="cell lbl",R.style.gridRow=String(M),R.style.gridColumn=String(A),R.textContent=E,s.appendChild(R)};d("57–71",6,3),d("89–103",7,3);for(const E of f){const M=document.createElement("div");M.style.gridRow=String(E.r+1),M.style.gridColumn=String(E.c+1),M.className="cell",M.style.background=fo[E.el.category]??"#666",M.dataset.cat=E.el.category,M.title=L("cellTip",{name:ui(E.el),z:E.el.Z,m:E.el.mass,cat:Gr(E.el.category)}),M.innerHTML=`<span class="z">${E.el.Z}</span><span class="sym">${E.el.symbol}</span><span class="nm">${ui(E.el)}</span><span class="ms">${ah(E.el.mass)}</span>`,M.addEventListener("click",()=>{Ht.tick(),e(E.el)}),M.addEventListener("mouseenter",()=>r(E.c,E.r<=7?E.r:0)),M.addEventListener("mouseleave",()=>r(0,0)),s.appendChild(M)}i.appendChild(s),n.appendChild(t);const x=()=>{const E=i.offsetWidth,M=i.offsetHeight;if(!E||!M||!t.clientWidth||!t.clientHeight)return;const A=t.clientWidth<780;if(t.classList.toggle("ptScroll",A),A){i.style.transform="none";return}const R=Math.min(t.clientWidth/E,t.clientHeight/M,1.6);i.style.transform=`scale(${Math.max(R,.2)})`},y=new ResizeObserver(x);y.observe(t);const S=new MutationObserver(x);S.observe(document.body,{attributes:!0,attributeFilter:["class"]}),Va=[y,S],x(),requestAnimationFrame(x)}function Fv(n,e,t,i){const s=()=>{Ht.tick(),i(n.value)};t.addEventListener("click",o=>{o.preventDefault(),s()}),e.addEventListener("submit",o=>{o.preventDefault(),s()}),n.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),s())})}const Hv=[{t:"Строка формулы",d:"Верхнее поле — единственное место, куда вводится вещество. Пишется формула латиницей, индексы — обычными цифрами: H2O, Al2(SO4)3, Ca(OH)2. Скобки нужны для групп OH, NO3, SO4, если группа повторяется. Клавиша «/» ставит курсор в это поле из любого места страницы.",f:"Можно ввести и просто элемент: Na покажет атом натрия с оболочками.",en:{t:"Formula field",d:'The top field is the only place a substance goes in. Write the formula in Latin letters, indexes as plain digits: H2O, Al2(SO4)3, Ca(OH)2. Brackets are for groups like OH, NO3, SO4 when the group repeats. The "/" key puts the cursor in this field from anywhere on the page.',f:"An element symbol works too: Na shows a sodium atom with its shells."}},{t:"Кнопка «Показать»",d:"Проверяет формулу по школьным правилам валентностей и строит 3D-модель. Если индексы не сходятся, вместо модели появится объяснение: какой элемент ломает состав и сколько атомов нужно добавить или убрать.",f:"Пример: AlO → «индексы не сходятся», правильная формула Al2O3.",en:{t:"The Show button",d:"Checks the formula by school valence rules and builds the 3D model. If the indexes do not add up, an explanation appears instead of the model: which element breaks the composition and how many atoms should be added or removed.",f:'Example: AlO → "indexes do not match", the correct formula is Al2O3.'}},{t:"Кнопка «Реакции» — конструктор уравнения",d:"Две колонки: слева реагенты, справа продукты, между ними стрелка. Коэффициенты писать не нужно — их расставляет сама программа и подсвечивает зелёным. Каждое поле можно раскрыть кнопкой «+ вещество». Если уравнение не составляется, приложение объясняет, какие атомы не сходятся, а не просто пишет «ошибка».",f:"Пример: CH4 + O2 → CO2 + H2O превращается в CH4 + 2O2 → CO2 + 2H2O.",en:{t:"The Reactions button — equation builder",d:'Two columns: reagents on the left, products on the right, an arrow between them. No coefficients needed — the app places them and paints them green. Each side grows with the "+ substance" button. When an equation cannot be composed, the app explains which atoms do not match instead of just saying "error".',f:"Example: CH4 + O2 → CO2 + H2O becomes CH4 + 2O2 → CO2 + 2H2O."}},{t:"Кнопка «Собрать реакцию» — лаборатория",d:"Сюда вводятся 2–5 веществ или элементов и выбирается тип реакции. Программа сама перебирает школьные правила и показывает все реакции, которые из этого набора возможны. Если какое-то вещество не пригодилось, оно попадает в блок «Не участвуют» с причиной: металл правее водорода, нет осадка, нужен кислород.",f:"Пример: HNO3 + Ca(OH)2 даёт Ca(NO3)2 + H2O, а Cu + HCl не даёт ничего — медь правее водорода.",en:{t:"The Build reaction button — the lab",d:'Enter 2–5 substances or elements and pick a reaction type. The app walks the school rules itself and lists every reaction that set allows. A substance that was not used lands in the "Not involved" block with the reason: the metal is right of hydrogen, no precipitate, oxygen is needed.',f:"Example: HNO3 + Ca(OH)2 gives Ca(NO3)2 + H2O, while Cu + HCl gives nothing — copper is right of hydrogen."}},{t:"Чипы под сценой",d:"Две плашки в левом нижнем углу: Mr — относительная молекулярная масса вещества, второе число — сколько всего атомов в одной формульной единице. В режиме реакции здесь же показан тип реакции и сходится ли баланс.",f:"H2O: Mr 18, атомов 3.",en:{t:"Chips under the scene",d:"Two pills in the bottom-left corner: Mr is the relative molecular mass, the second number is how many atoms one formula unit holds. In a reaction the same corner shows the reaction type and whether the balance holds.",f:"H2O: Mr 18, 3 atoms."}},{t:"Управление 3D-сценой",d:"Левая кнопка мыши — вращение, колесо — приближение, правая кнопка — карточка элемента или соединения. На телефоне сцена вращается одним пальцем, масштаб — двумя.",f:"Правая кнопка по атому в реакции открывает карточку именно этого элемента.",en:{t:"3D scene controls",d:"Left mouse button rotates, the wheel zooms, the right button opens the card of an element or a compound. On a phone one finger rotates and two fingers zoom.",f:"Right-clicking an atom inside a reaction opens that exact element's card."}},{t:"Плеер анимации",d:"Под сценой появляется полоса управления: пауза/пуск, шаг на фазу назад и вперёд, повтор, перемотка ползунком и скорость ×0.5 / ×1 / ×2. Сверху слева висит плашка с названием текущей фазы — «связи рвутся», «атомы перемещаются», «новые связи образуются».",f:"Перемотка не ломает сцену: любая точка показывает одно и то же состояние при каждом повторе.",en:{t:"Animation player",d:'A control bar appears under the scene: pause/play, one phase back and forward, repeat, a scrub slider and speed ×0.5 / ×1 / ×2. A pill in the top-left names the current phase — "bonds break", "atoms move", "new bonds form".',f:"Scrubbing never breaks the scene: any point shows the same state on every replay."}},{t:"Что значат линии между атомами",d:"Сплошная палка — ковалентная связь, общая электронная пара. Две палки рядом — двойная связь, три — тройная. Пунктир из коротких штрихов — ионная связь: это не общая пара, а притяжение ионов с зарядами, поэтому в солях и щелочах связи нарисованы пунктиром. Цвет шара — сам элемент, подпись на шаре — его символ.",f:"SO4 внутри — обычные сплошные связи S–O, а связь с металлом (например, в CuSO4) — пунктир.",en:{t:"What the lines between atoms mean",d:"A solid stick is a covalent bond, a shared electron pair. Two sticks side by side is a double bond, three is a triple one. A dashed line is an ionic bond: not a shared pair but the attraction of charged ions, which is why salts and hydroxides show dashes. Sphere colour is the element itself, the label is its symbol.",f:"Inside SO4 the S–O links are solid, while the link to the metal in CuSO4 is dashed."}},{t:"Периодическая таблица",d:"Вкладка вверху переключает визуализатор на таблицу Менделеева. Клик по элементу открывает его 3D-атом с электронными оболочками и карточкой, повторный клик по вкладке «Визуализатор» возвращает сцену.",f:"В таблице видно, к какой группе относится элемент — от этого зависят его валентности.",en:{t:"Periodic table",d:"The tab at the top switches the visualizer to the periodic table. Clicking an element opens its 3D atom with electron shells and a card; the Visualizer tab brings the scene back.",f:"The table shows which group an element belongs to — its valences follow from that."}},{t:"Настройки",d:"Шестерёнка в правом верхнем углу: язык (русский / английский), акцентный цвет, тёмная или светлая тема, сетка на сцене и звуки. Всё сохраняется в браузере — при следующем открытии стоит так же. Вопрос в углу открывает этот справочник.",f:"Если звуки мешают, их можно выключить одним переключателем — на работу сцены это не влияет.",en:{t:"Settings",d:"The gear in the top-right corner: language (Russian / English), accent colour, dark or light theme, scene grid and sounds. Everything is stored in the browser and comes back the same way next time. The question mark opens this reference.",f:"If the sounds get in the way, one switch turns them off — the scene keeps working."}}],Bv=[{t:"Валентность",d:"Способность атома образовывать химические связи: столько связей атом «держит» в соединении. Определяется положением элемента в таблице; у некоторых элементов бывает несколько значений.",f:"Пример: у O всегда II, у Al — III, у Fe бывают и II, и III.",en:{t:"Valence",d:`The ability of an atom to form chemical bonds: that is how many bonds an atom "holds" in a compound. It follows from the element's place in the table; some elements have several values.`,f:"Example: O is always II, Al is III, Fe can be both II and III."}},{t:"Индекс",d:"Число, записанное мелко справа внизу у символа элемента. Показывает, сколько атомов этого элемента входит в одну формульную единицу. Если индекса нет — он равен 1.",f:"Пример: H₂O — индекс 2 при H означает два атома водорода.",en:{t:"Index",d:"A small number written at the bottom right of an element symbol. It shows how many atoms of that element are in one formula unit. If there is no index, it equals 1.",f:"Example: H₂O — the index 2 at H means two hydrogen atoms."}},{t:"Mr — относительная молекулярная масса",d:"Число, которое показывает, во сколько раз масса одной формульной единицы вещества больше 1/12 массы атома углерода. Равна сумме относительных атомных масс всех атомов формулы.",f:"Как считать: Mr = Σ(Ar · N). Пример: Al₂O₃ — 2·27 + 3·16 = 102.",en:{t:"Mr — relative molecular mass",d:"A number showing how many times the mass of one formula unit of a substance is greater than 1/12 of the mass of a carbon atom. It equals the sum of the relative atomic masses of all atoms in the formula.",f:"How to compute: Mr = Σ(Ar · N). Example: Al₂O₃ — 2·27 + 3·16 = 102."}},{t:"Массовая доля w",d:"Доля массы данного элемента в общей массе вещества: какую часть вещества по массе составляет этот элемент. Выражается в процентах или долях единицы.",f:"Как считать: w(эл) = Ar · N / Mr · 100 %. Пример: w(Al) в Al₂O₃ = 54 / 102 ≈ 52,9 %.",en:{t:"Mass fraction w",d:"The share of a given element in the total mass of a substance: what part of the substance, by mass, is that element. Expressed in percent or as a fraction of one.",f:"How to compute: w(el) = Ar · N / Mr · 100 %. Example: w(Al) in Al₂O₃ = 54 / 102 ≈ 52.9 %."}},{t:"Кислотный остаток",d:"Часть молекулы кислоты без атомов водорода, которые могут быть замещены металлом. В солях кислотный остаток ведёт себя как единое целое со своей валентностью.",f:"Примеры: SO₄ — сульфат (II), NO₃ — нитрат (I), CO₃ — карбонат (II).",en:{t:"Acid residue",d:"The part of an acid molecule without the hydrogen atoms that can be replaced by a metal. In salts the acid residue behaves as a single whole with its own valence.",f:"Examples: SO₄ — sulfate (II), NO₃ — nitrate (I), CO₃ — carbonate (II)."}},{t:"Оксид",d:"Сложное вещество из двух элементов, один из которых — кислород в степени окисления −2. Оксиды бывают основными, кислотными и амфотерными.",f:"Примеры: Na₂O — оксид натрия, CO₂ — оксид углерода (IV), Al₂O₃ — оксид алюминия.",en:{t:"Oxide",d:"A compound of two elements, one of which is oxygen in the oxidation state −2. Oxides can be basic, acidic or amphoteric.",f:"Examples: Na₂O — sodium oxide, CO₂ — carbon(IV) oxide, Al₂O₃ — aluminium oxide."}},{t:"Кислота",d:"Сложное вещество, в состав которого входят атомы водорода (их можно заменить металлом) и кислотный остаток. Число атомов водорода равно валентности кислотного остатка.",f:"Примеры: H₂SO₄ — серная, HNO₃ — азотная, HCl — соляная.",en:{t:"Acid",d:"A compound containing hydrogen atoms (they can be replaced by a metal) and an acid residue. The number of hydrogen atoms equals the valence of the acid residue.",f:"Examples: H₂SO₄ — sulfuric, HNO₃ — nitric, HCl — hydrochloric."}},{t:"Основание",d:"Сложное вещество, состоящее из атомов металла и гидроксогрупп OH. Число гидроксогрупп равно валентности металла.",f:"Примеры: NaOH — гидроксид натрия, Ca(OH)₂ — гидроксид кальция.",en:{t:"Base",d:"A compound made of metal atoms and hydroxide groups OH. The number of hydroxide groups equals the valence of the metal.",f:"Examples: NaOH — sodium hydroxide, Ca(OH)₂ — calcium hydroxide."}},{t:"Соль",d:"Сложное вещество, состоящее из атомов металла и кислотного остатка. Образуется, когда атомы водорода в кислоте замещаются металлом.",f:"Примеры: NaCl — хлорид натрия, Al₂(SO₄)₃ — сульфат алюминия, CaCO₃ — карбонат кальция.",en:{t:"Salt",d:"A compound made of metal atoms and an acid residue. It forms when the hydrogen atoms of an acid are replaced by a metal.",f:"Examples: NaCl — sodium chloride, Al₂(SO₄)₃ — aluminium sulfate, CaCO₃ — calcium carbonate."}},{t:"Степень окисления",d:"Условный заряд атома в соединении, вычисленный в предположении, что все связи в веществе полностью ионные. Используется для записи окислительно-восстановительных реакций.",f:"Правило: сумма степеней окисления всех атомов формулы равна нулю. Обычно O = −2, щелочные металлы = +1.",en:{t:"Oxidation state",d:"A conventional charge of an atom in a compound, computed assuming all bonds in the substance are fully ionic. Used for writing redox reactions.",f:"Rule: the sum of the oxidation states of all atoms in a formula is zero. Usually O = −2, alkali metals = +1."}},{t:"Ряд активности металлов",d:"Школьная последовательность металлов от самых активных к неактивным: Li, K, Ba, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Ag. Металл, стоящий левее, вытесняет металл правее из раствора его соли; металлы левее водорода вытесняют его из кислот.",f:"Примеры: Zn + CuSO₄ → ZnSO₄ + Cu; Cu + HCl → реакция не идёт (Cu правее H).",en:{t:"Activity series of metals",d:"The school ordering of metals from most to least active: Li, K, Ba, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Ag. A metal to the left displaces a metal to its right from a salt solution; metals left of hydrogen displace it from acids.",f:"Examples: Zn + CuSO₄ → ZnSO₄ + Cu; Cu + HCl → no reaction (Cu is right of H)."}},{t:"Растворимость",d:"Таблица, по которой видно, останется вещество в растворе или выпадет в осадок. Растворимы: все соли натрия, калия и лития, все нитраты; хлориды — кроме AgCl и PbCl₂; сульфаты — кроме BaSO₄ и PbSO₄. Карбонаты, фосфаты и силикаты растворимы только у щелочных металлов. Основания растворимы у Li, Na, K, Ba, Ca.",f:"Пример: AgCl нерастворим — в обменной реакции он уходит в осадок.",en:{t:"Solubility",d:"The table that says whether a substance stays dissolved or falls out as a precipitate. Soluble: all sodium, potassium and lithium salts, all nitrates; chlorides except AgCl and PbCl₂; sulfates except BaSO₄ and PbSO₄. Carbonates, phosphates and silicates dissolve only for alkali metals. Hydroxides dissolve for Li, Na, K, Ba, Ca.",f:"Example: AgCl is insoluble — in an exchange reaction it leaves as a precipitate."}},{t:"Типы реакций",d:"Соединение — два и больше веществ в одно (2Mg + O₂ → 2MgO). Разложение — одно вещество на два и больше (CaCO₃ → CaO + CO₂). Замещение — простое вещество меняет часть сложного (Zn + 2HCl → ZnCl₂ + H₂). Обмен — вещества меняются составными частями (AgNO₃ + NaCl → AgCl + NaNO₃). Горение — окисление кислородом с выделением тепла и света (CH₄ + 2O₂ → CO₂ + 2H₂O).",f:"Правила движка: металл активнее — замещает; осадок, газ или вода — обмен идёт; кислотный оксид + вода — кислота; нерастворимое основание и некарбонат — разлагаются при нагреве.",en:{t:"Reaction types",d:"Combination — two or more substances form one (2Mg + O₂ → 2MgO). Decomposition — one substance breaks into two or more (CaCO₃ → CaO + CO₂). Substitution — a simple substance replaces part of a compound (Zn + 2HCl → ZnCl₂ + H₂). Exchange — substances swap their constituent parts (AgNO₃ + NaCl → AgCl + NaNO₃). Burning — oxidation by oxygen with heat and light (CH₄ + 2O₂ → CO₂ + 2H₂O).",f:"Engine rules: the more active metal displaces; a precipitate, gas or water drives exchange; an acidic oxide plus water gives an acid; insoluble bases and non-alkali carbonates decompose on heating."}},{t:"Электронные оболочки",d:"Слои вокруг атомного ядра, на которых находятся электроны. Число электронов в атоме равно числу протонов (Z), поэтому атом в целом нейтрален. Слои заполняются от ближайшего к ядру.",f:"Пример: натрий, Z = 11 → заполнение 2, 8, 1.",en:{t:"Electron shells",d:"Layers around the atomic nucleus where electrons reside. The number of electrons in an atom equals the number of protons (Z), so the atom as a whole is neutral. The layers fill starting from the one nearest the nucleus.",f:"Example: sodium, Z = 11 → filling 2, 8, 1."}},{t:"Ковалентная связь",d:"Связь, при которой два атома обобществляют пару электронов — она принадлежит обоим. Именно так устроены молекулы воды, метана, углекислого газа. В модели такая связь нарисована сплошной палкой между шарами, а её кратность — числом палок: одна, две или три.",f:"Пример: в H2O две одинарные связи O–H, в CO2 две двойные C=O, в N2 одна тройная связь.",en:{t:"Covalent bond",d:"A bond where two atoms share a pair of electrons — the pair belongs to both. Water, methane and carbon dioxide are built this way. In the model such a bond is a solid stick between the spheres, and its order is the number of sticks: one, two or three.",f:"Example: H2O has two single O–H bonds, CO2 has two double C=O bonds, N2 has one triple bond."}},{t:"Ионная связь",d:"Связь между ионами с противоположными зарядами: электрон не общий, а полностью перешёл от одного атома к другому. Атом, отдавший электрон, стал положительным ионом, принявший — отрицательным. Держатся такие ионы вместе электрическим притяжением, а не общей парой. В модели ионная связь нарисована пунктиром, чтобы её не путали с ковалентной.",f:"Пример: NaCl — это Na+ и Cl−, NaOH — Na+ и OH−. Пунктир показывает притяжение, а не «палку» между атомами.",en:{t:"Ionic bond",d:"A bond between ions of opposite charge: the electron is not shared, it has moved completely from one atom to the other. The atom that gave it away became a positive ion, the one that took it became negative. Such ions are held by electric attraction, not by a shared pair. In the model an ionic bond is dashed so it is not mistaken for a covalent one.",f:"Example: NaCl is Na+ and Cl−, NaOH is Na+ and OH−. The dashes show attraction, not a stick between atoms."}},{t:"Ионы и кристаллическая решётка",d:"Ион — атом или группа атомов с зарядом. В твёрдой соли ионы не сидят парами: каждый окружён соседями с противоположным зарядом, и весь кристалл держится вместе. Поэтому у солей говорят не «молекула», а «формульная единица» — запись NaCl показывает соотношение ионов, а не одну частицу.",f:"Пример: в решётке NaCl вокруг каждого Na+ шесть Cl−, и наоборот.",en:{t:"Ions and the crystal lattice",d:'An ion is an atom or a group of atoms carrying a charge. In a solid salt the ions do not sit in pairs: each one is surrounded by neighbours of the opposite charge and the whole crystal holds together. That is why salts have a "formula unit" rather than a molecule — NaCl shows the ratio of ions, not one particle.',f:"Example: in the NaCl lattice each Na+ has six Cl− around it, and the other way round."}},{t:"Признаки реакции",d:"Чтобы обмен шёл, из раствора должно что-то уйти: выпасть осадок, выделиться газ или образоваться вода. В записи это видно по нерастворимому продукту, газообразному продукту и воде. Если все продукты остаются в растворе, реакция не идёт, хотя формулы и выглядят подходящими.",f:"Пример: AgNO3 + NaCl → AgCl↓ + NaNO3 идёт (осадок), а KNO3 + NaCl не идёт — оба продукта растворимы.",en:{t:"Signs of a reaction",d:"For an exchange to run, something must leave the solution: a precipitate falls out, a gas escapes, or water forms. That shows up as an insoluble product, a gaseous product and water. If every product stays dissolved, the reaction does not happen even though the formulas look suitable.",f:"Example: AgNO3 + NaCl → AgCl↓ + NaNO3 runs (precipitate), while KNO3 + NaCl does not — both products stay dissolved."}},{t:"НОК",d:"Наименьшее общее кратное — самое маленькое натуральное число, которое делится на каждое из заданных чисел без остатка. Нужно для согласования валентностей при составлении формулы.",f:"Как считать: НОК валентностей делят на каждую валентность и получают индексы. Al (III) и O (II): НОК(3, 2) = 6 → Al₂O₃.",en:{t:"LCM",d:"The least common multiple — the smallest natural number divisible by each of the given numbers without a remainder. It is needed to match valences when composing a formula.",f:"How to compute: divide the LCM of the valences by each valence to get the indexes. Al (III) and O (II): LCM(3, 2) = 6 → Al₂O₃."}}];function kv(n){n.innerHTML="";const e=fs()==="en";n.appendChild(rh(L("gSite"),Hv,e,!0)),n.appendChild(rh(L("gTerms"),Bv,e,!1))}function rh(n,e,t,i){const s=document.createElement("div");s.className="guideBlock";const o=document.createElement("button");o.type="button",o.className="guideHead",o.textContent=n;const a=document.createElement("div");a.className="guideBody";const r=document.createElement("div");r.className="guideList",e.forEach((p,u)=>{const m=t&&p.en?p.en:p,g=document.createElement("div");g.className="guideRow";const v=document.createElement("h4");v.textContent=m.t;const f=document.createElement("div");f.className="body";const d=document.createElement("p");if(d.textContent=m.d,f.appendChild(d),m.f){const x=document.createElement("div");x.className="formula",x.textContent=m.f,f.appendChild(x)}g.appendChild(v),g.appendChild(f),r.appendChild(g)}),a.appendChild(r),s.appendChild(o),s.appendChild(a);let l=i,c=0;const h=p=>{if(clearTimeout(c),!p){a.style.maxHeight=l?"none":"0px",s.classList.toggle("open",l);return}l?(a.style.maxHeight=r.scrollHeight+24+"px",c=setTimeout(()=>{a.style.maxHeight="none"},340)):(a.style.maxHeight=a.scrollHeight+"px",requestAnimationFrame(()=>{a.style.maxHeight="0px"})),s.classList.toggle("open",l)};return o.addEventListener("click",()=>{l=!l,h(!0)}),h(!1),s}const Be=n=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),te=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.innerHTML=t),i},Xt=(n,e)=>{const t=te("div","sec");return t.appendChild(te("div","secHead",`<span class="secNum">${n}</span><span class="secTitle">${Be(e)}</span>`)),t},xd=(n,e)=>{const t=te("button","copyBtn",e);return t.type="button",t.addEventListener("click",()=>{var i;(i=navigator.clipboard)==null||i.writeText(n).then(()=>{t.textContent="Скопировано",setTimeout(()=>t.textContent=e,1600)})}),t},zv=["","I","II","III","IV","V","VI","VII","VIII"],Vv=n=>zv[n]??String(n),Gv=(n,e)=>{if(!e)return Be(n);let t;try{t=pv(n)}catch{return Be(n)}let i="",s=0;for(const o of t){i+=Be(n.slice(s,o.start));const a=Be(n.slice(o.start,o.end))+(o.n>1?`<sub>${o.n}</sub>`:"");i+=o.sym===e?`<span class="badCh">${a}</span>`:a,s=o.end}return i+Be(n.slice(s))};function Ki(n,e,t,i,s,o,a){var m;if(n.innerHTML="",n.scrollTop=0,e.verdict==="err"){const g=te("div","verdict err");g.innerHTML=`<span class="mark"></span><span class="vt">${L("vErr")}<span class="vs">${Be(td(e))}</span></span>`,n.appendChild(g);return}const r=te("div","verdict"+(e.verdict==="ok"?"":" bad"));if(r.innerHTML=e.verdict==="ok"?`<span class="mark"></span><span class="vt">${L("vOk")}</span>`:`<span class="mark"></span><span class="vt">${L("vBad")}<span class="vs">${Be(nd(e))}</span></span>`,n.appendChild(r),n.appendChild(te("div","nameLine",Gv(i,e.sym))),e.verdict!=="ok"){if(e.hint){const g=Xt("01",L("hintSec")),v=te("div","fixRow");v.appendChild(te("p","hint",`<b style="color:var(--accent)">${Be(L("correct",{f:e.hint}))}</b>`));const f=te("button","freeBtn applyBtn",L("applyFix"));if(f.type="button",f.addEventListener("click",()=>a==null?void 0:a(e.hint)),v.appendChild(f),g.appendChild(v),(m=e.diff)!=null&&m.length){const d=te("ul","diffList");for(const x of e.diff)d.insertAdjacentHTML("beforeend",`<li><span class="sw" style="background:${(s==null?void 0:s[x.sym])??"#888"}"></span><span class="sym">${Be(x.sym)}</span> — ${Be(x.dir==="add"?L("diffAdd",{have:x.have,need:x.need}):L("diffRemove",{have:x.have,need:x.need}))}</li>`);g.appendChild(d)}n.appendChild(g)}if(o&&["idxResidue","idxPlain","ohBrackets","exH2O2","exFe3O4","noMatch"].includes(e.code)){const g=te("div","freeWrap"),v=te("p","hint",L("freeNote")),f=te("button","freeBtn",L("showAnyway"));f.type="button",f.addEventListener("click",()=>o(e,i)),g.appendChild(v),g.appendChild(f),n.appendChild(g)}return}if(t.name){const g=t.klass?" — "+L("klass"+t.klass[0].toUpperCase()+t.klass.slice(1)):"";n.appendChild(te("div","klassLine",Be(t.name+g)))}const l=Xt("01",L("secComp")),c=te("table","atable");c.innerHTML=`<tr><th>${L("colEl")}</th><th class="r">${L("colAtoms")}</th><th class="r">Ar</th><th class="r">${L("colTotal")}</th></tr>`;let h=0;for(const g in e.atoms){const v=e.atoms[g];h+=v;const f=(t.arOf&&t.arOf[g])??"",d=(s==null?void 0:s[g])??"#888";c.insertAdjacentHTML("beforeend",`<tr><td><span class="sw" style="background:${d}"></span><span class="sym">${Be(g)}</span></td><td class="r">${v}</td><td class="r">${f?_t(f):""}</td><td class="r">${f?_t((f*v).toFixed(f*v%1?1:0)):""}</td></tr>`)}if(c.insertAdjacentHTML("beforeend",`<tr><td></td><td class="r" style="color:var(--dim)">${h}</td><td></td><td class="r" style="color:var(--dim);font-weight:600">${t.mr?_t(t.mr):""}</td></tr>`),l.appendChild(c),l.appendChild(te("p","hint",L("colHint"))),n.appendChild(l),t.steps.length){const g=Xt("02",L("secSteps")),v=te("ol","steps");v.innerHTML=t.steps.map(f=>`<li><span>${Be(f)}</span></li>`).join(""),g.appendChild(v),g.appendChild(xd(i+`
`+t.steps.join(`
`),L("copySteps"))),n.appendChild(g)}if(t.fr.length){const g=Xt("03",L("secFractions"));for(const v of t.fr){const f=te("div","fRow"),d=te("div","fHead");d.innerHTML=`<span class="sw" style="background:${(s==null?void 0:s[v.sym])??"#888"}"></span><span class="fsym">${Be(v.sym)}</span><span class="fcount">${L("frAtoms",{n:e.atoms[v.sym]})}</span><span class="pct">${_t(v.pct.toFixed(1))} %</span>`,f.appendChild(d);const x=te("div","fBar"),y=te("div","fFill");y.style.background=(s==null?void 0:s[v.sym])??"var(--accent)",x.appendChild(y),f.appendChild(x),g.appendChild(f),requestAnimationFrame(()=>requestAnimationFrame(()=>y.style.width=Math.max(v.pct,1.5)+"%"))}g.appendChild(te("p","hint","w = Ar · N / Mr · 100 %")),g.querySelector(".hint").style.marginTop="10px",n.appendChild(g)}const p=Xt("04",L("secSummary"));p.appendChild(te("div","sumRow",`<span class="k">${L("sumMr")}</span><span class="v">${_t(t.mr)}</span>`)),p.appendChild(te("div","sumRow",`<span class="k">${L("sumKlass")}</span><span class="v small">${Be(t.klass?L("klass"+t.klass[0].toUpperCase()+t.klass.slice(1)):"—")}</span>`)),p.appendChild(te("div","sumRow",`<span class="k">${L("sumCount")}</span><span class="v">${h}</span>`)),p.appendChild(te("div","sumRow",`<span class="k">${L("sumKinds")}</span><span class="v">${Object.keys(e.atoms).length}</span>`)),p.appendChild(te("div","sumRow",`<span class="k">${L("sumType")}</span><span class="v small">${Be(e.kind==="simple"?L("sumTypeSimple"):L("sumTypeComplex"))}</span>`)),n.appendChild(p);const u=te("p","hint",L("noteSchool"));u.style.marginTop="14px",n.appendChild(u)}function Wr(n,e,t,i={}){var h;n.innerHTML="",n.scrollTop=0,n.appendChild(te("div","nameLine",Be(ui(e)))),n.appendChild(te("div","klassLine",Be(Gr(e.category))));const s=Xt("01",L("secData"));s.appendChild(te("div","sumRow",`<span class="k">${L("sumSymbol")}</span><span class="v"><span class="sw" style="background:${(t==null?void 0:t[e.symbol])??"#888"}"></span> ${Be(e.symbol)}</span>`)),s.appendChild(te("div","sumRow",`<span class="k">${L("sumZ")}</span><span class="v">${e.Z}</span>`)),s.appendChild(te("div","sumRow",`<span class="k">${L("sumProtons")}</span><span class="v">${e.Z}</span>`)),s.appendChild(te("div","sumRow",`<span class="k">${L("sumNeutrons")}</span><span class="v">${Math.round(e.mass-e.Z)}</span>`)),s.appendChild(te("div","sumRow",`<span class="k">${L("sumMass")}</span><span class="v">${_t(e.mass)}</span>`)),n.appendChild(s);const o=Xt("02",L("secShells"));if(o.appendChild(te("div","sumRow",`<span class="k">${L("sumFill")}</span><span class="v">${e.shells.join(", ")}</span>`)),o.appendChild(te("div","sumRow",`<span class="k">${L("sumETotal")}</span><span class="v">${e.shells.reduce((p,u)=>p+u,0)}</span>`)),n.appendChild(o),i.electrons){const p=Xt("03",L("secSpeed")),u=te("div","speedRow"),m=te("input","speedSlider");m.type="range",m.min="0",m.max="3",m.step="0.05",m.value=String(Fa());const g=te("span","speedVal",L("speedVal",{v:_t(Fa())})),v=()=>{const f=parseFloat(m.value)/3*100;m.style.background=`linear-gradient(90deg, var(--accent) ${f}%, var(--raise) ${f}%)`};m.addEventListener("input",()=>{N_(parseFloat(m.value)),g.textContent=L("speedVal",{v:_t(Fa())}),v()}),v(),m.setAttribute("aria-label",L("secSpeed")),u.appendChild(m),u.appendChild(g),p.appendChild(u),n.appendChild(p)}const a=[];a.push(L("cardCharge",{z:e.Z})),a.push(L("cardElectrons",{z:e.Z})),e.valences.length&&a.push(L("cardValence",{vals:e.valences.map(Vv).join(", ")})),(h=e.oxidationStates)!=null&&h.length&&a.push(L("cardOxidation",{vals:e.oxidationStates.join(", ")}));const r=Xt(i.electrons?"04":"03",L("secCard")),l=te("ol","steps");l.innerHTML=a.map(p=>`<li><span>${Be(p)}</span></li>`).join(""),r.appendChild(l),n.appendChild(r);const c=te("p","hint",L("noteAtom"));c.style.marginTop="14px",n.appendChild(c)}const xl=(n,e)=>{for(n=Math.abs(n),e=Math.abs(e);e;)[n,e]=[e,n%e];return n||1},Wv=(n,e)=>Math.abs(n*e)/xl(n,e),kn=(n,e)=>{const t=new Error(n);throw t.code=n,Object.assign(t,e),t};function Xv(n,e){const t=lh(n),i=lh(e);return!t.length&&!i.length&&kn("empty"),t.length||kn("emptyLeft"),i.length||kn("emptyRight"),{left:t,right:i}}function lh(n){const e=(Array.isArray(n)?n:String(n??"").split("+")).map(i=>String(i).trim()).filter(Boolean);if(!e.length)return[];const t=[];for(const i of e){/→|->/.test(i)&&kn("arrow"),/[=]/.test(i)&&kn("equal");const s=i.replace(/^\s*\d+\s*/,"");s||kn("coef",{text:i});const o=_n(s);o.verdict==="err"&&kn("substance",{text:i,inner:o}),o.verdict!=="ok"&&kn("substance",{text:i,inner:o}),t.push({formula:s,atoms:o.atoms})}return t}function qv(n){const e=[];for(const p of[...n.left,...n.right])for(const u in p.atoms)e.includes(u)||e.push(u);const t=n.left.length,i=n.right.length,s=t+i,o=e.map(p=>{const u=new Array(s).fill(0);return n.left.forEach((m,g)=>u[g]=m.atoms[p]??0),n.right.forEach((m,g)=>u[t+g]=-(m.atoms[p]??0)),u}),a=Zv(o,s);if(!a.length)return null;const r=Kv(a,t);if(!r)return null;const l=r.reduce((p,u)=>Wv(p,u[1]),1),c=r.map(([p,u])=>p*l/u);let h=0;for(const p of c)h=xl(h,p);if(h>1)for(let p=0;p<c.length;p++)c[p]/=h;return{coefs:{left:c.slice(0,t),right:c.slice(t)}}}function Zv(n,e){const t=n.map(r=>r.map(l=>[l,1])),i=[];let s=0;for(let r=0;r<e&&s<t.length;r++){let l=-1;for(let h=s;h<t.length;h++)if(t[h][r][0]!==0){l=h;break}if(l===-1)continue;[t[s],t[l]]=[t[l],t[s]];const c=t[s][r];for(let h=r;h<e;h++)t[s][h]=Yv(t[s][h],c);for(let h=0;h<t.length;h++){if(h===s||t[h][r][0]===0)continue;const p=t[h][r];for(let u=r;u<e;u++)t[h][u]=jv(t[h][u],$v(p,t[s][u]))}i.push(r),s++}const o=[];for(let r=0;r<e;r++)i.includes(r)||o.push(r);const a=[];for(const r of o){const l=new Array(e).fill([0,1]);l[r]=[1,1],i.forEach((p,u)=>{l[p]=[t[u][r][0]===0?0:-t[u][r][0],t[u][r][1]]});const c=l.map(Ns);c.some(p=>p[0]!==0)&&a.push(c)}return a}const Ns=([n,e])=>{e<0&&(n=-n,e=-e);const t=xl(n,e);return[n/t,e/t]},$v=(n,e)=>Ns([n[0]*e[0],n[1]*e[1]]),Yv=(n,e)=>{if(e[0]===0)throw new Error("деление на ноль");return Ns([n[0]*e[1],n[1]*e[0]])},jv=(n,e)=>Ns([n[0]*e[1]-e[0]*n[1],n[1]*e[1]]);function Kv(n,e,t){const i=a=>a.slice(0,e).every(r=>r[0]>0)&&a.slice(e).every(r=>r[0]>0);for(const a of n)for(const r of[1,-1]){const l=a.map(c=>[c[0]*r,c[1]]);if(i(l))return l}const s=6,o=(a,r,l,c)=>a.map((h,p)=>Ns([l*h[0]*r[1]+c*r[p][0]*h[1],h[1]*r[p][1]]));for(let a=0;a<n.length;a++)for(let r=a+1;r<n.length;r++)for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){if(!l||!c)continue;const h=o(n[a],n[r],l,c);if(i(h))return h}return null}function Jv(n){const e=[],t=(s,o)=>{o.forEach(a=>{for(const r in a.atoms){let l=e.find(c=>c.sym===r);l||(l={sym:r,left:0,right:0},e.push(l)),l[s]+=a.atoms[r]}})};if(t("left",n.left),t("right",n.right),!e.length)return null;const i=s=>{const o=Math.abs(s.left-s.right);return(s.left===0!=(s.right===0)?1e3:0)+o};return e.reduce((s,o)=>i(o)>i(s)?{...o}:s,e[0])}function Qv(n){const e=n.left.map(r=>r.formula),t=n.right.map(r=>r.formula),i=r=>Object.keys(ex(r)).length===1,s=e.some(r=>r==="O2"||r==="O₃"),o=e.some(i),a=t.some(i);return e.length===1&&t.length===1?{type:"conversion"}:s?{type:"burning"}:e.length>=2&&t.length===1?{type:"combination"}:e.length===1&&t.length>=2?{type:"decomposition"}:o&&a?{type:"substitution"}:{type:"exchange"}}const Ga={},ex=n=>(Ga[n]||(Ga[n]=Zo(Ds(n))),Ga[n]);function tx(n,e){const t=[],i=(s,o,a)=>{o.forEach((r,l)=>{const c=a[s][l];for(const h in r.atoms){let p=t.find(u=>u.sym===h);p||(p={sym:h,left:0,right:0},t.push(p)),p[s==="left"?"left":"right"]+=r.atoms[h]*c}})};return i("left",n.left,e),i("right",n.right,e),t.map(s=>({...s,ok:s.left===s.right}))}function Ce(n,e){let t;try{t=Xv(n,e)}catch(a){return{verdict:"err",code:a.code,text:a.text,inner:a.inner}}if(t.left.length===1&&t.right.length===1&&t.left[0].formula===t.right[0].formula)return{verdict:"fail",code:"same"};const i=qv(t);if(!i){const a=Jv(t);return{verdict:"fail",code:"noBalance",bad:a?{sym:a.sym,left:a.left,right:a.right}:null}}let s,o;try{s=Qv(t),o=tx(t,i.coefs)}catch{return{verdict:"err",code:"internal"}}return{verdict:"ok",eq:t,coefs:i.coefs,cls:s,table:o,ok:o.every(a=>a.ok)}}const ct={};for(const n of jt)ct[n.symbol]=n;const vt=n=>{try{return Zo(Ds(n))}catch{return{}}},gt=["Li","K","Ba","Ca","Na","Mg","Al","Zn","Fe","Ni","Sn","Pb","H","Cu","Ag"],li={Fe:2,Cu:2,Sn:2,Pb:2,Ni:2},nx=new Set(["Li2O","Na2O","K2O","MgO","CaO","BaO","SrO","Al2O3","ZnO","FeO","Fe2O3","Fe3O4","CuO","Cu2O","SO2","SO3","N2O","NO","N2O3","NO2","N2O5","P2O3","P2O5","SiO2","CO2","CO","H2O","H2O2","Cl2O7","MnO2","H2","NH3","PH3","HCl","HBr","HI","H2S","CH4","SiH4","NaH","CaH2","AlH3","MgH2","LiCl","NaCl","KCl","MgCl2","CaCl2","BaCl2","SrCl2","AlCl3","ZnCl2","FeCl2","FeCl3","CuCl","CuCl2","AgCl","SnCl2","SnCl4","PbCl2","NiCl2","NaBr","KBr","MgBr2","CaBr2","AlBr3","ZnBr2","FeBr3","AgBr","NaI","KI","MgI2","AlI3","AgI","Li2S","Na2S","K2S","MgS","CaS","BaS","Al2S3","ZnS","FeS","CuS","Cu2S","Ag2S","PbS","SnS","NiS","Li3N","Na3N","Mg3N2","Ca3N2","AlN","CaC2","Al4C3","Mg3P2","Ca3P2","Na3P","Cl2","F2","Br2","I2","O2","O3","N2","P4","S8"]),yd=n=>n.filter(e=>Object.keys(vt(e)).length===1),Ze=n=>_n(n).verdict==="ok",$o=["alkali","alkaline","transition","postmetal","lanthanide","actinide"],ix=n=>{var e;return $o.includes((e=ct[n])==null?void 0:e.category)},sx=(n,e)=>{var h,p;const t=ix,i=(u,m)=>{if(t(u)&&!t(m))return[u,m];if(!t(u)&&t(m))return[m,u];if(u==="H"||m==="H"){const g=u==="H"?m:u;return["C","Si","N","P","B"].includes(g)?[g,"H"]:["H",g]}return u==="O"&&m!=="O"&&!t(m)?[m,"O"]:m==="O"&&u!=="O"&&!t(u)?[u,"O"]:[u,m]},[s,o]=i(n,e),a=(((h=ct[s])==null?void 0:h.valences)??[]).filter(u=>u>0),r=(((p=ct[o])==null?void 0:p.valences)??[]).filter(u=>u>0),l=[],c=new Set;for(const u of a)for(const m of r){const g=u*m/yl(u,m),v=g/u,f=g/m,d=s+(v===1?"":v)+o+(f===1?"":f);c.has(d)||(c.add(d),nx.has(d)&&Ze(d)&&l.push(d))}return l};function yl(n,e){let t=Math.abs(Math.trunc(n))||0,i=Math.abs(Math.trunc(e))||0;for(;i;){const s=t%i;t=i,i=s}return t}function Xr(n,e){return e==="OH"?n==="Li"||n==="Na"||n==="K"||n==="Ba"||n==="Ca":e==="NO3"?!0:e==="Cl"||e==="Br"||e==="I"?n!=="Ag"&&n!=="Pb":e==="SO4"?n!=="Ba"&&n!=="Pb"&&n!=="Ca":n==="Li"||n==="Na"||n==="K"}function ch(n,e,t){return n==="H2O"?"water":n==="H2S"||n==="H2CO3"||n==="H2SO3"?"gas":t==="SiO3"&&e==="H"||!Xr(e,t)?"precip":null}function qt(n){const t=_n(n).solution;if(!t||!t.an||!t.an.re)return null;const i=t.an.re.formula;if(i==="O")return null;const s=t.cat[0];return{cat:s.sym,vC:s.val,an:i,vA:t.an.re.valence}}const ox=(n,e)=>n*e/yl(n,e),ax=n=>{const e=/^H(\d*)(H.+)$/.exec(n);if(!e)return n;const t=1+(e[1]?Number(e[1]):1);return"H"+(t===1?"":t)+e[2].slice(1)},xt=(n,e)=>{const t=ox(n.vC,e.vA),i=t/n.vC,s=t/e.vA,o=/[A-Z].*[A-Z]/.test(e.an);return ax(n.cat+(i===1?"":i)+(s===1?e.an:o?"("+e.an+")"+s:e.an+s))},pn=n=>{var i,s;const e=_n(n).solution;if(!e||!e.an||((i=e.an.re)==null?void 0:i.formula)!=="O")return null;const t=e.cat[0];return $o.includes((s=ct[t.sym])==null?void 0:s.category)?{cat:t.sym,vC:t.val}:null},Ts={CO2:{an:"CO3",vA:2},SO3:{an:"SO4",vA:2},SO2:{an:"SO3",vA:2},P2O5:{an:"PO4",vA:3},N2O5:{an:"NO3",vA:1},SiO2:{an:"SiO3",vA:2}},rx=(n,e)=>{const t=(p,u)=>{if(!p)return null;const m=qt(u);if(!m||m.cat!=="H")return null;const g=xt(p,m);return Ze(g)&&Ce([n,e],[g,"H2O"]).verdict==="ok"?{l:[n,e],r:[g,"H2O"]}:null},i=t(pn(n),e)||t(pn(e),n);if(i)return i;const s=(p,u)=>{if(!u)return null;const m=qt(p);if(!m||m.an!=="OH")return null;const g=xt(m,u);return Ze(g)&&Ce([n,e],[g,"H2O"]).verdict==="ok"?{l:[n,e],r:[g,"H2O"]}:null},o=s(e,Ts[n])||s(n,Ts[e]);if(o)return o;const a=(p,u)=>{if(!p)return null;const m=qt(u);if(!m||m.an!=="CO3")return null;const g=xt(m,p);return!Ze(g)||g===u?null:Ce([n,e],[g,"CO2"]).verdict==="ok"?{l:[n,e],r:[g,"CO2"]}:null},r=a(Ts[n],e)||a(Ts[e],n);if(r)return r;const l=(p,u)=>!p||u!=="H2"?null:Ce([n,e],[p.cat,"H2O"]).verdict==="ok"?{l:[n,e],r:[p.cat,"H2O"]}:null,c=l(pn(n),e)||l(pn(e),n);if(c)return c;const h=(p,u)=>!p||u!=="CO"?null:Ce([n,e],[p.cat,"CO2"]).verdict==="ok"?{l:[n,e],r:[p.cat,"CO2"]}:null;return h(pn(n),e)||h(pn(e),n)};function lx(n){var o;const e=[],t=yd(n);n.includes("C")&&n.includes("CO2")&&Ce(["C","CO2"],["CO"]).verdict==="ok"&&e.push({l:["C","CO2"],r:["CO"]});for(let a=0;a<t.length;a++)for(let r=a+1;r<t.length;r++){const l=vt(t[a]),c=vt(t[r]),h=Object.keys(l)[0],p=Object.keys(c)[0];if(!(!h||!p))for(const u of sx(h,p))Ce([t[a],t[r]],[u]).verdict==="ok"&&e.push({l:[t[a],t[r]],r:[u]})}const i=[["Na2O","H2O","NaOH"],["CaO","H2O","Ca(OH)2"],["CO2","H2O","H2CO3"],["SO3","H2O","H2SO4"],["Na2O","CO2","Na2CO3"],["CaO","CO2","CaCO3"],["CaO","SO3","CaSO4"],["MgO","H2O","Mg(OH)2"],["K2O","H2O","KOH"],["Li2O","H2O","LiOH"],["BaO","H2O","Ba(OH)2"],["SrO","H2O","Sr(OH)2"]];for(const[a,r,l]of i)n.includes(a)&&n.includes(r)&&Ze(l)&&Ce([a,r],[l]).verdict==="ok"&&e.push({l:[a,r],r:[l]});const s={SO3:"H2SO4",SO2:"H2SO3",P2O5:"H3PO4",N2O5:"HNO3",CO2:"H2CO3"};if(n.includes("H2O"))for(const a of n){const r=s[a];if(!r)continue;Ce([a,"H2O"],[r]).verdict==="ok"&&Ze(r)&&e.push({l:[a,"H2O"],r:[r]})}for(const a of n){const r=pn(a);if(r)for(const l of n){if(l===a)continue;const c=Ts[l];if(!c)continue;const h=xt(r,c);if(!Ze(h))continue;Ce([a,l],[h]).verdict==="ok"&&e.push({l:[a,l],r:[h]})}}if(n.includes("CO2")&&n.includes("H2O"))for(const a of n){const r=_n(a).solution;if(!r||!r.an||((o=r.an.re)==null?void 0:o.formula)!=="CO3")continue;const l=r.cat[0],c=xt({cat:l.sym,vC:l.val},{an:"HCO3",vA:1});if(!Ze(c))continue;Ce([a,"CO2","H2O"],[c]).verdict==="ok"&&e.push({l:[a,"CO2","H2O"],r:[c]})}if(n.includes("NH3")){const a={HCl:"NH4Cl",HNO3:"NH4NO3",H2CO3:"NH4HCO3"};for(const r in a){if(!n.includes(r))continue;const l=a[r];Ce(["NH3",r],[l]).verdict==="ok"&&Ze(l)&&e.push({l:["NH3",r],r:[l]})}n.includes("CO2")&&n.includes("H2O")&&Ce(["NH3","CO2","H2O"],["NH4HCO3"]).verdict==="ok"&&Ze("NH4HCO3")&&e.push({l:["NH3","CO2","H2O"],r:["NH4HCO3"]})}return e}function cx(n){var a,r,l,c,h,p,u,m,g;const e=[],t=new Set(["Na","K"]),i=new Set(["Li","Na","K"]);for(const v of n){const f=vt(v),d=Object.keys(f);if(f.N&&f.H&&/^NH4/.test(v)){const x=f.O??0,y=x===2?["N2","H2O"]:x===3?["N2O","H2O"]:null;y&&Ce([v],y).verdict==="ok"&&e.push({l:[v],r:y})}if(d.includes("O")&&d.includes("H")&&d.length<=3){const x=d.find(S=>S!=="O"&&S!=="H"),y=["alkali","alkaline","transition","postmetal","lanthanide","actinide"].includes((a=ct[x])==null?void 0:a.category);if(x&&y&&!t.has(x))for(const S of(((r=ct[x])==null?void 0:r.valences)??[]).filter(E=>E>0)){const E=S===1?x+"2O":S===2?x+"O":x+"2O"+S;Ce([v],[E,"H2O"]).verdict==="ok"&&e.push({l:[v],r:[E,"H2O"]})}}if(d.includes("N")&&d.includes("O")&&d.length===3){const x=d.find(S=>S!=="N"&&S!=="O"),y=(l=ct[x])==null?void 0:l.category;if(x&&y){const S=qt(v),E=S?S.vC:li[x]??(((c=ct[x])==null?void 0:c.valences)??[1])[0]??1;if(y==="alkali"){const M=xt({cat:x,vC:E},{an:"NO2",vA:1});(Ze(M)?Ce([v],[M,"O2"]):{verdict:""}).verdict==="ok"&&e.push({l:[v],r:[M,"O2"]})}else{const M=["Ag","Hg"].includes(x),A=E===1?x+"2O":E===2?x+"O":x+"2O"+E,R=M?[x,"NO2","O2"]:[A,"NO2","O2"];!M&&!Ze(A)||Ce([v],R).verdict==="ok"&&e.push({l:[v],r:R})}}}if(d.includes("Mn")&&d.includes("O")&&d.length===3){const x=d.find(S=>S!=="Mn"&&S!=="O"),y=(h=ct[x])==null?void 0:h.category;if(x&&(y==="alkali"||y==="alkaline")){const S=(((p=ct[x])==null?void 0:p.valences)??[1])[0]??1,E=xt({cat:x,vC:S},{an:"MnO4",vA:2});Ze(E)&&Ce([v],[E,"MnO2","O2"]).verdict==="ok"&&e.push({l:[v],r:[E,"MnO2","O2"]})}}if(d.includes("C")&&d.includes("O")&&d.length<=3){const x=d.find(y=>y!=="C"&&y!=="O");if(x&&!i.has(x))for(const y of(((u=ct[x])==null?void 0:u.valences)??[]).filter(S=>S>0)){const S=y===1?x+"2O":y===2?x+"O":x+"2O"+y;Ce([v],[S,"CO2"]).verdict==="ok"&&e.push({l:[v],r:[S,"CO2"]})}}if(d.includes("S")&&d.includes("O")&&d.length===3){const x=d.find(y=>y!=="S"&&y!=="O");if(x&&$o.includes((m=ct[x])==null?void 0:m.category)&&x!=="Na"&&x!=="K"){const y=qt(v),S=y?y.vC:(((g=ct[x])==null?void 0:g.valences)??[])[0];if(S){const E=S===1?x+"2O":S===2?x+"O":x+"2O"+S;if(Ze(E))for(const M of[[E,"SO3"],[E,"SO2","O2"]])Ce([v],M).verdict==="ok"&&e.push({l:[v],r:M})}}}}for(const v of n){const f=vt(v),d=Object.keys(f);if(d.length===2&&d.includes("O")){const x=d.find(y=>y!=="O");["Hg","Ag"].includes(x)&&Ce([v],[x,"O2"]).verdict==="ok"&&e.push({l:[v],r:[x,"O2"]})}}const s={H2CO3:["H2O","CO2"],H2SO3:["H2O","SO2"]};for(const v of n){const f=s[v];if(!f)continue;Ce([v],f).verdict==="ok"&&e.push({l:[v],r:f})}const o=[["CaCO3",["CaO","CO2"]],["MgCO3",["MgO","CO2"]],["BaCO3",["BaO","CO2"]],["KClO3",["KCl","O2"]],["H2O",["H2","O2"]],["NaHCO3",["Na2CO3","H2O","CO2"]],["Cu2(OH)2CO3",["CuO","H2O","CO2"]],["NH3",["N2","H2"]],["CH4",["C","H2"]],["H2S",["H2","S"]],["H2O2",["H2O","O2"]],["Al2O3",["Al","O2"]]];for(const[v,f]of o)n.includes(v)&&Ce([v],f).verdict==="ok"&&e.push({l:[v],r:f});return e}function hx(n){var l,c,h,p,u,m,g,v;const e=[];if(n.includes("H2"))for(const f of n){const d=pn(f);if(!d)continue;Ce([f,"H2"],[d.cat,"H2O"]).verdict==="ok"&&e.push({l:[f,"H2"],r:[d.cat,"H2O"]})}const t=yd(n),i=t.filter(f=>{var x;const d=Object.keys(vt(f))[0];return d&&(((x=ct[d])==null?void 0:x.valences)??[]).length&&gt.includes(d)}),s=n.filter(f=>["HCl","H2SO4","HNO3","HBr"].includes(f)),o=n.filter(f=>{if(s.includes(f))return!1;const d=vt(f),x=Object.keys(d);return x.length<2?!1:x.find(y=>gt.includes(y)&&y!=="H")});for(const f of i){const d=Object.keys(vt(f))[0];if(!(gt.indexOf(d)>=gt.indexOf("H")))for(const x of s){const y=vt(f),S=Object.keys(y)[0],E=li[S]??(((l=ct[S])==null?void 0:l.valences)??[])[0];if(E){if(x==="HCl"){const M=S+"Cl"+(E===1?"":E);Ce([f,x],[M,"H2"]).verdict==="ok"&&Ze(M)&&e.push({l:[f,x],r:[M,"H2"]})}else if(x==="H2SO4"){const M=xt({cat:S,vC:E},{an:"SO4",vA:2});Ce([f,x],[M,"H2"]).verdict==="ok"&&Ze(M)&&e.push({l:[f,x],r:[M,"H2"]})}}}}for(const f of i){const d=Object.keys(vt(f))[0];for(const x of o){const y=vt(x),S=Object.keys(y).find(G=>gt.includes(G)&&G!==d&&G!=="H");if(!S||gt.indexOf(d)>=gt.indexOf(S))continue;const E=li[d]??(((c=ct[d])==null?void 0:c.valences)??[])[0],M=li[S]??(((h=ct[S])==null?void 0:h.valences)??[])[0];if(!E||!M)continue;const R=((m=(u=(p=_n(x).solution)==null?void 0:p.an)==null?void 0:u.re)==null?void 0:m.formula)??null;if(!R||!R.length)continue;const P=E*M/yl(E,M),_=P/E,b=P/M,I=/[A-Z].*[A-Z]/.test(R)||R.includes("("),O=d+(_===1?"":_)+(I&&b>1?"("+R+")"+b:R+(b===1?"":b));Ce([f,x],[O,S]).verdict==="ok"&&Ze(O)&&e.push({l:[f,x],r:[O,S]})}}if(n.includes("H2O"))for(const f of i){const d=Object.keys(vt(f))[0];if(!["Li","Na","K","Ca","Ba"].includes(d))continue;const y=(d==="Ca"||d==="Ba"?2:1)===1?d+"OH":d+"(OH)2";Ce([f,"H2O"],[y,"H2"]).verdict==="ok"&&Ze(y)&&e.push({l:[f,"H2O"],r:[y,"H2"]})}const a=["F","Cl","Br","I"];for(const f of t){const d=/^(F|Cl|Br|I)2$/.exec(f);if(!d)continue;const x=d[1];for(const y of n){const S=Object.keys(vt(y)),E=S.find(_=>a.includes(_)&&_!==x);if(!E||a.indexOf(x)>=a.indexOf(E))continue;const M=S.find(_=>gt.includes(_)&&_!=="H");if(!M)continue;const A=li[M]??(((g=ct[M])==null?void 0:g.valences)??[])[0];if(!A)continue;const R=M+x+(A===1?"":A);Ce([f,y],[R,E+"2"]).verdict==="ok"&&Ze(R)&&e.push({l:[f,y],r:[R,E+"2"]})}}if(n.includes("H2SO4"))for(const f of i){const d=Object.keys(vt(f))[0];if(gt.indexOf(d)<=gt.indexOf("H"))continue;const x=li[d]??(((v=ct[d])==null?void 0:v.valences)??[])[0];if(!x)continue;const y=xt({cat:d,vC:x},{an:"SO4",vA:2});if(!Ze(y))continue;Ce([f,"H2SO4"],[y,"SO2","H2O"]).verdict==="ok"&&e.push({l:[f,"H2SO4"],r:[y,"SO2","H2O"]})}n.includes("Cl2")&&n.includes("H2O")&&Ce(["Cl2","H2O"],["HCl","O2"]).verdict==="ok"&&e.push({l:["Cl2","H2O"],r:["HCl","O2"]});const r={Mg:"MgO",Al:"Al2O3"};for(const f of["Mg","Al"])if(n.includes(f))for(const d of n){const x=pn(d);if(!x||x.cat===f||gt.indexOf(f)>=gt.indexOf(x.cat))continue;Ce([f,d],[r[f],x.cat]).verdict==="ok"&&e.push({l:[f,d],r:[r[f],x.cat]})}if(n.includes("C"))for(const f of n){const d=pn(f);if(d)for(const x of["CO2","CO"])Ce(["C",f],[d.cat,x]).verdict==="ok"&&e.push({l:["C",f],r:[d.cat,x]})}for(const f of i){const d=Object.keys(vt(f))[0];if(!["Li","Na","K"].includes(d)||!n.includes(d+"OH"))continue;const x=xt({cat:d,vC:1},{an:"O",vA:2});if(!Ze(x)||x===d+"OH")continue;Ce([f,d+"OH"],[x,"H2"]).verdict==="ok"&&e.push({l:[f,d+"OH"],r:[x,"H2"]})}if(n.includes("H2"))for(const f of n){const d=qt(f);if(!d||d.an!=="SO4")continue;const x=xt(d,{an:"S",vA:2});if(!Ze(x))continue;Ce([f,"H2"],[x,"H2O"]).verdict==="ok"&&e.push({l:[f,"H2"],r:[x,"H2O"]})}return e}function dx(n){const e=[];n.includes("CO")&&n.includes("H2O")&&Ce(["CO","H2O"],["CO2","H2"]).verdict==="ok"&&e.push({l:["CO","H2O"],r:["CO2","H2"]}),n.includes("H2S")&&n.includes("Cl2")&&n.includes("H2O")&&Ce(["H2S","Cl2","H2O"],["H2SO4","HCl"]).verdict==="ok"&&e.push({l:["H2S","Cl2","H2O"],r:["H2SO4","HCl"]});const t={Al:{an:"AlO2",vA:1},Zn:{an:"ZnO2",vA:2}};for(const s of n){const o=vt(s),a=Object.keys(o).find(r=>t[r]);if(a)for(const r of n){if(!/^(Li|Na|K)OH$/.test(r))continue;const l=xt({cat:r.slice(0,r.length-2),vC:1},t[a]);if(!Ze(l))continue;Ce([s,r],[l,"H2O"]).verdict==="ok"&&e.push({l:[s,r],r:[l,"H2O"]})}}const i={CO3:"HCO3",S:"HS",SO3:"HSO3",SiO3:"HSiO3"};if(n.includes("H2O"))for(const s of n){const o=qt(s);if(!o||!["Li","Na","K"].includes(o.cat))continue;const a=i[o.an];if(!a)continue;const r=xt(o,{an:a,vA:1});if(!Ze(r))continue;Ce([s,"H2O"],[r,o.cat+"OH"]).verdict==="ok"&&e.push({l:[s,"H2O"],r:[r,o.cat+"OH"]})}for(let s=0;s<n.length;s++)for(let o=s+1;o<n.length;o++){const a=n[s],r=n[o],l=rx(a,r);if(l){e.push(l);continue}const c=qt(a),h=qt(r);if(!c||!h)continue;const p={HCO3:{an:"CO3",vA:2},HSO3:{an:"SO3",vA:2},HSO4:{an:"SO4",vA:2},H2PO4:{an:"HPO4",vA:2},HPO4:{an:"PO4",vA:3}},u=(D,G)=>{if(!D||!G||G.an!=="OH")return null;const F=p[D.an];if(!F)return null;const X=xt(G,F);return Ze(X)&&Ce([a,r],[X,"H2O"]).verdict==="ok"?{l:[a,r],r:[X,"H2O"]}:null},m=u(c,h)||u(h,c);if(m){e.push(m);continue}const g=(D,G)=>{if(!D||!G||G.an!=="OH")return null;const F=p[D.an];if(!F)return null;const X=xt(G,F),V=xt(D,{an:"OH",vA:1});return!Ze(X)||!Ze(V)||X===a||X===r||V===a||V===r?null:Ce([a,r],[X,"H2O",V]).verdict==="ok"?{l:[a,r],r:[X,"H2O",V]}:null},v=g(c,h)||g(h,c);if(v){e.push(v);continue}if(c.cat==="H"&&h.cat==="H"||c.an==="OH"&&h.an==="OH"||c.cat===h.cat&&c.an===h.an||!(c.cat==="H"||h.cat==="H")&&!Xr(c.cat,c.an)&&!Xr(h.cat,h.an))continue;const d=c.cat==="H"&&h.an==="OH"?"H2O":xt(c,h),x=h.cat==="H"&&c.an==="OH"?"H2O":xt(h,c);if(!Ze(d)||!Ze(x)||d===a&&x===r||d===r&&x===a)continue;const y=qt(d),S=qt(x),E=d==="H2O"?"water":y?ch(d,y.cat,y.an):null,M=x==="H2O"?"water":S?ch(x,S.cat,S.an):null,A={H2SO4:!0,H3PO4:!0},R={HCl:!0,HBr:!0,HI:!0,HNO3:!0},P=c.cat==="H"?a:h.cat==="H"?r:null,_=!!A[P]&&(!!R[d]||!!R[x]);if(!E&&!M&&!_)continue;const b=D=>D==="H2CO3"?["H2O","CO2"]:D==="H2SO3"?["H2O","SO2"]:[D],I=[...b(d),...b(x)];Ce([a,r],I).verdict==="ok"&&e.push({l:[a,r],r:I})}return e}function ux(n){var s;const e=[];if(!n.includes("O2"))return e;const t=o=>{var l;if(o==="S")return["SO2"];if(o==="N")return[];const a=(((l=ct[o])==null?void 0:l.valences)??[]).filter(c=>c>0).sort((c,h)=>h-c),r=[];for(const c of a){const h=c===2?o+"O":c===1?o+"2O":o+"2O"+c;Ze(h)&&!r.includes(h)&&r.push(h)}return r},i={SO2:"SO3",NO:"NO2",CO:"CO2",P2O3:"P2O5",N2O3:"N2O5"};n.includes("H2O")&&n.includes("Fe")&&Ze("Fe(OH)3")&&Ce(["Fe","O2","H2O"],["Fe(OH)3"]).verdict==="ok"&&e.push({l:["Fe","O2","H2O"],r:["Fe(OH)3"]});for(const o of n){if(o==="O2")continue;const a=vt(o);if(a.S&&!a.O&&!a.C&&!a.H&&!a.N){const p=Object.keys(a).find(m=>{var g;return $o.includes((g=ct[m])==null?void 0:g.category)}),u=p?li[p]??(((s=ct[p])==null?void 0:s.valences)??[])[0]:null;if(p&&u){const m=xt({cat:p,vC:u},{an:"SO4",vA:2});Ze(m)&&Ce([o,"O2"],[m]).verdict==="ok"&&e.push({l:[o,"O2"],r:[m]})}}if(i[o]&&Ze(i[o])&&Ce([o,"O2"],[i[o]]).verdict==="ok"&&e.push({l:[o,"O2"],r:[i[o]]}),a.O&&!a.C&&!a.H)continue;const r=Object.keys(a);let l=[[]];a.C&&(l=[["CO2"],["CO"]]),a.H&&(l=l.map(h=>[...h,"H2O"])),a.N&&(l=l.map(h=>[...h,"N2"]));let c=!0;for(const h of r){if(h==="C"||h==="H"||h==="O"||h==="N")continue;const p=t(h);if(!p.length){c=!1;break}const u=[];for(const m of l)for(const g of p)u.push([...m,g]);l=u}if(c)for(const h of l){if(!h.length)continue;Ce([o,"O2"],h).verdict==="ok"&&e.push({l:[o,"O2"],r:h})}}return e}function fx(n){const e=[],t=(i,s)=>{Ce(i,s).verdict==="ok"&&e.push({l:i,r:s})};n.includes("H2O")&&n.every(i=>i==="H2O")&&t(["H2O"],["H2","O2"]),n.includes("Al2O3")&&t(["Al2O3"],["Al","O2"]);for(const i of n){const s=qt(i);if(!s)continue;const o=["Li","Na","K"].includes(s.cat);s.an==="OH"&&o&&t([i],[s.cat,"O2","H2O"]),s.an==="Cl"&&(o&&n.includes("H2O")?t([i,"H2O"],[s.cat+"OH","H2","Cl2"]):t([i],[s.cat,"Cl2"])),s.an==="SO4"&&n.includes("H2O")&&gt.indexOf(s.cat)>gt.indexOf("H")&&t([i,"H2O"],[s.cat,"O2","H2SO4"])}return e}const px={combination:lx,decomposition:cx,substitution:hx,exchange:dx,burning:ux,electrolysis:fx};function mx(n,e,t){const i=[],s=n.filter(o=>["HCl","H2SO4","HNO3","HBr"].includes(o));for(const o of t){const a=vt(o),r=Object.keys(a);let l="inert",c=null;if(e==="burning")a.O?l="alreadyOxide":n.includes("O2")||(l="needO2",c="O2");else if(e==="substitution"){const h=r.length===1?r[0]:null,p=n.find(u=>u!==o&&Object.keys(vt(u)).some(m=>gt.includes(m)&&m!=="H"));h&&s.length&&gt.includes(h)&&gt.indexOf(h)>=gt.indexOf("H")?(l="rightOfH",c=s[0]):(h&&p&&gt.includes(h)||p)&&(l="moreActive",c=p)}else if(e==="exchange"){const h=n.find(p=>p!==o)??null;h?qt(o)?(l="noDriving",c=h):(l="notIonic",c=h):l="noPartner"}else e==="combination"?l="noPartner":e==="decomposition"&&(l="noTemplate");i.push({formula:o,code:l,other:c})}return i}function Wa(n,e){const t=px[e];if(!t)return{reactions:[],unused:[],unusedInfo:[]};const i=[...new Set(n.map(l=>l.replace(/^\s*\d+\s*/,"").trim()).filter(Boolean))],s=[],o=new Set;for(const l of t(i)){const c=l.l.slice().sort().join("+")+">"+l.r.slice().sort().join("+");if(o.has(c))continue;o.add(c);const h=Ce(l.l,l.r);h.verdict==="ok"&&(e==="electrolysis"&&(h.cls.type="electrolysis"),s.push(h))}const a=new Set(s.flatMap(l=>l.eq.left.map(c=>c.formula))),r=i.filter(l=>!a.has(l));return{reactions:s,unused:r,unusedInfo:mx(i,e,r)}}const hh=["combination","decomposition","substitution","exchange","burning","electrolysis"],dh=(n,e)=>(n===1?"":n)+e,Uo=n=>n.eq.left.map((e,t)=>dh(n.coefs.left[t],e.formula)).join(" + ")+" → "+n.eq.right.map((e,t)=>dh(n.coefs.right[t],e.formula)).join(" + "),gx=n=>n.replace(/\d+/g,e=>`<sub>${e}</sub>`),uh=(n,e)=>(n===1?"":`<span class="coefGreen">${n}</span>`)+gx(e),Sd=n=>n.eq.left.map((e,t)=>uh(n.coefs.left[t],e.formula)).join(" + ")+" → "+n.eq.right.map((e,t)=>uh(n.coefs.right[t],e.formula)).join(" + "),_x=n=>L("rx"+n[0].toUpperCase()+n.slice(1)),vx=n=>L("rxDesc"+n[0].toUpperCase()+n.slice(1));function Md(n,e,t){n.innerHTML="",n.scrollTop=0;const i=te("div","verdict"+(e.ok?"":" bad"));i.innerHTML=e.ok?`<span class="mark"></span><span class="vt">${L("rxOk")}<span class="vs">${L("rxOkSub")}</span></span>`:`<span class="mark"></span><span class="vt">${L("rxBadBal")}<span class="vs">${L("rxBadSub")}</span></span>`,n.appendChild(i);const s=Xt("01",L("secEquation"));s.appendChild(te("div","rxEquation",Sd(e))),s.appendChild(xd(Uo(e),L("copyEq"))),n.appendChild(s);const o=Xt("02",L("secRxType"));o.appendChild(te("div","rxType",Be(_x(e.cls.type))));const a=vx(e.cls.type);a&&o.appendChild(te("p","hint",Be(a))),n.appendChild(o);const r=Xt("03",L("secBalance")),l=te("table","atable");l.innerHTML=`<tr><th>${L("colEl")}</th><th class="r">${L("colLeft")}</th><th class="r">${L("colRight")}</th></tr>`;for(const p of e.table){const u=(t==null?void 0:t[p.sym])??"#888",m=p.ok?"":' style="color:var(--bad)"';l.insertAdjacentHTML("beforeend",`<tr><td><span class="sw" style="background:${u}"></span><span class="sym">${Be(p.sym)}</span></td><td class="r"${m}>${p.left}</td><td class="r"${m}>${p.right}</td></tr>`)}r.appendChild(l),n.appendChild(r);const c=Xt("04",L("secSummary"));c.appendChild(te("div","sumRow",`<span class="k">${L("sumLeftN")}</span><span class="v">${e.eq.left.length}</span>`)),c.appendChild(te("div","sumRow",`<span class="k">${L("sumRightN")}</span><span class="v">${e.eq.right.length}</span>`)),c.appendChild(te("div","sumRow",`<span class="k">${L("sumCoefs")}</span><span class="v">${[...e.coefs.left,...e.coefs.right].filter(p=>p>1).length}</span>`)),n.appendChild(c);const h=te("p","hint",L("noteReaction"));h.style.marginTop="14px",n.appendChild(h),n.appendChild(te("p","hint",L("noteRxScheme")))}const Xa=["H2O","CO2","CO","O2","H2","N2","Cl2","CH4","NH3","HCl","HBr","H2S","H2SO4","HNO3","H2CO3","H3PO4","NaOH","KOH","LiOH","Ca(OH)2","Ba(OH)2","Cu(OH)2","Fe(OH)3","Al(OH)3","Mg(OH)2","Zn(OH)2","NaCl","KCl","CaCl2","BaCl2","MgCl2","AlCl3","ZnCl2","FeCl2","FeCl3","CuCl2","AgNO3","NaNO3","KNO3","Ba(NO3)2","Cu(NO3)2","Na2SO4","K2SO4","CaSO4","CuSO4","ZnSO4","FeSO4","Fe2(SO4)3","Al2(SO4)3","MgSO4","Na2CO3","K2CO3","CaCO3","MgCO3","NaHCO3","Na3PO4","K3PO4","Ca3(PO4)2","Na2S","NaI","KBr","Na2SiO3","K2SiO3","Na2O","K2O","Li2O","MgO","CaO","BaO","CuO","ZnO","FeO","Fe2O3","Al2O3","SO2","SO3","P2O5","SiO2","S","P","C","Na","K","Ca","Mg","Al","Zn","Fe","Cu","Ag","Ba","Li"],xx=[{key:"BurnCh4",l:["CH4","O2"],r:["CO2","H2O"]},{key:"ZnHCl",l:["Zn","HCl"],r:["ZnCl2","H2"]},{key:"Na2oWater",l:["Na2O","H2O"],r:["NaOH"]},{key:"Chalk",l:["CaCO3"],r:["CaO","CO2"]},{key:"Exchange",l:["AgNO3","NaCl"],r:["AgCl","NaNO3"]},{key:"BurnAl",l:["Al","O2"],r:["Al2O3"]}],bd='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',Ed='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',qa=n=>L("rx"+n[0].toUpperCase()+n.slice(1));function Sl(n,e,t="eq"){n.innerHTML="",t==="rx"?Mx(n,e):yx(n,e)}function yx(n,e){const t=te("div","rxBuilder");t.appendChild(te("p","rxHint",L("rxHint")));const i=te("div","rxSides"),s=(v,f)=>{const d=te("div","rxSide");d.appendChild(te("div","rxSideTitle",Be(f)));const x=te("div","rxFields");d.appendChild(x);const y=te("button","rxAdd",bd+"<span>"+L("rxAdd")+"</span>");y.type="button",d.appendChild(y);const S=(M="")=>{if(x.children.length>=4)return;const A=te("div","rxField"),R=te("input");R.type="text",R.placeholder=L(v==="l"?"rxPhLeft":"rxPhRight"),R.spellcheck=!1,R.value=M,R.setAttribute("aria-label",L(v==="l"?"rxReagent":"rxProduct")+(x.children.length+1));const P=te("button","rxRm",Ed);return P.type="button",P.title=L("rxRemove"),P.addEventListener("click",()=>{x.children.length>1&&A.remove(),E()}),A.appendChild(R),A.appendChild(P),R.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),g())}),x.appendChild(A),E(),R},E=()=>{const M=x.children.length===1;for(const A of x.querySelectorAll(".rxRm"))A.classList.toggle("hide",M)};return y.addEventListener("click",()=>{const M=S();M&&M.focus()}),S(),{side:d,fields:x,addField:S,syncButtons:E}},o=s("l",L("rxReagents")),a=te("div","rxArrow");a.innerHTML='<svg viewBox="0 0 48 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h36M32 5l8 7-8 7"/></svg>';const r=s("r",L("rxProducts"));i.appendChild(o.side),i.appendChild(a),i.appendChild(r.side),t.appendChild(i);const l=te("button","rxSubmit",L("rxSubmit"));l.type="button",t.appendChild(l),n.appendChild(t);const c=te("div","rxPresets");for(const v of xx){const f=te("button","rxChip",Be(L("preset"+v.key)));f.type="button",f.addEventListener("click",()=>{u(o,v.l),u(r,v.r),g()}),c.appendChild(f)}n.appendChild(c);const h=te("div","rxResult");n.appendChild(h);const p=(v,f)=>{h.appendChild(te("div",v,f));const d=h.children.length>0;n.classList.toggle("hasResult",d);const x=n.closest("#rxPane");x&&x.classList.toggle("hasResult",d)},u=(v,f)=>{for(;v.fields.children.length>1;)v.fields.lastChild.remove();v.fields.firstChild.querySelector("input").value=f[0]??"";for(let d=1;d<f.length;d++)v.addField(f[d]);v.syncButtons()},m=v=>[...v.fields.querySelectorAll("input")].map(f=>f.value.trim()).filter(Boolean),g=()=>{const v=m(o),f=m(r);if(h.innerHTML="",!v.length&&!f.length){p("verdict err",`<span class="mark"></span><span class="vt">${L("rxEmpty")}<span class="vs">${L("rxEmptySub")}</span></span>`);return}if(!v.length||!f.length){const x=v.length?L("rxMissRight"):L("rxMissLeft");p("verdict err",`<span class="mark"></span><span class="vt">${L("rxMissing",{side:x})}<span class="vs">${L("rxMissingSub")}</span></span>`);return}const d=Ce(v,f);if(d.verdict==="err"){Ht.err();const x=d.code==="substance"?L("rSubstance",{text:d.text,msg:td(d.inner)}):L("r"+d.code[0].toUpperCase()+d.code.slice(1));p("verdict err",`<span class="mark"></span><span class="vt">${L("vErr")}<span class="vs">${Be(x)}</span></span>`);return}if(d.verdict==="fail"){Ht.err();const x=d.code==="same"?L("rSame"):nd(d);p("verdict bad",`<span class="mark"></span><span class="vt">${L("rxFail")}<span class="vs">${Be(x)}</span></span>`);return}Ht.open(),p("verdict",`<span class="mark"></span><span class="vt">${L("rxFound")}<span class="vs">${Be(Uo(d))}</span></span>`),e(d)};l.addEventListener("click",g)}function Sx(){let n=document.getElementById("rxSuggestBox");if(n)return n;n=te("div","rxSuggest"),n.id="rxSuggestBox",n.hidden=!0,document.body.appendChild(n);const e=()=>{n.hidden=!0,n._for=null,n.innerHTML=""};return n._close=e,n._open=t=>{n._for=t;const i=t.value.trim().toLowerCase(),o=(i?Xa.filter(p=>p.toLowerCase().startsWith(i)).concat(Xa.filter(p=>!p.toLowerCase().startsWith(i)&&p.toLowerCase().includes(i))):Xa).slice(0,9);if(n.innerHTML="",!o.length){e();return}o.forEach((p,u)=>{const m=te("div","rxSuggestItem");m.textContent=p,m.addEventListener("mousedown",g=>{g.preventDefault(),t.value=p,t.dispatchEvent(new Event("input",{bubbles:!0})),e()}),u===0&&m.classList.add("on"),n.appendChild(m)});const a=t.getBoundingClientRect();n.style.minWidth=Math.round(a.width)+"px",n.style.visibility="hidden",n.hidden=!1;const r=n.offsetHeight,l=Math.max(n.offsetWidth,a.width),c=Math.max(8,Math.min(a.left,window.innerWidth-l-8));let h=a.bottom+4;h+r>window.innerHeight-8&&a.top-r-4>8&&(h=a.top-r-4),n.style.left=Math.round(c)+"px",n.style.top=Math.round(Math.max(8,h))+"px",n.style.visibility=""},n._move=t=>{if(n.hidden||!n.children.length)return;const i=n.children.length,o=([...n.children].findIndex(a=>a.classList.contains("on"))+t+i)%i;[...n.children].forEach((a,r)=>a.classList.toggle("on",r===o)),n.children[o].scrollIntoView({block:"nearest",behavior:"smooth"})},document.addEventListener("pointerdown",t=>{!n.hidden&&!n.contains(t.target)&&t.target!==n._for&&e()}),document.addEventListener("scroll",t=>{!n.hidden&&!n.contains(t.target)&&e()},!0),document.addEventListener("wheel",t=>{n.hidden||n.contains(t.target)||(t.preventDefault(),e())},{capture:!0,passive:!1}),window.addEventListener("resize",e),n}function Mx(n,e){var y;const t=te("div","rxBuilder");t.appendChild(te("p","rxHint",L("labHint")));const i=Sx(),s=te("div","rxFields labFields"),o=S=>{S.addEventListener("focus",()=>i._open(S)),S.addEventListener("input",()=>i._open(S)),S.addEventListener("keydown",E=>{const M=!i.hidden&&i._for===S;if(E.key==="ArrowDown"&&M){E.preventDefault(),i._move(1);return}if(E.key==="ArrowUp"&&M){E.preventDefault(),i._move(-1);return}if(E.key==="Enter"){if(E.preventDefault(),M){const A=i.querySelector(".rxSuggestItem.on");A&&(S.value=A.textContent,S.dispatchEvent(new Event("input",{bubbles:!0}))),i._close()}x();return}E.key==="Escape"&&i._close()})},a=(S="")=>{if(s.children.length>=5)return;const E=te("div","rxField"),M=te("input");M.type="text",M.placeholder=L("labPh"),M.spellcheck=!1,M.autocomplete="off",M.value=S,M.setAttribute("aria-label",L("labBuild")+(s.children.length+1));const A=te("button","rxRm",Ed);return A.type="button",A.title=L("rxRemove"),A.addEventListener("click",()=>{s.children.length>1&&E.remove(),r(),x()}),E.appendChild(M),E.appendChild(A),o(M),s.appendChild(E),r(),M},r=()=>{const S=s.children.length===1;for(const E of s.querySelectorAll(".rxRm"))E.classList.toggle("hide",S)},l=te("button","rxFieldAdd",bd+"<span>"+Be(L("labAdd"))+"</span>");l.type="button",l.title=L("rxAdd"),l.setAttribute("aria-label",L("rxAdd")),l.addEventListener("click",()=>{const S=a();S&&S.focus()}),a(),a(),t.appendChild(s);const c=te("div","rxAddRow");c.appendChild(l),t.appendChild(c);const h=te("div","rxTypeRow");for(const S of hh){const E=te("button","rxChip typeChip",Be(qa(S)));E.type="button",E.dataset.type=S,E.addEventListener("click",()=>{for(const M of h.querySelectorAll(".typeChip"))M.classList.remove("on");E.classList.add("on"),x()}),h.appendChild(E)}const p=te("button","rxChip rxClear",Be(L("pickClear")));p.type="button",p.addEventListener("click",()=>{var S;for(const E of s.querySelectorAll("input"))E.value="";for(const E of h.querySelectorAll(".typeChip"))E.classList.remove("on");m.innerHTML="",n.classList.remove("hasResult"),(S=s.querySelector("input"))==null||S.focus()}),t.appendChild(h);const u=te("div","rxClearRow");u.appendChild(p),t.appendChild(u);const m=te("div","rxResults");t.appendChild(m),n.appendChild(t);const g=()=>[...s.querySelectorAll("input")].map(S=>S.value.trim()).filter(Boolean),v=()=>{const S=h.querySelector(".typeChip.on");return S?S.dataset.type:null},f=()=>{n.classList.toggle("hasResult",m.children.length>0)},d=S=>{for(const E of[...s.querySelectorAll("input")])S.includes(E.value.trim())&&s.children.length>1&&E.closest(".rxField").remove();x()},x=()=>{m.innerHTML="";const S=g(),E=v(),M=E==="decomposition"?1:2;if(S.length<M){m.appendChild(te("p","hint",Be(L(E==="decomposition"?"labNeedOne":"labNeed")))),f();return}if(!E){f();return}const A=Wa(S,E);if(!A.reactions.length){Ht.err();const R=te("div","verdict bad");R.innerHTML=`<span class="mark"></span><span class="vt">${Be(L("labNone"))}<span class="vs">${Be(L("labNoneSub"))}</span></span>`,m.appendChild(R);for(const P of hh){if(P===E)continue;const _=Wa(S,P);if(!_.reactions.length)continue;const b=te("div","rxNearRow");b.appendChild(te("span","hint",Be(L("labNearTypes"))));const I=te("button","rxChip",Be(qa(P))+" ("+_.reactions.length+")");I.type="button",I.addEventListener("click",()=>{const O=[...h.querySelectorAll(".typeChip")].find(D=>D.dataset.type===P);O==null||O.click()}),b.appendChild(I),m.appendChild(b)}for(const P of[...new Set(S)].slice(0,4)){const _=S.filter(D=>D!==P);if(_.length<2||!Wa(_,E).reactions.length)continue;const I=te("div","rxNearRow"),O=te("button","freeBtn",L("labDropBuild",{f:P}));O.type="button",O.addEventListener("click",()=>d([P])),I.appendChild(O),m.appendChild(I)}f();return}if(A.unused.length){const R=te("div","labUnusedBox");R.appendChild(te("p","hint labUnused",Be(L("labUnusedTitle")+": "+A.unused.join(", "))));for(const _ of A.unusedInfo){const b="labWhy"+_.code[0].toUpperCase()+_.code.slice(1),I=L(b,_.other?{other:_.other}:{});R.appendChild(te("p","labWhy",Be(_.formula+" — "+I)))}const P=te("button","freeBtn",L("labDropUnused"));P.type="button",P.addEventListener("click",()=>d(A.unused)),R.appendChild(P),m.appendChild(R)}for(const R of A.reactions){const P=te("div","rxResultCard");P.appendChild(te("div","rxCardType",Be(qa(E)))),P.appendChild(te("div","rxEquation",Sd(R)));const _=te("button","freeBtn",L("pickShow"));_.type="button",_.addEventListener("click",()=>e(R)),P.appendChild(_),m.appendChild(P)}f()};(y=h.querySelector(".typeChip"))==null||y.click()}const bx={O:2,N:3},fh=new Set(jt.map(n=>n.symbol)),Ex=new Set(jt.filter(n=>["alkali","alkaline","transition","postmetal","lanthanide","actinide"].includes(n.category)).map(n=>n.symbol)),ph={},Tx=n=>(n.match(/[A-Z][a-z]?/g)??[]).some(e=>Ex.has(e)),Ax=n=>{if(!n||n.atoms.every(r=>fh.has(r.sym)))return n;const e=[],t=new Map,i=new Map,s=[];n.atoms.forEach((r,l)=>{if(fh.has(r.sym)){t.set(l,[e.length]),e.push({...r});return}const c=Eo(r.sym,r.pos,.55),h=e.length,p=c.map((u,m)=>u.sym==="O"?m:-1).filter(u=>u>=0);t.set(l,p.length?p.map(u=>h+u):[h]),c.forEach((u,m)=>{e.push({sym:u.sym,pos:u.pos}),m>0&&s.push({a:h,b:h+m,order:1})})});const o=r=>{const l=t.get(r);if(!l)return-1;const c=i.get(r)??0;return i.set(r,c+1),l[c%l.length]},a=[...n.bonds.map(r=>({...r,a:o(r.a),b:o(r.b)})).filter(r=>r.a>=0&&r.b>=0&&r.a!==r.b),...s];return{...n,atoms:e,bonds:a}},Cx=n=>{const e=_n(n),t=[];for(const o in e.atoms)for(let a=0;a<e.atoms[o];a++)t.push(o);const i=[],s=[];return t.length===1?i.push({sym:t[0],pos:[0,0,0]}):t.length===2?(i.push({sym:t[0],pos:[-.7,0,0]}),i.push({sym:t[1],pos:[.7,0,0]}),s.push({a:0,b:1,order:bx[t[0]]??1})):t.forEach((o,a)=>{const r=(a-(t.length-1)/2)*1.15,l=t.length===3?a===1?.55:0:a%2?.35:-.35;if(i.push({sym:o,pos:[r,l,a%2?.3:-.3]}),a>0){const c=t.length===3&&t[0]==="O";s.push({a:a-1,b:a,order:c&&a===1?2:1})}}),{atoms:i,bonds:s,labels:[],ionMode:!1}},wx=n=>{const e=_n(n),t=e.solution?od(e.solution,n):Cx(n);return Ax(t)},Rx=(n,e)=>(n===1?"":n)+e,qr=n=>{const e=new Error(n);throw e.code=n,e},mh=(n,e,t,i=0)=>{const s=n.reduce((a,r)=>a+2*r.rad,0)+t*Math.max(n.length-1,0);let o=e-s/2;return n.map(a=>{const r=[o+a.rad,i,0];return o+=2*a.rad+t,r})},gh={conversion:{gap:1.4,yOff:0},decomposition:{gap:2.6,yOff:0},combination:{gap:1.2,yOff:0},substitution:{gap:1.4,yOff:0},exchange:{gap:1.4,yOff:0},burning:{gap:1.7,yOff:.55}},Px=[15,15,15,30,17,8],Ox={burning:[15,12,8,30,20,15]},Za=(n,e)=>(n[0]-e[0])**2+(n[1]-e[1])**2+(n[2]-e[2])**2,Ao=(n,e)=>n<e?n+":"+e:e+":"+n,Lx=(n,e,t,i,s)=>{const o={};n.forEach((c,h)=>{var p;return(o[p=c.sym]??(o[p]={before:[],after:[]})).before.push(h)}),e.forEach((c,h)=>{var p;return(p=o[c.sym])==null?void 0:p.after.push(h)});for(const c in o)o[c].before.length!==o[c].after.length&&qr("noBalance");const a=new Set,r=new Set,l=[];for(const c of t){const h=n[c.a],p=n[c.b];for(const u of i){const m=e[u.a],g=e[u.b];for(const[v,f]of[[m,g],[g,m]])v.sym!==h.sym||f.sym!==p.sym||l.push({d:Za(h.before,v.pos)+Za(p.before,f.pos),ba:c.a,bb:c.b,aa:u.a,ab:u.b})}}l.sort((c,h)=>c.d-h.d||c.ba-h.ba||c.aa-h.aa);for(const c of l)a.has(c.ba)||a.has(c.bb)||r.has(c.aa)||r.has(c.ab)||(s[c.ba]=c.aa,s[c.bb]=c.ab,a.add(c.ba),a.add(c.bb),r.add(c.aa),r.add(c.ab));for(const c in o){const{before:h,after:p}=o[c],u=[];for(const m of h)if(!a.has(m))for(const g of p)r.has(g)||u.push({d:Za(n[m].before,e[g].pos),bi:m,ai:g});u.sort((m,g)=>m.d-g.d||m.bi-g.bi||m.ai-g.ai);for(const m of u)a.has(m.bi)||r.has(m.ai)||(s[m.bi]=m.ai,a.add(m.bi),r.add(m.ai))}};function Ix(n){(!n||n.verdict!=="ok"||!n.ok)&&qr("noBalance");const e=n.cls.type,t=gh[e]??gh.exchange,i=P=>{let _=ph[P];if(!_){const b=wx(P);let I=.5;for(const O of b.atoms)I=Math.max(I,Math.hypot(O.pos[0],O.pos[1],O.pos[2]));_=ph[P]={data:b,rad:I}}return _},s=[];n.eq.left.forEach((P,_)=>{const b=i(P.formula);for(let I=0;I<n.coefs.left[_];I++)s.push({rad:b.rad})});const o=[];n.eq.right.forEach((P,_)=>{const b=i(P.formula);for(let I=0;I<n.coefs.right[_];I++)o.push({rad:b.rad})});const a=mh(s,0,1.1);let r;if(e==="decomposition"&&o.length>1){const P=Math.max(2.4,...o.map(_=>_.rad))+.6;r=o.map((_,b)=>{const I=-Math.PI/2+b*2*Math.PI/o.length;return[Math.cos(I)*P,0,Math.sin(I)*P]})}else e==="combination"&&o.length===1?r=[[0,.4,0]]:r=mh(o,0,t.gap,t.yOff);const l=(P,_,b)=>{const I=[];return P.forEach((O,D)=>{const G=i(O.formula);for(let F=0;F<_[D];F++)I.push({data:G.data,rad:G.rad,coef:_[D],formula:O.formula,origin:b.pop(),term:D})}),I},c=l(n.eq.left,n.coefs.left,[...a].reverse()),h=l(n.eq.right,n.coefs.right,[...r].reverse()),p=[],u=[];for(const P of c){const _=p.length;for(const b of P.data.atoms)p.push({id:p.length,sym:b.sym,before:[P.origin[0]+b.pos[0],P.origin[1]+b.pos[1],P.origin[2]+b.pos[2]],big:!!b.big});for(const b of P.data.bonds)u.push({a:_+b.a,b:_+b.b,order:b.order??1,thin:!!b.thin,ionic:!!b.ionic})}const m=[];for(const P of h){P.slotBase=m.length;for(const _ of P.data.atoms)m.push({sym:_.sym,pos:[P.origin[0]+_.pos[0],P.origin[1]+_.pos[1],P.origin[2]+_.pos[2]]})}const g=[];for(const P of h)for(const _ of P.data.bonds)g.push({a:P.slotBase+_.a,b:P.slotBase+_.b});const v=new Array(p.length).fill(-1);Lx(p,m,u,g,v);for(let P=0;P<p.length;P++)p[P].after=m[v[P]].pos;for(const P of p){const _=Math.hypot(P.after[0]-P.before[0],P.after[1]-P.before[1],P.after[2]-P.before[2]);P.arc=Math.min(.5,_*.14),P.zJit=(P.id%2*2-1)*Math.min(.3,_*.07)}const f=new Array(m.length).fill(-1);for(let P=0;P<v.length;P++)f[v[P]]=P;const d=[];for(const P of h)for(const _ of P.data.bonds){const b=f[P.slotBase+_.a],I=f[P.slotBase+_.b];(b<0||I<0)&&qr("noBalance"),d.push({a:b,b:I,order:_.order??1,thin:!!_.thin,ionic:!!_.ionic})}const x=new Map;for(const P of u)x.set(Ao(P.a,P.b),P);const y=[];for(const P of d){const _=x.get(Ao(P.a,P.b));_&&_.order===P.order&&_.thin===P.thin?(x.delete(Ao(P.a,P.b)),y.push({...P,kind:"kept"})):y.push({...P,kind:"new"})}for(const P of x.values())y.push({...P,kind:"broken"});const S=[],E=(P,_,b)=>{for(let I=0;I<b;I++){const O=P.filter(G=>G.term===I);if(!O.length)continue;const D=G=>O.reduce((F,X)=>F+X.origin[G],0)/O.length;S.push({side:_,txt:Rx(O[0].coef,O[0].formula),pos:[D(0),D(1)-O[0].rad-.55,D(2)]})}};E(c,"before",n.eq.left.length),E(h,"after",n.eq.right.length);let M=0;for(const P of[...a,...r])M=Math.max(M,Math.abs(P[0]),Math.abs(P[2]));const A=Ox[e]??Px,R=[0];for(const P of A)R.push(R[R.length-1]+P/100);return{type:e,atoms:p,bonds:y,labels:S,cut:R,extent:M+.8,hasMetal:e==="burning"&&n.eq.left.some(P=>Tx(P.formula))}}const po=n=>n<0?0:n>1?1:n,_h=n=>n*n*(3-2*n);function Dx(n,e){const t=n.cut,i=po(e),s=_h(po((i-t[3])/(t[4]-t[3]))),o=Math.sin(Math.PI*s),a=n.atoms.map(u=>({id:u.id,sym:u.sym,pos:[u.before[0]+(u.after[0]-u.before[0])*s,u.before[1]+(u.after[1]-u.before[1])*s+u.arc*o,u.before[2]+(u.after[2]-u.before[2])*s+u.zJit*o]})),r=n.bonds.map(u=>{const m={key:Ao(u.a,u.b),a:u.a,b:u.b,order:u.order,thin:u.thin,kind:u.kind,grow:1,stretch:1,pulse:0,fade:1,warm:0,flash:0};if(u.kind==="broken"){if(i>=t[3])m.fade=0;else if(i>=t[2]){const g=(i-t[2])/(t[3]-t[2]);m.stretch=1+.7*g,m.fade=1-g,m.warm=g,m.flash=g*g*g*g}else if(i>=t[1]){const g=(i-t[1])/(t[2]-t[1]);m.pulse=Math.sin(g*Math.PI*6)*.5+.5}}else if(u.kind==="new")if(i>=t[5])m.flash=1-(i-t[5])/(t[6]-t[5]);else if(i>=t[4]){const g=po((i-t[4])/(t[5]-t[4])*2.8);m.grow=_h(g),m.flash=g}else m.fade=0;return m});let l=0,c=0;n.type==="burning"&&(i>t[1]&&i<=t[3]?l=(i-t[1])/(t[3]-t[1]):i>t[3]&&i<=t[4]?l=1:i>t[4]&&i<=t[5]&&(l=1-(i-t[4])/(t[5]-t[4])),c=n.hasMetal?l*l:0);const h={before:i<=t[2]?1:i>=t[3]?0:1-(i-t[2])/(t[3]-t[2]),after:i<=t[4]?0:po((i-t[4])/(t[5]-t[4])),sym:i<=t[2]||i>=t[4]?1:0};let p=0;for(let u=0;u<6;u++)i>=t[u]&&(p=u);return{p:i,phase:p,atoms:a,bonds:r,flame:l,white:c,labelFade:h}}const Nx=new ke(14146790),Ux=new ke(9413312),Fx=new ke(16747586),Hx=5;let zn=null;const Td=()=>{zn&&(zn.remove(),zn=null),document.body.classList.remove("anim")},Bx=["animPhase0","animPhase1","animPhase2","animPhase3","animPhase4","animPhase5"],mo=(n,e)=>{const t=document.createElement("button");return t.className="animBtn",t.type="button",t.title=e,t.setAttribute("aria-label",e),t.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+n+"</svg>",t};function kx(n,e,t=!1){const i=Ix(n),s=new Cn,o=n.cls.type==="burning",a=new Wn(1,18,14),r=i.atoms.map(k=>{const Y=(k.big?Pn(k.sym)*1.15:Pn(k.sym))*.85,$=new $e(a,Xi.body(e(k.sym)));if($.scale.setScalar(Y),$.userData.sym=k.sym,s.add($),!k.noSym){const he=new as(vi(k.sym,"molSym"));he.position.set(0,Y+.28,0),$.add(he)}return{mesh:$,r:Y}}),l=[];for(const k of i.atoms)k.noSym||l.push(r[k.id].mesh);const c={before:[],after:[]};for(const k of i.labels){if(k.off!==void 0)continue;const Y=vi(k.txt,"rxLabel");Y.style.opacity=k.side==="before"?"1":"0";const $=new as(Y);$.position.set(k.pos[0],k.pos[1],k.pos[2]),s.add($),c[k.side].push(Y)}const h=(k,Y)=>{const $=Y<.005?"0":Y>.995?"1":String(Y.toFixed(2));for(const he of k)he.style.opacity=$},p=new Wo(1,1,1,10),u=i.bonds.map(k=>{const Y=k.thin?1:k.order??1,{rad:$,offs:he}=ad(k.thin,Y),ve=[];for(const Ne of he)ve.push({off:Ne,half:"a"}),k.kind!=="kept"&&ve.push({off:Ne,half:"b"});const be=k.ionic?4:1,ze=[];for(const Ne of ve)for(let N=0;N<be;N++){const lt=new $e(p,Xi.stick(k.thin).clone());lt.visible=!1,lt.userData.off=Ne.off,lt.userData.half=Ne.half,be>1&&(lt.userData.dash=N/be,lt.userData.dashN=be),s.add(lt),ze.push(lt)}return{b:k,full:k.kind==="kept",meshes:ze,baseRad:$,baseColor:k.thin?Ux:Nx}});Td();const m=document.getElementById("stage");document.body.classList.add("anim"),zn=document.createElement("div"),zn.className="animUI";const g=document.createElement("div");g.className="animPhase",zn.appendChild(g);const v=document.createElement("div");v.className="animBar";const f=mo('<path d="M7 5v14M17 5v14"/>',L("animPause")),d=mo('<path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/>',L("animRepeat")),x=mo('<path d="M11 19l-7-7 7-7M20 19l-7-7 7-7"/>',L("animStepBack")),y=mo('<path d="M13 5l7 7-7 7M4 5l7 7-7 7"/>',L("animStepFwd"));v.appendChild(x),v.appendChild(f),v.appendChild(y),v.appendChild(d);const S=document.createElement("input");S.className="animRange",S.type="range",S.min="0",S.max="1000",S.value="0",S.setAttribute("aria-label",L("animProgress"));const E=document.createElement("div");E.className="animTrack",E.appendChild(S);const M=document.createElement("div");M.className="animMarks";for(const k of i.cut){const Y=document.createElement("i");Y.style.left=k*100+"%",M.appendChild(Y)}E.appendChild(M),v.appendChild(E);const A=document.createElement("div");A.className="animSpeed";for(const k of[.5,1,2]){const Y=document.createElement("button");Y.type="button",Y.className="animChip"+(k===1?" on":""),Y.textContent="×"+k,Y.addEventListener("click",()=>{_=k;for(const $ of A.children)$.classList.toggle("on",$===Y)}),A.appendChild(Y)}v.appendChild(A),zn.appendChild(v),m.appendChild(zn);let R=0,P=!1,_=1,b=null,I=-1;const O=120,D=new Float32Array(O*3),G=new Jt;G.setAttribute("position",new Kt(D,3));const F=new jh({size:.17,color:16769709,transparent:!0,opacity:.95,blending:wo,depthWrite:!1,sizeAttenuation:!0}),X=new J0(G,F);X.frustumCulled=!1,X.visible=!1,G.setDrawRange(0,0),s.add(X);const V=[],ie=(k,Y,$)=>{if(t)for(let he=0;he<6&&V.length<O;he++){const ve=Math.random()*Math.PI*2,be=Math.acos(Math.random()*2-1),ze=1.6+Math.random()*2.6;V.push({x:k,y:Y,z:$,vx:Math.sin(be)*Math.cos(ve)*ze,vy:Math.cos(be)*ze*.8+.6,vz:Math.sin(be)*Math.sin(ve)*ze,life:.34+Math.random()*.22})}},re=k=>{if(!V.length){X.visible=!1,G.setDrawRange(0,0);return}for(let Y=V.length-1;Y>=0;Y--){const $=V[Y];if($.life-=k,$.life<=0){V.splice(Y,1);continue}$.vy-=5.5*k,$.x+=$.vx*k,$.y+=$.vy*k,$.z+=$.vz*k}if(!V.length){X.visible=!1,G.setDrawRange(0,0);return}for(let Y=0;Y<V.length;Y++){const $=V[Y];D[Y*3]=$.x,D[Y*3+1]=$.y,D[Y*3+2]=$.z}G.setDrawRange(0,V.length),G.attributes.position.needsUpdate=!0,F.size=.17*(.4+Math.min(1,V.length/30)),X.visible=!0},se=k=>{P=k,f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(k?'<path d="M9 5v14M15 5v14"/>':'<path d="M7 5l12 7-12 7z"/>')+"</svg>",f.title=L(k?"animPause":"animPlay"),f.setAttribute("aria-label",f.title)};se(!1);const Me=()=>{const k=Dx(i,R);for(const Y of k.atoms)r[Y.id].mesh.position.set(Y.pos[0],Y.pos[1],Y.pos[2]);for(let Y=0;Y<k.bonds.length;Y++){const $=k.bonds[Y],he=u[Y],ve=r[$.a].mesh.position,be=r[$.b].mesh.position;if(!($.fade>.02&&($.kind!=="new"||$.grow>.02))){for(const w of he.meshes)w.visible=!1;continue}const Ne=new U().subVectors(be,ve),N=Ne.length();if(N<.05){for(const w of he.meshes)w.visible=!1;continue}const lt=Ne.clone().normalize(),Ve=rd(lt),Ge=he.baseRad*(1-.45*($.stretch-1)/.7)*(1+.4*$.pulse),Ae=ve.clone().addScaledVector(lt,N*.5);let et=be,we=null;if(!he.full)if($.kind==="new")et=ve.clone().lerp(Ae,$.grow),we=be.clone().lerp(Ae,$.grow);else{const w=Math.min(1,Math.max(0,($.stretch-1)/.7));et=ve.clone().lerp(Ae,1-w),we=be.clone().lerp(Ae,1-w)}for(const w of he.meshes){const T=w.userData.half==="b",W=T?be:ve,Q=T?we:et,ne=new U().subVectors(Q,W);let J=W,ye=Q;if(w.userData.dash!==void 0){const We=.55/w.userData.dashN;J=W.clone().addScaledVector(ne,w.userData.dash),ye=W.clone().addScaledVector(ne,Math.min(1,w.userData.dash+We))}const le=new U().subVectors(ye,J),fe=le.length();if(fe<.03){w.visible=!1;continue}w.visible=!0,w.scale.set(Math.max(Ge,.004),fe,Math.max(Ge,.004)),w.position.copy(J).addScaledVector(le,.5).addScaledVector(Ve,w.userData.off),w.quaternion.setFromUnitVectors(Do,le.clone().normalize()),w.material.color.copy(he.baseColor).lerp(Fx,$.warm),w.material.opacity=$.fade,w.material.emissive.setHex(16754253),w.material.emissiveIntensity=$.flash}}h(c.before,k.labelFade.before),h(c.after,k.labelFade.after);for(const Y of l)Y.children.filter($=>$.isCSS2DObject).forEach($=>$.element.style.opacity=k.labelFade.sym<.005?"0":"1");if(g.textContent=L(Bx[k.phase]),k.phase!==I){if(k.phase===2){Ht.snap();for(const Y of k.bonds){if(Y.kind==="kept")continue;const $=r[Y.a].mesh.position,he=r[Y.b].mesh.position;ie(($.x+he.x)/2,($.y+he.y)/2,($.z+he.z)/2)}}else k.phase===4?Ht.grow():k.phase===5&&Ht.done();I=k.phase}t&&o&&k.phase>=3&&k.phase<=4?s.position.set(Math.sin(k.p*260)*.035,Math.cos(k.p*240)*.03,0):s.position.lengthSq()&&s.position.set(0,0,0),S.value=String(Math.round(k.p*1e3))};Me();const De=k=>{if(b===null){b=k;return}const Y=Math.min(k-b,.1);b=k,re(Y),P&&(R+=Y/Hx*_,R>=1&&(R=1,se(!1)),Me())};f.addEventListener("click",()=>{R>=1&&!P&&(R=0),se(!P),P&&Me()}),d.addEventListener("click",()=>{R=0,se(!0),Me()});const K=k=>{P=!1,se(!1);const Y=i.cut.filter(he=>k>0?he>R+1e-4:he<R-1e-4),$=k>0?Math.min(...Y):Math.max(...Y);Number.isFinite($)&&(R=$),Me()};return x.addEventListener("click",()=>K(-1)),y.addEventListener("click",()=>K(1)),S.addEventListener("input",()=>{P=!1,se(!1),R=Number(S.value)/1e3,Me()}),se(!0),{group:s,extent:i.extent,tick:De}}const Us=document.getElementById("stage"),ln=document.getElementById("infoPanel"),Yo=document.getElementById("infoSide"),Zr=document.getElementById("infoClose"),ls=document.getElementById("infoFab"),yi=document.getElementById("formulaInput"),zx=document.getElementById("formulaForm"),Ad=document.getElementById("showBtn"),ws=document.getElementById("rxBtn2"),Rs=document.getElementById("rxBtn"),Fo=document.getElementById("guideBtn"),Ml=document.getElementById("shotBtn"),$r=document.getElementById("settingsBtn"),bt=document.getElementById("dialog"),bl=document.getElementById("tabViz"),El=document.getElementById("tabTable"),ut=M_(Us),Cd=()=>window.innerWidth<=980,Ot={},Fs={};for(const n of jt)Fs[n.symbol]=n;const Tl=n=>Ot[n]??"#9aa5b8",Vx=n=>[1,3,5].map(e=>parseInt(n.slice(e,e+2),16)),Gx=n=>"#"+n.map(e=>Math.round(e).toString(16).padStart(2,"0")).join(""),Wx={H:"#f4f4f4",C:"#262626",N:"#2f6bff",O:"#e02020",F:"#16a34a",P:"#f97316",S:"#eab308",Cl:"#22c55e",Br:"#b45309",I:"#6d28d9",Si:"#b45309",Li:"#c084fc",Na:"#a855f7",K:"#8b5cf6",Mg:"#16a34a",Ca:"#06b6d4",Al:"#94a3b8",Zn:"#64748b",Fe:"#b45309",Cu:"#ea580c",Mn:"#be185d",Cr:"#7c3aed",Ba:"#059669",Ag:"#94a3b8",Pb:"#475569",Hg:"#94a3b8",Sn:"#64748b",Ni:"#16a34a",Se:"#c026d3",As:"#7c3aed"},Xx=["#e9edf1","#9aa3ad","#5b6672","#323a44"],wd=()=>localStorage.getItem("palette")||"cpk",qx=()=>{const n=wd(),e={};for(const t of jt)n==="pastel"?e[t.symbol]=Gx(Vx(t.color).map(i=>i+(255-i)*.52)):n==="mono"?e[t.symbol]=Xx[t.Z%4]:n==="contrast"?e[t.symbol]=Wx[t.symbol]??t.color:e[t.symbol]=t.color;return e},Rd=()=>{const n=qx();for(const e of Object.keys(Ot))delete Ot[e];Object.assign(Ot,n)};Rd();const Co=vi("","stageTitle");Us.appendChild(Co);const vh=document.getElementById("stageReadout"),cs=n=>{vh.innerHTML="";for(const e of n){const t=document.createElement("span");t.textContent=e,vh.appendChild(t)}},fi=(n,e)=>{Co.innerHTML="";const t=document.createElement("span");t.className="tf",t.textContent=n,Co.appendChild(t),Co.appendChild(document.createTextNode(e))},cn=()=>{if(Cd())return ls.classList.add("show");Yo.classList.add("open")},Pd=()=>{ls.classList.remove("show"),Yo.classList.remove("open")};Zr.addEventListener("click",Pd);ls.addEventListener("click",()=>{ls.classList.remove("show"),Yo.classList.add("open")});window.addEventListener("resize",()=>{Cd()?Yo.classList.remove("open"):ls.classList.remove("show")});let nt=null,Yr=0;const ps=n=>document.body.classList.toggle("viewing",n),Ji=()=>{Td(),ut.clear(),ut.onTick(null),cs([]),ps(!1)},jo=(n,e)=>{ut.fitTo(n,Math.max(3.2,e*1.3),700)},Ho=(n,e)=>{Ji();const t=D_(n);ut.add(t.group),ut.onTick(t.update),jo([0,.4,1],t.lastR*1.05),fi(n.symbol,e??L("titleAtom",{name:ui(n)})),cs([`Z ${n.Z}`,L("readElectrons",{n:n.Z}),L("readShells",{n:n.shells.length})]),nt={type:"atom",el:n},Wr(ln,n,Ot,{electrons:!0}),cn()},gn=(n,e=!0)=>{const t=(n??"").trim().replace(/^\d+(?=[A-Za-z(])/,"");if(!t){const c={verdict:"err",code:"empty"};Ji(),Ki(ln,c,{mr:0,fr:[],klass:"",name:"",steps:[],arOf:{}},t,Ot,pi,h=>gn(h)),nt={type:"formula",v:c,c:{mr:0,fr:[],klass:"",name:"",steps:[],arOf:{}},f:t},fi("",L("titleEnter")),e&&cn();return}const i=_n(t);if(i.verdict==="ok"&&localStorage.setItem("lastFormula",t),t!==(n??"").trim()&&(yi.value=t),i.verdict==="ok"&&!i.solution){const c=Object.keys(i.atoms)[0],h=i.atoms[c],p=Fs[c];if(i.kind==="atom"&&p){Ho(p,L("titleAtom",{name:ui(p)}));return}if(h>1){pi(i,t,!0);return}if(p){Ho(p,L("titleSimple",{f:t}));return}}if(i.verdict!=="ok"){Ji();const c={mr:0,fr:[],klass:"",name:"",steps:[],arOf:{}};Ki(ln,i,c,t,Ot,pi,h=>gn(h)),nt={type:"formula",v:i,c,f:t},fi(t,i.verdict==="err"?L("titleErr"):L("titleImpossible")),e&&cn();return}Ji();const s=bv(i);Ki(ln,i,s,t,Ot,null,c=>gn(c)),nt={type:"formula",v:i,c:s,f:t};const o=od(i.solution,t),a=hd(o,Tl);ut.add(a.group),ut.onTick(c=>{a.group.rotation.y=c*.12});let r=0,l=0;for(const c of o.atoms)r=Math.max(r,Math.hypot(c.pos[0],c.pos[1],c.pos[2]));for(const c in i.atoms)l+=i.atoms[c];jo([.55,.45,1],Math.max(2.2,r*1.05)),fi(t,s.name?s.name:""),cs([`Mr ${s.mr}`,L("readAtoms",{n:l})]),e&&cn()},Zx=n=>{const e={};let t=0,i=0;for(const o in n.atoms){const a=Fs[o];e[o]=(a==null?void 0:a.mass)??0,i+=n.atoms[o],t+=((a==null?void 0:a.mass)??0)*n.atoms[o]}t=Math.round(t*10)/10;const s=Object.keys(n.atoms).map(o=>({sym:o,pct:t?e[o]*n.atoms[o]/t*100:0}));return{mr:t,fr:s,klass:"",name:"",steps:[],arOf:e}},pi=(n,e,t=!1)=>{Ji();const i=iv(n.atoms),s=hd(i,Tl);ut.add(s.group),ut.onTick(l=>{s.group.rotation.y=l*.06});let o=0,a=0;for(const l of i.atoms)o=Math.max(o,Math.hypot(l.pos[0],l.pos[1],l.pos[2]));for(const l in n.atoms)a+=n.atoms[l];jo([.55,.45,1],Math.max(2.2,o*.9)),fi(e,L("titleFree"));const r=t?Zx(n):{mr:0,fr:[],klass:"",name:"",steps:[],arOf:{}};cs(r.mr?[`Mr ${r.mr}`,L("readAtoms",{n:a})]:[L("readAtoms",{n:a})]),nt={type:"free",v:n,c:r,f:e},t&&(Ki(ln,n,r,e,Ot,null,l=>gn(l)),cn())},xh=new s_,yh=new Oe,Od=(n,e)=>{var s;const t=Us.getBoundingClientRect();yh.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),xh.setFromCamera(yh,ut.camera);const i=xh.intersectObjects(ut.root.children,!0);for(const o of i){const a=(s=o.object.userData)==null?void 0:s.sym;if(a&&Fs[a])return a}return null},Ko=n=>{Ji();let e;try{e=kx(n,Tl,jr())}catch(t){console.error(t),fi(Uo(n),L("animBuildFail")),cs([L("animBuildFail"),t.code??""]);return}ut.add(e.group),ut.onTick(e.tick),Dd(),jo([.3,.4,1],Math.max(2.6,e.extent*1.05)),nt={type:"reaction",r:n},fi(Uo(n),"— "+L("rx"+n.cls.type[0].toUpperCase()+n.cls.type.slice(1))),cs([L("readType",{type:L("rx"+n.cls.type[0].toUpperCase()+n.cls.type.slice(1))}),n.ok?L("readBalOk"):L("readBalBad")]),Md(ln,n,Ot),cn()},Jo=()=>{if(nt){if(nt.type==="atom"){Ho(nt.el);return}if(nt.type==="reaction"){Ko(nt.r);return}if(nt.type==="free"){pi(nt.v,nt.f),Ki(ln,nt.v,nt.c,nt.f,Ot,pi,n=>gn(n)),cn();return}gn(nt.f,!1)}};Us.addEventListener("contextmenu",n=>{if(n.preventDefault(),!nt)return;if(ps(!1),nt.type==="atom"){Wr(ln,nt.el,Ot,{electrons:!0}),cn();return}const e=Od(n.clientX,n.clientY);if(e){Wr(ln,Fs[e],Ot),cn();return}if(nt.type==="reaction"){Md(ln,nt.r,Ot),cn();return}Ki(ln,nt.v,nt.c,nt.f,Ot,pi,t=>gn(t)),cn()});Us.addEventListener("pointerdown",n=>{n.button===0&&nt&&nt.type==="atom"&&ps(!0)});window.addEventListener("keydown",n=>{n.key==="Escape"&&ps(!1)});const Ld=()=>{document.title=L("metaTitle"),document.getElementById("brandTxt").textContent=L("brand"),document.getElementById("brandGrade").textContent=L("brandGrade"),yi.placeholder=L("inputPlaceholder"),yi.setAttribute("aria-label",L("inputAria")),ls.textContent=L("infoShow"),Ad.textContent=L("showBtn"),bl.textContent=L("tabViz"),El.textContent=L("tabTable"),Rs.setAttribute("title",L("rxBtnTitle")),Rs.setAttribute("aria-label",L("rxBtnTitle")),Rs.querySelector("span").textContent=L("rxBtnText"),ws.setAttribute("title",L("rxBtn2Title")),ws.setAttribute("aria-label",L("rxBtn2Title")),ws.querySelector("span").textContent=L("rxBtn2Text"),Fo.setAttribute("title",L("guideBtnTitle")),Fo.setAttribute("aria-label",L("guideBtnTitle")),$r.setAttribute("title",L("settingsTitle")),$r.setAttribute("aria-label",L("settingsAria")),document.getElementById("stageHint").textContent=L("stageHint"),Zr.setAttribute("title",L("infoClose")),Zr.setAttribute("aria-label",L("infoClose")),document.querySelector('meta[name="description"]').setAttribute("content",L("metaDesc"))},$x=document.getElementById("tableHost"),Id=()=>Uv($x,n=>{Al(!1),Ho(n)}),Al=n=>{document.body.classList.toggle("tableMode",n),El.classList.toggle("on",n),bl.classList.toggle("on",!n),localStorage.setItem("table",n?"on":"off"),n?(Id(),ut.pause()):(ut.resume(),ps(!1))};bl.addEventListener("click",()=>Al(!1));El.addEventListener("click",()=>Al(!0));const Cl=document.getElementById("rxPane");let mi=localStorage.getItem("rxMode")==="rx"?"rx":"eq";const wl=n=>{document.body.classList.toggle("noRx",!n),n&&ps(!1),Rs.classList.toggle("on",n&&mi==="eq"),ws.classList.toggle("on",n&&mi==="rx"),localStorage.setItem("rx",n?"open":"hidden"),localStorage.setItem("rxMode",mi)},Rl=document.getElementById("bottom"),Yx=()=>{Rl.classList.remove("sink"),wl(!1)},Dd=()=>{clearTimeout(Yr),Rl.classList.add("sink"),Yr=setTimeout(Yx,240)},Nd=n=>{if(document.body.classList.contains("tableMode"))return;if(clearTimeout(Yr),Rl.classList.remove("sink"),mi===n&&!document.body.classList.contains("noRx")){Dd();return}mi=n,Sl(Cl,Ko,n),wl(!0)};Rs.addEventListener("click",()=>Nd("eq"));ws.addEventListener("click",()=>Nd("rx"));Fo.addEventListener("click",()=>{bt.innerHTML="";const n=document.createElement("div");n.id="dialogBox",n.className="guideBox";const e=document.createElement("h2");e.textContent=L("tabGuide"),n.appendChild(e);const t=document.createElement("div");kv(t),n.appendChild(t);const i=document.createElement("button");i.id="dialogClose",i.type="button",i.textContent=L("sDone"),i.addEventListener("click",()=>bt.classList.remove("open")),n.appendChild(i),bt.appendChild(n),bt.classList.add("open")});document.addEventListener("keydown",n=>{const e=document.activeElement;n.key==="/"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)&&!e.isContentEditable&&(n.preventDefault(),yi.focus(),yi.select()),n.key==="Escape"&&(bt.classList.contains("open")?bt.classList.remove("open"):Pd())});Fv(yi,zx,Ad,n=>gn(n));Sl(Cl,Ko,mi);const jx=n=>{document.documentElement.classList.toggle("light",n),localStorage.setItem("theme",n?"light":"dark"),bt.querySelectorAll("[data-theme]").forEach(e=>e.classList.toggle("on",e.dataset.theme==="light"===n))},Ud=n=>{const e=n||"green";e==="green"?delete document.documentElement.dataset.accent:document.documentElement.dataset.accent=e,localStorage.setItem("accent",e),bt.querySelectorAll("[data-accentopt]").forEach(t=>t.classList.toggle("on",t.dataset.accentopt===e))},Fd=n=>{ut.setGridVisible(n),localStorage.setItem("grid",n?"on":"off");const e=document.getElementById("gridSwitch");e&&e.classList.toggle("on",n)},jr=()=>localStorage.getItem("fx")==="on",Kx=n=>localStorage.setItem("fx",n?"on":"off"),Kr=()=>localStorage.getItem("molView")==="old",Jx=n=>{localStorage.setItem("molView",n?"old":"new"),Hd(n),Jo()},Hd=n=>{rv(n),ut.setLegacyLook(n),document.body.classList.toggle("legacyLook",n)},Jr=()=>localStorage.getItem("lone")!=="off",Qx=n=>{localStorage.setItem("lone",n?"on":"off"),cd(n),Jo()},Bd=()=>{bt.innerHTML="";const n=document.createElement("div");n.id="dialogBox",n.className="settings";const e=[["green","#46b88c"],["blue","#4d9fd6"],["violet","#9a7fd4"],["amber","#d6a44d"],["teal","#3fb6b6"],["rose","#d97b9a"],["indigo","#7c8ce0"],["slate","#7d94a6"]];n.innerHTML=`
    <h2>${L("settingsTitle")}</h2>
    <div class="setSection">
      <div class="setLabel">${L("sLang")}</div>
      <div class="segGroup" id="langSeg">
        <button class="segBtn" type="button" data-lang="ru">Русский</button>
        <button class="segBtn" type="button" data-lang="en">English</button>
      </div>
    </div>
    <div class="setSection">
      <div class="setLabel">${L("sAccent")}</div>
      <div class="swRow" id="swRow">
        ${e.map(([l,c])=>`<button class="swatch" type="button" data-accentopt="${l}" style="background:${c}" title="${L("s"+l[0].toUpperCase()+l.slice(1))}"></button>`).join("")}
      </div>
    </div>
    <div class="setSection">
      <div class="setLabel">${L("sPal")}</div>
      <div class="segGroup" id="palSeg">
        <button class="segBtn" type="button" data-pal="cpk">${L("sPalCpk")}</button>
        <button class="segBtn" type="button" data-pal="pastel">${L("sPalPastel")}</button>
        <button class="segBtn" type="button" data-pal="mono">${L("sPalMono")}</button>
        <button class="segBtn" type="button" data-pal="contrast">${L("sPalContrast")}</button>
      </div>
    </div>
    <div class="setSection">
      <div class="setLabel">${L("sTheme")}</div>
      <div class="segGroup" id="themeSeg">
        <button class="segBtn" type="button" data-theme="dark">${L("sDark")}</button>
        <button class="segBtn" type="button" data-theme="light">${L("sLight")}</button>
      </div>
    </div>
    <div class="setSection setRow">
      <div class="setLabel">${L("sGrid")}</div>
      <button class="switch" id="gridSwitch" type="button" aria-label="${L("sGrid")}"></button>
    </div>
    <div class="setSection setRow">
      <div class="setLabel">${L("sSfx")}<span class="setHint">${L("sSfxHint")}</span></div>
      <button class="switch" id="sfxSwitch" type="button" aria-label="${L("sSfx")}"></button>
    </div>
    <div class="setSection setRow">
      <div class="setLabel">${L("sFx")}<span class="setHint">${L("sFxHint")}</span></div>
      <button class="switch" id="fxSwitch" type="button" aria-label="${L("sFx")}"></button>
    </div>
    <div class="setSection setRow">
      <div class="setLabel">${L("sMolOld")}<span class="setHint">${L("sMolOldHint")}</span></div>
      <button class="switch" id="molSwitch" type="button" aria-label="${L("sMolOld")}"></button>
    </div>
    <div class="setSection setRow">
      <div class="setLabel">${L("sLone")}<span class="setHint">${L("sLoneHint")}</span></div>
      <button class="switch" id="loneSwitch" type="button" aria-label="${L("sLone")}"></button>
    </div>
    <div class="aboutMini">${L("sAbout")}</div>
    <button id="dialogClose" type="button">${L("sDone")}</button>
  `,bt.appendChild(n);const t=document.documentElement.classList.contains("light");n.querySelectorAll("[data-theme]").forEach(l=>l.classList.toggle("on",l.dataset.theme==="light"===t)),n.querySelectorAll("[data-lang]").forEach(l=>l.classList.toggle("on",l.dataset.lang===fs()));const i=document.documentElement.dataset.accent||"green";n.querySelectorAll("[data-accentopt]").forEach(l=>l.classList.toggle("on",l.dataset.accentopt===i)),n.querySelectorAll("[data-pal]").forEach(l=>l.classList.toggle("on",l.dataset.pal===wd())),document.getElementById("gridSwitch").classList.toggle("on",ut.getGridVisible()),document.getElementById("sfxSwitch").classList.toggle("on",Vr()),document.getElementById("langSeg").addEventListener("click",l=>{const c=l.target.closest("[data-lang]");c&&b_(c.dataset.lang)}),document.getElementById("themeSeg").addEventListener("click",l=>{const c=l.target.closest("[data-theme]");c&&jx(c.dataset.theme==="light")}),document.getElementById("palSeg").addEventListener("click",l=>{const c=l.target.closest("[data-pal]");c&&(localStorage.setItem("palette",c.dataset.pal),Rd(),n.querySelectorAll("[data-pal]").forEach(h=>h.classList.toggle("on",h===c)),Jo())}),document.getElementById("swRow").addEventListener("click",l=>{const c=l.target.closest("[data-accentopt]");c&&Ud(c.dataset.accentopt)}),document.getElementById("gridSwitch").addEventListener("click",()=>Fd(!ut.getGridVisible()));const s=document.getElementById("sfxSwitch");s.addEventListener("click",()=>{const l=!Vr();Ht.tick(!0),Iv(l),s.classList.toggle("on",l)});const o=document.getElementById("fxSwitch");o.classList.toggle("on",jr()),o.addEventListener("click",()=>{const l=!jr();Ht.tick(!0),Kx(l),o.classList.toggle("on",l)});const a=document.getElementById("molSwitch");a.classList.toggle("on",Kr()),a.addEventListener("click",()=>{const l=!Kr();Ht.tick(!0),Jx(l),a.classList.toggle("on",l)});const r=document.getElementById("loneSwitch");r.classList.toggle("on",Jr()),r.addEventListener("click",()=>{const l=!Jr();Ht.tick(!0),Qx(l),r.classList.toggle("on",l)}),document.getElementById("dialogClose").addEventListener("click",()=>bt.classList.remove("open")),n.addEventListener("click",l=>{l.target.closest("[data-lang],[data-theme],[data-accentopt],#gridSwitch")&&Ht.tick()}),bt.classList.add("open")};Ml.setAttribute("title",L("shotBtnTitle"));Ml.setAttribute("aria-label",L("shotBtnTitle"));Ml.addEventListener("click",()=>ut.snapshot());$r.addEventListener("click",Bd);bt.addEventListener("click",n=>{n.target===bt&&bt.classList.remove("open")});localStorage.getItem("theme")==="light"&&document.documentElement.classList.add("light");Ud(localStorage.getItem("accent"));Fd(localStorage.getItem("grid")!=="off");Hd(Kr());cd(Jr());wl(localStorage.getItem("rx")==="open");document.documentElement.lang=fs();E_(()=>{if(Ld(),Jo(),Sl(Cl,Ko,mi),document.body.classList.contains("tableMode")&&Id(),bt.classList.contains("open")){const n=bt.querySelector(".guideBox");bt.classList.remove("open"),n?Fo.click():Bd()}});const kd=localStorage.getItem("lastFormula")??"H2O";yi.value=kd;Ld();gn(kd,!1);window.__chem={app:ut,showFormula:gn,pickAt:Od,showFree:pi};

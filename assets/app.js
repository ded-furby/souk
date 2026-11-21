var xc="186";var xp=0,Cu=1,vp=2;var mo=1,yp=2,ia=3,Un=0,vi=1,nn=2,Kt=0,na=1,go=2,Ru=3,Pu=4,vc=5;var sn=100,_p=101,Mp=102,bp=103,Sp=104,nr=200,wp=201,Tp=202,Ap=203,Iu=204,Du=205,xo=206,Ep=207,vo=208,Cp=209,Rp=210,Pp=211,Ip=212,Dp=213,Lp=214,zl=0,Vl=1,Gl=2,Nr=3,Hl=4,Wl=5,Xl=6,ql=7,Lu=0,Np=1,Up=2,bn=0,yo=1,_o=2,Mo=3,bo=4,So=5,wo=6,To=7,mu="attached",Fp="detached",Nu=300,Es=301,sr=302,yc=303,_c=304,Ao=306,Zt=1e3,Oi=1001,Ur=1002,zt=1003,Mc=1004;var rr=1005;var Pt=1006,sa=1007;var rn=1008;var Si=1009,Uu=1010,Fu=1011,ra=1012,bc=1013,Sn=1014,wi=1015,Ut=1016,Sc=1017,wc=1018,Cs=1020,Ou=35902,ku=35899,Bu=1021,zu=1022,Ii=1023,Pn=1026,Fn=1027,Tc=1028,Ac=1029,Rs=1030,Ec=1031;var Cc=1033,Eo=33776,Co=33777,Ro=33778,Po=33779,Rc=35840,Pc=35841,Ic=35842,Dc=35843,Lc=36196,Nc=37492,Uc=37496,Fc=37488,Oc=37489,Io=37490,kc=37491,Bc=37808,zc=37809,Vc=37810,Gc=37811,Hc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,jc=37817,Zc=37818,Kc=37819,$c=37820,Jc=37821,Qc=36492,eh=36494,th=36495,ih=36283,nh=36284,Do=36285,sh=36286,Lo=2200,No=2201,Op=2202,Xs=2300,qs=2301,Ol=2302,gu=2303,Gs=2400,Hs=2401,Ua=2402,rh=2500,kp=2501,Vu=0,Uo=1,aa=2,Bp=3200;var Fo=0,zp=1,wn="",xt="srgb",xi="srgb-linear",Fa="linear",vt="srgb";var kl=7680;var Vp=519,Gp=512,Hp=513,Wp=514,ah=515,Xp=516,qp=517,oh=518,Yp=519,Gu=35044;var Hu="300 es",mn=2e3,Fr=2001;function k0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function B0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jp(){let n=Or("canvas");return n.style.display="block",n}var Af={},kr=null;function Oa(...n){let e="THREE."+n.shift();kr?kr("log",e,...n):console.log(e,...n)}function Zp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Zp(n);let e="THREE."+n.shift();if(kr)kr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=Zp(n);let e="THREE."+n.shift();if(kr)kr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ws(...n){let e=n.join(" ");e in Af||(Af[e]=!0,Ne(...n))}function Kp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var $p={[zl]:Vl,[Gl]:Xl,[Hl]:ql,[Nr]:Wl,[Vl]:zl,[Xl]:Gl,[ql]:Hl,[Wl]:Nr},gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ef=1234567,Ia=Math.PI/180,Ys=180/Math.PI;function en(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[n&255]+_i[n>>8&255]+_i[n>>16&255]+_i[n>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Wu(n,e){return(n%e+e)%e}function z0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function V0(n,e,t){return n!==e?(t-n)/(e-n):0}function Da(n,e,t){return(1-t)*n+t*e}function G0(n,e,t,i){return Da(n,e,1-Math.exp(-t*i))}function H0(n,e=1){return e-Math.abs(Wu(n,e*2)-e)}function W0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function X0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function q0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Y0(n,e){return n+Math.random()*(e-n)}function j0(n){return n*(.5-Math.random())}function Z0(n){n!==void 0&&(Ef=n);let e=Ef+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(n){return n*Ia}function $0(n){return n*Ys}function J0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Q0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function eg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*p,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*p,o*c);break;case"ZYZ":n.set(l*p,l*f,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ps={DEG2RAD:Ia,RAD2DEG:Ys,generateUUID:en,clamp:rt,euclideanModulo:Wu,mapLinear:z0,inverseLerp:V0,lerp:Da,damp:G0,pingpong:H0,smoothstep:W0,smootherstep:X0,randInt:q0,randFloat:Y0,randFloatSpread:j0,seededRandom:Z0,degToRad:K0,radToDeg:$0,isPowerOfTwo:J0,ceilPowerOfTwo:Q0,floorPowerOfTwo:eg,setQuaternionFromProperEuler:tg,normalize:St,denormalize:pn},te=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),b=Math.sin(_);m=Math.sin(m*_)/b,o=Math.sin(o*_)/b,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gh.copy(this).projectOnVector(e),this.sub(Gh)}reflect(e){return this.sub(Gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gh=new P,Cf=new pt,tt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],v=s[0],g=s[3],m=s[6],_=s[1],b=s[4],x=s[7],M=s[2],S=s[5],E=s[8];return r[0]=a*v+o*_+l*M,r[3]=a*g+o*b+l*S,r[6]=a*m+o*x+l*E,r[1]=c*v+h*_+u*M,r[4]=c*g+h*b+u*S,r[7]=c*m+h*x+u*E,r[2]=d*v+f*_+p*M,r[5]=d*g+f*b+p*S,r[8]=d*m+f*x+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hh.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hh.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hh=new tt,Rf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){let n={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xi]:{primaries:e,whitePoint:i,transfer:Fa,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}var st=ig();function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yr,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=Or("canvas")),yr.width=e.width,yr.height=e.height;let s=yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ng=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=en(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wh(s[a].image)):r.push(Wh(s[a]))}else r=Wh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var sg=0,Xh=new P,si=class n extends gn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Oi,s=Oi,r=Pt,a=rn,o=Ii,l=Si,c=n.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=en(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zt:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zt:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Nu;si.DEFAULT_ANISOTROPY=1;var yt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,M=(m+1)/2,S=(h+d)/4,E=(u+v)/4,y=(p+g)/4;return b>x&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=E/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=E/r,s=y/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends gn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new si(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ka=class extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends si{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ve=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,p,v,g)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rg,e,ag)}lookAt(e,t,i){let s=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),ms.crossVectors(i,Hi),ms.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),ms.crossVectors(i,Hi)),ms.normalize(),hl.crossVectors(Hi,ms),s[0]=ms.x,s[4]=hl.x,s[8]=Hi.x,s[1]=ms.y,s[5]=hl.y,s[9]=Hi.y,s[2]=ms.z,s[6]=hl.z,s[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],_=i[3],b=i[7],x=i[11],M=i[15],S=s[0],E=s[4],y=s[8],w=s[12],A=s[1],I=s[5],C=s[9],L=s[13],D=s[2],U=s[6],O=s[10],G=s[14],J=s[3],F=s[7],k=s[11],H=s[15];return r[0]=a*S+o*A+l*D+c*J,r[4]=a*E+o*I+l*U+c*F,r[8]=a*y+o*C+l*O+c*k,r[12]=a*w+o*L+l*G+c*H,r[1]=h*S+u*A+d*D+f*J,r[5]=h*E+u*I+d*U+f*F,r[9]=h*y+u*C+d*O+f*k,r[13]=h*w+u*L+d*G+f*H,r[2]=p*S+v*A+g*D+m*J,r[6]=p*E+v*I+g*U+m*F,r[10]=p*y+v*C+g*O+m*k,r[14]=p*w+v*L+g*G+m*H,r[3]=_*S+b*A+x*D+M*J,r[7]=_*E+b*I+x*U+M*F,r[11]=_*y+b*C+x*O+M*k,r[15]=_*w+b*L+x*G+M*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-c*d,b=o*f-c*u,x=o*d-l*u,M=a*f-c*h,S=a*d-l*h,E=a*u-o*h;return t*(v*_-g*b+m*x)-i*(p*_-g*M+m*S)+s*(p*b-v*M+m*E)-r*(p*x-v*S+g*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*o-i*a,b=t*l-s*a,x=t*c-r*a,M=i*l-s*o,S=i*c-r*o,E=s*c-r*l,y=h*v-u*p,w=h*g-d*p,A=h*m-f*p,I=u*g-d*v,C=u*m-f*v,L=d*m-f*g,D=_*L-b*C+x*I+M*A-S*w+E*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=(o*L-l*C+c*I)*U,e[1]=(s*C-i*L-r*I)*U,e[2]=(v*E-g*S+m*M)*U,e[3]=(d*S-u*E-f*M)*U,e[4]=(l*A-a*L-c*w)*U,e[5]=(t*L-s*A+r*w)*U,e[6]=(g*x-p*E-m*b)*U,e[7]=(h*E-d*x+f*b)*U,e[8]=(a*C-o*A+c*y)*U,e[9]=(i*A-t*C-r*y)*U,e[10]=(p*S-v*x+m*_)*U,e[11]=(u*x-h*S-f*_)*U,e[12]=(o*w-a*I-l*y)*U,e[13]=(t*I-i*w+s*y)*U,e[14]=(v*b-p*M-g*_)*U,e[15]=(h*M-u*b+d*_)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,g=a*u,m=o*u,_=l*c,b=l*h,x=l*u,M=i.x,S=i.y,E=i.z;return s[0]=(1-(v+m))*M,s[1]=(f+x)*M,s[2]=(p-b)*M,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+m))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(p+b)*E,s[9]=(g-_)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=_r.set(s[0],s[1],s[2]).length(),o=_r.set(s[4],s[5],s[6]).length(),l=_r.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);let c=1/a,h=1/o,u=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=mn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===mn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=mn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===mn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Fr)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_r=new P,un=new Ve,rg=new P(0,0,0),ag=new P(1,1,1),ms=new P,hl=new P,Hi=new P,If=new Ve,Df=new pt,ki=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},og=0,Lf=new P,Mr=new pt,jn=new Ve,ul=new P,ba=new P,lg=new P,cg=new pt,Nf=new P(1,0,0),Uf=new P(0,1,0),Ff=new P(0,0,1),Of={type:"added"},hg={type:"removed"},br={type:"childadded",child:null},qh={type:"childremoved",child:null},Vt=class n extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new ki,i=new pt,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new tt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Ff,e)}translateOnAxis(e,t){return Lf.copy(e).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ba,ul,this.up):jn.lookAt(ul,ba,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Mr.setFromRotationMatrix(jn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Of),br.child=e,this.dispatchEvent(br),br.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Of),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new P(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ug={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Wu(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yh(a,r,e+1/3),this.g=Yh(a,r,e),this.b=Yh(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=Jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return st.workingToColorSpace(Mi.copy(this),e),Math.round(rt(Mi.r*255,0,255))*65536+Math.round(rt(Mi.g*255,0,255))*256+Math.round(rt(Mi.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Mi.copy(this),t);let i=Mi.r,s=Mi.g,r=Mi.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Mi.copy(this),t),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=xt){st.workingToColorSpace(Mi.copy(this),e);let t=Mi.r,i=Mi.g,s=Mi.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(dl);let i=Da(gs.h,dl.h,t),s=Da(gs.s,dl.s,t),r=Da(gs.l,dl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new fe;fe.NAMES=Jp;var Ba=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},za=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new P,Zn=new P,jh=new P,Kn=new P,Sr=new P,wr=new P,kf=new P,Zh=new P,Kh=new P,$h=new P,Jh=new yt,Qh=new yt,eu=new yt,Ms=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),Zn.subVectors(i,t),jh.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Zn),l=dn.dot(jh),c=Zn.dot(Zn),h=Zn.dot(jh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Jh.setScalar(0),Qh.setScalar(0),eu.setScalar(0),Jh.fromBufferAttribute(e,t),Qh.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jh,r.x),a.addScaledVector(Qh,r.y),a.addScaledVector(eu,r.z),a}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),Zn.subVectors(e,t),dn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),dn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Sr.subVectors(s,i),wr.subVectors(r,i),Zh.subVectors(e,i);let l=Sr.dot(Zh),c=wr.dot(Zh);if(l<=0&&c<=0)return t.copy(i);Kh.subVectors(e,s);let h=Sr.dot(Kh),u=wr.dot(Kh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Sr,a);$h.subVectors(e,r);let f=Sr.dot($h),p=wr.dot($h);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(wr,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return kf.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(kf,o);let m=1/(g+v+d);return a=v*m,o=d*m,t.copy(i).addScaledVector(Sr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),pl.subVectors(this.max,Sa),Tr.subVectors(e.a,Sa),Ar.subVectors(e.b,Sa),Er.subVectors(e.c,Sa),xs.subVectors(Ar,Tr),vs.subVectors(Er,Ar),ks.subVectors(Tr,Er);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-ks.z,ks.y,xs.z,0,-xs.x,vs.z,0,-vs.x,ks.z,0,-ks.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-ks.y,ks.x,0];return!tu(t,Tr,Ar,Er,pl)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,Tr,Ar,Er,pl))?!1:(ml.crossVectors(xs,vs),t=[ml.x,ml.y,ml.z],tu(t,Tr,Ar,Er,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new P,new P,new P,new P,new P,new P,new P,new P],fn=new P,fl=new wt,Tr=new P,Ar=new P,Er=new P,xs=new P,vs=new P,ks=new P,Sa=new P,pl=new P,ml=new P,Bs=new P;function tu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bs.fromArray(n,r);let o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var es=dg();function dg(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function fg(n){Math.abs(n)>65504&&Ne("DataUtils.toHalfFloat(): Value out of range."),n=rt(n,-65504,65504),es.floatView[0]=n;let e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}function pg(n){let e=n>>10;return es.uint32View[0]=es.mantissaTable[es.offsetTable[e]+(n&1023)]+es.exponentTable[e],es.floatView[0]}var bs=class{static toHalfFloat(e){return fg(e)}static fromHalfFloat(e){return pg(e)}},ti=new P,gl=new te,mg=0,$e=class extends gn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=class extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ga=class extends $e{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ye=class extends $e{constructor(e,t,i){super(new Float32Array(e),t,i)}},gg=new wt,wa=new P,iu=new P,Bi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(iu)),this.expandByPoint(wa.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xg=0,Qi=new Ve,nu=new Vt,Cr=new P,Wi=new wt,Ta=new wt,di=new P,at=class n extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k0(e)?Ga:Va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qi.makeRotationFromQuaternion(e),this.applyMatrix4(Qi),this}rotateX(e){return Qi.makeRotationX(e),this.applyMatrix4(Qi),this}rotateY(e){return Qi.makeRotationY(e),this.applyMatrix4(Qi),this}rotateZ(e){return Qi.makeRotationZ(e),this.applyMatrix4(Qi),this}translate(e,t,i){return Qi.makeTranslation(e,t,i),this.applyMatrix4(Qi),this}scale(e,t,i){return Qi.makeScale(e,t,i),this.applyMatrix4(Qi),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wi.setFromBufferAttribute(r),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Wi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(di.addVectors(Wi.min,Ta.min),Wi.expandByPoint(di),di.addVectors(Wi.max,Ta.max),Wi.expandByPoint(di)):(Wi.expandByPoint(Ta.min),Wi.expandByPoint(Ta.max))}Wi.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)di.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(di));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)di.fromBufferAttribute(o,c),l&&(Cr.fromBufferAttribute(e,c),di.add(Cr)),s=Math.max(s,i.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $e(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,u=new P,d=new te,f=new te,p=new te,v=new P,g=new P;function m(y,w,A){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,A),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[y].add(v),o[w].add(v),o[A].add(v),l[y].add(g),l[w].add(g),l[A].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let A=_[y],I=A.start,C=A.count;for(let L=I,D=I+C;L<D;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new P,x=new P,M=new P,S=new P;function E(y){M.fromBufferAttribute(s,y),S.copy(M);let w=o[y];b.copy(w),b.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(S,w);let I=x.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,I)}for(let y=0,w=_.length;y<w;++y){let A=_[y],I=A.start,C=A.count;for(let L=I,D=I+C;L<D;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ci=new P,Hr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix4(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyNormalMatrix(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.transformDirection(e),this.setXYZ(t,Ci.x,Ci.y,Ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},su=new P,vg=new P,yg=new tt,Xi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=su.subVectors(i,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||yg.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_g=0,Ri=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=en(),this.name="",this.type="Material",this.blending=na,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Du,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kl,this.stencilZFail=kl,this.stencilZPass=kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Jn=new P,ru=new P,xl=new P,vl=new P,xn=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ru.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),vl.copy(this.origin).sub(ru);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xl),o=vl.dot(this.direction),l=-vl.dot(xl),c=vl.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ru).addScaledVector(xl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=i.x-a.x,_=i.y-a.y,b=i.z-a.z,x=Math.abs(l),M=Math.abs(c),S=Math.abs(h),E,y,w,A,I,C,L,D,U,O,G,J;if(x>=M&&x>=S?(w=l,C=u,U=p,J=m,l>=0?(E=c,y=h,A=d,I=f,L=v,D=g,O=_,G=b):(E=h,y=c,A=f,I=d,L=g,D=v,O=b,G=_)):M>=S?(w=c,C=d,U=v,J=_,c>=0?(E=h,y=l,A=f,I=u,L=g,D=p,O=b,G=m):(E=l,y=h,A=u,I=f,L=p,D=g,O=m,G=b)):(w=h,C=f,U=g,J=b,h>=0?(E=l,y=c,A=u,I=d,L=p,D=v,O=m,G=_):(E=c,y=l,A=d,I=u,L=v,D=p,O=_,G=m)),w===0)return null;let F=E/w,k=y/w,H=1/w,oe=A-F*C,ce=I-k*C,Qe=L-F*U,Je=D-k*U,et=O-F*J,K=G-k*J,ee=et*Je-K*Qe,me=oe*K-ce*et,ke=Qe*ce-Je*oe;if(s){if(ee<0||me<0||ke<0)return null}else if((ee<0||me<0||ke<0)&&(ee>0||me>0||ke>0))return null;let Ae=ee+me+ke;if(Ae===0)return null;let We=H*(ee*C+me*U+ke*J);return(Ae>0?We<0:We>0)?null:this.at(We/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bf=new Ve,zs=new xn,yl=new Bi,zf=new P,_l=new P,Ml=new P,bl=new P,au=new P,Sl=new P,Vf=new P,wl=new P,Ue=class extends Vt{constructor(e=new at,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(au.fromBufferAttribute(u,e),a?Sl.addScaledVector(au,h):Sl.addScaledVector(au.sub(t),h))}t.add(Sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(yl.containsPoint(zs.origin)===!1&&(zs.intersectSphere(yl,zf)===null||zs.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Bf.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,M=b;x<M;x+=3){let S=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);s=Tl(this,m,e,i,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=o.getX(g),b=o.getX(g+1),x=o.getX(g+2);s=Tl(this,a,e,i,c,h,u,_,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,M=b;x<M;x+=3){let S=x,E=x+1,y=x+2;s=Tl(this,m,e,i,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=g,b=g+1,x=g+2;s=Tl(this,a,e,i,c,h,u,_,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Mg(n,e,t,i,s,r,a,o){let l;if(e.side===vi?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Un,o),l===null)return null;wl.copy(o),wl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:n}}function Tl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,_l),n.getVertexPosition(l,Ml),n.getVertexPosition(c,bl);let h=Mg(n,e,t,i,_l,Ml,bl,Vf);if(h){let u=new P;Ms.getBarycoord(Vf,_l,Ml,bl,u),s&&(h.uv=Ms.getInterpolatedAttribute(s,o,l,c,u,new te)),r&&(h.uv1=Ms.getInterpolatedAttribute(r,o,l,c,u,new te)),a&&(h.normal=Ms.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ms.getNormal(_l,Ml,bl,d.normal),h.face=d,h.barycoord=u}return h}var Aa=new yt,Gf=new yt,Hf=new yt,bg=new yt,Wf=new Ve,Al=new P,ou=new Bi,Xf=new Ve,lu=new xn,Ha=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),e.ray.intersectsSphere(ou)!==!1&&(Xf.copy(s).invert(),lu.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Gf.fromBufferAttribute(s.attributes.skinIndex,e),Hf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Aa.copy(t),t.set(0,0,0,0)):(Aa.set(...t,1),t.set(0,0,0)),Aa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Hf.getComponent(r);if(a!==0){let o=Gf.getComponent(r);Wf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(bg.copy(Aa).applyMatrix4(Wf),a)}}return t.isVector4&&(t.w=Aa.w),t.applyMatrix4(this.bindMatrixInverse)}},Wr=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},tn=class extends si{constructor(e=null,t=1,i=1,s,r,a,o,l,c=zt,h=zt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qf=new Ve,Sg=new Ve,Wa=class n{constructor(e=[],t=[]){this.uuid=en(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Sg;qf.multiplyMatrices(o,t[r]),qf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new tn(t,e,e,Ii,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ne("Skeleton: No bone found with UUID:",r),a=new Wr),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},vn=class extends $e{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Ve,Yf=new Ve,El=[],jf=new wt,wg=new Ve,Ea=new Ue,Ca=new Bi,yn=class extends Ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),jf.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(jf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),Ca.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),Yf.multiplyMatrices(i,Rr),Ea.matrixWorld=Yf,Ea.raycast(e,El);for(let a=0,o=El.length;a<o;a++){let l=El[a];l.instanceId=r,l.object=this,t.push(l)}El.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tn(new Float32Array(s*this.count),s,this.count,Tc,wi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Bi,Tg=new te(.5,.5),Cl=new P,Xr=class{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],_=r[12],b=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,m-p,M-_).normalize(),s[1].setComponents(c+a,f+h,m+p,M+_).normalize(),s[2].setComponents(c+o,f+u,m+v,M+b).normalize(),s[3].setComponents(c-o,f-u,m-v,M-b).normalize(),i)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,m-g,M-x).normalize();else if(s[4].setComponents(c-l,f-d,m-g,M-x).normalize(),t===mn)s[5].setComponents(c+l,f+d,m+g,M+x).normalize();else if(t===Fr)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Tg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Cl.x=s.normal.x>0?e.max.x:e.min.x,Cl.y=s.normal.y>0?e.max.y:e.min.y,Cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ss=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new P,$l=new P,Zf=new Ve,Ra=new xn,Rl=new Bi,cu=new P,Kf=new P,is=class extends Vt{constructor(e=new at,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Kl.fromBufferAttribute(t,s-1),$l.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Kl.distanceTo($l);e.setAttribute("lineDistance",new Ye(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;Zf.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){let m=h.getX(v),_=h.getX(v+1),b=Pl(this,e,Ra,l,m,_,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(p-1),g=h.getX(f),m=Pl(this,e,Ra,l,v,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){let m=Pl(this,e,Ra,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Pl(this,e,Ra,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Kl.fromBufferAttribute(o,s),$l.fromBufferAttribute(o,r),t.distanceSqToSegment(Kl,$l,cu,Kf)>i)return;cu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(cu);if(!(c<e.near||c>e.far))return{distance:c,point:Kf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var $f=new P,Jf=new P,Xa=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$f.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$f.distanceTo(Jf);e.setAttribute("lineDistance",new Ye(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qa=class extends is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qr=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new Ve,xu=new xn,Il=new Bi,Dl=new P,qi=class extends Vt{constructor(e=new at,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,e.ray.intersectsSphere(Il)===!1)return;Qf.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);Dl.fromBufferAttribute(u,g),ep(Dl,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)Dl.fromBufferAttribute(u,p),ep(Dl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ep(n,e,t,i,s,r,a){let o=xu.distanceSqToPoint(n);if(o<t){let l=new P;xu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ya=class extends si{constructor(e=[],t=Es,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends si{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var In=class extends si{constructor(e,t,i=Sn,s,r,a,o=zt,l=zt,c,h=Pn,u=1){if(h!==Pn&&h!==Fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jl=class extends In{constructor(e,t=Sn,i=Es,s,r,a=zt,o=zt,l,c=Pn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ja=class extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fi=class n extends at{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(v,g,m,_,b,x,M,S,E,y,w){let A=x/E,I=M/y,C=x/2,L=M/2,D=S/2,U=E+1,O=y+1,G=0,J=0,F=new P;for(let k=0;k<O;k++){let H=k*I-L;for(let oe=0;oe<U;oe++){let ce=oe*A-C;F[v]=ce*_,F[g]=H*b,F[m]=D,c.push(F.x,F.y,F.z),F[v]=0,F[g]=0,F[m]=S>0?1:-1,h.push(F.x,F.y,F.z),u.push(oe/E),u.push(1-k/y),G+=1}}for(let k=0;k<y;k++)for(let H=0;H<E;H++){let oe=d+H+U*k,ce=d+H+U*(k+1),Qe=d+(H+1)+U*(k+1),Je=d+(H+1)+U*k;l.push(oe,ce,Je),l.push(ce,Qe,Je),J+=6}o.addGroup(f,J,w),f+=J,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Yr=class n extends at{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=i*2+r,v=s+1,g=new P,m=new P;for(let _=0;_<=p;_++){let b=0,x=0,M=0,S=0;if(_<=i){let w=_/i,A=w*Math.PI/2;x=-h-e*Math.cos(A),M=e*Math.sin(A),S=-e*Math.cos(A),b=w*u}else if(_<=i+r){let w=(_-i)/r;x=-h+w*t,M=e,S=0,b=u+w*d}else{let w=(_-i-r)/i,A=w*Math.PI/2;x=h+e*Math.sin(A),M=e*Math.cos(A),S=e*Math.sin(A),b=u+d+w*u}let E=Math.max(0,Math.min(1,b/f)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let w=0;w<=s;w++){let A=w/s,I=A*Math.PI*2,C=Math.sin(I),L=Math.cos(I);m.x=-M*L,m.y=x,m.z=M*C,o.push(m.x,m.y,m.z),g.set(-M*L,S,M*C),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+y,E)}if(_>0){let w=(_-1)*v;for(let A=0;A<s;A++){let I=w+A,C=w+A+1,L=_*v+A,D=_*v+A+1;a.push(I,C,L),a.push(C,D,L)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},jr=class n extends at{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class n extends at{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=i/2,m=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function _(){let x=new P,M=new P,S=0,E=(t-e)/i;for(let y=0;y<=r;y++){let w=[],A=y/r,I=A*(t-e)+e;for(let C=0;C<=s;C++){let L=C/s,D=L*l+o,U=Math.sin(D),O=Math.cos(D);M.x=I*U,M.y=-A*i+g,M.z=I*O,u.push(M.x,M.y,M.z),x.set(U,E,O).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-A),w.push(p++)}v.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let A=v[w][y],I=v[w+1][y],C=v[w+1][y+1],L=v[w][y+1];(e>0||w!==0)&&(h.push(A,I,L),S+=3),(t>0||w!==r-1)&&(h.push(I,C,L),S+=3)}c.addGroup(m,S,0),m+=S}function b(x){let M=p,S=new te,E=new P,y=0,w=x===!0?e:t,A=x===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),p++;let I=p;for(let C=0;C<=s;C++){let D=C/s*l+o,U=Math.cos(D),O=Math.sin(D);E.x=w*O,E.y=g*A,E.z=w*U,u.push(E.x,E.y,E.z),d.push(0,A,0),S.x=U*.5+.5,S.y=O*.5*A+.5,f.push(S.x,S.y),p++}for(let C=0;C<s;C++){let L=M+C,D=I+C;x===!0?h.push(D,D+1,L):h.push(D+1,D,L),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},js=class n extends Xt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ql=class n extends at{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new P,x=new P,M=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],x),f(t[S+2],M),l(b,x,M,_)}function l(_,b,x,M){let S=M+1,E=[];for(let y=0;y<=S;y++){E[y]=[];let w=_.clone().lerp(x,y/S),A=b.clone().lerp(x,y/S),I=S-y;for(let C=0;C<=I;C++)C===0&&y===S?E[y][C]=w:E[y][C]=w.clone().lerp(A,C/I)}for(let y=0;y<S;y++)for(let w=0;w<2*(S-y)-1;w++){let A=Math.floor(w/2);w%2===0?(d(E[y][A+1]),d(E[y+1][A]),d(E[y][A])):(d(E[y][A+1]),d(E[y+1][A+1]),d(E[y+1][A]))}}function c(_){let b=new P;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(_),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let _=new P;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let x=g(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;a.push(x,1-M)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],x=a[_+2],M=a[_+4],S=Math.max(b,x,M),E=Math.min(b,x,M);S>.9&&E<.1&&(b<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),M<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let x=_*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function p(){let _=new P,b=new P,x=new P,M=new P,S=new te,E=new te,y=new te;for(let w=0,A=0;w<r.length;w+=9,A+=6){_.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),S.set(a[A+0],a[A+1]),E.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),M.copy(_).add(b).add(x).divideScalar(3);let I=g(M);v(S,A+0,_,I),v(E,A+2,b,I),v(y,A+4,x,I)}}function v(_,b,x,M){M<0&&_.x===1&&(a[b]=_.x-1),x.x===0&&x.z===0&&(a[b]=M/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new te:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new Ve;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends Yi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ec=class extends Zr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var tp=new P,ip=new P,hu=new Xu,uu=new Xu,du=new Xu,ji=class extends Yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ip.subVectors(s[0],s[1]).add(s[0]),c=ip);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(tp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),hu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),uu.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),du.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),uu.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),du.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(hu.calc(l),uu.calc(l),du.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function np(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Ag(n,e){let t=1-n;return t*t*e}function Eg(n,e){return 2*(1-n)*n*e}function Cg(n,e){return n*n*e}function La(n,e,t,i){return Ag(n,e)+Eg(n,t)+Cg(n,i)}function Rg(n,e){let t=1-n;return t*t*t*e}function Pg(n,e){let t=1-n;return 3*t*t*n*e}function Ig(n,e){return 3*(1-n)*n*n*e}function Dg(n,e){return n*n*n*e}function Na(n,e,t,i,s){return Rg(n,e)+Pg(n,t)+Ig(n,i)+Dg(n,s)}var Za=class extends Yi{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends Yi{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,s.x,r.x,a.x,o.x),Na(e,s.y,r.y,a.y,o.y),Na(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends Yi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Yi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Yi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Yi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(La(e,s.x,r.x,a.x),La(e,s.y,r.y,a.y),La(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(np(o,l.x,c.x,h.x,u.x),np(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},nc=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:ji,CubicBezierCurve:Za,CubicBezierCurve3:tc,EllipseCurve:Zr,LineCurve:Ka,LineCurve3:ic,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Ja,SplineCurve:Qa}),sc=class extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new nc[s.type]().fromJSON(s))}return this}},ws=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ka(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new $a(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Za(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Zr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_n=class extends ws{constructor(e){super(e),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ws().fromJSON(s))}return this}};function Lg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Qp(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=kg(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return eo(r,a,t,o,l,c,0),a}function Qp(n,e,t,i,s){let r;if(s===Zg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=sp(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=sp(a/i|0,n[a],n[a+1],r);return r&&Kr(r,r.next)&&(io(r),r=r.next),r}function Zs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Kr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(io(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Hg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ug(n,i,s,r):Ng(n)){e.push(l.i,n.i,c.i),io(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Fg(Zs(n),e),eo(n,e,t,i,s,r,2)):a===2&&Og(n,e,t,i,s,r):eo(Zs(n),e,t,i,s,r,1);break}}}function Ng(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Pa(s,o,r,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ug(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),v=Math.max(o,l,c),g=Math.max(h,u,d),m=vu(f,p,e,t,i),_=vu(v,g,e,t,i),b=n.prevZ,x=n.nextZ;for(;b&&b.z>=m&&x&&x.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Pa(o,h,l,u,c,d,b.x,b.y)&&Wt(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Pa(o,h,l,u,c,d,x.x,x.y)&&Wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Pa(o,h,l,u,c,d,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&Pa(o,h,l,u,c,d,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Kr(i,s)&&tm(i,t,t.next,s)&&to(i,s)&&to(s,i)&&(e.push(i.i,t.i,s.i),io(t),io(t.next),t=n=s),t=t.next}while(t!==n);return Zs(t)}function Og(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qg(a,o)){let l=im(a,o);a=Zs(a,a.next),l=Zs(l,l.next),eo(a,e,t,i,s,r,0),eo(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function kg(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Qp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Xg(c))}s.sort(Bg);for(let r=0;r<s.length;r++)t=zg(s[r],t);return t}function Bg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function zg(n,e){let t=Vg(n,e);if(!t)return e;let i=im(t,n);return Zs(i,i.next),Zs(t,t.next)}function Vg(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Kr(n,t))return t;do{if(Kr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&em(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);to(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Gg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Gg(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function Hg(n,e,t,i){let s=n;do s.z===0&&(s.z=vu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wg(s)}function Wg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function vu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function em(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Pa(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&em(n,e,t,i,s,r,a,o)}function qg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yg(n,e)&&(to(n,e)&&to(e,n)&&jg(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||Kr(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Kr(n,e){return n.x===e.x&&n.y===e.y}function tm(n,e,t,i){let s=Nl(Wt(n,e,t)),r=Nl(Wt(n,e,i)),a=Nl(Wt(t,i,n)),o=Nl(Wt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ll(n,t,e)||r===0&&Ll(n,i,e)||a===0&&Ll(t,n,i)||o===0&&Ll(t,e,i))}function Ll(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Nl(n){return n>0?1:n<0?-1:0}function Yg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&tm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function to(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function jg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function im(n,e){let t=yu(n.i,n.x,n.y),i=yu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function sp(n,e,t,i){let s=yu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var _u=class{static triangulate(e,t,i=2){return Lg(e,t,i)}},Cn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];rp(e),ap(i,e);let a=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ap(i,t[l]);let o=_u.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function rp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ap(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ts=class n extends at{constructor(e=new _n([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Kg,b,x=!1,M,S,E,y;if(m){b=m.getSpacedPoints(h),x=!0,d=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,ne),S=new P,E=new P,y=new P}d||(g=0,f=0,p=0,v=0);let w=o.extractPoints(c),A=w.shape,I=w.holes;if(!Cn.isClockWise(A)){A=A.reverse();for(let ne=0,le=I.length;ne<le;ne++){let he=I[ne];Cn.isClockWise(he)&&(I[ne]=he.reverse())}}function L(ne){let he=10000000000000001e-36,ue=ne[0];for(let pe=1;pe<=ne.length;pe++){let He=pe%ne.length,Be=ne[He],Xe=Be.x-ue.x,Ze=Be.y-ue.y,B=Xe*Xe+Ze*Ze,ft=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ue.x),Math.abs(ue.y)),nt=he*ft*ft;if(B<=nt){ne.splice(He,1),pe--;continue}ue=Be}}L(A),I.forEach(L);let D=I.length,U=A;for(let ne=0;ne<D;ne++){let le=I[ne];A=A.concat(le)}function O(ne,le,he){return le||qe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(le,he)}let G=A.length;function J(ne,le,he){let ue,pe,He,Be=ne.x-le.x,Xe=ne.y-le.y,Ze=he.x-ne.x,B=he.y-ne.y,ft=Be*Be+Xe*Xe,nt=Be*B-Xe*Ze;if(Math.abs(nt)>Number.EPSILON){let N=Math.sqrt(ft),T=Math.sqrt(Ze*Ze+B*B),W=le.x-Xe/N,q=le.y+Be/N,$=he.x-B/T,de=he.y+Ze/T,ge=(($-W)*B-(de-q)*Ze)/(Be*B-Xe*Ze);ue=W+Be*ge-ne.x,pe=q+Xe*ge-ne.y;let Q=ue*ue+pe*pe;if(Q<=2)return new te(ue,pe);He=Math.sqrt(Q/2)}else{let N=!1;Be>Number.EPSILON?Ze>Number.EPSILON&&(N=!0):Be<-Number.EPSILON?Ze<-Number.EPSILON&&(N=!0):Math.sign(Xe)===Math.sign(B)&&(N=!0),N?(ue=-Xe,pe=Be,He=Math.sqrt(ft)):(ue=Be,pe=Xe,He=Math.sqrt(ft/2))}return new te(ue/He,pe/He)}let F=[];for(let ne=0,le=U.length,he=le-1,ue=ne+1;ne<le;ne++,he++,ue++)he===le&&(he=0),ue===le&&(ue=0),F[ne]=J(U[ne],U[he],U[ue]);let k=[],H,oe=F.concat();for(let ne=0,le=D;ne<le;ne++){let he=I[ne];H=[];for(let ue=0,pe=he.length,He=pe-1,Be=ue+1;ue<pe;ue++,He++,Be++)He===pe&&(He=0),Be===pe&&(Be=0),H[ue]=J(he[ue],he[He],he[Be]);k.push(H),oe=oe.concat(H)}let ce;if(g===0)ce=Cn.triangulateShape(U,I);else{let ne=[],le=[];for(let he=0;he<g;he++){let ue=he/g,pe=f*Math.cos(ue*Math.PI/2),He=p*Math.sin(ue*Math.PI/2)+v;for(let Be=0,Xe=U.length;Be<Xe;Be++){let Ze=O(U[Be],F[Be],He);me(Ze.x,Ze.y,-pe),ue===0&&ne.push(Ze)}for(let Be=0,Xe=D;Be<Xe;Be++){let Ze=I[Be];H=k[Be];let B=[];for(let ft=0,nt=Ze.length;ft<nt;ft++){let N=O(Ze[ft],H[ft],He);me(N.x,N.y,-pe),ue===0&&B.push(N)}ue===0&&le.push(B)}}ce=Cn.triangulateShape(ne,le)}let Qe=ce.length,Je=p+v;for(let ne=0;ne<G;ne++){let le=d?O(A[ne],oe[ne],Je):A[ne];x?(E.copy(M.normals[0]).multiplyScalar(le.x),S.copy(M.binormals[0]).multiplyScalar(le.y),y.copy(b[0]).add(E).add(S),me(y.x,y.y,y.z)):me(le.x,le.y,0)}for(let ne=1;ne<=h;ne++)for(let le=0;le<G;le++){let he=d?O(A[le],oe[le],Je):A[le];x?(E.copy(M.normals[ne]).multiplyScalar(he.x),S.copy(M.binormals[ne]).multiplyScalar(he.y),y.copy(b[ne]).add(E).add(S),me(y.x,y.y,y.z)):me(he.x,he.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){let le=ne/g,he=f*Math.cos(le*Math.PI/2),ue=p*Math.sin(le*Math.PI/2)+v;for(let pe=0,He=U.length;pe<He;pe++){let Be=O(U[pe],F[pe],ue);me(Be.x,Be.y,u+he)}for(let pe=0,He=I.length;pe<He;pe++){let Be=I[pe];H=k[pe];for(let Xe=0,Ze=Be.length;Xe<Ze;Xe++){let B=O(Be[Xe],H[Xe],ue);x?me(B.x,B.y+b[h-1].y,b[h-1].x+he):me(B.x,B.y,u+he)}}}et(),K();function et(){let ne=s.length/3;if(d){let le=0,he=G*le;for(let ue=0;ue<Qe;ue++){let pe=ce[ue];ke(pe[2]+he,pe[1]+he,pe[0]+he)}le=h+g*2,he=G*le;for(let ue=0;ue<Qe;ue++){let pe=ce[ue];ke(pe[0]+he,pe[1]+he,pe[2]+he)}}else{for(let le=0;le<Qe;le++){let he=ce[le];ke(he[2],he[1],he[0])}for(let le=0;le<Qe;le++){let he=ce[le];ke(he[0]+G*h,he[1]+G*h,he[2]+G*h)}}i.addGroup(ne,s.length/3-ne,0)}function K(){let ne=s.length/3,le=0;ee(U,le),le+=U.length;for(let he=0,ue=I.length;he<ue;he++){let pe=I[he];ee(pe,le),le+=pe.length}i.addGroup(ne,s.length/3-ne,1)}function ee(ne,le){let he=ne.length;for(;--he>=0;){let ue=he,pe=he-1;pe<0&&(pe=ne.length-1);for(let He=0,Be=h+g*2;He<Be;He++){let Xe=G*He,Ze=G*(He+1),B=le+ue+Xe,ft=le+pe+Xe,nt=le+pe+Ze,N=le+ue+Ze;Ae(B,ft,nt,N)}}}function me(ne,le,he){l.push(ne),l.push(le),l.push(he)}function ke(ne,le,he){We(ne),We(le),We(he);let ue=s.length/3,pe=_.generateTopUV(i,s,ue-3,ue-2,ue-1);mt(pe[0]),mt(pe[1]),mt(pe[2])}function Ae(ne,le,he,ue){We(ne),We(le),We(ue),We(le),We(he),We(ue);let pe=s.length/3,He=_.generateSideWallUV(i,s,pe-6,pe-3,pe-2,pe-1);mt(He[0]),mt(He[1]),mt(He[3]),mt(He[1]),mt(He[2]),mt(He[3])}function We(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function mt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return $g(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nc[s.type]().fromJSON(s)),new n(i,e.options)}},Kg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new te(r,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-u),new te(d,1-p),new te(v,1-m)]:[new te(o,1-l),new te(h,1-u),new te(f,1-p),new te(g,1-m)]}};function $g(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var no=class n extends Ql{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$r=class n extends at{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new te,f=new P,p=new P,v=new P,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){let b=i+_*h*s,x=Math.sin(b),M=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*M,a.push(u.x,u.y,u.z),d.x=_/t,d.y=S/(e.length-1),o.push(d.x,d.y);let E=l[3*S+0]*x,y=l[3*S+1],w=l[3*S+0]*M;c.push(E,y,w)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let x=b+_*e.length,M=x,S=x+e.length,E=x+e.length+1,y=x+1;r.push(M,S,y),r.push(E,y,S)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Gt=class n extends at{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let b=0;b<c;b++){let x=b*u-r;p.push(x,-_,0),v.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let b=_+c*m,x=_+c*(m+1),M=_+1+c*(m+1),S=_+1+c*m;f.push(b,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ks=class n extends at{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,p=new te;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){let m=r+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<s;v++){let g=v*(i+1);for(let m=0;m<i;m++){let _=m+g,b=_,x=_+i+1,M=_+i+2,S=_+1;o.push(b,x,S),o.push(x,M,S)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},so=class n extends at{constructor(e=new _n([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Cn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let _=p[g];Cn.isClockWise(_)===!0&&(p[g]=_.reverse())}let v=Cn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){let _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){let _=v[g],b=_[0]+u,x=_[1]+u,M=_[2]+u;i.push(b,x,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Jg(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Jg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var qt=class n extends at{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let _=[],b=m/i,x=a+b*o,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),E=0;m===0&&a===0?E=.5/t:m===i&&l===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let w=y/t,A=s+w*r;u.x=-S*Math.cos(A),u.y=M,u.z=S*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(w+E,1-b),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let b=h[m][_+1],x=h[m][_],M=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&f.push(b,x,S),(m!==i-1||l<Math.PI)&&f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zi=class n extends at{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let v=0;v<=i;v++){let g=a+v/i*o;for(let m=0;m<=s;m++){let _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=s;g++){let m=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,b=(s+1)*(v-1)+g,x=(s+1)*v+g;l.push(m,_,x),l.push(_,b,x)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var $s=class n extends at{constructor(e=new Ja(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new te,h=new P,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),_(),m()}function g(b){h=e.getPointAt(b/t,h);let x=a.normals[b],M=a.binormals[b];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,y=Math.sin(E),w=-Math.cos(E);l.x=w*x.x+y*M.x,l.y=w*x.y+y*M.y,l.z=w*x.z+y*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){let M=(s+1)*(b-1)+(x-1),S=(s+1)*b+(x-1),E=(s+1)*b+x,y=(s+1)*(b-1)+x;p.push(M,S,y),p.push(S,E,y)}}function _(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new nc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(op(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(op(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Ti(n){let e={};for(let t=0;t<n.length;t++){let i=ar(n[t]);for(let s in i)e[s]=i[s]}return e}function op(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Di={clone:ar,merge:Ti},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jr=class extends dt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yt=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bi=class extends Yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends Ri{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var rc=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Bl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function ix(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function lp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function nx(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Dn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends Dn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gs,endingEnd:Gs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,o=2*t-i;break;case Ua:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,l=2*i-t;break;case Ua:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+_*a[c+M]+b*a[l+M]+x*a[u+M];return r}},ao=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},lc=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cc=class extends Dn{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let v=a[c+p],g=a[l+p],m=f*d+p*2,_=u[m],b=u[m+1],x=e*d+p*2,M=h[x],S=h[x+1],E=rx(i,t,_,M,s);r[p]=nm(E,v,b,S,g)}return r}};function nm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function sx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function rx(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=nm(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=sx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var zi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Bl(e.settings)&&(i.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break;case gu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Bl(this.settings)&&(cp(this.settings.inTangents,e),cp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){qe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&B0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=qs;var ns=class extends zi{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Xs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}};oo.prototype.ValueTypeName="color";var ss=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}};ss.prototype.ValueTypeName="number";var hc=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)pt.slerpFlat(r,0,a,c-o,a,c,l);return r}},rs=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends zi{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Xs;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}};As.prototype.ValueTypeName="vector";var Js=class{constructor(e="",t=-1,i=[],s=rh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=en(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(ox(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(zi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=ix(l);l=lp(l,1,h),c=lp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ss(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ax(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return oo;case"quaternion":return rs;case"bool":case"boolean":return ns;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ox(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ax(n.type);if(n.times===void 0){let i=[],s=[];nx(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Bl(n.settings)&&(t.settings={inTangents:_s(n.settings.inTangents,Float32Array),outTangents:_s(n.settings.outTangents,Float32Array)}),t}var Rn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(hp(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!hp(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function hp(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var uc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sm=new uc,Mn=class{constructor(e){this.manager=e!==void 0?e:sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},Mu=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends Mn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Rn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:i,onError:s});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Qn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,g=new ReadableStream({start(m){_();function _(){u.read().then(({done:b,value:x})=>{if(b)m.close();else{v+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let S=0,E=h.length;S<E;S++){let y=h[S];y.onProgress&&y.onProgress(M)}m.enqueue(x),_()}},b=>{m.error(b)})}}});return new Response(g)}else throw new Mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Rn.add(`file:${e}`,c);let h=Qn[e];delete Qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=new WeakMap,dc=class extends Mn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Rn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Pr.get(a);u===void 0&&(u=[],Pr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Or("img");function l(){h(),t&&t(this);let u=Pr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Pr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Rn.remove(`image:${e}`);let d=Pr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var lo=class extends Mn{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new tn,o=new Qs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):qe(h);return}r._applyTexData(a,c),t&&t(a,c)},i,s),a}createDataTexture(e){let t=new tn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Oi,e.wrapT=t.wrapT!==void 0?t.wrapT:Oi,e.magFilter=t.magFilter!==void 0?t.magFilter:Pt,e.minFilter=t.minFilter!==void 0?t.minFilter:Pt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=rn),t.mipmapCount===1&&(e.minFilter=Pt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Ln=class extends Mn{constructor(e){super(e)}load(e,t,i,s){let r=new si,a=new dc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},er=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},co=class extends er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fu=new Ve,up=new P,dp=new P,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ul=new P,Fl=new pt,En=new P,ho=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ul,Fl,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new P,fp=new te,pp=new te,ii=class extends ho{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,fp,pp),t.subVectors(pp,fp)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bu=class extends Qr{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},uo=class extends er{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Su=class extends Qr{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}},tr=class extends er{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Nn=class extends ho{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends Qr{constructor(){super(new Nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pu=new WeakMap,fo=class extends Mn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Rn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{pu.has(a)===!0?(s&&s(pu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Rn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),pu.set(l,c),Rn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Rn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=-90,Dr=1,fc=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ii(Ir,Dr,e,t);s.layers=this.layers,this.add(s);let r=new ii(Ir,Dr,e,t);r.layers=this.layers,this.add(r);let a=new ii(Ir,Dr,e,t);a.layers=this.layers,this.add(a);let o=new ii(Ir,Dr,e,t);o.layers=this.layers,this.add(o);let l=new ii(Ir,Dr,e,t);l.layers=this.layers,this.add(l);let c=new ii(Ir,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},pc=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lx(){this._document.hidden===!1&&this.reset()}var mc=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){pt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;pt.multiplyQuaternionsFlat(e,a,e,t,e,i),pt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Yu="\\[\\]\\.:\\/",cx=new RegExp("["+Yu+"]","g"),ju="[^"+Yu+"]",hx="[^"+Yu.replace("\\.","")+"]",ux=/((?:WC+[\/:])*)/.source.replace("WC",ju),dx=/(WCOD+)?/.source.replace("WCOD",hx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),mx=new RegExp("^"+ux+dx+fx+px+"$"),gx=["material","materials","bones","map"],Tu=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cx,"")}static parseTrackName(e){let t=mx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Tu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gc=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Gs,endingEnd:Gs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=No,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case rh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===Op;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===Lo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Hs,s.endingEnd=Hs):(e?s.endingStart=this.zeroSlopeAtStart?Hs:Gs:s.endingStart=Ua,t?s.endingEnd=this.zeroSlopeAtEnd?Hs:Gs:s.endingEnd=Ua)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},xx=new Float32Array(1),ea=class extends gn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new mc(Et.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new ao(new Float32Array(2),new Float32Array(2),1,xx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Js.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=rh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new gc(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?Js.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var mp=new Ve,ta=class{constructor(e,t,i=0,s=1/0){this.ray=new xn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(gp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,i,t);return i.sort(gp),i}};function gp(n,e){return n.distance-e.distance}function Au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Au(r[a],e,t,!0)}}var Eu=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Zu(n,e,t,i){let s=vx(i);switch(t){case Bu:return n*e;case Tc:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case Rs:return n*e*2/s.components*s.byteLength;case Ec:return n*e*2/s.components*s.byteLength;case zu:return n*e*3/s.components*s.byteLength;case Ii:return n*e*4/s.components*s.byteLength;case Cc:return n*e*4/s.components*s.byteLength;case Eo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Nc:case Fc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Io:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qc:case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ih:case nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Do:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vx(n){switch(n){case Si:case Uu:return{byteLength:1,components:1};case ra:case Fu:case Ut:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case Sn:case bc:case wi:return{byteLength:4,components:1};case Ou:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);function Am(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yx(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
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
#endif`,Nx=`#ifdef USE_BUMPMAP
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yv=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pv=`#if defined( USE_POINTS_UV )
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
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
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
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
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
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Ey=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cy=`#define DISTANCE
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
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ky=`#define MATCAP
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
}`,By=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
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
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qy=`#define TOON
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
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jy=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Ky=`#include <common>
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
}`,$y=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:_x,alphahash_pars_fragment:Mx,alphamap_fragment:bx,alphamap_pars_fragment:Sx,alphatest_fragment:wx,alphatest_pars_fragment:Tx,aomap_fragment:Ax,aomap_pars_fragment:Ex,batching_pars_vertex:Cx,batching_vertex:Rx,begin_vertex:Px,beginnormal_vertex:Ix,bsdfs:Dx,iridescence_fragment:Lx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Ux,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:kx,color_fragment:Bx,color_pars_fragment:zx,color_pars_vertex:Vx,color_vertex:Gx,common:Hx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:Xx,displacementmap_pars_vertex:qx,displacementmap_vertex:Yx,emissivemap_fragment:jx,emissivemap_pars_fragment:Zx,colorspace_fragment:Kx,colorspace_pars_fragment:$x,envmap_fragment:Jx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:dv,envmap_vertex:iv,fog_vertex:nv,fog_pars_vertex:sv,fog_fragment:rv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:hv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:gv,lights_physical_fragment:xv,lights_physical_pars_fragment:vv,lights_fragment_begin:yv,lights_fragment_maps:_v,lights_fragment_end:Mv,lightprobes_pars_fragment:bv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Av,map_fragment:Ev,map_pars_fragment:Cv,map_particle_fragment:Rv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Lv,morphcolor_vertex:Nv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Ov,normal_fragment_begin:kv,normal_fragment_maps:Bv,normal_pars_fragment:zv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:jv,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:$v,dithering_fragment:Jv,dithering_pars_fragment:Qv,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ny,shadowmap_vertex:sy,shadowmask_pars_fragment:ry,skinbase_vertex:ay,skinning_pars_vertex:oy,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:dy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:xy,uv_vertex:vy,worldpos_vertex:yy,background_vert:_y,background_frag:My,backgroundCube_vert:by,backgroundCube_frag:Sy,cube_vert:wy,cube_frag:Ty,depth_vert:Ay,depth_frag:Ey,distance_vert:Cy,distance_frag:Ry,equirect_vert:Py,equirect_frag:Iy,linedashed_vert:Dy,linedashed_frag:Ly,meshbasic_vert:Ny,meshbasic_frag:Uy,meshlambert_vert:Fy,meshlambert_frag:Oy,meshmatcap_vert:ky,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:Vy,meshphong_vert:Gy,meshphong_frag:Hy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:jy,points_frag:Zy,shadow_vert:Ky,shadow_frag:$y,sprite_vert:Jy,sprite_frag:Qy},be={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},kn={basic:{uniforms:Ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Ti([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Ti([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Ti([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new fe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Ti([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Ti([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Ti([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Ti([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Ti([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Ti([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Ti([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Ti([be.lights,be.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};kn.physical={uniforms:Ti([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var lh={r:0,b:0,g:0},e_=new Ve,Em=new tt;Em.set(-1,0,0,0,1,0,0,0,1);function t_(n,e,t,i,s,r){let a=new fe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let x=_.backgroundBlurriness>0;b=e.get(b,x)}return b}function p(_){let b=!1,x=f(_);x===null?g(a,o):x&&x.isColor&&(g(x,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===Ao)?(c===void 0&&(c=new Ue(new fi(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:ar(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Em),c.material.toneMapped=st.getTransfer(x.colorSpace)!==vt,(h!==x||u!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ue(new Gt(2,2),new dt({name:"BackgroundMaterial",uniforms:ar(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,b){_.getRGB(lh,qu(n)),t.buffers.color.setClear(lh.r,lh.g,lh.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:v,dispose:m}}function i_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(I,C,L,D,U){let O=!1,G=u(I,D,L,C);r!==G&&(r=G,c(r.object)),O=f(I,D,L,U),O&&p(I,D,L,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(I,C,L,D),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function u(I,C,L,D){let U=D.wireframe===!0,O=i[C.id];O===void 0&&(O={},i[C.id]=O);let G=I.isInstancedMesh===!0?I.id:0,J=O[G];J===void 0&&(J={},O[G]=J);let F=J[L.id];F===void 0&&(F={},J[L.id]=F);let k=F[U];return k===void 0&&(k=d(l()),F[U]=k),k}function d(I){let C=[],L=[],D=[];for(let U=0;U<t;U++)C[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,C,L,D){let U=r.attributes,O=C.attributes,G=0,J=L.getAttributes();for(let F in J)if(J[F].location>=0){let H=U[F],oe=O[F];if(oe===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),H===void 0||H.attribute!==oe||oe&&H.data!==oe.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function p(I,C,L,D){let U={},O=C.attributes,G=0,J=L.getAttributes();for(let F in J)if(J[F].location>=0){let H=O[F];H===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(H=I.instanceColor));let oe={};oe.attribute=H,H&&H.data&&(oe.data=H.data),U[F]=oe,G++}r.attributes=U,r.attributesNum=G,r.index=D}function v(){let I=r.newAttributes;for(let C=0,L=I.length;C<L;C++)I[C]=0}function g(I){m(I,0)}function m(I,C){let L=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;L[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),U[I]!==C&&(n.vertexAttribDivisor(I,C),U[I]=C)}function _(){let I=r.newAttributes,C=r.enabledAttributes;for(let L=0,D=C.length;L<D;L++)C[L]!==I[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function b(I,C,L,D,U,O,G){G===!0?n.vertexAttribIPointer(I,C,L,U,O):n.vertexAttribPointer(I,C,L,D,U,O)}function x(I,C,L,D){v();let U=D.attributes,O=L.getAttributes(),G=C.defaultAttributeValues;for(let J in O){let F=O[J];if(F.location>=0){let k=U[J];if(k===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let H=k.normalized,oe=k.itemSize,ce=e.get(k);if(ce===void 0)continue;let Qe=ce.buffer,Je=ce.type,et=ce.bytesPerElement,K=Je===n.INT||Je===n.UNSIGNED_INT||k.gpuType===bc;if(k.isInterleavedBufferAttribute){let ee=k.data,me=ee.stride,ke=k.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<F.locationSize;Ae++)m(F.location+Ae,ee.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<F.locationSize;Ae++)g(F.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ae=0;Ae<F.locationSize;Ae++)b(F.location+Ae,oe/F.locationSize,Je,H,me*et,(ke+oe/F.locationSize*Ae)*et,K)}else{if(k.isInstancedBufferAttribute){for(let ee=0;ee<F.locationSize;ee++)m(F.location+ee,k.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ee=0;ee<F.locationSize;ee++)g(F.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ee=0;ee<F.locationSize;ee++)b(F.location+ee,oe/F.locationSize,Je,H,oe*et,oe/F.locationSize*ee*et,K)}}else if(G!==void 0){let H=G[J];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(F.location,H);break;case 3:n.vertexAttrib3fv(F.location,H);break;case 4:n.vertexAttrib4fv(F.location,H);break;default:n.vertexAttrib1fv(F.location,H)}}}}_()}function M(){w();for(let I in i){let C=i[I];for(let L in C){let D=C[L];for(let U in D){let O=D[U];for(let G in O)h(O[G].object),delete O[G];delete D[U]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let C=i[I.id];for(let L in C){let D=C[L];for(let U in D){let O=D[U];for(let G in O)h(O[G].object),delete O[G];delete D[U]}}delete i[I.id]}function E(I){for(let C in i){let L=i[C];for(let D in L){let U=L[D];if(U[I.id]===void 0)continue;let O=U[I.id];for(let G in O)h(O[G].object),delete O[G];delete U[I.id]}}}function y(I){for(let C in i){let L=i[C],D=I.isInstancedMesh===!0?I.id:0,U=L[D];if(U!==void 0){for(let O in U){let G=U[O];for(let J in G)h(G[J].object),delete G[J];delete U[O]}delete L[D],Object.keys(L).length===0&&delete i[C]}}}function w(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function n_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function s_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ii&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===Ut&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&E!==wi&&!y&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:x,maxSamples:M,samples:S}}function r_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,b=_*4,x=m.clippingState||null;l.value=x,x=h(p,d,b,f);for(let M=0;M!==b;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var la=4,a_=6,o_=20,l_=256,Oo=new Nn,rm=new fe,Ku=null,$u=0,Ju=0,Qu=!1,c_=new P,or=new P,ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=c_}=r;Ku=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,$u,Ju),this._renderer.xr.enabled=Qu,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ut,format:Ii,colorSpace:xi,depthBuffer:!1},s=am(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=h_(r)),this._blurMaterial=d_(r,e,t),this._ggxMaterial=u_(r,e,t)}return s}_compileMaterial(e){let t=new Ue(new at,e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,s,r){let l=new ii(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rm),u.toneMapping=bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new fi,new Nt({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(rm),m=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;oa(s,x*M,b>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Es||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Oo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-la?i-p+la:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,oa(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(o,Oo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,oa(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(o,Oo)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-la?s-this._lodMax+la:0),d=4*(this._cubeSize-h);oa(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Oo)}};function h_(n){let e=[],t=[],i=n,s=n-la+1+a_;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,b=m>2?0:-1,x=[_,b,0,_+2/3,b,0,_+2/3,b+1,0,_,b,0,_+2/3,b+1,0,_,b+1,0];p.set(x,f*d*m);for(let M=0;M<d;M++){let S=h[M*2]*2-1,E=h[M*2+1]*2-1;m===0?or.set(1,E,S):m===1?or.set(-S,1,-E):m===2?or.set(-S,E,1):m===3?or.set(-1,E,-S):m===4?or.set(-S,-1,E):or.set(S,E,-1),or.toArray(v,(m*d+M)*f)}}let g=new at;g.setAttribute("position",new $e(p,f)),g.setAttribute("outputDirection",new $e(v,f)),t.push(new Ue(g,null)),i>la&&i--}return{lodMeshes:t,sizeLods:e}}function am(n,e,t){let i=new kt(n,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function u_(n,e,t){return new dt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function d_(n,e,t){return new dt({name:"SphericalGaussianBlur",defines:{SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function om(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function lm(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hh=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:Kt});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===rn&&(t.minFilter=Pt),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function f_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yc||f===_c)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new hh(p.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===yc||f===_c,v=f===Es||f===sr;if(p||v){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new ha(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new ha(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===yc?d.mapping=Es:f===_c&&(d.mapping=sr),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function p_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ws("WebGLRenderer: "+i+" extension not supported."),s}}}function m_(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(p===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let b=0,x=_.length;b<x;b+=3){let M=_[b+0],S=_[b+1],E=_[b+2];d.push(M,S,S,E,E,M)}}else{let _=p.array;v=p.version;for(let b=0,x=_.length/3-1;b<x;b+=3){let M=b+0,S=b+1,E=b+2;d.push(M,S,S,E,E,M)}}let g=new(p.count>=65535?Ga:Va)(d,1);g.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function g_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function c(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v_(n,e,t){let i=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let x=o.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*M*4*u),E=new ka(S,x,M,u);E.type=wi,E.needsUpdate=!0;let y=b*4;for(let A=0;A<u;A++){let I=g[A],C=m[A],L=_[A],D=x*M*4*A;for(let U=0;U<I.count;U++){let O=U*y;f===!0&&(s.fromBufferAttribute(I,U),S[D+O+0]=s.x,S[D+O+1]=s.y,S[D+O+2]=s.z,S[D+O+3]=0),p===!0&&(s.fromBufferAttribute(C,U),S[D+O+4]=s.x,S[D+O+5]=s.y,S[D+O+6]=s.z,S[D+O+7]=0),v===!0&&(s.fromBufferAttribute(L,U),S[D+O+8]=s.x,S[D+O+9]=s.y,S[D+O+10]=s.z,S[D+O+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new te(x,M)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function y_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var __={[yo]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[Mo]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[To]:"NEUTRAL_TONE_MAPPING",[So]:"CUSTOM_TONE_MAPPING"};function M_(n,e,t,i,s,r){let a=new kt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new at;c.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let h=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ue(c,h),d=new Nn(-1,1,1,-1,0,1),f=null,p=null,v=!1,g,m=null,_=[],b=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let S=0;S<_.length;S++){let E=_[S];E.setSize&&E.setSize(x,M)}},this.setEffects=function(x){_=x,b=_.length>0&&_[0].isRenderPass===!0;let M=a.width,S=a.height;_.length>0&&o===null&&(o=new kt(M,S,{type:Ut,depthBuffer:!1,stencilBuffer:!1}),l=new kt(M,S,{type:Ut,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<_.length;E++){let y=_[E];y.setSize&&y.setSize(M,S)}},this.begin=function(x,M){if(v||x.toneMapping===bn&&_.length===0)return!1;if(m=M,M!==null){let S=M.width,E=M.height;(a.width!==S||a.height!==E)&&this.setSize(S,E)}return b===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=bn,!0},this.hasRenderPass=function(){return b},this.end=function(x,M){x.toneMapping=g,v=!0;let S=a,E=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(x,E,S,M),w.needsSwap!==!1&&(S=E,E=E===o?l:o))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},st.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let y=__[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(m),x.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cm=new si,id=new In(1,1),Rm=new ka,Pm=new Zl,Im=new Ya,cm=[],hm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function ua(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cm[s];if(r===void 0&&(r=new Float32Array(s),cm[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function ri(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ai(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fh(n,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;n.uniform2fv(this.addr,e),ai(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ri(t,e))return;n.uniform3fv(this.addr,e),ai(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;n.uniform4fv(this.addr,e),ai(t,e)}}function A_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ai(t,e)}else{if(ri(t,i))return;fm.set(i),n.uniformMatrix2fv(this.addr,!1,fm),ai(t,i)}}function E_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ai(t,e)}else{if(ri(t,i))return;dm.set(i),n.uniformMatrix3fv(this.addr,!1,dm),ai(t,i)}}function C_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ai(t,e)}else{if(ri(t,i))return;um.set(i),n.uniformMatrix4fv(this.addr,!1,um),ai(t,i)}}function R_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;n.uniform2iv(this.addr,e),ai(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;n.uniform3iv(this.addr,e),ai(t,e)}}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;n.uniform4iv(this.addr,e),ai(t,e)}}function L_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function N_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;n.uniform2uiv(this.addr,e),ai(t,e)}}function U_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;n.uniform3uiv(this.addr,e),ai(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;n.uniform4uiv(this.addr,e),ai(t,e)}}function O_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=t.isReversedDepthBuffer()?oh:ah,r=id):r=Cm,t.setTexture2D(e||r,s)}function k_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pm,s)}function B_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Im,s)}function z_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rm,s)}function V_(n){switch(n){case 5126:return b_;case 35664:return S_;case 35665:return w_;case 35666:return T_;case 35674:return A_;case 35675:return E_;case 35676:return C_;case 5124:case 35670:return R_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return D_;case 5125:return L_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}function G_(n,e){n.uniform1fv(this.addr,e)}function H_(n,e){let t=ua(e,this.size,2);n.uniform2fv(this.addr,t)}function W_(n,e){let t=ua(e,this.size,3);n.uniform3fv(this.addr,t)}function X_(n,e){let t=ua(e,this.size,4);n.uniform4fv(this.addr,t)}function q_(n,e){let t=ua(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y_(n,e){let t=ua(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j_(n,e){let t=ua(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z_(n,e){n.uniform1iv(this.addr,e)}function K_(n,e){n.uniform2iv(this.addr,e)}function $_(n,e){n.uniform3iv(this.addr,e)}function J_(n,e){n.uniform4iv(this.addr,e)}function Q_(n,e){n.uniform1uiv(this.addr,e)}function e1(n,e){n.uniform2uiv(this.addr,e)}function t1(n,e){n.uniform3uiv(this.addr,e)}function i1(n,e){n.uniform4uiv(this.addr,e)}function n1(n,e,t){let i=this.cache,s=e.length,r=fh(t,s);ri(i,r)||(n.uniform1iv(this.addr,r),ai(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=id:a=Cm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function s1(n,e,t){let i=this.cache,s=e.length,r=fh(t,s);ri(i,r)||(n.uniform1iv(this.addr,r),ai(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pm,r[a])}function r1(n,e,t){let i=this.cache,s=e.length,r=fh(t,s);ri(i,r)||(n.uniform1iv(this.addr,r),ai(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Im,r[a])}function a1(n,e,t){let i=this.cache,s=e.length,r=fh(t,s);ri(i,r)||(n.uniform1iv(this.addr,r),ai(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rm,r[a])}function o1(n){switch(n){case 5126:return G_;case 35664:return H_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return j_;case 5124:case 35670:return Z_;case 35667:case 35671:return K_;case 35668:case 35672:return $_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return e1;case 36295:return t1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return a1}}var nd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}},sd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}},rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ed=/(\w+)(\])?(\[|\.)?/g;function pm(n,e){n.seq.push(e),n.map[e.id]=e}function l1(n,e,t){let i=n.name,s=i.length;for(ed.lastIndex=0;;){let r=ed.exec(i),a=ed.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pm(t,c===void 0?new nd(o,n,e):new sd(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new rd(o),pm(t,u)),t=u}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);l1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function mm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var c1=37297,h1=0;function u1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gm=new tt;function d1(n){st._getMatrix(gm,st.workingColorSpace,n);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+u1(n.getShaderSource(e),o)}else return r}function f1(n,e){let t=d1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var p1={[yo]:"Linear",[_o]:"Reinhard",[Mo]:"Cineon",[bo]:"ACESFilmic",[wo]:"AgX",[To]:"Neutral",[So]:"Custom"};function m1(n,e){let t=p1[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new P;function g1(){st.getLuminanceCoefficients(ch);let n=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function v1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Bo(n){return n!==""}function vm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(n){return n.replace(_1,b1)}var M1=new Map;function b1(n,e){let t=lt[e];if(t===void 0){let i=M1.get(e);if(i!==void 0)t=lt[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ad(t)}var S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(S1,w1)}function w1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var T1={[mo]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function A1(n){return T1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E1={[Es]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function C1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var R1={[sr]:"ENVMAP_MODE_REFRACTION"};function P1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":R1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I1={[Lu]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function D1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I1[n.combine]||"ENVMAP_BLENDING_NONE"}function L1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function N1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A1(t),c=C1(t),h=P1(t),u=D1(t),d=L1(t),f=x1(t),p=v1(r),v=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(g=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?lt.tonemapping_pars_fragment:"",t.toneMapping!==bn?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),a=ad(a),a=vm(a,t),a=ym(a,t),o=ad(o),o=vm(o,t),o=ym(o,t),a=_m(a),o=_m(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+g+a,x=_+m+o,M=mm(s,s.VERTEX_SHADER,b),S=mm(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(I){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(S)||"",U=C.trim(),O=L.trim(),G=D.trim(),J=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,S);else{let k=xm(s,M,"vertex"),H=xm(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+k+`
`+H)}else U!==""?Ne("WebGLProgram: Program Info Log:",U):(O===""||G==="")&&(F=!1);F&&(I.diagnostics={runnable:J,programLog:U,vertexShader:{log:O,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(S),y=new ca(s,v),w=y1(s,v)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,c1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=S,this}var U1=0,od=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ld(e),t.set(e,i)),i}},ld=class{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}};function F1(n){return n===Rs||n===Io||n===Do}function O1(n,e,t,i,s,r){let a=new zr,o=new od,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,A,I,C,L){let D=I.fog,U=C.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,J=e.get(y.envMap||O,G),F=J&&J.mapping===Ao?J.image.height:null,k=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=H!==void 0?H.length:0,ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let Qe,Je,et,K;if(k){let Dt=kn[k];Qe=Dt.vertexShader,Je=Dt.fragmentShader}else{Qe=y.vertexShader,Je=y.fragmentShader;let Dt=o.getVertexShaderStage(y),Mt=o.getFragmentShaderStage(y);o.update(y,Dt,Mt),et=Dt.id,K=Mt.id}let ee=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),ke=C.isInstancedMesh===!0,Ae=C.isBatchedMesh===!0,We=!!y.map,mt=!!y.matcap,ne=!!J,le=!!y.aoMap,he=!!y.lightMap,ue=!!y.bumpMap&&y.wireframe===!1,pe=!!y.normalMap,He=!!y.displacementMap,Be=!!y.emissiveMap,Xe=!!y.metalnessMap,Ze=!!y.roughnessMap,B=y.anisotropy>0,ft=y.clearcoat>0,nt=y.dispersion>0,N=y.retroreflectivity>0,T=y.iridescence>0,W=y.sheen>0,q=y.transmission>0,$=B&&!!y.anisotropyMap,de=ft&&!!y.clearcoatMap,ge=ft&&!!y.clearcoatNormalMap,Q=ft&&!!y.clearcoatRoughnessMap,se=T&&!!y.iridescenceMap,ye=T&&!!y.iridescenceThicknessMap,Fe=W&&!!y.sheenColorMap,ve=W&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Pe=!!y.specularColorMap,ze=!!y.specularIntensityMap,Ke=q&&!!y.transmissionMap,V=q&&!!y.thicknessMap,_e=!!y.gradientMap,ie=!!y.alphaMap,Me=y.alphaTest>0,Ee=!!y.alphaHash,ae=!!y.extensions,Ge=bn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let Le={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:Je,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&C._colorsTexture!==null,instancing:ke,instancingColor:ke&&C.instanceColor!==null,instancingMorph:ke&&C.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:mt,envMap:ne,envMapMode:ne&&J.mapping,envMapCubeUVHeight:F,aoMap:le,lightMap:he,bumpMap:ue,normalMap:pe,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:pe&&y.normalMapType===zp,normalMapTangentSpace:pe&&y.normalMapType===Fo,packedNormalMap:pe&&y.normalMapType===Fo&&F1(y.normalMap.format),metalnessMap:Xe,roughnessMap:Ze,anisotropy:B,anisotropyMap:$,clearcoat:ft,clearcoatMap:de,clearcoatNormalMap:ge,clearcoatRoughnessMap:Q,dispersion:nt,retroreflection:N,iridescence:T,iridescenceMap:se,iridescenceThicknessMap:ye,sheen:W,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:Pe,specularIntensityMap:ze,transmission:q,transmissionMap:Ke,thicknessMap:V,gradientMap:_e,opaque:y.transparent===!1&&y.blending===na&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:Ee,combine:y.combine,mapUv:We&&p(y.map.channel),aoMapUv:le&&p(y.aoMap.channel),lightMapUv:he&&p(y.lightMap.channel),bumpMapUv:ue&&p(y.bumpMap.channel),normalMapUv:pe&&p(y.normalMap.channel),displacementMapUv:He&&p(y.displacementMap.channel),emissiveMapUv:Be&&p(y.emissiveMap.channel),metalnessMapUv:Xe&&p(y.metalnessMap.channel),roughnessMapUv:Ze&&p(y.roughnessMap.channel),anisotropyMapUv:$&&p(y.anisotropyMap.channel),clearcoatMapUv:de&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(y.sheenRoughnessMap.channel),specularMapUv:xe&&p(y.specularMap.channel),specularColorMapUv:Pe&&p(y.specularColorMap.channel),specularIntensityMapUv:ze&&p(y.specularIntensityMap.channel),transmissionMapUv:Ke&&p(y.transmissionMap.channel),thicknessMapUv:V&&p(y.thicknessMap.channel),alphaMapUv:ie&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||B),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!U.attributes.uv&&(We||ie),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:Be&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===vi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(m(w,y),_(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let w=f[y.type],A;if(w){let I=kn[w];A=Di.clone(I.uniforms)}else A=y.uniforms;return A}function x(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new N1(n,w,y,s),c.push(A),h.set(w,A)),A}function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){o.remove(y)}function E(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:b,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function k1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function B1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,g,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=g,_.group=m),e++,_}function l(d,f,p,v,g,m,_){_.reversedDepth===!0&&(g=-g);let b=o(d,f,p,v,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(d,f,p,v,g,m){let _=o(d,f,p,v,g,m);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||B1),i.length>1&&i.sort(f||bm),s.length>1&&s.sort(f||bm)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function z1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Sm,n.set(i,[a])):s>=r.length?(a=new Sm,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function V1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new fe};break;case"SpotLight":t={position:new P,direction:new P,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function G1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var H1=0;function W1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X1(n){let e=new V1,t=G1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ve,a=new Ve;function o(c){let h=0,u=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,b=0,x=0,M=0,S=0,E=0,y=0,w=0,A=0;c.sort(W1);for(let C=0,L=c.length;C<L;C++){let D=c[C],U=D.color,O=D.intensity,G=D.distance,J=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Rs?J=D.shadow.map.texture:J=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],O);A++}else if(D.isSunLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let k=D.shadow,H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[p]=H,i.sunShadowMap[p]=J;let oe=k.getViewportCount();for(let ce=0;ce<oe;ce++)i.sunShadowMatrix[v+ce]=k.getMatrix(ce),i.sunShadowCascade[v+ce]=k._cascadeData[ce];v+=oe,p++}i.sun[f]=F,f++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let k=D.shadow,H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=D.shadow.matrix,M++}i.directional[g]=F,g++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(U).multiplyScalar(O),F.distance=G,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[_]=F;let k=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,k.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=k.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=J,E++}_++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(U).multiplyScalar(O),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=F,b++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let k=D.shadow,H=t.get(D);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=F,m++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(O),F.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[x]=F,x++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==E||I.numSpotMaps!==y||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=g,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=E,I.numSpotMaps=y,I.numLightProbes=A,i.version=H1++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let x=c[_];if(x.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),u++}else if(x.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(x.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function wm(n){let e=new X1(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function q1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wm(n),e.set(s,[o])):r>=a.length?(o=new wm(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],K1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Tm=new Ve,ko=new P,td=new P;function $1(n,e,t){let i=new Xr,s=new te,r=new te,a=new yt,o=new rc,l=new ac,c={},h=t.maxTextureSize,u={[Un]:vi,[vi]:Un,[nn]:nn},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Y1,fragmentShader:j1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new at;p.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ue(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let m=this.type;this.render=function(S,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===yp&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mo);let w=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),C=n.state;C.setBlending(Kt),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=m!==this.type;L&&E.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=S.length;D<U;D++){let O=S[D],G=O.shadow;if(G===void 0){Ne("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let J=G.getFrameExtents();s.multiply(J),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,G.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=F,G.map===null||L===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ia){if(O.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new kt(s.x,s.y,{format:Rs,type:Ut,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new In(s.x,s.y,wi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=Pn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else O.isPointLight?(G.map=new hh(s.x),G.map.depthTexture=new Jl(s.x,Sn)):(G.map=new kt(s.x,s.y),G.map.depthTexture=new In(s.x,s.y,Sn)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=Pn,this.type===mo?(G.map.depthTexture.compareFunction=F?oh:ah,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let k=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();O.isPointLight!==!0&&G.updateMatrices(O,y);for(let H=0;H<k;H++){let oe=G.getCamera(H);if(O.isPointLight){let ce=G.camera,Qe=G.matrix,Je=O.distance||ce.far;Je!==ce.far&&(ce.far=Je,ce.updateProjectionMatrix()),ko.setFromMatrixPosition(O.matrixWorld),ce.position.copy(ko),td.copy(ce.position),td.add(Z1[H]),ce.up.copy(K1[H]),ce.lookAt(td),ce.updateMatrixWorld(),Qe.makeTranslation(-ko.x,-ko.y,-ko.z),Tm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Tm,ce.coordinateSystem,ce.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,H),n.clear();else{H===0&&(n.setRenderTarget(G.map),n.clear());let ce=G.getViewport(H);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),C.viewport(a)}i=G.getFrustum(H),x(E,y,oe,O,this.type)}G.isPointLightShadow!==!0&&this.type===ia&&_(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,A,I)};function _(S,E){let y=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new kt(s.x,s.y,{format:Rs,type:Ut}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,y,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,y,f,v,null)}function b(S,E,y,w){let A=null,I=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)A=I;else if(A=y.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let C=A.uuid,L=E.uuid,D=c[C];D===void 0&&(D={},c[C]=D);let U=D[L];U===void 0&&(U=A.clone(),D[L]=U,E.addEventListener("dispose",M)),A=U}if(A.visible=E.visible,A.wireframe=E.wireframe,w===ia?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let C=n.properties.get(A);C.light=y}return A}function x(S,E,y,w,A){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===ia)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let L=e.update(S),D=S.material;if(Array.isArray(D)){let U=L.groups;for(let O=0,G=U.length;O<G;O++){let J=U[O],F=D[J.materialIndex];if(F&&F.visible){let k=b(S,F,w,A);S.onBeforeShadow(n,S,E,y,L,k,J),n.renderBufferDirect(y,null,L,k,S,J),S.onAfterShadow(n,S,E,y,L,k,J)}}}else if(D.visible){let U=b(S,D,w,A);S.onBeforeShadow(n,S,E,y,L,U,null),n.renderBufferDirect(y,null,L,U,S,null),S.onAfterShadow(n,S,E,y,L,U,null)}}let C=S.children;for(let L=0,D=C.length;L<D;L++)x(C[L],E,y,w,A)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let w=c[y],A=S.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function J1(n,e){function t(){let V=!1,_e=new yt,ie=null,Me=new yt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!V&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,ae,Ge,Le,Dt){Dt===!0&&(Ee*=Le,ae*=Le,Ge*=Le),_e.set(Ee,ae,Ge,Le),Me.equals(_e)===!1&&(n.clearColor(Ee,ae,Ge,Le),Me.copy(_e))},reset:function(){V=!1,ie=null,Me.set(-1,0,0,0)}}}function i(){let V=!1,_e=!1,ie=null,Me=null,Ee=null;return{setReversed:function(ae){if(_e!==ae){let Ge=e.get("EXT_clip_control");ae?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),_e=ae;let Le=Ee;Ee=null,this.setClear(Le)}},getReversed:function(){return _e},setTest:function(ae){ae?ee(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!V&&(n.depthMask(ae),ie=ae)},setFunc:function(ae){if(_e&&(ae=$p[ae]),Me!==ae){switch(ae){case zl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ae}},setLocked:function(ae){V=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,_e&&(ae=1-ae),n.clearDepth(ae))},reset:function(){V=!1,ie=null,Me=null,Ee=null,_e=!1}}}function s(){let V=!1,_e=null,ie=null,Me=null,Ee=null,ae=null,Ge=null,Le=null,Dt=null;return{setTest:function(Mt){V||(Mt?ee(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Mt){_e!==Mt&&!V&&(n.stencilMask(Mt),_e=Mt)},setFunc:function(Mt,hn,Tn){(ie!==Mt||Me!==hn||Ee!==Tn)&&(n.stencilFunc(Mt,hn,Tn),ie=Mt,Me=hn,Ee=Tn)},setOp:function(Mt,hn,Tn){(ae!==Mt||Ge!==hn||Le!==Tn)&&(n.stencilOp(Mt,hn,Tn),ae=Mt,Ge=hn,Le=Tn)},setLocked:function(Mt){V=Mt},setClear:function(Mt){Dt!==Mt&&(n.clearStencil(Mt),Dt=Mt)},reset:function(){V=!1,_e=null,ie=null,Me=null,Ee=null,ae=null,Ge=null,Le=null,Dt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,x=null,M=null,S=null,E=null,y=new fe(0,0,0),w=0,A=!1,I=null,C=null,L=null,D=null,U=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=J>=2);let k=null,H={},oe=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Qe=new yt().fromArray(oe),Je=new yt().fromArray(ce);function et(V,_e,ie,Me){let Ee=new Uint8Array(4),ae=n.createTexture();n.bindTexture(V,ae),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ie;Ge++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(_e+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ae}let K={};K[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Nr),ue(!1),pe(Cu),ee(n.CULL_FACE),le(Kt);function ee(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function me(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function ke(V,_e){return d[V]!==_e?(n.bindFramebuffer(V,_e),d[V]=_e,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ae(V,_e){let ie=p,Me=!1;if(V){ie=f.get(_e),ie===void 0&&(ie=[],f.set(_e,ie));let Ee=V.textures;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ge=Ee.length;ae<Ge;ae++)ie[ae]=n.COLOR_ATTACHMENT0+ae;ie.length=Ee.length,Me=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ie)}function We(V){return v!==V?(n.useProgram(V),v=V,!0):!1}let mt={[sn]:n.FUNC_ADD,[_p]:n.FUNC_SUBTRACT,[Mp]:n.FUNC_REVERSE_SUBTRACT};mt[bp]=n.MIN,mt[Sp]=n.MAX;let ne={[nr]:n.ZERO,[wp]:n.ONE,[Tp]:n.SRC_COLOR,[Iu]:n.SRC_ALPHA,[Rp]:n.SRC_ALPHA_SATURATE,[vo]:n.DST_COLOR,[xo]:n.DST_ALPHA,[Ap]:n.ONE_MINUS_SRC_COLOR,[Du]:n.ONE_MINUS_SRC_ALPHA,[Cp]:n.ONE_MINUS_DST_COLOR,[Ep]:n.ONE_MINUS_DST_ALPHA,[Pp]:n.CONSTANT_COLOR,[Ip]:n.ONE_MINUS_CONSTANT_COLOR,[Dp]:n.CONSTANT_ALPHA,[Lp]:n.ONE_MINUS_CONSTANT_ALPHA};function le(V,_e,ie,Me,Ee,ae,Ge,Le,Dt,Mt){if(V===Kt){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(ee(n.BLEND),g=!0),V!==vc){if(V!==m||Mt!==A){if((_!==sn||M!==sn)&&(n.blendEquation(n.FUNC_ADD),_=sn,M=sn),Mt)switch(V){case na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case go:n.blendFunc(n.ONE,n.ONE);break;case Ru:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",V);break}else switch(V){case na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ru:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",V);break}b=null,x=null,S=null,E=null,y.set(0,0,0),w=0,m=V,A=Mt}return}Ee=Ee||_e,ae=ae||ie,Ge=Ge||Me,(_e!==_||Ee!==M)&&(n.blendEquationSeparate(mt[_e],mt[Ee]),_=_e,M=Ee),(ie!==b||Me!==x||ae!==S||Ge!==E)&&(n.blendFuncSeparate(ne[ie],ne[Me],ne[ae],ne[Ge]),b=ie,x=Me,S=ae,E=Ge),(Le.equals(y)===!1||Dt!==w)&&(n.blendColor(Le.r,Le.g,Le.b,Dt),y.copy(Le),w=Dt),m=V,A=!1}function he(V,_e){V.side===nn?me(n.CULL_FACE):ee(n.CULL_FACE);let ie=V.side===vi;_e&&(ie=!ie),ue(ie),V.blending===na&&V.transparent===!1?le(Kt):le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Me=V.stencilWrite;o.setTest(Me),Me&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){I!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),I=V)}function pe(V){V!==xp?(ee(n.CULL_FACE),V!==C&&(V===Cu?n.cullFace(n.BACK):V===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),C=V}function He(V){V!==L&&(G&&n.lineWidth(V),L=V)}function Be(V,_e,ie){V?(ee(n.POLYGON_OFFSET_FILL),(D!==_e||U!==ie)&&(D=_e,U=ie,a.getReversed()&&(_e=-_e),n.polygonOffset(_e,ie))):me(n.POLYGON_OFFSET_FILL)}function Xe(V){V?ee(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ze(V){V===void 0&&(V=n.TEXTURE0+O-1),k!==V&&(n.activeTexture(V),k=V)}function B(V,_e,ie){ie===void 0&&(k===null?ie=n.TEXTURE0+O-1:ie=k);let Me=H[ie];Me===void 0&&(Me={type:void 0,texture:void 0},H[ie]=Me),(Me.type!==V||Me.texture!==_e)&&(k!==ie&&(n.activeTexture(ie),k=ie),n.bindTexture(V,_e||K[V]),Me.type=V,Me.texture=_e)}function ft(){let V=H[k];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function T(){try{n.texSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function W(){try{n.texSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function de(){try{n.texStorage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function ge(){try{n.texStorage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function Q(){try{n.texImage2D(...arguments)}catch(V){qe("WebGLState:",V)}}function se(){try{n.texImage3D(...arguments)}catch(V){qe("WebGLState:",V)}}function ye(V){return u[V]!==void 0?u[V]:n.getParameter(V)}function Fe(V,_e){u[V]!==_e&&(n.pixelStorei(V,_e),u[V]=_e)}function ve(V){Qe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Qe.copy(V))}function xe(V){Je.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Je.copy(V))}function Pe(V,_e){let ie=c.get(_e);ie===void 0&&(ie=new WeakMap,c.set(_e,ie));let Me=ie.get(V);Me===void 0&&(Me=n.getUniformBlockIndex(_e,V.name),ie.set(V,Me))}function ze(V,_e){let Me=c.get(_e).get(V);l.get(_e)!==Me&&(n.uniformBlockBinding(_e,Me,V.__bindingPointIndex),l.set(_e,Me))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,H={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,b=null,x=null,M=null,S=null,E=null,y=new fe(0,0,0),w=0,A=!1,I=null,C=null,L=null,D=null,U=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:me,bindFramebuffer:ke,drawBuffers:Ae,useProgram:We,setBlending:le,setMaterial:he,setFlipSided:ue,setCullFace:pe,setLineWidth:He,setPolygonOffset:Be,setScissorTest:Xe,activeTexture:Ze,bindTexture:B,unbindTexture:ft,compressedTexImage2D:nt,compressedTexImage3D:N,texImage2D:Q,texImage3D:se,pixelStorei:Fe,getParameter:ye,updateUBOMapping:Pe,uniformBlockBinding:ze,texStorage2D:de,texStorage3D:ge,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:ve,viewport:xe,reset:Ke}}function Q1(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,T){return p?new OffscreenCanvas(N,T):Or("canvas")}function g(N,T,W){let q=1,$=nt(N);if(($.width>W||$.height>W)&&(q=W/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let de=Math.floor(q*$.width),ge=Math.floor(q*$.height);d===void 0&&(d=v(de,ge));let Q=T?v(de,ge):d;return Q.width=de,Q.height=ge,Q.getContext("2d").drawImage(N,0,0,de,ge),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+de+"x"+ge+")."),Q}else return"data"in N&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),N;return N}function m(N){return N.generateMipmaps}function _(N){n.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(N,T,W,q,$,de=!1){if(N!==null){if(n[N]!==void 0)return n[N];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge;q&&(ge=e.get("EXT_texture_norm16"),ge||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=T;if(T===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8),W===n.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),W===n.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),T===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8),W===n.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),W===n.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),W===n.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),T===n.RGBA){let se=de?Fa:st.getTransfer($);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=se===vt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),W===n.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(N,T){let W;return N?T===null||T===Sn||T===Cs?W=n.DEPTH24_STENCIL8:T===wi?W=n.DEPTH32F_STENCIL8:T===ra&&(W=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Sn||T===Cs?W=n.DEPTH_COMPONENT24:T===wi?W=n.DEPTH_COMPONENT32F:T===ra&&(W=n.DEPTH_COMPONENT16),W}function S(N,T){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==zt&&N.minFilter!==Pt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function E(N){let T=N.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function y(N){let T=N.target;T.removeEventListener("dispose",y),I(T)}function w(N){let T=i.get(N);if(T.__webglInit===void 0)return;let W=N.source,q=f.get(W);if(q){let $=q[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(N),Object.keys(q).length===0&&f.delete(W)}i.remove(N)}function A(N){let T=i.get(N);n.deleteTexture(T.__webglTexture);let W=N.source,q=f.get(W);delete q[T.__cacheKey],a.memory.textures--}function I(N){let T=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let $=0;$<T.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(T.__webglFramebuffer[q][$]);else n.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)n.deleteFramebuffer(T.__webglFramebuffer[q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=N.textures;for(let q=0,$=W.length;q<$;q++){let de=i.get(W[q]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(W[q])}i.remove(N)}let C=0;function L(){C=0}function D(){return C}function U(N){C=N}function O(){let N=C;return N>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function G(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function J(N,T){let W=i.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let q=N.image;if(q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function F(N,T){let W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){me(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function k(N,T){let W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){me(W,N,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function H(N,T){let W=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ke(W,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let oe={[Zt]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Ur]:n.MIRRORED_REPEAT},ce={[zt]:n.NEAREST,[Mc]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[rn]:n.LINEAR_MIPMAP_LINEAR},Qe={[Gp]:n.NEVER,[Yp]:n.ALWAYS,[Hp]:n.LESS,[ah]:n.LEQUAL,[Wp]:n.EQUAL,[oh]:n.GEQUAL,[Xp]:n.GREATER,[qp]:n.NOTEQUAL};function Je(N,T){if(T.type===wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pt||T.magFilter===sa||T.magFilter===rr||T.magFilter===rn||T.minFilter===Pt||T.minFilter===sa||T.minFilter===rr||T.minFilter===rn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,oe[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,oe[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,oe[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ce[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zt||T.minFilter!==rr&&T.minFilter!==rn||T.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function et(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",E));let q=T.source,$=f.get(q);$===void 0&&($={},f.set(q,$));let de=G(T);if(de!==N.__cacheKey){$[de]===void 0&&($[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),$[de].usedTimes++;let ge=$[N.__cacheKey];ge!==void 0&&($[N.__cacheKey].usedTimes--,ge.usedTimes===0&&A(T)),N.__cacheKey=de,N.__webglTexture=$[de].texture}return W}function K(N,T,W){return Math.floor(Math.floor(N/W)/T)}function ee(N,T,W,q){let de=N.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,q,T.data);else{de.sort((Fe,ve)=>Fe.start-ve.start);let ge=0;for(let Fe=1;Fe<de.length;Fe++){let ve=de[ge],xe=de[Fe],Pe=ve.start+ve.count,ze=K(xe.start,T.width,4),Ke=K(ve.start,T.width,4);xe.start<=Pe+1&&ze===Ke&&K(xe.start+xe.count-1,T.width,4)===ze?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++ge,de[ge]=xe)}de.length=ge+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Fe=0,ve=de.length;Fe<ve;Fe++){let xe=de[Fe],Pe=Math.floor(xe.start/4),ze=Math.ceil(xe.count/4),Ke=Pe%T.width,V=Math.floor(Pe/T.width),_e=ze,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ke,V,_e,ie,W,q,T.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function me(N,T,W){let q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=n.TEXTURE_3D);let $=et(N,T),de=T.source;t.bindTexture(q,N.__webglTexture,n.TEXTURE0+W);let ge=i.get(de);if(de.version!==ge.__version||$===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ie=st.getPrimaries(st.workingColorSpace),Me=T.colorSpace===wn?null:st.getPrimaries(T.colorSpace),Ee=T.colorSpace===wn||ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let se=g(T.image,!1,s.maxTextureSize);se=ft(T,se);let ye=r.convert(T.format,T.colorSpace),Fe=r.convert(T.type),ve=x(T.internalFormat,ye,Fe,T.normalized,T.colorSpace,T.isVideoTexture);Je(q,T);let xe,Pe=T.mipmaps,ze=T.isVideoTexture!==!0,Ke=ge.__version===void 0||$===!0,V=de.dataReady,_e=S(T,se);if(T.isDepthTexture)ve=M(T.format===Fn,T.type),Ke&&(ze?t.texStorage2D(n.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ve,se.width,se.height,0,ye,Fe,null));else if(T.isDataTexture)if(Pe.length>0){ze&&Ke&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Pe[0].width,Pe[0].height);for(let ie=0,Me=Pe.length;ie<Me;ie++)xe=Pe[ie],ze?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,ye,Fe,xe.data):t.texImage2D(n.TEXTURE_2D,ie,ve,xe.width,xe.height,0,ye,Fe,xe.data);T.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(n.TEXTURE_2D,_e,ve,se.width,se.height),V&&ee(T,se,ye,Fe)):t.texImage2D(n.TEXTURE_2D,0,ve,se.width,se.height,0,ye,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Pe[0].width,Pe[0].height,se.depth);for(let ie=0,Me=Pe.length;ie<Me;ie++)if(xe=Pe[ie],T.format!==Ii)if(ye!==null)if(ze){if(V)if(T.layerUpdates.size>0){let Ee=Zu(xe.width,xe.height,T.format,T.type);for(let ae of T.layerUpdates){let Ge=xe.data.subarray(ae*Ee/xe.data.BYTES_PER_ELEMENT,(ae+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ae,xe.width,xe.height,1,ye,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,se.depth,ye,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ve,xe.width,xe.height,se.depth,0,xe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,se.depth,ye,Fe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ve,xe.width,xe.height,se.depth,0,ye,Fe,xe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ze&&Ke&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Pe[0].width,Pe[0].height);for(let ie=0,Me=Pe.length;ie<Me;ie++)xe=Pe[ie],T.format!==Ii?ye!==null?ze?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ve,xe.width,xe.height,0,xe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,ye,Fe,xe.data):t.texImage2D(n.TEXTURE_2D,ie,ve,xe.width,xe.height,0,ye,Fe,xe.data)}else if(T.isDataArrayTexture)if(ze){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,se.width,se.height,se.depth),V)if(T.layerUpdates.size>0){let ie=Zu(se.width,se.height,T.format,T.type);for(let Me of T.layerUpdates){let Ee=se.data.subarray(Me*ie/se.data.BYTES_PER_ELEMENT,(Me+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,se.width,se.height,1,ye,Fe,Ee)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Fe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,ye,Fe,se.data);else if(T.isData3DTexture)ze?(Ke&&t.texStorage3D(n.TEXTURE_3D,_e,ve,se.width,se.height,se.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Fe,se.data)):t.texImage3D(n.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,ye,Fe,se.data);else if(T.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(n.TEXTURE_2D,_e,ve,se.width,se.height);else{let ie=se.width,Me=se.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ve,ie,Me,0,ye,Fe,null),ie>>=1,Me>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),u.add(T),ie.onpaint=Me=>{let Ee=Me.changedElements;for(let ae of u)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ee=n.RGBA,ae=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,ae,Ge,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(ze&&Ke){let ie=nt(Pe[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,ie.width,ie.height)}for(let ie=0,Me=Pe.length;ie<Me;ie++)xe=Pe[ie],ze?V&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye,Fe,xe):t.texImage2D(n.TEXTURE_2D,ie,ve,ye,Fe,xe);T.generateMipmaps=!1}else if(ze){if(Ke){let ie=nt(se);t.texStorage2D(n.TEXTURE_2D,_e,ve,ie.width,ie.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Fe,se)}else t.texImage2D(n.TEXTURE_2D,0,ve,ye,Fe,se);m(T)&&_(q),ge.__version=de.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ke(N,T,W){if(T.image.length!==6)return;let q=et(N,T),$=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+W);let de=i.get($);if($.version!==de.__version||q===!0){t.activeTexture(n.TEXTURE0+W);let ge=st.getPrimaries(st.workingColorSpace),Q=T.colorSpace===wn?null:st.getPrimaries(T.colorSpace),se=T.colorSpace===wn||ge===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Fe=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!ye&&!Fe?ve[ae]=g(T.image[ae],!0,s.maxCubemapSize):ve[ae]=Fe?T.image[ae].image:T.image[ae],ve[ae]=ft(T,ve[ae]);let xe=ve[0],Pe=r.convert(T.format,T.colorSpace),ze=r.convert(T.type),Ke=x(T.internalFormat,Pe,ze,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,_e=de.__version===void 0||q===!0,ie=$.dataReady,Me=S(T,xe);Je(n.TEXTURE_CUBE_MAP,T);let Ee;if(ye){V&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,xe.width,xe.height);for(let ae=0;ae<6;ae++){Ee=ve[ae].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){let Le=Ee[Ge];T.format!==Ii?Pe!==null?V?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,Ke,Le.width,Le.height,0,Le.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,0,0,Le.width,Le.height,Pe,ze,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,Ke,Le.width,Le.height,0,Pe,ze,Le.data)}}}else{if(Ee=T.mipmaps,V&&_e){Ee.length>0&&Me++;let ae=nt(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Pe,ze,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,ve[ae].width,ve[ae].height,0,Pe,ze,ve[ae].data);for(let Ge=0;Ge<Ee.length;Ge++){let Dt=Ee[Ge].image[ae].image;V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,0,0,Dt.width,Dt.height,Pe,ze,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,Ke,Dt.width,Dt.height,0,Pe,ze,Dt.data)}}else{V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe,ze,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Pe,ze,ve[ae]);for(let Ge=0;Ge<Ee.length;Ge++){let Le=Ee[Ge];V?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,0,0,Pe,ze,Le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,Ke,Pe,ze,Le.image[ae])}}}m(T)&&_(n.TEXTURE_CUBE_MAP),de.__version=$.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ae(N,T,W,q,$,de){let ge=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),se=x(W.internalFormat,ge,Q,W.normalized,W.colorSpace),ye=i.get(T),Fe=i.get(W);if(Fe.__renderTarget=T,!ye.__hasExternalTextures){let ve=Math.max(1,T.width>>de),xe=Math.max(1,T.height>>de);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,de,se,ve,xe,T.depth,0,ge,Q,null):t.texImage2D($,de,se,ve,xe,0,ge,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Ze(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,Fe.__webglTexture,0,Xe(T)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,Fe.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(N,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){let q=T.depthTexture,$=q&&q.isDepthTexture?q.type:null,de=M(T.stencilBuffer,$),ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(T),de,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(T),de,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,N)}else{let q=T.textures;for(let $=0;$<q.length;$++){let de=q[$],ge=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),se=x(de.internalFormat,ge,Q,de.normalized,de.colorSpace);Ze(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(T),se,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(T),se,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,se,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(N,T,W){let q=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(T.depthTexture);if($.__renderTarget=T,(!$.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Je(n.TEXTURE_CUBE_MAP,T.depthTexture);let ye=r.convert(T.depthTexture.format),Fe=r.convert(T.depthTexture.type),ve;T.depthTexture.format===Pn?ve=n.DEPTH_COMPONENT24:T.depthTexture.format===Fn&&(ve=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ve,T.width,T.height,0,ye,Fe,null)}}else J(T.depthTexture,0);let de=$.__webglTexture,ge=Xe(T),Q=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,se=T.depthTexture.format===Fn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pn)Ze(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,de,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,de,0);else if(T.depthTexture.format===Fn)Ze(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,de,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(N){let T=i.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){let $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=q}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let q=0;q<6;q++)mt(T.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?mt(T.__webglFramebuffer[0],N,0):mt(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=n.createRenderbuffer(),We(T.__webglDepthbuffer[q],N,!1);else{let $=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,de)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),We(T.__webglDepthbuffer,N,!1);else{let $=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(N,T,W){let q=i.get(N);T!==void 0&&Ae(q.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ne(N)}function he(N){let T=N.texture,W=i.get(N),q=i.get(T);N.addEventListener("dispose",y);let $=N.textures,de=N.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=T.version,a.memory.textures++),de){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let se=0;se<T.mipmaps.length;se++)W.__webglFramebuffer[Q][se]=n.createFramebuffer()}else W.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<T.mipmaps.length;Q++)W.__webglFramebuffer[Q]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ge)for(let Q=0,se=$.length;Q<se;Q++){let ye=i.get($[Q]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&Ze(N)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let se=$[Q];W.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let ye=r.convert(se.format,se.colorSpace),Fe=r.convert(se.type),ve=x(se.internalFormat,ye,Fe,se.normalized,se.colorSpace,N.isXRRenderTarget===!0),xe=Xe(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ve,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),We(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Je(n.TEXTURE_CUBE_MAP,T);for(let Q=0;Q<6;Q++)if(T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)Ae(W.__webglFramebuffer[Q][se],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se);else Ae(W.__webglFramebuffer[Q],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(T)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let Q=0,se=$.length;Q<se;Q++){let ye=$[Q],Fe=i.get(ye),ve=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Fe.__webglTexture),Je(ve,ye),Ae(W.__webglFramebuffer,N,ye,n.COLOR_ATTACHMENT0+Q,ve,0),m(ye)&&_(ve)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Q=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,q.__webglTexture),Je(Q,T),T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)Ae(W.__webglFramebuffer[se],N,T,n.COLOR_ATTACHMENT0,Q,se);else Ae(W.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,Q,0);m(T)&&_(Q),t.unbindTexture()}N.depthBuffer&&ne(N)}function ue(N){let T=N.textures;for(let W=0,q=T.length;W<q;W++){let $=T[W];if(m($)){let de=b(N),ge=i.get($).__webglTexture;t.bindTexture(de,ge),_(de),t.unbindTexture()}}}let pe=[],He=[];function Be(N){if(N.samples>0){if(Ze(N)===!1){let T=N.textures,W=N.width,q=N.height,$=n.COLOR_BUFFER_BIT,de=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(N),Q=T.length>1;if(Q)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let se=N.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let Fe=i.get(T[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,W,q,0,0,W,q,$,n.NEAREST),l===!0&&(pe.length=0,He.length=0,pe.push(n.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(pe.push(de),He.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let Fe=i.get(T[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Xe(N){return Math.min(s.maxSamples,N.samples)}function Ze(N){let T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function B(N){let T=a.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function ft(N,T){let W=N.colorSpace,q=N.format,$=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==xi&&W!==wn&&(st.getTransfer(W)===vt?(q!==Ii||$!==Si)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",W)),T}function nt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=le,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eM(n,e){function t(i,s=wn){let r,a=st.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===Sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Ut)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===zu)return n.RGB;if(i===Ii)return n.RGBA;if(i===Pn)return n.DEPTH_COMPONENT;if(i===Fn)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Rs)return n.RG;if(i===Ec)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Eo||i===Co||i===Ro||i===Po)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Pc||i===Ic||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Nc||i===Uc||i===Fc||i===Oc||i===Io||i===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lc||i===Nc)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fc)return r.COMPRESSED_R11_EAC;if(i===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Io)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===zc||i===Vc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===jc||i===Zc||i===Kc||i===$c||i===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$c)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===eh||i===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qc)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===nh||i===Do||i===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`,cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dt({vertexShader:tM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Gt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends gn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new cd,m={},_=t.getContextAttributes(),b=null,x=null,M=[],S=[],E=new te,y=null,w=null,A=new ii;A.viewport=new yt;let I=new ii;I.viewport=new yt;let C=[A,I],L=new pc,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=M[K];return ee===void 0&&(ee=new Vr,M[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=M[K];return ee===void 0&&(ee=new Vr,M[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=M[K];return ee===void 0&&(ee=new Vr,M[K]=ee),ee.getHandSpace()};function O(K){let ee=S.indexOf(K.inputSource);if(ee===-1)return;let me=M[ee];me!==void 0&&(me.update(K.inputSource,K.frame,c||a),me.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){let ee=S[K];ee!==null&&(S[K]=null,M[K].disconnect(ee))}D=null,U=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,x=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ke=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?Fn:Pn,ke=_.stencil?Cs:Sn);let We={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new kt(d.textureWidth,d.textureHeight,{format:Ii,type:Si,depthTexture:new In(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new kt(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(K){for(let ee=0;ee<K.removed.length;ee++){let me=K.removed[ee],ke=S.indexOf(me);ke>=0&&(S[ke]=null,M[ke].disconnect(me))}for(let ee=0;ee<K.added.length;ee++){let me=K.added[ee],ke=S.indexOf(me);if(ke===-1){for(let We=0;We<M.length;We++)if(We>=S.length){S.push(me),ke=We;break}else if(S[We]===null){S[We]=me,ke=We;break}if(ke===-1)break}let Ae=M[ke];Ae&&Ae.connect(me)}}let F=new P,k=new P;function H(K,ee,me){F.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(me.matrixWorld);let ke=F.distanceTo(k),Ae=ee.projectionMatrix.elements,We=me.projectionMatrix.elements,mt=Ae[14]/(Ae[10]-1),ne=Ae[14]/(Ae[10]+1),le=(Ae[9]+1)/Ae[5],he=(Ae[9]-1)/Ae[5],ue=(Ae[8]-1)/Ae[0],pe=(We[8]+1)/We[0],He=mt*ue,Be=mt*pe,Xe=ke/(-ue+pe),Ze=Xe*-ue;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let B=mt+Xe,ft=ne+Xe,nt=He-Ze,N=Be+(ke-Ze),T=le*ne/ft*B,W=he*ne/ft*B;K.projectionMatrix.makePerspective(nt,N,T,W,B,ft),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,me=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(me=g.depthFar)),L.near=I.near=A.near=ee,L.far=I.far=A.far=me,(D!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,U=L.far),L.layers.mask=K.layers.mask|6,A.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;let ke=K.parent,Ae=L.cameras;oe(L,ke);for(let We=0;We<Ae.length;We++)oe(Ae[We],ke);Ae.length===2?H(L,A,I):L.projectionMatrix.copy(A.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ce(K,L,ke)};function ce(K,ee,me){me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ys*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return m[K]};let Qe=null;function Je(K,ee){if(h=ee.getViewerPose(c||a),p=ee,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ke=!1;me.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let ne=0;ne<me.length;ne++){let le=me[ne],he=null;if(f!==null)he=f.getViewport(le);else{let pe=u.getViewSubImage(d,le);he=pe.viewport,ne===0&&(e.setRenderTargetTextures(x,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(x))}let ue=C[ne];ue===void 0&&(ue=new ii,ue.layers.enable(ne),ue.viewport=new yt,C[ne]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),ne===0&&(L.matrix.copy(ue.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(ue)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let ne=u.getDepthInformation(me[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let ne=0;ne<me.length;ne++){let le=me[ne].camera;if(le){let he=m[le];he||(he=new ja,m[le]=he);let ue=u.getCameraImage(le);he.sourceTexture=ue}}}}for(let me=0;me<M.length;me++){let ke=S[me],Ae=M[me];ke!==null&&Ae!==void 0&&Ae.update(ke,ee,c||a)}Qe&&Qe(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}let et=new Am;et.setAnimationLoop(Je),this.setAnimationLoop=function(K){Qe=K},this.dispose=function(){}}},nM=new Ve,Dm=new tt;Dm.set(-1,0,0,0,1,0,0,0,1);function sM(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,qu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,b,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vi&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vi&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),b=_.envMap,x=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Dm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vi&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rM(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let S=M.program;i.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",_));let E=M.program;i.updateUBOMapping(x,E);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let S=n.createBuffer(),E=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=s[x.id],S=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,w=S.length;y<w;y++){let A=S[y];if(Array.isArray(A))for(let I=0,C=A.length;I<C;I++)f(A[I],y,I,E);else f(A,y,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,S,E){if(v(x,M,S,E)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let A=0;for(let I=0;I<w.length;I++){let C=w[I],L=m(C);p(C,x.__data,A),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function v(x,M,S,E){let y=x.value,w=M+"_"+S;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{let A=E[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(x){let M=x.uniforms,S=0,E=16;for(let w=0,A=M.length;w<A;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let C=0,L=I.length;C<L;C++){let D=I[C],U=Array.isArray(D.value)?D.value:[D.value];for(let O=0,G=U.length;O<G;O++){let J=U[O],F=m(J),k=S%E,H=k%F.boundary,oe=k+H;S+=H,oe!==0&&E-oe<F.storage&&(S+=E-oe),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=F.storage}}}let y=S%E;return y>0&&(S+=E-y),x.__size=S,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function b(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function oM(){return On===null&&(On=new tn(aM,16,16,Rs,Ut),On.name="DFG_LUT",On.minFilter=Pt,On.magFilter=Pt,On.wrapS=Oi,On.wrapT=Oi,On.generateMipmaps=!1,On.needsUpdate=!0),On}var uh=class{constructor(e={}){let{canvas:t=jp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Si}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=f,g=new Set([Cc,Ec,Ac]),m=new Set([Si,Sn,ra,Cs,Sc,wc]),_=new Uint32Array(4),b=new Int32Array(4),x=new P,M=null,S=null,E=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,C=null,L=null,D=null,U=null;this._outputColorSpace=xt;let O=0,G=0,J=null,F=-1,k=null,H=new yt,oe=new yt,ce=null,Qe=new fe(0),Je=0,et=t.width,K=t.height,ee=1,me=null,ke=null,Ae=new yt(0,0,et,K),We=new yt(0,0,et,K),mt=!1,ne=new Xr,le=!1,he=!1,ue=new Ve,pe=new P,He=new yt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ze(){return J===null?ee:1}let B=i;function ft(R,z){return t.getContext(R,z)}let nt,N,T,W,q,$,de,ge,Q,se,ye,Fe,ve,xe,Pe,ze,Ke,V,_e,ie,Me,Ee,ae;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",hn,!1),B===null){let z="webgl2";if(B=ft(z,R),B===null)throw ft(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(R){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),qe("WebGLRenderer: "+R.message),R}function Ge(){nt=new p_(B),nt.init(),Me=new eM(B,nt),N=new s_(B,nt,e,Me),T=new J1(B,nt),N.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),L=B.createFramebuffer(),D=B.createFramebuffer(),U=B.createFramebuffer(),W=new x_(B),q=new k1,$=new Q1(B,nt,T,q,N,Me,W),de=new f_(A),ge=new yx(B),Ee=new i_(B,ge),Q=new m_(B,ge,W,Ee),se=new y_(B,Q,ge,Ee,W),V=new v_(B,N,$),Pe=new r_(q),ye=new O1(A,de,nt,N,Ee,Pe),Fe=new sM(A,q),ve=new z1,xe=new q1(nt),Ke=new t_(A,de,T,se,p,l),ze=new $1(A,se,N),ae=new rM(B,W,N,T),_e=new n_(B,nt,W),ie=new g_(B,nt,W),W.programs=ye.programs,A.capabilities=N,A.extensions=nt,A.properties=q,A.renderLists=ve,A.shadowMap=ze,A.state=T,A.info=W}v!==Si&&(w=new M_(v,t.width,t.height,o,s,r));let Le=new hd(A,B);this.xr=Le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(et,K,!1))},this.getSize=function(R){return R.set(et,K)},this.setSize=function(R,z,Z=!0){if(Le.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}et=R,K=z,t.width=Math.floor(R*ee),t.height=Math.floor(z*ee),Z===!0&&(t.style.width=R+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(et*ee,K*ee).floor()},this.setDrawingBufferSize=function(R,z,Z){et=R,K=z,ee=Z,t.width=Math.floor(R*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(v===Si){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(Ae)},this.setViewport=function(R,z,Z,Y){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,z,Z,Y),T.viewport(H.copy(Ae).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(We)},this.setScissor=function(R,z,Z,Y){R.isVector4?We.set(R.x,R.y,R.z,R.w):We.set(R,z,Z,Y),T.scissor(oe.copy(We).multiplyScalar(ee).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(R){T.setScissorTest(mt=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){ke=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,Z=!0){let Y=0;if(R){let j=!1;if(J!==null){let we=J.texture.format;j=g.has(we)}if(j){let we=J.texture.type,Re=m.has(we),Se=Ke.getClearColor(),Ie=Ke.getClearAlpha(),Oe=Se.r,ot=Se.g,ut=Se.b;Re?(_[0]=Oe,_[1]=ot,_[2]=ut,_[3]=Ie,B.clearBufferuiv(B.COLOR,0,_)):(b[0]=Oe,b[1]=ot,b[2]=ut,b[3]=Ie,B.clearBufferiv(B.COLOR,0,b))}else Y|=B.COLOR_BUFFER_BIT}z&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),C=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),Ke.dispose(),ve.dispose(),xe.dispose(),q.dispose(),de.dispose(),se.dispose(),Ee.dispose(),ae.dispose(),ye.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",xf),Le.removeEventListener("sessionend",vf),Os.stop()};function Dt(R){R.preventDefault(),Oa("WebGLRenderer: Context Lost."),I=!0}function Mt(){Oa("WebGLRenderer: Context Restored."),I=!1;let R=W.autoReset,z=ze.enabled,Z=ze.autoUpdate,Y=ze.needsUpdate,j=ze.type;Ge(),W.autoReset=R,ze.enabled=z,ze.autoUpdate=Z,ze.needsUpdate=Y,ze.type=j}function hn(R){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tn(R){let z=R.target;z.removeEventListener("dispose",Tn),I0(z)}function I0(R){D0(R),q.remove(R)}function D0(R){let z=q.get(R).programs;z!==void 0&&(z.forEach(function(Z){ye.releaseProgram(Z)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Z,Y,j,we){z===null&&(z=Be);let Re=j.isMesh&&j.matrixWorld.determinantAffine()<0,Se=U0(R,z,Z,Y,j);T.setMaterial(Y,Re);let Ie=Z.index,Oe=1;if(Y.wireframe===!0){if(Ie=Q.getWireframeAttribute(Z),Ie===void 0)return;Oe=2}let ot=Z.drawRange,ut=Z.attributes.position,De=ot.start*Oe,bt=(ot.start+ot.count)*Oe;we!==null&&(De=Math.max(De,we.start*Oe),bt=Math.min(bt,(we.start+we.count)*Oe)),Ie!==null?(De=Math.max(De,0),bt=Math.min(bt,Ie.count)):ut!=null&&(De=Math.max(De,0),bt=Math.min(bt,ut.count));let ei=bt-De;if(ei<0||ei===1/0)return;Ee.setup(j,Y,Se,Z,Ie);let Ot,Rt=_e;if(Ie!==null&&(Ot=ge.get(Ie),Rt=ie,Rt.setIndex(Ot)),j.isMesh)Y.wireframe===!0?(T.setLineWidth(Y.wireframeLinewidth*Ze()),Rt.setMode(B.LINES)):Rt.setMode(B.TRIANGLES);else if(j.isLine){let yi=Y.linewidth;yi===void 0&&(yi=1),T.setLineWidth(yi*Ze()),j.isLineSegments?Rt.setMode(B.LINES):j.isLineLoop?Rt.setMode(B.LINE_LOOP):Rt.setMode(B.LINE_STRIP)}else j.isPoints?Rt.setMode(B.POINTS):j.isSprite&&Rt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let yi=j._multiDrawStarts,Ce=j._multiDrawCounts,Ei=j._multiDrawCount,gt=Ie?ge.get(Ie).bytesPerElement:1,Ji=q.get(Y).currentProgram.getUniforms();for(let An=0;An<Ei;An++)Ji.setValue(B,"_gl_DrawID",An),Rt.render(yi[An]/gt,Ce[An])}else if(j.isInstancedMesh)Rt.renderInstances(De,ei,j.count);else if(Z.isInstancedBufferGeometry){let yi=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,yi);Rt.renderInstances(De,ei,Ce)}else Rt.render(De,ei)};function gf(R,z,Z,Y){C!==null&&R.isNodeMaterial&&C.setObject(Y,R),le===!0&&Pe.setState(R,Z,!1),R.transparent===!0&&R.side===nn&&R.forceSinglePass===!1?(R.side=vi,R.needsUpdate=!0,cl(R,z,Y),R.side=Un,R.needsUpdate=!0,cl(R,z,Y),R.side=nn):cl(R,z,Y)}this.compile=function(R,z,Z=null){Z===null&&(Z=R),C!==null&&C.renderStart(R,z,Z),S=xe.get(Z),S.init(z),y.push(S),Z.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),R!==Z&&R.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),he=this.localClippingEnabled,le=Pe.init(this.clippingPlanes,he),le===!0&&Pe.setGlobalState(this.clippingPlanes,z),C!==null&&ze.render(S.state.shadowsArray,Z,z);let Y=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let we=j.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){let Se=we[Re];gf(Se,Z,z,j),Y.add(Se)}else gf(we,Z,z,j),Y.add(we)}),S=y.pop(),C!==null&&C.renderEnd(),Y},this.compileAsync=function(R,z,Z=null){let Y=this.compile(R,z,Z);return new Promise(j=>{function we(){if(Y.forEach(function(Re){let Ie=q.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){j(R);return}setTimeout(we,10)}nt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let zh=null;function L0(R){zh&&zh(R)}function xf(){Os.stop()}function vf(){Os.start()}let Os=new Am;Os.setAnimationLoop(L0),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(R){zh=R,Le.setAnimationLoop(R),R===null?Os.stop():Os.start()},Le.addEventListener("sessionstart",xf),Le.addEventListener("sessionend",vf),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C!==null&&C.renderStart(R,z);let Z=Le.enabled===!0&&Le.isPresenting===!0,Y=w!==null&&(J===null||Z)&&w.begin(A,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(z),z=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,z,J),S=xe.get(R,y.length),S.init(z),S.state.textureUnits=$.getTextureUnits(),y.push(S),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ne.setFromProjectionMatrix(ue,mn,z.reversedDepth),he=this.localClippingEnabled,le=Pe.init(this.clippingPlanes,he),M=ve.get(R,E.length),M.init(),E.push(M),Le.enabled===!0&&Le.isPresenting===!0){let Re=A.xr.getDepthSensingMesh();Re!==null&&Vh(Re,z,-1/0,A.sortObjects)}Vh(R,z,0,A.sortObjects),M.finish(),C!==null&&C.updateLights(S.state.lightsArray),A.sortObjects===!0&&M.sort(me,ke),Xe=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Xe&&Ke.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Pe.beginShadows();let j=S.state.shadowsArray;if(ze.render(j,R,z),le===!0&&Pe.endShadows(),(Y&&w.hasRenderPass())===!1){let Re=M.opaque,Se=M.transmissive;if(S.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Se.length>0)for(let Oe=0,ot=Ie.length;Oe<ot;Oe++){let ut=Ie[Oe];_f(Re,Se,R,ut)}Xe&&Ke.render(R);for(let Oe=0,ot=Ie.length;Oe<ot;Oe++){let ut=Ie[Oe];yf(M,R,ut,ut.viewport)}}else Se.length>0&&_f(Re,Se,R,z),Xe&&Ke.render(R),yf(M,R,z)}J!==null&&G===0&&($.updateMultisampleRenderTarget(J),$.updateRenderTargetMipmap(J)),Y&&w.end(A),R.isScene===!0&&R.onAfterRender(A,R,z),Ee.resetDefaultState(),F=-1,k=null,y.pop(),y.length>0?(S=y[y.length-1],$.setTextureUnits(S.state.textureUnits),le===!0&&Pe.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,C!==null&&C.renderEnd()};function Vh(R,z,Z,Y){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ne)){Y&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);let Re=se.update(R),Se=R.material;Se.visible&&M.push(R,Re,Se,Z,He.z,null,z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ne))){let Re=se.update(R),Se=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),He.copy(Re.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){let Ie=Re.groups;for(let Oe=0,ot=Ie.length;Oe<ot;Oe++){let ut=Ie[Oe],De=Se[ut.materialIndex];De&&De.visible&&M.push(R,Re,De,Z,He.z,ut,z)}}else Se.visible&&M.push(R,Re,Se,Z,He.z,null,z)}}let we=R.children;for(let Re=0,Se=we.length;Re<Se;Re++)Vh(we[Re],z,Z,Y)}function yf(R,z,Z,Y){let{opaque:j,transmissive:we,transparent:Re}=R;S.setupLightsView(Z),le===!0&&Pe.setGlobalState(A.clippingPlanes,Z),Y&&T.viewport(H.copy(Y)),j.length>0&&ll(j,z,Z),we.length>0&&ll(we,z,Z),Re.length>0&&ll(Re,z,Z),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function _f(R,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let De=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new kt(1,1,{generateMipmaps:!0,type:De?Ut:Si,minFilter:rn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let we=S.state.transmissionRenderTarget[Y.id],Re=Y.viewport||H;we.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);let Se=A.getRenderTarget(),Ie=A.getActiveCubeFace(),Oe=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(Qe),Je=A.getClearAlpha(),Je<1&&A.setClearColor(16777215,.5),A.clear(),Xe&&Ke.render(Z);let ot=A.toneMapping;A.toneMapping=bn;let ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),le===!0&&Pe.setGlobalState(A.clippingPlanes,Y),ll(R,Z,Y),$.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we),nt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let bt=0,ei=z.length;bt<ei;bt++){let Ot=z[bt],{object:Rt,geometry:yi,material:Ce,group:Ei}=Ot;if(Ce.side===nn&&Rt.layers.test(Y.layers)){let gt=Ce.side;Ce.side=vi,Ce.needsUpdate=!0,Mf(Rt,Z,Y,yi,Ce,Ei),Ce.side=gt,Ce.needsUpdate=!0,De=!0}}De===!0&&($.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we))}A.setRenderTarget(Se,Ie,Oe),A.setClearColor(Qe,Je),ut!==void 0&&(Y.viewport=ut),A.toneMapping=ot}function ll(R,z,Z){let Y=z.isScene===!0?z.overrideMaterial:null;for(let j=0,we=R.length;j<we;j++){let Re=R[j],{object:Se,geometry:Ie,group:Oe}=Re,ot=Re.material;ot.allowOverride===!0&&Y!==null&&(ot=Y),Se.layers.test(Z.layers)&&Mf(Se,z,Z,Ie,ot,Oe)}}function Mf(R,z,Z,Y,j,we){C!==null&&j.isNodeMaterial&&C.setObject(R,j),R.onBeforeRender(A,z,Z,Y,j,we),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(A,z,Z,Y,R,we),j.transparent===!0&&j.side===nn&&j.forceSinglePass===!1?(j.side=vi,j.needsUpdate=!0,A.renderBufferDirect(Z,z,Y,j,R,we),j.side=Un,j.needsUpdate=!0,A.renderBufferDirect(Z,z,Y,j,R,we),j.side=nn):A.renderBufferDirect(Z,z,Y,j,R,we),R.onAfterRender(A,z,Z,Y,j,we)}function cl(R,z,Z){z.isScene!==!0&&(z=Be);let Y=q.get(R),j=S.state.lights,we=S.state.shadowsArray,Re=j.state.version,Se=ye.getParameters(R,j.state,we,z,Z,S.state.lightProbeGridArray),Ie=ye.getProgramCacheKey(Se),Oe=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=de.get(R.envMap||Y.environment,ot),Y.envMapRotation=Y.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",Tn),Oe=new Map,Y.programs=Oe);let ut=Oe.get(Ie);if(ut!==void 0){if(Y.currentProgram===ut&&Y.lightsStateVersion===Re)return Sf(R,Se),ut}else Se.uniforms=ye.getUniforms(R),C!==null&&R.isNodeMaterial&&C.build(R,Z,Se),R.onBeforeCompile(Se,A),ut=ye.acquireProgram(Se,Ie),Oe.set(Ie,ut),Y.uniforms=Se.uniforms;let De=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=Pe.uniform),Sf(R,Se),Y.needsLights=O0(R),Y.lightsStateVersion=Re,Y.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=ut,Y.uniformsList=null,ut}function bf(R){if(R.uniformsList===null){let z=R.currentProgram.getUniforms();R.uniformsList=ca.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Sf(R,z){let Z=q.get(R);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function N0(R,z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Z=0,Y=R.length;Z<Y;Z++){let j=R[Z];if(j.texture!==null&&j.boundingBox.containsPoint(x))return j}return null}function U0(R,z,Z,Y,j){z.isScene!==!0&&(z=Be),$.resetTextureUnits();let we=z.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Se=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:st.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Oe=de.get(Y.envMap||Re,Ie),ot=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ut=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!Z.morphAttributes.position,bt=!!Z.morphAttributes.normal,ei=!!Z.morphAttributes.color,Ot=bn;Y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ot=A.toneMapping);let Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yi=Rt!==void 0?Rt.length:0,Ce=q.get(Y),Ei=S.state.lights;if(le===!0&&(he===!0||R!==k)){let Lt=R===k&&Y.id===F;Pe.setState(Y,R,Lt)}let gt=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ei.state.version||Ce.outputColorSpace!==Se||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==Oe||Y.fog===!0&&Ce.fog!==we||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Pe.numPlanes||Ce.numIntersection!==Pe.numIntersection)||Ce.vertexAlphas!==ot||Ce.vertexTangents!==ut||Ce.morphTargets!==De||Ce.morphNormals!==bt||Ce.morphColors!==ei||Ce.toneMapping!==Ot||Ce.morphTargetsCount!==yi||!!Ce.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ce.__version=Y.version);let Ji=Ce.currentProgram;gt===!0&&(Ji=cl(Y,z,j),C&&Y.isNodeMaterial&&C.onUpdateProgram(Y,Ji,Ce));let An=!1,ds=!1,xr=!1,At=Ji.getUniforms(),jt=Ce.uniforms;if(T.useProgram(Ji.program)&&(An=!0,ds=!0,xr=!0),Y.id!==F&&(F=Y.id,ds=!0),Ce.needsLights){let Lt=N0(S.state.lightProbeGridArray,j);Ce.lightProbeGrid!==Lt&&(Ce.lightProbeGrid=Lt,ds=!0)}if(An||k!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),At.setValue(B,"projectionMatrix",R.projectionMatrix),At.setValue(B,"viewMatrix",R.matrixWorldInverse);let ps=At.map.cameraPosition;ps!==void 0&&ps.setValue(B,pe.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&At.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,ds=!0,xr=!0)}if(Ce.needsLights&&(Ei.state.sunShadowMap.length>0&&At.setValue(B,"sunShadowMap",Ei.state.sunShadowMap,$),Ei.state.directionalShadowMap.length>0&&At.setValue(B,"directionalShadowMap",Ei.state.directionalShadowMap,$),Ei.state.spotShadowMap.length>0&&At.setValue(B,"spotShadowMap",Ei.state.spotShadowMap,$),Ei.state.pointShadowMap.length>0&&At.setValue(B,"pointShadowMap",Ei.state.pointShadowMap,$)),j.isSkinnedMesh){At.setOptional(B,j,"bindMatrix"),At.setOptional(B,j,"bindMatrixInverse");let Lt=j.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),At.setValue(B,"boneTexture",Lt.boneTexture,$))}j.isBatchedMesh&&(At.setOptional(B,j,"batchingTexture"),At.setValue(B,"batchingTexture",j._matricesTexture,$),At.setOptional(B,j,"batchingIdTexture"),At.setValue(B,"batchingIdTexture",j._indirectTexture,$),At.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&At.setValue(B,"batchingColorTexture",j._colorsTexture,$));let fs=Z.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&V.update(j,Z,Ji),(ds||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,At.setValue(B,"receiveShadow",j.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(jt.envMapIntensity.value=z.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=oM()),ds){if(At.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&F0(jt,xr),we&&Y.fog===!0&&Fe.refreshFogUniforms(jt,we),Fe.refreshMaterialUniforms(jt,Y,ee,K,S.state.transmissionRenderTarget[R.id]),Ce.needsLights&&Ce.lightProbeGrid){let Lt=Ce.lightProbeGrid;jt.probesSH.value=Lt.texture,jt.probesMin.value.copy(Lt.boundingBox.min),jt.probesMax.value.copy(Lt.boundingBox.max),jt.probesResolution.value.copy(Lt.resolution)}ca.upload(B,bf(Ce),jt,$)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ca.upload(B,bf(Ce),jt,$),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(B,"center",j.center),At.setValue(B,"modelViewMatrix",j.modelViewMatrix),At.setValue(B,"normalMatrix",j.normalMatrix),At.setValue(B,"modelMatrix",j.matrixWorld),Y.uniformsGroups!==void 0){let Lt=Y.uniformsGroups;for(let ps=0,vr=Lt.length;ps<vr;ps++){let Tf=Lt[ps];ae.update(Tf,Ji),ae.bind(Tf,Ji)}}return Ji}function F0(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.sunLights.needsUpdate=z,R.sunLightShadows.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function O0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,z,Z){let Y=q.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(R.texture).__webglTexture=z,q.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){let Z=q.get(R);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,Z=0){J=R,O=z,G=Z;let Y=null,j=!1,we=!1;if(R){let Se=q.get(R);if(Se.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),H.copy(R.viewport),oe.copy(R.scissor),ce=R.scissorTest,T.viewport(H),T.scissor(oe),T.setScissorTest(ce),F=-1;return}else if(Se.__webglFramebuffer===void 0)$.setupRenderTarget(R);else if(Se.__hasExternalTextures)$.rebindTextures(R,q.get(R.texture).__webglTexture,q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ot=R.depthTexture;if(Se.__boundDepthTexture!==ot){if(ot!==null&&q.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(R)}}let Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Oe=q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?Y=Oe[z][Z]:Y=Oe[z],j=!0):R.samples>0&&$.useMultisampledRTT(R)===!1?Y=q.get(R).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[Z]:Y=Oe,H.copy(R.viewport),oe.copy(R.scissor),ce=R.scissorTest}else H.copy(Ae).multiplyScalar(ee).floor(),oe.copy(We).multiplyScalar(ee).floor(),ce=mt;if(Z!==0&&(Y=L),T.bindFramebuffer(B.FRAMEBUFFER,Y)&&T.drawBuffers(R,Y),T.viewport(H),T.scissor(oe),T.setScissorTest(ce),j){let Se=q.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,Z)}else if(we){let Se=z;for(let Ie=0;Ie<R.textures.length;Ie++){let Oe=q.get(R.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,Z,Se)}}else if(R!==null&&Z!==0){let Se=q.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,Z)}F=-1};function wf(R){let z=q.get(R);return(z.__readFormat!==R.format||z.__readType!==R.type)&&(z.__readFormat=R.format,z.__readType=R.type,z.__formatReadable=N.textureFormatReadable(R.format),z.__typeReadable=N.textureTypeReadable(R.type)),z}this.readRenderTargetPixels=function(R,z,Z,Y,j,we,Re,Se=0){if(!(R&&R.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){T.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let Oe=R.textures[Se],ot=Oe.format,ut=Oe.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let De=wf(Oe);if(De.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Y&&Z>=0&&Z<=R.height-j&&B.readPixels(z,Z,Y,j,Me.convert(ot),Me.convert(ut),we)}finally{let Oe=J!==null?q.get(J).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,z,Z,Y,j,we,Re,Se=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(z>=0&&z<=R.width-Y&&Z>=0&&Z<=R.height-j){T.bindFramebuffer(B.FRAMEBUFFER,Ie);let Oe=R.textures[Se],ot=Oe.format,ut=Oe.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);let De=wf(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(z,Z,Y,j,Me.convert(ot),Me.convert(ut),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ei=J!==null?q.get(J).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,ei);let Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Kp(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(bt),B.deleteSync(Ot),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,Z=0){let Y=Math.pow(2,-Z),j=Math.floor(R.image.width*Y),we=Math.floor(R.image.height*Y),Re=z!==null?z.x:0,Se=z!==null?z.y:0;$.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Re,Se,j,we),T.unbindTexture()},this.copyTextureToTexture=function(R,z,Z=null,Y=null,j=0,we=0){let Re,Se,Ie,Oe,ot,ut,De,bt,ei,Ot=R.isCompressedTexture?R.mipmaps[we]:R.image;if(Z!==null)Re=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,ot=Z.min.y,ut=Z.isBox3?Z.min.z:0;else{let jt=Math.pow(2,-j);Re=Math.floor(Ot.width*jt),Se=Math.floor(Ot.height*jt),R.isDataArrayTexture?Ie=Ot.depth:R.isData3DTexture?Ie=Math.floor(Ot.depth*jt):Ie=1,Oe=0,ot=0,ut=0}Y!==null?(De=Y.x,bt=Y.y,ei=Y.z):(De=0,bt=0,ei=0);let Rt=Me.convert(z.format),yi=Me.convert(z.type),Ce;z.isData3DTexture?($.setTexture3D(z,0),Ce=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?($.setTexture2DArray(z,0),Ce=B.TEXTURE_2D_ARRAY):($.setTexture2D(z,0),Ce=B.TEXTURE_2D),T.activeTexture(B.TEXTURE0),T.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Ei=T.getParameter(B.UNPACK_ROW_LENGTH),gt=T.getParameter(B.UNPACK_IMAGE_HEIGHT),Ji=T.getParameter(B.UNPACK_SKIP_PIXELS),An=T.getParameter(B.UNPACK_SKIP_ROWS),ds=T.getParameter(B.UNPACK_SKIP_IMAGES);T.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),T.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),T.pixelStorei(B.UNPACK_SKIP_ROWS,ot),T.pixelStorei(B.UNPACK_SKIP_IMAGES,ut);let xr=R.isDataArrayTexture||R.isData3DTexture,At=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){let jt=q.get(R),fs=q.get(z),Lt=q.get(jt.__renderTarget),ps=q.get(fs.__renderTarget);T.bindFramebuffer(B.READ_FRAMEBUFFER,Lt.__webglFramebuffer),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let vr=0;vr<Ie;vr++)xr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(R).__webglTexture,j,ut+vr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(z).__webglTexture,we,ei+vr)),B.blitFramebuffer(Oe,ot,Re,Se,De,bt,Re,Se,B.DEPTH_BUFFER_BIT,B.NEAREST);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||q.has(R)){let jt=q.get(R),fs=q.get(z);T.bindFramebuffer(B.READ_FRAMEBUFFER,D),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Lt=0;Lt<Ie;Lt++)xr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,j,ut+Lt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,j),At?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fs.__webglTexture,we,ei+Lt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fs.__webglTexture,we),j!==0?B.blitFramebuffer(Oe,ot,Re,Se,De,bt,Re,Se,B.COLOR_BUFFER_BIT,B.NEAREST):At?B.copyTexSubImage3D(Ce,we,De,bt,ei+Lt,Oe,ot,Re,Se):B.copyTexSubImage2D(Ce,we,De,bt,Oe,ot,Re,Se);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else At?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ce,we,De,bt,ei,Re,Se,Ie,Rt,yi,Ot.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,we,De,bt,ei,Re,Se,Ie,Rt,Ot.data):B.texSubImage3D(Ce,we,De,bt,ei,Re,Se,Ie,Rt,yi,Ot):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,De,bt,Re,Se,Rt,yi,Ot.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,De,bt,Ot.width,Ot.height,Rt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,we,De,bt,Re,Se,Rt,yi,Ot);T.pixelStorei(B.UNPACK_ROW_LENGTH,Ei),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(B.UNPACK_SKIP_PIXELS,Ji),T.pixelStorei(B.UNPACK_SKIP_ROWS,An),T.pixelStorei(B.UNPACK_SKIP_IMAGES,ds),we===0&&z.generateMipmaps&&B.generateMipmap(Ce),T.unbindTexture()},this.initRenderTarget=function(R){q.get(R).__webglFramebuffer===void 0&&$.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$.setTextureCube(R,0):R.isData3DTexture?$.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$.setTexture2DArray(R,0):$.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){O=0,G=0,J=null,T.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function zo(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new at,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][d]);let p=Lm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Lm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new $e(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let v=h.getComponent(d,p);o.setComponent(d+u,p,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function ud(n,e){if(e===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===aa||e===Uo){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===aa)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Vo(n){let e=new Map,t=new Map,i=n.clone();return Nm(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Nm(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Nm(n.children[i],e.children[i],t)}var ph=class extends Mn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new mh(t,ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mh(t,ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Id(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);a=os.resolveURL(c,this.path)}else a=os.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bm){try{a[ct.KHR_BINARY_GLTF]=new Dd(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:a[u]=new gd;break;case ct.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ld(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:a[u]=new Nd;break;case ct.KHR_MESH_QUANTIZATION:a[u]=new Ud;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function lM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function $t(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},md=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],xi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ir(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tr(h),c.distance=u;break;case"spot":c=new uo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},gd=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,i){let s=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xi),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(r,r)}return Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},_d=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],xi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,xt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(r[0],r[1],r[2],xi),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(r[0],r[1],r[2],xi),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,xt)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){let i=$t(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Rd=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Pd=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},mh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Id=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let v=new Ve,g=new P,m=new pt,_=new P(1,1,1),b=new yn(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,v.compose(g,m,_));let x=null;for(let M in l)if(M==="_COLOR_0"){let S=l[M];b.instanceColor=new vn(S.array,S.itemSize,S.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(x===null){let E=b.geometry;x=new at,x.name=E.name;for(let y in E.attributes)x.setAttribute(y,E.attributes[y]);for(let y in E.morphAttributes)x.morphAttributes[y]=E.morphAttributes[y];E.index!==null&&x.setIndex(E.index),x.morphTargetsRelative=E.morphTargetsRelative;for(let y of E.groups)x.addGroup(y.start,y.count,y.materialIndex);E.boundingBox!==null&&(x.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(x.boundingSphere=E.boundingSphere.clone()),x.drawRange.start=E.drawRange.start,x.drawRange.count=E.drawRange.count,x.userData=Object.assign({},E.userData),b.geometry=x}let S=l[M];x.setAttribute(M,new vn(S.array,S.itemSize,S.normalized))}Vt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Bm="glTF",Go=12,Um={JSON:1313821514,BIN:5130562},Dd=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Go,r=new DataView(e,Go),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Um.JSON){let c=new Uint8Array(e,Go+a,o);this.content=i.decode(c)}else if(l===Um.BIN){let c=Go+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Od[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Od[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=da[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}u(f)},o,c,xi,d)})})}},Nd=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ud=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},gh=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,p=e*c,v=p-c,g=-2*f+3*d,m=f-d,_=1-g,b=m-d+u;for(let x=0;x!==o;x++){let M=a[v+x+o],S=a[v+x+l]*h,E=a[p+x+o],y=a[p+x]*h;r[x]=_*M+b*S+g*E+m*y}return r}},cM=new pt,Fd=class extends gh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return cM.fromArray(r).normalize().toArray(r),r}},an={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},da={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fm={9728:zt,9729:Pt,9984:Mc,9985:sa,9986:rr,9987:rn},Om={33071:Oi,33648:Ur,10497:Zt},dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hM={CUBICSPLINE:void 0,LINEAR:qs,STEP:Xs},fd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),n.DefaultMaterial}function lr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Bn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function fM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(n){let e,t=n.extensions&&n.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pd(t.attributes):e=n.indices+":"+pd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+pd(n.targets[i]);return e}function pd(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function kd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gM=new Ve,Bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Ln(this.options.manager):this.textureLoader=new fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return lr(r,o,s),Bn(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(os.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=dd[s.type],o=da[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new $e(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=dd[s.type],c=da[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,g;if(f&&f!==u){let m=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(_);b||(v=new c(o,m*f,s.count*f/h),b=new Gr(v,f/h),t.cache.add(_,b)),g=new Hr(b,l,d%f/h,p)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),g=new $e(v,l,p);if(s.sparse!==void 0){let m=dd.SCALAR,_=da[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,M=new _(a[1],b,s.sparse.count*m),S=new c(a[2],x,s.sparse.count*l);o!==null&&(g=new $e(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,y=M.length;E<y;E++){let w=M[E];if(g.setX(w,S[E*l]),l>=2&&g.setY(w,S[E*l+1]),l>=3&&g.setZ(w,S[E*l+2]),l>=4&&g.setW(w,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fm[d.magFilter]||Pt,h.minFilter=Fm[d.minFilter]||rn,h.wrapS=Om[d.wrapS]||Zt,h.wrapT=Om[d.wrapT]||Zt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Pt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let g=new si(v);g.needsUpdate=!0,d(g)}),t.load(os.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Bn(u,a),u.userData.mimeType=a.mimeType||mM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new qr,Ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ss,Ri.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Yt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let u=s[ct.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xi),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);let h=r.alphaMode||fd.OPAQUE;if(h===fd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Nt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nt){let u=r.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],xi)}return r.emissiveTexture!==void 0&&a!==Nt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Bn(u,r),t.associations.set(u,{materials:e}),r.extensions&&lr(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return km(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=pM(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=km(new at,c,t),c.mode===an.TRIANGLE_STRIP?d=d.then(f=>ud(f,Uo)):c.mode===an.TRIANGLE_FAN&&(d=d.then(f=>ud(f,aa))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?uM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],g=a[f],m,_=c[f];if(g.mode===an.TRIANGLES||g.mode===an.TRIANGLE_STRIP||g.mode===an.TRIANGLE_FAN||g.mode===void 0){let b=r.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");b&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=b&&x?new Ha(v,_):new Ue(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===an.LINES)m=new Xa(v,_);else if(g.mode===an.LINE_STRIP)m=new is(v,_);else if(g.mode===an.LINE_LOOP)m=new qa(v,_);else if(g.mode===an.POINTS)m=new qi(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&fM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Bn(m,r),g.extensions&&lr(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&lr(s,u[0],r),u[0];let d=new Te;r.extensions&&lr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ii(Ps.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Nn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Bn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wa(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],v=f.target,g=v.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let b=0,x=d.length;b<x;b++){let M=d[b],S=f[b],E=p[b],y=v[b],w=g[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let A=i._createAnimationTracks(M,S,E,y,w);if(A)for(let I=0;I<A.length;I++)m.push(A[I])}let _=new Js(r,void 0,m);return Bn(_,s),_})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Wr:c.length>1?h=new Te:c.length===1?h=c[0]:h=new Vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Bn(h,r),r.extensions&&lr(i,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Te;i.name&&(r.name=s.createUniqueName(i.name)),Bn(r,i),i.extensions&&lr(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Vo(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ri||d instanceof si)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Is[r.path]===Is.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Is[r.path]){case Is.weights:h=ss;break;case Is.rotation:h=rs;break;case Is.translation:case Is.scale:h=As;break;default:switch(i.itemSize){case 1:h=ss;break;case 2:case 3:default:h=As;break}break}let u=s.interpolation!==void 0?hM[s.interpolation]:qs,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let v=new h(l[f]+"."+Is[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=kd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof rs?Fd:gh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xM(n,e,t){let i=e.attributes,s=new wt;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=kd(da[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=kd(da[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new Bi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function km(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Od[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return st.workingColorSpace!==xi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Bn(n,e),xM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(n,e.targets,t):n})}var xh=class extends lo{constructor(e){super(e),this.type=Ut}parse(e){let a=function(y,w){switch(y){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},h=`
`,u=function(y,w,A){w=w||1024;let C=y.pos,L=-1,D=0,U="",O=String.fromCharCode.apply(null,new Uint16Array(y.subarray(C,C+128)));for(;0>(L=O.indexOf(h))&&D<w&&C<y.byteLength;)U+=O,D+=O.length,C+=128,O=String.fromCharCode.apply(null,new Uint16Array(y.subarray(C,C+128)));return-1<L?(A!==!1&&(y.pos+=D+L+1),U+O.slice(0,L)):!1},d=function(y){let w=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,O;for((y.pos>=y.byteLength||!(U=u(y)))&&a(1,"no header found"),(O=U.match(w))||a(3,"bad initial token"),D.valid|=1,D.programtype=O[1],D.string+=U+`
`;U=u(y),U!==!1;){if(D.string+=U+`
`,U.charAt(0)==="#"){D.comments+=U+`
`;continue}if((O=U.match(A))&&(D.gamma=parseFloat(O[1])),(O=U.match(I))&&(D.exposure=parseFloat(O[1])),(O=U.match(C))&&(D.valid|=2,D.format=O[1]),(O=U.match(L))&&(D.valid|=4,D.height=parseInt(O[1],10),D.width=parseInt(O[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||a(3,"missing format specifier"),D.valid&4||a(3,"missing image size specifier"),D},f=function(y,w,A){let I=w;if(I<8||I>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);I!==(y[2]<<8|y[3])&&a(3,"wrong scanline width");let C=new Uint8Array(4*w*A);C.length||a(4,"unable to allocate buffer space");let L=0,D=0,U=4*I,O=new Uint8Array(4),G=new Uint8Array(U),J=A;for(;J>0&&D<y.byteLength;){D+4>y.byteLength&&a(1),O[0]=y[D++],O[1]=y[D++],O[2]=y[D++],O[3]=y[D++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=I)&&a(3,"bad rgbe scanline format");let F=0,k;for(;F<U&&D<y.byteLength;){k=y[D++];let oe=k>128;if(oe&&(k-=128),(k===0||F+k>U)&&a(3,"bad scanline data"),oe){let ce=y[D++];for(let Qe=0;Qe<k;Qe++)G[F++]=ce}else G.set(y.subarray(D,D+k),F),F+=k,D+=k}let H=I;for(let oe=0;oe<H;oe++){let ce=0;C[L]=G[oe+ce],ce+=I,C[L+1]=G[oe+ce],ce+=I,C[L+2]=G[oe+ce],ce+=I,C[L+3]=G[oe+ce],L+=4}J--}return C},p=function(y,w,A,I){let C=y[w+3],L=Math.pow(2,C-128)/255;A[I+0]=y[w+0]*L,A[I+1]=y[w+1]*L,A[I+2]=y[w+2]*L,A[I+3]=1},v=function(y,w,A,I){let C=y[w+3],L=Math.pow(2,C-128)/255;A[I+0]=bs.toHalfFloat(Math.min(y[w+0]*L,65504)),A[I+1]=bs.toHalfFloat(Math.min(y[w+1]*L,65504)),A[I+2]=bs.toHalfFloat(Math.min(y[w+2]*L,65504)),A[I+3]=bs.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=d(g),_=m.width,b=m.height,x=f(g.subarray(g.pos),_,b),M,S,E;switch(this.type){case wi:E=x.length/4;let y=new Float32Array(E*4);for(let A=0;A<E;A++)p(x,A*4,y,A*4);M=y,S=wi;break;case Ut:E=x.length/4;let w=new Uint16Array(E*4);for(let A=0;A<E;A++)v(x,A*4,w,A*4);M=w,S=Ut;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:b,data:M,header:m.string,gamma:m.gamma,exposure:m.exposure,type:S,colorSpace:xi,minFilter:Pt,magFilter:Pt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var zn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vM=new Nn(-1,1,1,-1,0,1),zd=class extends at{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},yM=new zd,Vn=class{constructor(e){this._mesh=new Ue(yM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fa=class extends Li{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Di.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ho=class extends Li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vh=class extends Li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(zn),this.copyPass.material.blending=Kt,this.timer=new po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ho!==void 0&&(a instanceof Ho?i=!0:a instanceof vh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _h=class extends Li{constructor(){super(),this.isOutputPass=!0,this.uniforms=Di.clone(Wo.uniforms),this.material=new Jr({name:Wo.name,uniforms:this.uniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader}),this._fsQuad=new Vn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===To?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===So&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mh=class extends Li{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var zm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var pa=class n extends Li{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:Ut,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new kt(r,a,{type:Ut,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new kt(r,a,{type:Ut,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=zm;this.highPassUniforms=Di.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Di.clone(zn.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,premultipliedAlpha:!0,blending:go,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new Nt,this._fsQuad=new Vn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new dt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};pa.BlurDirectionX=new te(1,0);pa.BlurDirectionY=new te(0,1);var Xo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},qo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},bh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vm(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=_M(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new tn(s,e,e);return r.wrapS=Zt,r.wrapT=Zt,r.needsUpdate=!0,r}function _M(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var Yo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Vd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Vd(n,e,t){let i=MM(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function MM(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new P(Math.cos(r),Math.sin(r),a))}return i}var Sh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,p=e-d,v=t-f,g,m;p>v?(g=1,m=0):(g=0,m=1);let _=p-g+h,b=v-m+h,x=p-1+2*h,M=v-1+2*h,S=l&255,E=c&255,y=this.perm[S+this.perm[E]]%12,w=this.perm[S+g+this.perm[E+m]]%12,A=this.perm[S+1+this.perm[E+1]]%12,I=.5-p*p-v*v;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[y],p,v));let C=.5-_*_-b*b;C<0?s=0:(C*=C,s=C*C*this._dot(this.grad3[w],_,b));let L=.5-x*x-M*M;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[A],x,M)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,p=(h+u+d)*f,v=h-p,g=u-p,m=d-p,_=e-v,b=t-g,x=i-m,M,S,E,y,w,A;_>=b?b>=x?(M=1,S=0,E=0,y=1,w=1,A=0):_>=x?(M=1,S=0,E=0,y=1,w=0,A=1):(M=0,S=0,E=1,y=1,w=0,A=1):b<x?(M=0,S=0,E=1,y=0,w=1,A=1):_<x?(M=0,S=1,E=0,y=0,w=1,A=1):(M=0,S=1,E=0,y=1,w=1,A=0);let I=_-M+f,C=b-S+f,L=x-E+f,D=_-y+2*f,U=b-w+2*f,O=x-A+2*f,G=_-1+3*f,J=b-1+3*f,F=x-1+3*f,k=h&255,H=u&255,oe=d&255,ce=this.perm[k+this.perm[H+this.perm[oe]]]%12,Qe=this.perm[k+M+this.perm[H+S+this.perm[oe+E]]]%12,Je=this.perm[k+y+this.perm[H+w+this.perm[oe+A]]]%12,et=this.perm[k+1+this.perm[H+1+this.perm[oe+1]]]%12,K=.6-_*_-b*b-x*x;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[ce],_,b,x));let ee=.6-I*I-C*C-L*L;ee<0?r=0:(ee*=ee,r=ee*ee*this._dot3(this.grad3[Qe],I,C,L));let me=.6-D*D-U*U-O*O;me<0?a=0:(me*=me,a=me*me*this._dot3(this.grad3[Je],D,U,O));let ke=.6-G*G-J*J-F*F;return ke<0?o=0:(ke*=ke,o=ke*ke*this._dot3(this.grad3[et],G,J,F)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,p,v=(e+t+i+s)*l,g=Math.floor(e+v),m=Math.floor(t+v),_=Math.floor(i+v),b=Math.floor(s+v),x=(g+m+_+b)*c,M=g-x,S=m-x,E=_-x,y=b-x,w=e-M,A=t-S,I=i-E,C=s-y,L=w>A?32:0,D=w>I?16:0,U=A>I?8:0,O=w>C?4:0,G=A>C?2:0,J=I>C?1:0,F=L+D+U+O+G+J,k=a[F][0]>=3?1:0,H=a[F][1]>=3?1:0,oe=a[F][2]>=3?1:0,ce=a[F][3]>=3?1:0,Qe=a[F][0]>=2?1:0,Je=a[F][1]>=2?1:0,et=a[F][2]>=2?1:0,K=a[F][3]>=2?1:0,ee=a[F][0]>=1?1:0,me=a[F][1]>=1?1:0,ke=a[F][2]>=1?1:0,Ae=a[F][3]>=1?1:0,We=w-k+c,mt=A-H+c,ne=I-oe+c,le=C-ce+c,he=w-Qe+2*c,ue=A-Je+2*c,pe=I-et+2*c,He=C-K+2*c,Be=w-ee+3*c,Xe=A-me+3*c,Ze=I-ke+3*c,B=C-Ae+3*c,ft=w-1+4*c,nt=A-1+4*c,N=I-1+4*c,T=C-1+4*c,W=g&255,q=m&255,$=_&255,de=b&255,ge=o[W+o[q+o[$+o[de]]]]%32,Q=o[W+k+o[q+H+o[$+oe+o[de+ce]]]]%32,se=o[W+Qe+o[q+Je+o[$+et+o[de+K]]]]%32,ye=o[W+ee+o[q+me+o[$+ke+o[de+Ae]]]]%32,Fe=o[W+1+o[q+1+o[$+1+o[de+1]]]]%32,ve=.6-w*w-A*A-I*I-C*C;ve<0?h=0:(ve*=ve,h=ve*ve*this._dot4(r[ge],w,A,I,C));let xe=.6-We*We-mt*mt-ne*ne-le*le;xe<0?u=0:(xe*=xe,u=xe*xe*this._dot4(r[Q],We,mt,ne,le));let Pe=.6-he*he-ue*ue-pe*pe-He*He;Pe<0?d=0:(Pe*=Pe,d=Pe*Pe*this._dot4(r[se],he,ue,pe,He));let ze=.6-Be*Be-Xe*Xe-Ze*Ze-B*B;ze<0?f=0:(ze*=ze,f=ze*ze*this._dot4(r[ye],Be,Xe,Ze,B));let Ke=.6-ft*ft-nt*nt-N*N-T*T;return Ke<0?p=0:(Ke*=Ke,p=Ke*Ke*this._dot4(r[Fe],ft,nt,N,T)),27*(h+u+d+f+p)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var jo=class n extends Li{constructor(e,t,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Ut,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new dt({defines:Object.assign({},Xo.defines),uniforms:Di.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:Kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ro,this.normalMaterial.blending=Kt,this.pdMaterial=new dt({defines:Object.assign({},Yo.defines),uniforms:Di.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new dt({defines:Object.assign({},qo.defines),uniforms:Di.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new dt({uniforms:Di.clone(zn.uniforms),vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vo,blendDst:nr,blendEquation:sn,blendSrcAlpha:xo,blendDstAlpha:nr,blendEquationAlpha:sn}),this.blendMaterial=new dt({uniforms:Di.clone(bh.uniforms),vertexShader:bh.vertexShader,fragmentShader:bh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vc,blendSrc:vo,blendDst:nr,blendEquation:sn,blendSrcAlpha:xo,blendDstAlpha:nr,blendEquationAlpha:sn}),this._fsQuad=new Vn(null),this._originalClearColor=new fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new In,this.depthTexture.format=Fn,this.depthTexture.type=Cs,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Ut,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Vd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Sh,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new tn(s,e,e,Ii,Si);return r.wrapS=Zt,r.wrapT=Zt,r.needsUpdate=!0,r}};jo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var cr=(n,e=1)=>new fe(n).multiplyScalar(e),Ds={dSun:{value:new P(.46,.27,-.85).normalize()},dHzWarm:{value:cr("#ffd9a6",1.1)},dHzCool:{value:cr("#e8c5ae",.85)},dGlow:{value:cr("#ffa858",.4)},dFog:{value:new yt(1/360,1/38,2,.97)},dWind:{value:new te(-.94,.34).normalize()},dRipple:{value:null},dGrain:{value:null},dMacro:{value:null},dSandA:{value:cr("#b97f4a")},dSandB:{value:cr("#d8a96f")},dSheen:{value:.55}},Gm=`
uniform vec3 dSun, dHzWarm, dHzCool, dGlow;
uniform vec4 dFog;
vec3 dHaze(vec3 dir) {
  float w = 0.5 + 0.5 * dot(normalize(dir.xz), normalize(dSun.xz));
  return mix(dHzCool, dHzWarm, w * w) + dGlow * pow(w, 12.0);
}
vec3 dAerial(vec3 col, vec3 wp) {
  vec3 v = wp - cameraPosition;
  float d = length(v), t = d * dFog.x;
  float lift = max(0.5 * (wp.y + cameraPosition.y) - dFog.z, 0.0) * dFog.y; // crests clear the haze layer sooner than hollows
  return mix(col, dHaze(v), (1.0 - exp(-t * t * exp(-lift))) * dFog.w);
}`,bM=`
varying vec3 dWorld;
uniform sampler2D dRipple, dGrain, dMacro;
uniform vec2 dWind;
uniform vec3 dSandA, dSandB;
uniform float dSheen;
${Gm}`,SM=`
{
  vec2 wp = dWorld.xz;
  float dist = length(vViewPosition);
  vec2 q = vec2(dot(wp, dWind), dot(wp, vec2(-dWind.y, dWind.x))); // x down-wind, y along the ripple crests
  vec3 mac = texture2D(dMacro, q * 0.0061).rgb; // ~165 m drift + wind streaks
  vec3 nW = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
  float calm = smoothstep(0.80, 0.94, nW.y); // slip faces are too steep to hold ripples
  #ifdef D_LOW
    vec2 qw = q;
    float mid = 0.5;
  #else
    vec3 m2 = texture2D(dMacro, q.yx * 0.027 + 0.37).rgb; // ~37 m
    vec2 qw = q + (m2.rb - 0.5) * 1.4; // meander, so ripple lines never run ruler-straight
    float mid = m2.g;
  #endif
  vec4 r1 = texture2D(dRipple, qw / 5.6);
  float k1 = calm * (1.0 - smoothstep(14.0, 55.0, dist)) * (0.45 + 0.7 * mac.b); // fades out with distance: no moir\xE9, no shimmer
  vec2 bump = (r1.xy * 2.0 - 1.0) * k1;
  float grain = 0.5, kg = 0.0;
  #ifndef D_LOW
    const float c = 0.966, s = 0.259;
    vec2 n2 = texture2D(dRipple, vec2(c * qw.x - s * qw.y, s * qw.x + c * qw.y) / 19.0 + 0.5).xy * 2.0 - 1.0; // broad sand waves
    bump += vec2(c * n2.x + s * n2.y, c * n2.y - s * n2.x) * calm * (1.0 - smoothstep(60.0, 160.0, dist)) * 0.35;
    vec3 g = texture2D(dGrain, wp * 2.7).rgb;
    kg = 1.0 - smoothstep(2.5, 11.0, dist);
    bump += (g.xy * 2.0 - 1.0) * kg * 0.45;
    grain = g.z;
  #endif
  vec3 w3 = vec3(dWind.x, 0.0, dWind.y);
  vec3 t1 = normalize(w3 - nW * dot(nW, w3));
  normal = normalize((viewMatrix * vec4(normalize(nW + t1 * bump.x + cross(t1, nW) * bump.y), 0.0)).xyz);

  float rh = mix(0.5, r1.z, k1); // ripple height: crests carry the fine pale grains
  vec3 sand = mix(dSandA, dSandB, smoothstep(0.2, 0.8, mac.r) * 0.75 + (mac.g - 0.5) * 0.5);
  sand *= (0.9 + 0.2 * mid) * (0.9 + 0.2 * rh) * mix(1.0, 0.8 + 0.4 * grain, kg);
  diffuseColor.rgb = sand;
  roughnessFactor = 0.9 - 0.14 * rh * k1;
}`,wM=`
#include <normal_fragment_maps>
{
  float up = normalize((vec4(normal, 0.0) * viewMatrix).xyz).y;
  float n = texture2D(dMacro, dWorld.xz * 0.19 + dWorld.y * 0.11).r;
  float drift = 1.0 - smoothstep(0.03, 0.22 + 0.5 * n, vDH); // sand banked against the base
  drift = max(drift, smoothstep(0.55, 0.95, up) * (0.3 + 0.5 * n) * (1.0 - smoothstep(0.4, 3.5, vDH))); // dust settled on ledges
  diffuseColor.rgb = mix(diffuseColor.rgb, mix(dSandA, dSandB, 0.55), drift * 0.85);
  roughnessFactor = mix(roughnessFactor, 0.92, drift);
  dShade = 0.68 + 0.32 * smoothstep(0.0, 0.5, vDH); // contact shade where stone meets sand
}`;function Hm(n,{surface:e,ruin:t,key:i}){return n.fog=!1,n.onBeforeCompile=s=>{for(let r of Object.keys(Ds))s.uniforms[r]=Ds[r];s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 dWorld;`+(t?`
attribute float dH; varying float vDH;`:"")).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`+(t?`
vDH = dH;`:"")),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
`+bM+(t?`
varying float vDH; float dShade = 1.0;`:"")).replace("#include <normal_fragment_maps>",e).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
`+(t?"reflectedLight.indirectDiffuse *= dShade; reflectedLight.directDiffuse *= 0.5 + 0.5 * dShade;":"reflectedLight.directSpecular *= dSheen;")).replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.rgb = dAerial(gl_FragColor.rgb, dWorld);`)},n.customProgramCacheKey=()=>i,n}function TM(n,e){let t=n.clone();return t.name="desertSand",t.map=t.normalMap=t.roughnessMap=null,t.color.set("#ffffff"),t.vertexColors=!1,e&&(t.defines={...t.defines,D_LOW:1}),Hm(t,{surface:SM,key:"desert-sand"+(e?"-low":"")})}function AM(){let n=new dt({uniforms:{...Ds,dZenith:{value:cr("#2d6cb8")},dSkyMid:{value:cr("#9cc0e0")},dK:{value:new yt(1.1,.4,.14,11)},dFade:{value:0}},side:vi,depthWrite:!1,transparent:!0,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vDir; uniform vec3 dZenith, dSkyMid; uniform vec4 dK; uniform float dFade;
      ${Gm}
      void main(){
        vec3 d = normalize(vDir);
        float up = clamp(d.y, 0.0, 1.0);
        vec3 col = mix(dHaze(d), dSkyMid, 1.0 - exp(-up * 6.5)); // the haze layer thins quickly above the horizon
        col = mix(col, dZenith, smoothstep(0.04, 0.8, up));
        float a = sqrt(max(2.0 - 2.0 * dot(d, dSun), 0.0)); // angle from the sun, radians
        col += vec3(1.0, 0.78, 0.5) * (exp(-a * 22.0) * dK.x + exp(-a * 6.0) * dK.y + exp(-a * 2.0) * dK.z) * (0.35 + 0.65 * smoothstep(-0.03, 0.08, d.y));
        col += vec3(1.0, 0.93, 0.8) * smoothstep(0.0135, 0.0095, a) * dK.w; // the disc itself
        gl_FragColor = vec4(col, dFade);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Ue(new qt(430,48,24),n);return e.name="DesertSky",e.renderOrder=-9,e.frustumCulled=!1,e.userData.dynamic=!0,e}function EM(n){let e=n.geometry.attributes.position,t=Math.round(Math.sqrt(e.count))-1,i=e.getX(0),s=e.getZ(0),r=(e.getX(e.count-1)-i)/t,a=(e.getZ(e.count-1)-s)/t;return(o,l)=>{let c=(o-i)/r,h=(l-s)/a;if(c<0||h<0||c>t||h>t)return 0;let u=Math.min(t-1,Math.floor(c)),d=Math.min(t-1,Math.floor(h)),f=c-u,p=h-d,v=d*(t+1)+u;return(e.getY(v)*(1-f)+e.getY(v+1)*f)*(1-p)+(e.getY(v+t+1)*(1-f)+e.getY(v+t+2)*f)*p}}function Wm(n,{M:e,quality:t,G:i}){let s=t==="low",r=a=>new Ln().loadAsync(`${i.base}assets/desert/${a}`).then(o=>(o.wrapS=o.wrapT=Zt,o.colorSpace=wn,o.flipY=!1,o.anisotropy=s?2:8,o));Promise.all([r("ripple.jpg"),r("grain.jpg"),r("macro.jpg")]).then(([a,o,l])=>{Ds.dRipple.value=a,Ds.dGrain.value=o,Ds.dMacro.value=l;let c=TM(e.sand,s),h=EM(n.terrain),u=new Map;n.group.traverse(v=>{if(v.isMesh){if(v===n.terrain||v.material===e.sand)v.material=c;else if([e.stone,e.stoneDark,e.plaster,e.carved].includes(v.material)){let g=v.geometry.attributes.position,m=new Float32Array(g.count);for(let _=0;_<g.count;_++)m[_]=g.getY(_)-h(g.getX(_),g.getZ(_));v.geometry.setAttribute("dH",new $e(m,1)),u.has(v.material)||u.set(v.material,Hm(v.material.clone(),{surface:wM,ruin:!0,key:"desert-ruin"})),v.material=u.get(v.material)}}});let d=n.env;Object.assign(d,{sun:4.2,sunColor:"#ffc98f",hemi:.7,sky:"#a9bfe0",groundCol:"#c98d55",env:.42,fog:"#e6c49c",fogNear:70,fogFar:900,exposure:.95,zenith:"#5d86a8",horizon:"#f2c894",clouds:0}),Ds.dSun.value.fromArray(d.sunDir).normalize();let f=AM();n.group.add(f),n.look={U:Ds,sky:f,sand:c};let p=n.update;n.update=(v,g,m)=>{p.call(n,v,g,m);let _=Math.min(1,Math.max(0,(-161-m.z)/8));f.visible=_>.002,f.material.uniforms.dFade.value=_*_*(3-2*_),f.position.copy(m)}}).catch(a=>console.warn("desert look: keeping the original desert \u2014",a))}var Zo=new P;function on(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Zo.copy(e),Zo[i]=0,Zo.normalize();let c=.5*a/(a+o),h=1-Zo.angleTo(n)/l;return Math.sign(Zo[t])===1?h*c:o/(a+o)+c+c*(1-h)}var wh=class n extends fi{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,v=new P,g=.5/a;for(let m=0,_=0;m<u.length;m+=3,_+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[_+0]=on(v,c,"z","y",r,i),f[_+1]=1-on(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-on(v,c,"z","y",r,i),f[_+1]=1-on(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-on(v,c,"x","z",r,e),f[_+1]=on(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),f[_+0]=1-on(v,c,"x","z",r,e),f[_+1]=1-on(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),f[_+0]=1-on(v,c,"x","y",r,e),f[_+1]=1-on(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=on(v,c,"x","y",r,e),f[_+1]=1-on(v,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var CM=new P(1,0,0),Km=new P(0,0,1),RM=new pt,PM=n=>Math.min(1,Math.max(0,n)),IM=n=>1-(1-n)**3;function hr(n,e){n.updateMatrixWorld(!0);let t=new wt().setFromObject(n),i=t.getSize(new P),s=t.getCenter(new P),r=e/Math.max(i.x,i.y,i.z);n.scale.multiplyScalar(r),n.position.sub(s).multiplyScalar(r);let a=new Te;return a.add(n),a}function $m(n,e){return n.quaternion.setFromUnitVectors(new P(...e).normalize(),Km),n}var Xm={Gold:"gold",Pearl:"pearl",Brass:"brass",BrassDark:"brassDark",Copper:"copper",CeramicTeal:"ceramicTeal",CeramicCream:"ceramicCream",CeramicOchre:"ceramicOchre",Clay:"clay",Velvet:"velvet",VelvetRed:"velvetRed",Emerald:"emerald",Ruby:"ruby"};function Gn(n,e,t={}){return n.traverse(i=>{if(!i.isMesh)return;i.castShadow=!0;let s=i.material?.name,r=t[s]??(Xm[s]&&e[Xm[s]]);r&&(i.material=r)}),n}var qm=new WeakMap,Jm=new WeakMap;function Hd(n){let e=qm.get(n);if(e)return e;e={cuff:null,beads:null,buds:null,leaves:[],flowers:[]},n.traverse(i=>{let s=i.name;if(s==="cuff"||s==="beads"||s==="buds")e[s]=i;else if(/^leaf_\d+$/.test(s))e.leaves.push(i);else if(/^flower_\d+$/.test(s))e.flowers.push(i);else return;Jm.set(i,{q:i.quaternion.clone(),s:i.scale.clone()})});let t=(i,s)=>i.name.localeCompare(s.name);return e.leaves.sort(t),e.flowers.sort(t),qm.set(n,e),e}function Hn(n,e){let t=Hd(n),i=(s,r,a,o)=>{if(!s)return;let l=Jm.get(s),c=IM(PM(r));s.visible=r>0,s.scale.copy(l.s).multiplyScalar(Math.max(.001,c)),s.quaternion.copy(l.q),a&&s.quaternion.multiply(RM.setFromAxisAngle(a,(1-c)*o))};i(t.cuff,e/.25),t.leaves.forEach((s,r,a)=>i(s,(e-.15-r/a.length*.25)/.2,CM,-1.3)),t.flowers.forEach((s,r,a)=>i(s,(e-.62-r/a.length*.16)/.1,Km,2.2)),i(t.buds,(e-.82)/.12),i(t.beads,(e-.88)/.12)}function ga(n,e,t=0){let i=Hd(n),s=e==="leaf"?i.leaves:i.flowers,r=s[t%s.length].clone();return r.position.set(0,0,0),r.quaternion.identity(),r.scale.set(1,1,1),r.visible=!0,r}function Wd(n){let e=Hd(n),t=new P;return e.flowers.map((i,s)=>({i:s,d:new wt().setFromObject(ga(n,"flower",s)).getSize(t).length()})).sort((i,s)=>s.d-i.d).map(i=>i.i)}function Qm(n,e,t){let i=ga(n,"leaf",e),s=t/Math.max(1e-6,new wt().setFromObject(i).getSize(new P).y);i.scale.setScalar(s),i.rotation.z=-Math.PI/2;let r=new Te;return r.add(i),r}function Xd(n,e,t){let i=ga(n,"flower",e),s=new wt().setFromObject(i).getSize(new P);i.scale.setScalar(t/Math.max(1e-6,s.x,s.y));let r=new Te;return r.add(i),r.userData.petalMesh=i,r}var qd=["prop-lantern-star","prop-lantern-dome","prop-lantern-hex","prop-lantern-tall","prop-lantern-small","prop-dallah","prop-ewer","prop-brass-vase","prop-oil-lamp","prop-metal-box","prop-tray","prop-bells","prop-bowl-a","prop-bowl-b","prop-vase-a","prop-vase-b","prop-jar","prop-jewel-box","prop-mirror","prop-textile-stack","prop-carpet-roll","prop-carpet-flat","prop-pearl-strands","prop-bangles"],ma=qd.slice(0,5),DM={"prop-dallah":"Brass dallah","prop-ewer":"Copper ewer","prop-brass-vase":"Engraved vase","prop-oil-lamp":"Oil lamp"};function LM(n){let e=n>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function e0(n,e){for(let t of Object.values(n))Gn(t,e),t.traverse(i=>{i.isMesh&&(i.receiveShadow=!0,i.material.name==="CarvedWood"&&i.material.color.set("#8d6c52"),/^Carpet|^Textile/.test(i.material.name)&&(i.material.color.set("#b9a796"),i.material.roughness=.95))})}function t0({props:n,group:e,rows:t,bays:i,left:s,right:r,M:a,seed:o=1307}){let l=LM(o),c={glass:null,lift:[],boxes:[],lanterns:[],carpets:[],lights:[],statics:[],anims:new Set};if(!n||!n["prop-dallah"])return c;let h=c.glass=new Yt({name:"LampGlass",color:"#ffcf8f",emissive:"#ff9a3c",emissiveIntensity:1.7,roughness:.4,side:2}),u=b=>b<0?Math.PI/2:-Math.PI/2,d=(b,x,M,S,E=0,y=!1)=>{let w=n[b];if(!w)return null;let A=w.clone(!0);return A.position.set(x,M,S),A.rotation.y=E,A.traverse(I=>I.isMesh&&I.material.name==="LampGlass"&&(I.material=h)),e.add(A),y?A.userData.dynamic=!0:c.statics.push(A),A},f=(b,x,M,S)=>{let E=new Ue(new Xt(.006,.006,x-M,5),a.brassDark);E.position.set(b,(x+M)/2,S),e.add(E),c.statics.push(E)},p=(b,x,M,S,E)=>{let y=d(b,x,M,S,l()*Math.PI*2,E),w=new wt().setFromObject(y).getSize(new P).y;if(c.lights.push({position:new P(x,M-w*.55,S),color:"#ffb35e",intensity:1.4,distance:4.2,flicker:!0}),E){let A=h.clone();y.traverse(I=>I.isMesh&&I.material===h&&(I.material=A)),c.lanterns.push({obj:y,mat:A,boost:0,pos:new P(x,M-w*.55,S)})}return y};t.forEach((b,x)=>{if(!(x===0||x===t.length-1||Math.abs(b+11.1)<.2||Math.abs(b+23.7)<.2))for(let M of[-1,1]){let S=ma[(x*2+(M>0?1:0)+Math.floor(l()*2))%ma.length],E=M*(1.5+l()*.55),y=4.25+l()*.55;f(E,5.29,y,b),p(S,E,y,b,(x+(M>0?1:0))%2===0)}}),t.slice(0,-1).forEach((b,x)=>{if(x%3===2||x===0)return;let M=(l()-.5)*1.4,S=b-2.1+(l()-.5)*.8,E=4.55+l()*.35;f(M,5.32,E,S),p(ma[(x+2)%ma.length],M,E,S,!1)});let v={ceramics:[[0,2,4,6],b=>-1.4+b*.46],brass:[[0,2,4],b=>-1.35+b*.54],lanterns:[[0,2,4],b=>-1.3+b*.65]},g={ceramics:[["prop-bowl-a","prop-vase-a","prop-jar","prop-bowl-b"],["prop-vase-b","prop-bowl-b","prop-vase-a","prop-jar"],["prop-jar","prop-bowl-a","prop-vase-b","prop-vase-a"]],brass:[["prop-dallah","prop-brass-vase","prop-ewer"],["prop-oil-lamp","prop-ewer","prop-dallah"]],lanterns:[["prop-oil-lamp","prop-metal-box","prop-brass-vase"],["prop-metal-box","prop-dallah","prop-oil-lamp"]]},m={},_=(b,x,M)=>{let S=m[M]=(m[M]??-1)+1,E=b*2.95;if(v[M]){let[y,w]=v[M],A=g[M][S%g[M].length];y.forEach((I,C)=>{let L=A[C%A.length],D=M==="brass"||M==="lanterns"&&L!=="prop-metal-box",U=d(L,E+(l()-.5)*.08,.85,x+w(I),u(b)+(l()-.5)*.5,D||L==="prop-metal-box");D&&U&&c.lift.push({obj:U,name:DM[L]||"Brass piece",y:U.position.y,rot:U.rotation.y}),L==="prop-metal-box"&&U&&c.boxes.push(Ym(U,"Engraved box"))})}if(M==="lanterns")for(let y=0;y<3;y++){let w=b*(3.75+(l()-.5)*.9),A=2.75+l()*.6,I=x+(y-1)*1.1+(l()-.5)*.4;f(w,3.6,A,I),p(ma[(S*3+y)%ma.length],w,A,I,!1)}if(M==="charms"){let y=d("prop-jewel-box",E,.8,x-.4,u(b)+.25,!0);c.boxes.push(Ym(y,"Jewellery box")),d("prop-mirror",E+b*.05,.8,x+.8,u(b)-.35);for(let w of[-1.75,1.75])d("prop-bells",b*2.75,3.3,x+w,l()*6.28)}if(M==="textiles"||M==="cushions"){let y=d("prop-carpet-flat",b*2.15,.012,x+.05,Math.PI/2+(l()-.5)*.12,!0);y.traverse(w=>{w.isMesh&&/Carpet/.test(w.material.name)&&(w.material=w.material.clone())}),c.carpets.push({obj:y,glow:0,hover:!1,pos:y.position.clone()}),M==="textiles"&&(d("prop-textile-stack",b*2.85,0,x+.2,u(b)+(l()-.5)*.4),d("prop-carpet-roll",b*3.95,0,x-1.45,Math.PI/2))}if(M==="spices"&&d("prop-bells",b*3.9,1.69,x+1.5,l()*6.28),M==="gold"){["prop-bangles","prop-pearl-strands","prop-metal-box","prop-bangles","prop-pearl-strands","prop-jewel-box"].forEach((w,A)=>d(w,E,.945,x-1.2+A*.48,u(b)+(l()-.5)*.6));for(let w=0;w<4;w++){let A=new Ue(new qt(.014,10,8),a.gold);A.scale.set(1,1.5,1),A.position.set(b*4.8,2.08,x-1.2+w*.8),e.add(A),c.statics.push(A)}}};return i.forEach((b,x)=>{_(-1,b,s[x]),_(1,b,r[x])}),c}function Ym(n,e){let t=null;return n.traverse(i=>i.name==="lid"&&(t=i)),{obj:n,lid:t,name:e,open:0,target:0}}function i0(n,e){let t=n.interactions,i=n.audio;for(let s of e.lift)t.add({object:s.obj,proxy:.22,label:`Lift and turn \xB7 ${s.name}`,range:2.8,highlight:.25,onSelect:()=>{s.busy||(s.busy=.001,i.play("charms_tinkle",{position:s.obj.position,volume:.35,rate:1.15}),e.anims.add(r=>{let a=Math.min(1,s.busy+=r/3.2),o=Math.sin(Math.PI*a);if(s.obj.position.y=s.y+.14*o*o,s.obj.rotation.y=s.rot+Math.PI*2*(a*a*(3-2*a)),a>=1)return s.busy=0,s.obj.rotation.y=s.rot,!0}))}});for(let s of e.boxes)t.add({object:s.obj,proxy:.16,label:()=>s.target?`Close \xB7 ${s.name}`:`Open \xB7 ${s.name}`,range:2.8,highlight:.25,onSelect:()=>{s.target=s.target?0:1,i.play(s.target?"pickup":"place_click",{position:s.obj.position,volume:.5}),s.target&&i.play("sparkle",{position:s.obj.position,volume:.25,delay:.35})}});for(let s of e.lanterns)t.add({object:s.obj,proxy:.25,label:"Brighten the lantern",range:4.6,highlight:0,onSelect:()=>{s.boost=.55,i.play("lantern_on",{position:s.pos,volume:.45})}});for(let s of e.carpets)t.add({object:s.obj,label:"Hand-woven carpet",range:3.2,highlight:0,onHover:r=>{s.hover=r,r&&i.play("cloth_flutter",{position:s.pos,volume:.18})},onSelect:()=>{s.hover=!0,s.glow=1,i.play("cloth_flutter",{position:s.pos,volume:.3})}})}function n0(n,e,t,i){if(n.glass){n.glass.emissiveIntensity=i*.62;for(let s of n.lanterns){let r=t?Math.max(0,1-t.distanceTo(s.pos)/2.6)*.18:0;s.boost=Math.max(r,s.boost-e*.35),s.mat.emissiveIntensity=i*.62*(1+s.boost)}for(let s of n.boxes){if(!s.lid)continue;s.open+=Math.sign(s.target-s.open)*Math.min(Math.abs(s.target-s.open),e*1.6);let r=s.open*s.open*(3-2*s.open);s.lid.rotation.x=-1.25*r}for(let s of n.carpets)s.glow+=((s.hover?1:0)-s.glow)*Math.min(1,e*5),s.obj.traverse(r=>{!r.isMesh||!/Carpet/.test(r.material.name)||(r.material.emissiveMap=r.material.map,r.material.emissive.set("#fff1d6"),r.material.emissiveIntensity=.32*s.glow,r.material.userData.kpEmissive||(r.material.userData.kpEmissive=!0,r.material.needsUpdate=!0))});for(let s of n.anims)s(e)&&n.anims.delete(s)}}var Gd=new P,Th=new P,jm=new P,NM=n=>((n+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,Ah=class{constructor(e,t,{P:i,N:s,Ke:r,park:a,parkYaw:o=0}){Object.assign(this,{G:e,carpet:t,P:i,N:s,Ke:r}),this.parkPos=a.clone(),this.parkYaw=o,this.height=.55,this.riding=this.flying=!1,this.bank=0,this.lookTimer=4,t.rotation.order="YXZ",this.park(this.parkPos,o);let l=e.monkey,c=l.walk.bind(l),h=l.face.bind(l),u=l.stand.bind(l),d=l.faceAsync?.bind(l);l.walk=(f,p)=>this.riding?this.fly(f,p):c(f,p),l.face=f=>this.riding?this.turnTo(f):h(f),d&&(l.faceAsync=f=>this.riding?(this.turnTo(f),s(.5)):d(f)),l.stand=()=>this.riding?(l.sitting=!0,l.play("idle")):u()}ground(e,t){return this.G.nav.ground(e,t)}park(e,t){this.carpet.position.copy(e),this.yaw=this.yawTarget=t,this.carpet.rotation.set(0,t,0)}board(){if(this.riding)return Promise.resolve();if(this.boarding)return this.boarding;let e=this.G.monkey,t=this.carpet,i=new P(0,.02,.05),s=new P(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=t.position.clone().addScaledVector(s,-1.05).setY(0);return this.boarding=(async()=>{await e.walk([r]),e.face(t.position),await this.N(.3),t.updateWorldMatrix(!0,!1);let a=e.root.position.clone(),o=i.clone().applyMatrix4(t.matrixWorld);this.G.audio.play("cloth_flutter",{position:o,volume:.35}),await this.P(.75,l=>{e.root.position.lerpVectors(a,o,l),e.root.position.y+=Math.sin(Math.PI*l)*.3}),e.attach(t,i,Math.PI),this.riding=!0,await e.sit()})()}whenBoarded(){return this.riding?Promise.resolve():this.boarding||this.board()}fly(e,t={}){let i=this.carpet,s=[new P(i.position.x,0,i.position.z)];for(let f of e)Math.hypot(f.x-s.at(-1).x,f.z-s.at(-1).z)>.15&&s.push(new P(f.x,0,f.z));if(s.length<2)return Promise.resolve();let r=new ji(s,!1,"centripetal"),a=r.getLength(),o=t.run?2.1:t.speed??1.05,l=this.G.monkey,c=0,h=0,u=!1,d=1.5;return this.flying=!0,this.Ke(f=>{let p=this.G.player.head(Gd),v=Math.hypot(p.x-i.position.x,p.z-i.position.z);t.lead&&(u&&v<t.lead.resume?(u=!1,l.look(null)):!u&&v>t.lead.wait&&(u=!0,d=1.2));let g=u?0:o,m=r.getPointAt(1,Th);!u&&Math.hypot(p.x-m.x,p.z-m.z)<Math.hypot(i.position.x-m.x,i.position.z-m.z)-1&&(g*=1.6),h+=(g-h)*Math.min(1,f*2.5),c=Math.min(a,c+h*f);let _=c/a,b=r.getPointAt(_,Th),x=r.getTangentAt(Math.min(.999,_),jm);return i.position.x=b.x,i.position.z=b.z,this.hover(f,3),h>.05&&(this.yawTarget=Math.atan2(-x.x,-x.z)),u?(l.look(p),(d-=f)<0&&(d=4.5,l.gesture("beckon"))):this.glance(f,p),c>=a-.001?(this.flying=!1,l.look(null),!0):!1})}glance(e,t){let i=this.G.monkey;this.lookTimer-=e,this.lookTimer<0&&this.lookTimer>-1.6?i.look(t):this.lookTimer<=-1.6&&(this.lookTimer=5+Math.random()*3,i.look(null))}turnTo(e){let t=this.carpet;Math.hypot(e.x-t.position.x,e.z-t.position.z)>.05&&(this.yawTarget=Math.atan2(-(e.x-t.position.x),-(e.z-t.position.z)))}hover(e,t=2){let i=this.carpet,s=this.G.clock?.time??performance.now()/1e3,r=this.ground(i.position.x,i.position.z)+this.height+Math.sin(s*1.4)*.025;i.position.y+=(r-i.position.y)*Math.min(1,e*t)}followFlight(e,t){let i=this.carpet,s=Math.min(1,t/.06),r=Math.min(1,t+.045*s*s*(3-2*s)),a=e.getPointAt(r,Gd),o=e.getTangentAt(Math.min(.999,r),Th),l=jm.set(-o.z,0,o.x).normalize();this.side===void 0&&(this.side=Math.sign(l.dot(Gd.clone().sub(this.parkPos).negate()))||-1),i.position.copy(a).addScaledVector(l,1.85*this.side),i.position.y+=.22*s+Math.sin(t*37)*.04*s;let c=this.G.camera.getWorldPosition(Th),h=i.position.clone().sub(c);h.length()<1.6&&i.position.copy(c).addScaledVector(h.normalize(),1.6),this.yawTarget=Math.atan2(-o.x,-o.z),this.flying=t<.999}tick(e){let t=this.carpet,i=NM(this.yawTarget-this.yaw),s=i*Math.min(1,e*(this.flying?3:1.8));this.yaw+=s,this.bank+=(Math.max(-.16,Math.min(.16,-s/Math.max(e,1e-4)*.09))-this.bank)*Math.min(1,e*4),t.rotation.set(0,this.yaw,this.bank),this.riding&&!this.flying?this.hover(e,2):!this.riding&&!this.boarding&&(t.position.y=this.parkPos.y+Math.sin((this.G.clock?.time??0)*1.1)*.03)}applyState(e,t,i){let s=this.G.monkey;if(this.flying=this.riding=!1,this.boarding=null,this.side=void 0,!["workshop","gallery","desert","finale"].includes(e))return this.park(this.parkPos,this.parkYaw);this.park(new P(t.x,this.ground(t.x,t.z)+this.height,t.z),i-Math.PI),s.attach(this.carpet,new P(0,.02,.05),Math.PI),this.riding=!0,s.sitting=!0,s.play("idle")}},Zm=new WeakMap;function s0(n,e,t,i,s,r,a){let o=Zm.get(n);o||Zm.set(n,o=[]);let l=.001,c=.004,h=.003,u=(_,b,x,M)=>Math.min(b,M)-Math.max(_,x)>.001,d=s-e/2,f=s+e/2,p=r-t/2,v=r+t/2,g=a-i/2,m=a+i/2;for(let _ of o){let b=u(d,f,_.x0,_.x1)&&u(g,m,_.z0,_.z1),x=u(p,v,_.y0,_.y1)&&u(g,m,_.z0,_.z1),M=u(d,f,_.x0,_.x1)&&u(p,v,_.y0,_.y1);b&&Math.abs(v-_.y1)<l&&(v=_.y1+c),b&&Math.abs(p-_.y0)<l&&(p=_.y0-c),x&&Math.abs(f-_.x1)<l&&(f=_.x1+h),x&&Math.abs(d-_.x0)<l&&(d=_.x0-h),M&&Math.abs(m-_.z1)<l&&(m=_.z1+h),M&&Math.abs(g-_.z0)<l&&(g=_.z0-h)}return o.push({x0:d,x1:f,y0:p,y1:v,z0:g,z1:m}),[f-d,v-p,m-g,(d+f)/2,(p+v)/2,(g+m)/2]}(function(){let n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(let i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(let s of i)if(s.type==="childList")for(let r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){let s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),s.credentials=i.crossOrigin==="use-credentials"?"include":i.crossOrigin==="anonymous"?"omit":"same-origin",s}function t(i){if(i.ep)return;i.ep=!0;let s=e(i);fetch(i.href,s)}})();var Vi={time:0,dt:0,real:0,rdt:0,scale:1},Ft=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),S0=(n,e,t)=>n+(e-n)*t,ui=n=>(n=Ft(n),n*n*(3-2*n)),fr=n=>1-(1-Ft(n))**3,r0=n=>(n=Ft(n),n<.5?4*n*n*n:1-(-2*n+2)**3/2),ci=(n,e,t,i)=>S0(n,e,1-Math.exp(-t*i));function Bh(n,e,t,i){return n+(((e-n+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*(1-Math.exp(-t*i))}function gr(n=1){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var Fi=new class{constructor(){this.items=[],this.token={alive:!0}}newToken(){return this.token.alive=!1,this.token={alive:!0},this.token}add(n,e=this.token){return new Promise(t=>this.items.push({step:n,token:e,resolve:t}))}update(n){let e=this.items;for(let t=0;t<e.length;t++){let i=e[t],s=!i.token.alive;!s&&i.step(n)&&(s=!0,i.resolve()),s&&(e.splice(t,1),t--)}}},_t=n=>{let e=0;return Fi.add(t=>(e+=t)>=n)},ls=n=>Fi.add(()=>!!n());function Tt(n,e,t=ui){let i=0;return e(t(0)),Fi.add(s=>{i+=s;let r=Math.min(1,i/n);return e(t(r),r),r>=1})}function Eh(n){let e=0;return Fi.add(t=>n(t,e+=t))}var UM=class{constructor(n){this.canvas=n,this.keys=new Set,this.lookX=0,this.lookY=0,this.primary={down:!1,pressed:!1,released:!1},this.skip=!1,this.locked=!1,this.enabled=!1,this.touch=matchMedia("(pointer: coarse)").matches,this.mouse={x:0,y:0},this.stick={x:0,y:0},this.onPause=null,this.onInteractKey=null,this.dragLook=null,this.wantsLock=!0,addEventListener("keydown",s=>{this.enabled&&!s.target.closest?.("dialog")&&(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"].includes(s.code)&&s.preventDefault(),this.keys.add(s.code),s.code==="Space"&&(this.skip=!0),s.code!=="KeyE"&&s.code!=="Enter"||s.repeat||(this.primary.down=!0,this.primary.pressed=!0,this.keySource=!0),(s.code==="Escape"||s.code==="KeyP")&&this.onPause?.())}),addEventListener("keyup",s=>{this.keys.delete(s.code),s.code==="Space"&&(this.skip=!1),(s.code==="KeyE"||s.code==="Enter")&&this.keySource&&(this.primary.down=!1,this.primary.released=!0,this.keySource=!1)}),addEventListener("blur",()=>this.reset()),n.addEventListener("pointerdown",s=>{this.enabled&&(n.focus(),s.pointerType==="mouse"&&this.wantsLock&&!this.locked&&n.requestPointerLock?.()?.catch?.(()=>{}),this.setMouse(s),(s.pointerType!=="mouse"||!this.wantsLock||this.locked)&&s.button===0&&(this.primary.down=!0,this.primary.pressed=!0),s.pointerType==="mouse"&&this.wantsLock||(this.dragLook={id:s.pointerId,x:s.clientX,y:s.clientY,moved:0},n.setPointerCapture(s.pointerId)))}),n.addEventListener("pointermove",s=>{if(this.enabled){if(this.locked)this.lookX+=s.movementX,this.lookY+=s.movementY;else if(this.setMouse(s),this.dragLook&&this.dragLook.id===s.pointerId&&!this.holdingTarget){let r=s.clientX-this.dragLook.x,a=s.clientY-this.dragLook.y;this.dragLook.moved+=Math.abs(r)+Math.abs(a),this.lookX+=r,this.lookY+=a,this.dragLook.x=s.clientX,this.dragLook.y=s.clientY}}});let e=s=>{this.dragLook?.id===s.pointerId&&(this.dragLook=null),this.primary.down&&!this.keySource&&(this.primary.down=!1,this.primary.released=!0)};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),document.addEventListener("pointerlockchange",()=>{let s=this.locked;this.locked=document.pointerLockElement===n,s&&!this.locked&&this.enabled&&this.wantsLock&&this.onPause?.()});let t=document.getElementById("stick"),i=t?.firstElementChild;if(t){let s=null,r=0,a=0;t.addEventListener("pointerdown",c=>{s=c.pointerId,t.setPointerCapture(s);let h=t.getBoundingClientRect();r=h.left+h.width/2,a=h.top+h.height/2,o(c)});let o=c=>{if(c.pointerId!==s)return;let h=(c.clientX-r)/50,u=(c.clientY-a)/50,d=Math.hypot(h,u);d>1&&(h/=d,u/=d),this.stick.x=h,this.stick.y=u,i.style.transform=`translate(${h*36}px, ${u*36}px)`};t.addEventListener("pointermove",o);let l=()=>{s=null,this.stick.x=this.stick.y=0,i.style.transform=""};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),document.getElementById("touch-act").addEventListener("pointerdown",c=>{c.preventDefault(),this.primary.down=!0,this.primary.pressed=!0,this.touchAct=!0}),document.getElementById("touch-act").addEventListener("pointerup",()=>{this.primary.down=!1,this.primary.released=!0,this.touchAct=!1})}}setMouse(n){this.mouse.x=n.clientX/innerWidth*2-1,this.mouse.y=-(n.clientY/innerHeight)*2+1}reset(){this.keys.clear(),this.skip=!1,this.primary.down=!1,this.dragLook=null}get moveX(){return(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0)+this.stick.x}get moveZ(){return(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)+this.stick.y}get run(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}get centred(){return this.locked||this.keySource||this.touchAct||!this.wantsLock&&this.touch}endFrame(){this.primary.pressed=!1,this.primary.released=!1,this.lookX=0,this.lookY=0}},a0=1.62,Ls=new P,xa=new P,FM=class{constructor(n,e){this.nav=e,this.rig=new Te,this.rig.name="PlayerRig",this.camera=n,n.position.set(0,a0,0),n.rotation.order="YXZ",this.rig.add(n),this.yaw=0,this.pitch=-.05,this.vel=new te,this.frozen=!1,this.mount=null,this.attention=null,this.stepDist=0,this.onStep=null,this.bob=0,this.speed=0,this.radius=.24,this.groundY=0}get position(){return this.rig.position}head(n=new P){return this.camera.getWorldPosition(n)}forward(n=new P){return this.camera.getWorldDirection(n)}teleport(n,e,t=this.yaw,i=!1){this.rig.position.set(n,this.nav.ground(n,e),e),this.groundY=this.rig.position.y,this.vel.set(0,0),i?this.rig.rotation.y=t:(this.yaw=t,this.rig.rotation.y=t,this.pitch=-.05)}lookAt(n,e=2.2,t=2.5){this.attention={point:n.clone?n.clone():n,rate:e,t}}updateDesktop(n,e,t){let i=.0021*(t.sensitivity??1);if(this.lookLock){let f=this.lookDelta||={x:0,y:0};f.x+=e.lookX,f.y+=e.lookY}else(e.lookX||e.lookY)&&(this.attention=null),this.yaw-=e.lookX*i,this.pitch=Ft(this.pitch-e.lookY*i,-1.35,1.35);if(this.attention){let f=this.attention;f.t-=n,this.head(Ls),xa.copy(f.point).sub(Ls);let p=Math.atan2(-xa.x,-xa.z),v=Math.atan2(xa.y,Math.hypot(xa.x,xa.z));this.yaw=Bh(this.yaw,p,f.rate,n),this.pitch=ci(this.pitch,Ft(v,-.9,.9),f.rate,n),f.t<=0&&(this.attention=null)}let s=e.moveX,r=e.moveZ,a=Math.hypot(s,r);a>1&&(s/=a,r/=a);let o=(e.run?3.1:1.85)*(this.frozen||this.mount?0:1),l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=(s*c+r*l)*o,u=(-s*l+r*c)*o;this.vel.x=ci(this.vel.x,h,5,n),this.vel.y=ci(this.vel.y,u,5,n),this.walk(n),this.rig.rotation.y=this.yaw,this.camera.rotation.set(this.pitch,0,0);let d=t.reduced?0:.005;this.camera.position.y=a0+Math.sin(this.bob*Math.PI*2)*d*Math.min(1,this.speed/1.8)}updateXR(n,e,t){let i=this.camera,s=e.x,r=e.y;(Math.hypot(s,r)<.18||this.frozen||this.mount)&&(s=r=0);let a=i.getWorldDirection(Ls),o=Math.atan2(-a.x,-a.z),l=Math.sin(o),c=Math.cos(o),h=1.6;this.vel.x=ci(this.vel.x,(s*c+r*l)*h,10,n),this.vel.y=ci(this.vel.y,(-s*l+r*c)*h,10,n),this.walk(n,!0)}walk(n,e=!1){let t=this.rig.position;if(this.mount){this.mount.object.updateWorldMatrix(!0,!1),Ls.copy(this.mount.offset).applyMatrix4(this.mount.object.matrixWorld),t.copy(Ls),this.speed=0;return}let i=this.vel.x*n,s=this.vel.y*n,r=0,a=0;e&&(this.head(Ls),r=Ls.x-t.x,a=Ls.z-t.z);let[o,l]=this.nav.move(t.x+r,t.z+a,i,s,this.radius),c=o-(t.x+r),h=l-(t.z+a);t.x+=c,t.z+=h;let u=Math.hypot(c,h);this.speed=n>0?u/n:0;let d=this.nav.ground(t.x+r,t.z+a);this.groundY=ci(this.groundY,d,12,n),t.y=this.groundY+(e&&this.seatLift||0),this.bob+=u/1.5,this.stepDist+=u,this.stepDist>.72&&(this.stepDist=0,this.onStep?.(t))}},Yd=new Ve,cs=new P,OM=new P;function kM(){let n=new Te,e=new Yt({color:"#2a241c",roughness:.5,metalness:.3}),t=new Yt({color:"#c9a35d",roughness:.3,metalness:1}),i=new Ue(new Yr(.014,.07,6,12),e);i.rotation.x=Math.PI/2-.35,i.position.set(0,-.012,.04),n.add(i);let s=new Ue(new Zi(.022,.003,6,24),t);s.position.set(0,.008,-.01),s.rotation.x=.3,n.add(s);let r=new Ue(new qt(.006,10,8),new Nt({color:"#ffe3a8"}));return r.position.set(0,.008,-.03),n.add(r),n}var BM=class{constructor(n,e,t){this.renderer=n,this.player=e,this.nav=t,this.session=null,this.supported=!1,this.hands=[],this.stick={x:0,y:0},this.onStart=null,this.onEnd=null,this.onMenu=null,this.skipHeld=!1,this.snapReady=!0,this.teleportAim=null,n.xr.enabled=!0,n.xr.setReferenceSpaceType("local-floor");for(let s=0;s<2;s++)this.hands.push(this.makeHand(s));let i=new at().setFromPoints(Array(40).fill(0).map(()=>new P));this.arc=new is(i,new Ss({color:"#f1d18f",transparent:!0,opacity:.85})),this.arc.frustumCulled=!1,this.arc.visible=!1,this.marker=new Ue(new Ks(.22,.3,40),new Nt({color:"#f1d18f",transparent:!0,opacity:.9,side:2,depthWrite:!1})),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,n.xr.addEventListener("sessionstart",()=>{this.session=n.xr.getSession(),this.onStart?.()}),n.xr.addEventListener("sessionend",()=>{this.session=null,this.arc.visible=this.marker.visible=!1,this.onEnd?.()})}attach(n){n.add(this.arc,this.marker);for(let e of this.hands)this.player.rig.add(e.ray,e.grip)}makeHand(n){let e=this.renderer.xr,t=e.getController(n),i=e.getControllerGrip(n),s=new Ue(new Xt(.0016,.0016,1,6,1,!0).translate(0,.5,0).rotateX(-Math.PI/2),new Nt({color:"#f3dca8",transparent:!0,opacity:.55,depthWrite:!1}));s.scale.z=3,t.add(s);let r=new Ue(new qt(.008,10,8),new Nt({color:"#fff1cc"}));r.visible=!1,t.add(r),i.add(kM());let a={index:n,ray:t,grip:i,line:s,dot:r,source:null,pointer:{id:"xr"+n,ray:new xn,down:!1,pressed:!1,released:!1,primary:!1,xr:!0,grip:i}},o=()=>{a.pointer.down=!0,a.pointer.pressed=!0,this.pulse(a,.25,30)},l=()=>{a.pointer.down=!1,a.pointer.released=!0};return t.addEventListener("selectstart",o),t.addEventListener("selectend",l),t.addEventListener("squeezestart",o),t.addEventListener("squeezeend",l),t.addEventListener("connected",c=>{a.source=c.data,a.pointer.primary=c.data.handedness!=="left",t.visible=i.visible=c.data.targetRayMode==="tracked-pointer"}),t.addEventListener("disconnected",()=>{a.source=null,t.visible=i.visible=!1}),a}pulse(n,e=.3,t=40){try{n.source?.gamepad?.hapticActuators?.[0]?.pulse?.(e,t)}catch{}}pulseAll(n,e){for(let t of this.hands)this.pulse(t,n,e)}async check(){if(!navigator.xr||!isSecureContext)return this.supported=!1;try{this.supported=await navigator.xr.isSessionSupported("immersive-vr")}catch{this.supported=!1}return this.supported}async enter(){if(this.session){await this.session.end();return}let n=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]}),e=!n.enabledFeatures||n.enabledFeatures.includes("local-floor");this.renderer.xr.setReferenceSpaceType(e?"local-floor":"local"),this.floorOffset=e?0:1.6,await this.renderer.xr.setSession(n)}pointers(){return this.hands.filter(n=>n.source&&n.ray.visible!==!1).map(n=>n.pointer)}update(n,e,t){if(!this.session)return;this.player.seatLift=e.seated?.45:0;let i=!1;this.skipHeld=!1,this.stick.x=this.stick.y=0;for(let s of this.hands){let r=s.pointer;s.ray.updateWorldMatrix(!0,!1),Yd.identity().extractRotation(s.ray.matrixWorld),r.ray.origin.setFromMatrixPosition(s.ray.matrixWorld),r.ray.direction.set(0,0,-1).applyMatrix4(Yd);let a=s.source?.gamepad;if(!a)continue;let o=a.axes,l=o[2]??o[0]??0,c=o[3]??o[1]??0,h=a.buttons;h[4]?.pressed&&(this.skipHeld=!0);let u=!!h[5]?.pressed;u&&!s.menuHeld&&(i=!0),s.menuHeld=u,s.source.handedness==="left"&&e.smoothLocomotion?(this.stick.x=l,this.stick.y=c):this.handleRightStick(s,l,c,n,e);let d=r.hit;s.line.scale.z=d?d.distance:3,s.dot.visible=!!d,d&&s.dot.position.set(0,0,-d.distance),s.line.material.opacity=d?.9:.4,r.hoverIt!==s.lastHover&&(r.hoverIt&&this.pulse(s,.12,15),s.lastHover=r.hoverIt)}i&&this.onMenu?.()}handleRightStick(n,e,t,i,s){if(Math.abs(e)>.7&&this.snapReady&&Math.abs(t)<.6&&(this.snapReady=!1,this.snapTurn(-Math.sign(e)*(Math.PI/6))),Math.abs(e)<.3&&(this.snapReady=!0),t<-.7&&!this.player.mount&&!this.player.frozen)this.aimTeleport(n),this.teleportHand=n;else if(this.teleportHand===n){if(this.teleportAim){this.player.head(cs);let r=this.player.rig.position;r.x+=this.teleportAim.x-cs.x,r.z+=this.teleportAim.z-cs.z,r.y=this.nav.ground(this.teleportAim.x,this.teleportAim.z),this.player.groundY=r.y,this.pulse(n,.3,40)}this.teleportHand=null,this.teleportAim=null,this.arc.visible=this.marker.visible=!1}}aimTeleport(n){let e=cs.setFromMatrixPosition(n.ray.matrixWorld),t=OM.set(0,0,-1).applyMatrix4(Yd.identity().extractRotation(n.ray.matrixWorld)),i=this.arc.geometry.attributes.position,s=t.clone().multiplyScalar(7),r=e.clone(),a=null,o=0;for(;o<40;o++){if(i.setXYZ(o,r.x,r.y,r.z),a)continue;let c=this.nav.ground(r.x,r.z);r.y<=c&&o>0?(a=r.clone(),a.y=c):(r.addScaledVector(s,.05),s.y-=9.8*.05)}i.needsUpdate=!0;let l=a&&this.nav.walkable(a.x,a.z,.25)&&a.distanceTo(e)<9;this.arc.visible=!0,this.arc.material.color.set(l?"#f1d18f":"#a0614f"),this.marker.visible=!!l,l&&this.marker.position.set(a.x,a.y+.03,a.z),this.teleportAim=l?a:null}snapTurn(n){let e=this.player.rig;this.player.head(cs);let t=cs.clone();e.rotation.y+=n,e.updateMatrixWorld(!0),this.player.head(cs),e.position.x+=t.x-cs.x,e.position.z+=t.z-cs.z}},jd=new ta,o0=new P,zM=new fe("#ffcf7a"),VM=class{constructor(){this.items=[],this.reactors=[],this.pointers=[],this.hover=null,this.holdProgress=0,this.onHoverSound=null}add(n){let e=Object.assign({kind:"press",range:5,enabled:!0,holdTime:1.2,highlight:!0,hovered:!1,proximity:0},n);if(e.hits=n.hits||[n.object],n.proxy){let t=n.object;t.updateWorldMatrix(!0,!0);let i=new wt().setFromObject(t).getCenter(new P),s=t.getWorldScale(new P).x||1,r=new Ue(new qt(n.proxy/s,10,8),new Nt({visible:!1}));r.position.copy(t.worldToLocal(i)),t.add(r),e.proxyMesh=r,e.hits=[...e.hits,r]}for(let t of e.hits)t.traverse(i=>{(i.userData.its||=[]).push(e)});return e.highlight&&(e.mats=[],e.object.traverse(t=>{t.isMesh&&t.material?.emissive&&(t.userData.ownMaterial||(t.material=t.material.clone(),t.userData.ownMaterial=!0),e.mats.push({m:t.material,base:t.material.emissive.clone(),baseI:t.material.emissiveIntensity}))}),e.glow=0),this.items.push(e),e}remove(n){if(n){this.items=this.items.filter(e=>e!==n),this.setGlow(n,0),n.proxyMesh&&n.proxyMesh.removeFromParent();for(let e of n.hits)e.traverse(t=>{t.userData.its&&(t.userData.its=t.userData.its.filter(i=>i!==n))})}}react(n){let e=Object.assign({radius:4,value:0},n);return this.reactors.push(e),e}isOn(n){return typeof n.enabled=="function"?n.enabled():n.enabled}setGlow(n,e){if(n.mats){let t=typeof n.highlight=="number"?n.highlight:1;for(let{m:i,base:s,baseI:r}of n.mats)i.emissive.copy(s).lerp(zM,e*.55*t),i.emissiveIntensity=r+e*.35*t}}update(n,e,t,i){let s=this.items.filter(a=>this.isOn(a)&&a.object.visible!==!1),r=[];for(let a of s)for(let o of a.hits)r.push(o);this.hover=null,this.holdProgress=0;for(let a of e){let o=null;if(a.captured&&!s.includes(a.captured)&&(a.captured=null),r.length){jd.ray.copy(a.ray),jd.far=12;let c=jd.intersectObjects(r,!0);for(let h of c){let u=h.object,d=null;for(;u&&!d;){let f=u.userData.its;if(f)for(let p=f.length-1;p>=0&&!d;p--)s.includes(f[p])&&(d=f[p]);d||(u=u.parent)}if(!(!d||h.distance>d.range*(a.xr?1.6:1))&&GM(u)){o={it:d,point:h.point,distance:h.distance,uv:h.uv};break}}}a.hit=o;let l=a.captured||o?.it||null;if(a.hoverIt!==l&&(a.hoverIt&&a.hoverIt.onHover?.(!1,a),l&&(l.onHover?.(!0,a),this.onHoverSound?.(l,a)),a.hoverIt=l,a.holdT=0),(a.primary||!this.hover&&l)&&(this.hover=l?{it:l,ptr:a}:this.hover),a.pressed&&o){let c=o.it;c.kind==="press"?c.onSelect?.(a,o):(c.kind==="drag"||c.kind==="grab")&&(a.captured=c,c.onPress?.(a,o)),a.holdT=0}if(a.down&&l&&(l.kind==="hold"&&o?.it===l&&(a.holdT+=n,l.onHoldTick?.(a.holdT/l.holdTime,a),a.holdT>=l.holdTime&&(a.holdT=-1e9,l.onSelect?.(a,o)),(a.primary||!this.holdProgress)&&(this.holdProgress=Math.max(0,a.holdT/l.holdTime))),a.captured===l&&l.whileDown?.(a,n,o)),a.down||(a.holdT>0&&l?.onHoldTick?.(0,a),a.holdT=0),a.released&&a.captured){let c=a.captured;a.captured=null,c.onRelease?.(a,o)}}for(let a of this.items){let o=e.some(l=>l.hoverIt===a)&&this.isOn(a)?1:0;if(a.hovered=o===1,a.mats){let l=ci(a.glow,o,10,n);Math.abs(l-a.glow)>.001&&(a.glow=l,this.setGlow(a,l))}if(a.near){let l=a.object.getWorldPosition(o0).distanceTo(t)<a.near;l!==a.isNear&&(a.isNear=l,a.onNear?.(l))}}for(let a of this.reactors){let o=(a.position||a.object.getWorldPosition(o0)).distanceTo(t),l=o<a.radius?1-o/a.radius:0;a.value=ci(a.value,l,a.rate||3,n),a.update?.(a.value,n)}}};function GM(n){for(;n;){if(!n.visible)return!1;n=n.parent}return!0}var Yn={time:{value:0},flicker:{value:1},pointScale:{value:600}};function ur(n,e=1){let t=n.attributes.position,i=n.attributes.normal,s=n.attributes.uv;if(!s||!i)return n;for(let r=0;r<t.count;r++){let a=Math.abs(i.getX(r)),o=Math.abs(i.getY(r)),l=Math.abs(i.getZ(r));o>a&&o>l?s.setXY(r,t.getX(r)*e,t.getZ(r)*e):a>l?s.setXY(r,t.getZ(r)*e,t.getY(r)*e):s.setXY(r,t.getX(r)*e,t.getY(r)*e)}return s.needsUpdate=!0,n}function Zd(n,e="hang",t=.08){return n.onBeforeCompile=i=>{i.uniforms.uTime=Yn.time,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 wp = modelMatrix * vec4(position, 1.0);
      float w = ${e==="hang"?"(1.0 - uv.y)":e==="flag"?"uv.x":"sin(uv.x * 3.14159)"};
      float wave = sin(wp.x * 1.7 + wp.z * 1.3 + uTime * 1.6) * 0.6 + sin(wp.x * 3.1 - uTime * 2.3 + wp.y * 2.0) * 0.4;
      transformed += normal * wave * ${t.toFixed(3)} * w;`)},n.customProgramCacheKey=()=>"wind-"+e+t,n}function Kd(n,e,t,i=256,s=512){let r=document.createElement("canvas");r.width=i,r.height=s;let a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,s);let o=t;if(n==="stripe"){let c=0,h=0;for(;c<s;){let u=[6,18,4,30,10][h%5];a.fillStyle=o[h%o.length],a.fillRect(0,c,i,u),c+=u+[14,26,8,40][h%4],h++}}else if(n==="diamond"){for(let c=0;c<s/64;c++)for(let h=-1;h<i/64+1;h++){let u=h*64+c%2*32,d=c*64+32;a.fillStyle=o[(c+h+8)%o.length],a.beginPath(),a.moveTo(u,d-26),a.lineTo(u+22,d),a.lineTo(u,d+26),a.lineTo(u-22,d),a.closePath(),a.fill(),a.fillStyle=e,a.beginPath(),a.moveTo(u,d-12),a.lineTo(u+10,d),a.lineTo(u,d+12),a.lineTo(u-10,d),a.closePath(),a.fill()}for(let c of[0,i-14])a.fillStyle=o[0],a.fillRect(c,0,14,s)}else{a.strokeStyle=o[0],a.lineWidth=10,a.strokeRect(12,12,i-24,s-24),a.strokeStyle=o[1]||o[0],a.lineWidth=3,a.strokeRect(26,26,i-52,s-52);for(let c=60;c<s-40;c+=56)for(let h=56;h<i-40;h+=48){a.fillStyle=o[(h+c)%o.length],a.beginPath();for(let u=0;u<8;u++){let d=u/8*Math.PI*2;a.ellipse(h+Math.cos(d)*6,c+Math.sin(d)*6,5,2.5,d,0,Math.PI*2)}a.fill()}}for(let c=0;c<i;c+=2)a.fillStyle=c%4?"rgba(255,240,210,0.035)":"rgba(0,0,0,0.05)",a.fillRect(c,0,1,s);for(let c=0;c<s;c+=2)a.fillStyle="rgba(0,0,0,0.04)",a.fillRect(0,c,i,1);let l=new Pi(r);return l.colorSpace=xt,l.wrapS=l.wrapT=Zt,l.anisotropy=4,l}async function HM(n,e,t=()=>{},i="high"){let s=new Ln,r=Math.min(8,n.capabilities.getMaxAnisotropy()),a=async(E,y=!1,w=1)=>{let A=await s.loadAsync(`${e}assets/pbr/${E}`);return A.wrapS=A.wrapT=Zt,A.anisotropy=r,A.repeat.set(w,w),y&&(A.colorSpace=xt),t(E),A},o=i==="low"?"1k":"2k",l=async(E,y)=>{let[w,A,I]=await Promise.all([a(`${E}-color-${o}.jpg`,!0,y),a(`${E}-normal-${o}.jpg`,!1,y),a(`${E}-rough-${o}.jpg`,!1,y)]);return{map:w,normalMap:A,roughnessMap:I}},[c,h,u,d,f,p,v]=await Promise.all([l("stone",.5),l("floor",.33),l("sand",.35),l("wood",.6),a(`carved-botanical-${o}.jpg`,!0,1.2),a(`persian-carpet-${o}.jpg`,!0),new xh().loadAsync(`${e}assets/pbr/sunset-2k.hdr`).then(E=>(t("sky"),E))]),g=E=>new Yt(E),m=E=>new bi(E),_=(E,y,w,A=y==="sail"?.38:.12)=>Zd(m({color:E,emissive:E,emissiveIntensity:A,roughness:.95,sheen:.7,sheenRoughness:.75,sheenColor:new fe("#d8b892"),side:2}),y,w),b=E=>new te(E,E),x=(E,y,w,A,I,C=A==="sail"?.3:.08)=>{let L=Kd(E,y,w);return Zd(m({map:L,emissive:"#ffffff",emissiveMap:L,emissiveIntensity:C,roughness:.95,sheen:.6,sheenRoughness:.75,sheenColor:new fe("#d8b892"),side:2}),A,I)},M={stone:g({...c,color:"#d8bd93",normalScale:b(.5)}),stoneDark:g({...c,color:"#a8916f",normalScale:b(.7)}),plaster:g({map:c.map,normalMap:c.normalMap,roughnessMap:c.roughnessMap,color:"#e2c9a2",normalScale:b(.25)}),floor:g({...h,color:"#c9b593",normalScale:b(.8)}),floorDark:g({...h,color:"#8d7a60",normalScale:b(.8)}),sand:g({...u,color:"#e2bf88",normalScale:b(.9)}),wood:g({...d,color:"#8a5f43"}),woodDark:g({...d,color:"#4b3325"}),carved:g({color:"#d9c19b",map:f,bumpMap:f,bumpScale:2.2,roughness:.92}),carvedDark:g({color:"#9c8462",map:f,bumpMap:f,bumpScale:2.2,roughness:.95}),rug:m({map:p,color:"#ffffff",roughness:.96,sheen:.6,sheenRoughness:.8,sheenColor:new fe("#c9a884"),side:2}),gold:m({color:"#e7bd72",metalness:1,roughness:.24,clearcoat:.25,clearcoatRoughness:.2}),goldSoft:g({color:"#d6aa5f",metalness:1,roughness:.38}),brass:g({color:"#b98a4a",metalness:.92,roughness:.36}),brassDark:g({color:"#6e4e2a",metalness:.85,roughness:.5}),copper:g({color:"#b5683f",metalness:.9,roughness:.4}),pearl:m({color:"#fbf0dc",metalness:.05,roughness:.14,iridescence:.55,iridescenceIOR:1.35,clearcoat:1,clearcoatRoughness:.06,sheen:.4,sheenColor:new fe("#ffe9d6")}),emerald:m({color:"#1f6b4c",metalness:0,roughness:.05,clearcoat:1}),ruby:m({color:"#8a1730",metalness:0,roughness:.06,clearcoat:1}),velvet:m({color:"#183128",roughness:1,sheen:1,sheenRoughness:.5,sheenColor:new fe("#4f6e5c")}),velvetRed:m({color:"#3d1218",roughness:1,sheen:1,sheenRoughness:.5,sheenColor:new fe("#87454a")}),glass:m({color:"#fff3de",metalness:.1,roughness:.05,clearcoat:1,transparent:!0,opacity:.1,depthWrite:!1,side:2}),lampGlass:g({color:"#ffcf8f",emissive:"#e8893a",emissiveIntensity:2.4,roughness:.4}),ember:g({color:"#ff9a3c",emissive:"#ff7a1c",emissiveIntensity:3}),ceramicTeal:m({color:"#2f6b6a",roughness:.25,clearcoat:.8}),ceramicCream:m({color:"#e8dcc4",roughness:.3,clearcoat:.6}),ceramicOchre:m({color:"#b5793a",roughness:.35,clearcoat:.5}),clay:g({color:"#a7623f",roughness:.95}),linen:m({color:"#b3a07f",roughness:1,sheen:.5,sheenColor:new fe("#fff2da"),side:2}),clothCream:_("#e6d3b0","hang",.07),clothTerracotta:_("#a5503a","hang",.07),clothOchre:_("#c08a3e","hang",.07),clothBurgundy:_("#6e2232","hang",.06),clothIndigo:_("#2c3a55","hang",.06),sailCream:_("#e9d8b8","sail",.12),sailTerracotta:_("#b0613f","sail",.12),sailOchre:_("#c99a52","sail",.12),sailStripe:x("stripe","#d9c4a0",["#a5503a","#2c3a55","#c08a3e","#6e2232"],"sail",.12),sailKilim:x("diamond","#b0613f",["#e2cfa8","#2c3a55","#c99a52","#6e2232"],"sail",.12),sailOchreStripe:x("stripe","#c99a52",["#6e2232","#e6d3b0","#2f4a3e"],"sail",.12),bannerKilim:x("diamond","#6e2232",["#c99a52","#e6d3b0","#2f4a3e","#b0613f"],"hang",.07),bannerBorder:x("border","#a5503a",["#e6c88f","#2c3a55","#f0e0bd"],"hang",.07),bannerIndigo:x("border","#2c3a55",["#c99a52","#e6d3b0","#a5503a"],"hang",.07),bannerStripe:x("stripe","#e6d3b0",["#a5503a","#2c3a55","#c08a3e"],"hang",.07),tableCloth:m({map:Kd("stripe","#8f3b2c",["#d9b46a","#2c3a55","#e6d3b0"]),roughness:1,sheen:.25,sheenColor:new fe("#e7c9a0"),side:2}),tableCloth2:m({map:Kd("diamond","#2c3a55",["#c99a52","#a5503a","#e6d3b0"]),roughness:1,sheen:.5,sheenColor:new fe("#e7c9a0"),side:2}),plasterDark:g({map:c.map,normalMap:c.normalMap,roughnessMap:c.roughnessMap,color:"#6a5442",normalScale:b(.35)}),rugHang:Zd(m({map:p,roughness:.96,sheen:.6,sheenColor:new fe("#c9a884"),side:2}),"hang",.035),spiceRed:g({color:"#9a2e1c",roughness:1}),spiceSaffron:g({color:"#c9861c",roughness:1}),spiceGreen:g({color:"#6b6a2a",roughness:1}),spiceBrown:g({color:"#6a3b1f",roughness:1}),dark:g({color:"#0d0a08",roughness:1}),black:new Nt({color:"#000000"}),skin:g({color:"#b07a55",roughness:.75})};M.sandTex=u,M.rugTex=p,M.carvingTex=f;let S=new ha(n);M.env=S.fromEquirectangular(v).texture,v.dispose(),S.dispose();for(let E of Object.keys(M))M[E]?.isMaterial&&(M[E].name=E);if(i==="low")for(let E of Object.keys(M)){let y=M[E];y?.isMeshPhysicalMaterial&&(y.sheen=0,y.clearcoat=0,y.iridescence=0,y.transmission=0)}return M}var Ko;function w0(){if(Ko)return Ko;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,248,225,1)"),t.addColorStop(.18,"rgba(255,224,150,0.85)"),t.addColorStop(.45,"rgba(240,180,80,0.25)"),t.addColorStop(1,"rgba(240,170,60,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ko=new Pi(n),Ko.colorSpace=xt,Ko}function _a(n=.05){return new dt({uniforms:{map:{value:w0()},size:{value:n},opacity:{value:1},heightScale:Yn.pointScale,tint:{value:new fe(1,.86,.58)},boost:{value:1.6}},vertexShader:`attribute float aAlpha; attribute float aSize; varying float vAlpha; uniform float size; uniform float heightScale;
      void main(){ vAlpha=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv;
      gl_PointSize = size * aSize * heightScale / max(0.1,-mv.z); }`,fragmentShader:`uniform sampler2D map; uniform float opacity; uniform vec3 tint; uniform float boost; varying float vAlpha;
      void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*tint*boost, c.a*vAlpha*opacity); if(gl_FragColor.a<0.01) discard;}`,transparent:!0,depthWrite:!1,blending:2})}var WM=class{constructor(n=240){this.count=n;let e=gr(77);this.seed=Float32Array.from({length:n},()=>e()),this.phase=Float32Array.from({length:n*3},()=>e()*Math.PI*2);let t=new at;t.setAttribute("position",new $e(new Float32Array(n*3),3)),t.setAttribute("aAlpha",new $e(new Float32Array(n),1)),t.setAttribute("aSize",new $e(Float32Array.from({length:n},()=>.5+e()*e()*1.4),1)),this.mat=_a(.04),this.mat.uniforms.boost&&(this.mat.uniforms.boost.value=2),this.points=new qi(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.strength=0,this.target=0,this.samples=null,this.length=1,this.flow=0,this.height=.85,this.lowAtEnd=!0,this.gaps=null}setPath(n,e={}){if(!n||n.length<2){this.samples=null;return}let t=new ji(n.map(s=>s.clone()),!1,"centripetal",.5);this.length=t.getLength();let i=Math.max(32,Math.min(400,Math.round(this.length*6)));this.samples=t.getSpacedPoints(i),this.height=e.height??.85,this.ground=e.ground||null,this.gaps=e.gaps||null}show(n=!0){this.target=+!!n}daylight(n){this.mat.uniforms.size.value=n?.074:.04,this.mat.uniforms.boost.value=n?2.8:2,this.mat.uniforms.tint.value.set(1,n?.72:.82,n?.3:.5)}update(n,e){if(this.strength=ci(this.strength,this.target,1.6,n),this.points.visible=this.strength>.01&&!!this.samples,!this.points.visible)return;let t=this.points.geometry.attributes.position.array,i=this.points.geometry.attributes.aAlpha.array,s=this.samples,r=s.length-1,a=1.05/this.length;this.flow+=n*a;for(let o=0;o<this.count;o++){let l=(this.seed[o]+this.flow)%1,c=l*r,h=Math.floor(c),u=c-h,d=s[h],f=s[Math.min(r,h+1)],p=d.x+(f.x-d.x)*u,v=d.z+(f.z-d.z)*u,g=d.y+(f.y-d.y)*u,m=this.phase[o*3],_=this.phase[o*3+1],b=this.phase[o*3+2],x=.1+.07*Math.sin(b),M=this.height*(.55+.45*Math.sin(l*9+_))*(this.lowAtEnd?.45+.55*(1-l):1);t[o*3]=p+Math.sin(e*.7+m+l*20)*x,t[o*3+1]=(this.ground?this.ground(p,v):g)+M+Math.sin(e*1.3+_)*.06,t[o*3+2]=v+Math.cos(e*.6+b+l*17)*x;let S=Math.min(1,l*8)*Math.min(1,(1-l)*5);if(this.gaps)for(let[y,w]of this.gaps)l>y&&l<w&&(S*=1-Math.min(1,Math.min(l-y,w-l)*30));let E=Math.max(0,Math.sin((l*this.length-e*1.6)*2.1))**6;i[o]=S*(.5+.5*Math.max(0,Math.sin(e*2.1+m*3)))*(.7+.65*E)*this.strength}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.aAlpha.needsUpdate=!0}},sl=class{constructor(n,e,t={}){let i=gr(t.seed||5);this.box=e,this.count=n;let s=new at;this.base=new Float32Array(n*3);for(let r=0;r<n;r++)this.base[r*3]=e.min.x+i()*(e.max.x-e.min.x),this.base[r*3+1]=e.min.y+i()*(e.max.y-e.min.y),this.base[r*3+2]=e.min.z+i()*(e.max.z-e.min.z);s.setAttribute("position",new $e(this.base.slice(),3)),s.setAttribute("aAlpha",new $e(Float32Array.from({length:n},()=>i()),1)),s.setAttribute("aSize",new $e(Float32Array.from({length:n},()=>.4+i()*.9),1)),this.mat=_a(t.size||.012),this.mat.uniforms.opacity.value=t.opacity??.5,this.points=new qi(s,this.mat),this.points.frustumCulled=!1,this.speed=t.speed||.03,this.seeds=Float32Array.from({length:n},()=>i()*100)}update(n){if(!this.points.visible)return;let e=this.points.geometry.attributes.position.array,t=this.base,i=this.box.max.y-this.box.min.y;for(let s=0;s<this.count;s++){let r=this.seeds[s];e[s*3]=t[s*3]+Math.sin(n*.21+r)*.25,e[s*3+1]=this.box.min.y+(t[s*3+1]-this.box.min.y+n*this.speed*(.5+r%1))%i,e[s*3+2]=t[s*3+2]+Math.cos(n*.17+r*1.3)*.25}this.points.geometry.attributes.position.needsUpdate=!0}},Jt={p:[0,0,0],f:[0,0,-1],u:[0,1,0]},XM=class{constructor(n){this.base=n,this.ctx=null,this.manifest={},this.buffers=new Map,this.musicVol=.7,this.sfxVol=.9,this.voice=!1,this.current={music:null,amb:null},this.speaking=null}async init(){try{let n=await fetch(`${this.base}assets/audio/manifest.json`);n.ok&&(this.manifest=await n.json())}catch{}}unlock(){if(!this.ctx){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;this.ctx=new n,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination);let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=3,e.attack.value=.01,e.release.value=.3,e.connect(this.master),this.bus=e,this.musicBus=this.ctx.createGain(),this.musicBus.connect(e),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(e),this.applyVolumes()}this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}applyVolumes(){this.ctx&&(this.musicBus.gain.value=this.musicVol*.85,this.sfxBus.gain.value=this.sfxVol)}has(n){return!!this.manifest[n]}load(n){return!this.ctx||!this.has(n)?Promise.resolve(null):(this.buffers.has(n)||this.buffers.set(n,fetch(`${this.base}assets/audio/${this.manifest[n].file}`).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>this.ctx.decodeAudioData(e)).catch(()=>null)),this.buffers.get(n))}preload(n){for(let e of n)this.load(e)}async bed(n,e,t=1,i=3){if(!this.ctx)return;let s=this.current[n];if(s?.name===e){s.gain.gain.setTargetAtTime(t,this.ctx.currentTime,i/3);return}if(s){s.gain.gain.setTargetAtTime(0,this.ctx.currentTime,i/3);let l=s.src;setTimeout(()=>{try{l?.stop()}catch{}},i*2e3)}if(this.current[n]=null,!e)return;let r={name:e,gain:this.ctx.createGain(),src:null};r.gain.gain.value=0,r.gain.connect(n==="music"?this.musicBus:this.sfxBus),this.current[n]=r;let a=await this.load(e);if(!a||this.current[n]!==r)return;let o=this.ctx.createBufferSource();o.buffer=a,o.loop=this.manifest[e]?.loop!==!1,o.connect(r.gain),o.start(),r.src=o,r.gain.gain.setTargetAtTime(t,this.ctx.currentTime,i/3)}music(n,e=1,t=4){return this.bed("music",n,e,t)}ambience(n,e=1,t=3){return this.bed("amb",n,e,t)}play(n,e={}){if(!this.ctx||!this.has(n))return null;let t={stopped:!1,stop:()=>{t.stopped=!0}};return this.load(n).then(i=>{if(!i||t.stopped)return;let s=this.ctx,r=s.createBufferSource(),a=s.createGain();r.buffer=i,r.loop=!!e.loop,r.playbackRate.value=e.rate??1,a.gain.value=e.volume??1;let o=a;if(e.position){let l=s.createPanner();l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=e.ref??1.2,l.rolloffFactor=e.rolloff??1.1,qM(l,e.position),a.connect(l),o=l,t.panner=l}o.connect(this.sfxBus),r.connect(a),r.start(s.currentTime+(e.delay||0)),t.stop=(l=.3)=>{t.stopped=!0,a.gain.setTargetAtTime(0,s.currentTime,l/3),setTimeout(()=>{try{r.stop()}catch{}},l*1500+50)},t.gain=a,t.src=r}),t}playVariant(n,e,t){return this.play(`${n}${1+Math.floor(Math.random()*e)}`,t)}chime(n=880,e=.05){if(!this.ctx)return;let t=this.ctx,i=t.currentTime;for(let[s,r]of[[1,0],[1.5,.07],[2,.14]]){let a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.value=n*s,o.gain.setValueAtTime(0,i+r),o.gain.linearRampToValueAtTime(e,i+r+.01),o.gain.exponentialRampToValueAtTime(1e-4,i+r+1.4),a.connect(o),o.connect(this.sfxBus),a.start(i+r),a.stop(i+r+1.5)}}listener(n){if(!this.ctx)return;let e=this.ctx.listener,t=n.matrixWorld.elements;if(Jt.p[0]=t[12],Jt.p[1]=t[13],Jt.p[2]=t[14],Jt.f[0]=-t[8],Jt.f[1]=-t[9],Jt.f[2]=-t[10],Jt.u[0]=t[4],Jt.u[1]=t[5],Jt.u[2]=t[6],e.positionX){let i=this.ctx.currentTime;e.positionX.setTargetAtTime(Jt.p[0],i,.02),e.positionY.setTargetAtTime(Jt.p[1],i,.02),e.positionZ.setTargetAtTime(Jt.p[2],i,.02),e.forwardX.setTargetAtTime(Jt.f[0],i,.02),e.forwardY.setTargetAtTime(Jt.f[1],i,.02),e.forwardZ.setTargetAtTime(Jt.f[2],i,.02),e.upX.setTargetAtTime(Jt.u[0],i,.02),e.upY.setTargetAtTime(Jt.u[1],i,.02),e.upZ.setTargetAtTime(Jt.u[2],i,.02)}else e.setPosition(...Jt.p),e.setOrientation(...Jt.f,...Jt.u)}async say(n,e){this.stopSpeech();let t=this.manifest["vo_"+n];if(t&&this.ctx){let r=this.play("vo_"+n,{volume:1});return this.speaking=r,(t.duration||4)+.3}if(!this.voice||!window.speechSynthesis)return null;let i=new SpeechSynthesisUtterance(e),s=speechSynthesis.getVoices();return i.voice=["Serena","Kate","Martha","Stephanie","Moira","Fiona","Samantha","Google UK English Female","Karen"].map(r=>s.find(a=>a.name.includes(r))).find(Boolean)||s.find(r=>/en-GB/.test(r.lang))||null,i.rate=.86,i.pitch=1.04,i.volume=.9,speechSynthesis.speak(i),this.speaking=i,null}stopSpeech(){try{window.speechSynthesis?.cancel()}catch{}this.speaking?.stop&&this.speaking.stop(.2),this.speaking=null}};function qM(n,e){n.positionX?(n.positionX.value=e.x,n.positionY.value=e.y,n.positionZ.value=e.z):n.setPosition(e.x,e.y,e.z)}var oi=n=>document.getElementById(n),ln=new P;function l0(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}var YM=class{constructor(){this.state={chapter:"",objective:"",speaker:"",subtitle:"",prompt:"",kind:"",hold:0,toast:""},this.subTimer=null,this.toastTimer=null,this.dirty=!0,this.subsOn=!0,this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=420,this.tex=new Pi(this.canvas),this.tex.colorSpace=xt,this.panel=new Ue(new Gt(.86,.353),new Nt({map:this.tex,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.panel.renderOrder=999,this.panel.visible=!1,this.panel.frustumCulled=!1,this.panelYaw=0,this.menu=this.makeMenu()}objective(n,e){this.state.chapter=n||"",this.state.objective=e||"",this.dirty=!0,oi("obj-chapter").textContent=n||"",oi("obj-text").textContent=e||"",oi("objective").classList.toggle("show",!!e)}subtitle(n,e,t=5){clearTimeout(this.subTimer),this.state.speaker=n||"",this.state.subtitle=e||"",this.dirty=!0,oi("sub-speaker").textContent=n||"",oi("sub-text").textContent=e||"",oi("subtitle").classList.toggle("show",!!e&&this.subsOn),e&&t&&(this.subTimer=setTimeout(()=>this.subtitle("",""),t*1e3))}prompt(n,e="press",t=!1){(n!==this.state.prompt||e!==this.state.kind)&&(this.state.prompt=n||"",this.state.kind=e,this.dirty=!0,oi("prompt-text").textContent=n||"",oi("prompt-key").textContent=e==="hold"?"Hold":e==="drag"?"Hold + move":"Click",oi("prompt").classList.toggle("show",!!n),oi("crosshair").classList.toggle("active",!!n))}hold(n){Math.abs(n-this.state.hold)<.01||(this.state.hold=n,this.dirty=!0,document.querySelector("#hold-ring circle").style.strokeDashoffset=String(113.1*(1-Math.min(1,n))))}toast(n,e=3.5){clearTimeout(this.toastTimer),oi("toast").textContent=n,oi("toast").classList.add("show"),this.state.toast=n,this.dirty=!0,this.toastTimer=setTimeout(()=>{oi("toast").classList.remove("show"),this.state.toast="",this.dirty=!0},e*1e3)}cinematic(n){document.body.classList.toggle("cinematic",!!n)}skip(n,e=0){oi("skip-hint").hidden=!n,oi("skip-fill").style.width=`${Math.min(1,e)*100}%`}crosshair(n){oi("crosshair").classList.toggle("hidden",!n)}inspect(n){oi("inspect-card").hidden=!n,n&&(oi("inspect-name").textContent=n.name,oi("inspect-line").textContent=n.line),this.state.inspect=n,this.dirty=!0}drawPanel(){if(!this.dirty)return;this.dirty=!1;let n=this.canvas.getContext("2d"),e=this.state,t=1024;n.clearRect(0,0,t,420),n.textAlign="center";let i=[];if(e.subtitle&&this.subsOn){i.push({t:(e.speaker||"").toUpperCase(),f:"600 19px Arial",col:"#dcb877",h:34});for(let u of this.wrapLines(n,e.subtitle,"34px Georgia",880).slice(0,3))i.push({t:u,f:"34px Georgia",col:"#f6ecd9",h:44})}else if(e.inspect){i.push({t:"KAVYA POTLURI",f:"600 17px Arial",col:"#dcb877",h:32}),i.push({t:e.inspect.name,f:"36px Georgia",col:"#f6ecd9",h:48});for(let u of this.wrapLines(n,e.inspect.line,"24px Arial",860).slice(0,3))i.push({t:u,f:"24px Arial",col:"#d8cdb8",h:32})}else if(e.toast)for(let u of this.wrapLines(n,e.toast,"italic 28px Georgia",860).slice(0,2))i.push({t:u,f:"italic 28px Georgia",col:"#f6ecd9",h:38});if(e.objective&&!e.subtitle&&(i.push({t:e.chapter.toUpperCase(),f:"600 16px Arial",col:"#dcb877",h:30,gap:i.length?14:0}),i.push({t:e.objective,f:"28px Georgia",col:"#efe4cf",h:38})),e.prompt&&i.push({t:`${e.kind==="hold"?"HOLD TRIGGER":"TRIGGER"}  \xB7  ${e.prompt}`,f:"600 21px Arial",col:"#e8c98a",h:34,gap:10}),!i.length){this.tex.needsUpdate=!0;return}let s=0,r=0;for(let u of i)s+=u.h+(u.gap||0),n.font=u.f,r=Math.max(r,n.measureText(u.t).width);let a=Math.min(1004,r+90),o=s+44,l=(t-a)/2,c=420-o-8;n.fillStyle="rgba(18,14,10,0.62)",l0(n,l,c,a,o,26),n.fill(),n.strokeStyle="rgba(220,184,119,0.35)",n.lineWidth=2,l0(n,l+1,c+1,a-2,o-2,25),n.stroke();let h=c+22;for(let u of i)h+=(u.gap||0)+u.h,n.font=u.f,n.fillStyle=u.col,n.fillText(u.t,t/2,h-u.h*.28);this.tex.needsUpdate=!0}wrapLines(n,e,t,i){n.font=t;let s=[],r="";for(let a of String(e).split(" "))n.measureText(r+a).width>i&&r?(s.push(r.trim()),r=a+" "):r+=a+" ";return r.trim()&&s.push(r.trim()),s}updatePanel(n,e,t){if(this.panel.visible=t,!t)return;this.drawPanel(),e.getWorldPosition(ln);let i=e.getWorldDirection(new P),s=Math.atan2(i.x,i.z),r=((s-this.panelYaw+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;(Math.abs(r)>.45||this.snapPanel)&&(this.following=!0,this.snapPanel=!1),this.following&&(this.panelYaw=Bh(this.panelYaw,s,3,n),Math.abs(r)<.05&&(this.following=!1));let a=1.5;this.panel.position.set(ln.x+Math.sin(this.panelYaw)*a,ci(this.panel.position.y||ln.y,ln.y-.52,4,n),ln.z+Math.cos(this.panelYaw)*a),this.panel.lookAt(ln.x,ln.y,ln.z),this.menu.visible&&(this.menu.position.set(ln.x+Math.sin(this.menuYaw)*1.1,ln.y-.1,ln.z+Math.cos(this.menuYaw)*1.1),this.menu.lookAt(ln))}makeMenu(){let n=document.createElement("canvas");n.width=768,n.height=640;let e=new Pi(n);e.colorSpace=xt;let t=new Ue(new Gt(.72,.6),new Nt({map:e,transparent:!0,depthTest:!1,toneMapped:!1}));return t.renderOrder=1e3,t.visible=!1,t.userData.canvas=n,t.userData.tex=e,t}drawMenu(n){let e=this.menu,t=e.userData.canvas.getContext("2d");t.clearRect(0,0,768,640),t.fillStyle="rgba(22,17,12,0.94)",t.fillRect(0,0,768,640),t.strokeStyle="rgba(220,184,119,0.6)",t.lineWidth=2,t.strokeRect(2,2,764,636),t.textAlign="center",t.fillStyle="#dcb877",t.font="600 20px Arial",t.fillText("THE SOUK OF STOLEN WISHES",384,62),n.forEach((i,s)=>{let r=110+s*88;t.fillStyle=s===0?"#dcb877":"rgba(255,255,255,0.06)",t.fillRect(84,r,600,68),t.fillStyle=s===0?"#21180d":"#f3e8d4",t.font="30px Georgia",t.fillText(i.label,384,r+45)}),e.userData.items=n,e.userData.tex.needsUpdate=!0}menuPick(n){let e=this.menu.userData.items||[],t=(1-n.y)*640,i=Math.floor((t-110)/88);return i>=0&&i<e.length&&(t-110)%88<68?e[i]:null}},jM={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:0},warmth:{value:.015}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time, vignette, grain, warmth; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + time) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv); vec2 d = vUv - 0.5; float v = 1.0 - dot(d, d) * vignette * 2.2;
      c.rgb *= v; c.rgb += (h(vUv * 1000.0) - 0.5) * grain; c.rgb += vec3(warmth, warmth * 0.4, -warmth * 0.6) * c.rgb; vec3 s = clamp(c.rgb, 0.0, 1.0); c.rgb = mix(c.rgb, s * s * (3.0 - 2.0 * s), 0.16); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); c.rgb = mix(vec3(l), c.rgb, 1.03); gl_FragColor = c; }`},ZM=class{constructor(n,e,t,i=!1){this.renderer=n;let s=new kt(1,1,{type:Ut,samples:4});this.composer=new yh(n,s),this.composer.addPass(new Mh(e,t)),i&&(this.ao=new jo(e,t,innerWidth,innerHeight),this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1.2,scale:1.1,samples:8}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,rings:2,samples:8}),this.composer.addPass(this.ao)),this.composer,this.bloom=new pa(new te(innerWidth,innerHeight),.15,.45,.96),this.composer.addPass(this.bloom),this.composer.addPass(new _h),this.grade=new fa(jM),this.composer.addPass(this.grade),this.resize()}resize(){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(innerWidth,innerHeight)}render(n){let e=performance.now();if(this.ao?.enabled){let t=Math.min(100,e-(this.last??e));this.ema=(this.ema??16)*.97+t*.03,this.t0??=e,this.ema>27&&e-this.t0>1e4&&(this.ao.enabled=!1,this.aoTripped=!0)}this.last=e,this.grade.uniforms.time.value=n%10,this.composer.render()}},$o=Math.PI*2;function T0(n,e,t,i=24,s=0){let r=(t*t+n*n/4)/n,a=r-n/2,o=Math.atan2(t,-a),l=[];for(let c=0;c<=i;c++){let h=Math.PI+(o-Math.PI)*(c/i);l.push(new te(s+a+Math.cos(h)*r,e+Math.sin(h)*r))}for(let c=i-1;c>=0;c--){let h=l[c];l.push(new te(2*s-h.x,h.y))}return l}function $d(n,e,t,i=0,s=new _n){let r=T0(n,e,t,20,i);s.moveTo(i-n/2,0);for(let a of r)s.lineTo(a.x,a.y);return s.lineTo(i+n/2,0),s.closePath(),s}var A0=class Qt{constructor(e,t){this.M=e,this.g=t,this.r=gr(11),this.lanterns=[],this.flickerLights=[]}at(e){return this.g=e,this}mesh(e,t,i=0,s=0,r=0,a=this.g){let o=new Ue(e,t);return o.position.set(i,s,r),o.castShadow=!0,o.receiveShadow=!0,a.add(o),o}box(e,t,i,s,r,a,o=this.M.stone,l,c=1){[e,t,i,s,r,a]=s0(l||this.g,e,t,i,s,r,a);let h=Math.min(e,t,i),u=ht.quality==="high"&&h>=.03?new wh(e,t,i,1,Math.min(.02,h*.22)):new fi(e,t,i);return this.mesh(ur(u,c),o,s,r,a,l)}block(e,t,i,s,r,a,o=this.M.stone,l){return this.box(Math.abs(i-e),a-r,Math.abs(s-t),(e+i)/2,(r+a)/2,(t+s)/2,o,l)}cyl(e,t,i,s,r,a,o=this.M.stone,l=16,c){return this.mesh(new Xt(e,t,i,l),o,s,r,a,c)}sphere(e,t,i,s,r=this.M.gold,a=16,o){return this.mesh(new qt(e,a,Math.max(6,a*.6|0)),r,t,i,s,o)}lathe(e,t,i,s,r,a=20,o){return this.mesh(new $r(e.map(([l,c])=>new te(l,c)),a),r,t,i,s,o)}tube(e,t,i=this.M.gold,s,r,a=6){let o=new ji(e.map(l=>l.isVector3?l:new P(...l)));return this.mesh(new $s(o,r||Math.max(8,e.length*4),t,a,!1),i,0,0,0,s)}archWall({x:e=0,z:t=0,rotY:i=0,width:s=8,height:r=6,depth:a=.8,openW:o=3,spring:l=2.6,rise:c,mat:h=this.M.stone,trim:u=this.M.carved,parent:d=this.g,band:f=.32,openX:p=0}){c??=o*.66;let v=new Te;v.position.set(e,0,t),v.rotation.y=i,d.add(v);let g=new _n;g.moveTo(-s/2,0),g.lineTo(s/2,0),g.lineTo(s/2,r),g.lineTo(-s/2,r),g.closePath(),g.holes.push($d(o,l,c,p,new ws));let m=new Ts(g,{depth:a,bevelEnabled:!1,curveSegments:6});if(m.translate(0,0,-a/2),ur(m),this.mesh(m,h,0,0,0,v),u){let _=$d(o+f*2,l,c+f,p);_.holes.push($d(o,l,c,p,new ws));let b=new Ts(_,{depth:a+.12,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:1,curveSegments:6});b.translate(0,0,-(a+.12)/2);let x=b.attributes.uv,M=b.attributes.position;for(let S=0;S<M.count;S++)x.setXY(S,M.getX(S)*.9,M.getY(S)*.9);this.mesh(b,u,0,0,0,v);for(let S of[-1,1]){let E=p+S*(o/2+f*.5);for(let y of[-1,1])this.cyl(.09,.1,l-.3,E,(l-.3)/2+.15,y*(a/2+.08),this.M.stone,10,v),this.box(.3,.14,.24,E,l-.08,y*(a/2+.06),u,v),this.box(.28,.16,.24,E,.08,y*(a/2+.06),this.M.stoneDark,v)}}return v}column(e,t,i=4,s=.24,r=this.M.stone,a=this.g){let o=new Te;return o.position.set(e,0,t),a.add(o),this.box(s*2.6,.22,s*2.6,0,.11,0,this.M.stoneDark,o),this.cyl(s*1.15,s*1.25,.18,0,.31,0,r,16,o),this.cyl(s*.92,s,i-.85,0,.4+(i-.85)/2,0,r,16,o),this.cyl(s*1.35,s*.95,.26,0,i-.32,0,this.M.carved,16,o),this.box(s*2.9,.2,s*2.9,0,i-.1,0,this.M.stoneDark,o),o}lantern(e,t,i,s=1,r=.8){this.lanterns.push({x:e,y:t,z:i,s,chain:r})}flushLanterns(e=this.g,t=2.4){if(!this.lanterns.length)return null;let i=this.M,s=this.lanterns.length;if(!Qt.lanternGeo){let x=[],M=new js(.17,.2,6);M.translate(0,.27,0),x.push(M);let S=new qt(.035,8,6);S.translate(0,.4,0),x.push(S);let E=new Zi(.035,.008,5,12);E.translate(0,.45,0),x.push(E);let y=new Xt(.14,.09,.08,6);y.translate(0,-.21,0),x.push(y);let w=new js(.05,.12,6);w.rotateX(Math.PI),w.translate(0,-.3,0),x.push(w);for(let I=0;I<6;I++){let C=I*$o/6,L=new fi(.018,.36,.018);L.translate(Math.cos(C)*.15,0,Math.sin(C)*.15),x.push(L)}let A=new Xt(.158,.158,.03,6,1,!0);A.translate(0,.07,0),x.push(A),Qt.lanternGeo=zo(x.map(I=>I.toNonIndexed())),Qt.glassGeo=new Xt(.135,.13,.34,6),Qt.chainGeo=new Xt(.006,.006,1,4),Qt.chainGeo.translate(0,.5,0)}let r=i.lampGlass.clone();r.emissiveIntensity=t;let a=new yn(Qt.lanternGeo,i.brass,s),o=new yn(Qt.glassGeo,r,s),l=new yn(Qt.chainGeo,i.brassDark,s),c=new Ve,h=new pt,u=new P,d=new P,f=0;this.lanterns.forEach((x,M)=>{h.setFromAxisAngle(new P(0,1,0),this.r()*$o),c.compose(d.set(x.x,x.y,x.z),h,u.setScalar(x.s)),a.setMatrixAt(M,c),o.setMatrixAt(M,c),x.chain>0&&(c.compose(d.set(x.x,x.y+.45*x.s,x.z),h,u.set(1,x.chain,1)),l.setMatrixAt(f++,c))}),l.count=f;for(let x of[a,o,l])x.castShadow=!1,x.receiveShadow=!1,x.userData.dynamic=!0,x.computeBoundingSphere(),e.add(x);a.castShadow=!0;let p=new Float32Array(s*3),v=new Float32Array(s).fill(1),g=new Float32Array(s);this.lanterns.forEach((x,M)=>{p[M*3]=x.x,p[M*3+1]=x.y,p[M*3+2]=x.z,g[M]=x.s});let m=new at;m.setAttribute("position",new $e(p,3)),m.setAttribute("aAlpha",new $e(v,1)),m.setAttribute("aSize",new $e(g,1));let _=_a(.55);_.uniforms.opacity.value=.32,_.uniforms.boost.value=1,_.uniforms.tint.value.set(1,.72,.42);let b=new qi(m,_);return b.userData.dynamic=!0,b.renderOrder=6,e.add(b),this.lanterns=[],{body:a,glass:o,chain:l,material:r,halo:b}}rug(e,t,i,s,r,a=0,o=this.g,l=this.M.rug){let c=new Te;c.position.set(e,t,i),c.rotation.y=a,o.add(c);let h=new Gt(s,r,4,4);h.rotateX(-Math.PI/2),this.mesh(h,l,0,.012,0,c).castShadow=!1;let u=new Gt(s*.96,.09);u.rotateX(-Math.PI/2);for(let d of[-1,1]){let f=this.mesh(u.clone(),this.fringeMat(),0,.011,d*(r/2+.045),c);f.castShadow=!1}return c}fringeMat(){if(!Qt.fringe){let e=document.createElement("canvas");e.width=256,e.height=32;let t=e.getContext("2d");for(let s=0;s<64;s++)t.fillStyle=s%2?"#e8d9bc":"#d9c6a2",t.fillRect(s*4+1,0,2,26+s*7%6);let i=new Pi(e);i.colorSpace=xt,i.wrapS=Zt,i.repeat.x=3,Qt.fringe=new Yt({map:i,alphaTest:.5,side:2,roughness:1})}return Qt.fringe}banner(e,t,i,s,r,a,o=0,l=this.g){let c=new Gt(s,r,6,12);c.translate(0,-r/2,0);let h=this.mesh(c,a,e,t,i,l);return h.rotation.y=o,h}curtain(e,t,i,s,r,a,o=0,l=7,c=this.g){let h=new Gt(s,r,l*4,6);h.translate(0,-r/2,0);let u=h.attributes.position;for(let f=0;f<u.count;f++){let p=u.getX(f)/s+.5,v=-u.getY(f)/r;u.setZ(f,Math.sin(p*l*Math.PI*2)*(.05+v*.03)),u.setX(f,u.getX(f)*(1-v*.18))}h.computeVertexNormals();let d=this.mesh(h,a,e,t,i,c);return d.rotation.y=o,d}awning(e,t,i,s,r,a,o=0,l=.35,c=this.g){let h=new Gt(s,r,14,6);h.rotateX(-Math.PI/2);let u=h.attributes.position;for(let f=0;f<u.count;f++){let p=u.getX(f)/s+.5;u.setY(f,-Math.sin(p*Math.PI)*l+Math.sin(u.getZ(f)*3)*.02)}h.computeVertexNormals();let d=this.mesh(h,a,e,t,i,c);return d.rotation.y=o,d}table(e,t,i=1.8,s=.8,r=.82,a=0,o=this.g,l=this.M.woodDark){let c=new Te;c.position.set(e,0,t),c.rotation.y=a,o.add(c),this.box(i,.07,s,0,r,0,l,c);for(let h of[-1,1])for(let u of[-1,1])this.box(.07,r,.07,h*(i/2-.08),r/2,u*(s/2-.08),l,c);return this.box(i-.15,.05,.04,0,r*.25,s/2-.08,l,c),c}cloth(e,t,i,s,r,a=this.M.linen,o=0,l=this.g,c=.25){let h=new Gt(s,r+c,8,5);h.rotateX(-Math.PI/2);let u=h.attributes.position;for(let f=0;f<u.count;f++){let p=u.getZ(f);if(p>r/2){let v=p-r/2;u.setZ(f,r/2+.01),u.setY(f,-v+Math.sin(u.getX(f)*9)*.01)}}h.computeVertexNormals();let d=this.mesh(h,a,e,t,i,l);return d.rotation.y=o,d}vase(e,t,i,s=0,r=1,a=this.M.brass,o=this.g){let l=[[[.001,0],[.09,.01],[.15,.08],[.16,.18],[.1,.3],[.05,.38],[.055,.46],[.075,.48]],[[.001,0],[.07,0],[.12,.05],[.16,.14],[.14,.22],[.08,.26],[.07,.3],[.09,.31]],[[.001,0],[.05,.01],[.08,.1],[.11,.3],[.07,.52],[.03,.62],[.04,.72],[.06,.74]],[[.001,0],[.12,0],[.2,.04],[.22,.08],[.22,.09]]][s];return this.lathe(l.map(([c,h])=>[c*r,h*r]),e,t,i,a,22,o)}sack(e,t,i=.24,s=this.M.spiceSaffron,r=this.g){let a=new Te;return a.position.set(e,0,t),r.add(a),this.lathe([[.001,0],[i*.85,0],[i,.12],[i*.95,.38],[i*1.08,.46],[i*1.12,.47]],0,0,0,this.M.linen,14,a),this.lathe([[.001,.5],[i*.4,.47],[i*.95,.42],[i*1.02,.4]],0,0,0,s,14,a),a}rolledRug(e,t,i,s=1.4,r=.11,a=0,o=this.g){let l=this.cyl(r,r,s,e,t,i,this.M.rug,14,o);return l.rotation.set(0,a,Math.PI/2),l}mashrabiyaMat(){if(!Qt.lattice){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#5a3c28",t.fillRect(0,0,256,256),t.globalCompositeOperation="destination-out";for(let[s,r]of[[64,64],[192,64],[64,192],[192,192],[128,128],[0,0],[256,0],[0,256],[256,256]]){t.beginPath();for(let a=0;a<16;a++){let o=a/16*$o,l=a%2?22:38;t.lineTo(s+Math.cos(o)*l,r+Math.sin(o)*l)}t.fill()}for(let[s,r]of[[128,0],[0,128],[256,128],[128,256],[128,64],[64,128],[192,128],[128,192]])t.beginPath(),t.arc(s,r,9,0,$o),t.fill();let i=new Pi(e);i.colorSpace=xt,i.wrapS=i.wrapT=Zt,Qt.lattice=new Yt({map:i,alphaTest:.5,side:2,roughness:.85,color:"#a27a58"})}return Qt.lattice}mashrabiya(e,t,i,s,r,a=0,o=this.g){let l=new Gt(s,r),c=l.attributes.uv;for(let d=0;d<c.count;d++)c.setXY(d,c.getX(d)*s*2.2,c.getY(d)*r*2.2);let h=this.mesh(l,this.mashrabiyaMat(),e,t,i,o);h.rotation.y=a;let u=new Te;u.position.set(e,t,i),u.rotation.y=a,o.add(u);for(let d of[-1,1])this.box(.08,r+.08,.1,d*(s/2+.02),0,0,this.M.woodDark,u),this.box(s+.12,.08,.1,0,d*(r/2+.02),0,this.M.woodDark,u);return h}door(e,t,i=2.4,s=3.2,r=0,a=this.g,o=s*.6){let l=new Te;l.position.set(e,0,t),l.rotation.y=r,a.add(l),l.userData.dynamic=!0;let c=[];for(let h of[-1,1]){let u=new Te;u.position.set(h*i/2,0,0),l.add(u);let d=new Te;u.add(d);let f=i/2-.02;this.box(f,o,.08,-h*f/2,o/2,0,this.M.woodDark,d);let p=new Ts(this.leafTop(i,o,s,h),{depth:.08,bevelEnabled:!1});p.translate(0,0,-.04),ur(p),this.mesh(p,this.M.woodDark,0,0,0,d);for(let v=0;v<5;v++)for(let g=0;g<3;g++)this.sphere(.022,-h*(.18+g*(f-.3)/2),.4+v*(o-.3)/4,.05,this.M.brass,6,d);for(let v of[.55,o-.3])this.box(f-.1,.07,.03,-h*f/2,v,.05,this.M.brassDark,d);this.mesh(new Zi(.07,.012,6,16),this.M.brass,-h*(f-.15),1.15,.07,d),Ui(d),c.push({pivot:u,s:h})}return{group:l,open:h=>{for(let u of c)u.pivot.rotation.y=-u.s*h*1.75}}}leafTop(e,t,i,s){let r=T0(e,t,i-t,14).filter(l=>s<0?l.x<=1e-4:l.x>=-1e-4),a=-s*e/2,o=new _n;return r.forEach((l,c)=>c?o.lineTo(l.x+a,l.y):o.moveTo(l.x+a,l.y)),o.lineTo(a,t),o.closePath(),o}frondMat(){if(!Qt.frond){let e=document.createElement("canvas");e.width=128,e.height=512;let t=e.getContext("2d");t.strokeStyle="#5d6b33",t.lineWidth=5,t.beginPath(),t.moveTo(64,0),t.lineTo(64,512),t.stroke();for(let s=10;s<500;s+=9){let r=58*Math.sin(s/512*Math.PI)+6;for(let a of[-1,1])t.strokeStyle=s/9%3?"#6f7d3a":"#56622c",t.lineWidth=4,t.beginPath(),t.moveTo(64,s),t.quadraticCurveTo(64+a*r*.6,s+6,64+a*r,s+22),t.stroke()}let i=new Pi(e);i.colorSpace=xt,Qt.frond=new Yt({map:i,alphaTest:.45,side:2,roughness:.8,color:"#c9d0a0"}),Qt.trunk=new Yt({color:"#76593d",roughness:1})}return Qt.frond}palm(e,t,i,s=5,r=this.g,a=.15){let o=new Te;o.position.set(e,t,i),o.rotation.y=this.r()*Math.PI*2,r.add(o);let l=[];for(let f=0;f<=8;f++){let p=f/8;l.push(new P(Math.sin(p*1.4)*a*s*.3,p*s,0))}let c=new ji(l),h=new $s(c,12,.16,8,!1),u=h.attributes.position;for(let f=0;f<u.count;f++){let p=u.getY(f)/s,v=1-p*.35,g=c.getPointAt(Math.min(1,Math.max(0,p)));u.setX(f,g.x+(u.getX(f)-g.x)*v),u.setZ(f,g.z+(u.getZ(f)-g.z)*v)}h.computeVertexNormals(),this.frondMat(),this.mesh(h,Qt.trunk,0,0,0,o);let d=c.getPointAt(1);for(let f=0;f<11;f++){let p=s*(.42+this.r()*.12),v=new Gt(.62,p,1,10);v.translate(0,p/2,0);let g=v.attributes.position;for(let m=0;m<g.count;m++){let _=g.getY(m)/p;g.setZ(m,-_*_*p*.55)}v.computeVertexNormals(),this.mesh(v,Qt.frond,d.x,d.y,d.z,o).rotation.set(-.5-this.r()*.6,f/11*Math.PI*2,0,"YXZ")}return o}dome(e,t,i,s,r=this.M.plaster,a=this.g){let o=new qt(s,24,12,0,$o,0,Math.PI/2);ur(o,.5);let l=this.mesh(o,r,e,t,i,a);return this.cyl(s*.06,s*.1,s*.35,e,t+s+s*.15,i,this.M.brass,8,a),this.sphere(s*.08,e,t+s+s*.36,i,this.M.gold,10,a),l}parapet(e,t,i,s,r=this.M.plaster,a=0,o=this.g){let l=new Te;l.rotation.y=a,o.add(l),this.box(Math.abs(t-e),.5,.35,(e+t)/2,s+.25,i,r,l);for(let c=Math.min(e,t)+.3;c<Math.max(e,t);c+=.9){let h=new fi(.45,.45,.35);ur(h),this.mesh(h,r,c,s+.72,i,l)}return l}frieze(e,t,i,s,{flip:r=!1,crown:a=!0,arches:o=!0,parent:l=this.g,topY:c}={}){let h=new Te;l.add(h),r&&(h.rotation.y=Math.PI,h.position.set(e+t,0,2*i));let u=Math.abs(t-e),d=(e+t)/2;if(this.box(u,.22,.16,d,s,i+.08,this.M.carved,h),this.box(u,.08,.2,d,s-.16,i+.1,this.M.stoneDark,h),o)for(let f=Math.min(e,t)+.7;f<Math.max(e,t)-.5;f+=1.2)this.archWall({x:f,z:i+.04,width:1.05,height:1.5,depth:.08,openW:.62,spring:.8,rise:.45,band:.08,mat:this.M.plaster,trim:this.M.carved,parent:h}).position.y=s+.15,this.box(.6,1.15,.02,f,s+.75,i+.005,this.M.stoneDark,h);if(a){let f=c??s+1.9;this.box(u,.14,.5,d,f,i-.1,this.M.carved,h);for(let p=Math.min(e,t)+.35;p<Math.max(e,t);p+=.85)this.box(.42,.42,.42,p,f+.28,i-.1,this.M.stone,h)}return h}pedestal(e,t,i=.5,s=.9,r=this.g){let a=new Te;a.position.set(e,0,t),r.add(a),this.lathe([[.001,0],[i*1.25,0],[i*1.25,.1],[i*1.05,.16],[i*.88,.24],[i*.82,s-.22],[i*1,s-.14],[i*1.12,s-.1],[i*1.12,s],[.001,s]],0,0,0,this.M.stone,24,a);let o=this.cyl(i*.86,i*.86,s*.42,0,s*.5,0,this.M.carved,24,a);return o.castShadow=!1,a}};function Ui(n,e=22){n.updateMatrixWorld(!0);let t=n.matrixWorld.clone().invert(),i=new Map,s=[],r=new P;n.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.isSkinnedMesh||Array.isArray(a.material))return;for(let d=a;d&&d!==n;d=d.parent)if(d.userData.dynamic)return;let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();o.attributes.uv||o.setAttribute("uv",new $e(new Float32Array(o.attributes.position.count*2),2));for(let d of Object.keys(o.attributes))["position","normal","uv"].includes(d)||o.deleteAttribute(d);o.applyMatrix4(new Ve().multiplyMatrices(t,a.matrixWorld)),o.computeBoundingSphere();let l=o.boundingSphere;r.copy(l.center);let c=a.castShadow&&l.radius>.35,h=l.radius>e*.75,u=a.material.uuid+(c?"s":"")+(h?"B":`${Math.floor(r.x/e)},${Math.floor(r.z/e)}`);i.has(u)||i.set(u,{mat:a.material,cast:c,geos:[]}),i.get(u).geos.push(o),s.push(a)});for(let a of s)a.parent.remove(a);for(let{mat:a,cast:o,geos:l}of i.values()){let c=zo(l,!1);for(let u of l)u.dispose();if(!c)continue;c.computeBoundingSphere();let h=new Ue(c,a);h.castShadow=o,h.receiveShadow=!0,h.name="static-"+a.name,n.add(h)}}var X=(n,e,t)=>new P(n,e,t),re={spawn:X(0,0,13.6),lamp:X(0,.98,7),pedestal:X(0,0,7),monkeyStart:X(1.25,0,7.4),soukArch:X(0,0,2),carpet:X(0,.42,-46.5),dockLanding:X(0,.42,-109.5),workshopDoor:X(0,0,-118),bench:X(0,0,-127.5),craftStand:X(0,0,-126.2),motifDoor:X(0,0,-136),galleryPedestal:X(0,0,-155.5),galleryExit:X(0,0,-162),gate:X(0,0,-168),stage:X(5,0,-226),digSpot:X(5.35,0,-223.4),desertLamp:X(3.2,0,-225.2)},KM=[[-4.4,2.6,4.4,15.4],[-1.4,1.2,1.4,2.8],[-2.45,-37.2,2.45,1.4],[-7.4,-53.3,7.4,-36.9],[-6.4,-117.3,6.4,-103.9],[-1.35,-119,1.35,-117],[-6,-135.4,6,-118.7],[-1.2,-137.4,1.2,-135.2],[-3.8,-161.5,3.8,-137.2],[-.95,-168.6,.95,-161.3],[-30,-252,30,-168.2]],$M=[{x:0,z:7,r:.75},[-1.35,-128.45,1.35,-126.55],[-5.95,-125.2,-3.3,-122.3],[3.3,-125.2,5.95,-122.3],[-5.95,-132.6,-3.3,-129.7],{x:0,z:-155.5,r:.8},{x:5,z:-226,r:.75},[-30,-168.7,-1.02,-165],[1.02,-168.7,30,-165],{x:1.4,z:-229.6,r:.55},{x:8.9,z:-230.4,r:.55},{x:10.4,z:-224.8,r:.5},{x:-.4,z:-224.2,r:.5},[6.8,-222.3,8.4,-220.9],[1.85,-233.8,3.35,-232.6],[6.65,-233.8,8.15,-232.6]],c0={soukArch:[-1.6,1,1.6,2.9],courtyardBack:[-7.4,-53.4,7.4,-52.6],workshopDoor:[-1.5,-119.2,1.5,-116.9],motifDoor:[-1.3,-137.6,1.3,-135],galleryExit:[-1,-162.2,1,-161.2]},JM=[{id:"entrance",rect:[-6,1.5,6,18]},{id:"souk",rect:[-6,-37,6,1.5]},{id:"courtyard",rect:[-9,-55,9,-37]},{id:"valley",rect:[-60,-103.5,60,-55]},{id:"dock",rect:[-9,-118.2,9,-103.5]},{id:"workshop",rect:[-8,-136,8,-118.2]},{id:"gallery",rect:[-6,-162,6,-136]},{id:"desert",rect:[-80,-300,80,-162]}],h0={entrance:["entrance","souk"],souk:["entrance","souk","courtyard"],courtyard:["souk","courtyard","valley"],valley:["courtyard","valley","dock"],dock:["valley","dock","workshop"],workshop:["dock","workshop","gallery"],gallery:["workshop","gallery","desert"],desert:["gallery","desert"]},Xn=[[0,12.6],[1.7,9.4],[1.6,5.8],[0,3.6],[0,1.6],[0,-4],[.6,-10],[-.5,-16],[.4,-22],[0,-28],[0,-34.5],[0,-40],[0,-44.6],[0,-107.6],[0,-113.5],[0,-117.8],[0,-121.5],[0,-125.6],[1.95,-127.5],[1.6,-131.6],[0,-134.2],[0,-136.6],[0,-139.5],[0,-145],[0,-150.6],[0,-153.8],[1.5,-156.5],[.4,-159.6],[0,-161.8],[0,-165],[0,-168.6],[-1.6,-176],[-3.2,-184],[.5,-193],[6.5,-201],[9.2,-209],[7.6,-216],[5.6,-221.2],[5.3,-222.6]],it=n=>X(Xn[n][0],0,Xn[n][1]);function QM(n,e){let t=1e9;for(let i=29;i<Xn.length-1;i++){let[s,r]=Xn[i],[a,o]=Xn[i+1],l=a-s,c=o-r,h=l*l+c*c,u=Ft(((n-s)*l+(e-r)*c)/h),d=s+l*u-n,f=r+c*u-e;t=Math.min(t,d*d+f*f)}return Math.sqrt(t)}function Ih(n,e){let t=Math.sin(n*.045+e*.021)*.5+.5,i=Math.sin(n*.11-e*.063+1.7)*.5+.5,s=Math.sin(n*.021-e*.034+.6)*.5+.5;return t**1.8*5.5+i**2.2*1.6+s*3}function Ni(n,e){if(e>-167)return 0;let t=Ft((-167-e)/10),i=ui(Ft((QM(n,e)-5)/26)),s=ui(Ft((Math.hypot(n-re.stage.x,e-re.stage.z)-9)/30)),r=Math.sin(n*.9+e*.35)*.04+Math.sin(n*.31-e*.8)*.05;return Ih(n,e)*i*s*t+(Math.sin(n*.08+1)*.35+Math.sin(e*.05)*.45+.6)*t*s+r*t}function Dh(n,e){return e<-167?Ni(n,e):0}function eb(n,e){for(let t of JM){let[i,s,r,a]=t.rect;if(n>=i&&n<=r&&e>=s&&e<=a)return t.id}return"desert"}var E0=new P(.55,.3,-.78).normalize(),tb=class{constructor(){this.uniforms={sunDir:{value:E0.clone()},zenith:{value:new fe("#7fa2b8")},horizon:{value:new fe("#f0cfa0")},ground:{value:new fe("#c79d6a")},sunColor:{value:new fe("#fff0cf")},glow:{value:1},clouds:{value:.35},time:{value:0}},this.mesh=new Ue(new qt(450,48,24),new dt({uniforms:this.uniforms,side:1,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sunDir, zenith, horizon, ground, sunColor; uniform float glow, clouds, time; varying vec3 vDir;
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * n2(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(horizon, zenith, pow(smoothstep(-0.02, 0.75, h), 0.7));
          col = mix(col, ground, smoothstep(0.0, -0.12, h));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 900.0) * 5.0 + pow(s, 60.0) * 0.4 * glow + pow(s, 8.0) * 0.08 * glow);
          // Thin, high wisps of cloud, lit warm toward the sun.
          if (clouds > 0.001 && h > 0.0) {
            vec2 uv = d.xz / (h + 0.18) * 1.6 + vec2(time * 0.004, time * 0.0015);
            float c = fbm(uv * vec2(1.0, 2.6)) ; c = smoothstep(0.52, 0.85, c) * clouds * smoothstep(0.0, 0.18, h);
            vec3 cloudCol = mix(vec3(1.0, 0.93, 0.84), sunColor * vec3(1.0, 0.78, 0.55), pow(s, 3.0));
            col = mix(col, cloudCol, c * 0.75);
          }
          // A whisper of haze band right on the horizon.
          col = mix(col, horizon * 1.05, exp(-abs(h) * 30.0) * 0.35);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})),this.mesh.renderOrder=-10,this.mesh.frustumCulled=!1,this.mesh.name="Sky"}update(n,e=0){this.mesh.position.copy(n),this.uniforms.time.value=e}setColors(n,e,t,i){this.uniforms.zenith.value.lerp(n,t),this.uniforms.horizon.value.lerp(e,t),i!==void 0&&(this.uniforms.clouds.value+=(i-this.uniforms.clouds.value)*t)}};function al(n,e,t,i,s="#ffd9a0",r=.16){let a=n.distanceTo(e),o=new Xt(t,i,a,24,1,!0);o.translate(0,-a/2,0);let l=new dt({uniforms:{color:{value:new fe(s)},strength:{value:r},time:{value:0}},vertexShader:`varying float vY; varying vec3 vN; varying vec3 vView; uniform float time;
      void main(){ vY = uv.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vView = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; uniform float strength; varying float vY; varying vec3 vN; varying vec3 vView;
      void main(){ float edge = pow(abs(dot(normalize(vN), normalize(vView))), 1.6); float fade = smoothstep(0.0, 0.35, vY) * smoothstep(1.0, 0.75, vY) * 0.6 + smoothstep(0.0,0.9,vY)*0.4;
        gl_FragColor = vec4(color * strength * edge * fade, 1.0); }`,transparent:!0,depthWrite:!1,blending:2,side:2}),c=new Ue(o,l);return c.position.copy(n),c.quaternion.setFromUnitVectors(new P(0,-1,0),e.clone().sub(n).normalize()),c.userData.dynamic=!0,c.renderOrder=3,c.castShadow=!1,c.receiveShadow=!1,c}var u0=6,ib=4.5;new P;var Jd={sun:2.2,sunColor:"#ffe2b5",hemi:.5,sky:"#f3dcb8",groundCol:"#6b5236",env:.5,fog:"#c9ad85",fogNear:20,fogFar:140,exposure:1,sunDir:E0.toArray(),zenith:"#7fa2b8",horizon:"#f0cfa0",clouds:.35},nb=class{constructor(n,e,t,i){this.renderer=n,this.scene=e,this.M=t,this.areas=new Map,this.root=new Te,this.root.name="World",e.add(this.root),this.sky=new tb,e.add(this.sky.mesh),e.environment=t.env,this.sun=new ir("#ffe2b5",2.2),this.sun.castShadow=!0;let s=i==="low"?1024:i==="high"?4096:2048;this.sun.shadow.mapSize.set(s,s);let r=this.sun.shadow.camera;r.left=r.bottom=-20,r.right=r.top=20,r.near=1,r.far=120,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=i==="high"?2.5:1,e.add(this.sun,this.sun.target),this.hemi=new co("#f3dcb8","#6b5236",.5),e.add(this.hemi),this.pool=[];for(let a=0;a<u0;a++){let o=new tr("#ffc77d",0,8,2);o.userData.slot=null,e.add(o),this.pool.push(o)}e.fog=new Ba("#c9ad85",20,140),this.env={...Jd},this.envTarget={...Jd},this.current=null,this.override=null,this.extraLights=[],this.updaters=[],this.hidden=new Set}setHidden(n,e){e?this.hidden.add(n):this.hidden.delete(n),this.current=null}add(n){n.group.name=n.id,this.root.add(n.group),this.areas.set(n.id,n);for(let e of n.lights||[])e.area=n.id;n.update&&this.updaters.push(n)}setOverride(n){this.override=n,this.current=null}slot(n){let e=Object.assign({color:"#ffc77d",intensity:6,distance:8,area:null},n);return this.extraLights.push(e),e}removeSlot(n){this.extraLights=this.extraLights.filter(e=>e!==n)}update(n,e,t,i){Yn.time.value=e,Yn.flicker.value=1;let s=eb(t.x,t.z);if(s!==this.current){this.current=s;let u=new Set(this.override||h0[s]||[s]);if(this.override)for(let d of h0[s]||[])u.add(d);if(!this.override)for(let d of this.hidden)d!==s&&u.delete(d);for(let[d,f]of this.areas)f.group.visible=u.has(d);this.visible=u,this.envTarget={...Jd,...this.areas.get(s)?.env||{}},this.onArea?.(s)}let r=this.env,a=this.envTarget,o=1-Math.exp(-1.6*n);for(let u of["sun","hemi","env","fogNear","fogFar","exposure"])r[u]=S0(r[u],a[u],o);for(let u of["sunColor","sky","groundCol","fog"])r["_"+u]=r["_"+u]||new fe(r[u]),a["_"+u]||(a["_"+u]=new fe(a[u])),r["_"+u].lerp(a["_"+u],o);r._sunDir=r._sunDir||new P().fromArray(r.sunDir),a._sunDir||=new P().fromArray(a.sunDir).normalize(),r._sunDir.lerp(a._sunDir,o).normalize(),this.sky.uniforms.sunDir.value.copy(r._sunDir),a._zenith||(a._zenith=new fe(a.zenith),a._horizon=new fe(a.horizon)),this.sky.setColors(a._zenith,a._horizon,o,a.clouds),this.sun.intensity=r.sun,this.sun.color.copy(r._sunColor),this.hemi.intensity=r.hemi,this.hemi.color.copy(r._sky),this.hemi.groundColor.copy(r._groundCol),this.scene.environmentIntensity=r.env,this.scene.fog.color.copy(r._fog),this.scene.fog.near=r.fogNear,this.scene.fog.far=r.fogFar,this.renderer.toneMappingExposure=r.exposure;let l=40/this.sun.shadow.mapSize.x,c=Math.round(t.x/l)*l,h=Math.round(t.z/l)*l;this.sun.target.position.set(c,t.y-1.5,h),this.sun.position.copy(this.sun.target.position).addScaledVector(r._sunDir,60),this.sky.update(t,e),this.assignLights(n,t);for(let u of this.updaters)u.group.visible&&u.update(e,n,t)}assignLights(n,e){if(this._acc=(this._acc||0)+n,this._acc>.6||!this._ranked){this._acc=0;let t=[];for(let s of this.extraLights)s.off||t.push(s);for(let[s,r]of this.areas)if(this.visible?.has(s))for(let a of r.lights||[])a.off||t.push(a);for(let s of t)s._d=s.position.distanceTo(e)/Math.max(.3,Math.sqrt(s.intensity/6))-(s.priority||0)-(this.pool.some(r=>r.userData.slot===s&&!r.userData.leaving)?2.5:0);t.sort((s,r)=>s._d-r._d),this._ranked=t.slice(0,u0);let i=new Set(this._ranked);for(let s of this.pool)s.userData.slot&&!i.has(s.userData.slot)&&(s.userData.leaving=!0);for(let s of this._ranked){if(this.pool.some(a=>a.userData.slot===s)){let a=this.pool.find(o=>o.userData.slot===s);a.userData.leaving=!1;continue}let r=this.pool.find(a=>!a.userData.slot||a.userData.leaving&&a.intensity<.05);r&&(r.userData.slot=s,r.userData.leaving=!1,r.intensity=0)}}for(let t of this.pool){let i=t.userData.slot;if(!i){t.intensity=0;continue}let s=t.userData.leaving||i.off?0:i.intensity*ib*(i.flicker?Yn.flicker.value:1);t.intensity=ci(t.intensity,s,2.2,n),t.position.copy(i.position),t.color.set(i.color),t.distance=i.distance,t.userData.leaving&&t.intensity<.03&&(t.userData.slot=null,t.intensity=0)}}},Qd=(n,e,t,i=0)=>e>=n[0]-i&&e<=n[2]+i&&t>=n[1]-i&&t<=n[3]+i,sb=class{constructor(){this.closed=new Set(Object.keys(c0)),this.extra=[]}open(n){this.closed.delete(n)}close(n){this.closed.add(n)}blocked(n,e,t=.22){for(let i of $M.concat(this.extra))if(Array.isArray(i)){if(Qd(i,n,e,t))return!0}else if(Math.hypot(n-i.x,e-i.z)<i.r+t)return!0;for(let i of this.closed)if(Qd(c0[i],n,e,t))return!0;return!1}walkable(n,e,t=.22){let i=!1;for(let s of KM)if(Qd(s,n,e,0)){i=!0;break}return i&&!this.blocked(n,e,t)}move(n,e,t,i,s){return this.walkable(n+t,e+i,s)?[n+t,e+i]:this.walkable(n+t,e,s)?[n+t,e]:this.walkable(n,e+i,s)?[n,e+i]:[n,e]}ground(n,e){return Dh(n,e)}};function rb(n,e,t){let i=new Te;n.at(i);let s=5.3,r=1.2,a=16.8;n.block(-5.3,r,s,a,-.2,0,e.floorDark);for(let p of[-1,1])n.box(.04,.012,13,p*1.45,.006,8.6,e.brass);for(let p of[-1,1])n.block(p*s,r,p*5.8999999999999995,a,0,8,e.stone);n.block(-5.3-.6,a,5.8999999999999995,17.400000000000002,0,8,e.stone);let o=7.4;n.block(-5.3,8.2,s,a,o,7.800000000000001,e.woodDark),n.block(-5.3,r,s,5.8,o,7.800000000000001,e.woodDark),n.block(-5.3,5.8,-.9,8.2,o,7.800000000000001,e.woodDark),n.block(.9,5.8,s,8.2,o,7.800000000000001,e.woodDark);for(let p=1.7999999999999998;p<a;p+=1.3)Math.abs(p-7)>1.1&&n.box(2*s,.22,.18,0,7.29,p,e.wood);n.box(2*s,.3,.3,0,7,5.6,e.carvedDark),n.box(2*s,.3,.3,0,7,8.4,e.carvedDark);for(let p of[-1,1])n.box(.35,.25,15.600000000000001,p*5.1499999999999995,6.800000000000001,9,e.carved),n.box(.25,.18,15.600000000000001,p*5.2,.09,9,e.stoneDark);n.archWall({x:0,z:2,width:11.799999999999999,height:8,depth:.9,openW:3.2,spring:2.9,rise:2.15,band:.42}),n.archWall({x:0,z:16.650000000000002,width:11.799999999999999,height:8,depth:.3,openW:2.8,spring:2.7,rise:1.8,rotY:Math.PI,trim:e.carvedDark});let l=n.door(0,16.55,2.8,4.5,Math.PI,i,2.7);for(let p of[-1,1])for(let v of[4.6,12.2])n.archWall({x:p*5.22,z:v,rotY:p*Math.PI/2,width:3.4,height:6.2,depth:.16,openW:2.2,spring:2.6,rise:1.6,band:.28}),n.door(p*5.28,v,2.2,4.2,-p*Math.PI/2,i,2.6);for(let p of[-1,1])for(let v of[8.4,15.2]){n.box(.7,.42,2.2,p*4.8999999999999995,.21,v,e.stoneDark),n.box(.62,.12,2.1,p*4.88,.48,v,e.velvetRed);for(let g=0;g<2;g++)n.sphere(.22,p*4.9799999999999995,.66,v-.5+g,e.velvetRed,12).scale.set(.5,.9,1.2)}n.rug(0,0,11.6,2.4,6.6),n.rug(0,0,7,3.2,3.2,Math.PI/4);for(let p of[-1,1])n.vase(p*2.9,0,3.2,0,2.4,e.brass),n.vase(p*3.6,0,3,2,1.6,e.brassDark),n.vase(p*4.5,0,10.2,1,1.6,e.copper);n.pedestal(re.pedestal.x,re.pedestal.z,.42,.95);let c=t.lamp.clone();c.scale.setScalar(.42),c.position.set(re.lamp.x-.06,.955,re.lamp.z),c.rotation.y=-.35,c.userData.dynamic=!0,i.add(c);for(let p of[-1,1])for(let v of[3.8,6.8,10,13.2])n.lantern(p*3.3,4.6+v%2*.3,v,1.05,2.3);n.lantern(0,5.6,12.4,1.3,1.5);let h=n.flushLanterns(i,2.6),u=al(X(0,7.7,7),X(.15,0,7.1),.75,1.15,"#ffdcae",.13);i.add(u);let d=new sl(140,new wt(X(-1.1,.2,6),X(1.1,7,8)),{size:.01,opacity:.55,speed:.025,seed:3});d.points.userData.dynamic=!0,i.add(d.points);let f=new Ue(new jr(1.25,40),new Nt({color:"#ffcf8a",transparent:!0,opacity:.12,blending:2,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.set(.1,.02,7.1),f.userData.dynamic=!0,i.add(f),Ui(i),{id:"entrance",group:i,lamp:c,backDoor:l,env:{sun:.15,hemi:.16,sky:"#d9b88a",groundCol:"#3b2a1c",env:.22,fog:"#1d150e",fogNear:9,fogFar:46,exposure:1.18,sunDir:[.3,.8,-.5]},lights:[{position:X(0,5.5,7),color:"#ffd9a6",intensity:4.5,distance:9,priority:2},{position:X(0,1.6,7.4),color:"#ffb768",intensity:2.5,distance:4},{position:X(0,3.2,1.2),color:"#ffe1b0",intensity:8,distance:11,priority:1},...[-1,1].flatMap(p=>[X(p*3.3,4.4,5),X(p*3.3,4.4,12)].map(v=>({position:v,color:"#ffb35e",intensity:4.5,distance:7,flicker:!0})))],update(p){this.updateCarpet?.(p),d.update(p),u.material.uniforms.strength.value=.12+Math.sin(p*.4)*.015,h.material.emissiveIntensity=1.9},music:"mus_welcome",amb:"amb_entrance"}}var ef=new P(.16,.92,-.36).normalize();function ab(n,e,t,i){let s=new Te;n.at(s);let r=gr(42),a=1.5,o=-37.4,l=2.6,c=4.9;n.block(-4.9,o,c,a,-.2,0,e.floor);let h=[];for(let C=a;C>=-37.5;C-=4.2)h.push(C);let u=h.slice(0,-1).map(C=>C-2.1),d=[],f=[],p=[],v=[],g=[],m=(C,L,D,U,O,G,J)=>(C.position.set(L,D,U),C.userData.dynamic=!0,s.add(C),Ui(C),g.push({obj:C,name:O,line:G,size:J}),C);for(let C of[-1,1]){n.block(C*c,o,C*5.4,a,0,3.6,e.plaster);for(let L of h)n.block(C*l,L-.32,C*c,L+.32,0,3.5,e.stone),n.box(.7,.2,.75,C*2.85,.1,L,e.stoneDark),n.box(.72,.24,.76,C*2.85,3.25,L,e.carved);n.box(.3,.32,38.9,C*2.65,3.55,-35.9/2,e.wood),n.box(2.4,.2,38.9,7.5/2*C,3.65,-35.9/2,e.woodDark);for(let L=0;L<u.length;L++){let D=u[L],U=7+r()*2.6,O=r()*.25;if(n.block(C*(l+O),D-2.15,C*(3.8+O),D+2.15,3.7,U,L%3==1?e.plaster:e.stone),n.box(.2,.18,4.3,C*(l+O-.05),U-.05,D,e.stoneDark),r()>.35){let G=C*(l+O-.32),J=4.9+r()*.5,F=D+(r()-.5)*1.2;n.box(.62,.12,1.5,G,J-.85,F,e.woodDark),n.box(.62,.12,1.5,G,J+.85,F,e.woodDark),n.mashrabiya(G-C*.3,J,F,1.4,1.6,Math.PI/2);for(let k of[-.6,.6]){let H=n.box(.5,.1,.1,G+C*.12,J-1,F+k,e.wood);H.rotation.z=C*.6}}else n.box(.06,1.2,.8,C*(l+O-.03),5.2,D,e.dark),n.box(.08,1.3,.5,C*(l+O-.06),5.2,D+.68,e.wood);r()>.3&&n.banner(C*(l+O-.04),6.6,D+1.2,1.1,2.4+r(),[e.bannerKilim,e.bannerBorder,e.bannerIndigo,e.rugHang,e.bannerStripe][L%5],C<0?Math.PI/2:-Math.PI/2)}}let _=[];for(let C=0;C<h.length;C++){let L=h[C];if(n.box(5.8,.24,.22,0,5.4,L,e.wood),C<h.length-1){if(C%3==2){_.push(L-2.1);continue}n.awning(0,5.45,L-2.1,5.5,3.9,[e.sailStripe,e.sailKilim,e.sailOchreStripe][C%3],0,.45)}if(n.lantern(.9,4.3+r()*.4,L,1,1),n.lantern(-.9,4.2+r()*.4,L+.2,.9,1.1),C%2==1&&C<h.length-1){let D=L-1.05,U=[];for(let O=0;O<=12;O++){let G=O/12;U.push([-2.6+G*2*l,4.699999999999999-Math.sin(G*Math.PI)*.45,D])}n.tube(U,.006,e.woodDark,s,24,4);for(let O=1;O<12;O++){let[G,J]=U[O],F=new Ue(new at().setFromPoints([new P(-.11,0,0),new P(.11,0,0),new P(0,-.28,0)]),[e.bannerKilim,e.bannerBorder,e.bannerIndigo,e.bannerStripe][O%4]);F.geometry.setAttribute("uv",new $e(new Float32Array([0,1,1,1,.5,0]),2)),F.geometry.computeVertexNormals(),F.position.set(G,J,D),F.castShadow=!0,s.add(F)}}}for(let C of[-11.1,-23.7])n.archWall({x:0,z:C,width:5.8,height:7.4,depth:.7,openW:3.7,spring:3.1,rise:2.3,band:.36});let b=(C,L,D)=>{let U=C*3.75,O=C*2.95;n.banner(C*2.65,3.38,L,3.6,.42,[e.clothCream,e.clothTerracotta,e.clothBurgundy,e.clothOchre][Math.abs(Math.round(L))%4],C<0?Math.PI/2:-Math.PI/2);let G=(F=.8,k=3.2,H=.75)=>(n.table(O,L,k,H,F,Math.PI/2,s,e.wood),n.cloth(O,F+.04,L,k+.04,H,Math.abs(Math.round(L))%2?e.tableCloth:e.tableCloth2,C<0?Math.PI/2:-Math.PI/2),F+.05),J=(F=3)=>{for(let k=0;k<F;k++)n.box(.42,.05,3.6,C*4.67,.6+k*.75,L,e.wood);n.box(.05,2.4,.05,C*4.67,1.2,L-1.75,e.woodDark),n.box(.05,2.4,.05,C*4.67,1.2,L+1.75,e.woodDark)};if(D==="lanterns"){let F=G();for(let k=0;k<14;k++)n.lantern(U+(r()-.5)*1.4,2.2+r()*1,L+(r()-.5)*3.2,.6+r()*.35,.6+r());for(let k=0;k<5;k++)k%2&&n.vase(O,F,L-1.3+k*.65,3,.9,e.brass);f.push({kind:"lanterns",position:X(U,2.6,L)})}else if(D==="ceramics"){let F=G();J(3);let k=[e.ceramicTeal,e.ceramicCream,e.ceramicOchre];for(let H=0;H<7;H++)(H%2?n.vase.bind(n):()=>{})(O+(r()-.5)*.3,F,L-1.4+H*.46,H%4,.75+r()*.5,k[H%3]);for(let H=0;H<3;H++)for(let oe=0;oe<6;oe++)n.vase(C*4.65,.63+H*.75,L-1.5+oe*.6,(oe+H)%4,.6+r()*.4,k[(oe+H)%3])}else if(D==="spices"){for(let k=0;k<6;k++)n.sack(C*(3+k%2*.62),L-1.3+Math.floor(k/2)*1.25,.24,[e.spiceSaffron,e.spiceRed,e.spiceGreen,e.spiceBrown,e.spiceRed,e.spiceSaffron][k]);J(2);for(let k=0;k<10;k++)n.vase(C*4.65,.63+k%2*.75,L-1.5+(k>>1)*.75,1,.55,e.ceramicCream);let F=n.box(.04,.9,.04,C*3.9,1.25,L+1.5,e.brass);F.castShadow=!0,n.box(.6,.02,.02,C*3.9,1.7,L+1.5,e.brass);for(let k of[-.28,.28])n.vase(C*3.9+k,1.35,L+1.5,3,.7,e.brass)}else if(D==="textiles"){for(let F=0;F<3;F++)n.banner(C*4.8500000000000005,3.3,L-1.2+F*1.2,1.1,2.6,e.rugHang,C<0?Math.PI/2:-Math.PI/2);for(let F=0;F<9;F++)n.rolledRug(C*(3.3+F%3*.24),.12+Math.floor(F/3)*.22,L+.6,1.5,.11,Math.PI/2);for(let F=0;F<4;F++)n.box(.8,.07,.6,O,.06+F*.08,L-1,[e.clothTerracotta,e.clothCream,e.clothIndigo,e.clothBurgundy][F])}else if(D==="brass"){let F=G();for(let H=0;H<6;H++)(H%2?n.vase.bind(n):()=>{})(O+(r()-.5)*.3,F,L-1.35+H*.54,H%4,.8+r()*.6,H%2?e.brass:e.copper);J(3);for(let H=0;H<3;H++)for(let oe=0;oe<5;oe++)n.vase(C*4.65,.63+H*.75,L-1.4+oe*.7,(oe*3+H)%4,.8,H%2?e.brassDark:e.brass);let k=new Te;k.position.set(O-C*.12,F+.02,L+.25),k.userData.dynamic=!0,s.add(k),n.lathe([[.001,0],[.09,0],[.11,.04],[.06,.1],[.08,.2],[.03,.3],[.001,.33]],0,0,0,e.gold,18,k),n.mesh(new Zi(.075,.008,6,24),e.gold,0,.2,0,k).rotation.x=Math.PI/2,v.push(k)}else if(D==="charms"){G(.75,2.6);for(let F=0;F<4;F++)F%2||n.vase(O,.8,L-1+F*.6,3,.8,e.brassDark);for(let F=0;F<7;F++){let k=new Te;k.position.set(C*2.75,3.3,L-1.5+F*.5),k.userData.dynamic=!0,s.add(k);let H=.9+r()*.8;n.cyl(.004,.004,H,0,-H/2,0,e.brassDark,4,k);for(let oe=0;oe<6;oe++){let ce=n.mesh(new js(.03,.05,6),e.brass,0,-H*(oe+1)/6,0,k);ce.rotation.x=Math.PI}Ui(k),p.push(k)}}else if(D==="pearls"){let F=G(.85,3);for(let k=0;k<4;k++){n.box(.42,.05,.6,O,F+.02,L-1+k*.66,e.velvet);for(let H=0;H<14;H++)n.sphere(.018+r()*.006,O+(r()-.5)*.32,F+.065,L-1+k*.66+(r()-.5)*.48,e.pearl,10)}for(let k=0;k<4;k++){let H=[];for(let oe=0;oe<=12;oe++){let ce=oe/12;H.push([C*4.1,2.1-Math.sin(ce*Math.PI)*.55,L-1.3+k*.85+ce*.6])}n.tube(H,.012,e.pearl,s,30,6)}n.box(.05,.05,3.2,C*4.1,2.12,L,e.woodDark)}else if(D==="gold"){n.box(.7,.9,3,O,.45,L,e.wood);for(let k of[.12,.88])n.box(.72,.03,3.02,O,k,L,e.brass);for(let k=0;k<4;k++)n.box(.02,.6,.62,O+-C*.36,.48,L-1.1+k*.73,e.carved);n.box(.66,.05,2.94,O,.92,L,e.velvet);let F=n.box(.7,.4,3,O,1.15,L,e.glass);F.castShadow=!1;for(let k=0;k<6;k++){let H=new Te;H.scale.setScalar(.42),H.position.set(O,.99,L-1.2+k*.48),H.rotation.x=-Math.PI/2+.3,H.rotation.z=r(),H.userData.dynamic=!0,s.add(H),(k===2||k===4)&&d.push(H.position.clone().add(X(0,.06,0)))}n.box(.05,1.7,3.2,C*4.86,1.95,L,e.velvet);for(let k=0;k<4;k++){let H=L-1.2+k*.8,oe=[];for(let Qe=0;Qe<=16;Qe++){let Je=Qe/16;oe.push([C*4.82,2.6-Math.sin(Je*Math.PI)*.45,H-.25+Je*.5])}n.tube(oe,.008,e.gold,s,32,6);let ce=new Te;ce.scale.setScalar(.22),ce.position.set(C*4.800000000000001,2.1,H),ce.rotation.set(0,C<0?Math.PI/2:-Math.PI/2,0),s.add(ce),n.sphere(.015,C*4.83,2.62,H-.26,e.brass,8),n.sphere(.015,C*4.83,2.62,H+.26,e.brass,8)}}else if(D==="cushions"){for(let F=0;F<8;F++)n.sphere(.3,C*(3.2+F%2*.7),.22+Math.floor(F/4)*.36,L-1.2+F%4*.8,[e.velvetRed,e.clothOchre,e.clothIndigo,e.clothTerracotta][F%4],12).scale.set(1,.45,1);for(let F=0;F<2;F++)n.banner(C*4.8500000000000005,3.3,L-.8+F*1.6,1.4,2.8,e.rugHang,C<0?Math.PI/2:-Math.PI/2)}else if(D==="shut"){n.box(.12,3.2,3.6,C*2.8000000000000003,1.6,L,e.woodDark);for(let F=0;F<6;F++)n.box(.05,3.1,.06,C*2.72,1.6,L-1.6+F*.64,e.wood)}};{let C=new Te;n.lathe([[.001,0],[.06,0],[.07,.03],[.05,.06],[.02,.09],[.035,.1]],0,0,0,e.brass,18,C);let L=n.cyl(.008,.02,.12,.08,.05,0,e.brass,8,C);L.rotation.z=-1.1,n.mesh(new Zi(.03,.006,6,16),e.brass,-.075,.06,0,C).rotation.y=Math.PI/2,m(C,-2.95,.86,u[0]+1,"Oil lamp","Spun on a lathe from one disc of brass, then the spout is soldered and the seam hidden with a file.",.17);let D=new Te;n.lathe([[.001,0],[.05,0],[.11,.04],[.13,.07],[.125,.075]],0,0,0,e.ceramicTeal,24,D),m(D,2.95,.86,u[0]+.9,"Glazed bowl","Thrown on a kick wheel and glazed with copper oxide, which the kiln turns this deep sea-green.",.2);let U=new Te,O=[];for(let J=0;J<=24;J++){let F=J/24*Math.PI*2;O.push(new P(Math.cos(F)*.07,0,Math.sin(F)*.05))}for(let J=0;J<24;J++)n.sphere(.008,O[J].x,.008,O[J].z,e.pearl,10,U);m(U,-2.95,.91,u[4]+.9,"Seed-pearl strand","Each pearl is drilled by hand and knotted on silk, so a broken thread never loses more than one.",.18);let G=new Te;n.lathe([[.001,0],[.04,0],[.05,.03],[.05,.04]],0,0,0,e.copper,16,G),n.cyl(.006,.006,.14,.09,.03,0,e.woodDark,6,G).rotation.z=Math.PI/2,m(G,-3,.51,u[1]-1.3,"Spice scoop","Copper, beaten into a cup over a wooden form; the handle is olive wood, worn smooth by years of use.",.16)}let x=["lanterns","spices","brass","textiles","pearls","lanterns","textiles","cushions","shut"],M=["ceramics","textiles","charms","ceramics","gold","spices","brass","ceramics","shut"];u.forEach((C,L)=>{b(-1,C,x[L]),b(1,C,M[L])});let S=t0({props:t.props,group:s,rows:h,bays:u,left:x,right:M,M:e}),E=[];for(let[C,L]of[[-1,u[1]+1.2],[1,u[4]-1],[-1,u[6]+1.4],[1,u[1]-1.3],[1,u[3]+1.2],[-1,u[2]-1.4]]){n.box(.44,.42,.44,C*4.12,.21,L,e.woodDark);let D=t.artisan.clone();D.position.set(C*3.95,0,L),D.rotation.y=C<0?Math.PI/2:-Math.PI/2,D.scale.setScalar(1.05),D.userData.dynamic=!0,s.add(D),Ui(D),E.push(D)}let y=n.flushLanterns(s,2.4),w=[];for(let C of _){let L=X(-.3,7.5,C),D=al(L,L.clone().addScaledVector(ef,-7.5/ef.y),1.4,1.9,"#ffe2b4",.17);s.add(D),w.push(D)}let A=new sl(220,new wt(X(-2.4,.3,o),X(2.4,5,a)),{size:.009,opacity:.45,speed:.02,seed:9});A.points.userData.dynamic=!0,s.add(A.points),Ui(s);let I=[];for(let C=0;C<u.length-1;C++)I.push({position:X(C%2?1.5:-1.5,3,u[C]),color:"#ffb969",intensity:5,distance:8,flicker:!0});return I.push({position:X(0,3.2,1.8),color:"#ffe1b0",intensity:6,distance:9}),{id:"souk",kp:S,group:s,shimmer:d,reactors:f,charms:p,brassPieces:v,merchants:E,curios:g,env:{sun:3,sunColor:"#ffe0b0",hemi:1.05,sky:"#f7e2c0",groundCol:"#8a6a48",env:.85,fog:"#d4b48a",fogNear:28,fogFar:130,exposure:1.05,sunDir:ef.toArray()},lights:I,update(C,L,D){A.update(C);for(let U of p)U.rotation.z=Math.sin(C*1.3+U.position.z*3)*.04*(1+(U.userData.excite||0)*6);for(let U of p)U.userData.excite&&(U.userData.excite*=.985);y.material.emissiveIntensity=1.8*(1+.25*(this.lanternBoost||0)),n0(S,L||.016,D,y.material.emissiveIntensity)},music:"mus_souk",amb:"amb_souk"}}var tf=new Map;function ob(n,e){if(tf.has(e))return tf.get(e);let t=n.rug.clone();t.side=2;let i={value:e==="ride"?.4:.15};return t.userData.flutter=i,t.onBeforeCompile=s=>{s.uniforms.uTime=Yn.time,s.uniforms.uFlutter=i,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uFlutter;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 cw = modelMatrix * vec4(0.0,0.0,0.0,1.0);
        float ph = cw.x * 0.7 + cw.z * 0.37;
        float along = position.z; float across = position.x;
        float wave = sin(along * 2.6 - uTime * (1.6 + uFlutter * 3.0) + ph) * (0.012 + uFlutter * 0.03) + sin(across * 3.1 + uTime * 1.1 + ph) * 0.008;
        float edge = pow(abs(along) / 1.6, 4.0) * 0.06 + pow(abs(across) / 1.1, 6.0) * 0.03;
        transformed.y += wave + edge;`)},t.customProgramCacheKey=()=>"carpet-"+e,tf.set(e,t),t}function Oh(n,e,t=1.9,i=2.8,s="parked"){let r=new Te;r.userData.dynamic=!0;let a=new fi(t,.03,i,12,1,18),o=new Ue(a,ob(e,s));o.castShadow=!0,o.receiveShadow=!0,r.add(o);for(let l of[-1,1]){let c=new Ue(new Gt(t*.96,.12),n.fringeMat());c.rotation.x=-Math.PI/2+l*.15,c.position.set(0,0,l*(i/2+.06)),r.add(c)}return r.userData.w=t,r.userData.d=i,r.userData.flutter=o.material.userData.flutter,r}function lb(n,e,t){let i=new Te;n.at(i);let s=-37.2,r=-54.4;n.block(-8.6,r,8.6,s,-.25,0,e.floor);let a=new _n;for(let f=0;f<16;f++){let p=f/16*Math.PI*2,v=f%2?1.25:2.1;f?a.lineTo(Math.cos(p)*v,Math.sin(p)*v):a.moveTo(Math.cos(p)*v,Math.sin(p)*v)}let o=new so(a);o.rotateX(-Math.PI/2),n.mesh(o,e.floorDark,re.carpet.x,.004,re.carpet.z).castShadow=!1;let l=n.mesh(new Zi(2.3,.025,4,64),e.brass,re.carpet.x,.004,re.carpet.z);l.rotation.x=-Math.PI/2;for(let f of[-1,1]){n.block(f*8.5,r,f*9.1,s,0,9,e.stone);for(let p=0;p<3;p++){let v=-40.1-p*5.7;n.archWall({x:f*8,z:v,rotY:f*Math.PI/2,width:5.75,height:6.2,depth:.7,openW:3.8,spring:3.2,rise:2.2,band:.34}),n.banner(f*8.42,4.6,v,1.6,3.6,e.rugHang,f<0?Math.PI/2:-Math.PI/2),n.lantern(f*7.3,4.2,v-2.85,1.05,1.3),n.box(.6,2.8,5.7,f*8,7.6,v,e.plaster),n.mashrabiya(f*7.69,7.4,v,2,1.6,Math.PI/2)}n.box(.9,.3,17.199999999999996,f*7.9,6.3,-91.6/2,e.carved)}n.archWall({x:0,z:-37.35,width:17.2,height:9,depth:.6,openW:4.6,spring:3.4,rise:2.4,band:.4}),n.archWall({x:0,z:-54,width:17.2,height:10.5,depth:1.2,openW:6.6,spring:4.6,rise:3.6,band:.55}),n.box(6.4,.9,.4,0,.45,-54.199999999999996,e.carved),n.frieze(-8,8,-53.379999999999995,8.55,{topY:10.5}),n.frieze(-8,8,-37.67,7,{flip:!0,topY:9});for(let f of[-1,1]){n.banner(f*5.2,8.2,-53.339999999999996,1.3,5.2,f<0?e.bannerKilim:e.bannerBorder,0),n.banner(f*5.6,6.9,-37.7,1.2,4.2,e.rugHang,Math.PI),n.lantern(f*2.3,5.6,-53,1.2,2.4);for(let p=0;p<2;p++)n.vase(f*(2.7+p*.55),0,-53.05,p%2?2:0,1.7,p?e.copper:e.brass)}n.lantern(0,7,-53.9,1.4,1.2),n.rug(-5.2,0,-44,2.4,3.2,Math.PI/2);for(let f=0;f<3;f++)n.sphere(.34,-6.6+f*.05,.18,-45.2+f*1.1,[e.velvetRed,e.tableCloth,e.tableCloth2][f],12).scale.set(1.2,.45,1);n.cyl(.42,.42,.04,-5.2,.42,-44,e.brass,24),n.cyl(.05,.08,.4,-5.2,.2,-44,e.woodDark,8);for(let f=0;f<3;f++)n.vase(-5.35+f*.16,.44,-44.1+f%2*.15,3,.5,e.ceramicCream);n.rug(5.4,0,-40.5,2.2,3,Math.PI/2);for(let f of[-1,1])n.column(f*3.9,-53,4.5,.26);n.block(-9,-55,9,-53.8,-10,0,e.stone);let c=[];for(let[f,p,v,g]of[[-4.6,.55,-41.5,.25],[4.8,.9,-42.5,-.35],[-5,1.35,-48.6,.1],[4.6,.6,-50.2,-.15],[-2.4,2.1,-52,.5]]){let m=Oh(n,e,1.7,2.5);m.position.set(f,p,v),m.rotation.y=g,i.add(m),c.push({c:m,y:p,phase:f*1.3+v})}let h=Oh(n,e,2,2.9,"ride");h.position.copy(re.carpet),i.add(h);let u=n.mesh(new Yr(.11,.9,6,14).rotateZ(Math.PI/2),e.tableCloth,0,.1,.95,h);u.castShadow=!0;for(let[f,p]of[[-6.6,-38.6],[6.6,-38.6],[-6.6,-52.8],[6.6,-52.8]])n.lathe([[.001,0],[.34,0],[.5,.55],[.55,.62]],f,0,p,e.clay,16),n.palm(f,.55,p,3.2,i,.08);let d=n.flushLanterns(i,2.2);return Ui(i),{id:"courtyard",group:i,carpet:h,parked:c,env:{sun:3.2,sunColor:"#ffe3b8",hemi:1,sky:"#f4dfbd",groundCol:"#8a6a48",env:.8,fog:"#d9bf98",fogNear:30,fogFar:160,exposure:1.05,sunDir:[.5,.62,-.6]},lights:[{position:X(-6.8,3.6,-45),color:"#ffbb6a",intensity:4,distance:8,flicker:!0},{position:X(6.8,3.6,-45),color:"#ffbb6a",intensity:4,distance:8,flicker:!0},{position:X(0,3,-38.5),color:"#ffd9a0",intensity:4,distance:8}],update(f){for(let p of c)p.c.position.y=p.y+Math.sin(f*.9+p.phase)*.05;d.material.emissiveIntensity=1.65},music:"mus_souk",amb:"amb_souk"}}function cf({center:n,count:e=14,radius:t=18,height:i=10,spread:s=6,color:r="#3b3128",speed:a=.12,size:o=.32,seed:l=1}){let c=new at;c.setAttribute("position",new $e(new Float32Array([0,0,.18,-.05,0,-.12,.05,0,-.12,0,0,.05,-.55,0,-.05,0,0,-.08,0,0,.05,.55,0,-.05,0,0,-.08]),3)),c.setAttribute("flap",new $e(new Float32Array([0,0,0,0,1,0,0,1,0]),1));let h=new Nt({color:r,side:2,fog:!0});h.onBeforeCompile=M=>{M.uniforms.uTime=Yn.time,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; attribute float flap; attribute float phase;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float f = sin(uTime * 9.0 + phase * 6.28) * 0.6 + 0.15;
        transformed.y += flap * abs(transformed.x) * f;`)},h.customProgramCacheKey=()=>"bird";let u=new yn(c,h,e),d=new Float32Array(e),f=l,p=()=>(f=f*16807%2147483647)/2147483647,v=[];for(let M=0;M<e;M++)d[M]=p(),v.push({a:p()*Math.PI*2,r:t*(.6+p()*.5),h:i+(p()-.5)*s,w:a*(.8+p()*.4),bob:p()*10});c.setAttribute("phase",new vn(d,1)),u.frustumCulled=!1,u.userData.dynamic=!0,u.castShadow=!1;let g=new Ve,m=new pt,_=new P,b=new P(o,o,o),x=new P(0,1,0);return u.userData.update=M=>{for(let S=0;S<e;S++){let E=v[S],y=E.a+M*E.w;_.set(n.x+Math.cos(y)*E.r,n.y+E.h+Math.sin(M*.7+E.bob)*.8,n.z+Math.sin(y)*E.r*.7),m.setFromAxisAngle(x,Math.atan2(-Math.sin(y),Math.cos(y)*.7)),g.compose(_,m,b),u.setMatrixAt(S,g)}u.instanceMatrix.needsUpdate=!0},u}function cb(n,e){let t=new Te;n.at(t);let i=gr(808);n.block(-90,-104.5,90,-54,-9.5,-9,e.floorDark);let s=[e.plaster,e.stone,e.plaster],r=(u,d)=>Math.abs(u)<6&&d<-60&&d>-100;for(let u=-56;u>-101.5;u-=7+i()*3)for(let d=-70;d<70;d+=6+i()*4){let f=4+i()*4,p=4+i()*3.5,v=d+f/2,g=u-p/2;if(Math.abs(v)<2.4&&g<-58&&g>-101)continue;let m=(r(v,g)?-3.6:-3.2)+i()*3.8-Math.max(0,Math.abs(v)-30)*.02,_=s[i()*3|0];n.block(v-f/2,g-p/2,v+f/2,g+p/2,-9,m,_),n.box(f+.15,.35,.18,v,m+.17,g-p/2,_),n.box(f+.15,.35,.18,v,m+.17,g+p/2,_),n.box(.18,.35,p,v-f/2,m+.17,g,_),n.box(.18,.35,p,v+f/2,m+.17,g,_);let b=i();if(b<.12?n.dome(v,m,g,Math.min(f,p)*.42,i()>.5?e.plaster:e.stone):b<.3?n.awning(v,m+2.1,g,f*.7,p*.6,[e.sailCream,e.sailTerracotta,e.sailOchre][i()*3|0],0,.25):b<.45&&n.box(1.1,.9,1.1,v+(i()-.5)*f*.5,m+.45,g+(i()-.5)*p*.5,e.stoneDark),Math.abs(v)<26)for(let x=-6.8;x<m-1.2;x+=2.8)for(let M=-1;M<=1;M+=2)i()>.55&&(n.box(.55,.9,.08,v+M*f*.25,x,g+p/2+.03,e.woodDark),n.box(.7,.08,.2,v+M*f*.25,x-.5,g+p/2+.08,e.stoneDark));if(i()<.22&&Math.abs(v)<30){let x=m+1.1;n.tube([[v-f*.4,x,g],[v,x-.15,g],[v+f*.4,x,g]],.01,e.woodDark,t,8,4);for(let M=0;M<4;M++)n.banner(v-f*.3+M*f*.2,x-.05,g,.45,.7,[e.bannerStripe,e.clothTerracotta,e.bannerIndigo,e.clothOchre][M],0);for(let M of[-1,1])n.box(.06,1.2,.06,v+M*f*.4,m+.6,g,e.woodDark)}i()<.07&&!r(v,g)&&n.palm(v+(i()-.5)*f*.4,m,g+(i()-.5)*p*.4,4+i()*2)}let a=[e.bannerKilim,e.bannerBorder,e.bannerIndigo,e.rugHang,e.bannerStripe,e.clothTerracotta],o=0;for(let u of[-66,-76,-86]){for(let d of[-1,1])n.block(d*3.3,u-1.1,d*5.5,u+1.1,-9,9.2,e.stone),n.box(2.6,.35,2.6,d*4.4,9.35,u,e.carved),n.dome(d*4.4,9.5,u,.95,e.plaster),n.mashrabiya(d*3.27,6.8,u,.9,1.4,Math.PI/2);n.box(7.2,.34,.34,0,8.4,u,e.woodDark),n.box(7.2,.12,.42,0,8.62,u,e.wood);for(let d of[-1,1])for(let f=0;f<2;f++)n.banner(d*(1.9+f*.85),8.25,u+.05,.75,3.4+i()*1.2,a[o++%a.length],0);n.lantern(0,7.6,u,1.1,.5),n.awning(0,8.2,u+.25,7,.5,e.sailKilim,0,.5)}for(let u of[-60,-71,-81,-93,-98])n.palm((i()-.5)*2.4,-9,u,7+i()*3);let l=X(15,-9,-80);n.cyl(1.5,1.8,18,l.x,0,l.z,e.stone,16),n.cyl(2.2,1.6,.6,l.x,9.2,l.z,e.carved,16),n.cyl(1.1,1.3,6,l.x,12.5,l.z,e.plaster,16),n.cyl(1.6,1.2,.5,l.x,15.600000000000001,l.z,e.carved,16),n.dome(l.x,15.8,l.z,1.1,e.plaster),n.block(-24,-79,-12,-91,-9,2.5,e.stone),n.dome(-18,2.5,-85,5.2,e.plaster);for(let u of[-1,1])n.dome(-18+u*7,-1.5,-85,2.4,e.plaster);n.block(-28,-79,-26,-81,-9,8,e.stone),n.dome(-27,8,-80,1,e.plaster),n.block(-12,-104.1,12,-102.9,-9,0,e.stone);let c=n.flushLanterns(t,2),h=[cf({center:X(-6,-9,-78),count:16,radius:22,height:21,seed:3}),cf({center:X(14,-9,-62),count:9,radius:12,height:17,speed:.16,seed:9})];for(let u of h)t.add(u);return Ui(t),{id:"valley",group:t,env:{sun:3.4,sunColor:"#ffe3b8",hemi:1,sky:"#f4dfbd",groundCol:"#8a6a48",env:.85,fog:"#dcc29c",fogNear:35,fogFar:220,exposure:1.05,sunDir:[.5,.5,-.7]},lights:[],update(u){c.material.emissiveIntensity=1.5;for(let d of h)d.userData.update(u)},music:"mus_souk",amb:"amb_flight"}}function hb(n,e){let t=new Te;n.at(t);let i=-103.6,s=-118.4;n.block(-7.4,s,7.4,i,-9,0,e.stone),n.block(-7.4,s,7.4,i,-.02,0,e.floor),n.box(2.6,.012,3.4,0,.006,-109.5,e.floorDark);for(let l of[-1,1])n.box(.05,.014,3.4,l*1.3,.008,-109.5,e.brass),n.box(2.6,.014,.05,0,.008,-109.5+l*1.7,e.brass);for(let l of[-1,1]){let c=l*2.1,h=l*7;n.box(Math.abs(h-c),.12,.3,(c+h)/2,1,-103.5,e.wood),n.box(Math.abs(h-c),.12,.26,(c+h)/2,.1,-103.5,e.stoneDark);for(let u=Math.min(c,h);u<=Math.max(c,h);u+=.32)n.cyl(.035,.045,.85,u,.55,-103.5,e.wood,8);n.box(.35,1.5,.35,c,.75,-103.5,e.carved),n.lantern(c,1.75,-103.5,.8,0)}for(let l of[-1,1]){n.block(l*7,s,l*7.6,i,0,7.5,e.stone),n.archWall({x:l*6.95,z:-110.5,rotY:l*Math.PI/2,width:4.6,height:6,depth:.2,openW:1.8,spring:2.4,rise:1.2,band:.26}),n.door(l*7.05,-110.5,1.8,3.6,-l*Math.PI/2,t,2.4),n.box(1.1,.15,3.4,l*6.45,4.2,-110.5,e.woodDark);for(let c=-112;c<=-109;c+=.3)n.cyl(.025,.025,.8,l*5.95,4.65,c,e.wood,6);n.box(.1,.1,3.4,l*5.95,5.05,-110.5,e.wood),n.box(.12,1.6,.12,l*6.3,.8,-105.5,e.wood),n.box(.12,1.6,.12,l*6.3,.8,-107.5,e.wood);for(let c=0;c<4;c++)n.rolledRug(l*6.3,.35+c*.38,-106.5,2.1,.12,Math.PI/2)}n.archWall({x:0,z:-118.25,width:15.2,height:8.5,depth:.7,openW:2.7,spring:2.8,rise:1.8,band:.45}),n.box(15.2,.35,.9,0,8.5,-118.25,e.carved),n.frieze(-7,7,-117.9,6.6,{topY:8.75,arches:!1}),n.box(3.6,.16,1,0,5.15,-117.45,e.woodDark);for(let l=-1.7;l<=1.7;l+=.22)n.cyl(.025,.03,.75,l,5.6,-116.98,e.wood,6);n.box(3.6,.08,.1,0,5.98,-116.98,e.wood);for(let l of[-1.5,1.5]){let c=n.box(.14,.7,.14,l,4.75,-117.65,e.woodDark);c.rotation.x=.6}n.mashrabiya(0,6.2,-117.87,1.6,1.6,0);let r=n.door(0,-118.35000000000001,2.7,4.6,0,t,2.8);n.mashrabiya(-3.8,5.6,-117.88000000000001,1.8,2.2,0),n.mashrabiya(3.8,5.6,-117.88000000000001,1.8,2.2,0);for(let[l,c]of[[-5.6,e.rugHang],[-4.4,e.bannerKilim],[4.4,e.bannerBorder],[5.6,e.rugHang]])n.banner(l,4.4,-117.84,1,3.2,c,0);for(let[l,c,h]of[[-6.1,-104.6,0],[6.1,-104.6,2],[-3.2,-117.2,1],[3.2,-117.2,0]])n.vase(l,0,c,h,1.8,h===1?e.copper:e.brass);for(let[l,c]of[[5.8,-113.2],[5.3,-112.6],[5.9,-112.3]])n.box(.6,.5,.6,l,.25,c,e.wood);n.box(.5,.4,.5,5.6,.7,-112.9,e.woodDark),n.awning(0,5.4,-107,14,4.5,e.sailStripe,0,.45),n.awning(0,5.6,-112.2,14,4.5,e.sailKilim,0,.45);for(let l of[-104.8,-109.6,-114.6])n.box(14,.22,.22,0,5.4,l,e.wood);for(let l of[-4.5,0,4.5])for(let c of[-107.2,-112.3])n.lantern(l,4.4,c,1,.8);for(let[l,c]of[[-5.6,-116.8],[5.6,-116.8]])n.lathe([[.001,0],[.32,0],[.4,.62],[.45,.7]],l,0,c,e.clay,16),n.palm(l,.62,c,3,t,.06);let a=[];for(let[l,c,h,u]of[[-4.4,.45,-108.5,.1],[4.5,.75,-107.8,-.15],[-4.6,.6,-113.6,-.05],[4.4,.4,-114,.2]]){let d=Oh(n,e,1.6,2.4);d.position.set(l,c,h),d.rotation.y=u,t.add(d),a.push({c:d,y:c,phase:l+h})}let o=n.flushLanterns(t,2.2);return Ui(t),{id:"dock",group:t,door:r,parked:a,env:{sun:3.1,sunColor:"#ffdfae",hemi:.95,sky:"#f4dfbd",groundCol:"#8a6a48",env:.8,fog:"#dcc29c",fogNear:30,fogFar:200,exposure:1.05,sunDir:[.55,.5,-.66]},lights:[{position:X(-4.5,3.6,-110),color:"#ffbb6a",intensity:4,distance:8,flicker:!0},{position:X(4.5,3.6,-110),color:"#ffbb6a",intensity:4,distance:8,flicker:!0},{position:X(0,2.6,-116.6),color:"#ffcf8a",intensity:4,distance:6}],update(l){for(let c of a)c.c.position.y=c.y+Math.sin(l*.8+c.phase)*.04;o.material.emissiveIntensity=1.65},music:"mus_souk",amb:"amb_souk"}}var pr=Math.PI*2,Gi=(n,e,t=0)=>new P(n,e,t);function Ma(n,e,t=!1,i){let s=new ji(n,t,"centripetal");return new $s(s,i||Math.max(12,n.length*3),e,5,t)}function rl(n){let e=n.geometry.index.count;return n.userData.grow=t=>{let i=Math.floor(Ft(t)*e/30)*30;n.geometry.setDrawRange(0,i),n.visible=i>0},n}function ub(n,e){let t=[];for(let s=0;s<=18;s++){let r=s/18;t.push(Gi(r*n,Math.sin(Math.PI*r)**.85*e*(1-.25*r),0))}for(let s=17;s>0;s--){let r=s/18;t.push(Gi(r*n,-(Math.sin(Math.PI*r)**.85)*e*(1-.25*r),0))}let i=[[Gi(0,0),Gi(n*.5,.004),Gi(n*.95,0)]];for(let s=1;s<=4;s++){let r=s/5.5;for(let a of[-1,1])i.push([Gi(r*n,0),Gi(r*n+n*.1,a*e*.35),Gi(r*n+n*.16,a*e*.62*Math.sin(Math.PI*(r+.1)))])}return{outline:t,veins:i}}function db(n,e){let t=[];for(let i=0;i<=14;i++){let s=i/14*pr,r=(1-Math.cos(s))/2;t.push(Gi(r*n,Math.sin(s)*e*Math.sin(Math.PI*r)**.6,0))}return t.pop(),t}function C0(n,e,t=5,i=.0035){let s=new Te;s.userData.petals=[];let r=[];for(let l=0;l<t;l++){let c=Ma(db(e,e*.42),i,!0,30);c.rotateZ(l/t*pr),r.push(c)}let a=new Ue(zo(r),n.gold);a.castShadow=!0,s.add(a);for(let l of r)l.dispose();s.userData.petalMesh=a;let o=new Ue(new qt(e*.22,14,10),n.pearl);return o.position.z=e*.05,s.add(o),s.userData.pearl=o,s}function R0(n,e,t,i=.0035){let s=new Te,{outline:r,veins:a}=ub(e,t),o=rl(new Ue(Ma(r,i,!0,48),n.gold));s.add(o);let l=a.map(h=>Ma(h,i*.6,!1,8)),c=rl(new Ue(zo(l),n.gold));s.add(c);for(let h of l)h.dispose();return s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),s.userData.parts=s.children,s}function fb(n,e=.2,t={}){let i=new Te,s=e*.018;i.userData.leaves=[],i.userData.flowers=[];for(let a=0;a<8;a++){let o=R0(n,e*.95,e*.24,s);o.rotation.z=a/8*pr+pr/16,o.position.z=-e*.02;let l=new Te;l.add(o),o.position.x=e*.32,l.rotation.z=o.rotation.z,o.rotation.z=0,i.add(l),i.userData.leaves.push(l)}for(let a=0;a<8;a++){let o=C0(n,e*.2,5,s*.9),l=a/8*pr;o.position.set(Math.cos(l)*e*.48,Math.sin(l)*e*.48,e*.03),i.add(o),i.userData.flowers.push(o)}let r=new Ue(new Zi(e*.3,s*1.4,6,48),n.gold);if(i.add(r),i.userData.ring=r,t.pearl){let a=new Ue(new qt(e*.25,24,16),n.pearl);a.position.z=e*.05,i.add(a),i.userData.pearl=a}return i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),i}function pb(n,e){let{leaves:t,flowers:i,ring:s}=n.userData;s.scale.setScalar(Math.max(.001,fr(Ft(e/.2)))),t.forEach((r,a)=>{let o=Ft((e-.12-a*.03)/.45),l=r.children[0];for(let c of l.children)c.userData.grow?.(o);r.scale.setScalar(.6+.4*ui(o))}),i.forEach((r,a)=>{let o=Ft((e-.45-a*.03)/.35);r.scale.setScalar(Math.max(.001,fr(o))),r.userData.petalMesh&&(r.userData.petalMesh.rotation.x=(1-ui(o))*.9)})}var mb=class{constructor(n,e={}){let t=gr(31);this.group=new Te,this.group.name="Sculpture";let i=e.width||3.6,s=e.height||4.6,r=s*.55;this.parts=[];let a=n.gold,o=(c,h)=>{let u=[],d=i/2+c;for(let f=0;f<=30;f++){let p=f/30,v,g;if(p<.45){let m=p/.45;v=h*d*(1-.04*Math.sin(m*Math.PI)),g=m*r}else{let m=(p-.45)/.55*Math.PI/2;v=h*d*Math.cos(m)**1.25,g=r+(s-r)*Math.sin(m)**.85}u.push(Gi(v+Math.sin(p*19+h)*.02,g,Math.sin(p*7+h*2)*.05))}return u};this.stems=[];for(let c of[-1,1])for(let[h,u,d]of[[0,.035,0],[.16,.018,.05],[-.14,.014,.1]]){let f=o(h,c),p=rl(new Ue(Ma(f,u,!1,120),a));p.castShadow=!0,this.group.add(p),this.stems.push({m:p,delay:d,pts:f})}let l=this.stems.filter(c=>c.delay===0);for(let c of l)for(let h=3;h<28;h+=3){let u=c.pts[h],d=c.pts[h+1].clone().sub(u).normalize(),f=Gi(-d.y,d.x,0).multiplyScalar(Math.sign(u.x)||1),p=[];for(let g=0;g<=10;g++){let m=g/10,_=m*pr*.9;p.push(u.clone().addScaledVector(f,.04+m*.22*Math.cos(_*.5)).add(Gi(0,Math.sin(_)*.1*m,Math.cos(_)*.08*m)))}let v=rl(new Ue(Ma(p,.008,!1,24),a));v.castShadow=!0,this.group.add(v),this.parts.push({type:"tendril",m:v,at:h/30})}for(let c of l)for(let h=2;h<29;h+=2){let u=c.pts[h],d=Math.sign(u.x)||1,f=c.cuff?Gn(Qm(c.cuff,h,.32+t()*.2+0*t()),n):R0(n,.32+t()*.2,.08+t()*.04,.007),p=new Te;p.position.copy(u),p.add(f),p.rotation.z=(d>0?0:Math.PI)+(t()-.5)*1.6+(h>14?d*.6:0),p.rotation.y=(t()-.5)*1.2,this.group.add(p),this.parts.push({type:"leaf",g:p,leaf:f,at:h/30})}for(let c of l)for(let h of[7,13,19,24]){let u=c.pts[h],d=c.cuff?Gn(Xd(c.cuff,h,2*(.16+t()*.05)),n):C0(n,.16+t()*.05,5,.006);d.position.copy(u).add(Gi(0,0,.06)),d.rotation.y=(t()-.5)*.6,this.group.add(d),this.parts.push({type:"flower",g:d,at:h/30})}this.crown=e.cuff?Gn(Xd(e.cuff,Wd(e.cuff)[0],1.15),n):fb(n,.62,{pearl:!0}),this.crown.position.set(0,s+.1,.05),this.group.add(this.crown),this.pearls=[];for(let c=0;c<9;c++){let h=new Ue(new qt(.05+t()*.03,16,12),(c.cuff?n.gold:n.pearl).clone());h.material.emissive=new fe("#ffe2b0"),h.material.emissiveIntensity=0;let u=(c/9-.5)*2.6;h.userData.home=Gi(Math.sin(u)*(i/2-.5),1.2+Math.cos(u)*2.6*t()+t()*.8,(t()-.5)*.7),h.userData.phase=t()*pr,this.group.add(h),this.pearls.push(h)}this.progress=0,this.grow(0)}grow(n){this.progress=n;for(let i of this.stems)i.m.userData.grow(Ft((n-i.delay)/.45));let e=i=>Ft((n-i*.45)/.25);for(let i of this.parts){let s=e(i.at);if(i.type==="tendril")i.m.userData.grow(s);else if(i.type==="leaf"){i.g.scale.setScalar(Math.max(.001,fr(s)));for(let r of i.leaf.children)r.userData.grow?.(Ft(s*1.4))}else if(i.type==="flower"){let r=Ft((n-.35-i.at*.3)/.25);i.g.scale.setScalar(Math.max(.001,fr(r))),i.g.userData.petalMesh.rotation.x=(1-ui(r))*.9}}let t=Ft((n-.62)/.3);this.crown.scale.setScalar(Math.max(.001,fr(t))),this.crown.userData.leaves?pb(this.crown,t):this.crown.rotation.z=(1-ui(t))*1.6,this.pearlP=Ft((n-.7)/.3)}update(n,e){this.pearls.forEach((t,i)=>{let s=Ft(this.pearlP*1.6-i*.07);t.visible=s>0;let r=t.userData.home;t.position.set(r.x*(.3+.7*s),r.y*ui(s)+Math.sin(n*.8+t.userData.phase)*.05*s,r.z),t.material.emissiveIntensity=1.4*ui(s)})}},nf=new P(-.72,.55,-.42).normalize();function gb(n,e,t,i){let s=new Te;n.at(s);let r=6.5,a=-118.6,o=-136.4;n.block(-6.5,o,r,a,-.2,0,e.wood),n.block(r,o,7.2,a,0,6.2,e.stone),n.block(-7.2,-119.1,-6.5,a,0,6.2,e.stone),n.block(-7.2,o,-6.5,-134.1,0,6.2,e.stone),n.block(-6.5,o,r,a,5.8,6.1499999999999995,e.woodDark);for(let m=-119.39999999999999;m>o;m-=1.4)n.box(2*r,.26,.2,0,5.67,m,e.wood);for(let m of[-1,1])n.box(.4,.3,17.80000000000001,m*6.3,5.45,-255/2,e.carved);n.archWall({x:0,z:-136.20000000000002,width:14.4,height:6.2,depth:.6,openW:2.2,spring:2.6,rise:1.4,band:.42});let l=n.door(0,-136.28,2.2,4,0,s,2.6),c=hr(Gn(t.jewel.clone(),e),1.1);c.position.set(0,4.65,-135.82),c.userData.dynamic=!0,s.add(c),Ui(c);let h=[];for(let m of[-121.6,-126.6,-131.6]){n.archWall({x:-6.85,z:m,rotY:Math.PI/2,width:5,height:6.2,depth:.7,openW:1.4,spring:3.4,rise:.95,band:.22,trim:e.carved}),n.box(.72,1.2,1.5,-6.85,.6,m,e.stone),n.mashrabiya(-6.85,2.85,m,1.4,3.3,Math.PI/2);let _=X(-6.8,3.4,m),b=al(_,_.clone().addScaledVector(nf,-3.4/nf.y),.6,1,"#ffdcaa",.1);s.add(b),h.push(b)}for(let m=0;m<4;m++)n.box(.45,.05,8,6.25,.7+m*.62,-124.5,e.wood);for(let m=0;m<24;m++)n.vase(6.25,.73+m%4*.62,-128.2+Math.floor(m/4)*1.3,m%4,.45+m%3*.15,[e.brass,e.ceramicCream,e.copper,e.ceramicTeal][m%4]);n.block(3.6,-135.8,6.2,-133.3,0,1.3,e.stoneDark),n.cyl(.55,.75,1.6,4.9,2.1,-134.6,e.clay,12),n.cyl(.2,.3,2.6,4.9,4.2,-134.6,e.clay,10);let u=n.box(.9,.18,.4,4.9,1,-133.25,e.ember);u.userData.dynamic=!0;let d=[],f=e.lampGlass.clone();f.emissiveIntensity=1.1;for(let[m,_,b]of[[-4.6,-123.75,"shaping"],[4.6,-123.75,"engraving"],[-4.6,-131.15,"setting"]]){let x=Math.sign(m);n.table(m,_,2.5,1,.86,Math.PI/2),n.cloth(m,.9,_+.3,1,.7,e.linen,x<0?Math.PI/2:-Math.PI/2,s,.05);let M=t.artisan.clone();M.position.set(m+x*.95,0,_),M.rotation.y=x<0?Math.PI/2:-Math.PI/2,M.userData.dynamic=!0,s.add(M),Ui(M),n.cyl(.08,.1,.04,m-x*.2,.92,_-.95,e.brass,10),n.cyl(.012,.012,.42,m-x*.2,1.13,_-.95,e.brass,6);let S=n.cyl(.04,.11,.12,m-x*.2,1.34,_-.85,e.brass,12);S.rotation.x=.5;let E=n.sphere(.035,m-x*.2,1.3,_-.82,f,8);E.castShadow=!1;let y=hr(Gn(ga(t.jewel,"leaf",Math.round((_+200)*3)),e),.07);y.scale.multiplyScalar(1),y.position.set(m-x*.15,.95,_+.1),y.rotation.x=-Math.PI/2,y.userData.dynamic=!0,s.add(y);for(let A=0;A<5;A++){let I=n.cyl(.008,.008,.26,m-x*.36,.91,_-.4+A*.1,A%2?e.brass:e.woodDark,6);I.rotation.z=Math.PI/2}n.box(.14,.12,.12,m+x*.05,.96,_+.6,e.brassDark);let w=new Te;if(w.position.set(m+x*.45,1.12,_+.1),w.userData.dynamic=!0,s.add(w),b==="shaping")n.cyl(.012,.012,.24,0,0,0,e.woodDark,6,w).rotation.z=Math.PI/2,n.box(.08,.035,.035,-x*.12,0,0,e.brassDark,w);else if(b==="engraving"){let A=n.cyl(.006,.01,.16,0,0,0,e.brass,6,w);A.rotation.z=x*1.1}else n.cyl(.004,.004,.14,0,0,0,e.brass,5,w).rotation.z=x*1.2,n.sphere(.012,-x*.06,-.03,0,e.pearl,8,w);d.push({x:m,z:_,label:b,tool:w,art:M,piece:y,s:x,pos:X(m,1,_)})}n.box(2.7,.12,1.15,0,.88,-127.5,e.woodDark);for(let m of[-1,1])for(let _ of[-1,1])n.box(.12,.84,.12,m*1.2,.42,-127.5+_*.45,e.woodDark);n.box(2.5,.06,.06,0,.25,-127.05,e.woodDark),n.cloth(0,.945,-127.6,2.3,.9,e.linen,0,s,.06),n.rug(0,0,-122,2.6,3.6),n.rug(0,0,-132.6,3,2.2,Math.PI/2),n.rug(3.2,0,-129.8,2.2,3.2,.06);for(let m=0;m<3;m++)n.sphere(.32,2.6+m*.62,.16,-131.2,[e.velvetRed,e.tableCloth,e.tableCloth2][m],12).scale.set(1,.42,1);n.box(.9,.3,.6,3.2,.15,-129.6,e.woodDark);for(let m=0;m<3;m++)n.vase(2.95+m*.25,.3,-129.6,3,.55,e.brass);n.box(3.2,.08,.12,-3.4,2.1,-135.9,e.wood);for(let m=0;m<14;m++){let _=n.cyl(.01,.01,.38,-4.8+m*.2,1.85,-135.85,m%3?e.brass:e.woodDark,6);_.rotation.z=m%2?.08:-.08}for(let m=0;m<3;m++)n.box(1,.04,.3,-3.4,.9+m*.45,-135.8,e.wood);for(let m=0;m<9;m++)n.vase(-3.8+m%3*.4,.93+Math.floor(m/3)*.45,-135.8,m%4,.4,[e.ceramicCream,e.brass,e.ceramicTeal][m%3]);n.banner(-6.1,5.5,-128.9,1.3,4.6,e.bannerBorder,Math.PI/2),n.banner(6.1,5.5,-129.8,1.3,4.6,e.bannerKilim,-Math.PI/2);for(let m of[-1,1])for(let _=0;_<3;_++)n.lantern(m*2.4,4.3,-121.5-_*5,1,1.2);let p=n.flushLanterns(s,2.3),v=new sl(160,new wt(X(-6,.3,-134),X(0,4,-119)),{size:.009,opacity:.5,speed:.015,seed:13});v.points.userData.dynamic=!0,s.add(v.points);let g=new sl(36,new wt(X(4.5,1,-133.5),X(5.3,2.6,-133)),{size:.012,opacity:.9,speed:.35,seed:17});return g.mat.uniforms.tint.value.set(1,.5,.18),g.mat.uniforms.boost.value=2.2,g.points.userData.dynamic=!0,s.add(g.points),Ui(s),{id:"workshop",group:s,motif:c,motifDoor:l,stations:d,embers:u,env:{sun:2.6,sunColor:"#ffd9a0",hemi:.42,sky:"#e9d0a8",groundCol:"#4a3423",env:.4,fog:"#3a2a1c",fogNear:12,fogFar:60,exposure:1.15,sunDir:nf.toArray()},lights:[{position:X(0,2.6,-126.6),color:"#ffcf8f",intensity:3.2,distance:6,priority:1.5},{position:X(4.9,1.2,-132.6),color:"#ff8a3a",intensity:5,distance:5,flicker:!0},...d.map(m=>({position:X(m.x-m.s*.2,1.3,m.z-.7),color:"#ffc27a",intensity:1.5,distance:3.2})),{position:X(0,3,-120),color:"#ffd9a0",intensity:4,distance:8}],update(m){v.update(m),g.update(m),p.material.emissiveIntensity=1.7;for(let _ of d){let b=m*(_.label==="shaping"?6:2.2)+_.x;if(_.label==="shaping"){_.tool.rotation.x=Math.max(0,Math.sin(b))*.7,_.tool.position.y=1.08+Math.max(0,Math.sin(b))*.08;let x=Math.floor((b-Math.PI)/(Math.PI*2));x!==_.cyc&&(_.cyc!==void 0&&this.group.visible&&i?.audio.play(`hammer_${1+(x&1)*2}`,{position:_.pos,volume:.22,rate:1.1+x%3*.05}),_.cyc=x)}else _.label==="engraving"?(_.tool.position.z=_.z+.1+Math.sin(b)*.05,_.tool.position.y=1+Math.abs(Math.sin(b*2))*.01):_.tool.position.y=1.02+(Math.sin(b)*.5+.5)*.06;_.art.rotation.z=Math.sin(m*.7+_.x)*.012}u.material.emissiveIntensity=2.4+Math.sin(m*.9)*.12},music:"mus_workshop",amb:"amb_workshop"}}var Jo=[{id:"filigree-mask",name:"Filigree Mask",line:"Gold wire fountains from the bridge of the nose into a lace of buds, leaves and granulation, with crimped roses at the jaw."},{id:"floral-crown",name:"Floral Crown",line:"A halo of gold roses, beaded sprays and veined leaves rising from a single slim band."},{id:"filigree-sunglasses",name:"Filigree Sunglasses",line:"Round dark lenses framed in gold, wreathed in leaves and buds, with a granulated medallion at the bridge."},{id:"bun-cage",name:"Filigree Bun Cage",line:"An openwork gold dome of leaves, florets and bead sprays, crowned by a winged creature with ladder-veined wings."},{id:"finger-armour",name:"Filigree Finger Armour",line:"An openwork shield for the index finger and fine vine rings for the others, ending in bead-tipped tendrils."},{id:"ear-cuff-study",name:"Floral Ear Cuff \xB7 Study",line:"The maker's drawing of the piece that belongs on the empty pedestal."}],ya={name:"Floral Ear Cuff",line:"Kavya Potluri \u2014 gold leaves, blossoms and beaded sprays climbing the ear from a single sculpted cuff."};function xb(n,e,t){let i=new Te;n.at(i);let s=4.5,r=-136.8,a=-162.2,o=7.2,l=e.floorDark.clone();l.roughness=.35,l.roughnessMap=null,l.color.set("#6d5a45"),l.name="polished",n.block(-4.5,a,s,r,-.2,0,l),n.rug(0,0,-149,1.8,20,0),n.block(-4.5,a,s,r,o,7.6000000000000005,e.woodDark);for(let A=-137.8;A>a;A-=1.6)n.box(2*s,.24,.2,0,7.08,A,e.wood);for(let A of[-143,-149.2]){n.archWall({x:0,z:A,width:10.4,height:o,depth:.6,openW:4.6,spring:3.6,rise:2.4,band:.42,mat:e.plasterDark,trim:e.carvedDark});for(let I of[-1,1])n.curtain(I*2.15,5.7,A+.42,1.1,5.7,e.velvetRed,0,6)}let c=[],h=[-139.9,-146.1,-152.4];for(let A of[-1,1]){n.block(A*5.25,a,A*5.8,r,0,o,e.carvedDark);let I=r;for(let C of h){n.archWall({x:A*4.88,z:C,rotY:A*Math.PI/2,width:1.6,height:o,depth:.75,openW:1.15,spring:2.25,rise:.75,band:.2,mat:e.plasterDark,trim:e.carved}),n.block(A*s,C+.8,A*5.25,I,0,o,e.plasterDark),I=C-.8,n.block(A*s,C-.6,A*5.25,C+.6,0,.92,e.carvedDark),n.box(.08,.06,1.2,A*4.48,.93,C,e.brass);let L=n.box(.04,2,1.1,A*5.22,1.95,C,e.velvet);L.castShadow=!1,n.box(.42,.24,.42,A*4.9,1.04,C,e.velvet);let D=n.box(.3,.02,.7,A*4.9,2.75,C,e.lampGlass);D.castShadow=!1,c.push({s:A,z:C,pos:X(A*4.9,1.42,C),view:X(A*3.15,0,C)})}n.block(A*s,a,A*5.25,I,0,o,e.plasterDark);for(let C=0;C<4;C++)n.lantern(A*3.2,3.6+C%2*.3,-138.8-C*6.4,.85,2.5)}for(let A=0;A<70;A++){let I=A*2.39996,C=Math.sqrt(A/70)*2.6;n.lantern(Math.cos(I)*C*.85,4.1+(1-C/2.6)*1.8+Math.sin(A*1.7)*.25,-149.5+Math.sin(I)*C*1.5,.42+Math.sin(A)*.06,3-(1-C/2.6)*1.8)}let u=n.pedestal(re.galleryPedestal.x,re.galleryPedestal.z,.48,1.05);n.cyl(.3,.3,.06,0,1.08,re.galleryPedestal.z,e.velvet,24);let d=new Te;d.position.set(0,1.115,re.galleryPedestal.z),d.userData.dynamic=!0,i.add(d);let f=hr(Gn(t.jewel.clone(),e,{Gold:e.brassDark,GoldAntique:e.brassDark,Pearl:e.brassDark}),.3);f.rotation.x=-Math.PI/2,f.scale.z=.15,d.add(f),Ui(f);let p=new Te;p.position.set(0,1.1,re.galleryPedestal.z),p.userData.dynamic=!0,i.add(p),n.mesh(new Xt(.36,.36,.5,40,1,!0),e.glass,0,.25,0,p).castShadow=!1,n.mesh(new qt(.36,40,12,0,Math.PI*2,0,Math.PI/2),e.glass,0,.5,0,p).castShadow=!1,n.mesh(new Zi(.36,.012,6,48),e.brass,0,.5,0,p).rotation.x=Math.PI/2,n.mesh(new Zi(.36,.012,6,48),e.brass,0,0,0,p).rotation.x=Math.PI/2;let v=al(X(0,6.9,re.galleryPedestal.z),X(0,.9,re.galleryPedestal.z),.25,.75,"#ffe2b4",.11);i.add(v);let g=document.createElement("canvas");g.width=512,g.height=128;let m=g.getContext("2d");m.fillStyle="#6e4e2a",m.fillRect(0,0,512,128),m.strokeStyle="#c69a52",m.lineWidth=6,m.strokeRect(8,8,496,112),m.fillStyle="#f0d39a",m.textAlign="center",m.font="italic 40px Georgia",m.fillText(ya.name,256,62),m.font="20px Georgia",m.fillText("KAVYA POTLURI",256,98);let _=new Pi(g);_.colorSpace=xt;let b=n.mesh(new Gt(.42,.105),new Yt({map:_,metalness:.6,roughness:.4}),0,.72,re.galleryPedestal.z+.53);b.rotation.x=-.25,b.userData.dynamic=!0,n.archWall({x:0,z:-162,width:10.4,height:o,depth:.6,openW:1.6,spring:2.3,rise:1,band:.3,mat:e.plasterDark,trim:e.carvedDark});let x=n.door(0,-162.04999999999998,1.6,3.3,0,i,2.3);n.block(-1.2,-168.6,1.2,a,-.2,0,e.floor);for(let A of[-1,1])n.block(A*1,-168.6,A*1.6,a,0,4,e.stone);n.block(-1.6,-168.6,1.6,a,3.5,4,e.stone);for(let A of[-1,1])n.curtain(A*1.5,4.3,-137.3,1.3,4.3,e.velvetRed,0,7);let M=[],S=t.collection?.length?t.collection:[];c.forEach((A,I)=>{let C=S.find(k=>k.id===Jo[I].id),L=C?{...Jo[I],name:C.name||Jo[I].name,line:C.line||Jo[I].line}:Jo[I],D=new Te;D.position.copy(A.pos),D.rotation.y=A.s<0?Math.PI/2:-Math.PI/2,D.userData.dynamic=!0,i.add(D);let U;if(C?.kind==="study"){U=new Te;let k=new Ln().load(`${Us}assets/models/collection/${C.file}`);k.colorSpace=xt,k.anisotropy=4;let H=new Ue(new Gt(.3,.3),new Yt({map:k,color:"#7d7262",roughness:.95,envMapIntensity:.3}));H.position.z=.0075;let oe=new Ue(new fi(.33,.33,.012),e.woodDark);U.add(oe,H),U.rotation.x=-.08;let ce=new Te;ce.add(U),U=ce}else if(C){U=C.scene.clone(),C.face&&$m(U,C.face);let k=new wt().setFromObject(U),H=k.getSize(new P),oe=k.getCenter(new P),ce=.36/Math.max(H.x,H.y,H.z);U.scale.setScalar(ce),U.position.sub(oe.multiplyScalar(ce));let Qe=new Te;Qe.add(U),U=Qe;for(let Je of U.children[0].children)Je.traverse(et=>{if(et.isMesh){et.castShadow=!0;let K=et.material?.name;K==="Gold"?et.material=e.gold:K==="Pearl"?et.material=e.pearl:K==="Emerald"?et.material=e.emerald:K==="Ruby"&&(et.material=e.ruby)}})}else U=new Te;D.add(U);let O=document.createElement("canvas");O.width=512,O.height=96;let G=O.getContext("2d");G.fillStyle="#5d4122",G.fillRect(0,0,512,96),G.fillStyle="#efd39a",G.textAlign="center",G.font="italic 30px Georgia",G.fillText(L.name,256,44),G.font="16px Georgia",G.fillText("KAVYA POTLURI",256,76);let J=new Pi(O);J.colorSpace=xt,J.anisotropy=4;let F=new Ue(new Gt(.42,.079),new Yt({map:J,metalness:.5,roughness:.45}));F.position.set(A.s*4.445,.82,A.z),F.rotation.y=A.s<0?Math.PI/2:-Math.PI/2,F.userData.dynamic=!0,i.add(F),M.push({...A,...L,holder:D,obj:U,home:U.position.clone(),homeQ:U.quaternion.clone()})});let E=n.flushLanterns(i,2.6),y=new sl(90,new wt(X(-3,.5,-159),X(3,5,-140)),{size:.008,opacity:.35,speed:.01,seed:21});y.points.userData.dynamic=!0,i.add(y.points),Ui(i);let w=c.map(A=>({position:A.pos.clone().add(X(-A.s*.35,1,0)),color:"#ffd9a6",intensity:1.5,distance:2.6,niche:!0}));return w.push({position:X(0,3.4,re.galleryPedestal.z),color:"#ffe0b0",intensity:5,distance:5,priority:1.5}),w.push({position:X(0,4.3,-149.5),color:"#ffb86a",intensity:6,distance:9,flicker:!0}),w.push({position:X(0,2.2,-161.4),color:"#ffe6c0",intensity:0,distance:6,exit:!0}),{id:"gallery",group:i,displays:M,exitDoor:x,outline:d,dome:p,plaque:b,ped:u,env:{sun:.1,hemi:.12,sky:"#d0b48c",groundCol:"#2a1e14",env:.32,fog:"#140f0a",fogNear:12,fogFar:46,exposure:1.1,sunDir:[.4,.8,-.4]},lights:w,update(A){y.update(A),E.material.emissiveIntensity=1.9},music:"mus_gallery",amb:"amb_gallery"}}var vb=new P(.46,.27,-.85).normalize();function yb(n,e,t,i){let s=new Te;n.at(s);let r=gr(1234),a=i.settings.quality==="low"?140:230,o=new Gt(240,250,a,a);o.rotateX(-Math.PI/2),o.translate(0,0,-291);let l=o.attributes.position,c=new Float32Array(l.count*3);for(let S=0;S<l.count;S++){let E=l.getX(S),y=l.getZ(S),w=Ni(E,y);y>-166.5&&(w=-.05);let A=Ps.smoothstep(Math.hypot(E,(y+210)*.8),55,115);w+=A*Ih(E*.5,y*.5)*2.6,l.setY(S,w);let I=.92+Math.min(.12,w*.012)+Math.sin(E*.7+y*.3)*.015;c[S*3]=I,c[S*3+1]=I*.985,c[S*3+2]=I*.96}o.setAttribute("color",new $e(c,3)),o.computeVertexNormals();let h=o.attributes.uv;for(let S=0;S<l.count;S++)h.setXY(S,l.getX(S)*.5,l.getZ(S)*.5);let u=e.sand.clone();u.vertexColors=!0,u.name="sandTerrain",u.normalScale.set(.45,.45),u.onBeforeCompile=S=>{S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorldP;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec2 wp = vWorldP.xz;
        float ph = dot(wp, vec2(0.83, 0.55)) * 7.0 + sin(wp.x * 0.9 + wp.y * 0.4) * 2.2;
        float rip = sin(ph) * 0.5 + 0.5; rip = pow(rip, 3.0);
        vec3 rn = normalize(vec3(cos(ph) * 0.83, 0.0, cos(ph) * 0.55));
        normal = normalize(normal + (viewMatrix * vec4(rn, 0.0)).xyz * 0.16);
        diffuseColor.rgb *= 0.94 + rip * 0.08;`)},u.customProgramCacheKey=()=>"sand-ripple";let d=n.mesh(o,u);d.castShadow=!1,d.userData.dynamic=!0,d.name="terrain";let f=new Ks(150,600,96,6);f.rotateX(-Math.PI/2);let p=f.attributes.position;for(let S=0;S<p.count;S++){let E=p.getX(S),y=p.getZ(S),w=Math.hypot(E,y);p.setY(S,Ih(E*.12,y*.12)*3.5*Ps.smoothstep(w,150,260)-1.5+w*.012)}f.computeVertexNormals();let v=n.mesh(f,e.sand,0,0,-230);v.castShadow=!1,v.userData.dynamic=!0;let g=-167.2;n.archWall({x:0,z:g,width:120,height:11,depth:2.6,openW:2,spring:2.6,rise:1.4,band:.5}),n.box(120,.6,3,0,11.3,g,e.carved);for(let S=-59;S<60;S+=1.4)n.box(.7,.8,.6,S,12,-168.29999999999998,e.stone);for(let S of[-7,7,-28,28,-52,52])n.cyl(2.6,3,14,S,7,-168,e.stone,20),n.cyl(3,2.7,.7,S,14.3,-168,e.carved,20);for(let S=0;S<14;S++){let E=-50+S*7.7+r()*3,y=12+r()*6;n.block(E-3,-165.2,E+3,-158.2,0,y,e.plaster),r()>.5&&n.dome(E,y,-161.7,2.4,e.plaster)}n.cyl(1.1,1.3,26,-14,13,-161.2,e.stone,14),n.dome(-14,26,-161.2,1.1,e.plaster);for(let S=0;S<3;S++)n.box(3.4-S*.2,.12,.5,0,-.06-S*.05,-168.7-S*.5,e.stoneDark);let m=(S,E,y,w=.42,A=0)=>{let I=Ni(S,E),C=n.cyl(w*.92,w,y,S,I+y/2-.25,E,e.stone,14);C.rotation.z=A,y>2&&n.cyl(w*1.3,w*.95,.3,S,I+y-.3,E,e.carved,14)};m(1.4,-229.6,3.4),m(8.9,-230.4,2.2),m(10.4,-224.8,1.2,.4,.05),m(-.4,-224.2,.9,.4),n.cyl(.4,.4,1.5,7.6,Ni(7.6,-221.6)+.18,-221.6,e.stone,14).rotation.set(0,.6,Math.PI/2-.08),n.archWall({x:5,z:-233.2,width:6.2,height:5.2,depth:.8,openW:3.4,spring:2.6,rise:1.9,band:.35});for(let S=0;S<12;S++){let E=5+(r()-.5)*15,y=-226+(r()-.5)*13;if(Math.hypot(E-re.stage.x,y-re.stage.z)<2.4||Math.hypot(E-re.digSpot.x,y-re.digSpot.z)<1.8||Math.hypot(E-5,y- -220)<2)continue;let w=new no(1,2),A=w.attributes.position;for(let L=0;L<A.count;L++){let D=A.getX(L),U=A.getY(L),O=A.getZ(L),G=1+Math.sin(D*3.1+S)*.08+Math.sin(U*4.3+S*2)*.06+Math.sin(O*5.7)*.05;A.setXYZ(L,Math.sign(D)*Math.abs(D)**.6*G,Math.sign(U)*Math.abs(U)**.6*G,Math.sign(O)*Math.abs(O)**.6*G)}w.computeVertexNormals(),ur(w,1.4);let I=.25+r()*.35,C=n.mesh(w,r()>.4?e.stoneDark:e.plaster,E,Ni(E,y)+.02,y);C.scale.set(I*(1+r()),I*(.5+r()*.4),I*(.8+r()*.6)),C.rotation.set(r()*.4,r()*3,r()*.4)}for(let[S,E,y]of[[-38,-258,7],[44,-275,9],[-70,-300,12]]){let w=Ni(S,E)+Ih(S*.5,E*.5)*2.6*Ps.smoothstep(Math.hypot(S,(E+210)*.8),55,115)-1;n.archWall({x:S,z:E,width:7,height:y,depth:1,openW:3,spring:y*.45,rise:2,band:.3}).position.y=w}let _=n.pedestal(re.stage.x,re.stage.z,.5,.96);_.position.y=Ni(re.stage.x,re.stage.z)-.04;let b=t.lamp.clone();b.scale.setScalar(.42),b.position.set(re.desertLamp.x,Ni(re.desertLamp.x,re.desertLamp.z)+.05,re.desertLamp.z),b.rotation.set(.12,.9,-.22),b.userData.dynamic=!0,s.add(b);let x=new Ue(new qt(.42,24,12,0,Math.PI*2,0,Math.PI/2),e.sand);ur(x.geometry,2),x.scale.set(1,.32,1),x.position.set(re.digSpot.x,Ni(re.digSpot.x,re.digSpot.z)-.02,re.digSpot.z),x.userData.dynamic=!0,x.receiveShadow=!0,s.add(x);let M=cf({center:X(10,0,-250),count:6,radius:34,height:28,spread:8,speed:.07,size:.5,color:"#4a3a2c",seed:21});return s.add(M),Ui(s),{id:"desert",update(S){M.userData.update(S)},group:s,terrain:d,lamp:b,mound:x,ped:_,env:{sun:3.8,sunColor:"#ffcf8f",hemi:.75,sky:"#f7d5a2",groundCol:"#b0773e",env:.7,fog:"#efc996",fogNear:90,fogFar:520,exposure:.95,sunDir:vb.toArray(),zenith:"#6f97ad",horizon:"#f3c58a",clouds:.6},lights:[],music:"mus_desert",amb:"amb_desert"}}var Ki=new P,sf=new P,rf=new pt,af=new pt,d0=new pt,of=new P(0,1,0),_b=class{constructor(n,e,t){this.G=t,this.root=new Te,this.root.name="Monkey",this.model=Vo(n.scene),this.animated=e,this.model.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,a.material&&(a.material=a.material.clone(),a.material.envMapIntensity=.6))}),e||(this.model.rotation.y=-Math.PI/2,this.model.scale.setScalar(.54)),this.root.add(this.model),this.mixer=new ea(this.model),this.clips=Object.fromEntries((n.animations||[]).map(a=>[a.name,a])),this.actions={},this.head=this.model.getObjectByName("head")||this.model.getObjectByName("MonkeyHead"),this.neck=this.model.getObjectByName("neck"),this.stride={walk:.44,run:.82},this.state="idle",this.current=null,this.yaw=0,this.targetYaw=0,this.speed=0,this.moving=!1,this.lookTarget=null,this.lookWeight=0,this.lookPlayer=!0,this.mount=null,this.hop=0,this.excite=0,this.chitterCooldown=0,this.walkId=0,this.play(this.has("idle")?"idle":Object.keys(this.clips)[0]);let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d");s.fillStyle="rgba(70,45,20,0.55)",s.beginPath(),s.ellipse(32,38,11,17,0,0,Math.PI*2),s.fill();for(let a=0;a<4;a++)s.beginPath(),s.ellipse(20+a*8,14,3.5,5,0,0,Math.PI*2),s.fill();let r=new Pi(i);this.prints=new yn(new Gt(.07,.1).rotateX(-Math.PI/2),new Nt({map:r,transparent:!0,depthWrite:!1,opacity:.8}),160),this.prints.count=0,this.prints.frustumCulled=!1,this.prints.renderOrder=2,this.printIndex=0,this.printDist=0,this.printSide=1,t.scene.add(this.prints)}has(n){return!!this.clips[n]}get position(){return this.root.position}action(n){return this.has(n)?(this.actions[n]||(this.actions[n]=this.mixer.clipAction(this.clips[n])),this.actions[n]):null}play(n,e=.35,t=1){if(!n)return;let i=this.action(n);i&&(this.current===i?i.timeScale=t:(i.reset(),i.setLoop(No,1/0),i.timeScale=t,i.enabled=!0,i.setEffectiveWeight(1),this.current&&i.crossFadeFrom(this.current,e,!0),i.play(),this.current=i,this.currentName=n))}gesture(n,e){if(e||=this.moving?"walk":this.restClip(),this.chitter(.6),!this.has(n))return this.excite=1,p0(1.2);let t=this.action(n);t.reset(),t.setLoop(Lo,1),t.clampWhenFinished=!0,t.timeScale=1,t.enabled=!0,t.setEffectiveWeight(1),this.current&&this.current!==t&&t.crossFadeFrom(this.current,.3,!0),t.play(),this.current=t,this.currentName=n;let i=this.clips[n].duration,s=0;return Fi.add(r=>(s+=r,s>=i-.3&&(this.current===t&&(this.current=null,this.play(e,.3)),!0)))}restClip(){return this.sitting?"idle":this.has("stand_idle")?"stand_idle":"idle"}loop(n){this.play(n,.35)}chitter(n=1){this.chitterCooldown>0||Math.random()>n||(this.chitterCooldown=1.6,this.G.audio.playVariant("monkey_chitter_",4,{position:this.root.position.clone().add(new P(0,.5,0)),volume:.75,rate:.95+Math.random()*.15}))}placeAt(n,e){this.walkId++,this.mount=null,this.root.position.set(n.x,this.ground(n.x,n.z),n.z),e!==void 0&&(this.yaw=this.targetYaw=e),this.moving=!1}ground(n,e){return this.G.nav.ground(n,e)}face(n){Ki.copy(n).sub(this.root.position),this.targetYaw=Math.atan2(Ki.x,Ki.z)}faceAsync(n){return this.face(n),Fi.add(()=>Math.abs(f0(this.yaw,this.targetYaw))<.08)}look(n){this.lookTarget=n?n.clone():null}walk(n,e={}){let t=(Array.isArray(n)?n:[n]).map(c=>c.clone()),i=!!e.run,s=e.speed||(i?2:.95),r=0,a=!1,o=0;this.sitting=!1;let l=++this.walkId;return Fi.add(c=>{if(l!==this.walkId)return!0;if(this.mount)return!1;let h=t[r];Ki.set(h.x-this.root.position.x,0,h.z-this.root.position.z);let u=Ki.length();if(u<.12)return r++,r>=t.length&&(this.moving=!1,this.speed=0,this.play(this.restClip(),.35),!0);let d=s,f=i;if(e.lead){let m=this.G.player.head(sf),_=t[t.length-1],b=Math.hypot(m.x-this.root.position.x,m.z-this.root.position.z),x=Math.hypot(m.x-_.x,m.z-_.z)>Math.hypot(this.root.position.x-_.x,this.root.position.z-_.z)-.5;if(!a&&x&&b>(e.lead.wait||5.5)&&(a=!0,o=0,this.moving=!1,this.speed=0,this.play(this.restClip(),.4),e.onWait?.()),a)if(o+=c,this.face(m),o>4&&Math.floor(o/6)!==Math.floor((o-c)/6)&&(this.gesture("beckon"),this.G.audio.play("sparkle",{volume:.2})),b<(e.lead.resume||3.2)||!x)a=!1;else return!1;!x&&b>2.5&&(d=Math.max(s,2.1),f=!0)}Ki.set(h.x-this.root.position.x,0,h.z-this.root.position.z);let p=Math.min(u,d*c);Ki.normalize(),this.targetYaw=Math.atan2(Ki.x,Ki.z);let v=Math.abs(f0(this.yaw,this.targetYaw))>1.2;v||(this.root.position.x+=Ki.x*p,this.root.position.z+=Ki.z*p,this.root.position.y=this.ground(this.root.position.x,this.root.position.z),this.trackPrints(p)),this.moving=!v,this.speed=v?0:d;let g=f&&this.has("run")?"run":"walk";return this.has(g)&&this.play(g,.25,Ft(d/(this.stride[f?"run":"walk"]/this.clips[g].duration),.5,2.2)),!1})}attach(n,e,t=0){this.walkId++,this.mount={object:n,local:e.clone(),yaw:t},this.moving=!1}detach(){this.mount&&=(this.root.position.y=this.ground(this.root.position.x,this.root.position.z),null)}sit(){return this.sitting=!0,this.has("sit_down")&&this.currentName!=="idle"?this.gesture("sit_down","idle"):(this.play("idle"),p0(.3))}stand(){this.sitting=!1,this.play(this.restClip())}trackPrints(n){if(this.root.position.z>-168||(this.printDist+=n,this.printDist<.16))return;this.printDist=0,this.printSide*=-1;let e=new Ve,t=this.root.position,i=new P(Math.cos(this.yaw),0,-Math.sin(this.yaw)).multiplyScalar(.06*this.printSide),s=t.x+i.x,r=t.z+i.z;e.compose(new P(s,Ni(s,r)+.015,r),new pt().setFromAxisAngle(of,this.yaw),new P(1,1,1)),this.prints.setMatrixAt(this.printIndex,e),this.printIndex=(this.printIndex+1)%160,this.prints.count=Math.min(160,this.prints.count+1),this.prints.instanceMatrix.needsUpdate=!0}update(n,e){if(this.chitterCooldown-=n,this.mount){let t=this.mount.object;t.updateWorldMatrix(!0,!1),this.root.position.copy(this.mount.local).applyMatrix4(t.matrixWorld);let i=new ki().setFromQuaternion(t.getWorldQuaternion(rf),"YXZ");this.targetYaw=i.y+this.mount.yaw}if(this.yaw=Bh(this.yaw,this.targetYaw,this.mount?12:6,n),this.root.rotation.y=this.yaw,this.excite=ci(this.excite,0,2.5,n),this.animated){this.hop+=n*(this.moving?this.speed*7.5:0);let t=this.moving?Math.abs(Math.sin(this.hop))*Math.min(.05,this.speed*.022):0;this.model.position.y=ci(this.model.position.y,t,18,n),this.model.rotation.x=ci(this.model.rotation.x,this.moving?.1+Math.sin(this.hop*2)*.03:0,8,n),this.model.rotation.z=ci(this.model.rotation.z,this.moving?Math.sin(this.hop)*.04:0,8,n)}else{this.hop+=n*(this.moving?this.speed*6.5:0);let t=this.moving?Math.abs(Math.sin(this.hop))*.07:0;this.model.position.y=t+Math.abs(Math.sin(this.G.clock.time*9))*.08*this.excite,this.model.rotation.x=this.moving?.12+Math.sin(this.hop*2)*.05:0,this.model.scale.setScalar(.54*(1+Math.sin(this.G.clock.time*2.2)*.008))}for(let t of[this.head,this.neck])t?.userData.base&&t.quaternion.copy(t.userData.base);this.mixer.update(n);for(let t of[this.head,this.neck])t&&(t.userData.base||=new pt).copy(t.quaternion);if(this.head){let t=this.lookTarget||(this.lookPlayer?e:null),i=t&&(this.lookTarget||this.root.position.distanceTo(e)<6)?1:0;this.lookWeight=ci(this.lookWeight,i,3,n),t&&this.lookWeight>.01&&this.aimBone(this.head,t,this.lookWeight*(this.neck?.6:1)),t&&this.neck&&this.lookWeight>.01&&this.aimBone(this.neck,t,this.lookWeight*.35)}}aimBone(n,e,t){n.updateWorldMatrix(!0,!1),n.getWorldPosition(Ki),sf.copy(e).sub(Ki);let i=sf.clone().applyAxisAngle(of,-this.yaw),s=Math.atan2(i.x,i.z),r=Math.atan2(i.y,Math.hypot(i.x,i.z));s=Ft(s,-1.1,1.1),r=Ft(r,-.5,.6),rf.setFromEuler(new ki(-r*t,s*t,0,"YXZ")),af.setFromAxisAngle(of,this.yaw),d0.copy(af).invert();let a=af.multiply(rf).multiply(d0),o=n.getWorldQuaternion(new pt),l=n.parent.getWorldQuaternion(new pt);n.quaternion.copy(l.invert().multiply(a.multiply(o)))}};function f0(n,e){return((e-n+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function p0(n){let e=0;return Fi.add(t=>(e+=t)>=n)}var Ch=new P;function Mb(n){let e=new Yt({color:"#f6e8cc",emissive:"#ffd79a",emissiveIntensity:.1,roughness:.35,metalness:.15,transparent:!0,depthWrite:!0}),t={presence:{value:0},height:{value:n},solid:{value:.2}};return e.userData.u=t,e.onBeforeCompile=i=>{i.uniforms.uTime=Yn.time,i.uniforms.uPresence=t.presence,i.uniforms.uHeight=t.height,i.uniforms.uSolid=t.solid,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vObj = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uTime, uPresence, uHeight, uSolid; varying float vH; varying vec3 vObj;
      float hsh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float vnoise(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(hsh(i), hsh(i+vec3(1,0,0)), f.x), mix(hsh(i+vec3(0,1,0)), hsh(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(hsh(i+vec3(0,0,1)), hsh(i+vec3(1,0,1)), f.x), mix(hsh(i+vec3(0,1,1)), hsh(i+vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb *= mix(vec3(1.0), vec3(0.86, 0.72, 0.5), uSolid * 0.8);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float hN = vH / uHeight;
        float n = vnoise(vObj * 6.0 + vec3(0.0, -uTime * 0.6, uTime * 0.2)) * 0.6 + vnoise(vObj * 15.0 + vec3(uTime * 0.3, -uTime, 0.0)) * 0.4;
        vec3 nv = normalize(vViewPosition);
        float fres = pow(1.0 - abs(dot(normalize(vNormal), nv)), 2.0);
        totalEmissiveRadiance += vec3(1.0, 0.8, 0.5) * (fres * mix(0.5, 0.22, uSolid) + n * mix(0.08, 0.02, uSolid));`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        float tail = smoothstep(0.02, 0.42, hN + (n - 0.5) * 0.18);
        // She forms from the smoke upward as presence rises.
        float T = uPresence * 1.6 - 0.25;
        float vis = 1.0 - smoothstep(T - 0.2, T, hN + (n - 0.5) * 0.2);
        float a = mix(mix(0.3, 0.82, uSolid), 0.95, fres) * (0.7 + n * 0.3);
        gl_FragColor.a *= a * mix(0.25, 1.0, tail) * vis * clamp(uPresence * 2.0, 0.0, 1.0);
        if (gl_FragColor.a < 0.012) discard;`)},e.customProgramCacheKey=()=>"spirit",e}var bb=class{constructor(n,e,t){this.G=t,this.animated=e,this.root=new Te,this.root.name="Genie",this.root.visible=!1,this.root.scale.setScalar(.9),this.model=Vo(n.scene);let i=new wt().setFromObject(this.model),s=i.max.y-i.min.y;e||this.model.scale.setScalar(2.3/s),this.height=2.3,this.mat=Mb(e?2.3:s),this.model.traverse(a=>{a.isMesh&&(a.material=this.mat,a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1,a.renderOrder=4)}),this.root.add(this.model),this.mixer=new ea(this.model),this.clips=Object.fromEntries((n.animations||[]).map(a=>[a.name,a])),this.actions={},this.current=null,this.presence=0,this.targetPresence=0,this.yaw=0,this.faceTarget=null,this.base=new P,this.float=0,this.light=null,this.speaking=!1,this.smokeN=140;let r=new at;r.setAttribute("position",new $e(new Float32Array(420),3)),r.setAttribute("aAlpha",new $e(new Float32Array(140),1)),r.setAttribute("aSize",new $e(Float32Array.from({length:140},()=>.6+Math.random()*1.6),1)),this.smokeMat=new dt({uniforms:{map:{value:w0()},opacity:{value:1},scale:Yn.pointScale},vertexShader:"uniform float scale; attribute float aAlpha; attribute float aSize; varying float vA; void main(){ vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*0.11*scale/max(0.2,-mv.z); }",fragmentShader:"uniform sampler2D map; uniform float opacity; varying float vA; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vec3(1.0,0.93,0.8)*c.rgb, c.a*vA*opacity*0.11); if(gl_FragColor.a<0.004) discard; }",transparent:!0,depthWrite:!1,blending:2}),this.smoke=new qi(r,this.smokeMat),this.smoke.frustumCulled=!1,t.scene.add(this.smoke),this.particles=Array.from({length:140},()=>({p:new P,v:new P,life:0,max:1})),this.tailBones=["tail_1","tail_2","tail_3","hips"].map(a=>this.model.getObjectByName(a)).filter(Boolean),this.headBone=this.model.getObjectByName("head"),this.play("idle")}action(n){return this.clips[n]?this.actions[n]||=this.mixer.clipAction(this.clips[n]):null}play(n,e=.5){let t=this.action(n);t&&this.current!==t&&(t.reset(),t.setLoop(No,1/0),t.enabled=!0,t.setEffectiveWeight(1),this.current&&t.crossFadeFrom(this.current,e,!0),t.play(),this.current=t)}gesture(n){let e=this.action(n);if(!e)return this.float+=1,m0(2);e.reset(),e.setLoop(Lo,1),e.clampWhenFinished=!0,e.enabled=!0,e.setEffectiveWeight(1),this.current&&this.current!==e&&e.crossFadeFrom(this.current,.4,!0),e.play(),this.current=e;let t=this.clips[n].duration,i=0;return Fi.add(s=>(i+=s,i>t-.4&&(this.current===e&&(this.current=null,this.play("idle",.4)),!0)))}async appear(n,e){this.base.copy(n),this.root.position.copy(e||n),this.root.visible=!0,this.smoke.visible=!0,this.targetPresence=0,this.presence=0,this.light=this.G.world.slot({position:n.clone().add(new P(0,1.4,.3)),color:"#ffe2b4",intensity:0,distance:7,priority:3}),this.G.audio.play("genie_appear",{position:n.clone().add(new P(0,1.2,0)),volume:.9}),this.rising={from:(e||n).clone(),t:0},this.gesture("emerge"),this.targetPresence=1,await g0(()=>this.presence>.97)}async vanish(n){this.G.audio.play("genie_vanish",{position:this.root.position.clone().add(new P(0,1.2,0)),volume:.8}),this.targetPresence=0,this.sinkTo=n?n.clone():null,await g0(()=>this.presence<.02),this.root.visible=!1,this.light&&=(this.G.world.removeSlot(this.light),null)}async say(n,e,t){let{ui:i,audio:s}=this.G;this.speaking=!0,s.play("sparkle",{position:this.root.position.clone().add(new P(0,2,0)),volume:.18,rate:.8});let r=await s.say(n,e),a=e.split(/\s+/).length,o=Math.max(r||0,1.6+a*.36);i.subtitle("The Genie",e,o+.5),t&&this.gesture(t),await m0(o),this.speaking=!1}face(n){this.faceTarget=n?n.clone():null}update(n,e){if(this.mat.userData.u.solid.value=ci(this.mat.userData.u.solid.value,this.root.position.z<-167?.65:.2,2,n),this.presence=ci(this.presence,this.targetPresence,this.targetPresence>this.presence?.62:.95,n),this.mat.userData.u.presence.value=this.presence,!this.root.visible){this.smoke.visible=!1;return}if(this.float+=n,this.rising){this.rising.t+=n/3.6;let s=ui(this.rising.t);this.root.position.lerpVectors(this.rising.from,this.base,s),this.rising.t>=1&&(this.rising=null)}else this.sinkTo&&this.targetPresence===0?this.root.position.lerp(this.sinkTo,1-Math.exp(-1.5*n)):this.root.position.set(this.base.x,this.base.y+Math.sin(this.float*.8)*.04,this.base.z);let t=this.faceTarget||e;Ch.copy(t).sub(this.root.position),this.yaw=Bh(this.yaw,Math.atan2(Ch.x,Ch.z),1.8,n),this.root.rotation.y=this.yaw;let i=this.animated?1:2.3/this.height;if(this.animated||this.model.scale.setScalar(i*(.2+.8*ui(this.presence))),this.headBone?.userData.base&&this.headBone.quaternion.copy(this.headBone.userData.base),this.mixer.update(n),this.headBone&&((this.headBone.userData.base||=new pt).copy(this.headBone.quaternion),this.talk=ci(this.talk||0,+!!this.speaking,3,n),this.talk>.01)){let s=this.float;this.headBone.rotateX((Math.sin(s*2.3)*.05+Math.sin(s*3.7)*.025)*this.talk),this.headBone.rotateY(Math.sin(s*1.1)*.06*this.talk)}this.light&&(this.light.intensity=1.6*this.presence,this.light.position.copy(this.root.position).add(Ch.set(0,1.5,.4))),this.updateSmoke(n)}updateSmoke(n){let e=this.smoke.geometry.attributes.position.array,t=this.smoke.geometry.attributes.aAlpha.array,i=this.tailBones.length?this.tailBones:[this.root];for(let s=0;s<this.smokeN;s++){let r=this.particles[s];if(r.life+=n,r.life>r.max){let o=i[Math.random()*i.length|0];o.getWorldPosition(r.p),r.p.x+=(Math.random()-.5)*.25,r.p.z+=(Math.random()-.5)*.25,o===this.root&&(r.p.y+=Math.random()*.8),r.v.set((Math.random()-.5)*.12,.12+Math.random()*.22,(Math.random()-.5)*.12),r.life=0,r.max=1.6+Math.random()*2.2}let a=r.life/r.max;r.v.x+=Math.sin(r.life*2+s)*.12*n,r.v.z+=Math.cos(r.life*1.7+s)*.12*n,r.p.addScaledVector(r.v,n),e[s*3]=r.p.x,e[s*3+1]=r.p.y,e[s*3+2]=r.p.z,t[s]=Math.sin(Math.PI*a)*this.presence*(1-this.mat.userData.u.solid.value*.6)}this.smoke.geometry.attributes.position.needsUpdate=!0,this.smoke.geometry.attributes.aAlpha.needsUpdate=!0}};function m0(n){let e=0;return Fi.add(t=>(e+=t)>=n)}function g0(n){return Fi.add(()=>n())}var Sb=new P,x0=new pt,wb=class{constructor(n){this.G=n,this.active=null}open(n,e,t={}){if(this.active)return Promise.resolve();let{G:i}=this,s=new wt;n.updateWorldMatrix(!0,!0),n.traverse(o=>{o.isMesh&&o.material?.visible!==!1&&(o.geometry.computeBoundingBox(),s.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld)))});let r=s.getSize(new P).length(),a={object:n,card:e,parent:n.parent,pos:n.position.clone(),quat:n.quaternion.clone(),scl:n.scale.clone(),t:0,closing:!1,spin:0,tilt:0,scale:(t.size||.2)/Math.max(.01,r),hand:t.ptr?.xr&&t.ptr.grip?t.ptr.grip:null};return this.active=a,i.scene.attach(n),a.from=n.position.clone(),a.fromQ=n.quaternion.clone(),a.fromS=n.scale.clone(),i.ui.inspect(e),i.audio.play("pickup",{volume:.6}),i.player.lookLock=!0,i.monkey.look(n.getWorldPosition(new P)),i.monkey.chitter(.5),a.it=i.interactions.add({object:n,proxy:.15,label:"Return it",highlight:!1,range:3,onSelect:()=>this.close()}),new Promise(o=>a.resolve=o)}close(){let n=this.active;n&&!n.closing&&(n.closing=!0,n.t=0,n.from=n.object.position.clone(),n.fromQ=n.object.quaternion.clone(),n.fromS=n.object.scale.clone(),this.G.interactions.remove(n.it),this.G.ui.inspect(null),this.G.player.lookLock=!1,this.G.monkey.look(null),this.G.audio.play("place_click",{volume:.4}))}update(n){let e=this.active;if(!e)return;let{G:t}=this;e.t+=n;let i=e.object;if(e.closing){let u=ui(e.t/.6);e.parent.updateWorldMatrix(!0,!1);let d=e.pos.clone().applyMatrix4(e.parent.matrixWorld),f=e.parent.getWorldQuaternion(new pt).multiply(e.quat),p=e.scl.clone().multiply(e.parent.getWorldScale(new P));i.position.lerpVectors(e.from,d,u),i.quaternion.slerpQuaternions(e.fromQ,f,u),i.scale.lerpVectors(e.fromS,p,u),u>=1&&(e.parent.attach(i),i.position.copy(e.pos),i.quaternion.copy(e.quat),i.scale.copy(e.scl),this.active=null,e.resolve());return}if(e.hand){e.hand.updateWorldMatrix(!0,!1);let u=new P(0,.03,-.11).applyMatrix4(e.hand.matrixWorld),d=e.hand.getWorldQuaternion(new pt).multiply(x0.setFromEuler(new ki(-.9,0,0))),f=ui(e.t/.5);i.position.lerpVectors(e.from,u,f),i.quaternion.slerpQuaternions(e.fromQ,d,f),i.scale.lerpVectors(e.fromS,e.scl.clone().multiplyScalar(e.scale*.7),f);return}let s=t.camera,r=s.getWorldPosition(Sb).clone(),a=s.getWorldDirection(new P),o=r.addScaledVector(a,.42).add(new P(0,-.04,0)),l=t.player.lookDelta||{x:0,y:0};e.spin+=l.x*.006+n*.35,e.tilt=Math.max(-1.2,Math.min(1.2,e.tilt+l.y*.006)),t.player.lookDelta={x:0,y:0};let c=new pt().setFromRotationMatrix(new Ve().lookAt(s.getWorldPosition(new P),o,new P(0,1,0))).multiply(x0.setFromEuler(new ki(e.tilt,e.spin,0))),h=ui(e.t/.7);i.position.lerpVectors(e.from,o,h),i.quaternion.slerpQuaternions(e.fromQ,c,h),i.scale.lerpVectors(e.fromS,e.scl.clone().multiplyScalar(e.scale),h),e.t>1&&t.input.primary.pressed&&!t.xr.session&&this.close()}},va=new P,Tb=class{constructor(n){this.G=n;let{M:e}=n,t=this.group=new Te;t.name="CraftBench";let i=.945,s=re.bench.z;this.top=i,n.areas.workshop.group.add(t);let r=(f,p,v,g,m,_=t)=>{let b=new Ue(f,p);return b.position.set(v,g,m),b.castShadow=!0,b.receiveShadow=!0,_.add(b),b};r(new Xt(.13,.1,.14,16),e.brassDark,-.88,1.015,s),this.coals=r(new Xt(.11,.11,.02,16),e.ember.clone(),-.88,1.0899999999999999,s),this.crucible=new Te,this.crucible.position.set(-.88,1.105,s),t.add(this.crucible);let a=r(new $r([[.001,0],[.05,0],[.065,.06],[.07,.1],[.075,.105]].map(([f,p])=>new te(f,p)),18),e.clay,0,0,0,this.crucible);a.material=e.clay,this.melt=r(new jr(.064,20),new Yt({color:"#ffb347",emissive:"#ff8a1c",emissiveIntensity:2.4,roughness:.3,metalness:.6}),0,.085,0,this.crucible),this.melt.rotation.x=-Math.PI/2;let o=r(new Xt(.008,.008,.22,6),e.woodDark,.15,.08,0,this.crucible);o.rotation.z=Math.PI/2,this.stream=r(new Xt(.006,.01,1,8).translate(0,-.5,0),this.melt.material,-.8,1.2149999999999999,s+.02),this.stream.visible=!1,r(new fi(.26,.05,.18),e.stoneDark,-.55,.97,s+.02),this.fill=r(new Gt(.2,.12),this.melt.material.clone(),-.55,.996,s+.02),this.fill.rotation.x=-Math.PI/2,this.fill.scale.set(.001,.001,1),r(new Xt(.12,.14,.12,20),e.woodDark,0,1.005,s+.05),r(new fi(.16,.035,.12),e.brassDark,0,1.0819999999999999,s+.05),this.pieceModel=Gn(n.A.jewel.clone(),e),this.piece=hr(this.pieceModel,.2),this.piece.rotation.x=-Math.PI/2+.35,this.piece.position.set(0,1.13,s+.06),t.add(this.piece),this.hammer=new Te,this.hammer.position.set(.2,.965,s+.1),t.add(this.hammer);let l=r(new Xt(.009,.011,.24,8),e.woodDark,0,0,0,this.hammer);l.rotation.z=Math.PI/2,l.position.x=.07,r(new fi(.035,.035,.08),e.brass,-.05,0,0,this.hammer).rotation.x=Math.PI/2,this.hammer.userData.rest=this.hammer.position.clone(),r(new fi(.34,.02,.22),e.velvet,.47,.955,s+.03),this.leafPad=new Te,this.leafPad.position.set(.34,.98,s+.03),this.leafPad.rotation.set(-Math.PI/2+.55,0,0),t.add(this.leafPad);let c=new _n;for(let f=0;f<=24;f++){let p=f/24;c[f?"lineTo":"moveTo"](p*.26,Math.sin(Math.PI*p)**.85*.065*(1-.25*p))}for(let f=23;f>0;f--){let p=f/24;c.lineTo(p*.26,-(Math.sin(Math.PI*p)**.85)*.065*(1-.25*p))}this.leafBlank=r(new Ts(c,{depth:.004,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2}),e.goldSoft,0,0,0,this.leafPad),this.leafBlank.castShadow=!0,this.veinPath=[X(.012,0,.007),X(.06,.004,.007),X(.12,.002,.007),X(.18,-.002,.007),X(.245,0,.007)],this.veinCurve=new ji(this.veinPath),this.vein=rl(new Ue(Ma(this.veinPath,.0022,!1,60),e.brassDark)),this.leafPad.add(this.vein),this.vein.userData.grow(0),this.guide=new qi(new at().setFromPoints(this.veinCurve.getSpacedPoints(26)),_a(.015));let h=new Float32Array(27).fill(1),u=new Float32Array(27).fill(1);this.guide.geometry.setAttribute("aAlpha",new $e(h,1)),this.guide.geometry.setAttribute("aSize",new $e(u,1)),this.guide.visible=!1,this.leafPad.add(this.guide),this.graver=new Te,t.add(this.graver),this.graver.visible=!1,r(new Xt(.003,.006,.09,6).translate(0,.045,0),e.brass,0,0,0,this.graver),r(new qt(.014,10,8),e.woodDark,0,.1,0,this.graver).scale.set(1,1.4,1),r(new Xt(.07,.05,.02,20),e.brass,.88,.955,s+.04),this.pearl=new Te,this.pearl.position.set(.88,.985,s+.04),t.add(this.pearl),this.pearl.add(hr(Gn(ga(n.A.jewel,"flower",Wd(n.A.jewel)[0]),e),.045).rotateX(-Math.PI/2)),this.pearlHome=this.pearl.position.clone(),this.sparks=new qi(new at,_a(.02)),this.sparks.frustumCulled=!1,t.add(this.sparks),this.sparkN=40,this.sparkData=[],this.sparks.geometry.setAttribute("position",new $e(new Float32Array(120),3)),this.sparks.geometry.setAttribute("aAlpha",new $e(new Float32Array(40),1)),this.sparks.geometry.setAttribute("aSize",new $e(Float32Array.from({length:40},()=>.3+Math.random()),1));let d=X(0,i,s);for(let f of t.children)f.position.sub(d);t.position.copy(d),t.scale.setScalar(1.45);for(let f of["pearlHome"])this[f].sub(d);this.hammer.userData.rest.sub(d),this.reset()}reset(){this.step=0,this.fillP=0,this.strikes=0,this.engraved=0,this.holdingPearl=!1,this.done=!1,Hn(this.pieceModel,0),this.piece.visible=!1,this.fill.scale.set(.001,.001,1),this.crucible.rotation.z=0,this.stream.visible=!1,this.vein.userData.grow(0),this.engraved=0,this.pearl.position.copy(this.pearlHome),this.pearl.visible=!0,this.pearl.scale.setScalar(1),this.hammer.position.copy(this.hammer.userData.rest),this.hammer.rotation.set(0,0,0)}complete(){this.piece.visible=!0,Hn(this.pieceModel,1),this.fill.scale.set(1,1,1),this.vein.userData.grow(1),this.pearl.visible=!1,this.addPearlToPiece()}addPearlToPiece(){Hn(this.pieceModel,1)}burst(n,e=18){for(let t=0;t<e;t++)this.sparkI=((this.sparkI||0)+1)%this.sparkN,this.sparkData[this.sparkI]={p:n.clone(),v:new P((Math.random()-.5)*1.2,Math.random()*1.4,(Math.random()-.5)*1.2),life:0,max:.3+Math.random()*.4}}update(n){let e=this.sparks.geometry.attributes.position.array,t=this.sparks.geometry.attributes.aAlpha.array;for(let i=0;i<this.sparkN;i++){let s=this.sparkData[i];s?(s.life+=n,s.v.y-=4*n,s.p.addScaledVector(s.v,n),e[i*3]=s.p.x,e[i*3+1]=s.p.y,e[i*3+2]=s.p.z,t[i]=Math.max(0,1-s.life/s.max)):t[i]=0}if(this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.aAlpha.needsUpdate=!0,this.coals.material.emissiveIntensity=2.6+Math.sin(this.G.clock.time*6)*.5,this.holdingPearl&&this.holdPointer){let i=this.holdPointer;if(i.grip?(i.grip.updateWorldMatrix(!0,!1),va.set(0,-.01,-.06).applyMatrix4(i.grip.matrixWorld)):va.copy(i.ray.origin).addScaledVector(i.ray.direction,.38),this.group.worldToLocal(va),this.pearl.position.lerp(va,1-Math.exp(-18*n)),i.xr){let s=this.settingWorld();this.pearl.getWorldPosition(va),va.distanceTo(s)<.07&&this.onSet?.()}}}settingWorld(){return this.piece.localToWorld(new P(0,0,.004))}async play(n){let{G:e}=this,t=e.interactions,i=e.audio;this.reset(),n.objective("Hold to pour the molten gold into the leaf mould",null),await new Promise(a=>{let o=t.add({object:this.crucible,kind:"hold",holdTime:2.4,label:"Pour the molten gold",range:2.6,objective:!0,onHoldTick:l=>{this.crucible.rotation.z=-ui(l)*1.15,this.stream.visible=l>.25,this.stream.scale.y=.24,this.fillP=Math.max(this.fillP,Ft((l-.25)/.75));let c=.001+this.fillP;this.fill.scale.set(c,c,1),l>.25&&!this.pourSound&&(this.pourSound=i.play("pour_gold",{position:this.fill.getWorldPosition(new P),volume:.9})),l<=.01&&this.pourSound&&(this.pourSound.stop(.2),this.pourSound=null)},onSelect:()=>{t.remove(o),a()}});n.skipStep=()=>{t.remove(o),a()}}),this.stream.visible=!1,this.fill.scale.set(1,1,1),await Tt(.6,a=>{this.crucible.rotation.z=-1.15*(1-a)}),i.play("cool_hiss",{position:this.fill.getWorldPosition(new P),volume:.8}),this.piece.visible=!0,await Tt(1.6,a=>{Hn(this.pieceModel,a*.6),this.fill.material.emissiveIntensity=2.4*(1-a)}),e.monkey.gesture("excited"),e.ui.toast("The gold cools into the frame of a flower.",3.5);for(let a=0;a<3;a++){n.objective(`Strike the gold to shape the petals (${a+1} of 3)`,null),await new Promise(h=>{let u=t.add({object:this.piece,proxy:.13,label:"Strike with the hammer",range:2.6,highlight:!1,objective:!0,onSelect:()=>{t.remove(u),h()}});n.skipStep=()=>{t.remove(u),h()}});let o=this.hammer.userData.rest.clone(),l=this.piece.position.clone().add(X(.06,.09,.02));await Tt(.16,h=>{this.hammer.position.lerpVectors(o,l,h),this.hammer.rotation.z=-.9*h},fr),i.play(`hammer_${a+1}`,{position:this.piece.getWorldPosition(new P),volume:1}),e.xr.pulseAll(.6,60),this.burst(this.piece.position.clone().add(X(0,.03,0)),16);let c=.6+a*.0933;Tt(.5,h=>Hn(this.pieceModel,c+.0933*fr(h))),await Tt(.35,h=>{this.hammer.position.lerpVectors(l,o,h),this.hammer.rotation.z=-.9*(1-h)})}e.ui.toast("Each strike coaxes a blossom from the metal.",3.5),n.objective("Hold and trace the dotted vein to engrave the leaf",null),this.guide.visible=!0,await new Promise(a=>{let o=0,l=null,c=()=>{t.remove(h),this.graver.visible=!1,this.guide.visible=!1,this.vein.userData.grow(1),a()},h=t.add({object:this.leafBlank,kind:"drag",label:"Engrave along the vein",range:2.6,objective:!0,autopath:()=>this.veinCurve.getSpacedPoints(30).map(u=>this.leafPad.localToWorld(u.clone())),onPress:()=>{this.graver.visible=!0},whileDown:u=>{let d=new P(0,0,1).applyQuaternion(this.leafPad.getWorldQuaternion(new pt)),f=this.leafPad.getWorldPosition(new P),p=new Xi().setFromNormalAndCoplanarPoint(d,f),v=u.ray.intersectPlane(p,new P);if(!v)return;this.graver.position.copy(this.group.worldToLocal(v.clone())),this.graver.lookAt(this.group.worldToLocal(v.clone().add(d))),this.graver.rotateX(Math.PI/2);let g=this.leafPad.worldToLocal(v.clone()),m=o,_=1e9;for(let x=o;x<=Math.min(1,o+.15);x+=.01){let M=this.veinCurve.getPointAt(x).distanceTo(g);M<_&&(_=M,m=x)}let b=u.xr?.035:.028;if(_<b&&m>o){o=m,this.vein.userData.grow(o);let x=this.guide.geometry.attributes.aAlpha;for(let M=0;M<x.count;M++)x.array[M]=+(M/(x.count-1)>o);x.needsUpdate=!0,(!l||e.clock.time-l>.25)&&(l=e.clock.time,i.play("engrave",{position:v,volume:.5,rate:.9+Math.random()*.2}),e.xr.pulseAll(.15,20)),o>.96&&c()}},onRelease:()=>{this.graver.visible=!1}});n.skipStep=c}),await Tt(1,a=>Hn(this.pieceModel,.88+.06*a)),e.monkey.gesture("look_around"),e.ui.toast("Every leaf now carries the line of a maker\u2019s hand.",3.5),n.objective("Pick up the gold blossom",null),await new Promise(a=>{let o=t.add({object:this.pearl,proxy:.06,label:"Pick up the gold blossom",range:2.6,objective:!0,onSelect:l=>{t.remove(o),this.holdingPearl=!0,this.holdPointer=l,i.play("pickup",{volume:.7}),a()}});n.skipStep=()=>{t.remove(o),a()}}),n.objective("Set the blossom on the cuff",null),await new Promise(a=>{let o=()=>{this.done||(this.done=!0,t.remove(l),this.onSet=null,a())};this.onSet=o;let l=t.add({object:this.piece,proxy:.13,label:"Set the blossom",range:2.6,highlight:!1,objective:!0,onSelect:o});n.skipStep=o}),this.holdingPearl=!1;let s=this.pearl.getWorldPosition(new P),r=this.settingWorld();await Tt(.5,a=>{this.pearl.position.copy(this.group.worldToLocal(s.clone().lerp(r,a)))}),this.pearl.visible=!1,this.addPearlToPiece(),i.play("pearl_set",{position:r,volume:.9}),e.xr.pulseAll(.4,40),await Tt(1.2,a=>Hn(this.pieceModel,.94+.06*a)),i.play("sparkle",{position:r,volume:.6}),e.ui.toast("Set by hand, the blossom holds. The cuff is whole.",4),this.burst(this.piece.position.clone(),30),n.skipStep=null}},Ab={welcome1:"Welcome, traveller. I am the keeper of forgotten things.",welcome2:"Beyond this arch lies the old Gold Souk. Every treasure in it remembers the hands that made it.",welcome3:"My little friend knows its every corner. Follow him \u2014 and stay curious.",finale1:"You found it. Nothing made with such care is ever truly lost.",finale2:"I keep the treasures the world forgets, so that their stories are kept too.",finale3:"Look closely. Every petal was shaped by patient hands. Every leaf carries the memory of its maker.",finale4:"Let it show you what it carries.",finale5:"Gold can be melted, and pearls can be lost. But craft \u2014 craft is remembered.",finale6:"This is the work of Kavya Potluri. And now, it is part of your story too."},Wn=[{id:"welcome",title:"The Welcome",blurb:"A lamp, a guardian and a little guide."},{id:"souk",title:"The Gold Souk",blurb:"Brass, pearls and woven light."},{id:"carpet",title:"The Flying Carpet",blurb:"A gentle ride over the lower town."},{id:"workshop",title:"The Workshop",blurb:"Pour, shape, engrave and set the ear cuff."},{id:"gallery",title:"The Gallery",blurb:"Kavya Potluri\u2019s collection \u2014 and an empty pedestal."},{id:"desert",title:"The Golden Desert",blurb:"Follow the trail beyond the souk."},{id:"finale",title:"The Restoration",blurb:"The pearl, the Genie and the golden arch."}],v0={welcome:"01 \xB7 The Welcome",souk:"02 \xB7 The Gold Souk",carpet:"03 \xB7 The Flying Carpet",workshop:"04 \xB7 The Workshop",gallery:"05 \xB7 The Gallery",desert:"06 \xB7 The Golden Desert",finale:"07 \xB7 The Restoration"},lf="souk-game-progress-v2",y0={"Approach the lamp":"Walk up to the lamp on the pedestal and look at it \u2014 or click it.","Follow your guide into the souk":"The golden motes lead the way. Follow the monkey through the arch.","Step onto the flying carpet":"Walk onto the carpet in the middle of the courtyard, or click it.","Follow the sound of hammers":"The workshop door is straight ahead, past the landing.","Join the craft at the central bench":"Stand at the front of the long bench in the middle of the room.","Hold to pour the molten gold into the leaf mould":"Point at the glowing crucible on the left and hold the button down.","Hold and trace the dotted vein to engrave the leaf":"Hold the button on the gold leaf and slowly follow the dotted line from its base to its tip.","Pick up the gold blossom":"The gold blossom sits in the small brass dish on the right of the bench.","Set the blossom on the cuff":"With the blossom in hand, click the ear cuff in the centre.","Explore the collection":"Walk up to a lit niche and click a piece to hold it. The monkey is heading to the centre\u2026","Something on the central pedestal\u2026":"Walk up to the glass dome in the middle of the gallery.","Follow the golden trail across the sand":"Follow the motes and the monkey out across the dunes.","There \u2014 follow the glimmer":"Keep after the monkey \u2014 he has seen where the trail went.","Help him brush away the sand":"Point at the small mound of sand beside the monkey and hold the button."},pi=new P,Rh=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Eb=class{constructor(n){this.G=n,this.chapter=null,this.cinematic=!1,this.inspector=new wb(n),this.craft=new Tb(n),this.trailTarget=null,this.trailRoute=null,this.trailOpts={},this.found=new Set,n.scene.attach(n.areas.courtyard.carpet),this.setupAmbientReactions(),this.buildFinaleProps(),this.littleCarpet=Oh({fringeMat:()=>A0.fringe},n.M,1,1.4),n.scene.add(this.littleCarpet),this.littleCarpetPark=X(re.carpet.x-1.85,re.carpet.y,re.carpet.z+.1),this.guide=new Ah(n,this.littleCarpet,{P:Tt,N:_t,Ke:Eh,park:this.littleCarpetPark,parkYaw:0}),n.guide=this.guide,n.world.onArea=e=>this.onArea(e)}saved(){try{return localStorage.getItem(lf)}catch{return null}}save(n){try{localStorage.setItem(lf,n)}catch{}}clearSave(){try{localStorage.removeItem(lf)}catch{}}nextChapter(){let n=Wn.findIndex(e=>e.id===this.chapter);return Wn[Math.min(Wn.length-1,n+1)].id}objective(n,e,t={}){this.G.ui.objective(v0[this.chapter]||"",n),this.hintState=n&&y0[n]?{text:y0[n],t:0,shown:0}:null,e!==void 0&&this.trail(e,t)}trail(n,e={}){this.trailTarget=n,this.trailOpts=e,this.trailAcc=1e9,this.G.trail.show(!!n)}cine(n,e){this.cinematic=n,this.G.ui.cinematic(n&&!this.G.xr.session),this.G.player.frozen=n,e&&!this.G.xr.session&&(this.G.player.lookAt(e,1.8,3),this.G.player.attention.story=!0)}look(n,e=1.8,t=2.5){this.G.xr.session||(this.G.player.lookAt(n,e,t),this.G.player.attention.story=!0)}near(n,e){return ls(()=>Rh(this.G.player.head(pi),n)<e)}pick(n){return new Promise(e=>{let t=this.G.interactions.add({objective:!0,...n,onSelect:(i,s)=>{this.G.interactions.remove(t),n.after?.(i,s),e(i)}});this.pending.push(t)})}say(n,e){return this.G.genie.say(n,Ab[n],e)}hint(n,e=4){this.G.ui.toast(n,e)}route(n,e){let t=[],i=n<=e?1:-1;for(let s=n;i>0?s<=e:s>=e;s+=i)t.push(it(s));return t}async start(n){let e=this.G;Fi.newToken();for(let i of this.pending||[])e.interactions.remove(i);this.pending=[],this.inspector.active&&this.inspector.close(),this.cine(!1),e.trail.show(!1),e.ui.subtitle("",""),e.ui.objective("",""),e.audio.stopSpeech(),e.player.mount=null,e.player.frozen=!1,e.camera.position.y=e.xr.session?0:1.62,e.world.setOverride(null),this.chapter=n,this.save(n),this.applyState(n);let t=Wn.findIndex(i=>i.id===n);for(let i=t;i<Wn.length;i++){let s=Wn[i];this.chapter!==s.id&&(this.chapter=s.id,this.save(s.id)),e.ui.objective(v0[s.id],""),i===t&&this.placePlayer(s.id),await this[s.id]()}}skipScene(){this.skipStep?.()}attract(){let n=this.G;Fi.newToken(),this.chapter=null,this.applyState("welcome"),n.player.teleport(2.6,14.4,.32),n.player.pitch=.04,n.player.mount=null,n.genie.root.visible=!1,Eh((e,t)=>{let i=n.player;return i.rig.rotation.y=.32+Math.sin(t*.07)*.1,i.camera.rotation.set(.04+Math.sin(t*.05)*.025,0,0),i.rig.position.x=2.6+Math.sin(t*.045)*.35,!1})}placePlayer(n){let e=this.G.player,t=!!this.G.xr.session,[i,s,r]={welcome:[re.spawn.x,re.spawn.z,0],souk:[0,.6,0],carpet:[0,-38.6,0],workshop:[0,-107.2,0],gallery:[0,-138.6,0],desert:[0,-166.4,0],finale:[5.2,-219.4,.04]}[n];e.teleport(i,s,r,t),t&&(this.G.ui.snapPanel=!0)}applyState(n){let e=this.G,t=e.areas,i=e.nav,s=Wn.findIndex(u=>u.id===n),r=u=>s>Wn.findIndex(d=>d.id===u);for(let u of["soukArch","workshopDoor","motifDoor","galleryExit"])i.close(u);r("welcome")&&i.open("soukArch"),r("workshop")&&i.open("workshopDoor"),r("workshop")&&i.open("motifDoor"),r("gallery")&&i.open("galleryExit"),e.world.setHidden("workshop",!r("workshop")),e.world.setHidden("gallery",!r("workshop")),e.world.setHidden("desert",!r("gallery")),t.dock.door.open(+!!r("workshop")),t.workshop.motifDoor.open(+!!r("workshop")),t.gallery.exitDoor.open(r("gallery")?.9:0),t.gallery.lights.find(u=>u.exit).intensity=r("gallery")?8:0,this.setMotifGlow(+!!r("workshop")),r("workshop")?this.craft.complete():this.craft.reset();let a=t.courtyard.carpet;r("carpet")?a.position.copy(re.dockLanding):a.position.copy(re.carpet),a.rotation.set(0,0,0),t.desert.mound.visible=!0,t.desert.mound.scale.set(1,.32,1),this.pearl.visible=!1,this.jewel.visible=!1,this.sculpture.group.visible=!1,this.sculpture.grow(0),this.finaleLight.intensity=0,this.finaleLight.off=!0,this.titleCard.visible=!1,this.titleCard.material.opacity=0,this.showShaft.material.uniforms.strength.value=0,t.desert.lamp.visible=!0,e.genie.root.visible=!1,e.genie.targetPresence=0,e.genie.presence=0;let o=e.monkey;o.detach(),o.look(null),o.lookPlayer=!0,this.littleCarpet&&(this.littleCarpet.userData.flying=!1,this.littleCarpet.position.copy(this.littleCarpetPark),this.littleCarpet.rotation.y=0);let l={welcome:[re.monkeyStart,0],souk:[X(.8,0,-1.8),Math.PI],carpet:[X(.6,0,-40.5),Math.PI],workshop:[X(1,0,-111.5),Math.PI],gallery:[X(.9,0,-140.5),Math.PI],desert:[X(.6,0,-170.4),Math.PI],finale:[X(5.85,0,-223.1),-.6]},[c,h]=l[n]||l.welcome;o.placeAt(c,h),o.sitting=n==="welcome",o.play(n==="welcome"?"idle":o.restClip()),this.guide?.applyState(n,c,h),n==="finale"&&(t.desert.mound.visible=!1,this.pearl.visible=!0,this.pearl.position.copy(this.pearlSpot))}setMotifGlow(n){this.G.areas.workshop.motif.traverse(e=>{e.isMesh&&(e.userData.glowMat||(e.material=e.material.clone(),e.userData.glowMat=!0),e.material.emissive?.set("#ffb85a"),e.material.emissive&&(e.material.emissiveIntensity=n*.9))})}onArea(n){let e=this.G.areas[n];if(!e)return;let{audio:t}=this.G;this.musicLock||(e.music&&t.music(e.music,.8),e.amb&&t.ambience(e.amb,.9))}setupAmbientReactions(){let n=this.G,e=n.areas.souk;e.kp&&i0(n,e.kp);for(let i of e.reactors)n.interactions.react({position:i.position,radius:4.5,update:s=>{e.lanternBoost=Math.max(e.lanternBoost||0,s)*.98,s>.5&&!i.done&&(i.done=!0,n.audio.play("lantern_on",{position:i.position,volume:.5})),s<.1&&(i.done=!1)}});for(let i of e.charms)n.interactions.react({object:i,radius:1.8,update:s=>{s>.25&&!i.userData.rang&&(i.userData.rang=!0,i.userData.excite=1,n.audio.play("charms_tinkle",{position:i.getWorldPosition(new P),volume:.5})),s<.05&&(i.userData.rang=!1)}});for(let i of n.areas.gallery.displays){let s=n.areas.gallery.lights.find(r=>r.niche&&Math.abs(r.position.z-i.z)<.1&&Math.sign(r.position.x)===i.s);n.interactions.react({position:i.pos,radius:3.2,update:(r,a)=>{s&&(s.intensity=2.2+r*5),i.spin=(i.spin||Math.random()*6)+a*(.25+r*.5),this.inspector.active&&this.inspector.active.object===i.obj||(i.obj.rotation.y=Math.sin(i.spin)*.55)}})}let t=[{obj:e.brassPieces[0],name:"Chased brass ornament",line:"Hammered from a single sheet, then chased with a blunt tool, one small dent at a time."},...e.curios];for(let i of t)i.obj&&n.interactions.add({object:i.obj,proxy:.18,label:`Look closer \xB7 ${i.name}`,range:2.6,onSelect:s=>{let r=!this.found.has(i.name);this.found.add(i.name),this.inspector.open(i.obj,i,{size:i.size||.18,ptr:s}),r&&setTimeout(()=>n.ui.toast(`Curiosities found \xB7 ${this.found.size} of ${t.length}`,3),900)}})}buildFinaleProps(){let n=this.G,e=n.M,t=n.areas.desert;this.pearlSpot=X(re.digSpot.x,Ni(re.digSpot.x,re.digSpot.z)+.045,re.digSpot.z),this.pearl=new Ue(new qt(.045,32,20),e.pearl.clone()),this.pearl.material.emissive=new fe("#ffdba8"),this.pearl.material.emissiveIntensity=0,this.pearl.castShadow=!0,this.pearl.position.copy(this.pearlSpot),t.group.add(this.pearl),this.jewel=new Te;let i=n.A.jewel.clone();this.jewelModel=i,this.jewel.add(hr(i,.3)),t.group.add(this.jewel),i.traverse(c=>{c.isMesh&&(c.castShadow=!0,/gold/i.test(c.material.name)?c.material=e.gold:/pearl/i.test(c.material.name)&&(c.material=e.pearl))});let s=Ni(re.stage.x,re.stage.z)+.92;this.stageTop=X(re.stage.x,s,re.stage.z),this.sculpture=new mb(e,{width:3.4,height:4.4,cuff:n.A.jewel}),this.sculpture.group.position.set(re.stage.x,Ni(re.stage.x,re.stage.z-.9),re.stage.z-.9),t.group.add(this.sculpture.group),this.showShaft=al(X(re.stage.x,s+6,re.stage.z),X(re.stage.x,s-.3,re.stage.z),.15,.9,"#ffd9a0",0),t.group.add(this.showShaft),this.finaleLight=n.world.slot({position:X(re.stage.x,s+1.6,re.stage.z+.8),color:"#ffe2b0",intensity:0,distance:6,priority:4}),this.magicN=120;let r=new at;r.setAttribute("position",new $e(new Float32Array(360),3)),r.setAttribute("aAlpha",new $e(new Float32Array(120),1)),r.setAttribute("aSize",new $e(Float32Array.from({length:120},()=>.4+Math.random()),1)),this.magic=new qi(r,_a(.03)),this.magic.frustumCulled=!1,n.scene.add(this.magic),this.magicData=Array.from({length:120},()=>({p:new P,v:new P,life:1,max:1})),this.magicSource=null;let a=document.createElement("canvas");a.width=1024,a.height=320;let o=a.getContext("2d");o.textAlign="center",o.fillStyle="#f3e3c3",o.font="300 88px Georgia",o.letterSpacing="18px",o.shadowColor="rgba(80,40,0,0.6)",o.shadowBlur=18,o.fillText("KAVYA POTLURI",512,150),o.font="italic 46px Georgia",o.fillStyle="#e7c58a",o.letterSpacing="2px",o.fillText(ya.name,512,230),o.fillStyle="rgba(231,197,138,0.8)",o.fillRect(392,270,240,2);let l=new Pi(a);l.colorSpace=xt,this.titleCard=new Ue(new Gt(3.2,1),new Nt({map:l,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1})),this.titleCard.position.set(re.stage.x,Ni(re.stage.x,re.stage.z)+5.6,re.stage.z-.6),this.titleCard.visible=!1,this.titleCard.renderOrder=7,t.group.add(this.titleCard)}motes(n,e="rise",t=40){this.magicSource=n?{at:n.clone(),mode:e,rate:t,acc:0}:null}updateMotes(n){let e=this.magic.geometry.attributes.position.array,t=this.magic.geometry.attributes.aAlpha.array,i=this.magicSource,s=0;i&&(i.acc+=n*i.rate,s=Math.floor(i.acc),i.acc-=s);for(let r=0;r<this.magicN;r++){let a=this.magicData[r];if(a.life>=a.max&&s>0&&i){s--,a.life=0,a.max=1.5+Math.random()*2;let o=Math.random()*Math.PI*2,l=i.mode==="sink"?.9:.15+Math.random()*.25;a.p.set(i.at.x+Math.cos(o)*l,i.at.y+(i.mode==="sink"?.8+Math.random():Math.random()*.1),i.at.z+Math.sin(o)*l),a.v.set(-Math.sin(o)*.3,i.mode==="sink"?-.25:.25+Math.random()*.35,Math.cos(o)*.3),a.a=o}a.life+=n,i?.mode==="sink"&&(pi.copy(i.at).sub(a.p).multiplyScalar(1.4*n),a.p.add(pi)),a.p.addScaledVector(a.v,n),i?.mode==="swirl"&&(a.v.x+=-a.v.z*n*2,a.v.z+=a.v.x*n*2),e[r*3]=a.p.x,e[r*3+1]=a.p.y,e[r*3+2]=a.p.z,t[r]=a.life<a.max?Math.sin(Math.PI*Ft(a.life/a.max)):0}this.magic.geometry.attributes.position.needsUpdate=!0,this.magic.geometry.attributes.aAlpha.needsUpdate=!0}update(n,e){this.guide?.tick(n);let t=this.G,i=t.player.position.z<-167;if(i!==this.outdoors&&(this.outdoors=i,t.trail.daylight(i),mr?.ao&&(mr.ao.enabled=!i&&!mr.aoTripped)),this.hintState&&!this.cinematic&&!this.inspector.active){let s=this.hintState;s.t+=e,s.t>24+s.shown*30&&(s.shown++,t.ui.toast(t.xr.session?s.text.replace(/click|Click/g,"trigger"):s.text,6),t.monkey.gesture("point"))}if(this.inspector.update(e),this.craft.update(n),this.updateMotes(n),this.sculpture.update(Vi.time),this.trailAcc=(this.trailAcc||0)+e,this.trailTarget&&this.trailAcc>.6){this.trailAcc=0;let s=t.player.head(new P),r=this.trailTarget.isObject3D?this.trailTarget.getWorldPosition(new P):this.trailTarget.clone(),a=[X(s.x,Dh(s.x,s.z),s.z).addScaledVector(t.player.forward(pi).setY(0).normalize(),.9)],o=this.trailOpts.route;if(o){let l=o[0];for(let c=o[0];c<o[1];c++){let h=it(c),u=it(c+1).clone().sub(h);X(s.x,0,s.z).sub(h).dot(u)/u.lengthSq()>.6&&(l=c+1)}for(let c=l;c<=o[1];c++){let h=it(c);Rh(h,a[a.length-1])>.8&&a.push(X(h.x,Dh(h.x,h.z),h.z))}}Rh(r,a[a.length-1])>.4?a.push(r):a[a.length-1]=r,a.length>=2&&Rh(a[0],r)>1.2?(t.trail.setPath(a,{height:this.trailOpts.height??.8,ground:this.trailOpts.ground?Dh:null,gaps:this.trailOpts.gaps}),t.trail.show(!0)):this.trailOpts.keep||t.trail.show(!1)}}async welcome(){let n=this.G,{monkey:e,genie:t,audio:i}=n,s=n.areas;i.music("mus_welcome",.7),i.ambience("amb_entrance",.9),e.placeAt(X(2.35,0,9.5),Math.PI*.8),e.sitting=!0,e.play("idle"),await _t(n.settings.reduced?.6:2.4),e.stand(),e.chitter(1),e.face(n.player.head(pi)),await _t(.5),await e.walk([X(1.6,0,7.9),X(1.25,0,7.4)]),e.face(n.player.head(pi)),await e.sit(),await _t(.6),this.objective("Approach the lamp",s.entrance.lamp,{height:.6});let r=0,a=re.lamp.clone();await Promise.race([this.pick({object:s.entrance.lamp,label:"Touch the lamp",range:3.2}),Eh(o=>{let l=n.player.head(pi),c=n.player.forward(new P),h=a.clone().sub(l);return r=h.length()<3.4&&h.normalize().dot(c)>.93?r+o:0,r>1.6})]);for(let o of this.pending)n.interactions.remove(o);this.objective("",null),this.cine(!0,X(0,2.4,7)),i.play("sparkle",{position:a,volume:.6}),this.lampGlow=n.world.slot({position:a.clone().add(X(0,.3,.15)),color:"#ffc272",intensity:0,distance:4.5,priority:2.5}),await Tt(n.settings.reduced?.6:1.8,o=>{this.lampGlow.intensity=6*o}),this.motes(a.clone().add(X(.12,.08,0)),"rise",50),e.look(X(0,2.2,7)),e.lookPlayer=!1,await _t(1.6),Tt(3,o=>{this.lampGlow.intensity=6*(1-o)}).then(()=>n.world.removeSlot(this.lampGlow)),await t.appear(X(.1,1.02,7),X(.15,.95,7)),this.motes(null),e.gesture("surprised"),await _t(.6),await this.say("welcome1","welcome"),await this.say("welcome2"),e.look(null),e.lookPlayer=!0,t.faceTarget=e.root.position.clone().add(X(0,.5,0)),t.gesture("present"),await _t(.9),e.look(t.root.position.clone().add(X(0,1.7,0))),await e.gesture("excited"),t.faceTarget=null,e.look(null),await this.say("welcome3"),e.stand(),await e.gesture("beckon"),t.gesture("bow"),await _t(2.6),await t.vanish(re.lamp.clone().add(X(.1,0,0))),n.nav.open("soukArch"),i.play("door_open",{position:re.soukArch.clone().add(X(0,2,0)),volume:.4}),this.cine(!1),this.objective("Follow your guide into the souk",null),this.trail(it(5),{route:[0,5]}),await Promise.race([e.walk([it(2),it(3),it(4),X(.5,0,-.8)],{lead:{wait:6,resume:3.5}}).then(()=>e.face(n.player.head(pi))),ls(()=>n.player.position.z<1.6)]),await ls(()=>n.player.position.z<1.4)}async souk(){let n=this.G,{monkey:e,audio:t}=n,i=n.areas.souk;this.save("souk"),n.nav.open("soukArch"),t.music("mus_souk",.7),t.ambience("amb_souk",.9),this.objective("Follow the monkey through the souk",it(10),{route:[4,10]}),await e.walk([it(5),X(-2.2,0,-8.75)],{lead:{wait:6,resume:3.6}});let s=i.brassPieces[0];s&&(e.face(s.getWorldPosition(pi)),e.look(s.getWorldPosition(new P)),await _t(.4),e.gesture("reach_touch"),await _t(1),t.play("place_click",{position:s.getWorldPosition(new P),volume:.4}),Tt(1.2,a=>{s.rotation.y=a*1.4}),await _t(1.6),e.look(null),this.hint("Look closer at anything that catches your eye.",4)),e.face(n.player.head(pi)),e.look(n.player.head(new P)),await _t(1.1),e.look(null),await e.walk([it(7),it(8)],{lead:{wait:6,resume:3.6}});let r=i.shimmer[0]||X(3,1,-17);this.motes(r,"swirl",30),t.play("sparkle",{position:r,volume:.5}),e.face(r),e.look(r),await e.gesture("look_around"),await _t(.8),this.motes(null),e.look(n.player.head(new P)),await _t(.9),e.look(null),await e.walk([it(9),it(10),it(11)],{lead:{wait:6,resume:3.6}}),await this.near(it(11),4.5)}async carpet(){let n=this.G,{monkey:e,audio:t,player:i}=n,s=n.areas.courtyard.carpet;n.nav.open("soukArch"),t.music("mus_souk",.7),this.guide.boarding=e.walk([it(11)],{run:!0}).then(async()=>{this.guide.boarding=null,await this.guide.board(),e.gesture("beckon")}),this.objective("Step onto the flying carpet",s,{height:.4}),await Promise.race([ls(()=>{let h=i.head(pi);return Math.abs(h.x-s.position.x)<1.15&&Math.abs(h.z-s.position.z)<1.6}),this.pick({object:s,label:"Board the carpet",range:4})]);for(let h of this.pending)n.interactions.remove(h);this.objective("",null),this.cine(!0),await this.guide.whenBoarded();let r=!!n.xr.session;i.mount={object:s,offset:X(0,.02,.55)},r?(i.head(pi),i.rig.position.y=s.position.y):Tt(1.2,h=>{n.camera.position.y=1.62-h*.5}),this.look(X(0,3,-60),1.2,3),t.play("carpet_rise",{volume:.8}),t.ambience("amb_flight",.9),t.music("mus_souk",.9),n.xr.pulseAll(.35,120),this.musicLock=!0,n.world.setOverride(["courtyard","valley","dock"]),s.userData.flutter.value=.4;let a=new ji([re.carpet.clone(),X(0,1.3,-48.5),X(0,2.6,-52.5),X(0,3.4,-57),X(.8,4.2,-63),X(-.4,4.4,-70),X(.6,4.3,-78),X(-.3,4.4,-86),X(.2,4,-93),X(0,2.6,-100),X(0,1.2,-105.5),re.dockLanding.clone()],!1,"centripetal");a.getLength();let o=n.settings.reduced?16:44,l={};await Tt(o,h=>{let u=h;a.getPointAt(u,s.position),this.guide.followFlight(a,u);let d=a.getPointAt(Math.min(1,u+.01));u<.99&&(s.rotation.y=Math.atan2(-(d.x-s.position.x),-(d.z-s.position.z))*.6),u>.06&&!l.a&&(l.a=!0,e.gesture("look_around")),u>.3&&!l.b&&(l.b=!0,e.look(X(15,8,-80)),e.gesture("point")),u>.42&&!l.c&&(l.c=!0,e.look(null),t.play("cloth_flutter",{volume:.6})),u>.62&&!l.d&&(l.d=!0,t.play("cloth_flutter",{volume:.5})),u>.8&&!l.e&&(l.e=!0,e.gesture("excited"))},h=>r0(h)),s.rotation.y=0,s.userData.flutter.value=.15,t.play("carpet_land",{volume:.8}),n.xr.pulseAll(.3,90),this.musicLock=!1,n.world.setOverride(null),await _t(.6),i.mount=null;let c=X(0,0,-107.4);r?(i.head(pi),i.rig.position.x+=c.x-pi.x,i.rig.position.z+=c.z-pi.z,i.rig.position.y=0):(i.rig.position.set(c.x,0,c.z),Tt(.8,h=>{n.camera.position.y=1.12+h*.5})),i.groundY=0,this.guide.flying=!1,this.cine(!1),this.onArea("dock"),await e.gesture("look_around")}async workshop(){let n=this.G,{monkey:e,audio:t}=n,i=n.areas.workshop,s=n.areas.dock;t.music("mus_souk",.6),t.ambience("amb_souk",.8);let r=!0;(async()=>{for(;r;)t.play(`hammer_${1+(Math.random()*3|0)}`,{position:X(0,1.5,-119),volume:.35,rate:.9+Math.random()*.2}),await _t(.5+Math.random()*1.2)})(),this.objective("Follow the sound of hammers",re.workshopDoor,{route:[13,15]}),await e.walk([X(.6,0,-114.5),X(.8,0,-116.6)],{lead:{wait:6,resume:3.5}}),e.face(n.player.head(pi)),e.gesture("point"),await this.near(re.workshopDoor,4.4),r=!1,n.world.setHidden("workshop",!1),t.play("door_open",{position:re.workshopDoor.clone().add(X(0,1.5,0)),volume:.8}),await Tt(2.2,h=>s.door.open(h)),n.nav.open("workshopDoor"),this.objective("Watch the artisans at work",null),await e.walk([it(16),X(-2.6,0,-123.4)],{lead:{wait:6,resume:3.6}});let a=i.stations[0];e.face(a.pos),e.look(a.pos.clone().add(X(0,.1,0))),await _t(2.5),e.look(null);let o={shaping:"Shaping \u2014 thin gold is coaxed into petals with a small hammer.",engraving:"Engraving \u2014 every leaf vein is cut by hand with a graver.",setting:"Setting \u2014 tiny claws are pushed over a pearl to hold it for a lifetime."},l=this.visitedStations||=new Set;if(!this.stationReactors)for(let h of this.stationReactors=i.stations)n.interactions.react({position:h.pos,radius:2.4,update:u=>{u>.2&&!l.has(h.label)&&this.chapter==="workshop"&&(l.add(h.label),this.hint(o[h.label],5))}});await e.walk([X(1.6,0,-125.4),X(.9,0,-126.2)],{lead:{wait:6,resume:3.6}}),e.face(re.bench),e.gesture("point"),this.objective("Join the craft at the central bench",re.craftStand,{height:.5}),await this.near(re.craftStand,1.5),this.objective("",null),n.trail.show(!1),this.look(X(0,.95,-127.6),2,2),e.face(re.bench),e.look(X(0,1,-127.5)),await this.craft.play(this),e.look(null),e.face(n.player.head(pi)),await e.gesture("excited"),this.objective("The same cuff\u2026 on the doorway",null);let c=i.motif.getWorldPosition(new P);this.look(c,1.4,3),t.play("lantern_on",{position:c,volume:.8}),this.motes(c,"swirl",30),await Tt(2.2,h=>this.setMotifGlow(h)),e.look(c),await _t(1.2),this.motes(null),n.world.setHidden("gallery",!1),t.play("door_open",{position:re.motifDoor.clone().add(X(0,1.5,0)),volume:.8}),await Tt(2.4,h=>i.motifDoor.open(h)),n.nav.open("motifDoor"),e.look(null),this.objective("Enter the jewellery quarter",it(22),{route:[18,22]}),e.walk([it(18),it(19),it(20),it(21),it(22),X(.9,0,-141)],{lead:{wait:6,resume:3.6}}),await ls(()=>n.player.position.z<-136.3)}async gallery(){let n=this.G,{monkey:e,audio:t}=n,i=n.areas.gallery;n.nav.open("motifDoor"),t.music("mus_gallery",.7),t.ambience("amb_gallery",.9),this.objective("Explore the collection",null),this.hint("Approach a niche \u2014 select a piece to hold it.",4.5);let s=0,r=i.displays.map((c,h)=>{let u=n.interactions.add({object:c.obj,proxy:.2,highlight:.2,label:`Look closer \xB7 ${c.name}`,range:3.2,objective:h===0||h===3,onSelect:d=>{s++,u.done=!0,this.inspector.open(c.obj,c,{size:.24,ptr:d}),t.play("sparkle",{volume:.25})}});return u});this.galleryIts=r;let a=i.displays[0];await e.walk([X(.6,0,-139.6),a.view.clone().add(X(.4,0,0))]),e.face(a.pos),e.look(a.pos),await _t(3),e.look(null),await Promise.race([ls(()=>s>=2),_t(40),this.near(re.galleryPedestal,3.2)]),this.inspector.active&&await ls(()=>!this.inspector.active),await e.walk([X(.8,0,-150),X(.6,0,-154.2)],{lead:{wait:7,resume:4}}),e.face(re.galleryPedestal),e.look(X(0,1.15,re.galleryPedestal.z)),this.objective("Something on the central pedestal\u2026",X(0,0,re.galleryPedestal.z+1.2),{height:.4}),await this.near(re.galleryPedestal,2.9),this.objective("",null),n.trail.show(!1),this.cine(!0,X(0,1.15,re.galleryPedestal.z)),t.play("discovery",{position:X(0,1.2,re.galleryPedestal.z),volume:.9}),await e.gesture("surprised"),e.face(n.player.head(pi)),e.look(null),await e.gesture("point"),this.objective(`One piece is missing \u2014 the ${ya.name}`,null),await _t(1.2);let o=X(0,1.15,re.galleryPedestal.z);this.motes(o,"rise",45),e.look(o.clone().add(X(0,.8,0))),await _t(2.2),this.motes(null);let l=i.lights.find(c=>c.exit);n.world.setHidden("desert",!1),t.play("door_open",{position:re.galleryExit.clone().add(X(0,1.5,0)),volume:.8}),Tt(3,c=>{i.exitDoor.open(c*.9),l.intensity=8*c}),this.trail(re.gate,{route:[26,30],height:1}),e.look(re.galleryExit.clone().add(X(0,1.2,0))),this.look(re.galleryExit.clone().add(X(0,1.6,0)),1.2,3),await _t(2.6),n.nav.open("galleryExit"),this.cine(!1);for(let c of r)n.interactions.remove(c);this.objective("Follow the golden trail",re.gate,{route:[26,30],height:1}),e.look(null),e.walk([it(26),it(27),it(28),it(29),it(30),it(31)],{lead:{wait:6,resume:3.6}}),await ls(()=>n.player.position.z<-166.6)}async desert(){let n=this.G,{monkey:e,audio:t}=n;n.nav.open("galleryExit"),t.music("mus_desert",.75),t.ambience("amb_desert",1);let i={route:[30,37],height:.45,ground:!0};this.objective("Follow the golden trail across the sand",X(re.digSpot.x,0,re.digSpot.z+1),i),await e.walk([it(31)],{lead:{wait:7,resume:4}}),e.face(it(33)),await e.gesture("look_around"),await e.walk([it(32),it(33)],{lead:{wait:7,resume:4}}),this.objective("The trail has vanished beneath the dunes\u2026",null),n.trail.show(!1),await e.gesture("look_around"),await _t(1.4),this.motes(X(it(34).x,Ni(it(34).x,it(34).z)+.1,it(34).z),"rise",25),t.play("sparkle",{position:it(34),volume:.5}),e.face(it(34)),await e.gesture("point"),this.motes(null),this.objective("There \u2014 follow the glimmer",X(re.digSpot.x,0,re.digSpot.z+1),{...i,route:[33,37]}),await e.walk([it(34),it(35),it(36),it(37)],{lead:{wait:7,resume:4},run:!1});let s=n.areas.desert.mound,r=this.pearlSpot.clone();n.trail.show(!1),this.trailTarget=null,this.motes(r,"sink",50),t.play("trail_loop",{position:r,volume:.5}),await e.walk([X(re.digSpot.x+.45,0,re.digSpot.z+.15)],{run:!0}),this.motes(null),e.face(r),e.look(r),this.objective("He has found something\u2026",X(re.digSpot.x-.3,0,re.digSpot.z+1.9),{height:.3}),await this.near(re.digSpot,3.6),this.look(r,1.5,3),e.loop("dig");let a=!0;(async()=>{for(;a;)t.playVariant("dig_",3,{position:r,volume:.7}),await _t(.45)})(),await _t(2.5),this.objective("Help him brush away the sand",s,{height:.2}),await this.pick({object:s,kind:"hold",holdTime:1.6,label:"Brush away the sand",range:3.2}),this.objective("",null),a=!1,e.play(e.restClip()),this.pearl.visible=!0,this.pearl.position.copy(r).add(X(0,-.05,0)),await Tt(1.6,o=>{s.scale.set(1+o*.4,.32*(1-o)+.01,1+o*.4),this.pearl.position.y=r.y-.05+.05*o,this.pearl.material.emissiveIntensity=.4*o}),s.visible=!1,t.play("sparkle",{position:r,volume:.7})}async finale(){let n=this.G,{monkey:e,genie:t,audio:i,player:s}=n,r=n.areas.desert;i.music("mus_desert",.6),i.ambience("amb_desert",.8);let a=this.pearlSpot.clone();this.pearl.visible=!0,this.cine(!0,a),e.face(a),e.look(a),await _t(1),await e.gesture("reach_touch"),this.musicLock=!0,i.music(null),i.play("transform_swell",{position:a,volume:1}),e.gesture("surprised");let o=a.clone().add(X(0,.45,0));this.motes(o,"swirl",40),this.jewel.visible=!0,this.jewel.position.copy(o),this.jewel.rotation.set(.12,.8,0),this.jewel.scale.setScalar(1),Hn(this.jewelModel,0),this.finaleLight.off=!1,this.finaleLight.position.copy(o).add(X(0,.6,.5)),await Tt(n.settings.reduced?3:9,u=>{this.pearl.position.lerpVectors(a,o,ui(u*2)),this.pearl.material.emissiveIntensity=.4+Math.sin(u*Math.PI)*1.2,Hn(this.jewelModel,Ft((u-.1)/.85)),this.jewel.rotation.y=.8*(1-ui(u)),this.finaleLight.intensity=1+Math.sin(u*Math.PI)*6}),await Tt(1.2,u=>{this.pearl.scale.setScalar(Math.max(.001,1-u)),this.finaleLight.intensity=Math.sin(u*Math.PI)*9+1}),this.pearl.visible=!1,this.motes(null),i.play("finale_bell",{position:o,volume:.6}),await e.gesture("excited"),this.objective("",null),await Tt(1.4,u=>{this.jewel.position.lerpVectors(o,this.stageTop.clone().add(X(0,.18,0)),ui(u)),this.jewel.rotation.x=.12+u*.1,this.finaleLight.position.copy(this.jewel.position).add(X(0,.8,.6))}),e.walk([X(re.stage.x+.75,0,re.stage.z+.55)]).then(()=>e.face(this.stageTop)),this.look(this.stageTop.clone().add(X(0,.6,0)),1.4,3),await _t(1.8);let l=r.lamp.position.clone().add(X(0,.2,0));if(this.motes(l,"swirl",50),i.play("growth_creak",{position:l,volume:.5}),e.look(l),this.lampGlow=n.world.slot({position:l.clone().add(X(0,.2,.15)),color:"#ffc272",intensity:0,distance:4.5,priority:2.5}),await Tt(1.8,u=>{this.lampGlow.intensity=6*u}),this.look(l.clone().add(X(0,1.6,0)),1.2,4),Tt(3,u=>{this.lampGlow.intensity=6*(1-u)}).then(()=>n.world.removeSlot(this.lampGlow)),await t.appear(l.clone().add(X(.1,0,0)),l),this.motes(null),t.face(s.head(new P)),await this.say("finale1","welcome"),await this.say("finale2"),t.face(this.stageTop),await this.say("finale3","present"),this.look(this.stageTop.clone().add(X(0,1.8,-.9)),1,4),t.gesture("raise_hand"),await this.say("finale4"),i.music("mus_finale",.9,2),i.play("growth_creak",{position:this.stageTop,volume:.7}),i.play("transform_swell",{position:this.stageTop,volume:.8}),this.sculpture.group.visible=!0,this.motes(this.stageTop,"rise",40),!n.xr.session){let u=s.position.clone(),d=u.clone().sub(this.stageTop).setY(0);if(d.length()<7){let f=this.stageTop.clone().add(d.normalize().multiplyScalar(7.5));f.y=0,Tt(5,p=>{let v=u.x+(f.x-u.x)*p,g=u.z+(f.z-u.z)*p;s.rig.position.set(v,n.nav.ground(v,g),g),s.groundY=s.rig.position.y},r0)}}e.look(this.stageTop.clone().add(X(0,2,-.9))),await Tt(n.settings.reduced?5:16,u=>{this.sculpture.grow(u),this.finaleLight.intensity=3+u*4},u=>u),this.motes(null),t.face(s.head(new P)),await this.say("finale5"),await this.say("finale6","bow");let c=this.stageTop.clone().add(X(0,.55,0));i.play("finale_bell",{position:c,volume:.7}),await Tt(2.5,u=>{this.jewel.position.lerpVectors(this.stageTop.clone().add(X(0,.18,0)),c,ui(u)),this.jewel.rotation.x=.22*(1-u)+.05*u,this.finaleLight.position.copy(this.jewel.position).add(X(0,.7,.8))}),this.cine(!1),e.look(null);let h=!0;Eh(u=>(h&&(this.jewel.rotation.y+=u*.35),this.jewel.position.y=c.y+Math.sin(Vi.time)*.02,!1)),n.ui.subtitle("",""),this.titleCard.visible=!0,this.titleCard.lookAt(s.head(new P)),Tt(3,u=>{this.titleCard.material.opacity=u,this.showShaft.material.uniforms.strength.value=.14*u}),this.objective(`${ya.name} \xB7 Kavya Potluri`,null),n.ui.toast("Select the jewel to hold it. Explore as long as you like.",6),n.interactions.add({object:this.jewel,proxy:.25,label:`Hold ${ya.name}`,range:3.5,onSelect:async u=>{h=!1,await this.inspector.open(this.jewel,ya,{size:.26,ptr:u}),h=!0}}),this.musicLock=!1,await _t(9),t.vanish(l),n.autopilot.on?(await _t(14),this.start("welcome")):(n.xr.session?n.ui.toast("Thank you for visiting. Press B / Y for the menu.",8):(document.exitPointerLock?.(),document.getElementById("ending").showModal()),await ls(()=>!1))}},_0=new P,Ph=new P,Cb=class{constructor(n){this.G=n,this.on=!1,this.t=0,this.act=null}start(){this.on=!0,this.G.input.keySource=!0}stop(){this.on=!1,this.release(),this.G.input.keys.delete("KeyW")}release(){let n=this.G.input.primary;n.down&&(n.down=!1,n.released=!0),this.act=null}target(){let n=this.G.interactions.items.filter(e=>e.objective&&!e.done&&this.G.interactions.isOn(e)&&e.object.visible!==!1);return n[n.length-1]||null}update(n){if(this.dt=n,!this.on)return;let{director:e,player:t,input:i,monkey:s}=this.G;if(i.keys.delete("KeyW"),this.t+=n,e.inspector.active){this.inspectT=(this.inspectT||0)+n,this.inspectT>4.5&&(this.inspectT=0,e.inspector.close());return}if(e.cinematic||t.mount){this.act?.kind!=="drag"&&this.release();return}let r=t.head(_0);if(t.attention?.story)return;let a=this.target();if(a){let h=(a.proxyMesh||a.object).getWorldPosition(Ph);if(r.distanceTo(h)>Math.min(2.4,a.range-.3))return this.walkTo(h,.9);t.lookAt(this.act?.aim||h,4,.5);let u=this.G.interactions.hover?.it===a;if(this.act&&this.act.it===a||(this.release(),this.act={it:a,t:0,kind:a.kind}),this.act.t+=n,this.act.t<.9)return;let d=i.primary;if(a.kind==="press")u&&!d.down&&this.act.t>1.1&&(d.down=!0,d.pressed=!0,_t(.09).then(()=>{d.down=!1,d.released=!0}),this.act.t=-.6);else if(a.kind==="hold")(u||d.down)&&(d.down||(d.down=!0,d.pressed=!0));else if(a.kind==="drag"&&a.autopath){let f=a.autopath();if(this.act.u=this.act.u??0,!d.down&&u&&(d.down=!0,d.pressed=!0,this.act.u=0),d.down){this.act.u=Math.min(1,this.act.u+n*.28);let p=Math.min(f.length-1,Math.floor(this.act.u*(f.length-1)));this.act.aim=f[p],t.lookAt(f[p],12,.3)}}return}this.act&&this.release();let o=s.position,l=Math.hypot(o.x-r.x,o.z-r.z);if(s.mount&&!this.G.guide?.riding){t.lookAt(Ph.copy(o).setY(o.y+.4),2.5,.4);return}if(s.moving||this.G.guide?.flying||l>4){let h=this.behind(o,2.4);return this.walkTo(h,.4)}let c=e.trailTarget;if(c){let h=c.isObject3D?c.getWorldPosition(Ph):c;if(Math.hypot(h.x-r.x,h.z-r.z)>.7)return this.walkTo(h,.6)}t.lookAt(Ph.copy(o).setY(o.y+.5),2,.4)}behind(n,e){let t=0,i=0,s=1e9;for(let l=0;l<Xn.length-1;l++){let[c,h]=Xn[l],[u,d]=Xn[l+1],f=u-c,p=d-h,v=f*f+p*p,g=Math.max(0,Math.min(1,((n.x-c)*f+(n.z-h)*p)/v)),m=Math.hypot(c+f*g-n.x,h+p*g-n.z);m<s&&(s=m,t=l,i=g)}let r=t,a=i,o=e;for(;o>0;){let[l,c]=Xn[r],[h,u]=Xn[r+1],d=Math.hypot(h-l,u-c),f=a*d;if(f>=o||r===0){let p=Math.max(0,f-o)/d;return{x:l+(h-l)*p,z:c+(u-c)*p}}o-=f,r--,a=1}return n}walkTo(n,e){let{player:t,input:i}=this.G,s=t.head(_0),r=n.x-s.x,a=n.z-s.z;if(Math.hypot(r,a)<e)return;let o=((Math.atan2(-r,-a)-t.yaw+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,l=this.dt||.016;t.yaw+=Math.max(-1.1*l,Math.min(1.1*l,o*Math.min(1,l*2.4))),t.pitch+=(-.06-t.pitch)*Math.min(1,l*1.6),t.attention=null,Math.abs(o)<.7&&i.keys.add("KeyW")}},je=n=>document.getElementById(n),Us="./",dr=new URLSearchParams(location.search),uf=null;try{uf=window.localStorage}catch{}var ht={music:.7,sfx:.9,voice:!1,subtitles:!0,sensitivity:1,reduced:matchMedia("(prefers-reduced-motion: reduce)").matches,smoothLocomotion:!0,vignette:!0,seated:!1,quality:/OculusBrowser|Quest|Pico/i.test(navigator.userAgent)?"low":"high"};try{Object.assign(ht,JSON.parse(uf?.getItem("souk-game-settings-v2")||"{}"))}catch{}var Lh=()=>{try{uf?.setItem("souk-game-settings-v2",JSON.stringify(ht))}catch{}};dr.has("quality")&&(ht.quality=dr.get("quality"));var ol=je("world"),It=new uh({canvas:ol,antialias:!0,powerPreference:"high-performance"});It.outputColorSpace=xt,It.toneMapping=4,It.toneMappingExposure=1,It.shadowMap.enabled=ht.quality!=="low",It.shadowMap.type=1;var df=()=>Math.min(devicePixelRatio,+dr.get("dpr")||(ht.quality==="high"?2:ht.quality==="medium"?1.5:1));It.setPixelRatio(df()),It.setSize(innerWidth,innerHeight);var cn=new za,mi=new ii(68,innerWidth/innerHeight,.1,900),mr=ht.quality==="low"?null:new ZM(It,cn,mi,!1),ff=new sb,Ht=new UM(ol),Bt=new FM(mi,ff);cn.add(Bt.rig);var hi=new BM(It,Bt,ff);It.xr.setFramebufferScaleFactor(ht.quality==="high"?1.3:ht.quality==="medium"?1.1:1),hi.attach(cn);var us=new VM,pf=new WM(ht.quality==="low"?170:320);cn.add(pf.points);var li=new XM(Us);li.musicVol=ht.music,li.sfxVol=ht.sfx,li.voice=ht.voice;var Ct=new YM;Ct.subsOn=ht.subtitles,cn.add(Ct.panel,Ct.menu);var hs=new Ue(new Ks(.06,.6,48,1),new dt({uniforms:{strength:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float strength; varying vec2 vP; void main(){ float r = length(vP); float a = smoothstep(0.22 - strength * 0.12, 0.42 - strength * 0.1, r) * strength; gl_FragColor = vec4(0.03,0.02,0.01, a); }"}));hs.position.z=-.25,hs.renderOrder=2e3,hs.frustumCulled=!1,hs.visible=!1,mi.add(hs);var M0=new P;us.onHoverSound=(n,e)=>li.play("ui_hover",{volume:e.xr?.35:.25});var Qo={id:"mouse",ray:new xn,primary:!0,down:!1,pressed:!1,released:!1},b0=new ta;Bt.onStep=n=>{if(!$i||Bt.mount)return;let e=n.z<-168;li.playVariant(e?"step_sand_":"step_stone_",4,{volume:e?.32:.22,rate:.92+Math.random()*.16})};var Ns,il,Nh,gi,mf=!1,$i=!1,qn=!1,ni={renderer:It,scene:cn,camera:mi,player:Bt,nav:ff,input:Ht,xr:hi,interactions:us,trail:pf,audio:li,ui:Ct,settings:ht,saveSettings:Lh,base:Us,clock:Vi,sched:Fi};async function Rb(){let n=(w,A)=>{je("load-status").textContent=w,A!=null&&(je("load-bar").style.width=`${Math.round(A*100)}%`)},e=0,t=w=>n(w,++e/20);n("Polishing the brass\u2026",.02),await li.init();let i=await HM(It,Us,()=>t("Laying the stone\u2026"),ht.quality),s=new ph,r=async(w,A=!1)=>{try{let I=await s.loadAsync(`${Us}assets/models/${w}.glb`);return t(`Waking ${w.replace(/-.*/,"")}\u2026`),I}catch(I){if(!A)throw I;return t("\u2026"),null}},a=async w=>await r(`${w}-anim`,!0)||r(w),[o,l,c,h,u,d]=await Promise.all([r("lamp"),r("floral-ear-cuff"),Promise.resolve(null),r("artisan"),a("monkey"),a("genie")]),f=u&&(ht.quality,void 0),p=u?.animations?.length>2?u:null,v=u,g=d?.animations?.length>2?d:null,m=d,_=[];try{let w=await fetch(`${Us}assets/models/collection/manifest.json`);if(w.ok){let A=await w.json();_=(await Promise.all(A.map(async I=>{if(I.kind)return I;try{let C=await s.loadAsync(`${Us}assets/models/collection/${I.file}`);return{...I,scene:C.scene}}catch{return null}}))).filter(Boolean)}}catch{}let b={};await Promise.all(qd.map(async w=>{try{b[w]=(await s.loadAsync(`${Us}assets/models/props/${w}.glb`)).scene}catch{}})),e0(b,i),t("Arranging the gallery\u2026");let x=w=>(w.scene.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),w.scene),M={M:i,lamp:x(o),jewel:x(l),jewelSmall:null,artisan:x(h),collection:_,props:b};ni.M=i,ni.A=M,Ns=new nb(It,cn,i,ht.quality),ni.world=Ns;let S=new A0(i,null),E=[rb,ab,lb,cb,hb,gb,xb,yb],y=["the entrance hall","the souk","the carpet courtyard","the lower town","the carpet dock","the workshop","the gallery","the desert"];for(let w=0;w<E.length;w++)n(`Building ${y[w]}\u2026`,(e+w)/20),await new Promise(A=>setTimeout(A,0)),Ns.add(E[w](S,i,M,ni));ni.areas=Object.fromEntries(Ns.areas),Wm(ni.areas.desert,{M:i,renderer:It,scene:cn,quality:ht.quality,G:ni}),il=new _b(p||v,!!p,ni),Nh=new bb(g||m,!!g,ni),cn.add(il.root,Nh.root),ni.monkey=il,ni.genie=Nh,gi=new Eb(ni),ni.director=gi,ni.autopilot=new Cb(ni);for(let w of Ns.areas.values())w.group.visible=!0;n("Lighting the lanterns\u2026",.96),Bt.teleport(re.spawn.x,re.spawn.z,0),Ns.update(.016,0,Bt.head(new P),!1);try{await It.compileAsync(cn,mi)}catch{It.compile(cn,mi)}Ns.current=null,mf=!0}function P0(){$i=!1,Ht.enabled=!1,je("title").hidden=!1,je("hud").hidden=!0;let n=gi.saved();je("btn-continue").hidden=!n,n&&(je("continue-label").textContent=`\xB7 ${Wn.find(e=>e.id===n)?.title||""}`),gi.attract(),je("veil").classList.add("clear")}async function Fs(n){li.unlock(),je("title").hidden=!0,je("hud").hidden=!1,document.querySelectorAll("dialog[open]").forEach(e=>e.close()),$i=!0,qn=!1,Ht.enabled=!0,hi.session||ol.requestPointerLock?.()?.catch?.(()=>{}),je("veil").classList.remove("clear"),await new Promise(e=>setTimeout(e,650)),gi.start(n).catch(e=>console.error(e)),await new Promise(e=>setTimeout(e,120)),je("veil").classList.add("clear")}function kh(n=!qn){$i&&!hi.session&&(qn=n,n?(Ht.reset(),je("pause").showModal(),je("btn-pause-vr").hidden=!hi.supported):(je("pause").close(),ol.requestPointerLock?.()?.catch?.(()=>{})))}Ht.onPause=()=>{document.querySelector("dialog[open]")||kh(!0)};function Pb(){if(Ct.menu.visible){Ct.menu.visible=!1,us.remove(Ct.menuIt);return}Ct.drawMenu([{label:"Resume",act:()=>{}},{label:"Skip this scene",act:()=>gi.skipScene()},{label:"Restart chapter",act:()=>gi.start(gi.chapter)},{label:"Next chapter",act:()=>gi.start(gi.nextChapter())},{label:"Exit VR",act:()=>hi.session?.end()}]);let n=mi.getWorldDirection(new P);Ct.menuYaw=Math.atan2(n.x,n.z),Ct.menu.visible=!0,Ct.menuIt=us.add({object:Ct.menu,label:"Select",highlight:!1,range:4,onSelect:(e,t)=>{let i=Ct.menuPick(t.uv);i&&(Ct.menu.visible=!1,us.remove(Ct.menuIt),i.act())}})}hi.onMenu=Pb;var Uh=!1;hi.onStart=()=>{hi.session.addEventListener("visibilitychange",()=>{Uh=hi.session?.visibilityState!=="visible",Uh&&li.stopSpeech()}),je("hud").hidden=!0,Ct.panel.visible=!0,Ct.snapPanel=!0,Bt.camera.position.set(0,0,0),Bt.camera.rotation.set(0,0,0),Bt.rig.rotation.y=Bt.yaw,Bt.rig.position.y=Bt.groundY,It.xr.setFoveation(ht.quality==="low"?.8:.4),ht.quality!=="high"&&(It.shadowMap.enabled=!1),$i||Fs(gi.saved()||"welcome")},hi.onEnd=()=>{Uh=!1,It.shadowMap.enabled=ht.quality!=="low",je("hud").hidden=!$i,Bt.camera.position.set(0,Bt.mount?1.12:1.62,0),Bt.yaw=Bt.rig.rotation.y,Ct.menu.visible=!1};var Fh=0,el=0,Ai={acc:0,frames:0,scale:1};function Ib(n){if(hi.session||nl||(Ai.acc+=n,Ai.frames++,Ai.acc<2))return;let e=Ai.frames/Ai.acc;Ai.acc=0,Ai.frames=0;let t=Ai.scale;e<48?Ai.scale=Math.max(.6,Ai.scale-.1):e>58&&Ai.scale<1&&(Ai.scale=Math.min(1,Ai.scale+.05)),Ai.scale!==t&&(It.setPixelRatio(df()*Ai.scale),mr?.resize())}var nl=!1,tl=0,Db=new te;function hf(n,e=!0){if(nl&&n!==null)return;n===null&&(n=tl);let t=n/1e3,i=Fh?Math.min(.05,t-Fh):.016;if(Fh=t,!mf)return;let s=!!hi.session;el=(Ht.skip||hi.skipHeld)&&gi.cinematic&&$i&&!qn?el+i:0,Vi.scale=el>.6?8:1,Ct.skip(gi.cinematic&&$i&&!s,Math.min(1,el/.6));let r=(qn||Uh?0:i)*Vi.scale;Vi.rdt=i,Vi.dt=r,Vi.real=t,Vi.time+=r,el>.6&&li.stopSpeech(),$i&&!qn&&ni.autopilot.update(i),$i&&!qn&&(s?(hi.update(i,ht,us),Bt.updateXR(i,hi.stick,ht)):Bt.updateDesktop(i,Ht,ht));let a=Bt.head(new P),o=[];$i&&!qn&&(s?o=hi.pointers():(b0.setFromCamera(Ht.centred||Ht.locked?new te(0,0):Ht.mouse,mi),Qo.ray.copy(b0.ray),Qo.down=Ht.primary.down,Qo.pressed=Ht.primary.pressed,Qo.released=Ht.primary.released,o=[Qo])),us.update(i,o,a);let l=us.hover;if(l&&$i){let p=l.it;Ct.prompt(typeof p.label=="function"?p.label():p.label,p.kind),Ct.hold(us.holdProgress)}else Ct.prompt(""),Ct.hold(0);Ht.holdingTarget=!!l&&Ht.primary.down;for(let p of o)p.pressed=!1,p.released=!1;if(Fi.update(r),gi.update(r,i),il.update(r,a),Nh.update(r,a),Ns.update(i,Vi.time,a,s),pf.update(r,Vi.time),Ct.updatePanel(i,mi,s),!s){let p=gi.cinematic?56:68;Math.abs(mi.fov-p)>.05&&(mi.fov+=(p-mi.fov)*Math.min(1,i*.9),mi.updateProjectionMatrix())}let c=i>0?Bt.rig.position.distanceTo(M0)/i:0;M0.copy(Bt.rig.position);let h=s&&ht.vignette?Math.min(.85,c*.32):0;hs.material.uniforms.strength.value+=(h-hs.material.uniforms.strength.value)*Math.min(1,i*6),hs.visible=s&&hs.material.uniforms.strength.value>.01,li.listener(mi),Ht.endFrame();let u=s?It.xr.getCamera():null,d=u?.cameras?.[0]?.viewport?.w||It.getDrawingBufferSize(Db).y,f=u?.cameras?.[0]?2*Math.atan(1/u.cameras[0].projectionMatrix.elements[5]):Ps.degToRad(mi.fov);Yn.pointScale.value=d/(2*Math.tan(f/2)),e&&(Ib(i),mr&&!s?mr.render(Vi.time):It.render(cn,mi))}function Lb(){mi.aspect=innerWidth/innerHeight,mi.updateProjectionMatrix(),It.setPixelRatio(df()*Ai.scale),It.setSize(innerWidth,innerHeight),mr?.resize()}addEventListener("resize",Lb);for(let n of["pointerdown","keydown","touchstart"])addEventListener(n,()=>li.unlock(),{passive:!0});function Nb(){je("btn-begin").onclick=()=>{gi.clearSave(),Fs("welcome")},je("btn-continue").onclick=()=>Fs(gi.saved());let n=()=>{let a=je("chapter-list");a.replaceChildren(),Wn.forEach((o,l)=>{let c=document.createElement("li"),h=document.createElement("button");h.innerHTML=`<b>${String(l+1).padStart(2,"0")}</b><span>${o.title}</span><small>${o.blurb}</small>`,h.onclick=()=>{je("chapters").close(),je("pause").close(),Fs(o.id)},c.append(h),a.append(c)}),je("chapters").showModal()};je("btn-chapters").onclick=n,je("btn-pause-chapters").onclick=n;let e=()=>je("settings").showModal();je("btn-settings").onclick=e,je("btn-pause-settings").onclick=e,je("btn-resume").onclick=()=>kh(!1),je("btn-title").onclick=()=>{je("pause").close(),qn=!1,document.exitPointerLock?.(),P0()},je("btn-stay").onclick=()=>{je("ending").close(),ol.requestPointerLock?.()?.catch?.(()=>{})},je("btn-again").onclick=()=>{je("ending").close(),gi.clearSave(),Fs("welcome")},document.querySelectorAll("[data-close]").forEach(a=>a.onclick=()=>a.closest("dialog").close()),je("pause").addEventListener("cancel",a=>{a.preventDefault(),kh(!1)});let t=(a,o,l)=>{let c=je(a);c.value=ht[o],c.oninput=()=>{ht[o]=Number(c.value),l?.(),Lh()}},i=(a,o,l)=>{let c=je(a);c.checked=!!ht[o],c.onchange=()=>{ht[o]=c.checked,l?.(),Lh()}};t("set-music","music",()=>{li.musicVol=ht.music,li.applyVolumes()}),t("set-sfx","sfx",()=>{li.sfxVol=ht.sfx,li.applyVolumes()}),t("set-sens","sensitivity"),i("set-voice","voice",()=>{li.voice=ht.voice,ht.voice&&li.say("test","Welcome, traveller.")}),i("set-subs","subtitles",()=>{Ct.subsOn=ht.subtitles}),i("set-reduced","reduced"),i("set-smooth","smoothLocomotion"),i("set-vignette","vignette"),i("set-seated","seated");let s=je("set-quality");s.value=ht.quality,s.onchange=()=>{ht.quality=s.value,Lh(),Ct.toast("Reload to apply the new detail level.")};let r=async()=>{li.unlock();try{await hi.enter()}catch(a){Ct.toast("Could not start VR on this device."),console.warn(a)}};je("btn-vr").onclick=r,je("btn-pause-vr").onclick=()=>{je("pause").close(),qn=!1,r()},Ct.hold(0),Ht.touch&&(document.body.classList.add("touch"),Ht.wantsLock=!1)}async function Ub(){try{await Rb(),Nb();let n=await hi.check();je("btn-vr").disabled=!n,je("btn-vr").textContent=n?"Enter VR":isSecureContext?"VR headset not detected":"VR needs HTTPS",je("btn-vr").classList.toggle("available",n),It.setAnimationLoop(hf),je("loading").hidden=!0,dr.has("autoplay")?(Ht.wantsLock=!1,Fs(dr.get("chapter")||"welcome"),ni.autopilot.start()):dr.has("chapter")?Fs(dr.get("chapter")):P0()}catch(n){console.error(n),je("load-status").textContent="The world could not load. Try again, or use a browser with WebGL 2.",je("retry").hidden=!1,je("retry").onclick=()=>location.reload()}}Ub(),window.__souk={G:ni,get ready(){return mf},get playing(){return $i},start:Fs,pause:kh,async advance(n,e=30,t={}){nl=!0,tl||=performance.now();let i=Math.round(n*e);for(let s=0;s<i;s++){tl+=1e3/e,t.skip&&(Ht.skip=!0),hf(null,s===i-1);for(let r=0;r<8;r++)await Promise.resolve()}return Ht.skip=!1,Vi.time},async follow(n,e=()=>il.position,t=2.4,i=30){nl=!0,tl||=performance.now();let s=Math.round(n*i);for(let r=0;r<s;r++){let a=e(),o=Bt.position,l=Math.hypot(a.x-o.x,a.z-o.z);Bt.yaw=Math.atan2(-(a.x-o.x),-(a.z-o.z)),Bt.attention=null,l>t?Ht.keys.add("KeyW"):Ht.keys.delete("KeyW"),tl+=1e3/i,hf(null,r===s-1);for(let c=0;c<8;c++)await Promise.resolve()}return Ht.keys.delete("KeyW"),Vi.time},live(){nl=!1,Fh=0},autoplay(n=!0){n?ni.autopilot.start():ni.autopilot.stop()}};

import{R as $,r as O,g as Le,j as h,N as Be}from"./index-b0b36e9b.js";import{n as M}from"./emotion-styled.browser.esm-3b12d93b.js";function pe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var re;(function(e){e.event="event",e.props="prop"})(re||(re={}));function Z(){}function ae(e){return!!(e||"").match(/\d/)}function ee(e){return e==null}function Me(e){return typeof e=="number"&&isNaN(e)}function me(e){return ee(e)||Me(e)||typeof e=="number"&&!isFinite(e)}function he(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Ue(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Xe(e,t,r){var n=Ue(r),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}function ze(e){var t=O.useRef(e);t.current=e;var r=O.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function se(e,t){t===void 0&&(t=!0);var r=e[0]==="-",n=r&&t;e=e.replace("-","");var a=e.split("."),i=a[0],u=a[1]||"";return{beforeDecimal:i,afterDecimal:u,hasNegation:r,addNegation:n}}function ke(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}function xe(e,t,r){for(var n="",a=r?"0":"",i=0;i<=t-1;i++)n+=e[i]||a;return n}function fe(e,t){return Array(t+1).join(e)}function be(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return r+a;a=a.replace(".","");var u=1+i,g=a.length;return u<0?a="0."+fe("0",Math.abs(u))+a:u>=g?a=a+fe("0",u-g):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function le(e,t,r){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||r)&&t,a=se(e),i=a.beforeDecimal,u=a.afterDecimal,g=a.hasNegation,x=parseFloat("0."+(u||"0")),f=u.length<=t?"0."+u:x.toFixed(t),d=f.split("."),v=i.split("").reverse().reduce(function(S,N,V){return S.length>V?(Number(S[0])+Number(N)).toString()+S.substring(1,S.length):N+S},d[0]),p=xe(d[1]||"",t,r),b=g?"-":"",l=n?".":"";return""+b+v+l+p}function J(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function Ae(e,t){for(var r=0,n=0,a=e.length,i=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[i-1-n]&&i-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:i-n}}}function He(e,t,r){return Math.min(Math.max(e,t),r)}function oe(e){return Math.max(e.selectionStart,e.selectionEnd)}function qe(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function We(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Ge(e,t,r,n,a,i){var u=Ae(r,e),g=u.from,x=u.to;if(g.end-g.start===1&&g.end===x.end&&x.end===n)return n;var f=a.findIndex(function(q){return q}),d=e.slice(0,f);!t&&!r.startsWith(d)&&(r=d+r,n=n+d.length);for(var v=r.length,p=e.length,b={},l=new Array(v),S=0;S<v;S++){l[S]=-1;for(var N=0,V=p;N<V;N++)if(r[S]===e[N]&&b[N]!==!0){l[S]=N,b[N]=!0;break}}for(var y=n;y<v&&(l[y]===-1||!i(r[y]));)y++;var C=y===v||l[y]===-1?p:l[y];for(y=n-1;y>0&&l[y]===-1;)y--;var B=y===-1||l[y]===-1?0:l[y]+1;return B>C?C:n-B<C-n?B:C}function ce(e,t,r,n){var a=e.length;if(t=He(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function Ze(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(ae(e[r])||ae(e[r-1]));return t}function Se(e,t,r,n,a,i){i===void 0&&(i=Z);var u=ze(function(l,S){var N,V;return me(l)?(V="",N=""):typeof l=="number"||S?(V=typeof l=="number"?be(l):l,N=n(V)):(V=a(l,void 0),N=n(V)),{formattedValue:N,numAsString:V}}),g=O.useState(function(){return u(ee(e)?t:e,r)}),x=g[0],f=g[1],d=function(l,S){l.formattedValue!==x.formattedValue&&f({formattedValue:l.formattedValue,numAsString:l.value}),i(l,S)},v=e,p=r;ee(e)&&(v=x.numAsString,p=!0);var b=u(v,p);return O.useMemo(function(){f(b)},[b.formattedValue]),[x,d]}function Ke(e){return e.replace(/[^0-9]/g,"")}function Qe(e){return e}function Ye(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,u=e.format;u===void 0&&(u=Qe);var g=e.removeFormatting;g===void 0&&(g=Ke);var x=e.defaultValue,f=e.valueIsNumericString,d=e.onValueChange,v=e.isAllowed,p=e.onChange;p===void 0&&(p=Z);var b=e.onKeyDown;b===void 0&&(b=Z);var l=e.onMouseUp;l===void 0&&(l=Z);var S=e.onFocus;S===void 0&&(S=Z);var N=e.onBlur;N===void 0&&(N=Z);var V=e.value,y=e.getCaretBoundary;y===void 0&&(y=Ze);var C=e.isValidInputCharacter;C===void 0&&(C=ae);var B=pe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),q=Se(V,x,!!f,u,g,d),K=q[0],A=K.formattedValue,W=K.numAsString,G=q[1],X=O.useRef({formattedValue:A,numAsString:W}),Q=function(o,s){X.current={formattedValue:o.formattedValue,numAsString:o.value},G(o,s)},_=O.useState(!1),m=_[0],w=_[1],F=O.useRef(null),R=O.useRef({setCaretTimeout:null,focusTimeout:null});O.useEffect(function(){return w(!0),function(){clearTimeout(R.current.setCaretTimeout),clearTimeout(R.current.focusTimeout)}},[]);var z=u,E=function(o,s){var c=parseFloat(s);return{formattedValue:o,value:s,floatValue:isNaN(c)?void 0:c}},U=function(o,s,c){o.selectionStart===0&&o.selectionEnd===o.value.length||(J(o,s),R.current.setCaretTimeout=setTimeout(function(){o.value===c&&o.selectionStart!==o.selectionEnd&&J(o,s)},0))},L=function(o,s,c){return ce(o,s,y(o),c)},k=function(o,s,c){var D=y(s),P=Ge(s,A,o,c,D,C);return P=ce(s,P,D),P},H=function(o){var s=o.formattedValue;s===void 0&&(s="");var c=o.input,D=o.setCaretPosition;D===void 0&&(D=!0);var P=o.source,T=o.event,j=o.numAsString,I=o.caretPos;if(c){if(I===void 0&&D){var te=o.inputValue||c.value,ie=oe(c);c.value=s,I=k(te,s,ie)}c.value=s,D&&I!==void 0&&U(c,I,s)}s!==A&&Q(E(s,j),{event:T,source:P})};O.useEffect(function(){var o=X.current,s=o.formattedValue,c=o.numAsString;A!==s&&(A!==W||s!==c)&&Q(E(A,W),{event:void 0,source:re.props})},[A,W]);var De=F.current?oe(F.current):void 0,Pe=typeof window<"u"?O.useLayoutEffect:O.useEffect;Pe(function(){var o=F.current;if(A!==X.current.formattedValue&&o){var s=k(X.current.formattedValue,A,De);o.value=A,U(o,s,A)}},[A]);var Re=function(o,s,c){var D=Ae(A,o),P=Object.assign(Object.assign({},D),{lastValue:A}),T=g(o,P),j=z(T);if(T=g(j,void 0),v&&!v(E(j,T))){var I=s.target,te=oe(I),ie=k(o,A,te);return I.value=A,U(I,ie,A),!1}return H({formattedValue:j,numAsString:T,inputValue:o,event:s,source:c,setCaretPosition:!0,input:s.target}),!0},Ve=function(o){var s=o.target,c=s.value,D=Re(c,o,re.event);D&&p(o)},je=function(o){var s=o.target,c=o.key,D=s.selectionStart,P=s.selectionEnd,T=s.value;T===void 0&&(T="");var j;if(c==="ArrowLeft"||c==="Backspace"?j=Math.max(D-1,0):c==="ArrowRight"?j=Math.min(D+1,T.length):c==="Delete"&&(j=D),j===void 0||D!==P){b(o);return}var I=j;if(c==="ArrowLeft"||c==="ArrowRight"){var te=c==="ArrowLeft"?"left":"right";I=L(T,j,te),I!==j&&o.preventDefault()}else c==="Delete"&&!C(T[j])?I=L(T,j,"right"):c==="Backspace"&&!C(T[j])&&(I=L(T,j,"left"));I!==j&&U(s,I,T),o.isUnitTestRun&&U(s,I,T),b(o)},Ce=function(o){var s=o.target,c=s.selectionStart,D=s.selectionEnd,P=s.value;if(P===void 0&&(P=""),c===D){var T=L(P,c);T!==c&&U(s,T,P)}l(o)},Oe=function(o){o.persist&&o.persist();var s=o.target;F.current=s,R.current.focusTimeout=setTimeout(function(){var c=s.selectionStart,D=s.selectionEnd,P=s.value;P===void 0&&(P="");var T=L(P,c);T!==c&&!(c===0&&D===P.length)&&U(s,T,P),S(o)},0)},Ee=function(o){F.current=null,clearTimeout(R.current.focusTimeout),clearTimeout(R.current.setCaretTimeout),N(o)},Ie=m&&qe()?"numeric":void 0,ue=Object.assign({inputMode:Ie},B,{type:t,value:A,onChange:Ve,onKeyDown:je,onMouseUp:Ce,onFocus:Oe,onBlur:Ee});if(r==="text")return a?$.createElement($.Fragment,null,a(A,B)||null):$.createElement("span",Object.assign({},B,{ref:i}),A);if(n){var Fe=n;return $.createElement(Fe,Object.assign({},ue,{ref:i}))}return $.createElement("input",Object.assign({},ue,{ref:i}))}function de(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;a===void 0&&(a="");var i=t.suffix;i===void 0&&(i="");var u=t.allowNegative,g=t.thousandsGroupStyle;if(g===void 0&&(g="thousand"),e===""||e==="-")return e;var x=ne(t),f=x.thousandSeparator,d=x.decimalSeparator,v=r!==0&&e.indexOf(".")!==-1||r&&n,p=se(e,u),b=p.beforeDecimal,l=p.afterDecimal,S=p.addNegation;return r!==void 0&&(l=xe(l,r,!!n)),f&&(b=Xe(b,f,g)),a&&(b=a+b),i&&(l=l+i),S&&(b="-"+b),e=b+(v&&d||"")+l,e}function ne(e){var t=e.decimalSeparator;t===void 0&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return r===!0&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function Je(e,t){e===void 0&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&t&&(e="-"+e),e}function _e(e,t){return new RegExp("(^-)|[0-9]|"+he(e),t?"g":void 0)}function $e(e,t,r){return e===""?!0:!(t!=null&&t.match(/\d/))&&!(r!=null&&r.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function et(e,t,r){var n;t===void 0&&(t=We(e));var a=r.allowNegative,i=r.prefix;i===void 0&&(i="");var u=r.suffix;u===void 0&&(u="");var g=r.decimalScale,x=t.from,f=t.to,d=f.start,v=f.end,p=ne(r),b=p.allowedDecimalSeparators,l=p.decimalSeparator,S=e[v]===l;if(ae(e)&&(e===i||e===u)&&t.lastValue==="")return e;if(v-d===1&&b.indexOf(e[d])!==-1){var N=g===0?"":l;e=e.substring(0,d)+N+e.substring(d+1,e.length)}var V=function(z,E,U){var L=!1,k=!1;i.startsWith("-")?L=!1:z.startsWith("--")?(L=!1,k=!0):u.startsWith("-")&&z.length===u.length?L=!1:z[0]==="-"&&(L=!0);var H=L?1:0;return k&&(H=2),H&&(z=z.substring(H),E-=H,U-=H),{value:z,start:E,end:U,hasNegation:L}},y=V(e,d,v),C=y.hasNegation;n=y,e=n.value,d=n.start,v=n.end;var B=V(t.lastValue,x.start,x.end),q=B.start,K=B.end,A=B.value,W=e.substring(d,v);e.length&&A.length&&(q>A.length-u.length||K<i.length)&&!(W&&u.startsWith(W))&&(e=A);var G=0;e.startsWith(i)?G+=i.length:d<i.length&&(G=d),e=e.substring(G),v-=G;var X=e.length,Q=e.length-u.length;e.endsWith(u)?X=Q:(v>Q||v>e.length-u.length)&&(X=v),e=e.substring(0,X),e=Je(C?"-"+e:e,a),e=(e.match(_e(l,!0))||[]).join("");var _=e.indexOf(l);e=e.replace(new RegExp(he(l),"g"),function(z,E){return E===_?".":""});var m=se(e,a),w=m.beforeDecimal,F=m.afterDecimal,R=m.addNegation;return f.end-f.start<x.end-x.start&&w===""&&S&&!parseFloat(F)&&(e=R?"-":""),e}function tt(e,t){var r=t.prefix;r===void 0&&(r="");var n=t.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,r.length+(i?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}function rt(e){var t=ne(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),r===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+r+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function at(e){e=rt(e);var t=e.decimalSeparator;t===void 0&&(t="."),e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,n=e.allowNegative,a=e.allowLeadingZeros,i=e.onKeyDown;i===void 0&&(i=Z);var u=e.onBlur;u===void 0&&(u=Z);var g=e.thousandSeparator,x=e.decimalScale,f=e.fixedDecimalScale,d=e.prefix;d===void 0&&(d="");var v=e.defaultValue,p=e.value,b=e.valueIsNumericString,l=e.onValueChange,S=pe(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),N=function(m){return de(m,e)},V=function(m,w){return et(m,w,e)},y=ee(p)?v:p,C=b??$e(y,d,r);ee(p)?ee(v)||(C=b||typeof v=="number"):C=b||typeof p=="number";var B=function(m){return me(m)?m:(typeof m=="number"&&(m=be(m)),C&&typeof x=="number"?le(m,x,!!f):m)},q=Se(B(p),B(v),!!C,N,V,l),K=q[0],A=K.numAsString,W=K.formattedValue,G=q[1],X=function(m){var w=m.target,F=m.key,R=w.selectionStart,z=w.selectionEnd,E=w.value;if(E===void 0&&(E=""),R!==z){i(m);return}F==="Backspace"&&E[0]==="-"&&R===d.length+1&&n&&J(w,1);var U=ne(e),L=U.decimalSeparator,k=U.allowedDecimalSeparators;F==="Backspace"&&E[R-1]===L&&x&&f&&(J(w,R-1),m.preventDefault()),k!=null&&k.includes(F)&&E[R]===L&&J(w,R+1);var H=g===!0?",":g;F==="Backspace"&&E[R-1]===H&&J(w,R-1),F==="Delete"&&E[R]===H&&J(w,R+1),i(m)},Q=function(m){var w=A;if(w.match(/\d/g)||(w=""),a||(w=ke(w)),f&&x&&(w=le(w,x,f)),w!==A){var F=de(w,e);G({formattedValue:F,value:w,floatValue:parseFloat(w)},{event:m,source:re.event})}u(m)},_=function(m){return m===t?!0:ae(m)};return Object.assign(Object.assign({},S),{value:W,valueIsNumericString:!1,isValidInputCharacter:_,onValueChange:G,format:N,removeFormatting:V,getCaretBoundary:function(m){return tt(m,e)},onKeyDown:X,onBlur:Q})}function ve(e){var t=at(e);return $.createElement(Ye,Object.assign({},t))}var we={exports:{}},nt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",it=nt,ot=it;function ye(){}function Ne(){}Ne.resetWarningCache=ye;var st=function(){function e(n,a,i,u,g,x){if(x!==ot){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ne,resetWarningCache:ye};return r.PropTypes=r,r};we.exports=st();var ut=we.exports;const Y=Le(ut),ft=M.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
  padding: 28px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,lt=M.div`
  margin-top: 88px;
`,ct=M.img`
  position: absolute;
  top: 20px;
  left: 20px;
`,dt=M.img`
  position: absolute;
  top: 220px;
  transform: translate(-50%, -50%);
`,vt=M.img`
  z-index: 2;
  position: absolute;
  top: 218px;
  transform: translate(-50%, -50%);
`,gt=M.img`
  height: 64px;
  border-radius: 50%;
  position: absolute;
  top: 214px;
  transform: translate(-50%, -50%);
`,pt=M.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ge=M.p`
  text-transform: uppercase;
`,mt=M.button`
  width: 196px;
  border: none;
  margin-top: 26px;
  cursor: pointer;
  padding: 14px 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  background: ${e=>e.isFollowed?"#5CD3A8":"#ebd8ff"};
`,ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC",xt="/tweets-test-project/assets/upper-img-b75d874a.png",bt="data:image/png;base64,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",At="/tweets-test-project/assets/ellipse-83769bd9.png";function Te({id:e,tweets:t,avatar:r,followers:n,alt:a,updateButtonState:i,getButtonState:u}){const[g,x]=O.useState(n),f=u(e),d=()=>{i(e,!f);try{fetch(`https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({followers:g+(f?-1:1)})}).then(p=>p.json()).then(p=>x(p.followers))}catch(p){console.log(p)}};return h.jsx(h.Fragment,{children:h.jsxs(ft,{children:[h.jsx("img",{src:xt,alt:"dialog boxes"}),h.jsxs("div",{children:[h.jsx(ct,{src:ht,alt:"GoIT logo"}),h.jsx(dt,{src:bt,alt:"rectangle"}),h.jsx(vt,{src:At,alt:"ellipse"}),h.jsx(gt,{src:r,alt:a})]}),h.jsxs(lt,{children:[h.jsxs(pt,{children:[h.jsxs(ge,{children:[h.jsx(ve,{displayType:"text",value:t,thousandSeparator:","})," ","Tweets"]}),h.jsxs(ge,{children:[h.jsx(ve,{displayType:"text",value:g,thousandSeparator:","})," ","Followers"]})]}),h.jsx(mt,{isFollowed:f,onClick:d,children:f?"Following":"Follow"})]})]})})}Te.propTypes={id:Y.string.isRequired,tweets:Y.number.isRequired,avatar:Y.string.isRequired,followers:Y.number.isRequired,alt:Y.string.isRequired,updateButtonState:Y.func.isRequired,getButtonState:Y.func.isRequired};const St=M(Be)`
  display: flex;
  place-items: center;
  position: absolute;
  top: 132px;
  left: 24px;
  border: none;
  cursor: pointer;
  padding: 14px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  background-color: #888;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  &:hover {
    background-color: #595959;
  }
`,wt=M.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
`,yt=M.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 24px;
`,Nt=M.button`
  width: 196px;
  border: none;
  cursor: pointer;
  padding: 14px 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background-color: #888;

  &:hover {
    background-color: #595959;
  }
`,Tt=M.div`
  width: 196px;
  border: none;
  padding: 14px 0;
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  text-align: center;
`;function Dt(){const[e,t]=O.useState([]),[r,n]=O.useState(1),[a,i]=O.useState(!0);O.useEffect(()=>{try{r===1&&fetch("https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users?page=1&limit=3").then(f=>f.json()).then(f=>{t(f)}),r>1&&fetch(`https://6453dfb6c18adbbdfeaa041f.mockapi.io/tweets/users?page=${r}&limit=3`).then(f=>f.json()).then(f=>{if(f.length===0)return i(!1);t(d=>[...d,...f])})}catch(f){console.log(f)}},[r]);function u(){n(r+1)}const g=(f,d)=>{const v=JSON.parse(localStorage.getItem("buttonStates"))||{};v[f]=d,localStorage.setItem("buttonStates",JSON.stringify(v))},x=f=>(JSON.parse(localStorage.getItem("buttonStates"))||{})[f]||!1;return h.jsxs(h.Fragment,{children:[h.jsxs(St,{to:"/",children:[h.jsx("span",{className:"material-symbols-outlined",children:"arrow_back"}),h.jsx("span",{children:"Back"})]}),h.jsxs(yt,{children:[h.jsx(wt,{children:e&&e.map(({id:f,tweets:d,avatar:v,followers:p,user:b})=>h.jsx("li",{children:h.jsx(Te,{id:f,tweets:d,avatar:v,followers:p,alt:b,updateButtonState:g,getButtonState:x})},f))}),a?h.jsx(Nt,{onClick:u,children:"Load More"}):h.jsx(Tt,{children:h.jsx("p",{children:"Thats it! 🤭"})})]})]})}const Vt=()=>h.jsx(h.Fragment,{children:h.jsx(Dt,{})});export{Vt as default};

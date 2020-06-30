(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{16:function(e,n,r){e.exports=r(26)},26:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),i=r(12),o=r.n(i),c=r(1),u=r(2);function s(){var e=Object(c.a)(["\nbody {\n    *{\n        box-sizing: border-box;\n    }\n    display: flex;\n    flex-direction: column;\n    padding: 50px;\n    font-family:Arial, Helvetica, sans-serif;\n    font-size:100%;\n}\n\nh1 {\n    margin: 0.67em 0;\n    font-size: 2.5em;\n    font-weight: 100;\n    color: #4b0082;\n   \n    }\nh2 {\n    margin: 0.83em 0;\n    font-size: 2em;\n    font-weight: 100;\n    color:#4b0082;\n    }\nh3{\n    margin: 0.83em 0;\n    font-size: 1.5em;\n    font-weight: 100;\n    }\nh4 {\n    margin: 0.5em 0;\n    font-size: 1.25em;\n    font-weight: 700;\n    }\n    \np {\n    font-size: 1em;\n    }\n"]);return s=function(){return e},e}var l=Object(u.a)(s());function m(){var e=Object(c.a)(["\n    width: 25rem;\n    height: 25rem;\n    max-width: 600px;\n    max-height: 600px;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;\n    border: 0.1rem solid #4b0082;\n    border-radius: 0.313rem;\n"]);return m=function(){return e},e}var f=u.b.div(m()),d={dark:"#E0E0E0",light:"#E8E8E8",default:"#F0F0F0"},b={inactive:"#808080",active:"#101010",hover:"#101010",focus:"#5A0740",error:"#CC0000",helperText:"#888888"};function h(){var e=Object(c.a)(["\n    width: 1.5rem;\n    margin: 0.5rem 0.2rem 0 0.2rem;\n    align-self: center;\n"]);return h=function(){return e},e}function v(){var e=Object(c.a)(["\n    margin-bottom: 0.7rem;\n    width: 18rem;\n    height: 4.5rem;\n"]);return v=function(){return e},e}function p(){var e=Object(c.a)(["\n    color: ",";\n    font-size: 0.7rem;\n"]);return p=function(){return e},e}function g(){var e=Object(c.a)(["\n    height: 1.3rem;\n    line-height: 1rem;\n    color: ",";\n    font-size: 0.7rem;\n"]);return g=function(){return e},e}function E(){var e=Object(c.a)(["\n    position: absolute;\n    height: 1.3rem;\n    line-height: 1.25rem;\n    padding-left: 0.5rem;\n    width: 10rem;\n    background-color: transparent;\n    top: ",";\n    font-size: ",";\n    color: ",";\n"]);return E=function(){return e},e}function j(){var e=Object(c.a)(["\n    position: relative;\n    width: 12rem;\n    float: left;\n    flex-grow: 1;\n"]);return j=function(){return e},e}function O(){var e=Object(c.a)(["\n    display: flex;\n    height: 3.6rem;\n    line-height: 1.5rem;\n    width: 18rem;\n    border-radius: 0.313rem 0.313rem 0 0;\n    box-shadow: ",";\n    background-color: ",";\n    :hover {\n        box-shadow: ",";\n    }\n    :focus-within,\n    :focus {\n        box-shadow: inset 0 -0.125rem 0 0 ",";\n    }\n"]);return O=function(){return e},e}function y(){var e=Object(c.a)(["\n    position: absolute;\n    width: 14rem;\n    height: auto;\n    padding: 1.5rem 0 0 0.5rem;\n    line-height: 1.25rem;\n    font-size: 1rem;\n    border: none;\n    background-color: inherit;\n    outline: none;\n    :focus {\n        color: ",";\n    }\n    color: ",";\n"]);return y=function(){return e},e}var w=u.b.input(y(),(function(e){return e.hasError?b.error:b.hover}),(function(e){return e.hasError?b.error:b.active})),x=u.b.div(O(),(function(e){return e.hasError?"inset 0 -0.125rem 0 0 ".concat(b.error):"0"}),(function(e){return e.isActive?d.dark:d.light}),(function(e){return e.hasError?"inset 0 -0.125rem 0 0 ".concat(b.error):"inset 0 -0.0625rem 0 0 ".concat(b.hover)}),(function(e){return e.hasError?b.error:b.focus})),k=u.b.div(j()),F=u.b.label(E(),(function(e){return e.isActive?"5px":"24px"}),(function(e){return e.isActive?"0.8rem":"1rem"}),(function(e){return n=e.hasError,r=e.isActive,t=e.isFocused,n?b.error:t?b.focus:r?b.active:b.inactive;var n,r,t})),A=u.b.div(g(),b.helperText),C=u.b.div(p(),b.error),z=u.b.div(v()),S=u.b.span(h());var B=r(6),V=function(e){var n=e.id,r=e.label,t=e.helperText,i=e.errorMessage,o=e.isActive,c=e.type,u=e.onChange,s=e.onBlur,l=e.onFocus,m=e.value,f=e.isFocused,d=e.leadingIcon;e.trailingIcon;return a.a.createElement(z,null,a.a.createElement(x,{isActive:o,hasError:null!==i},a.a.createElement(S,null,d&&function(e){switch(e){case"email":return a.a.createElement(B.c,{size:24,color:b.inactive});default:return a.a.createElement(B.b,{size:24,color:b.inactive})}}(d)),a.a.createElement(k,{isActive:o,hasError:null!==i},a.a.createElement(w,{id:n,type:c,isActive:o,hasError:null!==i,onChange:u,onBlur:s,onFocus:l,value:m,autoComplete:"off"}),a.a.createElement(F,{htmlFor:n,isActive:o,isFocused:f,hasError:null!==i},r)),a.a.createElement(S,null,i&&a.a.createElement(B.a,{size:"24px",color:b.error}))),t&&null===i&&a.a.createElement(A,null,t," "),null!==i&&a.a.createElement(C,null,i))},H={primary:"#4b0082",primaryHover:"#663399",primaryPressed:"#101010"},P={primary:"#F5F5F5",primaryHover:"#F5F5F5",primaryPressed:"#101010"};function I(){var e=Object(c.a)(["\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0.625rem 0;\n    outline: none;\n    font-size: 1.2rem;\n    background: ",";\n    color: ",";\n    width: 18rem;\n    height: 3rem;\n    border: 0.125rem solid ",";\n    border-radius: 0.313rem;\n    padding: 1.2rem;\n    outline: none;\n    :hover,\n    :active,\n    :focus {\n        transition: all 0.2s;\n        background: ",";\n        color: ",";\n    }\n"]);return I=function(){return e},e}var M=u.b.button(I(),H.primary,P.primary,H.primary,H.primaryHover,P.primaryHover),T=r(4),q=r.n(T),J=r(8),L=r(3);function Z(e,n){var r=n.validations,a=void 0===r?[]:r,i=Object(t.useState)(e),o=Object(L.a)(i,2),c=o[0],u=o[1],s=Object(t.useState)([]),l=Object(L.a)(s,2),m=l[0],f=l[1],d=Object(t.useState)(!1),b=Object(L.a)(d,2),h=b[0],v=b[1],p=Object(t.useState)(!1),g=Object(L.a)(p,2),E=g[0],j=g[1],O=Object(t.useState)(!1),y=Object(L.a)(O,2),w=y[0],x=y[1],k=Object(t.useState)(!1),F=Object(L.a)(k,2),A=F[0],C=F[1],z=0===m.length;var S=Object(t.useCallback)((function(){"string"===typeof e&&u("")}),[e]),B=Object(t.useCallback)((function(e){"checkbox"===e.target.type?u(e.target.checked):u(e.target.value)}),[]),V=Object(t.useCallback)((function(){u(e)}),[e]),H=Object(t.useCallback)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),n=[],e.next=4,Promise.all(a.map(function(){var e=Object(J.a)(q.a.mark((function e(r){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(c);case 2:(t=e.sent)&&n.push(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 4:f(n),"string"===typeof c?j(c.length>0):"boolean"===typeof c&&j(c),x(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v(!0),C(!1),function(){e.apply(this,arguments)}()}),[a,c]),P=Object(t.useCallback)((function(){f([]),C(!0),j(!0)}),[]);return{submit:function(){},value:c,setValue:u,errors:m,setErrors:f,touched:h,setTouched:v,clear:S,reset:V,onChange:B,onBlur:H,onFocus:P,isValid:z,isValidating:w,isActive:E,isFocused:A}}var N=r(9),$=function(e){return 0===e.length?"Email is required.":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?void 0:"Email format is incorrect."},D=function(e){return e.length<1?"Password is required.":e.length<8?"Password must have minimum 8 characters.":void 0},G=function(){var e=Z("",{validations:[$]}),n=Z("",{validations:[D]}),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(t.useState)({}),r=Object(L.a)(n,2),a=r[0],i=r[1],o=Object(t.useState)({}),c=Object(L.a)(o,2),u=c[0],s=c[1];Object(t.useEffect)((function(){f()}));var l=Object.keys(e).map((function(n){return e[n]})).some((function(e){return e.isValidating})),m=!l&&Object.keys(e).map((function(n){return e[n]})).every((function(e){return e.isValid}));function f(){var n={},r={};Object.entries(e).forEach((function(e){var t=Object(L.a)(e,2),a=t[0],i=t[1];n[a]=i.value,r[a]=i.errors})),Object(N.isEqual)(a,n)||i(n),Object(N.isEqual)(u,r)||s(r)}function d(){console.log("submitted values"+JSON.stringify(a,void 0,2))}var b=Object(t.useCallback)((function(){Object.keys(e).map((function(n){return e[n]})).forEach((function(e){return e.reset()}))}),[e]),h=Object(t.useCallback)((function(){Object.keys(e).map((function(n){return e[n]})).forEach((function(e){return e.clear()}))}),[e]);return{values:a,errors:u,isValid:m,isValidating:l,reset:b,clear:h,submit:d}}({emailHook:e,passwordHook:n});return a.a.createElement(f,null,a.a.createElement("h2",null,"Login"),a.a.createElement(V,{type:"email",id:"email",label:"Email",errorMessage:e.errors[0]?e.errors[0]:null,isActive:e.isActive,onChange:e.onChange,onBlur:e.onBlur,onFocus:e.onFocus,isFocused:e.isFocused,value:e.value,leadingIcon:"email"}),a.a.createElement(V,{type:"password",id:"password",label:"Password",errorMessage:n.errors[0]?n.errors[0]:null,isActive:n.isActive,onChange:n.onChange,onBlur:n.onBlur,onFocus:n.onFocus,isFocused:n.isFocused,value:n.value,helperText:"Must be at least 8 characters",leadingIcon:"password"}),a.a.createElement(M,{type:"submit",disabled:!r.isValid,onClick:r.submit},"Login"))},K=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,null),a.a.createElement(G,null),";")};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a8a8a2be.chunk.js.map
(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[9],{634:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},635:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},636:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return function(){var t,a=n(e);if(r()){var l=n(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return o(this,t)}}a.d(t,"a",(function(){return c}))},637:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},646:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center ".concat(e.styleName,"\n         ").concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},707:function(e,t,a){"use strict";a.r(t);var n,r,l,o,c,i,s,m=a(634),u=a(635),d=a(637),p=a(636),b=a(0),f=a.n(b),E=a(336),h=a(641),v=a(86),g=a(630),y=a.n(g),w=a(631),O=a(189),N=a(73),x=a(625),S=a(632),j=a(779),C=a(26),k=function(e){var t=e.onSubmit,a=e.onCancel,n=e.error,r=e.disabled,l=Object(b.useState)(""),o=Object(O.a)(l,2),c=o[0],i=o[1];return f.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)}},f.a.createElement("h3",null,"Reset Password"),f.a.createElement("div",null,"Your Username/Email:",f.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),i(e.target.value)},disabled:r})),f.a.createElement("div",null,f.a.createElement("button",{type:"submit",disabled:r||!c},"Send Reset"),f.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:r},"Cancel")),n&&f.a.createElement("div",null,n))},_=C.a.button(n||(n=Object(x.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]))),P=(Object(j.a)(Object(S.a)(v.g,{name:"resendConfirmCode"}),v.l)((function(e){var t=e.resendConfirmCode,a=(e.resetPassword,e.platformId,Object(b.useState)(!1)),n=Object(O.a)(a,2),r=n[0],l=n[1],o=Object(b.useState)(""),c=Object(O.a)(o,2),i=c[0],s=c[1],m=Object(b.useState)(!1),u=Object(O.a)(m,2),d=(u[0],u[1]),p=Object(b.useState)(""),E=Object(O.a)(p,2),h=E[0],v=E[1],g=Object(b.useState)(!1),N=Object(O.a)(g,2),x=N[0],S=N[1],j=function(){v(""),S(!1),d(!1),l(!1),s("")},C=function(){var e=Object(w.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(""),S(!0),e.prev=2,e.next=5,t({variables:{actionId:"25bfdd78-6a2c-11eb-9439-0242ac130002",executionParameters:'{"userName":"mod" ,"clientId":"7ncu4lmh0m2uf2itlgit5q3q59", "platformId":"us-east-1_IDHU1YQ1O"}',unrestricted:!0}});case 5:s(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),v("Something went wrong. Please try again.");case 11:S(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return r?i?f.a.createElement("p",null,"Your password has been reset. You may now login.",f.a.createElement(_,{type:"button",onClick:j},"Ok.")):f.a.createElement(k,{onSubmit:C,onCancel:j,disabled:x,error:h}):f.a.createElement(_,{type:"button",onClick:function(){return l(!0)}},"Forgot Password?")})),a(709)),L=a(87),I=(C.a.div(r||(r=Object(x.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]))),C.a.div(l||(l=Object(x.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"])))),R=C.a.div(o||(o=Object(x.a)(["\n  text-align: center;\n\n  input {\n    display: block;\n    margin: auto;\n    width: 80%;\n  }\n"]))),T=function(e){e.fieldLabel;var t=e.type,a=e.name,n=e.as,r=e.placeholder,l=e.options,o=void 0===l?[]:l;e.value;return f.a.createElement(R,null,"checkbox"!==t&&f.a.createElement("label",{style:{width:"100%"}},!n&&f.a.createElement(L.b,{className:"form__input",type:t,name:a,placeholder:r}),n&&f.a.createElement(L.b,{name:a,as:n,placeholder:r},0!==o.length&&o.map((function(e,t){return f.a.createElement("option",{key:t,value:e.value},e.label)})))),"checkbox"===t&&f.a.createElement(L.b,{name:a},(function(e){var t=e.field;e.form;return f.a.createElement("label",null,f.a.createElement("input",Object.assign({},t,{type:"checkbox"})),"I agree to our",f.a.createElement("b",null,f.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",f.a.createElement("b",null,f.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),f.a.createElement(I,null,f.a.createElement(L.a,{name:a})))},A=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(P.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return f.a.createElement(f.a.Fragment,null,f.a.createElement(L.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){e.isSubmitting,e.isValid,e.dirty,e.isValidating;return f.a.createElement(L.c,{className:"form"},f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Username",type:"text",name:"username"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"First Name",type:"text",name:"firstName"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Last Name",type:"text",name:"lastName"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Email",type:"email",name:"email"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Password",type:"password",name:"password"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Confirm Password",type:"password",name:"passwordConfirmation"})),f.a.createElement("div",{className:"",style:{marginTop:"0.5em"}},f.a.createElement(T,{name:"terms",type:"checkbox",checked:"false",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),f.a.createElement("div",{className:"form__input"},f.a.createElement("button",{className:"button button--yellow",type:"submit"},"SIGN UP"),r&&f.a.createElement(I,null,r)),f.a.createElement("small",null,"Already have an account?",f.a.createElement("span",{role:"presentation",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},H=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit;return f.a.createElement(f.a.Fragment,null,f.a.createElement(L.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,r=e.isValidating;return f.a.createElement(L.c,{className:"form"},f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"App Name:",type:"text",name:"app"})),f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Description:",as:"textarea",name:"description"})),f.a.createElement("br",null),f.a.createElement("div",{className:""},f.a.createElement(T,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),f.a.createElement("div",{className:"form__input"},f.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:t||!a||r||!n},"MAKE MY APP NOW")))})))},D=a(46),M=a(688),V=a.n(M),Y=a(692),F=a.n(Y),U=D.b().shape({username:D.d().label("username").matches(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/,"Only contains alphanumeric characters, underscore and dot.").required("Please enter desired username."),firstName:D.d().label("firstName").required("Please enter your first name."),lastName:D.d().label("lastName").required("Please enter your last name."),email:D.d().label("email").email("Enter a valid email.").required("Please enter your email."),terms:D.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed"),password:D.d().label("password").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,"at least 1 special char (@,!,#, etc).").min(8,"Must be at least 8 characters.").required("Please enter your desired password."),passwordConfirmation:D.d().oneOf([D.c("password"),"",null],"Passwords must match.").required("Please confirm your password.")}),q=D.b().shape({app:D.d().label("app").required("Please enter desired app name."),description:D.d().label("description").required("Please enter app description."),terms:D.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),W=D.b().shape({cardNumber:D.d().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return V.a.number(e).isValid})).required(),cardName:D.d().label("Name on card").required(),cvc:D.d().label("CVC").min(3).max(4).required(),expiryMonth:D.d().label("Expiry month").min(2).max(2).required(),expiryYear:D.d().label("Expiry year").min(4).max(4).required()}),G=function(){for(var e=[],t=F()(),a=F()().add(10,"y");a.diff(t,"years")>=0;){var n=t.format("YYYY");e.push({value:n,label:n}),t.add(1,"year")}return e},z=function(){for(var e=[],t=F()(),a=F()().add(11,"month");a.diff(t,"months")>=0;){var n=t.format("MM"),r=t.format("MMMM");e.push({value:n,label:r}),t.add(1,"month")}return e},B=function(e){var t=e.initialValues,a=e.validationSchema,n=e.onSubmit,r=e.formError;return f.a.createElement(L.d,{initialValues:t,validationSchema:a,onSubmit:n},(function(e){var t=e.isSubmitting,a=e.isValid,n=e.dirty,l=e.isValidating;return f.a.createElement(L.c,{className:"form"},f.a.createElement("div",{className:"form__input"},f.a.createElement(T,{placeholder:"Name on Card:",type:"text",name:"cardName"})),f.a.createElement("div",{className:"form__input flex-row"},f.a.createElement("div",{className:"flex"},f.a.createElement("div",{className:"form__input",style:{width:"300px"}},f.a.createElement(T,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),f.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},f.a.createElement(T,{placeholder:"CVC:",type:"text",name:"cvc"})))),f.a.createElement("div",{className:"form__input flex-row"},f.a.createElement("div",{className:"flex items-center"},f.a.createElement("div",null,"Expiration Date"),f.a.createElement("div",{className:"",style:{marginLeft:"8px"}},f.a.createElement(T,{placeholder:"Month",as:"select",name:"expiryMonth",options:z()})),f.a.createElement("div",{className:"",style:{marginLeft:"8px"}},f.a.createElement(T,{placeholder:"Year",as:"select",name:"expiryYear",options:G()})))),f.a.createElement("div",{className:"form__input"},f.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:t||!a||l||!n},"Sign Up!")),r&&f.a.createElement(I,null,r))}))},K=a(646),Q=(a(693),new Date),J={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",terms:!1,cardName:"",cardNumber:"",cvc:"",expiryMonth:(Q.getMonth()+1).toString().padStart(2,"0"),expiryYear:Q.getFullYear()},Z=function(e,t){t.userClassId;var a=t.onSuccess,n=Object(N.a)(v.f),r=Object(O.a)(n,1)[0],l=Object(b.useState)(!1),o=Object(O.a)(l,2),c=o[0],i=o[1],s=Object(b.useState)(""),m=Object(O.a)(s,2),u=m[0],d=m[1],p=Object(b.useState)(1),E=Object(O.a)(p,2),g=E[0],x=E[1],S=Object(b.useState)(""),j=Object(O.a)(S,2),C=(j[0],j[1]),k=Object(b.useState)(""),_=Object(O.a)(k,2),P=(_[0],_[1]),L=Object(b.useState)(""),I=Object(O.a)(L,2),R=(I[0],I[1]),T=Object(b.useState)(""),D=Object(O.a)(T,2),M=D[0],V=D[1],Y=Object(b.useState)(""),F=Object(O.a)(Y,2),G=(F[0],F[1]),z=Object(b.useState)(""),Q=Object(O.a)(z,2),Z=Q[0],$=Q[1],X=Object(b.useState)(""),ee=Object(O.a)(X,2),te=ee[0],ae=ee[1],ne=function(){var t=Object(w.a)(y.a.mark((function t(n,l){var o;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=l.setSubmitting,d(""),P(n.firstName),G(n.password),R(n.lastName),V(n.email),n.password===n.passwordConfirmation){t.next=8;break}return t.abrupt("return");case 8:return{app:Z,description:te,creditCardNumber:n.cardNumber,creditCardName:n.cardName,expirationDate:"".concat(n.expiryMonth,"/").concat(n.expiryYear),csv:n.cvc},t.prev=9,t.next=12,r({variables:{userClassId:e.userClassId,name:n.username,firstName:n.firstName,lastName:n.lastName,email:n.email,password:n.password,formValues:JSON.stringify({})}});case 12:i(!0),a&&a(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),d("Error");case 19:o(!1);case 20:case"end":return t.stop()}}),t,null,[[9,16]])})));return function(e,a){return t.apply(this,arguments)}}();if(c)return window.history.pushState({registered:"success"},"Registration Complete","?registered=success"),f.a.createElement(K.a,{styleName:"dialogConfirm",onClose:e.onClose},f.a.createElement("div",{className:"dialog__title"},f.a.createElement("img",{src:"/images/mail.png",alt:"png"})),f.a.createElement("p",{className:"text-center"},f.a.createElement("div",null,f.a.createElement("div",{style:{margin:"1.25em 0",fontSize:"18px"}},"Confirm your email!"),f.a.createElement("p",{style:{margin:"1.25em 0"}},"Please check your email",f.a.createElement("strong",null," ",M," "),"for a message to confirm that it\u2019s really you. Then you can log in."),f.a.createElement("div",null,f.a.createElement(h.HashLink,{onClick:e.onSwitch,className:"button button--rounded button--yellow",to:"/"},"LOGIN")),f.a.createElement("div",null,f.a.createElement(h.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"SEND AGAIN")),f.a.createElement("div",null,f.a.createElement(h.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"CHANGE EMAIL")))));var re=function(e,t){t.setSubmitting;d(""),e.password===e.passwordConfirmation&&(C(e.username),P(e.firstName),R(e.lastName),V(e.email),G(e.password))},le=function(e,t){var a=t.setSubmitting;d(""),$(e.app),ae(e.description),a(!1),x(g+1)},oe=function(){switch(g){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"};default:return!1}};return f.a.createElement(f.a.Fragment,null,f.a.createElement(K.a,{progress:oe().progressWidth,onClose:e.onClose},f.a.createElement("div",{className:"dialog__title"},f.a.createElement("h3",null,oe().enterText)),3===g&&f.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is",f.a.createElement("strong",{className:"teal--text"},"FREE"),".",f.a.createElement("br",null),f.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(g){case 1:return f.a.createElement(A,{onSwitch:e.onSwitch,initialValues:J,validationSchema:U,onSubmit:ne,formError:u});case 2:return f.a.createElement(H,{initialValues:J,validationSchema:q,onSubmit:le,formError:u});case 3:return f.a.createElement(B,{initialValues:J,validationSchema:W,onSubmit:ne,formError:u});default:return f.a.createElement(A,{initialValues:J,validationSchema:U,onSubmit:re,formError:u})}}()))},$=a(191),X=a(780),ee=a(810),te=a(804),ae=a(788),ne=function(e){var t=e.onSubmit,a=e.onCancel,n=e.error,r=e.disabled,l=Object(b.useState)(""),o=Object(O.a)(l,2),c=o[0],i=o[1];return f.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)}},f.a.createElement("h3",null,"Reset Password"),f.a.createElement("div",null,"Your Username/Email:",f.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),i(e.target.value)},disabled:r})),f.a.createElement("div",null,f.a.createElement("button",{type:"submit",disabled:r||!c},"Send Code"),f.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:r},"Cancel")),n&&f.a.createElement("div",null,n))},re=function(e){var t=e.onSubmit,a=e.onCancel,n=e.disabled,r=e.error,l=Object(b.useState)(""),o=Object(O.a)(l,2),c=o[0],i=o[1],s=Object(b.useState)(""),m=Object(O.a)(s,2),u=m[0],d=m[1],p=Object(b.useState)(""),E=Object(O.a)(p,2),h=E[0],v=E[1],g=Object(b.useState)(""),y=Object(O.a)(g,2),w=y[0],N=y[1],x=!c||!u||!h;return f.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(""),c===u?t(c,h):N("New password and confirmation must match.")}},f.a.createElement("h3",null,"Reset Password"),f.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),f.a.createElement("div",null,"New Password:",f.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),i(e.target.value)},disabled:n})),f.a.createElement("div",null,"Confirm Password:",f.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),d(e.target.value)},disabled:n})),f.a.createElement("div",null,"Password Reset Code:",f.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),v(e.target.value)},disabled:n})),f.a.createElement("div",null,f.a.createElement("button",{type:"submit",disabled:n||x},"Change Password"),f.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a()},disabled:n},"Cancel")),r&&f.a.createElement("div",null,r),w&&f.a.createElement("div",null,w))},le=C.a.button(c||(c=Object(x.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]))),oe=Object(j.a)(Object(S.a)(v.b,{name:"getPasswordResetCode"}),Object(S.a)(v.h,{name:"resetPassword"}),v.l)((function(e){var t=e.getPasswordResetCode,a=e.resetPassword,n=e.platformId,r=Object(b.useState)(!1),l=Object(O.a)(r,2),o=l[0],c=l[1],i=Object(b.useState)(""),s=Object(O.a)(i,2),m=s[0],u=s[1],d=Object(b.useState)(!1),p=Object(O.a)(d,2),E=p[0],h=p[1],v=Object(b.useState)(""),g=Object(O.a)(v,2),N=g[0],x=g[1],S=Object(b.useState)(!1),j=Object(O.a)(S,2),C=j[0],k=j[1],_=function(){x(""),k(!1),h(!1),c(!1),u("")},P=function(){var e=Object(w.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),k(!0),e.prev=2,e.next=5,t({variables:{userNameOrEmail:a,stackId:n}});case 5:u(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),x("Something went wrong. Please try again.");case 11:k(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(w.a)(y.a.mark((function e(t,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),k(!0),e.prev=2,e.next=5,a({variables:{userNameOrEmail:m,password:t,code:r,stackId:n}});case 5:h(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),x("Something went wrong. Please try again.");case 11:k(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}();return o?m?m&&!E?f.a.createElement(re,{onSubmit:L,onCancel:_,disabled:C,error:N}):f.a.createElement("p",null,"Your password has been reset. You may now login.",f.a.createElement(le,{type:"button",onClick:_},"Ok.")):f.a.createElement(ne,{onSubmit:P,onCancel:_,disabled:C,error:N}):f.a.createElement(le,{type:"button",onClick:function(){return c(!0)}},"Forgot Password?")})),ce=a(806),ie=a(785),se=a(786),me=Object(X.a)((function(e){var t;return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:(t={backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},Object($.a)(t,e.breakpoints.down("sm"),{width:"90%"}),Object($.a)(t,e.breakpoints.up("md"),{width:"40%"}),Object($.a)(t,e.breakpoints.up("lg"),{width:"30%"}),Object($.a)(t,"height","80%"),Object($.a)(t,"display","flex"),Object($.a)(t,"flexDirection","column"),Object($.a)(t,"justifyContent","space-evenly"),Object($.a)(t,"borderRadius","1rem"),t)}}));function ue(e){e.label;var t=e.children,a=e.open,n=e.onClose,r=me(),l=f.a.useState(a),o=Object(O.a)(l,2),c=o[0],i=o[1];return f.a.createElement(f.a.Fragment,null,c?f.a.createElement(ce.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:c,onClose:function(){i(!1),n()},closeAfterTransition:!0,BackdropComponent:ie.a,BackdropProps:{timeout:500}},f.a.createElement(se.a,{in:a},f.a.createElement("div",{className:r.paper},t))):null)}var de=C.a.div(i||(i=Object(x.a)(["\n  text-align: center;\n  margin-bottom: 0.5rem;\n"]))),pe=C.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n"]))),be=Object(X.a)((function(){return{textField:Object($.a)({fontSize:".8rem",textAlign:"initial",width:"100%",margin:"6px 0",padding:0},"& fieldset",{borderRadius:"32px"}),button:{width:"80%",height:"3.5rem",borderRadius:"2rem"},inputLabel:{textAlign:"center",fontWeight:"bold",fontSize:"1rem",color:"black"}}})),fe=Object(v.l)((function(e){var t=e.loading,a=e.currentUser,n=e.login,r=e.open,l=e.onClose,o=Object(b.useState)(""),c=Object(O.a)(o,2),i=c[0],s=c[1],m=Object(b.useState)(""),u=Object(O.a)(m,2),d=u[0],p=u[1],E=Object(b.useState)(!1),h=Object(O.a)(E,2),v=h[0],g=h[1],N=Object(b.useState)(""),x=Object(O.a)(N,2),S=x[0],j=x[1],C=be();if(t||a)return null;var k=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),e.prev=2,e.next=5,n({username:i,password:d});case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),j(e.t0.message||e.t0.graphQLErrors&&e.t0.graphQLErrors.length&&e.t0.graphQLErrors[0]||S),g(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return f.a.createElement(ue,{open:r,onClose:l},f.a.createElement("div",null,f.a.createElement(pe,null,f.a.createElement("a",{href:"/"},f.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),f.a.createElement(ee.a,{className:C.inputLabel},"Login")),f.a.createElement("form",{onSubmit:k},f.a.createElement(de,null,f.a.createElement("label",{htmlFor:"nostack-username"},f.a.createElement(te.a,{className:C.textField,id:"nostack-username",type:"text",name:"username",label:"Username",disabled:v,value:i,onChange:function(e){return s(e.target.value)},variant:"outlined"}))),f.a.createElement(de,null,f.a.createElement("label",{htmlFor:"nostack-password"},f.a.createElement(te.a,{className:C.textField,id:"nostack-password",label:"Password",type:"password",name:"password",disabled:v,value:d,onChange:function(e){return p(e.target.value)},variant:"outlined"}))),f.a.createElement(de,null,f.a.createElement(ae.a,{className:C.button,type:"submit",disabled:v||!i||!d,variant:"contained",color:"primary"},"Log In")),S&&f.a.createElement(de,null,S)),f.a.createElement(de,null,f.a.createElement(oe,null)))})),Ee=a(102),he=a(192),ve=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modalRegistration:!1,modalLogin:!1,checkbox:!1},e.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),f.a.createElement(E.c,{to:"/",push:!0})},e.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),f.a.createElement(E.c,{to:"/",push:!0})},e.modalHandlerRegistration=function(){e.setState({modalRegistration:!e.state.modalRegistration})},e.modalHandlerLogin=function(){e.setState({modalLogin:!e.state.modalLogin})},e.modalHandlerSwitchForm=function(){e.modalHandlerRegistration(),e.modalHandlerLogin()},e.checkboxHandler=function(){e.setState({checkbox:!e.state.checkbox})},e.handleClick=function(){(0,e.context.logoutUser)()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement("header",{className:"container header flex items-center"},f.a.createElement("div",{className:"header__logo"},f.a.createElement("a",{href:"/"},f.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),this.state.modalRegistration&&f.a.createElement(Z,{platformId:Ee.l,userClassId:Ee.n,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration,open:this.state.modalRegistration}),this.state.modalLogin&&f.a.createElement(fe,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin,open:this.state.modalLogin}),f.a.createElement("nav",{className:"hide-tablet"},f.a.createElement("ul",{className:"flex header__nav"},f.a.createElement("li",null,f.a.createElement(h.HashLink,{to:"/pricing?=initial"}," \xa0 PRICING ")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{to:"/#about-us"}," ABOUT US ")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{to:"/contact"}," CONTACT ")))),console.log("modalRegistration",this.state.modalRegistration),!this.props.noAction&&f.a.createElement("div",{className:"grow-12 text-right hide-tablet"},f.a.createElement(v.d,null,(function(t){var a=t.loading,n=t.currentUser;return a?null:n?f.a.createElement("div",{className:"logout"},f.a.createElement(h.HashLink,{to:"/"},f.a.createElement(v.c,null)),f.a.createElement(E.c,{to:"/staging"})):f.a.createElement(f.a.Fragment,null,f.a.createElement("span",{role:"presentation",onClick:e.modalHandlerLogin},"LOGIN"),f.a.createElement("span",{role:"presentation",onClick:e.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP"))}))),f.a.createElement("div",{className:"show-tablet"},f.a.createElement("div",{role:"presentation",id:"amp-burger",onClick:this.checkboxHandler},f.a.createElement("div",{className:"lines"},f.a.createElement("input",{type:"checkbox",id:"checkbox",className:"checkbox"}),f.a.createElement("div",{className:"lines-icon","data-menu":""},f.a.createElement("div",{className:"icon-left"}),f.a.createElement("div",{className:"icon-right"})),f.a.createElement("div",{className:"mobile-menu__wrapper"},f.a.createElement("ul",null,f.a.createElement("li",null,f.a.createElement(h.HashLink,{to:"/pricing?inital"},"PRICING")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),f.a.createElement("li",null,f.a.createElement(h.HashLink,{onClick:this.checkboxHandler,to:"/contact"},"CONTACT")),!this.props.noAction&&f.a.createElement("li",null,f.a.createElement("span",{role:"presentation",onClick:this.modalHandlerLogin},"LOGIN")),!this.props.noAction&&f.a.createElement("li",null,f.a.createElement("span",{role:"presentation",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),a}(b.Component);ve.contextType=he.a;t.default=ve}}]);
//# sourceMappingURL=9.b4b3149c.chunk.js.map
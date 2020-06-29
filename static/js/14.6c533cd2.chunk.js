(this["webpackJsonpno-stack-base"]=this["webpackJsonpno-stack-base"]||[]).push([[14],{582:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialog__backdrop",onClick:e.onClose}),r.a.createElement("div",{className:"dialog text-center ".concat(e.styleName,"\n         ").concat(e.progress?" dialog__bordered":"","\n         ").concat(e.fullScreen?" dialog__fullscreen":"","\n      ")},r.a.createElement("div",{className:"dialog__close"},r.a.createElement("button",{onClick:e.onClose,type:"button","aria-label":"Close Account Info Modal Box"},"\xd7")),e.progress&&r.a.createElement("div",{className:"dialog__progress",style:{width:e.progress}}),e.children))}},591:function(e,a,t){"use strict";var n=t(570),r=t.n(n),l=t(569),c=t(0),o=t.n(c),s=t(67),i=t(61),m=t(581),u=t(568),d=t(29);function p(){var e=Object(u.a)(["\n  \n  }\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n  font-size: 0.75rem;\n  color: tomato;\n"]);return b=function(){return e},e}function E(){var e=Object(u.a)(["\n  width: 250px;\n\n  padding: 1em 0;\n\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);\n"]);return E=function(){return e},e}d.a.div(E());var h=d.a.div(b()),f=d.a.div(p()),v=t(597),g=t(82),N=function(e){e.fieldLabel;var a=e.type,t=e.name,n=e.as,r=e.placeholder,l=e.options,c=void 0===l?[]:l;e.value;return o.a.createElement(f,null,"checkbox"!==a&&o.a.createElement("label",{style:{width:"100%"}},!n&&o.a.createElement(g.b,{className:"form__input",type:a,name:t,placeholder:r}),n&&o.a.createElement(g.b,{name:t,as:n,placeholder:r},0!==c.length&&c.map((function(e,a){return o.a.createElement("option",{key:a,value:e.value},e.label)})))),"checkbox"===a&&o.a.createElement(g.b,{name:t},(function(e){var a=e.field;e.form;return o.a.createElement("label",null,o.a.createElement("input",Object.assign({},a,{type:"checkbox"})),"I agree to our",o.a.createElement("b",null,o.a.createElement("a",{href:"/terms-and-conditions",target:"_blank"},"\xa0 Terms of Use \xa0")),"and",o.a.createElement("b",null,o.a.createElement("a",{href:"/privacy-policy",target:"_blank"},"\xa0 Privacy Policy \xa0")),"by signing up")})),o.a.createElement(h,null,o.a.createElement(g.a,{name:t})))},w=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError,l=Object(v.a)(e,["initialValues","validationSchema","onSubmit","formError"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){e.isSubmitting,e.isValid,e.dirty,e.isValidating;return o.a.createElement(g.c,{className:"form"},o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Username",type:"text",name:"username"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"First Name",type:"text",name:"firstName"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Last Name",type:"text",name:"lastName"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Email",type:"email",name:"email"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Password",type:"password",name:"password"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Confirm Password",type:"password",name:"passwordConfirmation"})),o.a.createElement("div",{className:"",style:{marginTop:"0.5em"}},o.a.createElement(N,{name:"terms",type:"checkbox",checked:"false",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),o.a.createElement("div",{className:"form__input"},o.a.createElement("button",{className:"button button--yellow",type:"submit"},"SIGN UP"),r&&o.a.createElement(h,null,r)),o.a.createElement("small",null,"Already have an account?",o.a.createElement("a",{href:"#",className:"teal--text",onClick:l.onSwitch},"\xa0Log In")))})))},y=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){var a=e.isSubmitting,t=e.isValid,n=e.dirty,l=e.isValidating;return o.a.createElement(g.c,{className:"form"},o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"App Name:",type:"text",name:"app"})),o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Description:",as:"textarea",name:"description"})),o.a.createElement("br",null),o.a.createElement("div",{className:""},o.a.createElement(N,{name:"terms",type:"checkbox",fieldLabel:"I agree to our Terms of Use and Privacy Policy by signing up"})),o.a.createElement("div",{className:"form__input"},o.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:a||!t||l||!n},"MAKE MY APP NOW"),r&&o.a.createElement(h,null,r)))})))},S=t(45),x=t(598),O=t.n(x),C=t(602),k=t.n(C),_=S.b().shape({username:S.d().label("username").required("Please enter desired username."),firstName:S.d().label("firstName").required("Please enter your first name."),lastName:S.d().label("lastName").required("Please enter your last name."),email:S.d().label("email").email("Enter a valid email.").required("Please enter your email."),terms:S.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed"),password:S.d().label("password").matches(/[a-z]/,"at least one lowercase char").matches(/[A-Z]/,"at least one uppercase char").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"at least 1 number or special char (@,!,#, etc).").min(8,"Must be at least 8 characters.").required("Please enter your desired password."),passwordConfirmation:S.d().oneOf([S.c("password"),"",null],"Passwords must match.").required("Please confirm your password.")}),j=S.b().shape({app:S.d().label("app").required("Please enter desired app name."),description:S.d().label("description").required("Please enter app description."),terms:S.a().label("terms").oneOf([!0],"Must Accept Terms and Conditions").required("Please click agree on terms before you can proceed")}),P=S.b().shape({cardNumber:S.d().label("Card number").max(16).test("test-number","Credit Card number is invalid",(function(e){return O.a.number(e).isValid})).required(),cardName:S.d().label("Name on card").required(),cvc:S.d().label("CVC").min(3).max(4).required(),expiryMonth:S.d().label("Expiry month").min(2).max(2).required(),expiryYear:S.d().label("Expiry year").min(4).max(4).required()}),L=function(){for(var e=[],a=k()(),t=k()().add(10,"y");t.diff(a,"years")>=0;){var n=a.format("YYYY");e.push({value:n,label:n}),a.add(1,"year")}return e},I=function(){for(var e=[],a=k()(),t=k()().add(11,"month");t.diff(a,"months")>=0;){var n=a.format("MM"),r=a.format("MMMM");e.push({value:n,label:r}),a.add(1,"month")}return e},T=function(e){var a=e.initialValues,t=e.validationSchema,n=e.onSubmit,r=e.formError;return o.a.createElement(g.d,{initialValues:a,validationSchema:t,onSubmit:n},(function(e){var a=e.isSubmitting,t=e.isValid,n=e.dirty,l=e.isValidating;return o.a.createElement(g.c,{className:"form"},o.a.createElement("div",{className:"form__input"},o.a.createElement(N,{placeholder:"Name on Card:",type:"text",name:"cardName"})),o.a.createElement("div",{className:"form__input flex-row"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"form__input",style:{width:"300px"}},o.a.createElement(N,{placeholder:"Card Number:",type:"text",name:"cardNumber"})),o.a.createElement("div",{className:"",style:{width:"100px",marginLeft:"8px"}},o.a.createElement(N,{placeholder:"CVC:",type:"text",name:"cvc"})))),o.a.createElement("div",{className:"form__input flex-row"},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",null,"Expiration Date"),o.a.createElement("div",{className:"",style:{marginLeft:"8px"}},o.a.createElement(N,{placeholder:"Month",as:"select",name:"expiryMonth",options:I()})),o.a.createElement("div",{className:"",style:{marginLeft:"8px"}},o.a.createElement(N,{placeholder:"Year",as:"select",name:"expiryYear",options:L()})))),o.a.createElement("div",{className:"form__input"},o.a.createElement("button",{type:"submit",className:"button button--yellow",disabled:a||!t||l||!n},"Sign Up!")),r&&o.a.createElement(h,null,r))}))},A=t(582),H=new Date,R={name:"",username:"",firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",app:"",description:"",terms:!1,cardName:"",cardNumber:"",cvc:"",expiryMonth:(H.getMonth()+1).toString().padStart(2,"0"),expiryYear:H.getFullYear()};a.a=function(e,a){a.userClassId;var t=a.onSuccess,n=Object(s.a)(i.g),u=Object(l.a)(n,1)[0],d=Object(c.useState)(!1),p=Object(l.a)(d,2),b=p[0],E=p[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],g=f[1],N=Object(c.useState)(1),S=Object(l.a)(N,2),x=S[0],O=S[1],C=Object(c.useState)(""),k=Object(l.a)(C,2),L=(k[0],k[1]),I=Object(c.useState)(""),H=Object(l.a)(I,2),M=(H[0],H[1]),V=Object(c.useState)(""),D=Object(l.a)(V,2),U=(D[0],D[1]),Y=Object(c.useState)(""),q=Object(l.a)(Y,2),F=(q[0],q[1]),W=Object(c.useState)(""),G=Object(l.a)(W,2),z=(G[0],G[1]),B=Object(c.useState)(""),K=Object(l.a)(B,2),Q=K[0],J=K[1],Z=Object(c.useState)(""),X=Object(l.a)(Z,2),$=X[0],ee=X[1],ae=function(a,n){var l;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(l=n.setSubmitting,g(""),M(a.firstName),z(a.password),U(a.lastName),F(a.email),a.password===a.passwordConfirmation){c.next=8;break}return c.abrupt("return");case 8:return{app:Q,description:$,creditCardNumber:a.cardNumber,creditCardName:a.cardName,expirationDate:"".concat(a.expiryMonth,"/").concat(a.expiryYear),csv:a.cvc},c.prev=9,c.next=12,r.a.awrap(u({variables:{userClassId:e.userClassId,name:a.username,firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password,formValues:JSON.stringify({})}}));case 12:E(!0),t&&(te(),t()),c.next=21;break;case 16:c.prev=16,c.t0=c.catch(9),console.log(c.t0),console.log(c.t0.graphQLErrors),g("Something went wrong. Please try again.");case 21:l(!1);case 22:case"end":return c.stop()}}),null,null,[[9,16]])};if(b)return window.history.pushState({registered:"success"},"Registration Complete","?registered=success"),o.a.createElement(A.a,{onClose:e.onClose,styleName:"dialogConfirm"},o.a.createElement("div",{className:"dialog__title"},o.a.createElement("img",{src:"/images/mail.png"})),o.a.createElement("p",{className:"text-center"},o.a.createElement("div",null,o.a.createElement("div",{style:{margin:"1.25em 0",fontSize:"18px"}}," ","Confirm your email!"," "),o.a.createElement("p",{style:{margin:"1.25em 0"}},"Please check your email ",o.a.createElement("strong",null," sample@gmail.com ")," for a message to confirm that it\u2019s really you. Then you can log in."),o.a.createElement("div",null,o.a.createElement(m.HashLink,{onClick:e.onSwitch,className:"button button--rounded button--yellow",to:"/"},"LOGIN")),o.a.createElement("div",null,o.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"SEND AGAIN")),o.a.createElement("div",null,o.a.createElement(m.HashLink,{style:{marginTop:"1em"},onClick:e.onClose,className:"button button--rounded",to:"/schedule"},"CHANGE EMAIL")))));var te=function(){O(x+1)},ne=function(e,a){a.setSubmitting;console.log(e),g(""),e.password===e.passwordConfirmation&&(L(e.username),M(e.firstName),U(e.lastName),F(e.email),z(e.password))},re=function(e,a){var t=a.setSubmitting;g(""),J(e.app),ee(e.description),t(!1),te()},le=function(){switch(x){case 1:return{enterText:"ENTER DETAILS",buttonText:"SIGN UP",progressWidth:"33%"};case 2:return{enterText:"ENTER APP DESCRIPTION",buttonText:"MAKE MY APP NOW",progressWidth:"66%"};case 3:return{enterText:"CREDIT CARD DETAILS",buttonText:"MAKE MY APP NOW",progressWidth:"100%"}}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{progress:le().progressWidth,onClose:e.onClose},o.a.createElement("div",{className:"dialog__title"},o.a.createElement("h3",null,le().enterText)),3==x&&o.a.createElement("p",{className:"dialog__text"},"You won\u2019t be charged a thing until you commit to it explicitly. In fact, the initial consultation is"," ",o.a.createElement("strong",{className:"teal--text"},"FREE"),".",o.a.createElement("br",null),o.a.createElement("br",null),"We just need your credit card in advance to cover ourselves."),function(){switch(x){case 1:return o.a.createElement(w,{onSwitch:e.onSwitch,initialValues:R,validationSchema:_,onSubmit:ae,formError:v});case 2:return o.a.createElement(y,{initialValues:R,validationSchema:j,onSubmit:re,formError:v});case 3:return o.a.createElement(T,{initialValues:R,validationSchema:P,onSubmit:ae,formError:v});default:return o.a.createElement(w,{initialValues:R,validationSchema:_,onSubmit:ne,formError:v})}}()))}},592:function(e,a,t){"use strict";var n=t(570),r=t.n(n),l=t(569),c=t(0),o=t.n(c),s=t(582),i=t(61),m=t(568),u=t(577),d=t(576),p=t.n(d),b=t(29),E=function(e){var a=e.onSubmit,t=e.onCancel,n=e.error,r=e.disabled,s=Object(c.useState)(""),i=Object(l.a)(s,2),m=i[0],u=i[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m)}},o.a.createElement("h3",null,"Reset Password"),o.a.createElement("div",null,"Your Username/Email:",o.a.createElement("input",{type:"text",onChange:function(e){e.preventDefault(),u(e.target.value)},disabled:r})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",disabled:r||!m},"Send Code"),o.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t()},disabled:r},"Cancel")),n&&o.a.createElement("div",null,n))},h=function(e){var a=e.onSubmit,t=e.onCancel,n=e.disabled,r=e.error,s=Object(c.useState)(""),i=Object(l.a)(s,2),m=i[0],u=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),b=p[0],E=p[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],g=f[1],N=Object(c.useState)(""),w=Object(l.a)(N,2),y=w[0],S=w[1],x=!m||!b||!v;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(""),m===b?a(m,v):S("New password and confirmation must match.")}},o.a.createElement("h3",null,"Reset Password"),o.a.createElement("p",null,"A password reset code has been sent to your email. Enter the code below."),o.a.createElement("div",null,"New Password:",o.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),u(e.target.value)},disabled:n})),o.a.createElement("div",null,"Confirm Password:",o.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),E(e.target.value)},disabled:n})),o.a.createElement("div",null,"Password Reset Code:",o.a.createElement("input",{type:"password",onChange:function(e){e.preventDefault(),g(e.target.value)},disabled:n})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",disabled:n||x},"Change Password"),o.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t()},disabled:n},"Cancel")),r&&o.a.createElement("div",null,r),y&&o.a.createElement("div",null,y))};function f(){var e=Object(m.a)(["\n  border: none;\n  text-decoration: underline;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n  }\n"]);return f=function(){return e},e}var v=b.a.button(f());p()(Object(u.a)(i.c,{name:"getPasswordResetCode"}),Object(u.a)(i.h,{name:"resetPassword"}),i.l)((function(e){var a=e.getPasswordResetCode,t=e.resetPassword,n=e.platformId,s=Object(c.useState)(!1),i=Object(l.a)(s,2),m=i[0],u=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),b=p[0],f=p[1],g=Object(c.useState)(!1),N=Object(l.a)(g,2),w=N[0],y=N[1],S=Object(c.useState)(""),x=Object(l.a)(S,2),O=x[0],C=x[1],k=Object(c.useState)(!1),_=Object(l.a)(k,2),j=_[0],P=_[1],L=function(){C(""),P(!1),y(!1),u(!1),f("")};return m?b?b&&!w?o.a.createElement(h,{onSubmit:function(e,a){return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return C(""),P(!0),l.prev=2,l.next=5,r.a.awrap(t({variables:{userNameOrEmail:b,password:e,code:a,stackId:n}}));case 5:y(!0),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(2),C("Something went wrong. Please try again.");case 11:P(!1);case 12:case"end":return l.stop()}}),null,null,[[2,8]])},onCancel:L,disabled:j,error:O}):o.a.createElement("p",null,"Your password has been reset. You may now login.",o.a.createElement(v,{type:"button",onClick:L},"Ok.")):o.a.createElement(E,{onSubmit:function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return C(""),P(!0),t.prev=2,t.next=5,r.a.awrap(a({variables:{userNameOrEmail:e,stackId:n}}));case 5:f(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),C("Something went wrong. Please try again.");case 11:P(!1);case 12:case"end":return t.stop()}}),null,null,[[2,8]])},onCancel:L,disabled:j,error:O}):o.a.createElement(v,{type:"button",onClick:function(){return u(!0)}},"Forgot Password?")})),a.a=Object(i.l)((function(e){var a=e.onSwitch,t=e.loading,n=e.currentUser,i=e.login,m=e.onClose,u=Object(c.useState)(""),d=Object(l.a)(u,2),p=d[0],b=d[1],E=Object(c.useState)(""),h=Object(l.a)(E,2),f=h[0],v=h[1],g=Object(c.useState)(!1),N=Object(l.a)(g,2),w=N[0],y=N[1],S=Object(c.useState)(""),x=Object(l.a)(S,2),O=x[0],C=x[1];if(t||n)return null;return o.a.createElement(s.a,{onClose:m},o.a.createElement("div",{className:"dialog__title"},o.a.createElement("img",{src:"http://pivotatestaticassets.com/images/Pivotate Logo.svg",width:"170"}),o.a.createElement("h3",null,"LOGIN")),o.a.createElement("form",{autofill:"false",method:"post",onSubmit:function(e){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),y(!0),a.prev=2,a.next=5,r.a.awrap(i({username:p,password:f}));case 5:a.next=11;break;case 7:a.prev=7,a.t0=a.catch(2),C(a.t0.message||a.t0.graphQLErrors&&a.t0.graphQLErrors.length&&a.t0.graphQLErrors[0]||a.t0),y(!1);case 11:case"end":return a.stop()}}),null,null,[[2,7]])},className:"form"},o.a.createElement("div",{className:"form__input"},o.a.createElement("label",{htmlFor:"nostack-username"},o.a.createElement("input",{id:"nostack-username",type:"text",name:"username",placeholder:"Username",disabled:w,value:p,onChange:function(e){return b(e.target.value)}}))),o.a.createElement("div",{className:"form__input"},o.a.createElement("label",{htmlFor:"nostack-password"},o.a.createElement("input",{id:"nostack-password",type:"password",placeholder:"Password",name:"password",disabled:w,value:f,onChange:function(e){return v(e.target.value)}}))),o.a.createElement("div",{className:"form__input"},o.a.createElement("button",{className:"button button--yellow",type:"submit",disabled:w||!p||!f},"Log In")),O&&o.a.createElement("div",{className:"form__input"}," ","You have entered an invalid username or password"," "),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("small",null,"Dont have an account?",o.a.createElement("a",{href:"#",className:"teal--text",onClick:a},"\xa0 Sign Up"))))}))},596:function(e,a,t){"use strict";t.r(a);var n=t(571),r=t(572),l=t(574),c=t(573),o=t(575),s=t(0),i=t.n(s),m=t(43),u=t(581),d=t(61),p=t(591),b=t(592),E=t(81),h=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).state={modalRegistration:t.props.modalRegistration,modalLogin:!1,checkbox:!1},t.howItWorks=function(){var e=document.getElementById("how-it-works");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(m.c,{to:"/",push:!0})},t.about=function(){var e=document.getElementById("about");return setTimeout((function(){e.scrollIntoView()}),100),i.a.createElement(m.c,{to:"/",push:!0})},t.modalHandlerRegistration=function(){t.setState({modalRegistration:!t.state.modalRegistration})},t.modalHandlerLogin=function(){t.setState({modalLogin:!t.state.modalLogin})},t.modalHandlerSwitchForm=function(){t.modalHandlerRegistration(),t.modalHandlerLogin()},t.checkboxHandler=function(){t.setState({checkbox:!t.state.checkbox})},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("header",{className:"container header flex items-center"},i.a.createElement("div",{className:"header__logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"https://pivotatestaticassets.com/images/Pivotate Logo.svg",alt:"Pivotate Logo",width:"170"}))),this.state.modalRegistration&&i.a.createElement(p.a,{platformId:E.l,userClassId:E.n,onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerRegistration}),this.state.modalLogin&&i.a.createElement(b.a,{onSwitch:this.modalHandlerSwitchForm,onClose:this.modalHandlerLogin}),i.a.createElement("nav",{className:"hide-tablet"},i.a.createElement("ul",{className:"flex header__nav"},i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/pricing?=initial"}," \xa0 PRICING ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/#how-it-works"}," HOW IT WORKS ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/#about-us"}," ABOUT US ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/contact"}," CONTACT ")))),!this.props.noAction&&i.a.createElement("div",{className:"grow-12 text-right hide-tablet"},i.a.createElement(d.e,null,(function(a){var t=a.loading,n=a.currentUser;return t?null:n?i.a.createElement("div",{className:"logout"},i.a.createElement(d.d,null)):i.a.createElement("div",null,i.a.createElement("a",{onClick:e.modalHandlerLogin}," LOGIN "),i.a.createElement("a",{onClick:e.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"SIGN UP"))}))),i.a.createElement("div",{className:"show-tablet"},i.a.createElement("div",{id:"amp-burger",onClick:this.checkboxHandler},i.a.createElement("div",{className:"lines"},i.a.createElement("input",{type:"checkbox",id:"checkbox",className:"checkbox"}),i.a.createElement("div",{className:"lines-icon","data-menu":""},i.a.createElement("div",{className:"icon-left"}),i.a.createElement("div",{className:"icon-right"})),i.a.createElement("div",{className:"mobile-menu__wrapper"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.HashLink,{to:"/pricing?inital"},"PRICING")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#how-it-works"},"HOW IT WORKS"," ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/#about-us"},"ABOUT US"," ")),i.a.createElement("li",null,i.a.createElement(u.HashLink,{onClick:this.checkboxHandler,to:"/contact"},"CONTACT")),!this.props.noAction&&i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:this.modalHandlerLogin}," ","LOGIN"," ")),!this.props.noAction&&i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:this.modalHandlerRegistration,className:"button button--yellow button__sign-up"},"FREE CONSULTATION"))))))))}}]),a}(s.Component);a.default=h}}]);
//# sourceMappingURL=14.6c533cd2.chunk.js.map
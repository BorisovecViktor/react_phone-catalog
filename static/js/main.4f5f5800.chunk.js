(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{34:function(e,t,a){e.exports=a(57)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=a(3),i=a(1),o=a(6),u=a(60),m=a(59),p=a(12),d=a.n(p),_=a(17),E=a(16),f=a(31),b=a(32),v="https://borisovecviktor.github.io/react_phone-catalog/api",g=function(){var e=Object(_.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/products.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(_.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/products/").concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h="phone",O="tablet",y="accessories",j={priceAsc:"priceAsc",priceDesc:"priceDesc",hotPrice:"hotPrice",newModels:"newModels"},k={phone:"phones",tablet:"tablets"},w=function(e){return{type:"SET_PRODUCTS",products:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return t.products;default:return e}},A=function(e){return{type:"SET_PRODUCTS_DETAILS",productsDetails:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS_DETAILS":return t.productsDetails;default:return e}},C=function(e){return{type:"SET_ERROR",errorMessage:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.errorMessage;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_BY":return t.field;default:return e}},M=function(e){return{type:"SET_SORT_BY",field:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.newModels,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_BY":return t.field;default:return e}},I=a(15),B=function(e){return{type:"SET_PER_PAGE",perPage:e}},x={page:1,perPage:10},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return Object(I.a)(Object(I.a)({},e),{},{page:t.page});case"SET_PER_PAGE":return Object(I.a)(Object(I.a)({},e),{},{perPage:t.perPage,page:1});default:return e}},L=a(9),U=function(e){return{type:"REMOVE_FROM_CART",id:e}},G=function(e,t){return{type:"SET_CART_AMOUNT",id:e,amount:t}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return[].concat(Object(L.a)(e),[{id:t.id,quantity:1,product:t.product}]);case"REMOVE_FROM_CART":return e.filter((function(e){return e.id!==t.id}));case"SET_CART_AMOUNT":return e.map((function(e){if(e.id===t.id){var a=t.amount;return a>99&&(a=99),Object(I.a)(Object(I.a)({},e),{},{quantity:0===a?1:a})}return e}));case"CLEAR_CART":return[];default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVOURITE":return[].concat(Object(L.a)(e),[t.product]);case"REMOVE_FAVOURITE":return Object(L.a)(e).filter((function(e){return e.id!==t.product.id}));default:return e}},H=function(e){return{type:"SET_QUERY",field:e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.field.toLowerCase().trim();default:return e}},Q=function(e){return{type:"IS_NAV_BURGER_OPEN",isNavBurgerOpen:e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_NAV_BURGER_OPEN":return!t.isNavBurgerOpen;default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},J=Object(E.combineReducers)({products:S,productsDetails:T,filterBy:P,sortBy:F,errorMessage:R,pagination:D,cart:q,favourites:V,searchQuery:Y,isNavBurgerOpen:W,isLoading:$}),z=function(e){return e.products},X=function(e){return e.productsDetails},K=function(e){return e.cart},Z=function(e){return e.cart.length},ee=function(e){return e.favourites},te=function(e){return e.searchQuery},ae=function(e){return e.isNavBurgerOpen},ne=function(e){return e.isLoading},ce=function(e){return(e.products.filter((function(t){return t.type===e.filterBy}))||[]).length},re=function(e){var t=e.products.filter((function(t){return""!==e.filterBy?t.type===e.filterBy:t}));switch(t=t.filter((function(t){return""!==e.searchQuery?t.name.toLowerCase().includes(e.searchQuery):t})),e.sortBy){case j.priceAsc:t.sort((function(e,t){return e.price-e.discount*e.price/100-(t.price-t.discount*t.price/100)}));break;case j.priceDesc:t.sort((function(e,t){return t.price-t.discount*t.price/100-(e.price-e.discount*e.price/100)}));break;case j.hotPrice:t.sort((function(e,t){return t.discount/100*t.price-e.discount/100*e.price}));break;case j.newModels:t.sort((function(e,t){return e.age-t.age}))}var a=e.pagination.perPage*e.pagination.page-1,n=1===e.pagination.page?e.pagination.page-1:a-e.pagination.perPage+1;return a>t.length&&(a=t.length),t.filter((function(e,t){return t>=n&&t<=a}))},le=function(e){var t=0;return e.cart.forEach((function(e){t+=e.product.price*e.quantity})),t},se=localStorage.getItem("rootState")?JSON.parse(localStorage.getItem("rootState")||""):{},ie=Object(E.createStore)(J,se,Object(f.composeWithDevTools)(Object(E.applyMiddleware)(b.a)));ie.subscribe((function(){localStorage.setItem("rootState",JSON.stringify(ie.getState()))}));var oe=ie,ue=function(){return c.a.createElement(s.b,{to:"/",className:"logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo"}))},me=a(4),pe=a.n(me),de=function(){var e=Object(i.b)(),t=Object(i.c)(ae);return c.a.createElement("button",{className:pe()("nav__burger burger",{"burger--active":t}),onClick:function(){return e(Q(t))}},c.a.createElement("div",{className:"burger__line"}),c.a.createElement("div",{className:"burger__line"}),c.a.createElement("div",{className:"burger__line"}))},_e=function(e){var t=e.links,a=Object(i.b)(),n=Object(i.c)(ae);return c.a.createElement("nav",{className:"nav"},c.a.createElement(de,null),c.a.createElement("ul",{className:pe()("nav__header-list",{"nav__header-list--active":n})},t.map((function(e){var t=e.title,r=e.url;return c.a.createElement("li",{className:"nav__header-item",key:t},c.a.createElement(s.c,{className:"nav__header-link",exact:"/"===r,activeClassName:"nav__header-link--active",to:{pathname:r,search:""},onClick:function(){window.scrollTo(0,0),window.innerWidth<1024&&a(Q(n))}},t))}))))},Ee=function(){var e=(Object(i.c)(ee)||[]).length;return c.a.createElement("div",{className:"header__favorites favorites"},c.a.createElement(s.b,{className:"favorites__link",to:"/favorites"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),0!==e&&c.a.createElement("span",{className:"favorites__counter"},e)))},fe=function(){var e=(Object(i.c)(K)||[]).length;return c.a.createElement("div",{className:"header__cart cart"},c.a.createElement(s.b,{className:"cart__link",to:"/cart"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),0!==e&&c.a.createElement("span",{className:"cart__counter"},e)))},be=a(5);a(45);var ve=function(e){var t=e.currentLocation,a=Object(o.g)(),r=Object(i.b)(),l=Object(o.h)(),s=Object(n.useRef)(null),u=new URLSearchParams(l.search),m=Object(n.useState)(u.get("search")||""),p=Object(be.a)(m,2),d=p[0],_=p[1],E=Object(n.useCallback)(function(e,t){var a;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];a&&clearTimeout(a),a=setTimeout((function(){e.apply(void 0,c)}),t)}}((function(e){e?u.set("query",e):u.delete("query"),r(H(e)),a.push({search:u.toString()})}),300),[]);return Object(n.useEffect)((function(){E(d)}),[d,E]),Object(n.useEffect)((function(){H(""),_("")}),[t]),c.a.createElement("div",{className:"header__search search"},c.a.createElement("input",{className:"search__input",ref:s,value:d,type:"text",onChange:function(e){E(e.currentTarget.value),_(e.currentTarget.value)},placeholder:"Search in ".concat(t,"...")}),d.length>0?c.a.createElement("button",{className:"search__delete-btn",type:"button",onClick:function(){_(""),u.delete("query"),a.push({search:u.toString()}),s&&s.current&&s.current.focus()}}," "):c.a.createElement("span",{className:"search__icon"}))},ge=function(){var e=Object(o.h)(),t=Object(n.useMemo)((function(){return e.pathname.split("/").slice(1)[0]}),[e]);return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__container"},c.a.createElement(ue,null),c.a.createElement(_e,{links:[{title:"home",url:"/"},{title:"phones",url:"/phones"},{title:"tablets",url:"/tablets"},{title:"accessories",url:"/accessories"}]})),c.a.createElement("div",{className:"header__container"},["tablets","phones","accessories"].some((function(e){return e===t}))&&c.a.createElement(ve,{currentLocation:t}),c.a.createElement(Ee,null),c.a.createElement(fe,null)))},Ne=function(e){var t=e.links;return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__footer-list"},t.map((function(e){var t=e.title,a=e.url;return c.a.createElement("li",{className:"nav__footer-item",key:t},c.a.createElement(s.c,{className:"nav__footer-link",exact:!0,activeClassName:"nav__footer-link--active",to:a},t))}))))},he=function(){var e=Object(n.useState)(!1),t=Object(be.a)(e,2),a=t[0],r=t[1],l=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return window.onscroll=function(){window.pageYOffset>0?r(!0):r(!1)},c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer__container"},c.a.createElement(ue,null),c.a.createElement(Ne,{links:[{title:"github",url:"http://www.github.com"},{title:"contacts",url:"/contacts"},{title:"rights",url:"/rights"}]}),c.a.createElement("div",{className:pe()("footer__top-button-container",{"footer__top-button-container--active":a})},c.a.createElement("span",{className:"footer__top-button-text"},"Back to top"),c.a.createElement("div",{className:"footer__top-button-wrap"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("button",{type:"button","aria-label":"Back to top",className:"footer__top-button",onClick:l}))))))},Oe=(a(46),function(e,t){switch(t){case"hotPrice":return Object(L.a)(e).sort((function(e,t){return t.discount/100*t.price-e.discount/100*e.price}));case"newModels":return Object(L.a)(e).sort((function(e,t){return e.age-t.age}));default:return e}}),ye=[{id:0,url:"img/banners/banner_1.jpg",url768:"img/banners/banner_1-768.jpg",url560:"img/banners/banner_1-560.jpg",title:"Iphone 11 PRO",description:"Revolutionary three-camera system - much more features and constant ease of use"},{id:1,url:"img/banners/banner_2.jpg",url768:"img/banners/banner_2-768.jpg",url560:"img/banners/banner_2-560.jpg",title:"Watch Series 5",description:"\u0421reated by the gods for your hand"},{id:2,url:"img/banners/banner_3.jpg",url768:"img/banners/banner_3-768.jpg",url560:"img/banners/banner_3-560.jpg",title:"Choose which iPad suits you",description:"All models are in stock!"},{id:3,url:"img/banners/banner_4.jpg",url768:"img/banners/banner_4-768.jpg",url560:"img/banners/banner_4-560.jpg",title:"AirPods Pro",description:"Active noise reduction for immersive sound"}],je=function(){var e=Object(n.useState)(0),t=Object(be.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1104*-a),s=Object(be.a)(l,2),i=s[0],o=s[1],u=function(){a===ye.length-1?r(0):r(a+1)};return Object(n.useEffect)((function(){var e=setInterval(u,5e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){o(1104*-a)}),[a]),c.a.createElement("div",{className:"slider__wrap"},c.a.createElement("div",{className:"slider__container"},c.a.createElement("button",{type:"button",className:"slider__button slider__button--left",onClick:function(){r(0===a?ye.length-1:a-1)}}),c.a.createElement("ul",{className:"slider__list",style:{transform:"translateX(".concat(i,"px)")}},ye.map((function(e){return c.a.createElement("li",{className:"slider__item",key:e.id},c.a.createElement("picture",null,c.a.createElement("source",{srcSet:e.url560,media:"(max-width: 560px)"}),c.a.createElement("source",{srcSet:e.url768,media:"(max-width: 768px)"}),c.a.createElement("img",{className:"slider__img",src:e.url,alt:"banner"})),c.a.createElement("div",{className:"slider__content"},c.a.createElement("h2",{className:"slider__title"},e.title),c.a.createElement("p",{className:"slider__description"},e.description)))}))),c.a.createElement("button",{type:"button",className:"slider__button slider__button--right",onClick:u})),c.a.createElement("div",{className:"slider__dots"},ye.map((function(e){return c.a.createElement("button",{type:"button","aria-label":"Go to ".concat(e.id+1," slide"),key:e.id,className:pe()("slider__dot",{"slider__dot--active":a===e.id}),onClick:function(){return r(e.id)}})}))))},ke=function(e){var t=e.price,a=e.discount;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product__price"},"$",t-a*t/100),c.a.createElement("div",{className:"product__old-price"},"$",t)):c.a.createElement("div",{className:"product__price"},"$",t))},we=function(e){var t=e.product,a=t.id,r=Object(i.b)(),l=Object(i.c)(K).some((function(e){return e.id===a})),s=Object(n.useState)(l),o=Object(be.a)(s,2),u=o[0],m=o[1],p=Object(n.useState)(l?"Added to cart":"Add to cart"),d=Object(be.a)(p,2),_=d[0],E=d[1];return c.a.createElement("button",{className:pe()("product__button-buy",{"product__button-buy--active":l},{"product__button-buy--remove":u}),type:"button",onClick:function(e){e.stopPropagation(),l?(r(U(a)),E("Add to cart"),m(!1)):(r(function(e,t,a){return{type:"ADD_TO_CART",id:e,quantity:t,product:a}}(a,1,t)),E("Added to cart"))},onMouseEnter:function(){l&&E("Remove")},onMouseLeave:function(){l&&(E("Added to cart"),m(!0))}},_)},Se=function(e){var t=e.product,a=t.id,n=Object(i.b)(),r=Object(i.c)(ee).some((function(e){return e.id===a}));return c.a.createElement("button",{className:pe()("product__button-favorite",{"product__button-favorite--active":r}),type:"button",onClick:function(e){e.stopPropagation(),n(r?function(e){return{type:"REMOVE_FAVOURITE",product:e}}(t):function(e){return{type:"ADD_FAVOURITE",product:e}}(t))}}," ")},Ae=(a(47),function(e){var t=e.product,a=t.id,n=t.name,r=t.type,l=t.imageUrl,s=t.price,i=t.discount,u=t.screen,m=t.capacity,p=t.ram,d=Object(o.g)();return c.a.createElement("article",{className:"product",onClick:function(){d.push("/".concat(k[r],"/").concat(a)),window.scrollTo(0,0)}},c.a.createElement("img",{className:"product__image",src:l,alt:n}),c.a.createElement("h2",{className:"product__title"},n),c.a.createElement("div",{className:"product__prices"},c.a.createElement(ke,{price:s,discount:i})),c.a.createElement("div",{className:"product__divider"}),c.a.createElement("div",{className:"product__spec spec"},c.a.createElement("div",{className:"spec__container"},c.a.createElement("div",{className:"spec__title"},"Screen"),c.a.createElement("div",{className:"spec__info"},u||"4.0 inches")),c.a.createElement("div",{className:"spec__container"},c.a.createElement("div",{className:"spec__title"},"Capacity"),c.a.createElement("div",{className:"spec__info"},m||"1000 MB")),c.a.createElement("div",{className:"spec__container"},c.a.createElement("div",{className:"spec__title"},"RAM"),c.a.createElement("div",{className:"spec__info"},p||"128 MB"))),c.a.createElement("div",{className:"product__actions"},c.a.createElement(we,{product:t}),c.a.createElement(Se,{product:t})))}),Te=function(e){var t=e.title,a=e.products,r=Object(n.useState)(0),l=Object(be.a)(r,2),s=l[0],i=l[1],o=Object(n.useState)(!0),u=Object(be.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),_=Object(be.a)(d,2),E=_[0],f=_[1];return Object(n.useEffect)((function(){p(s>=0),s<=-304*(a.length-4)?f(!0):f(!1)}),[s,a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"\u0441arousel__header-container"},c.a.createElement("h2",{className:"\u0441arousel__header"},t),c.a.createElement("div",{className:"\u0441arousel__controls"},c.a.createElement("button",{type:"button",className:"\u0441arousel__button \u0441arousel__button--left","arial-label":"Go to previous frame",onClick:function(){i(s+304)},disabled:m}),c.a.createElement("button",{type:"button",className:"\u0441arousel__button","arial-label":"Go to next frame",onClick:function(){i(s-304)},disabled:E}))),c.a.createElement("div",{className:"\u0441arousel__container"},c.a.createElement("div",{className:"\u0441arousel__list",style:{transform:"translateX(".concat(s,"px)")}},a.map((function(e){return c.a.createElement(Ae,{product:e,key:e.id})})))))},Ce=function(e,t){switch(t){case"phone":return Object(L.a)(e).filter((function(e){return"phone"===e.type}));case"tablet":return Object(L.a)(e).filter((function(e){return"tablet"===e.type}));case"accessories":return Object(L.a)(e).filter((function(e){return"accessories"===e.type}));default:return e}},Re=function(e){var t=e.title,a=e.link,n=e.count;return c.a.createElement(s.b,{to:"/".concat(a),className:"categories__link",onClick:function(){window.scrollTo(0,0)}},c.a.createElement("div",{className:"categories__photo"},c.a.createElement("img",{src:"./img/categories/".concat(a,".jpg"),className:"categories__img",alt:t})),c.a.createElement("h3",{className:"categories__title"},t),c.a.createElement("span",{className:"categories__count"},"".concat(n," models")))},Pe=function(e){var t=e.products,a=[{title:"Mobile phones",link:"phones",count:Ce(t,h).length},{title:"Tablets",link:"tablets",count:Ce(t,O).length},{title:"Accessories",link:"accessories",count:Ce(t,y).length}];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"categories__header"},"Shop by category"),c.a.createElement("ul",{className:"categories__list"},a.map((function(e){var t=e.title,a=e.link,n=e.count;return c.a.createElement("li",{className:"categories__item",key:t},c.a.createElement(Re,{title:t,link:a,count:n}))}))))},Me=function(){return c.a.createElement("div",{className:"lds-spinner"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},Fe=function(e){var t=e.products,a=Oe(t,j.hotPrice),n=Oe(t,j.newModels),r=Object(i.c)(ne);return c.a.createElement(c.a.Fragment,null,r?c.a.createElement(Me,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"visually-hidden"},"Products Catalog"),c.a.createElement("section",{className:"section slider"},c.a.createElement(je,null)),c.a.createElement("section",{className:"section \u0441arousel"},c.a.createElement(Te,{title:"Hot prices",products:a})),c.a.createElement("section",{className:"section categories"},c.a.createElement(Pe,{products:t})),c.a.createElement("section",{className:"section \u0441arousel"},c.a.createElement(Te,{title:"Brand new models",products:n}))))},Ie=(a(48),a(49),a(50),function(e){var t=e.product,a=e.quantity,r=t.id,l=t.name,s=t.price,o=t.imageUrl,u=Object(i.b)(),m=Object(n.useState)(String(a)),p=Object(be.a)(m,2),d=p[0],_=p[1],E=Object(n.useRef)(null);return Object(n.useEffect)((function(){_(String(a))}),[a]),c.a.createElement("li",{className:"cart__item"},c.a.createElement("button",{className:"cart__item-remove",type:"button",onClick:function(){return u(U(r))}}," "),c.a.createElement("div",null,c.a.createElement("img",{className:"cart__item-image",src:o,alt:l})),c.a.createElement("div",{className:"cart__item-title"},l),c.a.createElement("div",{className:"cart__item-actions"},c.a.createElement("button",{className:pe()("cart__item-button-minus",{"cart__item-button-minus--disabled":1===a}),type:"button",onClick:function(){return u(G(r,a-1))}}," "),c.a.createElement("div",{className:"cart__item-quantity"},c.a.createElement("input",{className:"cart__item-quantity-input",type:"text",maxLength:2,ref:E,value:d,onChange:function(e){Number(e.target.value)?_(e.target.value):_("")},onKeyUp:function(e){var t;"Enter"===e.key&&(u(G(r,+d?+d:1)),null===(t=E.current)||void 0===t||t.blur())},onClick:function(){return _("")},onBlur:function(e){""!==e.target.value?u(G(r,+e.target.value)):_(String(a))}})),c.a.createElement("button",{className:pe()("cart__item-button-plus",{"cart__item-button-plus--disabled":99===a}),type:"button",onClick:function(){return u(G(r,a+1))}}," ")),c.a.createElement("div",{className:"cart__item-price"},"$".concat(s)))}),Be=function(){var e=Object(i.c)(K);return c.a.createElement("ul",null,c.a.createElement(u.a,{tag:"ul",className:"cart__list"},e.map((function(e){return c.a.createElement(m.a,{key:e.id,timeout:300,classNames:"cart-item"},c.a.createElement(Ie,{key:e.id,product:e.product,quantity:e.quantity}))}))))},xe=function(){var e=Object(i.b)(),t=Object(o.g)(),a=Object(i.c)(le),n=Object(i.c)(Z),r=Object(i.c)(ne);return c.a.createElement(c.a.Fragment,null,r?c.a.createElement(Me,null):c.a.createElement("div",{className:"cart-page"},c.a.createElement("button",{type:"button",className:"cart-page__link",onClick:t.goBack},"Back"),c.a.createElement("h1",{className:"cart-page__title"},"Cart"),0!==n?c.a.createElement("div",{className:"cart-page__container"},c.a.createElement(Be,null),c.a.createElement("div",{className:"cart-page__total"},c.a.createElement("div",{className:"cart-page__total-container"},c.a.createElement("div",{className:"cart-page__total-price"},"$",a),c.a.createElement("div",{className:"cart-page__total-text"},"Total for ".concat(n," items")),c.a.createElement("span",{className:"cart-page__total-devider"}),c.a.createElement("button",{className:"cart-page__total-checkout",type:"button",onClick:function(){t.push("/checkout"),e({type:"CLEAR_CART"})}},"Checkout")))):c.a.createElement("div",{className:"cart-page__message"},"Your cart is empty")))},De=(a(51),a(61)),Le=(a(52),function(e){var t=e.page,a=e.total,n=e.perPage,r=Math.ceil(a/n),l=Object(o.g)(),s=Object(o.h)(),i=new URLSearchParams(s.search),u=function(e){i.set("page",String(e)),l.push({search:i.toString()})},m=Object(L.a)(Array.from({length:r},(function(e,t){return t+1})));return c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{type:"button",className:pe()("pagination__button","pagination__button--prev",{"pagination__button--active":1===t}),disabled:1===t,onClick:function(){return u(t-1)}}," "),m.map((function(e){return c.a.createElement("button",{type:"button",className:pe()("pagination__button-page",{"pagination__button-page--active":e===t}),key:Object(De.a)(),onClick:function(){return u(e)},disabled:e===t},e)})),c.a.createElement("button",{type:"button",className:pe()("pagination__button","pagination__button--next",{"pagination__button--active":t===m.length}),onClick:function(){return u(t+1)},disabled:t===m.length}," "))}),Ue={priceAsc:"Price: Low to High",priceDesc:"Price: High to Low",hotPrice:"Hot Prices",newModels:"Newest Arrivals"},Ge=function(e){var t=e.filter,a=Object(i.b)(),r=Object(o.h)(),l=Object(o.g)(),s=Object(i.c)(ce),u=new URLSearchParams(r.search),m=u.get("sortBy")||j.newModels,p=+(u.get("perPage")||s),d=Object(i.c)(re),_=+(u.get("page")||1),E=Object(i.c)(te),f=Object(n.useState)(!1),b=Object(be.a)(f,2),v=b[0],g=b[1],N=Object(n.useState)(!1),h=Object(be.a)(N,2),O=h[0],y=h[1];Object(n.useEffect)((function(){a(M(m))}),[a,m]),Object(n.useEffect)((function(){a(function(e){return{type:"SET_PAGE",page:e}}(_))}),[a,_]),Object(n.useEffect)((function(){a({type:"FILTER_BY",field:t})}),[a,t]),Object(n.useEffect)((function(){a(B(p))}),[a,p]);var k=Object(n.useMemo)((function(){for(var e=s,t=[],a=4;a<e;a*=2)t.push(a);return 0===t.length?[4]:t}),[s]);Object(n.useEffect)((function(){var e=!1;s>0&&_>s/p&&(u.delete("page"),u.delete("perPage"),e=!0),(p>s&&s>0||!k.includes(+p)&&p!==s)&&(u.delete("page"),u.delete("perPage"),e=!0),_!==Math.trunc(_)&&(u.delete("page"),u.delete("perPage"),e=!0),e&&l.push({search:u.toString()})}),[_,p]);var w=function(e){O&&(a(B(e)),y(!1),u.set("perPage",String(e)),u.set("page",String(1)),l.push({search:u.toString()}))};return c.a.createElement("div",{className:"products"},c.a.createElement("div",{className:"products__subtitle"},d&&""===E?"".concat(s," models"):"".concat(d.length," results")),""===E&&0!==d.length&&c.a.createElement("div",{className:"products__filters"},c.a.createElement("div",{className:"products__filter"},c.a.createElement("div",{className:"products__filter-title"},"Sort by"),c.a.createElement("div",{className:pe()("products__dropdown",{"products__dropdown--active":v}),onClick:function(){return g(!v)}},Ue[m]),c.a.createElement("ul",{className:pe()("products__dropdown-list",{"products__dropdown-list--active":v})},Object.values(j).map((function(e){return c.a.createElement("li",{className:pe()("products__dropdown-item",{"products__dropdown-item--active":e===m}),onClick:function(){return function(e){v&&(a(M(e)),g(!1),u.set("sortBy",e),u.set("page",String(1)),l.push({search:u.toString()}))}(e)},key:e},Ue[e])})))),c.a.createElement("div",{className:"products__filter"},c.a.createElement("div",{className:"products__filter-title"},"Items on page"),c.a.createElement("div",{className:pe()("products__dropdown",{"products__dropdown--active":O}),onClick:function(){return y(!O)}},s===d.length?"All":p),c.a.createElement("ul",{className:pe()("products__dropdown-list",{"products__dropdown-list--active":O})},c.a.createElement("li",{className:pe()("products__dropdown-item",{"products__dropdown-item--active":s===d.length}),onClick:function(){return w(s)}},"All"),k.map((function(e){return e!==s&&c.a.createElement("li",{className:pe()("products__dropdown-item",{"products__dropdown-item--active":e===p}),onClick:function(){return w(e)},key:e},e)}))))),c.a.createElement("div",{className:"products__list"},d.map((function(e){return c.a.createElement(Ae,{key:e.id,product:e})}))),s!==d.length&&""===E&&c.a.createElement(Le,{total:s,perPage:p,page:_}),""!==E&&0===d.length&&c.a.createElement("div",{className:"products__search"},c.a.createElement("div",{className:"products__search-title"},"No items were found for",c.a.createElement("span",{className:"products__search-query"},' "'.concat(E,'"'))),c.a.createElement("div",{className:"products__search-subtitle"},"Please try another search.")),""===E&&0===d.length&&c.a.createElement("div",{className:"products__message"},"No items in category"))},qe=function(e){var t=e.label,a=e.link,n=e.isLast;return c.a.createElement("li",{className:"breadcrumbs__item"},c.a.createElement("span",{className:"breadcrumbs__arrow"}),n?c.a.createElement("span",{className:"breadcrumbs__last"},t):c.a.createElement(s.c,{to:a,className:"breadcrumbs__link",activeClassName:"breadcrumbs__link--active"},t))},Ve=function(){var e=Object(o.h)(),t=Object(n.useMemo)((function(){return e.pathname.split("/").slice(1)}),[e]),a=Object(n.useMemo)((function(){return t.reduce((function(e,t){return[].concat(Object(L.a)(e),["".concat(e,"/").concat(t)])}),[])}),[t]);return c.a.createElement("ul",{className:"breadcrumbs"},c.a.createElement(s.c,{to:"/",className:"breadcrumbs__item breadcrumbs__home",activeClassName:"breadcrumb__link--active"}),a.map((function(e,n){return c.a.createElement(qe,{label:t[n],link:e,key:e,isLast:n===a.length-1})})))},He=function(e){var t=e.filter,a=Object(i.c)(te),n=Object(i.c)(ne);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(Me,null):c.a.createElement(c.a.Fragment,null,""===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Ve,null),c.a.createElement("h1",{className:"page__title"},"Mobile phones")),c.a.createElement(Ge,{filter:t})))},Ye=function(e){var t=e.filter,a=Object(i.c)(te),n=Object(i.c)(ne);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(Me,null):c.a.createElement(c.a.Fragment,null,""===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Ve,null),c.a.createElement("h1",{className:"page__title"},"Tablets")),c.a.createElement(Ge,{filter:t})))},Qe=(a(53),function(){var e=Object(o.g)();return c.a.createElement("div",{className:"notfound"},c.a.createElement("div",{className:"notfound__message"},c.a.createElement("h2",{className:"notfound__message-title"},"Oops!"),c.a.createElement("p",{className:"notfound__message-text"},"We can't seem to find the page you're looking for"),c.a.createElement("button",{type:"button",className:"notfound__link",onClick:function(){return e.push("/")}},"Back to Main Page")))}),We=(a(54),function(){var e=Object(o.g)();return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__message"},"Thank you for your order!",c.a.createElement("button",{type:"button",className:"checkout__link",onClick:function(){return e.push("/")}},"Back to Main Page")))}),$e=(a(55),function(){var e=Object(i.c)(ee);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"favourites"},c.a.createElement(Ve,null),c.a.createElement("h1",{className:"favourites__title"},"Favourites"),e.length>0?c.a.createElement(u.a,{className:"favourites__list"},e.map((function(e){return c.a.createElement(m.a,{key:e.id,timeout:300,classNames:"fav-item"},c.a.createElement(Ae,{key:e.id,product:e}))}))):c.a.createElement("div",{className:"favourites__message"},"No favorites yet")))}),Je=function(e){var t=e.filter,a=Object(i.c)(te),n=Object(i.c)(ne);return c.a.createElement(c.a.Fragment,null,n?c.a.createElement(Me,null):c.a.createElement(c.a.Fragment,null,""===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Ve,null),c.a.createElement("h1",{className:"page__title"},"Accessories")),c.a.createElement(Ge,{filter:t})))},ze=(a(56),function(){var e=Object(o.g)();return c.a.createElement("button",{type:"button",className:"product-details__button-back button-back",onClick:function(){return e.goBack()}},"Back")}),Xe=function(e){var t=e.images,a=e.title,r=Object(n.useState)(0),l=Object(be.a)(r,2),s=l[0],i=l[1];return t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"gallery__thumbnails"},t.map((function(e,t){return c.a.createElement("li",{className:pe()("gallery__thumbnail",{"gallery__thumbnail--active":t===s}),key:e},c.a.createElement("a",{href:"#!",className:"gallery__link",onClick:function(e){e.preventDefault(),i(t)}},c.a.createElement("img",{src:e,alt:"".concat(a," - ").concat(t+1),className:"gallery__img"})))}))),c.a.createElement("div",{className:"gallery__photo"},c.a.createElement("img",{className:"gallery__img",src:t[s],alt:a})))},Ke=function(e){var t=e.description,a=e.additionalFeatures;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"product-details__title"},"About"),c.a.createElement("p",{className:"product-details__text"},t),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"product-details__subtitle"},"Features"),c.a.createElement("p",{className:"product-details__text"},a)))},Ze=function(e){var t=e.display,a=e.hardware,n=e.storage,r=e.camera,l=e.battery,s=e.sizeAndWeight;return t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"product-details__title"},"Tech specs"),c.a.createElement("div",{className:"product-details__spec spec spec--text-md"},c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Screen"),c.a.createElement("span",{className:"spec__info"},t.screenSize)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Resolution"),c.a.createElement("span",{className:"spec__info"},t.screenResolution)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Processor"),c.a.createElement("span",{className:"spec__info"},a.cpu)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"RAM"),c.a.createElement("span",{className:"spec__info"},n.ram||"1000 MB")),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Storage"),c.a.createElement("span",{className:"spec__info"},n.flash||"32000MB")),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Camera"),c.a.createElement("span",{className:"spec__info"},r.primary)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Battery"),c.a.createElement("span",{className:"spec__info"},l.type)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Weight"),c.a.createElement("span",{className:"spec__info"},s.weight))))},et=function(e){var t=e.display,a=e.hardware,n=e.storage;return t&&c.a.createElement("div",{className:"product-details__spec spec"},c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Screen"),c.a.createElement("span",{className:"spec__info"},t.screenSize)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Resolution"),c.a.createElement("span",{className:"spec__info"},t.screenResolution)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"Processor"),c.a.createElement("span",{className:"spec__info"},a.cpu)),c.a.createElement("div",{className:"spec__container"},c.a.createElement("span",{className:"spec__title"},"RAM"),c.a.createElement("span",{className:"spec__info"},n.ram||"128 MB")))},tt=function(){var e=Object(i.b)(),t=Object(o.i)().productId,a=Object(i.c)(z),r=Object(i.c)(X),l=Object(i.c)(ne),s=Object(n.useState)(),u=Object(be.a)(s,2),m=u[0],p=u[1];return Object(n.useEffect)((function(){if(a.length){var e=a.find((function(e){return e.id===t}));p(e)}}),[a,t]),Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(_.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(C("")),a({type:"START_LOADING"}),t.prev=2,t.next=5,N(e);case 5:n=t.sent,a(A(n)),a({type:"FINISH_LOADING"}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),a(C(t.t0.message)),a({type:"FINISH_LOADING"});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t]),c.a.createElement(c.a.Fragment,null,l?c.a.createElement(Me,null):m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section product-details"},c.a.createElement(Ve,null),c.a.createElement(ze,null),c.a.createElement("h1",{className:"page__title"},r.name),c.a.createElement("div",{className:"product-details__container"},c.a.createElement("div",{className:"product-details__column"},c.a.createElement("div",{className:"product-details__gallery gallery"},c.a.createElement(Xe,{images:r.images,title:r.name}))),c.a.createElement("div",{className:"product-details__column"},c.a.createElement("div",{className:"product-details__flex-wrap"},c.a.createElement("div",{className:"product-details__wrap"},c.a.createElement("div",{className:"product-details__prices product__prices"},c.a.createElement(ke,{price:m.price,discount:m.discount})),c.a.createElement("div",{className:"product-details__buttons product__actions"},c.a.createElement(we,{product:m}),c.a.createElement(Se,{product:m})),c.a.createElement(et,r)),c.a.createElement("span",{className:"product-details__id"},"ID: ".concat(m.id)))),c.a.createElement("div",{className:"product-details__column"},c.a.createElement(Ke,r)),c.a.createElement("div",{className:"product-details__column"},c.a.createElement(Ze,r)))),c.a.createElement("section",{className:"section \u0441arousel"},c.a.createElement(Te,{products:a,title:"You may also like"}))))},at=function(){var e=Object(i.c)(z),t=Object(i.b)(),a=Object(o.h)();return Object(n.useEffect)((function(){t(function(){var e=Object(_.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C("")),t({type:"START_LOADING"}),e.prev=2,e.next=5,g();case 5:a=e.sent,t(w(a)),t({type:"FINISH_LOADING"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),t(C(e.t0.message)),t({type:"FINISH_LOADING"});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),c.a.createElement("div",{className:"app"},c.a.createElement(ge,null),c.a.createElement("main",null,c.a.createElement("div",{className:"container"},c.a.createElement(u.a,{className:"transition-group"},c.a.createElement(m.a,{key:a.pathname,timeout:{enter:300,exit:300},classNames:"fade"},c.a.createElement("section",{className:"route-section"},c.a.createElement(o.d,{location:a},c.a.createElement(o.a,{from:"/home",to:"/"}),c.a.createElement(o.b,{path:"/",exact:!0},c.a.createElement(Fe,{products:e})),c.a.createElement(o.b,{path:"/:productType/:productId"},c.a.createElement(tt,null)),c.a.createElement(o.b,{path:"/phones"},c.a.createElement(He,{filter:h})),c.a.createElement(o.b,{path:"/tablets"},c.a.createElement(Ye,{filter:O})),c.a.createElement(o.b,{path:"/accessories"},c.a.createElement(Je,{filter:y})),c.a.createElement(o.b,{path:"/cart",component:xe}),c.a.createElement(o.b,{path:"/favorites",component:$e}),c.a.createElement(o.b,{path:"/checkout",component:We}),c.a.createElement(o.b,{component:Qe}))))))),c.a.createElement(he,null))};l.a.render(c.a.createElement(i.a,{store:oe},c.a.createElement(s.a,null,c.a.createElement(at,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4f5f5800.chunk.js.map
(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{102:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(46),i=n.n(a),r=(n(112),n(113),n(114),n(20)),o=n(0),l=function(){return Object(o.jsx)(r.b,{to:"/main",children:Object(o.jsxs)("header",{className:"main",children:[Object(o.jsxs)("div",{className:"header_item",children:[Object(o.jsx)("div",{className:"title",children:"My Pokemons"}),Object(o.jsx)(r.b,{to:"/my",children:Object(o.jsx)("img",{className:"active_icons",src:"https://image.flaticon.com/icons/png/512/287/287221.png"})})]}),Object(o.jsxs)("div",{className:"header_item",children:[Object(o.jsx)("div",{className:"title",children:"All Pokemons"}),Object(o.jsx)(r.b,{to:"/all",children:Object(o.jsx)("img",{className:"active_icons",src:"https://image.flaticon.com/icons/png/512/188/188990.png"})})]}),Object(o.jsxs)("div",{className:"header_item",children:[Object(o.jsx)("div",{className:"title",children:"Login"}),Object(o.jsx)(r.b,{to:"/login",children:Object(o.jsx)("img",{className:"active_icons",src:"https://image.flaticon.com/icons/png/512/362/362003.png"})})]})]})})},j=(n(123),function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"main_footer",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"footer_img",src:"https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg"})}),Object(o.jsx)("div",{className:"social_networks",children:"Social networks"})]})})}),d=(n(124),n(9)),u=n(6),m=n(21),b=n.n(m),O=function(){return b.a.get("https://610bf14866dd8f0017b76ba0.mockapi.io/villages")},h=function(e){return b.a.get(e)},p=function(e){return b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e))},x=function(e){return b.a.get("https://610bf14866dd8f0017b76ba0.mockapi.io/types/".concat(e))},f=function(e,t,n){return b.a.post("https://610bf14866dd8f0017b76ba0.mockapi.io/login",{login:e,password:t,rememberMe:n})},g=function(e){return b.a.post("https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons",{id:e.id,name:e.name,url:e.url})},v=function(){return b.a.get("https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons")},k=function(e){return b.a.delete("https://610bf14866dd8f0017b76ba0.mockapi.io/mypokemons/".concat(e))},_="SET_VILLAGE",N="SET_POKEMONS",y="SET_ALL_COUNT",P="ABOUT_TYPE",C={myVillage:[],myPokes:[],allCount:null,about:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(u.a)(Object(u.a)({},e),{},{myVillage:[t.addedVillages]});case N:return Object(u.a)(Object(u.a)({},e),{},{myPokes:t.addedPokemons});case y:return Object(u.a)(Object(u.a)({},e),{},{allCount:t.countData});case P:return Object(u.a)(Object(u.a)({},e),{},{about:[t.aboutData]});default:return e}},w=Object(d.b)((function(e){return{myVillage:e.MyPokemonsReducer.myVillage,myPokes:e.MyPokemonsReducer.myPokes}}),{setVillageThunkCreator:function(e){return function(t){t({type:_,addedVillages:e})}},setCountThunkCreator:function(e){return function(t){t({type:y,countData:e})}},setAboutThunkCreator:function(e){return function(t){x(e).then((function(e){var n;t((n=e.data,{type:P,aboutData:n}))}))}}})((function(e){var t=e.name,n=e.url,c=e.setVillageThunkCreator,s=e.myPokes,a=e.setCountThunkCreator,i=e.allCount,l=e.id,j=e.setAboutThunkCreator;return a(s.length),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"village ",children:Object(o.jsxs)("div",{className:"village_items",children:[Object(o.jsx)("div",{children:t}),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{to:"info",children:Object(o.jsx)("img",{onClick:function(){j(l)},className:"village_icons",src:n})}),Object(o.jsxs)("div",{children:[" You will have: ",i," pokemons  "]})]}),Object(o.jsx)("button",{className:"select_button",onClick:function(){window.alert("You choose a ".concat(t)),c({name:t,url:n})},children:"Select this type"})]})})})})),E="SET_VILLAGES",S={villages:[]},A=function(){return function(e){O().then((function(t){var n;e((n=t.data,{type:E,village:n}))}))}};A();var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(u.a)(Object(u.a)({},e),{},{villages:t.village});default:return e}},D=Object(d.b)((function(e){return{villages:e.homePageReducer.villages,allCount:e.MyPokemonsReducer.allCount}}),{getVillagesThunkCreator:A})((function(e){Object(c.useEffect)((function(){e.getVillagesThunkCreator()}),[]);var t=e.villages.map((function(t){return Object(o.jsx)(w,{id:t.id,allCount:e.allCount,name:t.name,url:t.url})}));return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"wrapper_title",children:Object(o.jsx)("h1",{children:"Poke types"})}),Object(o.jsx)("div",{className:"villages",children:t})]})})),L=n(7),M=n(30),V=(n(144),Object(d.b)((function(e){return{myPokes:e.MyPokemonsReducer.myPokes}}),{setPokemonThunkCreator:function(e){return function(t){g(e)}}})((function(e){var t=e.name,n=e.url,s=e.setPokemonThunkCreator,a=Object(c.useState)(!1),i=Object(M.a)(a,2),r=i[0],l=i[1],j=function(){s({name:t,url:n}),l(!0)};return Object(o.jsx)("div",{className:"all_pokemons",children:Object(o.jsxs)("div",{className:"all_item",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("img",{src:n}),r?Object(o.jsx)("img",{onClick:j,className:"pokemon_button",src:"https://image.flaticon.com/icons/png/128/361/361998.png"}):Object(o.jsx)("img",{onClick:j,className:"pokemon_button",src:"https://image.flaticon.com/icons/png/128/744/744104.png"})]})})}))),G=n(107),I="SET_POKEMONS_DATA",F="SET_ALL_DATA",Y="SET_NEXT_PAGE",U="SET_PREVIOUS_PAGE",B={pokemons:[],allData:[],nextPage:null,previousPage:null},X=function(e){return{type:Y,page:e}},J=function(e){return{type:U,prevPage:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{pokemons:t.newPokemons});case F:return Object(u.a)(Object(u.a)({},e),{},{allData:[].concat(Object(G.a)(e.allData),[t.allPokemonsData])});case Y:return Object(u.a)(Object(u.a)({},e),{},{nextPage:t.page});case U:return Object(u.a)(Object(u.a)({},e),{},{previousPage:t.prevPage});default:return e}},W=Object(d.b)((function(e){return{pokemons:e.AllPokemonsReducer.pokemons,allData:e.AllPokemonsReducer.allData,nextPage:e.AllPokemonsReducer.nextPage,previousPage:e.AllPokemonsReducer.previousPage}}),{setPokemonsThunkCreator:function(e){return function(t){h(e).then((function(e){var n;t((n=e.data.results,{type:I,newPokemons:n})),t(X(e.data.next)),t(J(e.data.previous))}))}},setAllPokemonsDataThunkCreator:function(e){return function(t){p(e).then((function(e){var n;t((n=e.data,{type:F,allPokemonsData:n}))}))}},setNextPageActionCreator:X,setPrevPageActionCreator:J})((function(e){var t=Object(c.useState)(""),n=Object(M.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),r=Object(M.a)(i,2),l=(r[0],r[1],Object(c.useState)("https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5")),j=Object(M.a)(l,2),d=j[0],u=j[1];Object(c.useEffect)((function(){e.setPokemonsThunkCreator(d),e.pokemons.map((function(t){e.setAllPokemonsDataThunkCreator(t.name)}))}),[d]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"wrapper_title",children:Object(o.jsx)("h1",{children:"All Pokemons"})}),Object(o.jsxs)("div",{className:"all_input_block",children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"all_search_by_name",children:"Search by name:"})}),Object(o.jsx)("input",{className:"all_input",onChange:function(e){a(e.currentTarget.value),console.log(e.currentTarget.value)},value:s})]}),Object(o.jsx)("div",{className:"all_pokemons",children:e.allData.filter((function(e){return e.name.includes(s)})).map((function(e){return Object(o.jsx)(V,{name:e.name,url:e.sprites.front_default})}))}),Object(o.jsxs)("div",{className:"navigation_block",children:[Object(o.jsx)("button",{className:"navigation",onClick:function(){u(e.nextPage)},children:"Get Pokemons"}),Object(o.jsx)("button",{className:"navigation",onClick:function(){u(e.previousPage)},children:"Previous"})]})]})})),q=(n(81),Object(d.b)(null,{})((function(e){var t=e.name,n=e.url,c=e.id;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"my_pokemon",children:[Object(o.jsxs)("div",{className:"pokemon",children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:t})}),Object(o.jsx)("img",{src:n})]}),Object(o.jsx)("img",{className:"delete_icon",onClick:function(){console.log({name:t,url:n,id:c}),k(c)},src:"https://image.flaticon.com/icons/png/128/3096/3096673.png"})]})})}))),z=Object(d.b)((function(e){return{myPokes:e.MyPokemonsReducer.myPokes}}),{})((function(e){var t=e.myPokes.map((function(e){return Object(o.jsx)(q,{id:e.id,name:e.name,url:e.url})}));return Object(o.jsxs)("div",{className:e.className,children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:e.name})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"village_icons",src:e.url})}),Object(o.jsx)("div",{className:e.pokemons,children:t})]})})),H=Object(d.b)((function(e){return{myVillage:e.MyPokemonsReducer.myVillage,myPokes:e.MyPokemonsReducer.myPokes}}),{setAddedPokemons:function(){return function(e){v().then((function(t){var n;e((n=t.data,{type:N,addedPokemons:n}))}))}}})((function(e){Object(c.useEffect)((function(){e.setAddedPokemons()}),[]);var t=e.myVillage.map((function(e){switch(e.name){case"Grass type":return Object(o.jsx)(z,{pokemons:"pokemons_info_grass",className:"grass_theme",name:e.name,url:e.url});case"Fire type":return Object(o.jsx)(z,{pokemons:"pokemons_info_fire",className:"fire_theme",name:e.name,url:e.url});case"Electric type":return Object(o.jsx)(z,{pokemons:"pokemons_info_electric",className:"electric_theme",name:e.name,url:e.url});case"Water type":return Object(o.jsx)(z,{pokemons:"pokemons_info_water",className:"water_theme",name:e.name,url:e.url});case"Ground type":return Object(o.jsx)(z,{pokemons:"pokemons_info_ground",className:"ground_theme",name:e.name,url:e.url});case"Rock type":return Object(o.jsx)(z,{pokemons:"pokemons_info_rock",className:"rock_theme",name:e.name,url:e.url});default:return Object(o.jsx)(z,{className:"village_icons",name:e.name,url:e.url})}}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"wrapper_title",children:Object(o.jsx)("h2",{children:"Your type"})}),Object(o.jsx)("div",{className:"village_info",children:t})]})})),Q=n(249),Z=n(250),$=n(69),ee=(n(145),["input","meta"]),te=["input","meta"],ne="formControlError",ce=function(e){var t=e.input,n=e.meta,c=Object($.a)(e,ee),s=n.touched&&n.error?Object(o.jsx)("span",{className:"textError",children:n.error}):"";return console.log(n.error),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(u.a)(Object(u.a)({className:s?ne:""},t),c))}),Object(o.jsx)("div",{children:s})]})},se=function(e){var t=e.input,n=e.meta,c=Object($.a)(e,te),s=n.touched&&n.error?Object(o.jsx)("span",{className:"textError",children:n.error}):"";return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(u.a)(Object(u.a)({className:s?ne:""},t),c))}),Object(o.jsx)("div",{children:s})]})},ae=function(e){return e?void 0:"Field is required"},ie="SET_LOGIN_DATA",re={login:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(u.a)(Object(u.a)({},e),{},{login:[t.loginInfo]});default:return e}},le=(n(146),function(){return Object(o.jsx)("div",{className:"all",children:Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"eevee",children:Object(o.jsxs)("div",{class:"body",children:[Object(o.jsxs)("div",{class:"head",children:[Object(o.jsxs)("div",{class:"ears",children:[Object(o.jsx)("div",{class:"ear",children:Object(o.jsx)("div",{class:"lobe"})}),Object(o.jsx)("div",{class:"ear",children:Object(o.jsx)("div",{class:"lobe"})})]}),Object(o.jsxs)("div",{class:"face",children:[Object(o.jsxs)("div",{class:"eyes",children:[Object(o.jsx)("div",{class:"eye",children:Object(o.jsx)("div",{class:"eyelid"})}),Object(o.jsx)("div",{class:"eye",children:Object(o.jsx)("div",{class:"eyelid"})})]}),Object(o.jsx)("div",{class:"nose"}),Object(o.jsx)("div",{class:"mouth"})]})]}),Object(o.jsxs)("div",{class:"chest",children:[Object(o.jsx)("div",{class:"fur",children:Object(o.jsx)("div",{class:"patch"})}),Object(o.jsx)("div",{class:"fur",children:Object(o.jsx)("div",{class:"patch"})}),Object(o.jsx)("div",{class:"fur",children:Object(o.jsx)("div",{class:"patch"})})]}),Object(o.jsxs)("div",{class:"legs",children:[Object(o.jsx)("div",{class:"leg",children:Object(o.jsx)("div",{class:"inner-leg"})}),Object(o.jsx)("div",{class:"leg",children:Object(o.jsx)("div",{class:"inner-leg"})}),Object(o.jsx)("div",{class:"leg",children:Object(o.jsx)("div",{class:"inner-leg"})}),Object(o.jsx)("div",{class:"leg",children:Object(o.jsx)("div",{class:"inner-leg"})})]}),Object(o.jsx)("div",{class:"tail",children:Object(o.jsx)("div",{class:"tail",children:Object(o.jsx)("div",{class:"tail",children:Object(o.jsx)("div",{class:"tail",children:Object(o.jsx)("div",{class:"tail",children:Object(o.jsx)("div",{class:"tail -end"})})})})})})]})})})})}),je=(n(147),function(e){return function(t){if(t&&t.length<e)return"You must to throw symbols!"}}(3)),de=function(e){return function(t){if(t&&t.length>e)return"Ooops, max length is ".concat(e," symbols :(")}}(16),ue=Object(Q.a)({form:"login"})((function(e){return Object(o.jsxs)("div",{className:"login_form",children:[Object(o.jsxs)("form",{onSubmit:e.handleSubmit,className:"current_form",children:[Object(o.jsx)("div",{children:Object(o.jsx)(Z.a,{className:"input_field",placeholder:"Login",name:"login",component:ce,validate:[ae,de,je]})}),Object(o.jsx)("div",{children:Object(o.jsx)(Z.a,{className:"input_field",placeholder:"Password",name:"password",component:se,validate:[ae,de,je]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Z.a,{type:"checkbox",name:"rememberMe",component:"input"}),"Remember me?"]}),Object(o.jsx)("button",{className:"login_button",children:"Login"})]}),Object(o.jsx)("div",{className:"login_item",children:Object(o.jsx)(le,{})})]})})),me=Object(d.b)((function(e){return{login:e.LoginReducer.login}}),{setLoginDataThunkCreator:function(e,t,n){return function(c){f(e,t,n),c(function(e,t,n){return{type:ie,loginInfo:e,password:t,rememberMe:n}}(e,t,n))}}})((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"login_header",children:"Login"}),Object(o.jsx)(ue,{onSubmit:function(t){e.setLoginDataThunkCreator(t.login,t.password,t.rememberMe),console.log(t)}})]})})),be=(n(102),function(e){var t=e.name,n=e.url;return Object(o.jsxs)("div",{className:"current_leader",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"type_gif",src:n})}),Object(o.jsx)("div",{className:"current_leader_name",children:t})]})}),Oe=function(e){var t=e.leaders.map((function(e){return Object(o.jsx)(be,{name:e.name,url:e.url})}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:e.header,children:[Object(o.jsx)("div",{className:"title_span ",children:Object(o.jsx)("span",{children:e.name})}),Object(o.jsx)("div",{className:"title_img",children:Object(o.jsx)("img",{className:"village_icons",src:e.img})})]}),Object(o.jsxs)("div",{className:e.theme,children:[Object(o.jsxs)("div",{className:"about_current_type",children:[Object(o.jsx)("div",{className:"description_block",children:e.description}),Object(o.jsx)("div",{className:"gif",children:Object(o.jsx)("img",{className:"type_gif",src:e.gif})})]}),Object(o.jsx)("div",{className:"leaders_title",children:Object(o.jsx)("h2",{children:"Leaders"})}),Object(o.jsx)("div",{className:"leaders_block",children:t})]})]})},he=Object(d.b)((function(e){return{about:e.MyPokemonsReducer.about}}),{})((function(e){var t=e.about.map((function(e){switch(e.name){case"Grass type":return Object(o.jsx)(Oe,{header:"pokemons_grass",theme:"grass",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});case"Fire type":return Object(o.jsx)(Oe,{header:"pokemons_fire",theme:"fire",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});case"Electric type":return Object(o.jsx)(Oe,{header:"pokemons_electric",theme:"electric",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});case"Water type":return Object(o.jsx)(Oe,{header:"pokemons_water",theme:"water",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});case"Ground type":return Object(o.jsx)(Oe,{header:"pokemons_ground",theme:"ground",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});case"Rock type":return Object(o.jsx)(Oe,{header:"pokemons_rock",theme:"rock",img:e.img,name:e.name,gif:e.gif,description:e.description,leaders:e.leaders});default:return Object(o.jsx)(Oe,{name:e.name,img:e.img,description:e.description,gif:e.gif,leaders:e.leaders})}}));return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:t})})})),pe=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(L.a,{path:"/main",render:function(){return Object(o.jsx)(D,{})}}),Object(o.jsx)(L.a,{path:"/all",render:function(){return Object(o.jsx)(W,{})}}),Object(o.jsx)(L.a,{path:"/my",render:function(){return Object(o.jsx)(H,{})}}),Object(o.jsx)(L.a,{path:"/login",render:function(){return Object(o.jsx)(me,{})}}),Object(o.jsx)(L.a,{path:"/info",render:function(){return Object(o.jsx)(he,{})}}),Object(o.jsx)(j,{})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,252)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},fe=n(10),ge=n(106),ve=n(251),ke=Object(fe.c)({homePageReducer:R,AllPokemonsReducer:K,MyPokemonsReducer:T,form:ve.a,LoginReducer:oe}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,Ne=Object(fe.e)(ke,_e(Object(fe.a)(ge.a)));window.store=Ne;var ye=Ne;i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(d.a,{store:ye,children:Object(o.jsx)(pe,{})})})}),document.getElementById("root")),xe()},81:function(e,t,n){}},[[248,1,2]]]);
//# sourceMappingURL=main.1b114bc2.chunk.js.map
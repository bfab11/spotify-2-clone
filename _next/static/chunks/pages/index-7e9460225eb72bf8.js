(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(69)}])},69:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return V},default:function(){return F}});var r=n(5893),s=(n(9008),n(3801)),a=n(3299),i=n(7294),c=n(2804),l=(0,c.cn)({key:"playlistState",default:null}),o=(0,c.cn)({key:"playlistIdState",default:"10v1CmRP7hb2HWZqqArdfW"}),u=n(7539),d=new(n.n(u)())({clientId:"846dac7855774b57b9cdbe2210694131",clientSecret:"c3fb4db82c634ca7a606739c8495d57a"});var f=function(){var e=(0,a.useSession)(),t=e.data;return e.status,(0,i.useEffect)((function(){t&&("RefreshAccessTokenError"===t.error&&(0,a.signIn)(),d.setAccessToken(t.user.accessToken))}),[t]),d};function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(){var e=f(),t=(0,a.useSession)(),n=t.data,l=(t.status,(0,i.useState)([])),u=l[0],d=l[1],x=h((0,c.FV)(o),2),m=x[0],v=x[1];return console.log("You picked playlist >>> ",m),(0,i.useEffect)((function(){e.getAccessToken()&&e.getUserPlaylists().then((function(e){d(e.body.items)}))}),[n,e]),(0,r.jsx)("div",{className:"text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36",children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.tvw,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Home"})]}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.W1M,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Search"})]}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.VqP,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Library"})]}),(0,r.jsx)("hr",{className:"border-t-[0.1px] border-gray-900"}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.wl8,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Create Playlist"})]}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.h_8,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Liked Songs"})]}),(0,r.jsxs)("button",{className:"flex items-center space-x-2 hover:text-white",children:[(0,r.jsx)(s.HO6,{className:"h-5 w-5"}),(0,r.jsx)("p",{children:"Your Playlists"})]}),(0,r.jsx)("hr",{className:"border-t-[0.1px] border-gray-900"}),u.map((function(e){return(0,r.jsx)("p",{onClick:function(){return v(e.id)},className:"cursor-pointer hover:text-white",children:e.name},e.id)}))]})})},m=n(6486),v=(0,c.cn)({key:"currentTrackIdState",default:null}),p=(0,c.cn)({key:"isPlayingState",default:!1});function y(e){var t=Math.floor(e/6e4),n=(e%6e4/1e3).toFixed(0);return 60==n?t+1+":00":t+":"+(n<10?"0":"")+n}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=function(e){var t=e.order,n=e.track,s=f(),a=b((0,c.FV)(v),2),i=(a[0],a[1]),l=b((0,c.FV)(p),2),o=(l[0],l[1]);return(0,r.jsxs)("div",{className:"grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer",onClick:function(){i(n.track.id),o(!0),s.play({uris:[n.track.uri]})},children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("p",{children:t+1}),(0,r.jsx)("img",{className:"h-10 w1-10",src:n.track.album.images[0].url,alt:""}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"w-36 lg:w-64 text-white truncate",children:n.track.name}),(0,r.jsx)("p",{className:"w-40",children:n.track.artists[0].name})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between ml-auto md:ml-0",children:[(0,r.jsx)("p",{className:"w-40 hidden md:inline",children:n.track.album.name}),(0,r.jsx)("p",{children:y(n.track.duration_ms)})]})]})};var w=function(){var e=(0,c.sJ)(l);return(0,r.jsx)("div",{className:"px-8 flex-col space-y-1 pb-28 text-white",children:null===e||void 0===e?void 0:e.tracks.items.map((function(e,t){return(0,r.jsx)(j,{track:e,order:t},e.track.id)}))})};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=["from-indigo-500","from-blue-500","from-green-500","from-red-500","from-yellow-500","from-pink-500","from-purple-500"];var k=function(){var e,t,n=(0,a.useSession)().data,u=f(),d=(0,i.useState)(null),h=d[0],x=d[1],v=(0,c.sJ)(o),p=g((0,c.FV)(l),2),y=p[0],b=p[1];return(0,i.useEffect)((function(){x((0,m.shuffle)(N).pop())}),[v]),(0,i.useEffect)((function(){u.getPlaylist(v).then((function(e){b(e.body)})).catch((function(e){return console.log("Something went wrong!",e)}))}),[u,v]),console.log(y),(0,r.jsxs)("div",{className:"flex-grow h-screen overflow-y-scroll scrollbar-hide",children:[(0,r.jsx)("header",{className:"absolute top-5 right-8",children:(0,r.jsxs)("div",{className:"flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2",onClick:function(){return(0,a.signOut)()},children:[(0,r.jsx)("img",{className:"rounded-full w-10 h-10",src:null===n||void 0===n?void 0:n.user.image,alt:""}),(0,r.jsx)("h2",{children:null===n||void 0===n?void 0:n.user.name}),(0,r.jsx)(s.v4q,{className:"h-5 w-5"})]})}),(0,r.jsxs)("section",{className:"flex items-end space-x-7 bg-gradient-to-b to-black ".concat(h," h-80 text-white p-8"),children:[(0,r.jsx)("img",{className:"h-44 w-44 shadow-2xl",src:null===y||void 0===y||null===(e=y.images)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.url,alt:""}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"PLAYLIST"}),(0,r.jsx)("h1",{className:"text-2xl md:text-3xl xl:text-5xl font-bold",children:null===y||void 0===y?void 0:y.name})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(w,{})})]})},S=n(5666),C=n.n(S);function A(e,t,n,r,s,a,i){try{var c=e[a](i),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(r,s)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(){var e=f(),t=_((0,c.FV)(v),2),n=t[0],r=(t[1],(0,i.useState)(null)),s=r[0],a=r[1];return(0,i.useEffect)((function(){var t;(t=C().mark((function t(){var r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,fetch("https://api.spotify.com/v1/tracks/".concat(n),{headers:{Authorization:"Bearer ".concat(e.getAccessToken())}}).then((function(e){return e.json()}));case 3:r=t.sent,a(r);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function i(e){A(a,r,s,i,c,"next",e)}function c(e){A(a,r,s,i,c,"throw",e)}i(void 0)}))})()}),[n,e]),s},T=n(3153);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){s=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(){var e,t,n,l,o=f(),u=(0,a.useSession)(),d=u.data,h=(u.status,P((0,c.FV)(v),2)),x=h[0],y=h[1],b=P((0,c.FV)(p),2),j=b[0],w=b[1],g=(0,i.useState)(50),N=g[0],k=g[1],S=E(),C=function(){o.getMyCurrentPlaybackState().then((function(e){e.body.is_playing?(o.pause(),w(!1)):(o.play(),w(!0))}))};(0,i.useEffect)((function(){o.getAccessToken()&&!x&&(S||o.getMyCurrentPlayingTrack().then((function(e){var t,n,r;console.log("now playing: ",null===(t=e.body)||void 0===t?void 0:t.item),y(null===(n=e.body)||void 0===n||null===(r=n.item)||void 0===r?void 0:r.id),o.getMyCurrentPlaybackState().then((function(e){var t;w(null===(t=e.body)||void 0===t?void 0:t.is_playing)}))})),k(50))}),[v,o,d]),(0,i.useEffect)((function(){N>0&&N<100&&A(N)}),[N]);var A=(0,i.useCallback)((0,m.debounce)((function(e){o.setVolume(e).catch((function(e){}))}),500),[]);return(0,r.jsxs)("div",{className:"h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("img",{className:"hidden md:inline h-10 w-10",src:null===(e=null===S||void 0===S?void 0:S.album.images)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.url,alt:""}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:null===S||void 0===S?void 0:S.name}),(0,r.jsx)("p",{children:null===S||void 0===S||null===(n=S.artists)||void 0===n||null===(l=n[0])||void 0===l?void 0:l.name})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-evenly",children:[(0,r.jsx)(T.aK0,{className:"button"}),(0,r.jsx)(T.o03,{onClick:function(){return o.skipToPrevious()},className:"button"}),j?(0,r.jsx)(T.fpf,{onClick:C,className:"button w-10 h-10"}):(0,r.jsx)(T.o1U,{onClick:C,className:"button w-10 h-10"}),(0,r.jsx)(T.D6v,{onClick:function(){return o.skipToNext()},className:"button"}),(0,r.jsx)(T.HA9,{className:"button"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-3 md:space-x-4 justify-end",children:[(0,r.jsx)(s.MCl,{onClick:function(){return N>0&&k(N-10)},className:"button"}),(0,r.jsx)("input",{className:"w-14 md:w-28",type:"range",value:N,onChange:function(e){return k(Number(e.target.value))},min:0,max:100}),(0,r.jsx)(T.MCl,{onClick:function(){return N<100&&k(N+10)},className:"button"})]})]})},V=!0;function F(){return(0,r.jsxs)("div",{className:"bg-black h-screen overflow-hidden",children:[(0,r.jsxs)("main",{className:"flex",children:[(0,r.jsx)(x,{}),(0,r.jsx)(k,{})]}),(0,r.jsx)("div",{className:"sticky bottom-0",children:(0,r.jsx)(I,{})})]})}},4654:function(){}},function(e){e.O(0,[662,237,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
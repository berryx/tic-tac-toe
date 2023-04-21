"use strict";(self.webpackChunktictactoe=self.webpackChunktictactoe||[]).push([[179],{116:function(n,t,e){var r=e(379),o=e.n(r),a=e(795),i=e.n(a),s=e(569),c=e.n(s),l=e(565),d=e.n(l),u=e(216),p=e.n(u),b=e(589),f=e.n(b),w=e(668),g={};function h(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return i=n.done,n},e:function(n){s=!0,a=n},f:function(){try{i||null==e.return||e.return()}finally{if(s)throw a}}}}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function y(n){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},y(n)}g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(w.Z,g),w.Z&&w.Z.locals&&w.Z.locals;var x,v,k,S,z,C,E,A,R,L,M,F,I,j,P,T,U,N,O,B=function(n,t){var e=t,r=n;return{getSign:function(){return r},getName:function(){return e}}},q=(x=new Array(9),{getField:function(n){return x[n]},setField:function(n,t){return x[n]=t},reset:function(){return x=new Array(9)},getBoard:function(){return x},getEmptyField:function(){for(var n=q.getBoard(),t=[],e=0;e<9;e++)null!==n[e]&&void 0!==n[e]||t.push(e);return t}}),Z=(k=B("X","Player 1"),S=0,z=k,C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],E=function(n){q.getField(n)||(q.setField(n,z.getSign()),R()&&G.displayResult(z),A(),G.updatePlayerElement(z)),9!=++S||R()||G.displayResult("tie")},A=function(){"ai"!==(z=z===k?v:k).getName()||R()||E(H.aiPlay())},R=function(){for(var n=function(){var n=e[t];if(C.some((function(t){return t.every((function(t){return q.getField(t)===n}))})))return{v:!0}},t=0,e=["X","O"];t<e.length;t++){var r=n();if("object"===y(r))return r.v}return!1},{init:function(n){"ai"===n?v=H.getAiPlayer():"human"===n&&(v=B("O","Player 2")),G.updatePlayerElement(z)},playerRound:E,resetGame:function(){q.reset(),z=k,S=0,G.updatePlayerElement(z)}}),G=(L=document.querySelectorAll(".box"),M=document.getElementById("playerOne"),F=document.getElementById("playerTwo"),I=document.getElementById("resultScreen").content.cloneNode(!0).firstElementChild,T=function(n){Z.resetGame(),P();var t,e=h(L);try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("click",U)}catch(n){e.e(n)}finally{e.f()}var r,o=h(L);try{for(o.s();!(r=o.n()).done;)r.value.classList.remove("x","o")}catch(n){o.e(n)}finally{o.f()}I.classList.remove("flex"),I.classList.add("hidden"),I.remove()},U=function(n){Z.playerRound(n.currentTarget.dataset.index),P()},N=function(){var n=document.getElementById("mainMenu").content.cloneNode(!0).firstElementChild,t=n.querySelector("#newGameBtn"),e=n.querySelector("#playerSelect");console.log(),t.addEventListener("click",(function(t){document.body.removeChild(n),j(e.options[e.selectedIndex].value)})),document.body.appendChild(n)},{initMenu:function(){N()},initGame:j=function(n){G.enableBoard(),"ai"===n&&(F.textContent=n.toUpperCase()),Z.init(n)},displayResult:function(n){L.forEach((function(n){n.removeEventListener("click",U)}));var t=I.querySelector("#winner"),e=I.querySelector("h2"),r=I.querySelector("#nextRound");"tie"===n?(e.textContent="It's a tie !",t.textContent="Try again ?"):(e.textContent="The winner is",t.textContent=n.getName()),r.onclick=T,I.classList.remove("hidden"),I.classList.add("flex"),document.querySelector("main").appendChild(I)},updatePlayerElement:function(n){"X"===n.getSign()?(M.classList.add("playing"),F.classList.remove("playing")):(F.classList.add("playing"),M.classList.remove("playing"))},updateBoard:P=function(){for(var n=0;n<L.length;n++)L[n].textContent=q.getField(n),"X"===q.getField(n)?L[n].classList.add("x"):"O"===q.getField(n)&&L[n].classList.add("o")},enableBoard:function(){L.forEach((function(n){n.addEventListener("click",U)}))}}),H=(O=B("O","ai"),{aiPlay:function(){var n=q.getEmptyField();return n[Math.floor(Math.random()*n.length)]},getAiPlayer:function(){return O}});G.initMenu()},668:function(n,t,e){var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,'/*\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.absolute {\n  position: absolute;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/3 {\n  top: 33.333333%;\n}\n.z-50 {\n  z-index: 50;\n}\n.mb-20 {\n  margin-bottom: 5rem;\n}\n.mt-14 {\n  margin-top: 3.5rem;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-80 {\n  height: 20rem;\n}\n.h-96 {\n  height: 24rem;\n}\n.h-fit {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.max-h-max {\n  max-height: -webkit-max-content;\n  max-height: -moz-max-content;\n  max-height: max-content;\n}\n.w-96 {\n  width: 24rem;\n}\n.w-full {\n  width: 100%;\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.flex-col {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.justify-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.justify-around {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.gap-10 {\n  gap: 2.5rem;\n}\n.gap-20 {\n  gap: 5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-box {\n  --tw-border-opacity: 1;\n  border-color: rgba(57, 62, 65, 1);\n  border-color: rgb(57 62 65 / var(--tw-border-opacity));\n}\n.border-currentPlayer {\n  --tw-border-opacity: 1;\n  border-color: rgba(233, 79, 55, 1);\n  border-color: rgb(233 79 55 / var(--tw-border-opacity));\n}\n.bg-body {\n  --tw-bg-opacity: 1;\n  background-color: rgba(217, 205, 204, 1);\n  background-color: rgb(217 205 204 / var(--tw-bg-opacity));\n}\n.bg-header {\n  --tw-bg-opacity: 1;\n  background-color: rgba(217, 205, 204, 1);\n  background-color: rgb(217 205 204 / var(--tw-bg-opacity));\n}\n.bg-header-title {\n  --tw-bg-opacity: 1;\n  background-color: rgba(233, 79, 55, 1);\n  background-color: rgb(233 79 55 / var(--tw-bg-opacity));\n}\n.bg-player {\n  --tw-bg-opacity: 1;\n  background-color: rgba(153, 54, 38, 1);\n  background-color: rgb(153 54 38 / var(--tw-bg-opacity));\n}\n.p-10 {\n  padding: 2.5rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-header-title {\n  --tw-text-opacity: 1;\n  color: rgba(233, 79, 55, 1);\n  color: rgb(233 79 55 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.transition {\n  -webkit-transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n.ease-in-out {\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 8rem;\n  width: 8rem;\n  cursor: pointer;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(57, 62, 65, 1);\n  background-color: rgb(57 62 65 / var(--tw-bg-opacity));\n  font-size: 6rem;\n  line-height: 1;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  -webkit-box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 #000, 0 1px 2px -1px #000;\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 #000, 0 1px 2px -1px #000;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-shadow-color: #000;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.box:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(69, 26, 3, 1);\n  background-color: rgb(69 26 3 / var(--tw-bg-opacity));\n}\n\n.x {\n  --tw-text-opacity: 1;\n  color: rgba(233, 79, 55, 1);\n  color: rgb(233 79 55 / var(--tw-text-opacity));\n}\n\n.o {\n  --tw-text-opacity: 1;\n  color: rgba(246, 247, 235, 1);\n  color: rgb(246 247 235 / var(--tw-text-opacity));\n}\n\n.playing {\n  --tw-bg-opacity: 1;\n  background-color: rgba(233, 79, 55, 1);\n  background-color: rgb(233 79 55 / var(--tw-bg-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  -webkit-box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px #fff, 0 2px 4px -2px #fff;\n          box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px #fff, 0 2px 4px -2px #fff;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-shadow-color: #fff;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.resultAnim {\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-name: animate-fade;\n            animation-name: animate-fade;\n    -webkit-animation-fill-mode: backwards;\n            animation-fill-mode: backwards;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes animate-fade {\n    0% {\n    left: 100%;\n  }\n    100% {\n    left: calc(50% - 384px / 2);\n  }\n}\n\n@keyframes animate-fade {\n    0% {\n    left: 100%;\n  }\n    100% {\n    left: calc(50% - 384px / 2);\n  }\n}',""]),t.Z=i},645:function(n){n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:function(n){n.exports=function(n){return n[1]}},379:function(n){var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(b);else{var f=o(b,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:function(n){var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:function(n){n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:function(n,t,e){n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:function(n){n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:function(n){n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},function(n){n(n.s=116)}]);
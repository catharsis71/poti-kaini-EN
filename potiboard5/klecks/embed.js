!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=n.parcelRequire94c2;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},n.parcelRequire94c2=a),a.register("2evKT",function(t,r){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("1LaJZ",function(t,r){function n(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,l,"next",e)}function l(e){n(a,i,o,s,l,"throw",e)}s(void 0)})}}e(t.exports,"_",function(){return i})}),a.register("cx0mh",function(t,r){e(t.exports,"_",function(){return n});function n(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}}),a.register("7h4XF",function(t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}e(t.exports,"_",function(){return i})}),a.register("cL71g",function(t,r){e(t.exports,"_",function(){return i});var n=a("exh8t");function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(t){(0,n._define_property)(e,t,r[t])})}return e}}),a.register("exh8t",function(t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e(t.exports,"_define_property",function(){return n}),e(t.exports,"_",function(){return n})}),a.register("4EWN2",function(t,r){e(t.exports,"_",function(){return n});function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}}),a.register("2gUX3",function(t,r){e(t.exports,"__generator",function(){return n}),a("8KHnw");function n(e,t){var r,n,i,o,a=function(e){return function(t){return s([e,t])}},s=function(a){if(r)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(l=0)),l;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}},l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o}"function"==typeof SuppressedError&&SuppressedError}),a.register("8KHnw",function(t,r){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e(t.exports,"_type_of",function(){return n}),e(t.exports,"_",function(){return n})}),a.register("f6OTe",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});"use strict";var n,i={};n=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),a.register("1mH1z",function(t,r){e(t.exports,"LS_LANGUAGE_KEY",function(){return u}),e(t.exports,"languageStrings",function(){return g}),e(t.exports,"LANG",function(){return h}),e(t.exports,"initLANG",function(){return m});var n=a("1LaJZ"),i=a("cx0mh"),o=a("7h4XF"),s=a("cL71g"),l=a("2gUX3"),c=a("fgfvl"),u="klecks-language",f=function(){"use strict";function e(){(0,i._)(this,e),this.listeners=[],this.data=(0,s._)({},c.english),this.code="en"}return(0,o._)(e,[{key:"setLanguage",value:function(e){var t=this;return(0,n._)(function(){var r;return(0,l.__generator)(this,function(n){switch(n.label){case 0:if("en"!==e)return[3,1];return t.data=(0,s._)({},c.english),[3,3];case 1:return r=[{},c.english],[4,(0,c.loadLanguage)(e)];case 2:t.data=(0,s._).apply(void 0,r.concat([n.sent()])),n.label=3;case 3:return t.code=e,document.documentElement.setAttribute("lang",e),t.listeners.forEach(function(e){e()}),[2]}})})()}},{key:"get",value:function(e){if(!(e in this.data))throw Error("translation code doesn't exist: "+e);return this.data[e]}},{key:"getLanguage",value:function(){var e=this;return(0,c.languages).find(function(t){return t.code===e.code})}},{key:"getAutoLanguage",value:function(){var e=d(!1);return(0,c.languages).find(function(t){return t.code===e})}},{key:"getCode",value:function(){return this.code}},{key:"subscribe",value:function(e){this.listeners.includes(e)||this.listeners.push(e)}},{key:"unsubscribe",value:function(e){for(var t=0;t<this.listeners.length;t++)if(e===this.listeners[t]){this.listeners.splice(t,1);return}}}]),e}();function d(e){var t="en",r=[];if((navigator.languages?navigator.languages:[navigator.language]).forEach(function(e){var t=e.split("-");r.push(e),2===t.length&&r.push(t[0])}),e)try{var n=localStorage.getItem(u);n&&r.unshift(n)}catch(e){}for(var i=0;i<r.length&&"break"!==function(e){var n=r[e],i=(0,c.languages).find(function(e){return e.code.toLowerCase()===n.toLowerCase()});if(i)return t=i.code,"break"}(i);i++);return t}var p=d(!0),g=new f,h=function(e,t){if(!t)return g.get(e);var r=g.get(e);return Object.keys(t).forEach(function(e){r=r.replace("{".concat(e,"}"),t[e])}),r},m=function(){return g.setLanguage(p)}}),a.register("fgfvl",function(r,n){e(r.exports,"english",function(){return l}),e(r.exports,"languages",function(){return c}),e(r.exports,"loadLanguage",function(){return u});var i,o=a("1LaJZ"),s=a("2gUX3"),l=t(a("iQKsR")),c=[{code:"en",name:"English"},{code:"de",name:"Deutsch"},{code:"fr",name:"Fran\xe7ais"},{code:"ja",name:"日本語"},{code:"zh-CN",name:"简体中文"},{code:"zh-TW",name:"繁體中文"}],u=(i=(0,o._)(function(e){return(0,s.__generator)(this,function(t){switch(t.label){case 0:if("en"!==e)return[3,1];return[2,l];case 1:if("de"!==e)return[3,3];return[4,a("79ZVO")];case 2:case 4:case 6:case 8:case 10:return[2,t.sent()];case 3:if("fr"!==e)return[3,5];return[4,a("jWq4n")];case 5:if("ja"!==e)return[3,7];return[4,a("24FtO")];case 7:if("zh-CN"!==e)return[3,9];return[4,a("jex1i")];case 9:if("zh-TW"!==e)return[3,11];return[4,a("jLsx7")];case 11:throw Error("unknown language code")}})}),function(e){return i.apply(this,arguments)})}),a.register("iQKsR",function(e,t){e.exports=JSON.parse('{"switch-ui-left-right":"Switch left/right UI","toggle-show-tools":"Show/Hide Tools","scroll":"Scroll","donate":"Donate","home":"Home","modal-new-tab":"Open in new tab","tab-edit":"Edit","tab-file":"File","tool-brush":"Brush","tool-paint-bucket":"Paint Bucket","tool-gradient":"Gradient","tool-shape":"Shape","tool-text":"Text","tool-hand":"Hand Tool","tool-zoom":"Zoom","undo":"Undo","redo":"Redo","brush-pen":"Pen","brush-blend":"Blend","brush-sketchy":"Sketchy","brush-pixel":"Pixel","brush-chemy":"Chemy","brush-smudge":"Smudge","brush-size":"Size","brush-blending":"Blending","brush-toggle-pressure":"Toggle Pressure Sensitivity","brush-pen-circle":"Circle","brush-pen-chalk":"Chalk","brush-pen-calligraphy":"Calligraphy","brush-pen-square":"Square","brush-sketchy-scale":"Scale","brush-pixel-dither":"Dither","brush-chemy-fill":"Fill","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Horizontal Symmetry","brush-chemy-mirror-y":"Vertical Symmetry","brush-chemy-gradient":"Gradient","brush-eraser-transparent-bg":"Transparent Background","stabilizer":"Stabilizer","stabilizer-title":"Stroke Stabilizer","eyedropper":"Eyedropper","secondary-color":"Secondary Color","manual-color-input":"Manual Color Input","mci-hex":"Hex","mci-copy":"Copy","modal-ok":"Ok","modal-cancel":"Cancel","modal-close":"Close","layers-active-layer":"Active Layer","layers-layer":"Layer","layers-copy":"copy","layers-blending":"Blending","layers-new":"New Layer","layers-remove":"Remove Layer","layers-duplicate":"Duplicate Layer","layers-merge":"Merge with layer below","layers-rename":"Rename","layers-active-layer-visible":"Active layer is visible","layers-active-layer-hidden":"Active layer is hidden","layers-visibility-toggle":"Layer Visibility","layers-blend-normal":"normal","layers-blend-darken":"darken","layers-blend-multiply":"multiply","layers-blend-color-burn":"color burn","layers-blend-lighten":"lighten","layers-blend-screen":"screen","layers-blend-color-dodge":"color dodge","layers-blend-overlay":"overlay","layers-blend-soft-light":"soft light","layers-blend-hard-light":"hard light","layers-blend-difference":"difference","layers-blend-exclusion":"exclusion","layers-blend-hue":"hue","layers-blend-saturation":"saturation","layers-blend-color":"color","layers-blend-luminosity":"luminosity","layers-rename-title":"Rename Layer","layers-rename-name":"Name","layers-rename-clear":"Clear Name","layers-rename-sketch":"Sketch","layers-rename-colors":"Colors","layers-rename-shading":"Shading","layers-rename-lines":"Lines","layers-rename-effects":"Effects","layers-rename-foreground":"Foreground","layers-merge-modal-title":"Merge/Mix Layers","layers-merge-description":"Merges the selected layer with the one underneath. Select the mix mode:","file-no-autosave":"No autosave, no cloud storage","file-new":"New","file-import":"Import","file-save":"Save","file-format":"File Format","file-copy":"Copy","file-copy-title":"Copy To Clipboard","file-share":"Share","file-storage":"Browser Storage","file-storage-thumb-title":"Restores when reopening page","file-storage-about":"About Browser Storage","file-storage-cant-access":"Can\'t access","file-storage-empty":"Empty","file-storage-store":"Store","file-storage-clear":"Clear","file-storage-storing":"Storing","file-storage-overwrite":"Overwrite","file-storage-min-ago":"{x}min ago","file-storage-hours-ago":"{x}h ago","file-storage-days-ago":"{x}d ago","file-storage-month-ago":"> 1month ago","file-storage-restored":"Restored from Browser Storage","file-storage-stored":"Stored to Browser Storage","file-storage-failed":"Failed to store to Browser Storage","file-storage-failed-1":"Failed to store. Possible causes:","file-storage-failed-2":"Out of disk space","file-storage-failed-3":"Storage disabled in incognito tab","file-storage-failed-4":"Browser doesn\'t support storage","file-storage-failed-clear":"Failed to clear.","file-upload":"Upload","cleared-layer":"Cleared layer","filled":"Filled","new-title":"New Image","new-current":"Current","new-fit":"Fit","new-oversize":"Oversize","new-square":"Square","new-landscape":"Landscape","new-portrait":"Portrait","new-screen":"Screen","new-video":"Video","new-din-paper":"DIN Paper","new-px":"px","new-ratio":"Ratio","upload-title":"Upload to Imgur","upload-link-notice":"Anyone with the link to your uploaded image will be able to view it.","upload-name":"Title","upload-title-untitled":"Untitled","upload-caption":"Caption","upload-submit":"Upload","upload-uploading":"Uploading...","upload-success":"Upload Successful","upload-failed":"Upload failed.","upload-delete":"To delete your image from Imgur visit:","cropcopy-title-copy":"Copy To Clipboard","cropcopy-title-crop":"Crop","cropcopy-click-hold":"Right-click or press hold to copy.","cropcopy-btn-copy":"To Clipboard","cropcopy-copied":"Copied.","cropcopy-btn-crop":"Apply Crop","crop-drag-to-crop":"Drag to crop","filter-crop-extend":"Crop/Extend","filter-flip":"Flip","filter-perspective":"Perspective","filter-resize":"Resize","filter-rotate":"Rotate","filter-transform":"Transform","filter-bright-contrast":"Bright/Contrast","filter-curves":"Curves","filter-hue-sat":"Hue/Saturation","filter-invert":"Invert","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"To Alpha","filter-triangle-blur":"Triangle Blur","filter-unsharp-mask":"Unsharp Mask","filter-crop-title":"Crop / Extend","filter-crop-description":"Crop or extend the image.","filter-crop-left":"Left","filter-crop-right":"Right","filter-crop-top":"Top","filter-crop-bottom":"Bottom","filter-crop-rule-thirds":"Rule of Thirds","filter-crop-fill":"Fill","filter-flip-title":"Flip","filter-flip-description":"Flips layer or whole image.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertical","filter-flip-image":"Flip Image","filter-flip-layer":"Flip Layer","filter-perspective-title":"Perspective","filter-perspective-description":"Transforms the selected layer.","filter-resize-title":"Resize","filter-resize-description":"Resizes the image.","filter-rotate-title":"Rotate","filter-rotate-description":"Rotates the image.","filter-transform-empty":"Layer is empty.","filter-transform-title":"Transform","filter-transform-description":"Transforms selected layer. Hold Shift for additional behavior.","filter-transform-rotation":"Rotation","filter-transform-flip":"Flip","filter-transform-center":"Center","filter-transform-constrain":"Constrain","filter-transform-snap":"Snap","filter-transform-snap-title":"Snap Rotation And Position","filter-bright-contrast-title":"Brightness / Contrast","filter-bright-contrast-description":"Change brightness and contrast for the selected layer.","filter-bright-contrast-brightness":"Brightness","filter-bright-contrast-contrast":"Contrast","filter-curves-title":"Curves","filter-curves-description":"Apply curves on the selected layer.","filter-curves-all":"All","filter-hue-sat-title":"Hue / Saturation","filter-hue-sat-description":"Change hue and saturation for the selected layer.","filter-hue-sat-hue":"Hue","filter-hue-sat-saturation":"Saturation","filter-applied":"applied","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"Applies tilt shift on the selected layer.","filter-tilt-shift-blur":"Blur Radius","filter-tilt-shift-gradient":"Gradient Radius","filter-to-alpha-title":"To Alpha","filter-to-alpha-description":"Generates alpha channel for selected layer from:","filter-to-alpha-inverted-lum":"Inverted Luminance","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Replace RGB","filter-triangle-blur-title":"Triangle Blur","filter-triangle-blur-description":"Applies triangle blur on the selected layer.","filter-unsharp-mask-title":"Unsharp Mask","filter-unsharp-mask-description":"Sharpens the selected layer by scaling pixels away from the average of their neighbors.","filter-unsharp-mask-strength":"Strength","filter-grid":"Grid","filter-grid-description":"Draws grid on selected layer.","filter-noise":"Noise","filter-noise-description":"Adds noise to selected layer.","filter-noise-scale":"Scale","filter-noise-alpha":"Alpha","filter-pattern":"Pattern","filter-pattern-description":"Generates pattern on selected layer. Drag the preview for further controls.","filter-distort":"Distort","filter-distort-description":"Distorts the selected layer.","filter-distort-phase":"Phase","filter-distort-stepsize":"Step Size","filter-distort-sync-xy":"Sync XY","filter-vanish-point":"Vanish Point","filter-vanish-point-title":"Vanishing Point","filter-vanish-point-description":"Adds vanishing point to selected layer. Drag preview to move.","filter-vanish-point-lines":"Lines","import-opening":"Opening file...","import-title":"Import Image","import-too-large":"Image too large, will be downscaled.","import-btn-as-layer":"As Layer","import-btn-as-image":"As Image","import-as-layer-title":"Import Image as New Layer","import-as-layer-description":"Adjust the position of the imported image.","import-as-layer-limit-reached":"Layer limit reached. Image will be placed on existing layer.","import-as-layer-fit":"Fit","import-flatten":"Flatten image","import-unsupported-file":"Unsupported file type. See Help for supported types.","import-broken-file":"Couldn\'t load image. File might be corrupted.","import-psd-unsupported":"Unsupported features. PSD had to be flattened.","import-psd-limited-support":"PSD support is limited. Flattened will more likely look correct.","import-psd-too-large":"Image exceeds maximum dimensions of {x} x {x} pixels. Unable to import.","import-psd-size":"Image size","hand-reset":"Reset","hand-fit":"Fit","bucket-tolerance":"Tolerance","bucket-sample":"Sample","bucket-sample-title":"Which layers to sample color from","bucket-sample-all":"All","bucket-sample-active":"Active","bucket-sample-above":"Above","bucket-grow":"Grow","bucket-grow-title":"Grow filled area (in pixels)","bucket-contiguous":"Contiguous","bucket-contiguous-title":"Only fill connected areas","gradient-linear":"Linear","gradient-linear-mirror":"Linear-Mirror","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Fill","shape-rect":"Rectangle","shape-ellipse":"Ellipse","shape-line":"Line","shape-line-width":"Line Width","shape-outwards":"Outwards","shape-fixed":"Fixed 1:1","text-instruction":"Click canvas to place text","text-title":"Add Text","text-placeholder":"Your text (multiline Shift+Enter)","text-color":"Color","text-size":"Size","text-left":"Left","text-center":"Center","text-right":"Right","text-italic":"Italic","text-bold":"Bold","save-reminder-title":"Unsaved Work","save-reminder-text":"Image was not saved in {a} minutes{b}. Save now to prevent eventual loss.","save-reminder-save-psd":"Save As PSD","save-reminder-psd-layers":"PSD will remember all layers.","backup-drawing":"You can backup your drawing.","submit":"Submit","submit-title":"Submit Drawing","submit-prompt":"Submit drawing?","submit-submitting":"Submitting","embed-init-loading":"Loading app","embed-init-waiting":"Waiting for image","unsaved":"Unsaved","help":"Help","tab-settings":"Settings","settings-language":"Language","settings-language-reload":"Will update after reloading.","settings-theme":"Theme","theme-dark":"Dark","theme-light":"Light","terms-of-service":"Terms of Service","licenses":"Licenses","source-code":"Source Code","auto":"auto","zoom-in":"Zoom In","zoom-out":"Zoom Out","radius":"Radius","constrain-proportions":"Constrain Proportions","width":"Width","height":"Height","opacity":"Opacity","red":"Red","green":"Green","blue":"Blue","eraser":"Eraser","center":"Center","layers":"Layers","background":"Background","scaling-algorithm":"Scaling Algorithm","algorithm-smooth":"Smooth","algorithm-pixelated":"Pixelated","preview":"Preview","angle-snap":"Snap","angle-snap-title":"45\xb0 Angle Snapping","lock-alpha":"Lock Alpha","lock-alpha-title":"Locks layer\'s alpha channel","reverse":"Reverse","compare-before":"Before","compare-after":"After"}')}),a.register("79ZVO",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("5RGAp")).then(function(){return a("fz5vW")})}),a.register("ih7W4",function(e,t){"use strict";var r=a("5Y6Bl");e.exports=r(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var i=document.createElement("script");i.async=!0,i.type="text/javascript",i.src=e,i.onerror=function(t){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));i.onerror=i.onload=null,i.remove(),r(n)},i.onload=function(){i.onerror=i.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(i)})})}),a.register("5Y6Bl",function(e,t){"use strict";var r={},n={},i={};e.exports=function(e,t){return function(o){var a=function(e){switch(e){case"preload":return n;case"prefetch":return i;default:return r}}(t);return a[o]?a[o]:a[o]=e.apply(null,arguments).catch(function(e){throw delete a[o],e})}}}),a.register("jWq4n",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("2bKIP")).then(function(){return a("iGIhP")})}),a.register("24FtO",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("y5edP")).then(function(){return a("7ZPTi")})}),a.register("jex1i",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("dsJ3g")).then(function(){return a("blNy6")})}),a.register("jLsx7",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("lF1Tu")).then(function(){return a("iRLcJ")})}),a.register("1C8RU",function(t,r){e(t.exports,"theme",function(){return l});var n=a("cx0mh"),i=a("7h4XF"),o=a("7jh4K"),s="klecks-theme",l=new(function(){"use strict";function e(){var t=this;(0,n._)(this,e),this.mediaQueryTheme="light",this.theme="light",this.listeners=[],this.mediaQueryTheme=(0,o.isDark)()?"dark":"light",(0,o.addIsDarkListener)(function(){t.mediaQueryTheme=(0,o.isDark)()?"dark":"light",t.updateTheme()}),this.storedTheme=this.readLocalStorage(),addEventListener("storage",function(e){e.key===s&&(t.storedTheme=t.readLocalStorage(),t.updateTheme())}),this.updateTheme()}return(0,i._)(e,[{key:"updateTheme",value:function(){var e=this.theme;this.theme=this.storedTheme||this.mediaQueryTheme,this.theme!==e&&(document.body.classList.toggle("kl-theme-dark","dark"===this.theme),this.listeners.forEach(function(e){return e()}))}},{key:"readLocalStorage",value:function(){var e=localStorage.getItem(s);return e&&("string"!=typeof e||["dark","light"].includes(e))||(e=void 0,localStorage.removeItem(s)),e}},{key:"isDark",value:function(){return"dark"===this.theme}},{key:"addIsDarkListener",value:function(e){this.listeners.includes(e)||this.listeners.push(e)}},{key:"removeIsDarkListener",value:function(e){for(var t=0;t<this.listeners.length;t++)if(this.listeners[t]===e){this.listeners.splice(t,1);return}}},{key:"getMediaQueryTheme",value:function(){return this.mediaQueryTheme}},{key:"getStoredTheme",value:function(){return this.storedTheme}},{key:"setStoredTheme",value:function(e){e?localStorage.setItem(s,e):localStorage.removeItem(s),this.storedTheme=e,this.updateTheme()}}]),e}())}),a.register("7jh4K",function(t,r){e(t.exports,"insertAfter",function(){return i}),e(t.exports,"loadImage",function(){return o}),e(t.exports,"css",function(){return s}),e(t.exports,"setAttributes",function(){return l}),e(t.exports,"append",function(){return c}),e(t.exports,"fitInto",function(){return u}),e(t.exports,"centerWithin",function(){return f}),e(t.exports,"getDate",function(){return d}),e(t.exports,"gcd",function(){return p}),e(t.exports,"reduce",function(){return g}),e(t.exports,"decToFraction",function(){return h}),e(t.exports,"imageBlobToUrl",function(){return m}),e(t.exports,"dateDayDifference",function(){return b}),e(t.exports,"copyObj",function(){return y}),e(t.exports,"shareCanvas",function(){return v}),e(t.exports,"handleClick",function(){return _}),e(t.exports,"createSvg",function(){return function e(t){var r=document.createElementNS("http://www.w3.org/2000/svg",t.elementType);return Object.entries(t).forEach(function(t){var i=(0,n._)(t,2),o=i[0],a=i[1];"childrenArr"===o?a.forEach(function(t){r.append(e(t))}):"elementType"!==o&&r.setAttribute(o,a)}),r}}),e(t.exports,"throwIfNull",function(){return S}),e(t.exports,"throwIfUndefined",function(){return H}),e(t.exports,"nullToUndefined",function(){return w}),e(t.exports,"isDark",function(){return E}),e(t.exports,"addIsDarkListener",function(){return k});var n=a("8N5YG");function i(e,t){e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling)}function o(e,t){var r=0;!function n(){if(1e3===r){alert("couldn't load");return}e.complete?(r++,t()):setTimeout(n,1)}()}function s(e,t){for(var r,n=Object.keys(t),i=e.style,o=0;o<n.length;o++)i[r=n[o]]=t[r],"userSelect"===r&&(i.webkitUserSelect=t[r])}function l(e,t){for(var r,n=Object.keys(t),i=0;i<n.length;i++)r=n[i],e.setAttribute(r,t[r])}function c(e,t){var r=document.createDocumentFragment();t.forEach(function(e){return e&&r.append(e)}),e.append(r)}function u(e,t,r,n,i){var o=e*r,a=t*r;return o>r&&(a=r/o*a,o=r),a>n&&(o=n/a*o,a=n),i&&(o=Math.max(i,o),a=Math.max(i,a)),{width:o,height:a}}function f(e,t,r,n){return{x:e/2-r/2,y:t/2-n/2}}function d(){var e=new Date;return e.getFullYear()+"_"+(e.getMonth()+1).toString().padStart(2,"0")+"_"+e.getDate().toString().padStart(2,"0")+"_"+(60*e.getHours()+e.getMinutes()).toString(36).padStart(3,"0")+"_"}function p(e,t){return t?p(t,e%t):e}function g(e,t){var r=p(e,t);return[e/r,t/r]}function h(e){var t=Math.pow(10,e.toString().length-2);return g(e*t,t)}function m(e){if(!e)throw Error("blobObj is undefined or null");if(window.Blob&&e instanceof Blob)return URL.createObjectURL(e);if("Object"===e.constructor.name)return"data:"+e.type+";"+e.encoding+","+e.data;throw Error("unknown blob format")}function b(e,t){return e=new Date(e),t=new Date(t),e.setHours(0,0,0,0),t.setHours(0,0,0,0),(t.getTime()-e.getTime())/864e5}function y(e){return JSON.parse(JSON.stringify(e))}function v(e){var t="image/png",r=function(){return alert("sharing not supported")};e.canvas.toBlob(function(n){if(!n){r(),e.callback();return}try{var i=[new File([n],e.fileName,{type:t})];navigator.share({title:e.title,files:i}).then(function(){}).catch(function(){r()})}catch(e){r()}e.callback()},t)}function _(e){var t=e.target;return!!t&&(!!["A","LABEL","INPUT"].includes(t.tagName)||!!t.allowClick||(e.preventDefault(),!1))}function S(e){if(null===e)throw Error("value is null");return e}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value is undefined";if(void 0===e)throw Error(t);return e}function w(e){return null===e?void 0:e}var x="matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)");function E(){return x&&x.matches}function k(e){x&&"addEventListener"in x&&x.addEventListener("change",e)}}),a.register("8N5YG",function(t,r){e(t.exports,"_",function(){return l});var n=a("vDBh4"),i=a("lMMat"),o=a("keO5I"),s=a("kWe4k");function l(e,t){return(0,n._array_with_holes)(e)||(0,i._iterable_to_array_limit)(e,t)||(0,s._unsupported_iterable_to_array)(e,t)||(0,o._non_iterable_rest)()}}),a.register("vDBh4",function(t,r){e(t.exports,"_array_with_holes",function(){return n});function n(e){if(Array.isArray(e))return e}}),a.register("lMMat",function(t,r){e(t.exports,"_iterable_to_array_limit",function(){return n});function n(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return o}}}),a.register("keO5I",function(t,r){e(t.exports,"_non_iterable_rest",function(){return n});function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}),a.register("kWe4k",function(t,r){e(t.exports,"_unsupported_iterable_to_array",function(){return i});var n=a("gszWS");function i(e,t){if(e){if("string"==typeof e)return(0,n._array_like_to_array)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,n._array_like_to_array)(e,t)}}}),a.register("gszWS",function(t,r){e(t.exports,"_array_like_to_array",function(){return n});function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}}),a.register("iVf04",function(t,r){e(t.exports,"loadAgPsd",function(){return s});var n,i=a("1LaJZ"),o=a("2gUX3");function s(){return l.apply(this,arguments)}function l(){return(l=(0,i._)(function(){return(0,o.__generator)(this,function(e){switch(e.label){case 0:if(n)return[3,2];return[4,a("dQq2K")];case 1:n=e.sent(),e.label=2;case 2:return[2,n]}})})).apply(this,arguments)}}),a.register("dQq2K",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("kNYzr")).then(function(){return a("2m2jt")})}),a.register("a8fvS",function(e,t){e.exports=a("ih7W4")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("dafOa")).then(function(){return a("6NgYC")})}),a.register("6t9OD",function(e,t){e.exports=a("i5Beu")(a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("4GTbM"))}),a.register("i5Beu",function(e,t){"use strict";var r=a("5Y6Bl");e.exports=r(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("link")).some(function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})){t();return}var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onerror=function(e){n.onerror=n.onload=null,n.remove(),r(e)},n.onload=function(){n.onerror=n.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(n)})})}),a("2evKT").register(JSON.parse('{"dGDZJ":"embed.js","6Sfz2":"klecks-logo.7dfe6609.png","5RGAp":"de.a47a2f9a.js","2bKIP":"fr.019b1247.js","y5edP":"ja.45297950.js","dsJ3g":"zh-CN.e927be8e.js","lF1Tu":"zh-TW.180abfcc.js","kNYzr":"dist.b451307e.js","dafOa":"main-embed.a006f55f.js","hWwEP":"cancel.5edb67d5.svg","83Fnk":"check.42e17e77.svg","h8ubb":"brush-pressure.f4437531.svg","htADd":"copy.4adadd0c.svg","ffKNP":"tool-picker.d0e69c3a.svg","iqIgb":"angle.f0b557ac.svg","1twgF":"remove-layer.4e9b2b7d.svg","70WHw":"add-layer.ce1078bb.svg","3huo1":"duplicate-layer.3314e3c7.svg","1AvFX":"merge-layers.19da79a6.svg","ftA1L":"rename-layer.7c31d4f4.svg","ayl5b":"cursor-picker.db2f5b39.png","8Sx0P":"cursor-zoom-ew.1732632d.png","ixtEz":"cursor-fill.a5ddf8b0.png","3iHbP":"cursor-text.b7e020a1.png","fcdZI":"cursor-rotate.22a4ffe8.png","eaJmh":"new-image.2d692480.svg","kV8IH":"import.7a68c844.svg","SROeX":"export.2deb9ff8.svg","lFrok":"share.454898d1.svg","cvYlU":"help.208e9032.svg","dW3eU":"tool-paint.f73a8943.svg","fnumN":"tool-fill.3358320a.svg","6J8A8":"tool-gradient.64486254.svg","da34V":"tool-text.1cbd0325.svg","eStsa":"tool-shape.3de78c3f.svg","eW5wL":"caret-down.68d4cd16.svg","b30IN":"tool-hand.e7fc81b9.svg","jYhj7":"tool-zoom-in.d413f042.svg","44EC1":"tool-zoom-out.299f4d1f.svg","1YnIA":"tool-undo.540bf765.svg","6ae9h":"inverted-border.3353c7f3.svg","8l03e":"edit-rotate.fd0e572a.svg","8K12o":"ui-collapse.2b5dfc6a.svg","2WSh2":"align-left.4876a845.svg","lHK8L":"align-center.6f56d4bd.svg","3kjmQ":"align-right.1521d61c.svg","g8nvA":"typo-italic.7ab32910.svg","axEKL":"typo-bold.5c790c89.svg","7tOPd":"edit-brightness-contrast.8430cb26.svg","fduLu":"edit-crop.16c534dd.svg","ijSd4":"edit-curves.bbdb97b2.svg","3lCpH":"edit-flip.00fd2c6b.svg","hhylW":"edit-hue-saturation.6e36cf05.svg","kV0ed":"edit-invert.fa435c66.png","dNk9L":"edit-perspective.e23100db.svg","aj5Gc":"edit-resize.56391e2b.svg","6D2tK":"edit-tilt-shift.5e532c18.png","7nesm":"edit-to-alpha.f7a2065a.svg","leHUT":"edit-transform.c8795430.svg","3lP2j":"edit-triangle-blur.0b82c28f.png","7G4sY":"edit-unsharp-mask.b6143877.png","7n1Rt":"edit-grid.e900ce7b.svg","ijwf0":"edit-noise.51bd751c.svg","18gIG":"edit-pattern.1a06e094.svg","786LQ":"edit-vanish-point.fc5858e4.svg","kcnOE":"edit-distort.bdb643f2.svg","6218s":"brush-pen.49a7b91e.svg","50oCU":"brush-blend.75217b54.svg","jDYzC":"brush-sketchy.a6979c04.png","j07R3":"brush-pixel.673f3e4c.svg","fvqmo":"brush-eraser.a9e10dce.svg","gNPk4":"brush-smudge.45852bcd.svg","371uF":"brush-chemy.a5a188f6.svg","gJzzT":"upload.5289e924.svg","c3ZSC":"loading.7ff8a2ac.gif","hTlU7":"bitbof-logo.bc5e3ed5.svg","hxlHN":"ui-swap-lr.7f474f51.svg","79hnx":"licenses.28afb66b.js","c92cL":"constrain.62f04e45.svg","kycpJ":"tab-settings.be84ac7c.svg","TzbtI":"tab-layers.c8a104e7.svg","4GTbM":"embed.c8b5b196.css","9clYo":"error.abae1a5e.svg","bLSjr":"ok.398afd66.svg","8eSFI":"warning.7472a070.svg","d56Qw":"upload-large.bb0f452b.svg"}'));var s=a("1LaJZ"),l=a("cx0mh"),c=a("7h4XF"),u=a("cL71g"),f=a("4EWN2"),d=a("2gUX3"),p={};p=a("f6OTe").getBundleURL("dGDZJ")+a("2evKT").resolve("6Sfz2");var g=a("1mH1z"),h=a("1C8RU"),m=a("iVf04"),b=!1;function y(e){e&&e.layers.forEach(function(e){e.isVisible=void 0===e.isVisible||e.isVisible})}var v=function(){"use strict";function e(n){if((0,l._)(this,e),this.psds=[],this.getPNG=void 0,this.getPSD=void 0,b)throw Error("Already created an embed");b=!0,y(n.project),n=(0,f._)((0,u._)({},n),{embedUrl:n.embedUrl?n.embedUrl:function(){if(r)return r;try{throw Error()}catch(t){t instanceof Error&&(e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g))}var e,t=0;return e.forEach(function(e,r){-1!==e.indexOf("embed.js")&&(t=r)}),r=(""+e[t]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}()});var i=this;(0,s._)(function(){var e,r,o,s,l;return(0,d.__generator)(this,function(c){switch(c.label){case 0:return[4,(0,g.initLANG)()];case 1:for(c.sent(),e=document.createElement("div"),r=[["position","fixed"],["left","0"],["top","0"],["width","100vw"],["height","100vh"],["display","flex"],["alignItems","center"],["justifyContent","center"],["flexDirection","column"],["background",(0,h.theme).isDark()?"rgb(33, 33, 33)":"rgb(158,158,158)"],["fontFamily","Arial, sans-serif"],["fontSize","30px"],["color","#e3e3e3"]],o=0;o<r.length;o++)e.style[r[o][0]]=r[o][1];return e.id="loading-screen",s=(0,h.theme).isDark()&&!n.logoImg?' style="filter: invert(1)"':"",e.innerHTML='<img width="150" height="54"'+s+' src="'+(n.logoImg?n.logoImg:t(p))+'" alt="Logo"/>\n<div style="margin: 15px 0 0 0; display: flex; align-items: center">\n<div class="spinner"></div>\n<span id="loading-screen-text">'+(0,g.LANG)("embed-init-loading")+"</span></div>",document.body.appendChild(e),[4,a("a8fvS")];case 2:return l=c.sent(),i.instance=new l.Embed(n),i.getPNG=function(){return i.instance.getPNG()},i.getPSD=function(){return i.instance.getPSD()},i.project&&i.instance.openProject(i.project),i.errorStr&&i.instance.initError(i.errorStr),i.psds.length&&i.instance.readPSDs(i.psds),[2]}})})(),(0,m.loadAgPsd)()}return(0,c._)(e,[{key:"openProject",value:function(e){if(y(e),this.instance)this.instance.openProject(e);else{if(this.project)throw Error("Already called openProject");this.project=e}}},{key:"initError",value:function(e){this.instance?this.instance.initError(e):this.errorStr=e}},{key:"readPSD",value:function(e){var t=this;return(0,s._)(function(){return(0,d.__generator)(this,function(r){return[2,new Promise(function(r,n){var i={blob:e,callback:function(e){t.psds.splice(t.psds.indexOf(i),1),e?r(e):n()}};t.instance?t.instance.readPSDs([i]):t.psds.push(i)})]})})()}}]),e}();a("6t9OD"),Object.defineProperty(window,"Klecks",{value:v})}();
//# sourceMappingURL=embed.js.map

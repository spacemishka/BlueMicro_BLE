"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2198],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return s}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},K={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),k=u(r),s=i,f=k["".concat(l,".").concat(s)]||k[s]||K[s]||o;return r?t.createElement(f,a(a({ref:n},d),{},{components:r})):t.createElement(f,a({ref:n},d))}));function s(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=k;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4183:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"configure_keyboard",title:"Configuring keyboard_config.h",slug:"/configure_keyboard"},l=void 0,u={unversionedId:"configure_keyboard",id:"configure_keyboard",title:"Configuring keyboard_config.h",description:"Configuring your keyboard - Part 2: Keyboard Definition",source:"@site/docs/configuring_firmware_2.md",sourceDirName:".",slug:"/configure_keyboard",permalink:"/docs/configure_keyboard",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/configuring_firmware_2.md",tags:[],version:"current",frontMatter:{id:"configure_keyboard",title:"Configuring keyboard_config.h",slug:"/configure_keyboard"},sidebar:"someSidebar",previous:{title:"Configuring hardware_config.h",permalink:"/docs/configure_hardware"},next:{title:"Configuring keymap.h.cpp",permalink:"/docs/configure_keymap"}},d=[{value:"Configuring your keyboard - Part 2: Keyboard Definition",id:"configuring-your-keyboard---part-2-keyboard-definition",children:[{value:"Keyboard Name",id:"keyboard-name",children:[],level:3},{value:"BLE Service configuration",id:"ble-service-configuration",children:[],level:3},{value:"Key Matrix Shape",id:"key-matrix-shape",children:[],level:3}],level:2}],K={toc:d};function k(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},K,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-your-keyboard---part-2-keyboard-definition"},"Configuring your keyboard - Part 2: Keyboard Definition"),(0,o.kt)("h3",{id:"keyboard-name"},"Keyboard Name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#define DEVICE_NAME_R                         "ErgoTravelBLE_R"                          /**< Name of device. Will be included in the advertising data. */\n#define DEVICE_NAME_L                        "ErgoTravelBLE_L"                          /**< Name of device. Will be included in the advertising data. */\n#define DEVICE_NAME_M                         "ErgoTravelBLE"                          /**< Name of device. Will be included in the advertising data. */\n')),(0,o.kt)("h3",{id:"ble-service-configuration"},"BLE Service configuration"),(0,o.kt)("p",null,"Available Options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SINGLE"),": Use this option for a regular keyboard or for testing one of the two halves of a split keyboard. This configuration uses HID BLE Service and BAT BLE Service for communicating with the computer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LEFT"),": Use this option for a the left half of a split keyboard. This configuration uses HID BLE Service and BAT BLE Service for communicating with the computer. This option also turn on scanning for other halves.  The keyboard will scan specifically for BLE devices with the custom keyboard communication service.  When a device is found, it will automatically connect to it.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RIGHT"),": Use this option for a the right half of a split keyboard.  This turn on broadcasting of the custom keyboard service for connecting to ",(0,o.kt)("inlineCode",{parentName:"li"},"LEFT")," halves.  This configuration does not use the HID BLE Service.  If you want to test your right half directly with your computer, consider using the ",(0,o.kt)("inlineCode",{parentName:"li"},"SINGLE")," configuration with a test keymap.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#define KEYBOARD_SIDE SINGLE\n")),(0,o.kt)("h3",{id:"key-matrix-shape"},"Key Matrix Shape"),(0,o.kt)("p",null,"The KEYMAP macro is used for 2 purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove the extras ",(0,o.kt)("inlineCode",{parentName:"li"},"{ }")," which can make troubleshooting the keymaps difficult"),(0,o.kt)("li",{parentName:"ul"},"Relocate specific keys or re-arrange/re-shape the matrix into what the keyboard looks like."),(0,o.kt)("li",{parentName:"ul"},"Hide empty matrix positions from the keymap by using KC_NO in the second part of the macro. ")),(0,o.kt)("p",null,"The following example shows the simplest of KEYMAP macros:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#define KEYMAP( \\\n      k00, k01, k02, k03, k04, k05, k06, \\\n      k10, k11, k12, k13, k14, k15, k16, \\\n      k20, k21, k22, k23, k24, k25, k26, \\\n      k30, k31, k32, k33, k34, k35, k36 \\\n) \\\n{ \\\n    { k00, k01, k02, k03, k04, k05, k06 }, \\\n    { k10, k11, k12, k13, k14, k15, k16 }, \\\n    { k20, k21, k22, k23, k24, k25, k26 }, \\\n    { k30, k31, k32, k33, k34, k35, k36 } \\\n} \n")),(0,o.kt)("p",null,"This next example shows the KEYMAP macro for the Luddite where all 3 purposes are used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#define KEYMAP( \\\n    K00, K01, K02, K03, K04, K05, K06, K07, K10, K11, K12, K13, K14, K15, \\\n    K16, K17, K20, K21, K22, K23, K24, K25, K26, K27, K30, K31, K32, K33, \\\n    K34, K35, K36, K37, K40, K41, K42, K43, K44, K45, K46, K47, K50, \\\n    K51, K52, K53, K54, K55, K56, K57, K60, K61, K62, K63, K64, \\\n    K65, K66, K67,                K70,                K71, K72, K73, K74\\\n) { \\\n    { K00, K01, K02, K03, K04, K05, K06, K07 }, \\\n    { K10, K11, K12, K13, K14, K15, K16, K17 }, \\\n    { K20, K21, K22, K23, K24, K25, K26, K27 }, \\\n    { K30, K31, K32, K33, K34, K35, K36, K37 }, \\\n    { K40, K41, K42, K43, K44, K45, K46, K47 }, \\\n    { K50, K51, K52, K53, K54, K55, K56, K57 }, \\\n    { K60, K61, K62, K63, K64, K65, K66, K67 }, \\\n    { K70, K71, K72, K73, K74, KC_NO,KC_NO,KC_NO } \\\n}\n")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5178],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(r),c=a,m=h["".concat(u,".").concat(c)]||h[c]||p[c]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7568:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"understand_gpios",title:"Understand GPIOs",slug:"/understand_gpios"},u=void 0,l={unversionedId:"understand_gpios",id:"understand_gpios",title:"Understand GPIOs",description:"The BlueMicro firmware uses GPIO (General Purpose Input/Output) numbers as the identifiers to configure how the processor is connected to the keyboard matrix and other keyboard devices.",source:"@site/docs/understand_gpios.md",sourceDirName:".",slug:"/understand_gpios",permalink:"/docs/understand_gpios",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/understand_gpios.md",tags:[],version:"current",frontMatter:{id:"understand_gpios",title:"Understand GPIOs",slug:"/understand_gpios"},sidebar:"someSidebar",previous:{title:"Installing Tools",permalink:"/docs/tools"},next:{title:"Configuring hardware_config.h",permalink:"/docs/configure_hardware"}},d=[{value:"Understanding nRF52 Modules and how GPIOs are numbered",id:"understanding-nrf52-modules-and-how-gpios-are-numbered",children:[{value:"Adafruit Feather nRF52832",id:"adafruit-feather-nrf52832",children:[],level:3},{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express",children:[],level:3},{value:"Nordic nRF52840DK (PCA10056)",id:"nordic-nrf52840dk-pca10056",children:[],level:3},{value:"Other nRF52832 and nRF52840 modules",id:"other-nrf52832-and-nrf52840-modules",children:[],level:3}],level:2},{value:"Selecting GPIOs numbers",id:"selecting-gpios-numbers",children:[{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express-1",children:[],level:3},{value:"All other modules (nRF52832 or nRF52840)",id:"all-other-modules-nrf52832-or-nrf52840",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The BlueMicro firmware uses GPIO (General Purpose Input/Output) numbers as the identifiers to configure how the processor is connected to the keyboard matrix and other keyboard devices."),(0,o.kt)("p",null,"The general purpose input/output pins (GPIOs) are grouped as one or more ports with each port having up to 32 GPIOs. The number of ports and GPIOs per port might vary with product variant and package. The nRF52832 has 1 port (32 GPIOs) while the nRF52840 has 2 ports 48 (GPIOs).  Some of the GPIOs are already used for specific purposes by the chip for various purposes (32.768 kHz crystal or reset pin).  As such, not all GPIOs are available for use. "),(0,o.kt)("h2",{id:"understanding-nrf52-modules-and-how-gpios-are-numbered"},"Understanding nRF52 Modules and how GPIOs are numbered"),(0,o.kt)("h3",{id:"adafruit-feather-nrf52832"},"Adafruit Feather nRF52832"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," uses the GPIO numbers in the IDE to call the specific pins.  This can be seen as the purple numbers in the following pinout image:\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn-learn.adafruit.com/assets/assets/000/046/248/original/microcontrollers_Feather_NRF52_Pinout_v1.2-1.png?1504885794",alt:"Adafruit Feather nRF52832"})),(0,o.kt)("p",null,"Since there is a direct mapping between the Arduino IDE numbers and the GPIO number, the numbers used while programming are the same as the GPIOs.  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52832 compatible with most nRF52832 modules."))),(0,o.kt)("p",null,"You can find a schematic of the Adafruit Feather nRF52832 ",(0,o.kt)("a",{parentName:"p",href:"https://cdn-learn.adafruit.com/assets/assets/000/039/913/original/microcontrollers_BluefruitnRF52Feather_Rev-F.png"},"here"),"."),(0,o.kt)("h3",{id:"adafruit-feather-nrf52840-express"},"Adafruit Feather nRF52840 Express"),(0,o.kt)("p",null,"Unlike for the nRF52832 Feather, Adafruit has opted to use the labels on the module itself as the numbers to use when programming the ",(0,o.kt)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),".  This means that there is no longer a direct representation between what's used while programming and the GPIO Port and Bit on the nRF52840 chip.  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52840 Express incompatible with other modules."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-learn.adafruit.com/assets/assets/000/068/578/large1024/circuitpython_Screenshot_2019-01-02_at_12.04.27.png?1546446487",alt:"Adafruit Feather nRF52840 Express"})),(0,o.kt)("p",null,"For more details on the pinout of the Adafruit Feather nRF52840 Express, go to Adafruit's ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts"},"documentation page")),(0,o.kt)("p",null,"You can find a schematic of the Adafruit Feather nRF52840 Express ",(0,o.kt)("a",{parentName:"p",href:"https://cdn-learn.adafruit.com/assets/assets/000/068/545/original/circuitpython_nRF52840_Schematic_REV-D.png"},"here"),"."),(0,o.kt)("h3",{id:"nordic-nrf52840dk-pca10056"},"Nordic nRF52840DK (PCA10056)"),(0,o.kt)("p",null,"Adafruit was very helpful when they included the ",(0,o.kt)("strong",{parentName:"p"},"Nordic Semiconductor nRF52840 Development Kit")," in the Adafruit nRF52 Board Support Package. Unlike for the ",(0,o.kt)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),", the ",(0,o.kt)("strong",{parentName:"p"},"PCA10056")," does not remap GPIO and Pin Numbers.  As such, we can use the GPIO number directly when programming.  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("strong",{parentName:"strong"},"This makes the Nordic nRF52840DK (PCA10056) compatible with most nRF52840 modules."))),(0,o.kt)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),(0,o.kt)("p",null,"You can find more information on the PCA10056 ",(0,o.kt)("a",{parentName:"p",href:"https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-DK"},"here")),(0,o.kt)("h3",{id:"other-nrf52832-and-nrf52840-modules"},"Other nRF52832 and nRF52840 modules"),(0,o.kt)("p",null,"This includes the BlueMicro, BlueMicro840, nRFMicro, Nice!Nano.  These modules reuse the ",(0,o.kt)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," or ",(0,o.kt)("strong",{parentName:"p"},"Nordic nRF52840DK (PCA10056)")," boards in the Adafruit nRF52 Board Support Package.  As described above, the definition of these boards do not remap pins in code."),(0,o.kt)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),(0,o.kt)("h2",{id:"selecting-gpios-numbers"},"Selecting GPIOs numbers"),(0,o.kt)("h3",{id:"adafruit-feather-nrf52840-express-1"},"Adafruit Feather nRF52840 Express"),(0,o.kt)("p",null,"Use the Pin number as per what's written on the module itself. See picture in the  ",(0,o.kt)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express")," section above."),(0,o.kt)("h3",{id:"all-other-modules-nrf52832-or-nrf52840"},"All other modules (nRF52832 or nRF52840)"),(0,o.kt)("p",null,"The nRF52832 has 32 GPIOs on 1 port (Port 0) while the nRF52840 has 48 GPIOs on 2 ports (Port 0 and 1).  "),(0,o.kt)("p",null,"To be able to address GPIOs on Port 1, we need to use this simple definition to convert port and bit to a single number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"#define _PINNUM(port, bit)    ((port)*32 + (bit))\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Port 0"),", the GPIO number will be the same as the Bit number. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"P(0.11) = 0 + 11 = 11")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Port 1"),", the GPIO number will be the Bit number plus 32. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"P(1.11) = 32 + 11 = 43")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Bit"),(0,o.kt)("th",{parentName:"tr",align:null},"GPIO Number to use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"0-31"),(0,o.kt)("td",{parentName:"tr",align:null},"0-31")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"0-15"),(0,o.kt)("td",{parentName:"tr",align:null},"32-47")))))}h.isMDXComponent=!0}}]);
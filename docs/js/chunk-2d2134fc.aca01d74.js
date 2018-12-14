(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2134fc"],{abaf:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("z-container",[e("z-breadcrumbs",{attrs:{items:[{name:"Home",link:{name:"home"}},{name:"Elements"},{name:"Buttons",link:{name:"docsButtons"}}]}}),e("h4",[t._v("Buttons")]),e("p",[t._v("Buttons include simple button styles for actions in different types and sizes.")]),e("p",[t._v("Components: "),e("code",[t._v("<z-button />")]),t._v(", "),e("code",[t._v("<z-button-group />")])]),e("z-divider",{attrs:{content:"EXAMPLES"}}),e("br"),e("z-button",[t._v("button")]),t._v("  \n      "),e("z-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v("  \n      "),e("z-button",{attrs:{type:"link"}},[t._v("link")]),e("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZButton } from \'zutre\'\n\n<z-button>button</z-button>\n<z-button type="primary">primary</z-button>\n<z-button type="link">link</z-button>\n')]),e("z-divider",{attrs:{content:"OR"}}),e("z-columns",[e("z-column",[e("z-button",{attrs:{type:"success",size:"lg"}},[t._v("success")]),t._v("  \n          "),e("z-button",{attrs:{type:"error"}},[t._v("error")]),t._v("  \n          "),e("z-button",{attrs:{size:"sm"}},[t._v("default")])],1),e("z-column",[e("z-button-group",{attrs:{block:""}},[e("z-button",[t._v("button")]),e("z-button",{attrs:{type:"primary",active:!0}},[t._v("button")]),e("z-button",{attrs:{type:"primary"}},[t._v("button")])],1)],1),e("z-column",[e("z-button",{attrs:{type:"primary",right:""}},[t._v("right")])],1)],1),e("z-divider",{attrs:{content:"OR"}}),e("z-columns",[e("z-column",[e("z-button",{attrs:{type:"primary",circle:""}},[t._v("12")]),t._v("  \n          "),e("z-button",{attrs:{type:"error",circle:""}},[t._v("error")]),t._v("  \n          "),e("z-button",{attrs:{size:"sm",circle:"",loading:""}},[t._v("10")])],1),e("z-column",[e("z-button-group",{attrs:{block:""}},[e("z-button",{attrs:{disabled:""}},[t._v("button")]),e("z-button",{attrs:{type:"primary",disabled:""}},[t._v("button")]),e("z-button",{attrs:{type:"primary",disabled:""}},[t._v("button")])],1)],1),e("z-column",[e("z-button",{attrs:{action:""}},[t._v("1")]),e("z-button",{attrs:{action:""}},[t._v("2")]),e("z-button",{attrs:{action:""}},[t._v("3")])],1)],1),e("z-code",{attrs:{lang:"Vue"}},[t._v("\nimport { ZButton } from 'zutre'\n\n<z-button-group block>\n  <z-button type=\"primary\" circle>12</z-button>\n  <z-button disabled>button</z-button>\n  <z-button action>1</z-button>\n</z-button-group>\n")]),e("z-divider",{attrs:{content:"BUTTON BADGES"}}),e("h4",[t._v("Button badges")]),e("z-button",{attrs:{badge:"click"}},[t._v("Button badge")]),e("br"),e("br"),e("z-button",{attrs:{type:"error",badge:"5"}},[t._v("System alerts")]),e("br"),e("br"),e("z-button",{attrs:{badge:""}},[t._v("Button")]),e("z-code",{attrs:{lang:"Vue"}},[t._v('\nimport { ZButton } from \'zutre\'\n\n<z-button badge="click">Button badge</z-button>\n<z-button type="error" badge="5">System alerts</z-button>\n<z-button badge="">Button</z-button>\n')]),e("z-divider",{attrs:{content:"API"}}),e("h4",[t._v("API")]),e("h5",[t._v("Butotn "),e("code",[t._v("<z-button />")])]),e("z-table",[e("z-thead",[e("z-th",[t._v("Name")]),e("z-th",[t._v("Description")]),e("z-th",[t._v("Type")]),e("z-th",[t._v("Values")]),e("z-th",[t._v("Default")])],1),e("z-tbody",[e("z-tr",[e("z-td",[e("code",[t._v("type")])]),e("z-td",[t._v("\n              set button color scheme\n            ")]),e("z-td",[t._v("String")]),e("z-td",[e("code",[t._v("primary")]),t._v(", "),e("code",[t._v("link")]),t._v(", "),e("code",[t._v("success")]),t._v(", "),e("code",[t._v("error")])]),e("z-td",[t._v("---")])],1),e("z-tr",[e("z-td",[e("code",[t._v("size")])]),e("z-td",[t._v("\n              set size for button\n            ")]),e("z-td",[t._v("String")]),e("z-td",[e("code",[t._v("sm")]),t._v(", "),e("code",[t._v("lg")])]),e("z-td",[t._v("---")])],1),e("z-tr",[e("z-td",[e("code",[t._v("active")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to apply active button style\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("action")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to apply active style, for a square button\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("circle")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to apply circle style, for a round button\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("loading")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to apply loading style, will show loading indicator\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("disabled")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to apply disabled class style for button and make it inactive\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("right")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to float right\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("clear")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to generate close button\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1),e("z-tr",[e("z-td",[e("code",[t._v("badge")])]),e("z-td",[t._v("\n              button badge content\n            ")]),e("z-td",[t._v("String")]),e("z-td",[t._v("---")]),e("z-td",[t._v("---")])],1),e("z-tr",[e("z-td",[e("code",[t._v("tooltip")])]),e("z-td",[t._v("\n              tooltip text\n            ")]),e("z-td",[t._v("String")]),e("z-td",[t._v("---")]),e("z-td",[t._v("---")])],1),e("z-tr",[e("z-td",[e("code",[t._v("tooltipPosition")])]),e("z-td",[t._v("\n              set tooltip position\n            ")]),e("z-td",[t._v("String")]),e("z-td",[e("code",[t._v("top")]),t._v(", "),e("code",[t._v("bottom")]),t._v(", "),e("code",[t._v("left")]),t._v(", "),e("code",[t._v("right")])]),e("z-td",[t._v("---")])],1)],1)],1),e("br"),e("h5",[t._v("ButotnGroup "),e("code",[t._v("<z-button-group />")])]),e("z-table",[e("z-thead",[e("z-th",[t._v("Name")]),e("z-th",[t._v("Description")]),e("z-th",[t._v("Type")]),e("z-th",[t._v("Values")]),e("z-th",[t._v("Default")])],1),e("z-tbody",[e("z-tr",[e("z-td",[e("code",[t._v("block")])]),e("z-td",[t._v("\n              set "),e("code",[t._v("true")]),t._v(" to use buttons as a full-width group\n            ")]),e("z-td",[t._v("Boolean")]),e("z-td",[e("code",[t._v("true")]),t._v("/"),e("code",[t._v("false")])]),e("z-td",[t._v("false")])],1)],1)],1)],1)},v=[],d=(e("cadf"),e("551c"),e("097d"),{name:"DocsButtons"}),r=d,z=e("2877"),_=Object(z["a"])(r,n,v,!1,null,null,null);_.options.__file="DocsButtons.vue";o["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d2134fc.aca01d74.js.map
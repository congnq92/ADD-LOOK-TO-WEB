function SELECT(SELECTOR_CSS) { return document.querySelector(SELECTOR_CSS);}function GET_CDN_LINK(PATH_FILE) { return 'https://gitcdn.link/cdn/congnq92/ADD-LOOK-TO-WEB/main' + PATH_FILE;}function INJECTION_ADD_JAVASCRIPT_LIBRARY(PATH_FILE) { var JAVASCRIPT_ELEMENT = document.createElement('script'); JAVASCRIPT_ELEMENT.src = GET_CDN_LINK(PATH_FILE); SELECT('head').appendChild(JAVASCRIPT_ELEMENT);}INJECTION_ADD_JAVASCRIPT_LIBRARY('/[AUTO_GENERATED]_PRODUCTION_INJECTION/[AUTO_GENERATED]_CONG_JS.COMBINE_ALL.V2.156.js');
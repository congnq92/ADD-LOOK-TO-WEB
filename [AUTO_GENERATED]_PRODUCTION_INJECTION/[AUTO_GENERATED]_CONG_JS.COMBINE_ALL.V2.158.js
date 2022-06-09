let URL_1 = window.location.href;let DATA = [];if(URL_1.includes('angular.io')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'code,pre', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.mat-toolbar-row.notification-container,footer', CLASS_LIST_BY_SPACE: 'HIDE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'p', CLASS_LIST_BY_SPACE: 'LINE_HEIGHT_160' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.mat-toolbar-row', CSS_TEXT: 'height: 1.5em !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.mat-toolbar-multiple-rows', CSS_TEXT: 'min-height: 0 !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'mat-sidenav-container.sidenav-container mat-sidenav.sidenav', CSS_TEXT: 'top: 20px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'p,ol,ul,li,input,a', CSS_TEXT: 'font-size: 1em !important; line-height: 1.3em !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'aio-nav-menu aio-nav-item,aio-toc li', CSS_TEXT: 'font-size: 0.7em !important; line-height: 1.3em !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'aio-shell[ng-version=\'7.2.9\'] aio-nav-menu aio-nav-item', CSS_TEXT: 'font-size: 1.2em !important;' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'aio-shell[ng-version=\'7.2.9\'] aio-nav-menu aio-nav-item a,aio-shell[ng-version=\'7.2.9\'] aio-nav-menu aio-nav-item button', CLASS_LIST_BY_SPACE: 'UPPER' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'aio-shell[ng-version=\'7.2.9\'] mat-sidenav.mat-sidenav.sidenav', CSS_TEXT: 'width: 250px !important; min-width: 250px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: 'aio-toc[ng-version=\'7.2.9\'] li', CSS_TEXT: 'font-size: 1.2em !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.toc-container', CSS_TEXT: 'top: 40px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.sidenav-content', CSS_TEXT: 'padding: 50px 0 !important; margin: 0 25px !important; max-width: 2000px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.selected', CSS_TEXT: 'color: #f44336 !important;border: #2196F3 2px dotted !important; border-radius: 4px !important;margin-bottom: 2px !important;margin-top: 2px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.active', CSS_TEXT: 'border: #2196F3 2px dotted !important; border-radius: 4px !important;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.active a', CSS_TEXT: 'color: #4CAF50 !important;' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=angular.io | DATA=angular.io.js');}if(URL_1.includes('docker.com')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'code,pre', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.col-content.content', CLASS_LIST_BY_SPACE: 'w3-large' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=docker.com | DATA=docker.com.js');}if(URL_1.includes('learnenglish.britishcouncil.org')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black w3-large LINE_HEIGHT_140' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.comments,.footer,.cta-block,.region-sidebar-second #block-block-group-sidebar-blurb-block-1,.region-sidebar-second #block-system-menu-block-website-links, .region-sidebar-second #block-system-menu-block-help', CLASS_LIST_BY_SPACE: 'HIDE' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.col-sm-9,.col-sm-3', CSS_TEXT: 'width: 100% !important;' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.page-header', CLASS_LIST_BY_SPACE: 'w3-blue w3-padding w3-round' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.field--name-field-audio-upload .field--item', CLASS_LIST_BY_SPACE: 'w3-card w3-green w3-round w3-padding' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.field-group-accordion-wrapper', CLASS_LIST_BY_SPACE: 'w3-card w3-blue w3-margin-bottom' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.field-group-accordion-wrapper a', CLASS_LIST_BY_SPACE: 'w3-text-white' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.field--name-field-tapescript', CLASS_LIST_BY_SPACE: 'w3-white w3-text-indigo w3-border' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.field--name-field-tapescript strong', CLASS_LIST_BY_SPACE: 'w3-border w3-border-green w3-round w3-text-green w3-xlarge w3-padding-small' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.field--name-field-tapescript p', CSS_TEXT: 'line-height: 1.4;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.viddler-app-wrap', CSS_TEXT: 'width: 100%; height: 663.75px !important;' }, { TYPE: 'CLICK', SELECTOR_CSS_LIST_BY_COMMA: '.vid-cc,.subtitle-choices li:nth-child(2) a,.vid-quality,.quality-choices li:nth-child(1) a' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=learnenglish.britishcouncil.org | DATA=learnenglish.britishcouncil.org.js');}if(URL_1.includes('mailchimp.com')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'pre code,#main-content table > tbody > tr > td:first-child > div', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'p code', CLASS_LIST_BY_SPACE: 'CONG_CODE w3-blue PADDING_2_4' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body p', CLASS_LIST_BY_SPACE: 'w3-text-black w3-large LINE_HEIGHT_140' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body ol, body ul', CLASS_LIST_BY_SPACE: 'w3-text-black' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#gatsby-focus-wrapper', CLASS_LIST_BY_SPACE: 'w3-white' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h1,h2,h3,h4,h5', CLASS_LIST_BY_SPACE: 'w3-green w3-text-white PADDING_2_4' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h1', CLASS_LIST_BY_SPACE: 'w3-xxxlarge' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'h1', CLASS_PART_LIST_BY_COMMA: 'typography-module--eyebrow', CLASS_LIST_BY_SPACE: 'TEXT_SIZE_100' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#docs-content h2,#docs-content h3,#guides-content h2,#guides-content h3', CLASS_LIST_BY_SPACE: 'MARGIN_0' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'li > a, li > div > a, li > nav > div > button > span', CLASS_LIST_BY_SPACE: 'UPPER w3-small w3-text-blue MARGIN_0 LINE_HEIGHT_110' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h2 a', CLASS_LIST_BY_SPACE: 'w3-xxlarge w3-text-white' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#left-col-scrollbar-container li', CLASS_LIST_BY_SPACE: 'w3-border w3-border-blue' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '#left-col-scrollbar-container li', CSS_TEXT: 'margin: 1px 1px 2px 1px; padding: 1px 1px 1px 4px;' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '#main-content div:nth-child(2) div:nth-child(1) div:nth-child(1)', CSS_TEXT: 'top: 50px;' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'LeftSidebar-module--children-container,_16-col-grid-module--mobile-sticky', CLASS_LIST_BY_SPACE: 'PADDING_0' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'ProductNavbar-module--active-link-wrap', CLASS_LIST_BY_SPACE: 'w3-blue w3-border w3-border-blue' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'a', CLASS_PART_LIST_BY_COMMA: 'ProductNavbar-module--active', CLASS_LIST_BY_SPACE: 'w3-text-white' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'ProductLayout-module--product-layout,ProductContentPage-module--content-wrap', CLASS_LIST_BY_SPACE: 'MARGIN_0' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'h4', CLASS_PART_LIST_BY_COMMA: 'ApiReferencePath-module--route', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'span', CLASS_PART_LIST_BY_COMMA: 'typography-module--code-copy-small', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'span', CLASS_PART_LIST_BY_COMMA: 'ApiReferenceParam-module--type', CLASS_LIST_BY_SPACE: 'w3-text-red' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'ApiReferencePath-module--api-reference-path-header', CLASS_LIST_BY_SPACE: 'w3-hover-pale-blue w3-padding' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'ApiReferenceParam-module--api-reference-param', CLASS_LIST_BY_SPACE: 'w3-margin-left' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'Container-module--wrap,Header-module--product-nav-wrapper', CLASS_LIST_BY_SPACE: 'w3-white' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'span', CLASS_PART_LIST_BY_COMMA: 'typography-module--minor-secondary-heading', CLASS_LIST_BY_SPACE: 'w3-text-red' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'h2', CLASS_PART_LIST_BY_COMMA: 'ApiReferenceSection-module--title', CLASS_LIST_BY_SPACE: 'MARGIN_TOP_75' }, { TYPE: 'ADD_CLASS_FIND', ELEMENT: 'div', CLASS_PART_LIST_BY_COMMA: 'Footer-module--footer,ProductContentPage-module--binary-header-wrap', CLASS_LIST_BY_SPACE: 'HIDE' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=mailchimp.com | DATA=mailchimp.com.js');}if(URL_1.includes('symfony.com')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black MARGIN_TOP_0 PADDING_TOP_0 LINE_HEIGHT_130' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'code,pre,.codeblock', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#ukraine-message,.doc-header-container,.doc-sidebar-highlight,.top-horizontal-highlights,#sln,.doc-content-embedded-sidebar,.doc-license,footer', CLASS_LIST_BY_SPACE: 'HIDE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '.doc-content', CLASS_LIST_BY_SPACE: 'PADDING_0' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '.ui-prose', CSS_TEXT: 'max-width: 100%;' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=symfony.com | DATA=symfony.com.js');}if(URL_1.includes('wikipedia.org')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white TEXT_SIZE_130' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#content', CLASS_LIST_BY_SPACE: 'MARGIN_0' }, { TYPE: 'ADD_CSS', SELECTOR_CSS_LIST_BY_COMMA: '#mw-page-base', CSS_TEXT: 'height: 0 !important;' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#mw-head,#mw-panel,.box-Dablinks.plainlinks,.box-Multiple_issues.plainlinks,.reflist.reflist-columns,#footer', CLASS_LIST_BY_SPACE: 'HIDE' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#toc', CLASS_LIST_BY_SPACE: 'w3-card w3-border w3-text-blue w3-white' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: '#firstHeading', CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xxxlarge' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h2', CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xxlarge' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h3', CLASS_LIST_BY_SPACE: 'w3-text-green w3-xlarge' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('SITE=wikipedia.org | DATA=wikipedia.org.js');}if(URL_1.includes('stackoverflow') || URL_1.includes('stackexchange') || URL_1.includes('guru99') || URL_1.includes('php.net')){DATA = [ { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'body', CLASS_LIST_BY_SPACE: 'UPPER w3-white' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h1', CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xxlarge LINE_HEIGHT_110' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h2', CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xlarge LINE_HEIGHT_110' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h3', CLASS_LIST_BY_SPACE: 'w3-text-green w3-large LINE_HEIGHT_110' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'h4', CLASS_LIST_BY_SPACE: 'w3-text-green w3-medium LINE_HEIGHT_110' }, { TYPE: 'ADD_CLASS', SELECTOR_CSS_LIST_BY_COMMA: 'pre,pre code,code', CLASS_LIST_BY_SPACE: 'CONG_CODE' }, {EMPTY_LINE: 'EMPTY_LINE'}];console.log('DATA=0_ANY_SITE.js');}let CSS_DATA=".UPPER { text-transform: uppercase; word-spacing: 3px;}.BOLD { font-weight: 555;}.HIDE { display: none !important;}.CONG_CODE { text-transform: none;}.MARGIN_0 { margin: 0 !important;}.MARGIN_TOP_75 { margin-top: 75px !important;}.MARGIN_TOP_0 { margin-top: 0px !important;}.PADDING_0 { padding: 0 !important;}.PADDING_TOP_0 { padding-top: 0 !important;}.PADDING_2_4 { padding: 2px 4px !important;}.TEXT_SIZE_100 { font-size: 100% !important;}.TEXT_SIZE_130 { font-size: 130% !important;}.LINE_HEIGHT_0 { line-height: 0 !important;}.LINE_HEIGHT_110 { line-height: 1.1 !important;}.LINE_HEIGHT_130 { line-height: 1.3 !important;}.LINE_HEIGHT_140 { line-height: 1.4 !important;}.LINE_HEIGHT_160 { line-height: 1.6 !important;}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.1}html{overflow-x:hidden}h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}.w3-sans-serif{font-family:sans-serif}.w3-cursive{font-family:cursive}.w3-monospace{font-family:monospace}h1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}hr{border:0;border-top:1px solid #eee;margin:20px 0}.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}.w3-dropdown-hover:hover .w3-dropdown-content{display:block}.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}.w3-main,#main{transition:margin-left .4s}.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}.w3-bar .w3-button{white-space:normal}.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}.w3-responsive{display:block;overflow-x:auto}.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%} .w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%} .w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%} .w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%} .w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}@media (max-width:1205px){.w3-auto{max-width:95%}}@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px} .w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative} .w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center} .w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}.w3-display-position{position:absolute}.w3-circle{border-radius:50%}.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}.w3-padding-top-64{padding-top:64px!important}.w3-padding-top-48{padding-top:48px!important}.w3-padding-top-32{padding-top:32px!important}.w3-padding-top-24{padding-top:24px!important}.w3-left{float:left!important}.w3-right{float:right!important}.w3-button:hover{color:#000!important;background-color:#ccc!important}.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}.w3-hover-none:hover{box-shadow:none!important}.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}.w3-text-black,.w3-hover-text-black:hover{color:#000!important}.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}";function SELECT(SELECTOR_CSS) { return document.querySelector(SELECTOR_CSS);}function SELECT_ALL(SELECTOR_CSS) { return document.querySelectorAll(SELECTOR_CSS);}function GET_CDN_LINK(PATH_FILE) { return 'https://gitcdn.link/cdn/congnq92/ADD-LOOK-TO-WEB/main' + PATH_FILE;}function ADD_CLASS(SELECTOR_CSS_LIST_BY_COMMA, CLASS_LIST_BY_SPACE) { var LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(','); for (var INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) { var LIST = SELECT_ALL(LIST_SELECTOR_CSS[INDEX_0]); for (var INDEX = 0; INDEX < LIST.length; INDEX++) { if (!LIST[INDEX].className.includes(CLASS_LIST_BY_SPACE)) { LIST[INDEX].className += ' ' + CLASS_LIST_BY_SPACE; LIST[INDEX].onclick = function () { RENDER(); }; } } }}function FIND_CLASS_PART_LIST_BY_COMMA(ELEMENT, CLASS_PART_LIST_BY_COMMA, CLASS_LIST_BY_SPACE) { let LIST_CLASS_PART = CLASS_PART_LIST_BY_COMMA.split(','); for (let INDEX_0 = 0; INDEX_0 < LIST_CLASS_PART.length; INDEX_0++) { let CLASS_PART = LIST_CLASS_PART[INDEX_0]; if (CLASS_PART.length === 0) { console.log("DETECT EMPTY CLASS_PART_LIST_BY_COMMA: " + CLASS_PART); continue; } var LIST_ELEMENT = SELECT_ALL(ELEMENT); for (var INDEX = 0; INDEX < LIST_ELEMENT.length; INDEX++) { if (LIST_ELEMENT[INDEX].className.includes(CLASS_PART) && !LIST_ELEMENT[INDEX].className.includes(CLASS_LIST_BY_SPACE)) { LIST_ELEMENT[INDEX].className += ' ' + CLASS_LIST_BY_SPACE; } } }}function ADD_CSS(SELECTOR_CSS_LIST_BY_COMMA, CSS_TEXT) { let LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(','); for (let INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) { const CSS_FULL = LIST_SELECTOR_CSS[INDEX_0] + '{' + CSS_TEXT + '}'; const STYLE = document.createElement("style"); STYLE.appendChild(document.createTextNode(CSS_FULL)); if (!SELECT('head').innerHTML.includes(CSS_FULL)) { console.log('ADD CSS: ' + CSS_FULL); SELECT('head').appendChild(STYLE); } }}function ADD_CSS_TAG(CSS_TEXT) { const STYLE = document.createElement("style"); STYLE.appendChild(document.createTextNode(CSS_TEXT)); if (!SELECT('head').innerHTML.includes(CSS_TEXT)) { console.log('ADD_CSS_TAG'); SELECT('head').appendChild(STYLE); }}let IsCLICK_FIRST_TIME = false;function CLICK_FIRST_TIME(SELECTOR_CSS_LIST_BY_COMMA) { if (!IsCLICK_FIRST_TIME) { IsCLICK_FIRST_TIME = true; } else { return; } let LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(','); if (SELECT(LIST_SELECTOR_CSS[0]) === null) { console.log("END CASE: OTHER PAGE DIFFERENT PAGE NEED CLICK");return;  } let FirstWaitSecond = 100; setTimeout(function () { console.log("After page loaded " + (FirstWaitSecond / 1000) + " seconds."); }, FirstWaitSecond); for (let INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) {let StartSeconds = (INDEX_0 + 1) * 1000 + FirstWaitSecond;  setTimeout(function () { console.log("After page loaded " + (StartSeconds / 1000) + " seconds: Click " + LIST_SELECTOR_CSS[INDEX_0]);SELECT(LIST_SELECTOR_CSS[INDEX_0]).click(); }, StartSeconds); }}function IS_NO_SITE() { return DATA.length == 0;}function RENDER() { if (IS_NO_SITE()) { console.log('NOT IN SITE LISTING | NO WORK.');return;  }ADD_CSS_TAG(CSS_DATA);  console.log('RENDER'); for (let INDEX = 0; INDEX < DATA.length; INDEX++) { if (DATA[INDEX].TYPE === 'ADD_CLASS') ADD_CLASS(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA, DATA[INDEX].CLASS_LIST_BY_SPACE); if (DATA[INDEX].TYPE === 'ADD_CLASS_FIND') FIND_CLASS_PART_LIST_BY_COMMA(DATA[INDEX].ELEMENT, DATA[INDEX].CLASS_PART_LIST_BY_COMMA, DATA[INDEX].CLASS_LIST_BY_SPACE); if (DATA[INDEX].TYPE === 'ADD_CSS') ADD_CSS(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA, DATA[INDEX].CSS_TEXT); if (DATA[INDEX].TYPE === 'CLICK') CLICK_FIRST_TIME(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA); }} RENDER();SELECT('body').onclick = function () { RENDER();};SELECT('body').onmousemove = function () { RENDER();};
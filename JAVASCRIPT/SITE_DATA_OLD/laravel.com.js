const CSS = ".CONG_WORDS, h1, h2, h3, h4 {text-transform: uppercase;word-spacing: 4px;font-weight: 444;color:#000;background:#fff;} .CONG_CODE .torchlight, .CONG_CODE code {text-transform:none} .CONG_CODE #collection-method-list {text-transform:none}";
const CSS_API_PLATFORM_SITE = "#carbonads {display:none;} .max-w-screen-lg {padding: 0 30px!important; max-width: 100% !important;} .docs_main {max-width: 100% !important;} footer {display:none;} #main-content {font-size:125% !important;}blockquote:first-child{display:none;}";
const STYLE = document.createElement("style");
STYLE.appendChild(document.createTextNode(CSS + CSS_API_PLATFORM_SITE));
document.querySelector('body').appendChild(STYLE);
// --- END STYLE ---
document.querySelector('body').classList.add("CONG_WORDS");
document.querySelector('body').classList.add("CONG_CODE");
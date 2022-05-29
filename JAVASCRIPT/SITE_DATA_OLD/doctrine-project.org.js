const CSS = ".CONG_WORDS, h1, h2, h3, h4 {text-transform: uppercase;word-spacing: 4px;font-weight: 444;color:#000;background:#fff}.CONG_CODE .console, .CONG_CODE .code-block-table, .CONG_CODE code {text-transform:none}";
const CSS_API_PLATFORM_SITE = ".doctrine-navbar{display:none;} .container-wrapper{max-width: 100%;}";
const STYLE = document.createElement("style"); STYLE.appendChild(document.createTextNode(CSS + CSS_API_PLATFORM_SITE));
document.querySelector('body').appendChild(STYLE);
// --- END STYLE ---
document.querySelector('body').classList.add("CONG_WORDS");
document.querySelector('body').classList.add("CONG_CODE");
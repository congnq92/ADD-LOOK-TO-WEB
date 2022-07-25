const CSS = ".CONG_WORDS, h1, h2, h3, h4 {text-transform: uppercase;word-spacing: 4px;font-weight: 555;color:#000!important;background:#fff}.CONG_CODE .gatsby-highlight, .CONG_CODE .language-text {text-transform:none}";
const CSS_API_PLATFORM_SITE = "" +
    ".header__additional-message{display:none;}" +
    ".header{display:none;}" +
    ".page{padding-top:0 !important;}" +
    ".page__docs{padding: 0 !important;}" +
    ".footer{display:none;} " +
    ".docs__nav{width: 80% !important; background: #fff; box-shadow: none;}";
const STYLE = document.createElement("style");
STYLE.appendChild(document.createTextNode(CSS + CSS_API_PLATFORM_SITE));
document.querySelector('body').appendChild(STYLE);
// --- END STYLE ---
document.querySelector('body').classList.add("CONG_WORDS");
document.querySelector('body').classList.add("CONG_CODE");
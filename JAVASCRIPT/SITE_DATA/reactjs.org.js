DATA = [
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'body',
        CLASS_LIST_BY_SPACE: 'UPPER w3-white w3-text-black'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'code,pre',
        CLASS_LIST_BY_SPACE: 'CONG_CODE'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'header>div:first-child,footer,article>div>div:last-child',
        CLASS_LIST_BY_SPACE: 'HIDE'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: 'header>div:nth-child(2),header>div:nth-child(2)>div:first-child',
        CSS_TEXT: 'height: 33px !important;'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: 'nav li a[aria-current=\'page\']',
        CSS_TEXT: 'border: #2196F3 1px solid !important; border-top-left-radius: 7px !important; border-bottom-left-radius: 7px !important; margin-left: -5px; border-left: #2196F3 7px solid !important; padding: 4px !important;'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: 'nav li a[aria-current=\'page\']',
        CSS_TEXT: 'color: #4CAF50 !important;'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'article p',
        CLASS_LIST_BY_SPACE: 'LINE_HEIGHT_130'
    },
    {EMPTY_LINE: 'EMPTY_LINE'}
];
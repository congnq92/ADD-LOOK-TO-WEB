DATA = [
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'body',
        CLASS_LIST_BY_SPACE: 'UPPER w3-white TEXT_SIZE_130'
    },
    // HIDE LEFT BAR
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: '#content',
        CLASS_LIST_BY_SPACE: 'MARGIN_0'
    },
    // HIDE TOP BAR
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '#mw-page-base',
        CSS_TEXT: 'height: 0 !important;'
    },
    // HIDE MANY
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: '#mw-head,#mw-panel,.box-Dablinks.plainlinks,.box-Multiple_issues.plainlinks,.reflist.reflist-columns,#footer',
        CLASS_LIST_BY_SPACE: 'HIDE'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: '#toc',
        CLASS_LIST_BY_SPACE: 'w3-card w3-border w3-text-blue w3-white'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: '#firstHeading',
        CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xxxlarge'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'h2',
        CLASS_LIST_BY_SPACE: 'w3-text-blue w3-xxlarge'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'h3',
        CLASS_LIST_BY_SPACE: 'w3-text-green w3-xlarge'
    },
    {EMPTY_LINE: 'EMPTY_LINE'}
];
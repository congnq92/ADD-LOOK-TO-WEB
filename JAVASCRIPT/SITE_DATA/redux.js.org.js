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
        SELECTOR_CSS_LIST_BY_COMMA: 'footer,.docsRating',
        CLASS_LIST_BY_SPACE: 'HIDE'
    },
    {
        TYPE: 'ADD_CLASS_FIND',
        ELEMENT: 'div',
        CLASS_PART_LIST_BY_COMMA: 'announcementBar',
        CLASS_LIST_BY_SPACE: 'HIDE'
    },
    // MENU LEVEL 0
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '.menu__list-item-collapsible>.menu__link--active',
        CSS_TEXT: 'border-radius: 0px !important; border-bottom: 0px !important; border-top: 1px dashed #2196F3 !important; border-left: 1px dashed #2196F3 !important; border-right: 1px dashed #2196F3 !important;'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '.menu__link--active',
        CSS_TEXT: 'font-weight: 600 !important; border: #2196F3 1px solid !important;border-top-left-radius: 0px !important; border-bottom-left-radius: 0px !important; border-top-right-radius: 7px !important; border-bottom-right-radius: 7px !important; border-right: #2196F3 7px solid !important; color: #2196F3 !important; background: #fff !important;'
    },
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: '.table-of-contents',
        CLASS_LIST_BY_SPACE: 'LINE_HEIGHT_200'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '.table-of-contents__link--active',
        CSS_TEXT: 'border: #2196F3 1px solid !important; border-top-left-radius: 7px !important; border-bottom-left-radius: 7px !important; margin-left: -5px; border-left: #2196F3 7px solid !important; padding: 4px !important;'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '.table-of-contents__link--active',
        CSS_TEXT: 'color: #4CAF50 !important;'
    },
    {EMPTY_LINE: 'EMPTY_LINE'}
];
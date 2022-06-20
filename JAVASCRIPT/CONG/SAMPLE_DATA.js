// DATA SAMPLE | FILE NAME FOR DETECT WEBSITE | DOMAIN NAME | REMOVE ME
DATA = [
    {
        TYPE: 'ADD_CLASS',
        SELECTOR_CSS_LIST_BY_COMMA: 'body',
        CLASS_LIST_BY_SPACE: 'UPPER w3-white'
    },
    {
        TYPE: 'ADD_CLASS_FIND',
        ELEMENT: 'div',
        CLASS_PART_LIST_BY_COMMA: 'ApiReferencePath-module-XX',
        CLASS_LIST_BY_SPACE: 'w3-hover-blue w3-padding'
    },
    {
        TYPE: 'ADD_CSS',
        SELECTOR_CSS_LIST_BY_COMMA: '#left-col-scrollbar-container li',
        CSS_TEXT: 'margin: 4px; padding: 2px;'
    },
    {
        TYPE: 'CLICK',
        SELECTOR_CSS_LIST_BY_COMMA: '#left-col-scrollbar-container li'
    },
    // DIFFICULTY HIGH: ADD CLASS TO OBJECT | SAMPLE CLASS_X
    {
        TYPE: 'ADD_CLASS_TO_OBJECT',
        SELECTOR_CSS: 'body',
        CLASS_LIST_BY_SPACE: 'CLASS_X',
        PARENT_LEVEL: 0, // DEFAULT NO PARENT LEVEL
    },
    //       USING MORE ADD_CSS WITH CLASS ABOVE .CLASS_X
    //
    {EMPTY_LINE: 'EMPTY_LINE'}
];
// PART: CONG_JS.js | START

// NOTE: MUST CHANGE VERSION EVERY EDIT THIS FILE. | AUTO GENERATED

// --- CONG BASE ---
// RETURN OBJECT
function SELECT(SELECTOR_CSS) {
    return document.querySelector(SELECTOR_CSS);
}

// RETURN ARRAY
function SELECT_ALL(SELECTOR_CSS) {
    return document.querySelectorAll(SELECTOR_CSS);
}

// gitcdn.link | GITHUB RAW CDN OF THIS PROJECT
/*
*   gitcdn.link | GITHUB RAW CDN OF THIS PROJECT
*   @param string PATH_FILE | example: /CSS/CONG_CSS.V1.1.css
*   @return string|LINK
*/
function GET_CDN_LINK(PATH_FILE) {
    return 'https://gitcdn.link/cdn/congnq92/ADD-LOOK-TO-WEB/main' + PATH_FILE;
}

//    1 CLASS | LIST CLASSES SPILT BY COMMA
function ADD_CLASS(SELECTOR_CSS_LIST_BY_COMMA, CLASS_LIST_BY_SPACE) {
    var LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(',');
    for (var INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) {
        var LIST = SELECT_ALL(LIST_SELECTOR_CSS[INDEX_0]);
        for (var INDEX = 0; INDEX < LIST.length; INDEX++) {
            if (!LIST[INDEX].className.includes(CLASS_LIST_BY_SPACE)) {
                LIST[INDEX].className += ' ' + CLASS_LIST_BY_SPACE;
                LIST[INDEX].onclick = function () {
                    RENDER();
                };
            }
        }
    }
}

//REQUIRED: SAME ELEMENT
function FIND_CLASS_PART_LIST_BY_COMMA(ELEMENT, CLASS_PART_LIST_BY_COMMA, CLASS_LIST_BY_SPACE) {
    let LIST_CLASS_PART = CLASS_PART_LIST_BY_COMMA.split(',');
    for (let INDEX_0 = 0; INDEX_0 < LIST_CLASS_PART.length; INDEX_0++) {
        let CLASS_PART = LIST_CLASS_PART[INDEX_0];
        if (CLASS_PART.length === 0) {
            console.log("DETECT EMPTY CLASS_PART_LIST_BY_COMMA: " + CLASS_PART);
            continue;
        }
        var LIST_ELEMENT = SELECT_ALL(ELEMENT);
        for (var INDEX = 0; INDEX < LIST_ELEMENT.length; INDEX++) {
            if (LIST_ELEMENT[INDEX].className.includes(CLASS_PART) && !LIST_ELEMENT[INDEX].className.includes(CLASS_LIST_BY_SPACE)) {
                LIST_ELEMENT[INDEX].className += ' ' + CLASS_LIST_BY_SPACE;
            }
        }
    }
}

function ADD_CSS(SELECTOR_CSS_LIST_BY_COMMA, CSS_TEXT) {
    let LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(',');
    for (let INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) {
        const CSS_FULL = LIST_SELECTOR_CSS[INDEX_0] + '{' + CSS_TEXT + '}';
        const STYLE = document.createElement("style");
        STYLE.appendChild(document.createTextNode(CSS_FULL));
        if (!SELECT('head').innerHTML.includes(CSS_FULL)) {
            console.log('ADD CSS: ' + CSS_FULL);
            SELECT('head').appendChild(STYLE);
        }
    }
}

function ADD_CSS_TAG(CSS_TEXT) {
    const STYLE = document.createElement("style");
    STYLE.appendChild(document.createTextNode(CSS_TEXT));
    if (!SELECT('head').innerHTML.includes(CSS_TEXT)) {
        console.log('ADD_CSS_TAG');
        SELECT('head').appendChild(STYLE);
    }
}

let IsCLICK_FIRST_TIME = false;

function CLICK_FIRST_TIME(SELECTOR_CSS_LIST_BY_COMMA) {
    //
    if (!IsCLICK_FIRST_TIME) {
        // CASE 1: FIRST TIME, CONTINUE PROCESS WORK
        IsCLICK_FIRST_TIME = true;
    } else {
        // CASE 2: FROM 2ND TIME, END 2 HERE
        return;
    }
    //
    let LIST_SELECTOR_CSS = SELECTOR_CSS_LIST_BY_COMMA.split(',');
    if (SELECT(LIST_SELECTOR_CSS[0]) === null) {
        console.log("END CASE: OTHER PAGE DIFFERENT PAGE NEED CLICK");
        return; // END 3 HERE
    }
    let FirstWaitSecond = 100;
    setTimeout(function () {
        console.log("After page loaded " + (FirstWaitSecond / 1000) + " seconds.");
    }, FirstWaitSecond);
    for (let INDEX_0 = 0; INDEX_0 < LIST_SELECTOR_CSS.length; INDEX_0++) {
        let StartSeconds = (INDEX_0 + 1) * 1000 + FirstWaitSecond; // 1000 = FIRST WAIT
        setTimeout(function () {
            console.log("After page loaded " + (StartSeconds / 1000) + " seconds: Click " + LIST_SELECTOR_CSS[INDEX_0]);
            // DO WORK
            SELECT(LIST_SELECTOR_CSS[INDEX_0]).click(); /*TEST stuff comment last*/
            /*TEST stuff comment first*/}, StartSeconds);
    }
    // END 1 HERE | NORMAL END
}

function IS_NO_SITE() {
    return DATA.length == 0;
}

// START CALC
function RENDER() {
    // VALIDATE
    if (IS_NO_SITE()) {
        console.log('NOT IN SITE LISTING | NO WORK.');
        return; // END
    }
    // START
    ADD_CSS_TAG(CSS_DATA); // CSS_ALL1.css
    //
    console.log('RENDER');
    for (let INDEX = 0; INDEX < DATA.length; INDEX++) {
        if (DATA[INDEX].TYPE === 'ADD_CLASS')
            ADD_CLASS(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA, DATA[INDEX].CLASS_LIST_BY_SPACE);
        if (DATA[INDEX].TYPE === 'ADD_CLASS_FIND')
            FIND_CLASS_PART_LIST_BY_COMMA(DATA[INDEX].ELEMENT, DATA[INDEX].CLASS_PART_LIST_BY_COMMA, DATA[INDEX].CLASS_LIST_BY_SPACE);
        if (DATA[INDEX].TYPE === 'ADD_CSS')
            ADD_CSS(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA, DATA[INDEX].CSS_TEXT);
        if (DATA[INDEX].TYPE === 'CLICK')
            CLICK_FIRST_TIME(DATA[INDEX].SELECTOR_CSS_LIST_BY_COMMA);
    }
} // END RENDER
RENDER();
// SMOOTH RENDER
SELECT('body').onclick = function () {
    RENDER();
};
SELECT('body').onmousemove = function () {
    RENDER();
};

// PART: CONG_JS.js | END
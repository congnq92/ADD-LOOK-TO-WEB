<?php

namespace TEXT_PROCESS;

use BASE;
use VERSION\VERSION;

class TEXT_PROCESS extends BASE
{
    /**
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * @param VERSION $VERSION
     * @return void
     */
    public function CALC(VERSION $VERSION)
    {
        // Remove folder production
        shell_exec("rm -rf " . $this->GET_PROJECT_FOLDER(PATH_PRODUCTION_INJECTION));
        shell_exec("mkdir " . $this->GET_PROJECT_FOLDER(PATH_PRODUCTION_INJECTION));
        // PROCESS NEW  JAVASCRIPT PRODUCTION
        // CONG JS ALL
        $CONG_JS_ALL_PATH_RELATIVE = sprintf("%s/%s%s.COMBINE_ALL.V%s.js", PATH_PRODUCTION_INJECTION, AUTO_GENERATED, FILE_CONG_JS, $VERSION);
        // PART : SITE DATA
        $CONG_JS_ALL_TEXT = $this->CALC_SITE_DATA();
        // PART : SITE CSS
        $CONG_JS_ALL_TEXT .= $this->CALC_CSS();
        // PART : CONG_JS
        $CONG_JS_ALL_TEXT .= $this->READ_FILE($this->GET_PROJECT_FOLDER(sprintf("%s/%s.js", PATH_FOLDER_JAVASCRIPT_CONG, FILE_CONG_JS)));
        $CONG_JS_ALL_TEXT_MIN = $this->TEXT_MIN_1_LINE($CONG_JS_ALL_TEXT);
        $this->WRITE_FILE($this->GET_PROJECT_FOLDER($CONG_JS_ALL_PATH_RELATIVE), $CONG_JS_ALL_TEXT_MIN);
        // CONG JS INJECTION
        $CONG_JS_INJECTION_TEXT = $this->READ_FILE($this->GET_PROJECT_FOLDER(sprintf("%s/%s.js", PATH_FOLDER_JAVASCRIPT_CONG, FILE_CONG_JS_INJECTION)));
        $CONG_JS_INJECTION_TEXT = str_replace(
            SIGNAL_OF_PATH_CONG_JS_COMBINE_ALL_IN_FILE_CONG_JS_INJECTION_FOR_REPLACE,
            sprintf("/%s", $CONG_JS_ALL_PATH_RELATIVE),
            $CONG_JS_INJECTION_TEXT);
        $this->WRITE_FILE(
            $this->GET_PROJECT_FOLDER(sprintf("%s/%s%s.js", PATH_PRODUCTION_INJECTION, AUTO_GENERATED, FILE_CONG_JS_INJECTION)),
            $this->TEXT_MIN_1_LINE($CONG_JS_INJECTION_TEXT));
    }

    /**
     * CALC COMBINE SITE DATA TO CONG.ALL.JS
     * @param none
     * @return string
     */
    public function CALC_SITE_DATA(): string
    {
        $TEXT_JS_SITE_DATA_ALL = "// PART: SITE DATA | START\n";
        //
        $TEXT_JS_SITE_DATA_ALL .= "let URL = window.location.href;\n";
        $TEXT_JS_SITE_DATA_ALL .= "let DATA = [];\n";
        $LIST_SITE_DATA_FILE_NAMES = $this->LIST_FILES_IN_FOLDER(PATH_FOLDER_JAVASCRIPT_SITE_DATA);
        array_shift($LIST_SITE_DATA_FILE_NAMES); // REMOVE ANY SITE ITEM | 1ST
        // CASE: DOMAIN DETECT
        foreach ($LIST_SITE_DATA_FILE_NAMES as $SITE_DATA_FILE_NAME) {
            $SITE_DATA_DOMAIN_DETECT = str_replace(".js", "", $SITE_DATA_FILE_NAME);
            $TEXT_JS_SITE_DATA_ALL .= "if(URL.includes('$SITE_DATA_DOMAIN_DETECT'))";
            // let DATA = [...]
            $SITE_DATA_TEXT_JS = $this->READ_FILE(sprintf("%s/%s", PATH_FOLDER_JAVASCRIPT_SITE_DATA, $SITE_DATA_FILE_NAME));
            $TEXT_CONSOLE_LOG = sprintf("console.log('SITE=%s | DATA=%s');", $SITE_DATA_DOMAIN_DETECT, $SITE_DATA_FILE_NAME);
            $TEXT_JS_SITE_DATA_ALL .= sprintf("{\n%s\n%s\n}\n", $SITE_DATA_TEXT_JS, $TEXT_CONSOLE_LOG);
        }
        // CASE: ANY SITE
        $TEXT_JS_SITE_DATA_ALL .= "if(";
        $ANY_SITE_ALLOW_LIST = $this->READ_CONFIGS_ANY_SITE_ALLOW_LIST();
        for ($INDEX = 0; $INDEX < count($ANY_SITE_ALLOW_LIST); $INDEX++) {
            $TEXT_JS_SITE_DATA_ALL .= $INDEX < count($ANY_SITE_ALLOW_LIST) - 1
                ? "URL.includes('$ANY_SITE_ALLOW_LIST[$INDEX]') || "
                : "URL.includes('$ANY_SITE_ALLOW_LIST[$INDEX]')";
        }
        $TEXT_JS_SITE_DATA_ALL .= ")";
        // let DATA = [...]
        $ANY_SITE_DATA_TEXT_JS = $this->READ_FILE(sprintf("%s/%s", PATH_FOLDER_JAVASCRIPT_SITE_DATA, FILE_0_ANY_SITE_TEXT_JS));
        $TEXT_CONSOLE_LOG = sprintf("console.log('DATA=%s');", FILE_0_ANY_SITE_TEXT_JS);
        $TEXT_JS_SITE_DATA_ALL .= sprintf("{\n%s\n%s\n}\n", $ANY_SITE_DATA_TEXT_JS, $TEXT_CONSOLE_LOG);
        //
        $TEXT_JS_SITE_DATA_ALL .= "// PART: SITE DATA | END\n\n";
        return $TEXT_JS_SITE_DATA_ALL;
    }

    /**
     * @param none
     * @return array
     */
    public function READ_CONFIGS_ANY_SITE_ALLOW_LIST(): array
    {
        $ANY_SITE_ALLOW_LIST_TEXT = $this->READ_FILE($this->GET_PROJECT_FOLDER(sprintf("%s/%s", PATH_FOLDER_CONFIGS, FILE_0_ANY_SITE_ALLOW_LIST)));
        $ANY_SITE_ALLOW_LIST = explode(PHP_EOL, $ANY_SITE_ALLOW_LIST_TEXT);
        array_shift($ANY_SITE_ALLOW_LIST); // REMOVE INSTRUCTION LINE
        return $ANY_SITE_ALLOW_LIST;
    }

    /**
     * CALC COMBINE ALL CSS TO CONG.ALL.JS
     * @param none
     * @return string
     */
    public function CALC_CSS(): string
    {
        $TEXT_CSS_ALL = "// PART: CSS ALL | START\n";
        //
        $CSS_ALL = $this->READ_FILE($this->GET_PROJECT_FOLDER(sprintf("%s/%s", PATH_FOLDER_CSS, FILE_CSS_ALL)));
        $TEXT_CSS_ALL .= sprintf("let CSS_DATA=\"%s\";\n", $this->TEXT_MIN_1_LINE($CSS_ALL, true));
        //
        $TEXT_CSS_ALL .= "// PART: CSS ALL | END\n";
        //
        return $TEXT_CSS_ALL;
    }

    /**
     * MINIFY TEXT FILE LIKE JS, CSS | REMOVE COMMENT
     * @param string $TEXT_FULL
     * @param bool $IS_FIX_DOUBLE_QUOTE
     * @return string
     */
    public function TEXT_MIN_1_LINE(string $TEXT_FULL, bool $IS_FIX_DOUBLE_QUOTE = false): string
    {
        $LIST_LINES = explode(PHP_EOL, $TEXT_FULL);
        $LIST_LINES_NO_COMMENT = array();
        foreach ($LIST_LINES as $LINE) {
            $LINE_NEW = $LINE;
            if ($this->IS_COMMENT_LINE_FULL($LINE_NEW)) {
                continue; // skip
            } else if ($this->IS_COMMENT_LINE_OTHER($LINE_NEW)) {
                $LINE_NEW = $this->REMOVE_COMMENT_LINE_OTHER($LINE_NEW);
            }
            // fix double quote
            if ($IS_FIX_DOUBLE_QUOTE) {
                $LINE_NEW = str_replace("\"", "\\\"", $LINE_NEW);
            }
            // fix to 1 space
            do {
                $LINE_NEW = str_replace("  ", " ", $LINE_NEW);
            } while (str_contains($LINE_NEW, "  "));
            // add
            array_push($LIST_LINES_NO_COMMENT, $LINE_NEW);
        }
        return implode("", $LIST_LINES_NO_COMMENT);
    }

    /**
     * @param string $TEXT_LINE
     * @return bool
     */
    public function IS_COMMENT_LINE_FULL(string $TEXT_LINE): bool
    {
        $TEXT_LINE_CLEAN = trim($TEXT_LINE);
        $TEXT_LINE_CLEAN = str_replace(" ", "", $TEXT_LINE_CLEAN);
        return (str_starts_with($TEXT_LINE_CLEAN, "//") // CASE: // full comment line
                || str_starts_with($TEXT_LINE_CLEAN, "/*") // CASE /* start comment
                || str_starts_with($TEXT_LINE_CLEAN, "*")  // CASE * start middle of content of paragraph comment
                || str_ends_with($TEXT_LINE_CLEAN, "*/")   // CASE */ end comment
            )
            && !$this->IS_STUFF_COMMENT($TEXT_LINE_CLEAN);
    }

    /**
     * @param string $TEXT_LINE
     * @return bool
     */
    public function IS_STUFF_COMMENT(string $TEXT_LINE): bool
    {
        $TEXT_LINE_CLEAN = trim($TEXT_LINE);
        $TEXT_LINE_CLEAN = str_replace(" ", "", $TEXT_LINE_CLEAN);
        // CASE /* full comment line */
        $IS_FULL_LINE_COMMENT_TYPE_OPEN_CLOSE = str_starts_with($TEXT_LINE_CLEAN, "/*") && str_ends_with($TEXT_LINE_CLEAN, "*/");
        if ($IS_FULL_LINE_COMMENT_TYPE_OPEN_CLOSE)
            return false;
        //
        $IS_COMMENT_TYPE_OPEN_CLOSE = str_contains($TEXT_LINE_CLEAN, "/*") && str_contains($TEXT_LINE_CLEAN, "*/");
        // STUFF COMMENT FIRST: /*TEST stuff comment*/ click();
        $IS_STUFF_COMMENT_FIRST = $IS_COMMENT_TYPE_OPEN_CLOSE
            && str_starts_with($TEXT_LINE_CLEAN, "/*")
            && !str_ends_with($TEXT_LINE_CLEAN, "*/");
        // STUFF COMMENT LAST: click(); /*TEST stuff comment*/
        $IS_STUFF_COMMENT_LAST = $IS_COMMENT_TYPE_OPEN_CLOSE
            && !str_starts_with($TEXT_LINE_CLEAN, "/*")
            && str_ends_with($TEXT_LINE_CLEAN, "*/");
        return $IS_STUFF_COMMENT_FIRST || $IS_STUFF_COMMENT_LAST;
    }

    /**
     * @param string $TEXT_LINE
     * @return bool
     */
    public function IS_COMMENT_LINE_OTHER(string $TEXT_LINE): bool
    {
        if ($this->IS_COMMENT_LINE_FULL($TEXT_LINE))
            return false;
        //
        $CASE_1_NORMAL_COMMENT = str_contains($TEXT_LINE, "//")
            && !str_contains($TEXT_LINE, "http://")
            && !str_contains($TEXT_LINE, "https://");
        $CASE_2_STUFF_COMMENT = $this->IS_STUFF_COMMENT($TEXT_LINE);
        //
        return $CASE_1_NORMAL_COMMENT || $CASE_2_STUFF_COMMENT;
    }

    /**
     * FIRST | MIDDLE | LAST
     * @param string $TEXT_LINE
     * @return string
     */
    public function REMOVE_COMMENT_LINE_OTHER(string $TEXT_LINE): string
    {
        $TEXT_LINE = trim($TEXT_LINE);
        // NORMAL COMMENT
        if ($IS_NORMAL_COMMENT = str_contains($TEXT_LINE, "//")) {
            $COMMENT = substr($TEXT_LINE, strpos($TEXT_LINE, "//"));
            $TEXT_LINE = str_replace($COMMENT, "", $TEXT_LINE);
        }
        // COMMENT STUFF
        $COMMENT_STUFF = $this->SUB_STRING_START_END($TEXT_LINE, "/*", "*/");
        $TEXT_LINE = str_replace($COMMENT_STUFF, "", $TEXT_LINE);
        //
        return $TEXT_LINE;
    }


}
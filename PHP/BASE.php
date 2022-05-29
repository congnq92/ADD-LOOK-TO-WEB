<?php

class  BASE
{
    /**
     * @param none
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * @param none
     * @return BASE
     */
    public function END_LINE(): BASE
    {
        echo "\n";
        return $this;
    }

    /**
     * print 1 line to console.
     * @param string|null $TEXT
     * @return BASE
     */
    public function LINE($TEXT = null): BASE
    {
        if (is_null($TEXT)) $TEXT = '';
        echo "$TEXT\n";
        return $this;
    }

    /**
     * GET PROJECT FOLDER
     * @param string $PATH
     * @return string
     */
    public function GET_PROJECT_FOLDER(string $PATH = ''): string
    {
        return str_replace("/php", "", __DIR__) . "/$PATH";
    }

    /**
     * @param string $PATH_FULL
     * @return string
     */
    public function READ_FILE(string $PATH_FULL = ''): string
    {
        return file_get_contents($PATH_FULL);
    }

    /**
     * @param string $PATH_FULL
     * @param string $TEXT
     * @return void
     */
    public function WRITE_FILE(string $PATH_FULL = '', string $TEXT = '')
    {
        file_put_contents($PATH_FULL, $TEXT);
    }

    /**
     * @param string $PATH_FULL
     * @return array
     */
    public function LIST_FILES_IN_FOLDER(string $PATH_FULL = ''): array
    {
        return array_diff(scandir($PATH_FULL), array('.', '..'));
    }

    /// TEXT
    function SUB_STRING_START_END($content, $start, $end)
    {
        $r = explode($start, $content);
        if (isset($r[1])) {
            $r = explode($end, $r[1]);
            return $start.$r[0].$end;
        }
        return '';
    }

}
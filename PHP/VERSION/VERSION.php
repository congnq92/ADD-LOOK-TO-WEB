<?php

namespace VERSION;

use BASE;

class VERSION extends BASE
{
    /** @var int */
    protected $MAIN;

    /** @var int */
    protected $REVISION;

    /**
     * @param none
     * @return void
     */
    public function __construct()
    {
        $this->READ();
    }

    /**
     * READ DATA FROM VERSION.json
     * @param none
     * @return VERSION
     */
    public function READ()
    {
        $VERSION_DATA_OBJ = json_decode($this->READ_FILE(__DIR__ . "/VERSION.json"));
        $this->MAIN = $VERSION_DATA_OBJ->MAIN;
        $this->REVISION = $VERSION_DATA_OBJ->REVISION;
        return $this;
    }

    /**
     * @param none
     * @return string
     */
    public function __toString()
    {
        return sprintf("%s.%s", $this->getMAIN(), $this->REVISION);
    }

    /**
     * @return mixed
     */
    public function getMAIN()
    {
        return $this->MAIN;
    }

    /**
     * @param mixed $MAIN
     * @return VERSION
     */
    public function setMAIN($MAIN): VERSION
    {
        $this->MAIN = $MAIN;
        return $this;
    }

    /**
     * @return int
     */
    public function getREVISION(): int
    {
        return $this->REVISION;
    }

    /**
     * @param int $REVISION
     * @return VERSION
     */
    public function setREVISION($REVISION): VERSION
    {
        $this->REVISION = $REVISION;
        return $this;
    }

    /**
     * @param none
     * @return VERSION
     */
    public function INCREASE_MAIN(): VERSION
    {
        $this->MAIN++;
        $this->SAVE();
        return $this;
    }

    /**
     * SAVE DATA TO VERSION.json
     * @param none
     * @return VERSION
     */
    public function SAVE()
    {
        $this->WRITE_FILE(__DIR__ . "/VERSION.json", json_encode(get_object_vars($this)));
        return $this;
    }

    /**
     * @param none
     * @return VERSION
     */
    public function INCREASE_REVISION()
    {
        $this->REVISION++;
        $this->SAVE();
        return $this;
    }
}

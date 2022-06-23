<?php

namespace VERSION;

use BASE;

class VERSION extends BASE
{
    /** @var int */
    protected $MAJOR = 0; // default

    /** @var int */
    protected $MINOR = 0; // default

    /** @var int */
    protected $PATCH = 0; // default

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
        // READ DATA
        $VERSION_DATA_OBJ = json_decode($this->READ_FILE(__DIR__ . "/VERSION.json"));
        // VALIDATE & PROCESS
        if(!is_null($VERSION_DATA_OBJ)){
            $this->MAJOR = $VERSION_DATA_OBJ->MAJOR;
            $this->MINOR = $VERSION_DATA_OBJ->MINOR;
            $this->PATCH = $VERSION_DATA_OBJ->PATCH;
        }
        return $this;
    }

    /**
     * @param none
     * @return string
     */
    public function __toString()
    {
        return sprintf("%s.%s.%s", $this->MAJOR, $this->MINOR, $this->PATCH);
    }

    /**
     * @return mixed
     */
    public function getMAJOR()
    {
        return $this->MAJOR;
    }

    /**
     * @param mixed $MAJOR
     * @return VERSION
     */
    public function setMAJOR($MAJOR): VERSION
    {
        $this->MAJOR = $MAJOR;
        return $this;
    }

    /**
     * @return int
     */
    public function getMINOR(): int
    {
        return $this->MINOR;
    }

    /**
     * @param int $MINOR
     * @return VERSION
     */
    public function setMINOR($MINOR): VERSION
    {
        $this->MINOR = $MINOR;
        return $this;
    }

    /**
     * @return int
     */
    public function getPATCH(): int
    {
        return $this->PATCH;
    }

    /**
     * @param int $PATCH
     * @return VERSION
     */
    public function setPATCH(int $PATCH): VERSION
    {
        $this->PATCH = $PATCH;
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
    public function ADD_MINOR()
    {
        $this->MINOR++;
        $this->SAVE();
        return $this;
    }
}

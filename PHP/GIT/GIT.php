<?php

namespace GIT;

use BASE;

class GIT extends BASE
{
    /**
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * @param none
     * @return void
     */
    public function CALC()
    {
        $TEXT_INPUT = readline();
        $this->LINE("COMMIT MESSAGE: $TEXT_INPUT");
        $this->LINE(shell_exec("git add -A"));
        $this->LINE(shell_exec("git commit -m '$TEXT_INPUT'"));
        $this->LINE(shell_exec("git push"));
    }

}
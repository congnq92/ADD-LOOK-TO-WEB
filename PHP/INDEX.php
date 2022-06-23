<?php
spl_autoload_register(); // Auto load Class Obj
require_once('php/DATA.php');

// CONTAINER
$BASE = new BASE();


// CALC
$VERSION= new \VERSION\VERSION();
$BASE->LINE()->LINE()
    ->LINE("CURRENT VERSION IS: $VERSION");
$VERSION->ADD_MINOR();
$BASE->LINE("NEW VERSION START PROCESS: $VERSION")
    ->LINE();
//
(new \TEXT_PROCESS\TEXT_PROCESS())->CALC($VERSION);
//
(new \GIT\GIT())->CALC();
//
$BASE->LINE("NEW VERSION END PROCESS: $VERSION")
    ->LINE()->LINE();



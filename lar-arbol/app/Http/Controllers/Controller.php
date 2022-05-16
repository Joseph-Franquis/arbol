<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function iniciarSesion($id = null)
    {
        ini_set("session.use_trans_sid", "1"); //activamos sesion si fallan cookies
        ini_set("session.use_cookies", "0"); //desactivamos el uso de cookies
        ini_set("session.use_only_cookies", "0"); //No usar solo cookies
        if($id == null){
            session_id($id);
        }else{
            session_id("arbol");
        }
        session_start(); //iniciamos la sesion
    }
}

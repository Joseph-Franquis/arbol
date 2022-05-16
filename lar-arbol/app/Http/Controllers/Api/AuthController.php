<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuarios;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request){
        $this->iniciarSesion($request->token);
        if($_SESSION["token"] === $request->token){
            $usuario = new Usuarios();
            $usuario->usuario = $request->usuario;
            $usuario->nombre = $request->nombre;
            $usuario->correo = $request->correo;
            $usuario->password = $request->password;
            $usuario->usuario_rol = 4;
            $usuario->remember_token = bin2hex(openssl_random_pseudo_bytes(24));
            $usuario->save();
            return response()->json($usuario, 200);
        }else{
            return response()->json(array(
                "No autorizado" => "401"
            ), 401);
        }

    }

    public function login(Request $request){
        $this->iniciarSesion($request->token);
        if($_SESSION["token"] === $request->token){
            $usuario = new Usuarios();
            $usuario->usuario = $request->usuario;
            $usuario->nombre = $request->nombre;
            $usuario->correo = $request->correo;
            $usuario->password = $request->password;
            $usuario->usuario_rol = 4;
            $usuario->remember_token = bin2hex(openssl_random_pseudo_bytes(24));
            $usuario->save();
            return response()->json($usuario, 200);
        }else{
            return response()->json(array(
                "No autorizado" => "401"
            ), 401);
        }

    }
}

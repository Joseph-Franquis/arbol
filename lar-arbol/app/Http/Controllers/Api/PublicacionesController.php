<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Publicaciones;
use App\Models\Usuarios;

class PublicacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $publicaciones = Publicaciones::get();
        $tablas = [];
        $rows = [];
        foreach ($publicaciones as $key => $value) {
            $tablas[$key]['id'] = $value->id;
            $tablas[$key]['titulo'] = $value->titulo;
            $tablas[$key]['contenido'] = $value->contenido;
            $usuario = Usuarios::find($value->usuario_id);
            $tablas[$key]['usuario'] = $usuario->usuario;
            $tablas[$key]['creado'] = $value->created_at;
            $tablas[$key]['actualizado'] = $value->updated_at;

        }
        return response()->json($tablas, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $publicacion = Publicaciones::find($id);
        $usuario = Usuarios::find($publicacion->usuario_id);
        $tablas = [
            'id' => $publicacion->id,
            'titulo' => $publicacion->titulo,
            'contenido' => $publicacion->contenido,
            'usuario' => $usuario->usuario,
            'actualizado' => $publicacion->updated_at,
        ];
        return response()->json($tablas, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

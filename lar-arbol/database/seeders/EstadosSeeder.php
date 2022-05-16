<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Estados;

class EstadosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $creator = new Estados();
        $creator->nombre = 'Subido';
        $creator->descripcion = 'Subido: activo para que los usuarios lo puedan vizualizar';
        $creator->save();
    }
}

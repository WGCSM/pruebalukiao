<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empleado;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Log;

class EmpleadosController extends Controller
{
    //
    public function index()
    {
        $empleados = Empleado::all();
        Log::info($empleados);
        return Inertia::render('Empleados/index', ['empleados' => $empleados]);
    }


    public function create()
    {
        return Inertia::render('Empleados/create');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nombre'=> ['required'],
            'apellido'=> ['required'],
            'razonSocial'=> ['required'],
            'cedula'=> ['required'],
            'telefono'=> ['required'],
            'pais'=> ['required'],
            'ciudad'=> ['required'],
        ])->validate();
   
        Empleado::create($request->all());
    
        return redirect()->route('empleados.index');
    }

    public function edit(Empleado $empleado)
    {
        return Inertia::render('Empleados/edit', [
            'empleado' => $empleado
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'nombre'=> ['required'],
            'apellido'=> ['required'],
            'razonSocial'=> ['required'],
            'cedula'=> ['required'],
            'telefono'=> ['required'],
            'pais'=> ['required'],
            'ciudad'=> ['required'],
        ])->validate();
    
        Empleado::find($id)->update($request->all());
        return redirect()->route('empleados.index');
    }

    public function destroy($id)
    {
        Empleado::find($id)->delete();
        return redirect()->route('empleados.index');
    }
}

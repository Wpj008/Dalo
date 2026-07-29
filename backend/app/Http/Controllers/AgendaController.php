<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use Illuminate\Http\Request;

class AgendaController extends Controller
{
    /**
     * Afficher la liste des rendez-vous.
     */
    public function index()
    {
        $agendas = Agenda::with(['agendaType', 'creator'])->get();

        return response()->json($agendas);
    }



    /**
     * Afficher un rendez-vous.
     */
    public function show(Agenda $agenda)
    {
        return response()->json(
            $agenda->load(['agendaType', 'creator'])
        );
    }


}
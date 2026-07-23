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
     * Créer un nouveau rendez-vous.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'lieu' => 'required|string|max:255',
            'agenda_type_id' => 'required|exists:agenda_types,id',
            'statut' => 'required|string|max:50',
            'is_public' => 'required|boolean',
            'created_by' => 'required|exists:users,id',
        ]);

        $agenda = Agenda::create($validated);

        return response()->json(
            $agenda->load(['agendaType', 'creator']),
            201
        );
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

    /**
     * Modifier un rendez-vous.
     */
    public function update(Request $request, Agenda $agenda)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'lieu' => 'required|string|max:255',
            'agenda_type_id' => 'required|exists:agenda_types,id',
            'statut' => 'required|string|max:50',
            'is_public' => 'required|boolean',
            'created_by' => 'required|exists:users,id',
        ]);

        $agenda->update($validated);

        return response()->json(
            $agenda->load(['agendaType', 'creator'])
        );
    }

    /**
     * Supprimer un rendez-vous.
     */
    public function destroy(Agenda $agenda)
    {
        $agenda->delete();

        return response()->json([
            'message' => 'Rendez-vous supprimé avec succès.'
        ]);
    }
}
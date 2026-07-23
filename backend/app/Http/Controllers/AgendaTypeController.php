<?php

namespace App\Http\Controllers;

use App\Models\AgendaType;
use Illuminate\Http\Request;

class AgendaTypeController extends Controller
{
    /**
     * Afficher la liste des types d'agenda.
     */
    public function index()
    {
        $agendaTypes = AgendaType::all();

        return response()->json($agendaTypes);
    }

    /**
     * Créer un nouveau type d'agenda.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:agenda_types,nom',
            'description' => 'nullable|string',
        ]);

        $agendaType = AgendaType::create($validated);

        return response()->json($agendaType, 201);
    }

    /**
     * Afficher un type d'agenda.
     */
    public function show(AgendaType $agendaType)
    {
        return response()->json($agendaType);
    }

    /**
     * Modifier un type d'agenda.
     */
    public function update(Request $request, AgendaType $agendaType)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:agenda_types,nom,' . $agendaType->id,
            'description' => 'nullable|string',
        ]);

        $agendaType->update($validated);

        return response()->json($agendaType);
    }

    /**
     * Supprimer un type d'agenda.
     */
    public function destroy(AgendaType $agendaType)
    {
        $agendaType->delete();

        return response()->json([
            'message' => 'Type d\'agenda supprimé avec succès.'
        ]);
    }
}
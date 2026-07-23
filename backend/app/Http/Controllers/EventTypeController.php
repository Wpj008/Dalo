<?php

namespace App\Http\Controllers;

use App\Models\EventType;
use Illuminate\Http\Request;

class EventTypeController extends Controller
{
    /**
     * Afficher la liste des types d'événements.
     */
    public function index()
    {
        $eventTypes = EventType::all();

        return response()->json($eventTypes);
    }

    /**
     * Créer un nouveau type d'événement.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:event_types,nom',
            'description' => 'nullable|string',
        ]);

        $eventType = EventType::create($validated);

        return response()->json($eventType, 201);
    }

    /**
     * Afficher un type d'événement.
     */
    public function show(EventType $eventType)
    {
        return response()->json($eventType);
    }

    /**
     * Modifier un type d'événement.
     */
    public function update(Request $request, EventType $eventType)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:event_types,nom,' . $eventType->id,
            'description' => 'nullable|string',
        ]);

        $eventType->update($validated);

        return response()->json($eventType);
    }

    /**
     * Supprimer un type d'événement.
     */
    public function destroy(EventType $eventType)
    {
        $eventType->delete();

        return response()->json([
            'message' => 'Type d\'événement supprimé avec succès.'
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Afficher la liste des événements.
     */
    public function index()
    {
        $events = Event::with(['eventType', 'medias'])->get();

        return response()->json($events);
    }

    /**
     * Créer un nouvel événement.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'pays' => 'required|string|max:255',
            'ville' => 'required|string|max:255',
            'lieu' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'event_type_id' => 'required|exists:event_types,id',
            'statut' => 'required|string|max:50',
        ]);

        $event = Event::create($validated);

        return response()->json(
            $event->load(['eventType', 'medias']),
            201
        );
    }

    /**
     * Afficher un événement.
     */
    public function show(Event $event)
    {
        return response()->json(
            $event->load(['eventType', 'medias'])
        );
    }

    /**
     * Modifier un événement.
     */
    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'pays' => 'required|string|max:255',
            'ville' => 'required|string|max:255',
            'lieu' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'event_type_id' => 'required|exists:event_types,id',
            'statut' => 'required|string|max:50',
        ]);

        $event->update($validated);

        return response()->json(
            $event->load(['eventType', 'medias'])
        );
    }

    /**
     * Supprimer un événement.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Événement supprimé avec succès.'
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\EventMedia;
use Illuminate\Http\Request;

class EventMediaController extends Controller
{
    /**
     * Afficher la liste des médias.
     */
    public function index()
    {
        $medias = EventMedia::with('event')->get();

        return response()->json($medias);
    }

    /**
     * Créer un nouveau média.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'type' => 'required|string|max:50',
            'nom' => 'required|string|max:255',
            'fichier' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $media = EventMedia::create($validated);

        return response()->json(
            $media->load('event'),
            201
        );
    }

    /**
     * Afficher un média.
     */
    public function show(EventMedia $eventMedia)
    {
        return response()->json(
            $eventMedia->load('event')
        );
    }

    /**
     * Modifier un média.
     */
    public function update(Request $request, EventMedia $eventMedia)
    {
        $validated = $request->validate([
            'event_id' => 'required|exists:events,id',
            'type' => 'required|string|max:50',
            'nom' => 'required|string|max:255',
            'fichier' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $eventMedia->update($validated);

        return response()->json(
            $eventMedia->load('event')
        );
    }

    /**
     * Supprimer un média.
     */
    public function destroy(EventMedia $eventMedia)
    {
        $eventMedia->delete();

        return response()->json([
            'message' => 'Média supprimé avec succès.'
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Teaching;
use Illuminate\Http\Request;

class TeachingController extends Controller
{
    /**
     * Afficher la liste des enseignements.
     */
    public function index()
    {
        $teachings = Teaching::all();

        return response()->json($teachings);
    }

    /**
     * Créer un nouvel enseignement.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date' => 'required|date',
            'orateur' => 'required|string|max:255',
            'categorie' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'video_url' => 'nullable|url|max:255',
            'audio_url' => 'nullable|url|max:255',
            'document_url' => 'nullable|url|max:255',
        ]);

        $teaching = Teaching::create($validated);

        return response()->json($teaching, 201);
    }

    /**
     * Afficher un enseignement.
     */
    public function show(Teaching $teaching)
    {
        return response()->json($teaching);
    }

    /**
     * Modifier un enseignement.
     */
    public function update(Request $request, Teaching $teaching)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date' => 'required|date',
            'orateur' => 'required|string|max:255',
            'categorie' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'video_url' => 'nullable|url|max:255',
            'audio_url' => 'nullable|url|max:255',
            'document_url' => 'nullable|url|max:255',
        ]);

        $teaching->update($validated);

        return response()->json($teaching);
    }

    /**
     * Supprimer un enseignement.
     */
    public function destroy(Teaching $teaching)
    {
        $teaching->delete();

        return response()->json([
            'message' => 'Enseignement supprimé avec succès.'
        ]);
    }
}
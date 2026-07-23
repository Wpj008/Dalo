<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Afficher la liste des livres.
     */
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    /**
     * Créer un nouveau livre.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'auteur' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'prix' => 'required|numeric|min:0',
            'devise' => 'required|string|max:10',
            'lien_achat' => 'nullable|url|max:255',
            'disponible' => 'required|boolean',
        ]);

        $book = Book::create($validated);

        return response()->json($book, 201);
    }

    /**
     * Afficher un livre.
     */
    public function show(Book $book)
    {
        return response()->json($book);
    }

    /**
     * Modifier un livre.
     */
    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'nullable|string',
            'auteur' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'prix' => 'required|numeric|min:0',
            'devise' => 'required|string|max:10',
            'lien_achat' => 'nullable|url|max:255',
            'disponible' => 'required|boolean',
        ]);

        $book->update($validated);

        return response()->json($book);
    }

    /**
     * Supprimer un livre.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json([
            'message' => 'Livre supprimé avec succès.'
        ]);
    }
}
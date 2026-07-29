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
     * Afficher un livre.
     */
    public function show(Book $book)
    {
        return response()->json($book);
    }

}
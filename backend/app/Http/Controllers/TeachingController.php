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
     * Afficher un enseignement.
     */
    public function show(Teaching $teaching)
    {
        return response()->json($teaching);
    }

}
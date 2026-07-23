<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Afficher la liste des rôles.
     */
    public function index()
    {
        $roles = Role::all();

        return response()->json($roles);
    }

    /**
     * Créer un nouveau rôle.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:roles,nom',
            'description' => 'nullable|string',
        ]);

        $role = Role::create($validated);

        return response()->json($role, 201);
    }

    /**
     * Afficher un rôle.
     */
    public function show(Role $role)
    {
        return response()->json($role);
    }

    /**
     * Modifier un rôle.
     */
    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255|unique:roles,nom,' . $role->id,
            'description' => 'nullable|string',
        ]);

        $role->update($validated);

        return response()->json($role);
    }

    /**
     * Supprimer un rôle.
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return response()->json([
            'message' => 'Rôle supprimé avec succès.'
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use Illuminate\Http\Request;

class AgendaController extends Controller
{
    /**
     * Afficher les prochains rendez-vous publics de l'Apôtre.
     */
    public function index()
    {
        $agendas = Agenda::with([
                'agendaType',
                'creator',
            ])

            // Uniquement les rendez-vous visibles sur le site.
            ->where('is_public', true)

            // Uniquement les rendez-vous qui n'ont pas encore eu lieu.
            ->where('date_debut', '>=', now())

            // Uniquement les rendez-vous prévus.
            ->where('statut', 'PREVU')

            // Les plus proches en premier.
            ->orderBy('date_debut')

            ->get();

        return response()->json($agendas);
    }

    /**
     * Afficher un rendez-vous.
     */
    public function show(Agenda $agenda)
    {
        return response()->json(
            $agenda->load([
                'agendaType',
                'creator',
            ])
        );
    }
}
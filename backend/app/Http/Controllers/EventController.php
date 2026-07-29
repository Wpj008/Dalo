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
     * Afficher un événement.
     */
    public function show(Event $event)
    {
        return response()->json(
            $event->load(['eventType', 'medias'])
        );
    }

}
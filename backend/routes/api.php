<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\TeachingController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);

//Agenda

Route::get('/agendas', [AgendaController::class, 'index']);
Route::get('/agendas/{agenda}', [AgendaController::class, 'show']);

//Livres

Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{book}', [BookController::class, 'show']);


//Enseignements
Route::get('/teachings', [TeachingController::class, 'index']);
Route::get('/teachings/{teaching}', [TeachingController::class, 'show']);
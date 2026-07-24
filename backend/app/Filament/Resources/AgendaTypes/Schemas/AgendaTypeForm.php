<?php

namespace App\Filament\Resources\AgendaTypes\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AgendaTypeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('nom')
                    ->label("Nom du type d'agenda")
                    ->placeholder('Ex : Conférence')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(100),

                Textarea::make('description')
                    ->label('Description')
                    ->placeholder('Description du type d’agenda...')
                    ->rows(4)
                    ->maxLength(255)
                    ->columnSpanFull(),

            ]);
    }
}
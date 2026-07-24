<?php

namespace App\Filament\Resources\EventTypes\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class EventTypeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('nom')
                    ->label("Nom du type d'évènement")
                    ->placeholder('Ex : Croisade')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(100),

                Textarea::make('description')
                    ->label('Description')
                    ->placeholder("Description du type d'évènement...")
                    ->rows(4)
                    ->maxLength(255)
                    ->columnSpanFull(),

            ]);
    }
}
<?php

namespace App\Filament\Resources\Agendas\Schemas;

use App\Models\AgendaType;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class AgendaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('titre')
                    ->label('Titre')
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->label('Description')
                    ->rows(4)
                    ->columnSpanFull(),

                Select::make('agenda_type_id')
                    ->label("Type d'agenda")
                    ->relationship('agendaType', 'nom')
                    ->searchable()
                    ->preload()
                    ->required(),

                    Select::make('event_id')
                        ->label("Événement associé")
                        ->relationship('event', 'titre')
                        ->searchable()
                        ->preload()
                        ->placeholder("Aucun événement")
                        ->nullable(),

                DateTimePicker::make('date_debut')
                    ->label('Date de début')
                    ->seconds(false)
                    ->required(),

                DateTimePicker::make('date_fin')
                    ->label('Date de fin')
                    ->seconds(false)
                    ->required()
                    ->after('date_debut'),

                TextInput::make('lieu')
                    ->label('Lieu')
                    ->maxLength(255),

                Select::make('statut')
                    ->label('Statut')
                    ->options([
                        'PREVU' => 'Prévu',
                        'ANNULE' => 'Annulé',
                        'TERMINE' => 'Terminé',
                    ])
                    ->default('PREVU')
                    ->required(),

                Toggle::make('is_public')
                    ->label('Visible sur le site')
                    ->default(false),

            ])
            ->columns(2);
    }
}
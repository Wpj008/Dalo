<?php

namespace App\Filament\Resources\Events\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class EventForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('titre')
                    ->label("Titre de l'évènement")
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->label('Description')
                    ->rows(5)
                    ->columnSpanFull(),

                Select::make('event_type_id')
                    ->label("Type d'évènement")
                    ->relationship('eventType', 'nom')
                    ->searchable()
                    ->preload()
                    ->required(),

                DateTimePicker::make('date_debut')
                    ->label('Date de début')
                    ->seconds(false)
                    ->required(),

                DateTimePicker::make('date_fin')
                    ->label('Date de fin')
                    ->seconds(false)
                    ->after('date_debut')
                    ->required(),

                TextInput::make('pays')
                    ->label('Pays')
                    ->required()
                    ->maxLength(100),

                TextInput::make('ville')
                    ->label('Ville')
                    ->required()
                    ->maxLength(100),

                TextInput::make('lieu')
                    ->label('Lieu')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('image')
                    ->label("Image d'affiche")
                    ->directory('events')
                    ->image()
                    ->imageEditor(),

                Select::make('statut')
                    ->label('Statut')
                    ->options([
                        'A_VENIR' => 'À venir',
                        'EN_COURS' => 'En cours',
                        'TERMINE' => 'Terminé',
                    ])
                    ->default('A_VENIR')
                    ->required(),

            ])
            ->columns(2);
    }
}
<?php

namespace App\Filament\Resources\Books\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class BookForm
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
                    ->rows(5)
                    ->columnSpanFull(),

                TextInput::make('auteur')
                    ->label('Auteur')
                    ->placeholder('Ex : Pasteur Roland Dalo')
                    ->maxLength(255),

                FileUpload::make('image')
                    ->label('Couverture')
                    ->directory('books')
                    ->image()
                    ->imageEditor(),

                TextInput::make('prix')
                    ->label('Prix')
                    ->numeric()
                    ->prefix('€'),

                TextInput::make('devise')
                    ->label('Devise')
                    ->default('EUR')
                    ->maxLength(10),

                TextInput::make('lien_achat')
                    ->label("Lien d'achat")
                    ->url()
                    ->maxLength(255),

                Toggle::make('disponible')
                    ->label('Disponible')
                    ->default(true),

            ])
            ->columns(2);
    }
}
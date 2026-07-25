<?php

namespace App\Filament\Resources\Teachings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TeachingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('id')
                    ->label('ID')
                    ->sortable(),

                ImageColumn::make('image')
                    ->label('Image')
                    ->disk('public')
                    ->square()
                    ->size(60),

                TextColumn::make('titre')
                    ->label('Titre')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('orateur')
                    ->label('Orateur')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('categorie')
                    ->label('Catégorie')
                    ->badge()
                    ->searchable(),

                TextColumn::make('date')
                    ->label('Date')
                    ->date('d/m/Y')
                    ->sortable(),

                TextColumn::make('video_url')
                    ->label('Vidéo')
                    ->limit(30)
                    ->tooltip(fn ($record) => $record->video_url)
                    ->toggleable(),

                TextColumn::make('audio_url')
                    ->label('Audio')
                    ->limit(30)
                    ->tooltip(fn ($record) => $record->audio_url)
                    ->toggleable(),

                TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

            ])

            ->filters([
                //
            ])

            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])

            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
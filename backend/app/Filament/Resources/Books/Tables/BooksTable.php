<?php

namespace App\Filament\Resources\Books\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BooksTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('id')
                    ->label('ID')
                    ->sortable(),

                ImageColumn::make('image')
                    ->label('Couverture')
                    ->disk('public')
                    ->square()
                    ->size(60),

                TextColumn::make('titre')
                    ->label('Titre')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('auteur')
                    ->label('Auteur')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('prix')
                    ->label('Prix')
                    ->money(fn ($record) => $record->devise ?? 'EUR')
                    ->sortable(),

                TextColumn::make('devise')
                    ->label('Devise')
                    ->badge(),

                IconColumn::make('disponible')
                    ->label('Disponible')
                    ->boolean(),

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
<?php

namespace App\Filament\Widgets;

use App\Models\Agenda;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class TodayAgendaWidget extends TableWidget
{
    protected static ?string $heading = "Agenda d'aujourd'hui";

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                fn (): Builder => Agenda::query()
                    ->whereDate('date_debut', today())
                    ->orderBy('date_debut')
            )

            ->columns([
                Tables\Columns\TextColumn::make('date_debut')
                    ->label('Heure')
                    ->time('H:i')
                    ->sortable(),

                Tables\Columns\TextColumn::make('titre')
                    ->weight('bold')
                    ->searchable(),

                Tables\Columns\TextColumn::make('lieu')
                    ->placeholder('-'),

                Tables\Columns\BadgeColumn::make('statut')
                    ->colors([
                        'warning' => 'PREVU',
                        'danger' => 'ANNULE',
                        'success' => 'TERMINE',
                    ]),

                Tables\Columns\IconColumn::make('is_public')
                    ->label('Public')
                    ->boolean(),
            ])

            ->defaultPaginationPageOption(5);
    }
}
<?php

namespace App\Filament\Widgets;

use App\Models\Agenda;
use App\Models\Book;
use App\Models\Event;
use App\Models\Teaching;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget as BaseStatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseStatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Agenda', Agenda::count())
                ->description('Éléments enregistrés')
                ->descriptionIcon(Heroicon::OutlinedCalendar)
                ->color('primary'),

            Stat::make('Évènements', Event::count())
                ->description('Évènements enregistrés')
                ->descriptionIcon(Heroicon::OutlinedCalendarDays)
                ->color('success'),

            Stat::make('Livres', Book::count())
                ->description('Livres disponibles')
                ->descriptionIcon(Heroicon::OutlinedBookOpen)
                ->color('warning'),

            Stat::make('Enseignements', Teaching::count())
                ->description('Enseignements publiés')
                ->descriptionIcon(Heroicon::OutlinedAcademicCap)
                ->color('info'),
        ];
    }
}
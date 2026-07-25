<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\EventsChartWidget;
use App\Filament\Widgets\LatestBooksWidget;
use App\Filament\Widgets\LatestEventsWidget;
use App\Filament\Widgets\LatestTeachingsWidget;
use App\Filament\Widgets\StatsOverviewWidget;
use App\Filament\Widgets\TodayAgendaWidget;
use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    protected static ?string $title = 'Tableau de bord';

    public function getWidgets(): array
    {
        return [
            StatsOverviewWidget::class,
            //EventsChartWidget::class,
            TodayAgendaWidget::class,
            LatestEventsWidget::class,
            LatestTeachingsWidget::class,
            LatestBooksWidget::class,
        ];
    }
}
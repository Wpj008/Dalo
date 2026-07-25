<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Widgets\ChartWidget;

class EventsChartWidget extends ChartWidget
{
    protected ?string $heading = 'Évènements par mois';

    protected int|string|array $columnSpan = 'full';

    protected function getData(): array
    {
        $data = [];

        for ($month = 1; $month <= 12; $month++) {
            $data[] = Event::whereYear('created_at', now()->year)
                ->whereMonth('created_at', $month)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Évènements',
                    'data' => $data,
                ],
            ],

            'labels' => [
                'Jan',
                'Fév',
                'Mar',
                'Avr',
                'Mai',
                'Juin',
                'Juil',
                'Août',
                'Sep',
                'Oct',
                'Nov',
                'Déc',
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
<?php

namespace App\Filament\Resources\AgendaTypes\Pages;

use App\Filament\Resources\AgendaTypes\AgendaTypeResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAgendaTypes extends ListRecords
{
    protected static string $resource = AgendaTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}

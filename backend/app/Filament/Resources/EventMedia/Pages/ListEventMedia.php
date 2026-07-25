<?php

namespace App\Filament\Resources\EventMedia\Pages;

use App\Filament\Resources\EventMedia\EventMediaResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListEventMedia extends ListRecords
{
    protected static string $resource = EventMediaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}

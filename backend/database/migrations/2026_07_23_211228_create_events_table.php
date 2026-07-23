<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {

            $table->id();

            $table->string('titre');

            $table->text('description')->nullable();

            $table->dateTime('date_debut');

            $table->dateTime('date_fin');

            $table->string('pays',100);

            $table->string('ville',100);

            $table->string('lieu');

            $table->string('image')->nullable();

            $table->foreignId('event_type_id')
                ->constrained('event_types')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->enum('statut',[
                'A_VENIR',
                'EN_COURS',
                'TERMINE'
            ])->default('A_VENIR');

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
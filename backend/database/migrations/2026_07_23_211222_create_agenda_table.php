<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agenda', function (Blueprint $table) {

            $table->id();

            $table->string('titre');

            $table->text('description')->nullable();

            $table->dateTime('date_debut');

            $table->dateTime('date_fin');

            $table->string('lieu')->nullable();

            $table->foreignId('agenda_type_id')
                ->constrained('agenda_types')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->enum('statut', [
                'PREVU',
                'ANNULE',
                'TERMINE'
            ])->default('PREVU');

            $table->boolean('is_public')->default(false);

            $table->foreignId('created_by')
                ->constrained('users')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agenda');
    }
};
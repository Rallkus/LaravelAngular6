<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (\Faker\Generator $faker) {

    return [
        'username' => str_replace('.', '', $faker->unique()->userName),
        'email' => $faker->unique()->safeEmail,
        'password' => 'secret',
        'bio' => $faker->sentence,
        'image' => 'https://cdn.worldvectorlogo.com/logos/laravel.svg',
    ];
});
$factory->define(App\Levels::class, function (\Faker\Generator $faker) {

    return [
        'required_experience' => 0,
    ];
});
$factory->define(App\Buffs::class, function (\Faker\Generator $faker) {

    return [
        'image' => 'http://localhost:8000/storage/strength.jpeg',
        'name' => str_replace('.', '', $faker->unique()->name),
        'description' => $faker->sentence,
        'initialValueReputation' => random_int(0,10),
        'initialValueGold' => random_int(15,20000),
        'valueType' => $faker->randomElement(["Agilidad","Fuerza","Inteligencia"]),
    ];
});

$factory->define(App\Article::class, function (\Faker\Generator $faker) {

    static $reduce = 999;

    return [
        'title' => $faker->sentence,
        'description' => $faker->sentence(10),
        'body' => $faker->paragraphs($faker->numberBetween(1, 3), true),
        'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--),
    ];
});

$factory->define(App\Comment::class, function (\Faker\Generator $faker) {

    static $users;
    static $reduce = 999;

    $users = $users ?: \App\User::all();

    return [
        'body' => $faker->paragraph($faker->numberBetween(1, 5)),
        'user_id' => $users->random()->id,
        'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--),
    ];
});

$factory->define(App\Tag::class, function (\Faker\Generator $faker) {

    return [
        'name' => $faker->unique()->word,
    ];
});


$factory->define(App\Players::class, function (\Faker\Generator $faker) {

    return [
        'username' => $faker->unique()->userName,
        'email' => $faker->unique()->safeEmail,
        'password' => 'secret',
        'image' => 'https://cdn.worldvectorlogo.com/logos/laravel.svg',
        'guilds_id' => function () {
            return factory(App\Guilds::class)->create()->id;
        },
        'gold' => random_int(150,200),
        'reputation' => random_int(5,10),
        'experience' => 0,
    ];
});
$factory->define(App\Heroes::class, function (\Faker\Generator $faker) {
    static $number = 1;
    return [
        'heroname' => str_replace('.', '', $faker->unique()->userName),
        'image' => 'https://cdn.worldvectorlogo.com/logos/laravel.svg',
        'gold' => random_int(150,200),
        'reputation' => random_int(5,10),
        'experience' => 0,
        'players_id' =>$number,
        'guilds_id' => random_int(1,20),
        'levels_id' => 1,
        'ranking' => $number++,
    ];
});
$factory->define(App\Guilds::class, function (\Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->userName,
        'image' => 'https://cdn.worldvectorlogo.com/logos/laravel.svg',
        'max_members' => 50,
    ];
});


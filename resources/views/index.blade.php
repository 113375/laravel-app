<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Главная</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        <style>
            .container{
                margin-left: 30px;
                margin-right: 30px;
                background-color: rebeccapurple;
            }
        </style>
    </head>
    <body class="antialiased">
        <div class="container">
            @for ($i = 0; $i < 20; $i++)
                {{$i}}
            @endfor
        </div>
    </body>
</html>

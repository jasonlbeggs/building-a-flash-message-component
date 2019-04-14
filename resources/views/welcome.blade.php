<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="p-8">
    <div id="app">
        <h1 class="font-bold text-2xl mb-3">Example Project</h1>

        <trigger-form></trigger-form>
        <flash-message></flash-message>
    </div>
</body>
</html>

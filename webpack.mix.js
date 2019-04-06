const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css')
  .options({
    postCss: [require('tailwindcss')],
  });

if (mix.inProduction()) {
  mix.options({
    postCss: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_:/]+/g) || [];
              }
            },
            extensions: ['html', 'vue', 'php'],
          },
        ],
      }),
    ],
  });
}

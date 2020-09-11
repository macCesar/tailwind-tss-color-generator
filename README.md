# tailwind-tss-color-generator

## UPDATE!!!
Please checkout my new [`purgeTSS`](https://github.com/macCesar/purgeTSS) CLI.

1. Just install it globally on your machine.
```bash
[sudo] npm i -g purgetss
```

2. Use any [`tailwind.tss`](https://github.com/macCesar/tailwind-tss-color-generator/blob/master/app/styles/tailwind.tss) or [`fontawesome.tss`](https://github.com/macCesar/tailwind-tss-color-generator/blob/master/app/styles/fontawesome.tss) classes in your views.

3. Run `purgetss` inside your project’s root folder before compiling your App.
```bash
purgetss [ -d, --dev ] [ --vendor ]
```

4. **And as simple as that, you’ll have a purged `app.tss` file with only the styles used in your App.**

**For more info check the [official repository](https://github.com/macCesar/purgeTSS)**

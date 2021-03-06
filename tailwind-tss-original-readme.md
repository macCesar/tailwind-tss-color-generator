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

### Important Notice!
> When you run `purgeTSS` for the first time it will back up your current `app.tss` file into `_app.tss`.
> 
> From now on, please use this file to add, update or delete your custom classes.
> 
> **Remember to re-run the script if you make changes to your views or your custom classes.**

**For more info check the [official repository](https://github.com/macCesar/purgeTSS)**

## Disclaimer
This is my first attempt at creating this utility. For now it has a small set of styles.

I will gradually add more styles and try to match them as close as possible to Titanium's properties.

## What is this utility?
In case you need ( or want ) to use [Tailwind CSS](https://tailwindcss.com/) in your [Titanium App](https://www.appcelerator.com/mobile-app-development-products/), you can use this small converter to generate a `tailwind.tss` file with the following styles:

## Layout
- ### Top / Right / Bottom / Left
	> For any element that uses the `'top'`, `'right'`, `'bottom'` and `'left'` properties.

## Typography
- ### Font Size
	> For any element that uses the `'fontSize'` property.

- ### Font Style
	> For any element that uses the `'fontStyle'` property.

- ### Font Weight
	> For any element that uses the `'fontWeight'` property.

- ### Placeholder Color
	> For any element that uses the `'hintTextColor'` property.

- ### Text Align
	> For any element that uses the `'textAlign'` property.

- ### Text Color
	> For any element that uses the `'color'` property.

- ### Vertical Align
	> For any element that uses the `'verticalAlign'` property.

## Backgrounds
- ### Background Color
	> For any element that uses the `'backgroundColor'` property.

## Borders
- ### Border Color
	> For any element that uses the `'borderColor'` property.

- ### Border Width
	> For any element that uses the `'borderWidth'` property.

- ### Border Radius
	> For any element that uses the `'borderRadius'` property.

## Spacing
- ### Padding
	> For any element that uses the `'padding'` property.

- ### Margin
	> For any element that uses the `'top'`, `'right'`, `'bottom'`, `'left'` properties.

## Sizing
- ### Width
	> For any element that uses the `'width'` property.

- ### Height
	> For any element that uses the `'height'` property.

## Effects
- ### Box Shadow
	> For any element that uses the `'viewShadowOffset'`, `'viewShadowRadius'` and `'viewShadowColor'` properties.

- ### Opacity
	> For any element that uses the `'opacity'` property.

## Instalation
Copy the content of `app/styles/tailwind.tss` file into your `app/styles/app.tss` file.

*The provided `app/styles/tailwind.tss` is what the script generates. You can also compile it locally yourself.*

### Or you can compile it locally

1. Download or clone this repository to your machine.

2. Unzip and cd into the directory

3. Install node modules with [npm](https://docs.npmjs.com/getting-started/what-is-npm)
```bash
npm install
```

4. run the script
```bash
npm run tailwind-tss
```

5. The main script will generate a new `tailwind.tss` file inside of `app/styles/` folder.

6. Copy the content of that file into your proyect's `app.tss` file.

## Other Useful Scripts
This script will generate a new `fontawesome.tss` file inside of `app/styles/` folder.

```bash
npm run fa-tss
```

This script will generate a new `fontawesome.js` file inside of `app/lib/` folder.

```bash
npm run fa-js
```

This script will copy the following [Font Awesome Fonts](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/fontawesome-free/webfonts) to your `app/assets/fonts` folder. With their names fixed to work with your iOS or Android Apps.

> FontAwesome5Brands-Regular.ttf
>
> FontAwesome5Free-Regular.ttf
>
> FontAwesome5Free-Solid.ttf

```bash
npm run fonts
```

Run all provided scripts.

```bash
npm run all
```

## Usage
```xml
<Alloy>
    <Window class="bg-yellow-50">
        <View class="h-auto mx-3 bg-blue-200 border-4 border-blue-600 rounded-lg">
            <View class="h-auto" layout="vertical">

                <Button class="mt-3 text-base text-indigo-700">This is an Indigo Button</Button>

                <Button class="text-xl text-red-700">This is an XL Red Button</Button>

                <Label class="text-2xl text-blue-700">This is a 2XL Blue Label</Label>

                <Button class="w-1/2 h-10 mt-4 ml-4 text-base text-white bg-blue-500 border-2 border-blue-600 rounded-lg">ML-4 Button</Button>

                <Button class="w-1/2 h-10 mt-4 mr-4 text-base text-white bg-blue-700 border-2 border-blue-800 rounded-lg">MR-4 Button</Button>

                <View class="h-auto mt-4 mb-1" layout="horizontal">
                    <Label class="w-1/4 h-8 text-xs text-center text-white bg-blue-900 opacity-25">opacity-25</Label>
                    <Label class="w-1/4 h-8 text-xs text-center text-white bg-blue-900 opacity-50">opacity-50</Label>
                    <Label class="w-1/4 h-8 text-xs text-center text-white bg-blue-900 opacity-75">opacity-75</Label>
                    <Label class="w-1/4 h-8 text-xs text-center text-white bg-blue-900 opacity-100">opacity-100</Label>
                </View>
            </View>
        </View>
    </Window>
</Alloy>
```

## iOS Example
<img src="app/assets/images/widths-heights-3.png" width="375" alt="iOS Screen - tailwind.tss Example" >

## More Examples
These examples are from the accompanying [Titanium App](https://github.com/macCesar/tailwind.tss-sample-app), showcasing the styles from [tailwind.tss](https://github.com/macCesar/tailwind-tss-color-generator/blob/master/app/styles/tailwind.tss) file.

<img src="app/assets/images/login-form-3.png" width="375" alt="iOS Screen - Login Form" > <img src="app/assets/images/customer-support-3.png" width="375" alt="iOS Screen - Customer Support" > <img src="app/assets/images/politico-3.png" width="375" alt="iOS Screen - Politico" > <img src="app/assets/images/nike-3.png" width="375" alt="iOS Screen - Nike" > <img src="app/assets/images/private-villa-3.png" width="375" alt="iOS Screen - Private Villa" > <img src="app/assets/images/card-content-3.png" width="375" alt="iOS Screen - Card Content" > <img src="app/assets/images/projects-3.png" width="375" alt="iOS Screen - Projects" > <img src="app/assets/images/detached-house-3.png" width="375" alt="iOS Screen - Detached House" >

## TODO
I'll try to convert more properties.

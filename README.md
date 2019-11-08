# tailwind-tss-color-generator

## Disclaimer
This is my first attempt at creating this utility. For now it has a small set of styles:
- fontSize
- color
- backgroundColor
- borderColor
- borderWidth
- borderRadius
- opacity

I will gradually add more styles and try to match them as close as possible to Titanium's properties.

## What is this utility
In case you need ( or want ) to use [tailwind's framework](https://tailwindcss.com/) in your Titanium App, you can use this small converter to generate an app.tss file with the following styles:

## Typography
- ### Font Size
	- For any element that uses the 'fontSize' property.

- ### Text Align
	- For any element that uses the 'textAlign' property.

- ### Text Color
	- For any element that uses the 'color' property.

## Backgrounds
- ### Background Color
	- For any element that uses the 'backgroundColor' property.

## Borders
- ### Border Color
	- For any element that uses the 'borderColor' property.

- ### Border Width
	- For any element that uses the 'borderWidth' property.

- ### Border Radius
	- For any element that uses the 'borderRadius' property.

## Effects
- ### Opacity
	- For any element that uses the 'opacity' property.

## Instalation
Copy [app.tss](https://github.com/macCesar/tailwind-tss-color-generator/blob/master/app.tss) to `/app/styles` directory, or add the contents manually.

The provided `app.tss` is what the script generates. You can also compile it locally yourself.

### Or you can compile it locally

1. Download or clone this repository to your machine.

2. Unzip and cd into the directory

3. Install node modules with [npm](https://docs.npmjs.com/getting-started/what-is-npm)
```bash
npm install
```

4. run the start script
```bash
npm start
```

5. The main script will generate a new app.tss file.

6. Copy the content of that file into your proyect's app.tss file.

## Usage
```xml
<Alloy>
    <Window class="bg-gray-200">
        <View class="bg-blue-200 border-blue-600 rounded-lg" height="300" left="10" right="10">
            <View layout="vertical" height="Ti.UI.SIZE">
                <Button class="text-indigo-700 text-base">This is an Indigo Button</Button>
                <Button class="text-green-700 text-xl">This is an XL Green Button</Button>
                <Label class="text-blue-700 text-2xl">This is a 2XL Blue Label</Label>

                <View height="Ti.UI.SIZE" top="10" width="Ti.UI.SIZE" layout="horizontal">
                    <Label class="border-blue-700 border-4 bg-gray-900 opacity-25 rounded-lg text-white text-center" width="200" height="50">Centered Text</Label>
                    <Label class="border-blue-700 border-4 bg-gray-900 opacity-50 rounded-lg text-white text-center" width="200" height="50">Centered Text</Label>
                </View>
            </View>
        </View>
    </Window>
</Alloy>

```

## iOS Example
![alt text](images/light-blue-centered.png "iOS Screen")

## TODO
I'll try to convert more properties.

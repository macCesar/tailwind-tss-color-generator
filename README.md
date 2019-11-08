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
        <View class="bg-blue-200 border-blue-600" height="200" left="10" right="10">
            <View layout="vertical" height="Ti.UI.SIZE">
                <Button class="text-indigo-600">This is an Indigo Button</Button>
                <Label class="text-blue-700">This is a Blue Label</Label>
            </View>
        </View>
    </Window>
</Alloy>
```

## iOS Example
![alt text](images/light-blue-sample.png "Light Blue Sample")

## TODO
I'll try to convert more properties.

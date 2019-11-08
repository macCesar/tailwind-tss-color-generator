# tailwind-tss-color-generator

### Disclaimer
This is my first attempt creating this utility.

### What is this
In case you need ( or want ) to use tailwind's colors in your Appcelerator Tianium App, you can use this small converter to generate an app.tss file with the following styles:

### text-colors
	For any element that uses the 'color' property.

### bg-colors
	For any element that uses the 'backgroundColor' property.

### border-colors
	For any element that uses the 'borderColor' property.

## Instalation

1. Donwload this repository to your machine.

2. unzip and cd into tailwind-tss-color-generator-master

3. Install node modules with [npm](https://docs.npmjs.com/getting-started/what-is-npm)
```bash
npm install
```

4. run the start script
```bash
npm start
```

5. The main script will generate an app.tss file inside the dist folder.

6. Copy the content of that file into your proyect's app.tss file.

## Usage
```xml
<Alloy>
    <Window class="bg-purple-300">
        <View class="bg-purple-400 border-purple-700" height="200" left="10" right="10">
            <View layout="vertical" height="Ti.UI.SIZE">
                <Button class="text-pink-900">This is a Pink Button</Button>
                <Label class="text-indigo-900">This is an Indigo Label</Label>
            </View>
        </View>
    </Window>
</Alloy>
```

## iOS Image
![alt text](images/ios-sample.png "Logo Title Text 1")


### TODO
I'm starting with colors, but I'll try to convert more properties, maybe font sizes, widths and heights, shadows, etc.

## Or just copy this generated styles 😉
```css
// Tailwind Colors for Titanium Properties
// Converted by César Estrada

// text colors
'.text-transparent': {
    color: 'transparent'
}

'.text-black': {
    color: '#000'
}

'.text-white': {
    color: '#fff'
}

'.text-gray-100': {
    color: '#f7fafc'
}

'.text-gray-200': {
    color: '#edf2f7'
}

'.text-gray-300': {
    color: '#e2e8f0'
}

'.text-gray-400': {
    color: '#cbd5e0'
}

'.text-gray-500': {
    color: '#a0aec0'
}

'.text-gray-600': {
    color: '#718096'
}

'.text-gray-700': {
    color: '#4a5568'
}

'.text-gray-800': {
    color: '#2d3748'
}

'.text-gray-900': {
    color: '#1a202c'
}

'.text-red-100': {
    color: '#fff5f5'
}

'.text-red-200': {
    color: '#fed7d7'
}

'.text-red-300': {
    color: '#feb2b2'
}

'.text-red-400': {
    color: '#fc8181'
}

'.text-red-500': {
    color: '#f56565'
}

'.text-red-600': {
    color: '#e53e3e'
}

'.text-red-700': {
    color: '#c53030'
}

'.text-red-800': {
    color: '#9b2c2c'
}

'.text-red-900': {
    color: '#742a2a'
}

'.text-orange-100': {
    color: '#fffaf0'
}

'.text-orange-200': {
    color: '#feebc8'
}

'.text-orange-300': {
    color: '#fbd38d'
}

'.text-orange-400': {
    color: '#f6ad55'
}

'.text-orange-500': {
    color: '#ed8936'
}

'.text-orange-600': {
    color: '#dd6b20'
}

'.text-orange-700': {
    color: '#c05621'
}

'.text-orange-800': {
    color: '#9c4221'
}

'.text-orange-900': {
    color: '#7b341e'
}

'.text-yellow-100': {
    color: '#fffff0'
}

'.text-yellow-200': {
    color: '#fefcbf'
}

'.text-yellow-300': {
    color: '#faf089'
}

'.text-yellow-400': {
    color: '#f6e05e'
}

'.text-yellow-500': {
    color: '#ecc94b'
}

'.text-yellow-600': {
    color: '#d69e2e'
}

'.text-yellow-700': {
    color: '#b7791f'
}

'.text-yellow-800': {
    color: '#975a16'
}

'.text-yellow-900': {
    color: '#744210'
}

'.text-green-100': {
    color: '#f0fff4'
}

'.text-green-200': {
    color: '#c6f6d5'
}

'.text-green-300': {
    color: '#9ae6b4'
}

'.text-green-400': {
    color: '#68d391'
}

'.text-green-500': {
    color: '#48bb78'
}

'.text-green-600': {
    color: '#38a169'
}

'.text-green-700': {
    color: '#2f855a'
}

'.text-green-800': {
    color: '#276749'
}

'.text-green-900': {
    color: '#22543d'
}

'.text-teal-100': {
    color: '#e6fffa'
}

'.text-teal-200': {
    color: '#b2f5ea'
}

'.text-teal-300': {
    color: '#81e6d9'
}

'.text-teal-400': {
    color: '#4fd1c5'
}

'.text-teal-500': {
    color: '#38b2ac'
}

'.text-teal-600': {
    color: '#319795'
}

'.text-teal-700': {
    color: '#2c7a7b'
}

'.text-teal-800': {
    color: '#285e61'
}

'.text-teal-900': {
    color: '#234e52'
}

'.text-blue-100': {
    color: '#ebf8ff'
}

'.text-blue-200': {
    color: '#bee3f8'
}

'.text-blue-300': {
    color: '#90cdf4'
}

'.text-blue-400': {
    color: '#63b3ed'
}

'.text-blue-500': {
    color: '#4299e1'
}

'.text-blue-600': {
    color: '#3182ce'
}

'.text-blue-700': {
    color: '#2b6cb0'
}

'.text-blue-800': {
    color: '#2c5282'
}

'.text-blue-900': {
    color: '#2a4365'
}

'.text-indigo-100': {
    color: '#ebf4ff'
}

'.text-indigo-200': {
    color: '#c3dafe'
}

'.text-indigo-300': {
    color: '#a3bffa'
}

'.text-indigo-400': {
    color: '#7f9cf5'
}

'.text-indigo-500': {
    color: '#667eea'
}

'.text-indigo-600': {
    color: '#5a67d8'
}

'.text-indigo-700': {
    color: '#4c51bf'
}

'.text-indigo-800': {
    color: '#434190'
}

'.text-indigo-900': {
    color: '#3c366b'
}

'.text-purple-100': {
    color: '#faf5ff'
}

'.text-purple-200': {
    color: '#e9d8fd'
}

'.text-purple-300': {
    color: '#d6bcfa'
}

'.text-purple-400': {
    color: '#b794f4'
}

'.text-purple-500': {
    color: '#9f7aea'
}

'.text-purple-600': {
    color: '#805ad5'
}

'.text-purple-700': {
    color: '#6b46c1'
}

'.text-purple-800': {
    color: '#553c9a'
}

'.text-purple-900': {
    color: '#44337a'
}

'.text-pink-100': {
    color: '#fff5f7'
}

'.text-pink-200': {
    color: '#fed7e2'
}

'.text-pink-300': {
    color: '#fbb6ce'
}

'.text-pink-400': {
    color: '#f687b3'
}

'.text-pink-500': {
    color: '#ed64a6'
}

'.text-pink-600': {
    color: '#d53f8c'
}

'.text-pink-700': {
    color: '#b83280'
}

'.text-pink-800': {
    color: '#97266d'
}

'.text-pink-900': {
    color: '#702459'
}


// bg colors
'.bg-transparent': {
    backgroundColor: 'transparent'
}

'.bg-black': {
    backgroundColor: '#000'
}

'.bg-white': {
    backgroundColor: '#fff'
}

'.bg-gray-100': {
    backgroundColor: '#f7fafc'
}

'.bg-gray-200': {
    backgroundColor: '#edf2f7'
}

'.bg-gray-300': {
    backgroundColor: '#e2e8f0'
}

'.bg-gray-400': {
    backgroundColor: '#cbd5e0'
}

'.bg-gray-500': {
    backgroundColor: '#a0aec0'
}

'.bg-gray-600': {
    backgroundColor: '#718096'
}

'.bg-gray-700': {
    backgroundColor: '#4a5568'
}

'.bg-gray-800': {
    backgroundColor: '#2d3748'
}

'.bg-gray-900': {
    backgroundColor: '#1a202c'
}

'.bg-red-100': {
    backgroundColor: '#fff5f5'
}

'.bg-red-200': {
    backgroundColor: '#fed7d7'
}

'.bg-red-300': {
    backgroundColor: '#feb2b2'
}

'.bg-red-400': {
    backgroundColor: '#fc8181'
}

'.bg-red-500': {
    backgroundColor: '#f56565'
}

'.bg-red-600': {
    backgroundColor: '#e53e3e'
}

'.bg-red-700': {
    backgroundColor: '#c53030'
}

'.bg-red-800': {
    backgroundColor: '#9b2c2c'
}

'.bg-red-900': {
    backgroundColor: '#742a2a'
}

'.bg-orange-100': {
    backgroundColor: '#fffaf0'
}

'.bg-orange-200': {
    backgroundColor: '#feebc8'
}

'.bg-orange-300': {
    backgroundColor: '#fbd38d'
}

'.bg-orange-400': {
    backgroundColor: '#f6ad55'
}

'.bg-orange-500': {
    backgroundColor: '#ed8936'
}

'.bg-orange-600': {
    backgroundColor: '#dd6b20'
}

'.bg-orange-700': {
    backgroundColor: '#c05621'
}

'.bg-orange-800': {
    backgroundColor: '#9c4221'
}

'.bg-orange-900': {
    backgroundColor: '#7b341e'
}

'.bg-yellow-100': {
    backgroundColor: '#fffff0'
}

'.bg-yellow-200': {
    backgroundColor: '#fefcbf'
}

'.bg-yellow-300': {
    backgroundColor: '#faf089'
}

'.bg-yellow-400': {
    backgroundColor: '#f6e05e'
}

'.bg-yellow-500': {
    backgroundColor: '#ecc94b'
}

'.bg-yellow-600': {
    backgroundColor: '#d69e2e'
}

'.bg-yellow-700': {
    backgroundColor: '#b7791f'
}

'.bg-yellow-800': {
    backgroundColor: '#975a16'
}

'.bg-yellow-900': {
    backgroundColor: '#744210'
}

'.bg-green-100': {
    backgroundColor: '#f0fff4'
}

'.bg-green-200': {
    backgroundColor: '#c6f6d5'
}

'.bg-green-300': {
    backgroundColor: '#9ae6b4'
}

'.bg-green-400': {
    backgroundColor: '#68d391'
}

'.bg-green-500': {
    backgroundColor: '#48bb78'
}

'.bg-green-600': {
    backgroundColor: '#38a169'
}

'.bg-green-700': {
    backgroundColor: '#2f855a'
}

'.bg-green-800': {
    backgroundColor: '#276749'
}

'.bg-green-900': {
    backgroundColor: '#22543d'
}

'.bg-teal-100': {
    backgroundColor: '#e6fffa'
}

'.bg-teal-200': {
    backgroundColor: '#b2f5ea'
}

'.bg-teal-300': {
    backgroundColor: '#81e6d9'
}

'.bg-teal-400': {
    backgroundColor: '#4fd1c5'
}

'.bg-teal-500': {
    backgroundColor: '#38b2ac'
}

'.bg-teal-600': {
    backgroundColor: '#319795'
}

'.bg-teal-700': {
    backgroundColor: '#2c7a7b'
}

'.bg-teal-800': {
    backgroundColor: '#285e61'
}

'.bg-teal-900': {
    backgroundColor: '#234e52'
}

'.bg-blue-100': {
    backgroundColor: '#ebf8ff'
}

'.bg-blue-200': {
    backgroundColor: '#bee3f8'
}

'.bg-blue-300': {
    backgroundColor: '#90cdf4'
}

'.bg-blue-400': {
    backgroundColor: '#63b3ed'
}

'.bg-blue-500': {
    backgroundColor: '#4299e1'
}

'.bg-blue-600': {
    backgroundColor: '#3182ce'
}

'.bg-blue-700': {
    backgroundColor: '#2b6cb0'
}

'.bg-blue-800': {
    backgroundColor: '#2c5282'
}

'.bg-blue-900': {
    backgroundColor: '#2a4365'
}

'.bg-indigo-100': {
    backgroundColor: '#ebf4ff'
}

'.bg-indigo-200': {
    backgroundColor: '#c3dafe'
}

'.bg-indigo-300': {
    backgroundColor: '#a3bffa'
}

'.bg-indigo-400': {
    backgroundColor: '#7f9cf5'
}

'.bg-indigo-500': {
    backgroundColor: '#667eea'
}

'.bg-indigo-600': {
    backgroundColor: '#5a67d8'
}

'.bg-indigo-700': {
    backgroundColor: '#4c51bf'
}

'.bg-indigo-800': {
    backgroundColor: '#434190'
}

'.bg-indigo-900': {
    backgroundColor: '#3c366b'
}

'.bg-purple-100': {
    backgroundColor: '#faf5ff'
}

'.bg-purple-200': {
    backgroundColor: '#e9d8fd'
}

'.bg-purple-300': {
    backgroundColor: '#d6bcfa'
}

'.bg-purple-400': {
    backgroundColor: '#b794f4'
}

'.bg-purple-500': {
    backgroundColor: '#9f7aea'
}

'.bg-purple-600': {
    backgroundColor: '#805ad5'
}

'.bg-purple-700': {
    backgroundColor: '#6b46c1'
}

'.bg-purple-800': {
    backgroundColor: '#553c9a'
}

'.bg-purple-900': {
    backgroundColor: '#44337a'
}

'.bg-pink-100': {
    backgroundColor: '#fff5f7'
}

'.bg-pink-200': {
    backgroundColor: '#fed7e2'
}

'.bg-pink-300': {
    backgroundColor: '#fbb6ce'
}

'.bg-pink-400': {
    backgroundColor: '#f687b3'
}

'.bg-pink-500': {
    backgroundColor: '#ed64a6'
}

'.bg-pink-600': {
    backgroundColor: '#d53f8c'
}

'.bg-pink-700': {
    backgroundColor: '#b83280'
}

'.bg-pink-800': {
    backgroundColor: '#97266d'
}

'.bg-pink-900': {
    backgroundColor: '#702459'
}


// border colors
'.border-transparent': {
    borderColor: 'transparent'
}

'.border-black': {
    borderColor: '#000'
}

'.border-white': {
    borderColor: '#fff'
}

'.border-gray-100': {
    borderColor: '#f7fafc'
}

'.border-gray-200': {
    borderColor: '#edf2f7'
}

'.border-gray-300': {
    borderColor: '#e2e8f0'
}

'.border-gray-400': {
    borderColor: '#cbd5e0'
}

'.border-gray-500': {
    borderColor: '#a0aec0'
}

'.border-gray-600': {
    borderColor: '#718096'
}

'.border-gray-700': {
    borderColor: '#4a5568'
}

'.border-gray-800': {
    borderColor: '#2d3748'
}

'.border-gray-900': {
    borderColor: '#1a202c'
}

'.border-red-100': {
    borderColor: '#fff5f5'
}

'.border-red-200': {
    borderColor: '#fed7d7'
}

'.border-red-300': {
    borderColor: '#feb2b2'
}

'.border-red-400': {
    borderColor: '#fc8181'
}

'.border-red-500': {
    borderColor: '#f56565'
}

'.border-red-600': {
    borderColor: '#e53e3e'
}

'.border-red-700': {
    borderColor: '#c53030'
}

'.border-red-800': {
    borderColor: '#9b2c2c'
}

'.border-red-900': {
    borderColor: '#742a2a'
}

'.border-orange-100': {
    borderColor: '#fffaf0'
}

'.border-orange-200': {
    borderColor: '#feebc8'
}

'.border-orange-300': {
    borderColor: '#fbd38d'
}

'.border-orange-400': {
    borderColor: '#f6ad55'
}

'.border-orange-500': {
    borderColor: '#ed8936'
}

'.border-orange-600': {
    borderColor: '#dd6b20'
}

'.border-orange-700': {
    borderColor: '#c05621'
}

'.border-orange-800': {
    borderColor: '#9c4221'
}

'.border-orange-900': {
    borderColor: '#7b341e'
}

'.border-yellow-100': {
    borderColor: '#fffff0'
}

'.border-yellow-200': {
    borderColor: '#fefcbf'
}

'.border-yellow-300': {
    borderColor: '#faf089'
}

'.border-yellow-400': {
    borderColor: '#f6e05e'
}

'.border-yellow-500': {
    borderColor: '#ecc94b'
}

'.border-yellow-600': {
    borderColor: '#d69e2e'
}

'.border-yellow-700': {
    borderColor: '#b7791f'
}

'.border-yellow-800': {
    borderColor: '#975a16'
}

'.border-yellow-900': {
    borderColor: '#744210'
}

'.border-green-100': {
    borderColor: '#f0fff4'
}

'.border-green-200': {
    borderColor: '#c6f6d5'
}

'.border-green-300': {
    borderColor: '#9ae6b4'
}

'.border-green-400': {
    borderColor: '#68d391'
}

'.border-green-500': {
    borderColor: '#48bb78'
}

'.border-green-600': {
    borderColor: '#38a169'
}

'.border-green-700': {
    borderColor: '#2f855a'
}

'.border-green-800': {
    borderColor: '#276749'
}

'.border-green-900': {
    borderColor: '#22543d'
}

'.border-teal-100': {
    borderColor: '#e6fffa'
}

'.border-teal-200': {
    borderColor: '#b2f5ea'
}

'.border-teal-300': {
    borderColor: '#81e6d9'
}

'.border-teal-400': {
    borderColor: '#4fd1c5'
}

'.border-teal-500': {
    borderColor: '#38b2ac'
}

'.border-teal-600': {
    borderColor: '#319795'
}

'.border-teal-700': {
    borderColor: '#2c7a7b'
}

'.border-teal-800': {
    borderColor: '#285e61'
}

'.border-teal-900': {
    borderColor: '#234e52'
}

'.border-blue-100': {
    borderColor: '#ebf8ff'
}

'.border-blue-200': {
    borderColor: '#bee3f8'
}

'.border-blue-300': {
    borderColor: '#90cdf4'
}

'.border-blue-400': {
    borderColor: '#63b3ed'
}

'.border-blue-500': {
    borderColor: '#4299e1'
}

'.border-blue-600': {
    borderColor: '#3182ce'
}

'.border-blue-700': {
    borderColor: '#2b6cb0'
}

'.border-blue-800': {
    borderColor: '#2c5282'
}

'.border-blue-900': {
    borderColor: '#2a4365'
}

'.border-indigo-100': {
    borderColor: '#ebf4ff'
}

'.border-indigo-200': {
    borderColor: '#c3dafe'
}

'.border-indigo-300': {
    borderColor: '#a3bffa'
}

'.border-indigo-400': {
    borderColor: '#7f9cf5'
}

'.border-indigo-500': {
    borderColor: '#667eea'
}

'.border-indigo-600': {
    borderColor: '#5a67d8'
}

'.border-indigo-700': {
    borderColor: '#4c51bf'
}

'.border-indigo-800': {
    borderColor: '#434190'
}

'.border-indigo-900': {
    borderColor: '#3c366b'
}

'.border-purple-100': {
    borderColor: '#faf5ff'
}

'.border-purple-200': {
    borderColor: '#e9d8fd'
}

'.border-purple-300': {
    borderColor: '#d6bcfa'
}

'.border-purple-400': {
    borderColor: '#b794f4'
}

'.border-purple-500': {
    borderColor: '#9f7aea'
}

'.border-purple-600': {
    borderColor: '#805ad5'
}

'.border-purple-700': {
    borderColor: '#6b46c1'
}

'.border-purple-800': {
    borderColor: '#553c9a'
}

'.border-purple-900': {
    borderColor: '#44337a'
}

'.border-pink-100': {
    borderColor: '#fff5f7'
}

'.border-pink-200': {
    borderColor: '#fed7e2'
}

'.border-pink-300': {
    borderColor: '#fbb6ce'
}

'.border-pink-400': {
    borderColor: '#f687b3'
}

'.border-pink-500': {
    borderColor: '#ed64a6'
}

'.border-pink-600': {
    borderColor: '#d53f8c'
}

'.border-pink-700': {
    borderColor: '#b83280'
}

'.border-pink-800': {
    borderColor: '#97266d'
}

'.border-pink-900': {
    borderColor: '#702459'
}
```

const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const tailwindColors = require('tailwindcss/stubs/defaultConfig.stub').theme.colors;

(function constructor() {
	'use strict';

	tailwindGenerator();
}());

function tailwindGenerator() {

	const prefixAndPropierties = {
		text: 'color',
		bg: 'backgroundColor',
		border: 'borderColor',
		// extras
		// bar: 'barColor',
		// pin: 'pincolor',
		// fill: 'fillColor',
		// badge: 'badgeColor',
		// light: 'lightColor',
		// title: 'titleColor',
		// marker: 'markerColor',
		// shadow: 'shadowColor',
		// stroke: 'strokeColor',
		// navTint: 'navTintColor',
		// touchFeedback: 'touchFeedbackColor',
	};

	let convertedStyles = '// Tailwind Colors for Titanium Properties\n';

	convertedStyles += '// Converted by César Estrada\n';

	_.each(prefixAndPropierties, (property, prefix) => {
		convertedStyles += `\n// ${prefix} colors\n`;

		_.each(tailwindColors, (hexValue, name) => {
			if (typeof hexValue === 'string') {
				convertedStyles += `'.${prefix}-${name}':{${property}:'${hexValue}'}\n`;
			} else {
				_.each(hexValue, (shadeValue, shadeName) => {
					convertedStyles += `'.${prefix}-${name}-${shadeName}':{${property}:'${shadeValue}'}\n`;
				});
			}
		});
	});

	saveFile(convertedStyles);
}

function saveFile(data) {
	if (!fs.existsSync(path.join(__dirname, '/dist'))) {
		fs.mkdirSync(path.join(__dirname, '/dist'), {}, err => {
			throw err;
		});
	}

	fs.writeFileSync(path.join(__dirname, '/dist', 'app.tss'), data, err => {
		throw err;
	});

	console.log('"app.tss" file created in "dist" Folder!');
}

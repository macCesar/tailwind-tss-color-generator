(function constructor() {
	'use strict';

	const helpers = require('./lib/helpers');

	const defaultConfigTheme = require('tailwindcss/stubs/defaultConfig.stub').theme;

	let convertedStyles = '// Tailwind CSS: A utility-first CSS framework for rapidly building custom designs. ( https://tailwindcss.com )\n// Created by Adam Wathan ( https://twitter.com/adamwathan ).\n';

	convertedStyles += '\n// Tailwind for Titanium\n// Converted by César Estrada\n';

	convertedStyles += '// https://github.com/macCesar/tailwind-tss-color-generator\n';

	// Reset Styles ( Preflight in Tailwind lingo )
	// Some reseting has to be so everything else work as intended.
	convertedStyles += helpers.resetStyles();

	// Colors: text-, bg-, border-, placeholder-
	convertedStyles += helpers.colors(defaultConfigTheme.colors);

	// Object Position
	convertedStyles += helpers.placement();

	// Font Sizes
	convertedStyles += helpers.fontSize(defaultConfigTheme.fontSize);

	// Font Style ( iOS Only )
	convertedStyles += helpers.fontStyle();

	// Font Weight ( iOS Only )
	convertedStyles += helpers.fontWeight(defaultConfigTheme.fontWeight);

	// Text Align
	convertedStyles += helpers.textAlign();

	// Border Radius
	convertedStyles += helpers.borderRadius(defaultConfigTheme.borderRadius);

	// Border Radius ( Extra Styles )
	convertedStyles += helpers.borderRadiusExtraStyles(defaultConfigTheme.spacing);

	// Border Width
	convertedStyles += helpers.borderWidth(defaultConfigTheme.borderWidth);

	// Margin
	convertedStyles += helpers.margin(defaultConfigTheme.spacing);

	// Padding
	convertedStyles += helpers.padding(defaultConfigTheme.spacing);

	// Sizing
	convertedStyles += helpers.width(defaultConfigTheme.width(theme => ({ spacing: defaultConfigTheme.spacing })));

	convertedStyles += helpers.height(defaultConfigTheme.height(theme => ({ spacing: defaultConfigTheme.spacing })));

	// Box Shadow ( iOS Only )
	convertedStyles += helpers.shadow(defaultConfigTheme.boxShadow);

	// Opacity
	convertedStyles += helpers.opacity(defaultConfigTheme.opacity);

	saveFile(convertedStyles);
}());

function saveFile(data) {
	const fs = require('fs');

	fs.writeFileSync('app.tss', data, err => {
		throw err;
	});

	console.log('"app.tss" file created!');
}

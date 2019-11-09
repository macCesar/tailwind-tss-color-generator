(function constructor() {
	'use strict';

	const helpers = require('./lib/helpers');
	const defaultConfigTheme = require('tailwindcss/stubs/defaultConfig.stub').theme;

	let convertedStyles = '// Tailwind for Titanium\n// Converted by César Estrada\n';

	// Colors
	convertedStyles += helpers.colors(defaultConfigTheme.colors);

	// Object Position
	convertedStyles += helpers.placement();

	// Font Sizes
	convertedStyles += helpers.fontSize(defaultConfigTheme.fontSize);

	// Font Style ( iOS Only )
	convertedStyles += helpers.fontStyle();

	// Font Weight ( iOS Only )
	convertedStyles += helpers.fontWeight();

	// Text Align
	convertedStyles += helpers.textAlign();

	// Border Radius
	convertedStyles += helpers.borderRadius(defaultConfigTheme.borderRadius);

	// Border Width
	convertedStyles += helpers.borderWidth(defaultConfigTheme.borderWidth);

	// Spacing
	convertedStyles += helpers.margin(defaultConfigTheme.spacing);

	// Sizing
	convertedStyles += helpers.width(defaultConfigTheme.width(theme => ({ spacing: defaultConfigTheme.spacing })));
	convertedStyles += helpers.height(defaultConfigTheme.height(theme => ({ spacing: defaultConfigTheme.spacing })));

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

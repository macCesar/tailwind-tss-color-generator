(function constructor() {
	'use strict';

	const helpers = require('./lib/helpers');

	const defaultConfigTheme = require('tailwindcss/stubs/defaultConfig.stub').theme;

	let convertedStyles = '// Tailwind for Titanium\n// Converted by César Estrada\n';

	// Reset Styles ( Preflight in Tailwind lingo )
	// Some reseting has to be so everything else work as intented.
	convertedStyles += helpers.resetStyles();

	// Colors
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
	convertedStyles += helpers.shadow();

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

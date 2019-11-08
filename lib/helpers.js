const _ = require('underscore');

function colors(tailwindColors) {
	const modifiersAndProperties = {
		text: 'color',
		bg: 'backgroundColor',
		border: 'borderColor'
	};

	let convertedStyles = '\n// Tailwind Colors';

	_.each(modifiersAndProperties, (property, modifier) => {
		convertedStyles += '\n';
		_.each(tailwindColors, (hexValue, name) => {
			if (typeof hexValue === 'string') {
				convertedStyles += `'.${modifier}-${name}':{${property}:'${hexValue}'}\n`;
			} else {
				_.each(hexValue, (shadeValue, shadeName) => {
					convertedStyles += `'.${modifier}-${name}-${shadeName}':{${property}:'${shadeValue}'}\n`;
				});
			}
		});
	});

	return convertedStyles;
}
exports.colors = colors;

function fontSize(tailwindFontSizes) {
	let convertedStyles = '\n// Font Sizes\n';
	_.each(tailwindFontSizes, (value, modifier) => {
		convertedStyles += `'.text-${modifier}':{font:{fontSize:${16 * parseFloat(value)}}}\n`;
	});

	return convertedStyles;
}
exports.fontSize = fontSize;

function borderRadius(tailwindBorderRadius) {
	let convertedStyles = '\n// Border Radius\n';
	_.each(tailwindBorderRadius, (value, modifier) => {
		if (modifier === 'default') {
			convertedStyles += `'.rounded':{borderRadius:${16 * parseFloat(value)}}\n`;
		} else {
			convertedStyles += `'.rounded-${modifier}':{borderRadius:${16 * parseFloat(value)}}\n`;
		}
	});

	return convertedStyles;
}
exports.borderRadius = borderRadius;

function borderWidth(tailwindBorderWidth) {
	let convertedStyles = '\n// Border Width\n';
	_.each(tailwindBorderWidth, (value, modifier) => {
		if (modifier === 'default') {
			convertedStyles += `'.border':{borderWidth:${parseInt(value)}}\n`;
		} else {
			convertedStyles += `'.border-${modifier}':{borderWidth:${parseInt(value)}}\n`;
		}
	});

	return convertedStyles;
}
exports.borderWidth = borderWidth;

function opacity(tailwindOpacity) {
	let convertedStyles = '\n// Opacity\n';
	_.each(tailwindOpacity, (value, modifier) => {
		convertedStyles += `'.opacity-${modifier}':{opacity:${parseFloat(value)}}\n`;
	});

	return convertedStyles;
}
exports.opacity = opacity;

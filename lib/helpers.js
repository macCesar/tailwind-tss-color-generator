const _ = require('underscore');

function colors(tailwindColors) {
	const modifiersAndProperties = {
		text: 'color',
		bg: 'backgroundColor',
		border: 'borderColor'
	};

	let convertedStyles = '\n// Colors';

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

function textAlign() {
	const alignments = {
		left: 'Ti.UI.TEXT_ALIGNMENT_LEFT',
		center: 'Ti.UI.TEXT_ALIGNMENT_CENTER',
		right: 'Ti.UI.TEXT_ALIGNMENT_RIGHT',
		justify: 'Ti.UI.TEXT_ALIGNMENT_JUSTIFY',
	};

	let convertedStyles = '\n// Text Alignment\n';

	_.each(alignments, (value, modifier) => {
		convertedStyles += `'.text-${modifier}':{textAlign:${value}}\n`;
	});

	return convertedStyles;
}
exports.textAlign = textAlign;

function placement() {
	const objectPosition = {
		'inset-0': 'top: 0, right: 0, bottom: 0, left: 0',
		'inset-y-0': 'top: 0, bottom: 0',
		'inset-x-0': 'right: 0, left: 0',
		'top-0': 'top: 0',
		'right-0': 'right: 0',
		'bottom-0': 'bottom: 0',
		'left-0': 'left: 0',
		'inset-auto': 'top: null, right: null, bottom: null, left: null',
		'inset-y-auto': 'top: null, bottom: null',
		'inset-x-auto': 'right: null, left: null',
		'top-auto': 'top: null',
		'bottom-auto': 'bottom: null',
		'left-auto': 'left: null',
		'right-auto': 'right: null'
	}
	let convertedStyles = '\n// Top / Right / Bottom / Left\n';

	_.each(objectPosition, (value, modifier) => {
		convertedStyles += `'.${modifier}':{${value}}\n`;
	});

	return convertedStyles;
}
exports.placement = placement;

function margin(spacing) {
	const objectPosition = {
		'm': ['top', 'right', 'bottom', 'left'],

		'mx': ['right', 'left'],
		'my': ['top', 'bottom'],

		'mt': ['top'],
		'mb': ['bottom'],

		'ml': ['left'],
		'mr': ['right'],
	}

	let convertedStyles = '\n// Margin\n';

	_.each(objectPosition, (value, modifier) => {
		// Positive numbers
		_.each(spacing, (spacingValue, spacingModifier) => {
			let sides = '';

			_.each(value, position => {
				if (spacingModifier === 'px') {
					sides += `${position}:1,`;
				} else {
					sides += `${position}:${16 * parseFloat(spacingValue)},`;
				}
			});

			sides = remove_last_character(sides);

			convertedStyles += `'.${modifier}-${spacingModifier}':{${sides}}\n`;
		});

		// Negative numbers
		_.each(spacing, (spacingValue, spacingModifier) => {
			let sides = '';

			_.each(value, position => {
				if (parseFloat(spacingValue) !== 0) {
					if (spacingModifier === 'px') {
						sides += `${position}:-1,`;
					} else {
						sides += `${position}:${-16 * parseFloat(spacingValue)},`;
					}
				}
			});

			sides = remove_last_character(sides);

			if (`'.-${modifier}-${spacingModifier}':{${sides}}` !== `'.-${modifier}-${spacingModifier}':{}`) {
				convertedStyles += `'.-${modifier}-${spacingModifier}':{${sides}}\n`;
			}
		});

		// auto
		let sides = '';

		_.each(value, position => {
			sides += `${position}:null,`;
		});

		sides = remove_last_character(sides);

		convertedStyles += `'.-${modifier}-auto':{${sides}}\n`;
	});

	return convertedStyles;
}
exports.margin = margin;

function remove_last_character(element) {
	return element.slice(0, element.length - 1)
}

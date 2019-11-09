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
				convertedStyles += `'.${modifier}-${name}': { ${property}: '${hexValue}' }\n`;
			} else {
				_.each(hexValue, (shadeValue, shadeName) => {
					convertedStyles += `'.${modifier}-${name}-${shadeName}': { ${property}: '${shadeValue}' }\n`;
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
		convertedStyles += `'.text-${modifier}': { font: { fontSize: ${16 * parseFloat(value)} } }\n`;
	});

	return convertedStyles;
}
exports.fontSize = fontSize;

function fontStyle() {
	let convertedStyles = '\n// Font Style ( iOS Only )\n';

	convertedStyles += `'.italic[platform=ios]': { font: { fontStyle: 'italic' } }\n`;

	convertedStyles += `'.not-italic[platform=ios]': { font: { fontStyle: 'normal' } }\n`;

	return convertedStyles;
}
exports.fontStyle = fontStyle;

function fontWeight() {
	// Valid values are "bold", "semibold", "normal", "thin", "light" and "ultralight".

	let convertedStyles = '\n// Font Weight ( iOS Only )\n';

	convertedStyles += `'.font-hairline[platform=ios]': { font: { fontWeight: 'ultralight' } }\n`;
	convertedStyles += `'.font-thin[platform=ios]': { font: { fontWeight: 'thin' } }\n`;
	convertedStyles += `'.font-light[platform=ios]': { font: { fontWeight: 'light' } }\n`;
	convertedStyles += `'.font-normal[platform=ios]': { font: { fontWeight: 'normal' } }\n`;
	convertedStyles += `'.font-medium[platform=ios]': { font: { fontWeight: 'normal' } }\n`;

	convertedStyles += `'.font-semibold[platform=ios]': { font: { fontWeight: 'semibold' } }\n`;
	convertedStyles += `'.font-bold[platform=ios]': { font: { fontWeight: 'bold' } }\n`;
	convertedStyles += `'.font-extrabold[platform=ios]': { font: { fontWeight: 'bold' } }\n`;
	convertedStyles += `'.font-black[platform=ios]': { font: { fontWeight: 'bold' } }\n`;

	return convertedStyles;
}
exports.fontWeight = fontWeight;

function borderRadius(tailwindBorderRadius) {
	let convertedStyles = '\n// Border Radius\n';

	_.each(tailwindBorderRadius, (value, modifier) => {
		if (modifier === 'default') {
			convertedStyles += `'.rounded': { borderRadius: ${16 * parseFloat(value)} }\n`;
		} else {
			convertedStyles += `'.rounded-${modifier}': { borderRadius: ${16 * parseFloat(value)} }\n`;
		}
	});

	return convertedStyles;
}
exports.borderRadius = borderRadius;

function borderWidth(tailwindBorderWidth) {
	let convertedStyles = '\n// Border Width\n';

	_.each(tailwindBorderWidth, (value, modifier) => {
		if (modifier === 'default') {
			convertedStyles += `'.border': { borderWidth: ${parseInt(value)} }\n`;
		} else {
			convertedStyles += `'.border-${modifier}': { borderWidth: ${parseInt(value)} }\n`;
		}
	});

	return convertedStyles;
}
exports.borderWidth = borderWidth;

function opacity(tailwindOpacity) {
	let convertedStyles = '\n// Opacity\n';

	_.each(tailwindOpacity, (value, modifier) => {
		convertedStyles += `'.opacity-${modifier}': { opacity: ${parseFloat(value)} }\n`;
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
		convertedStyles += `'.text-${modifier}': { textAlign: ${value} }\n`;
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
		convertedStyles += `'.${modifier}': { ${value} }\n`;
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
					sides += ` ${position}: 1,`;
				} else {
					sides += ` ${position}: ${16 * parseFloat(spacingValue)},`;
				}
			});

			sides = remove_last_character(sides);

			convertedStyles += `'.${modifier}-${spacingModifier}': {${sides} }\n`;
		});

		// Negative numbers
		_.each(spacing, (spacingValue, spacingModifier) => {
			let sides = '';

			_.each(value, position => {
				if (parseFloat(spacingValue) !== 0) {
					if (spacingModifier === 'px') {
						sides += ` ${position}: -1,`;
					} else {
						sides += ` ${position}: ${-16 * parseFloat(spacingValue)},`;
					}
				}
			});

			sides = remove_last_character(sides);

			if (`'.-${modifier}-${spacingModifier}': { ${sides}}` !== `'.-${modifier}-${spacingModifier}': { }`) {
				convertedStyles += `'.-${modifier}-${spacingModifier}': {${sides} }\n`;
			}
		});

		// auto
		let sides = '';

		_.each(value, position => {
			sides += ` ${position}: null,`;
		});

		sides = remove_last_character(sides);

		convertedStyles += `'.-${modifier}-auto': {${sides} }\n`;
	});

	return convertedStyles;
}
exports.margin = margin;

function width(widths) {
	return processElements({ data: widths, header: 'Widths', mainModifier: 'w', mainProperty: 'width' });
}
exports.width = width;

function height(heights) {
	return processElements({ data: heights, header: 'Heights', mainModifier: 'h', mainProperty: 'height' });
}
exports.height = height;

function processElements(object) {
	let convertedStyles = `\n// ${object.header}\n`;

	_.each(object.data.spacing, (spacingValue, spacingModifier) => {
		if (spacingModifier === 'px') {
			convertedStyles += `'.${object.mainModifier}-${spacingModifier}': { ${object.mainProperty}: 1 }\n`;
		} else {
			convertedStyles += `'.${object.mainModifier}-${spacingModifier}': { ${object.mainProperty}: ${16 * parseFloat(spacingValue)} }\n`;
		}
	});

	_.each(object.data, (value, modifier) => {
		if (typeof value === 'string') {
			if (modifier === 'screen') {
				convertedStyles += `'.${object.mainModifier}-${modifier}': { ${object.mainProperty}: Ti.UI.FILL }\n`;
			} else if (modifier === 'auto') {
				convertedStyles += `'.${object.mainModifier}-${modifier}': { ${object.mainProperty}: Ti.UI.SIZE }\n`;
			} else {
				convertedStyles += `'.${object.mainModifier}-${modifier}': { ${object.mainProperty}: '${value}' }\n`;
			}
		}
	});

	return convertedStyles;
}
function remove_last_character(element) {
	return element.slice(0, element.length - 1)
}

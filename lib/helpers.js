const _ = require('underscore');

function colors(tailwindColors) {
	const rulesAndProperties = {
		'text-': 'color',
		'bg-': 'backgroundColor',
		'border-': 'borderColor',
		'placeholder-': 'hintTextColor'
	};

	let convertedStyles = '\n// Colors';

	_.each(rulesAndProperties, (property, rule) => {
		convertedStyles += '\n';
		_.each(tailwindColors, (hexValue, modifier) => {
			if (typeof hexValue === 'string') {
				convertedStyles += newClass(rule, modifier, property, `'${hexValue}'`);
			} else {
				_.each(hexValue, (shadeValue, shadeName) => {
					convertedStyles += newClass(rule, modifier + '-' + shadeName, property, `'${shadeValue}'`);
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
		convertedStyles += newClass('text-', modifier, 'font: { fontSize', 16 * parseFloat(value) + ' }');
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

function fontWeight(fontWeights) {
	// Valid values are "bold", "semibold", "normal", "thin", "light" and "ultralight".
	const invalidValues = {
		black: 'bold',
		medium: 'normal',
		extrabold: 'bold',
		hairline: 'ultralight'
	}

	let convertedStyles = '\n// Font Weight ( iOS Only )\n';

	_.each(fontWeights, (value, modifier) => {
		convertedStyles += newClass('font-', modifier + '[platform=ios]', 'font: { fontWeight', `'${fixInvalidValues(invalidValues, modifier)}' }`);
	});

	return convertedStyles;
}
exports.fontWeight = fontWeight;

function borderRadius(tailwindBorderRadius) {
	let convertedStyles = '\n// Border Radius\n';

	_.each(tailwindBorderRadius, (value, modifier) => {
		convertedStyles += (modifier === 'default')
			? newClass('rounded', '', 'borderRadius', 16 * parseFloat(value))
			: newClass('rounded-', modifier, 'borderRadius', 16 * parseFloat(value));
	});

	return convertedStyles;
}
exports.borderRadius = borderRadius;

function borderWidth(tailwindBorderWidth) {
	let convertedStyles = '\n// Border Width\n';

	_.each(tailwindBorderWidth, (value, modifier) => {
		convertedStyles += (modifier === 'default')
			? newClass('border', '', 'borderWidth', parseInt(value))
			: newClass('border-', modifier, 'borderWidth', parseInt(value));
	});

	return convertedStyles;
}
exports.borderWidth = borderWidth;

function opacity(tailwindOpacity) {
	let convertedStyles = '\n// Opacity\n';

	_.each(tailwindOpacity, (value, modifier) => {
		convertedStyles += newClass('opacity-', modifier, 'opacity', parseFloat(value));
	});

	return convertedStyles;
}
exports.opacity = opacity;

function textAlign() {
	const alignments = {
		left: 'Ti.UI.TEXT_ALIGNMENT_LEFT',
		right: 'Ti.UI.TEXT_ALIGNMENT_RIGHT',
		center: 'Ti.UI.TEXT_ALIGNMENT_CENTER',
		justify: 'Ti.UI.TEXT_ALIGNMENT_JUSTIFY',
	};

	let convertedStyles = '\n// Text Alignment\n';

	_.each(alignments, (value, modifier) => {
		convertedStyles += newClass('text-', modifier, 'textAlign', value);
	});

	return convertedStyles;
}
exports.textAlign = textAlign;

function placement() {
	const objectPosition = {
		'top-0': 'top: 0',
		'left-0': 'left: 0',
		'right-0': 'right: 0',
		'bottom-0': 'bottom: 0',

		'top-auto': 'top: null',
		'left-auto': 'left: null',
		'right-auto': 'right: null',
		'bottom-auto': 'bottom: null',

		'inset-0': 'top: 0, right: 0, bottom: 0, left: 0',
		'inset-y-0': 'top: 0, bottom: 0',
		'inset-x-0': 'right: 0, left: 0',

		'inset-auto': 'top: null, right: null, bottom: null, left: null',
		'inset-y-auto': 'top: null, bottom: null',
		'inset-x-auto': 'right: null, left: null'
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

	_.each(objectPosition, (properties, rule) => {
		// Positive numbers
		_.each(spacing, (value, modifier) => {
			let sides = '';

			_.each(properties, property => {
				sides += (modifier === 'px')
					? ` ${property}: 1,`
					: ` ${property}: ${16 * parseFloat(value)},`;
			});

			sides = remove_last_character(sides);

			convertedStyles += `'.${rule}-${modifier}': {${sides} }\n`;
		});

		// Negative numbers
		_.each(spacing, (value, modifier) => {
			let sides = '';

			_.each(properties, property => {
				if (parseFloat(value) !== 0) {
					sides += (modifier === 'px')
						? ` ${property}: -1,`
						: ` ${property}: ${-1 * 16 * parseFloat(value)},`;
				}
			});

			sides = remove_last_character(sides);

			if (`{ ${sides}}` !== '{ }') {
				convertedStyles += `'.-${rule}-${modifier}': {${sides} }\n`;
			}
		});

		// auto
		let sides = '';

		_.each(properties, property => {
			sides += ` ${property}: null,`;
		});

		sides = remove_last_character(sides);

		convertedStyles += `'.-${rule}-auto': {${sides} }\n`;
	});

	return convertedStyles;
}
exports.margin = margin;

function width(widths) {
	return processElements('Widths', 'w-', 'width', widths);
}
exports.width = width;

function height(heights) {
	return processElements('Heights', 'h-', 'height', heights);
}
exports.height = height;

// Private Functions
function processElements(header, rule, property, data) {
	let convertedStyles = `\n// ${header}\n`;

	_.each(data.spacing, (value, modifier) => {
		convertedStyles += (modifier === 'px')
			? newClass(rule, modifier, property, 1)
			: newClass(rule, modifier, property, 16 * parseFloat(value));
	});

	delete data.spacing;

	_.each(data, (value, modifier) => {
		if (modifier === 'screen') {
			convertedStyles += newClass(rule, modifier, property, 'Ti.UI.FILL');
		} else if (modifier === 'auto') {
			convertedStyles += newClass(rule, modifier, property, 'Ti.UI.SIZE');
		} else {
			convertedStyles += newClass(rule, modifier, property, `'${value}'`);
		}
	});

	return convertedStyles;
}

function newClass(rule, modifier, property, value) {
	return `'.${rule}${modifier}': { ${property}: ${value} }\n`;
}

function fixInvalidValues(invalidValues, currentValue) {
	return invalidValues[currentValue] || currentValue;
}

function remove_last_character(element) {
	return element.slice(0, element.length - 1)
}

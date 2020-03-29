const fs = require('fs');
const _ = require('lodash');
const read = require('read-css');

(function constructor() {
	'use strict';

	read('./lib/fa-icons.css', (err, data) => {
		if (err) throw err

		let rules = _.map(data.stylesheet.rules, rule => {
			return {
				'selector': rule.selectors[0].replace(':before', '').replace('.', ''),
				'property': rule.declarations[0].value.replace('\"\\', '').replace('\"', '')
			};
		});

		let paraJS = '\nconst fontawesome = {\n';

		_.each(rules, rule => {
			paraJS += `\t'${rule.selector}': '\\u${rule.property}',\n`;
		});

		paraJS += '}';

		let fontawesome = fs.readFileSync('./lib/fontawesome.js');

		fontawesome += paraJS;

		fs.writeFileSync('fontawesome.js', fontawesome, err => {
			throw err;
		});
	});
}());

function saveFile(data) {
	const fs = require('fs');

	fs.writeFileSync('app.tss', data, err => {
		throw err;
	});

	console.log('"app.tss" file created!');
}

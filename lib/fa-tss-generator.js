const fs = require('fs');
const _ = require('lodash');
const read = require('read-css');

(function constructor() {
	'use strict';

	read('./node_modules/@fortawesome/fontawesome-free/css/all.css', (err, data) => {
		if (err) throw err

		let rules = _.map(data.stylesheet.rules, rule => {
			if (rule.type === 'rule' && rule.selectors[0].includes(':before')) {
				return {
					'selector': rule.selectors[0].replace(':before', ''),
					'property': rule.declarations[0].value.replace('\"\\', '').replace('\"', '')
				};
			}
		});

		let paraTSS = '';

		_.each(rules, rule => {
			if (rule) {
				paraTSS += `'${rule.selector}': {\n\ttext: '\\u${rule.property}',\n\ttitle: '\\u${rule.property}'\n}\n\n`;
			}
		});

		let fontawesome = fs.readFileSync('./lib/templates/fa.tss', 'utf8');

		fontawesome += paraTSS;

		fs.writeFileSync('fontawesome.tss', fontawesome, err => {
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

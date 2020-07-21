const fs = require('fs');
const _ = require('lodash');
const read = require('read-css');

if (!fs.existsSync('./app')) {
	fs.mkdirSync('./app')
}

if (!fs.existsSync('./app/lib')) {
	fs.mkdirSync('./app/lib')
}

(function constructor() {
	'use strict';

	read('./node_modules/@fortawesome/fontawesome-free/css/all.css', (err, data) => {
		if (err) throw err

		let rules = _.map(data.stylesheet.rules, rule => {
			if (rule.type === 'rule' && rule.selectors[0].includes(':before')) {
				return {
					'selector': rule.selectors[0].replace(':before', '').replace('.', ''),
					'property': rule.declarations[0].value.replace('\"\\', '').replace('\"', '')
				};
			}
		});

		let paraJS = '\nconst fontawesome = {\n';

		_.each(rules, rule => {
			if (rule) {
				paraJS += `\t'${rule.selector}': '\\u${rule.property}',\n`;
			}
		});

		paraJS += '};\n';

		let fontawesome = fs.readFileSync('./lib/templates/fa.js', 'utf8');

		fontawesome += paraJS;

		fs.writeFileSync('./app/lib/fontawesome.js', fontawesome, err => {
			throw err;
		});

		console.log("::tailwindTSS Generator:: './app/lib/fontawesome.js' file created!");
	});
}());

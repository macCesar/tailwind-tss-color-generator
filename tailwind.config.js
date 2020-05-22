module.exports = {
	theme: {
		extend: {
			colors: {
				primario: '#00235d',
				secundario: '#2B2B2B',
				'azul-transparente': 'rgba(0, 35, 89, 0.8)',
				'gris-transparente': 'rgba(0, 0, 0, 0.65)'
			}
		}
	},
	variants: {},
	plugins: [
		require('@tailwindcss/custom-forms'),
		require('@tailwindcss/ui'),
	]
}

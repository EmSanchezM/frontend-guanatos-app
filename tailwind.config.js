const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			width: {
				'1/9': '90%'
			},
			zIndex: {
				1: 1
			},
			inset: {
				'-2_8/8': '-26%',
				'1/9': '90%',
				'1/9_1': '91%'
			},
			fontFamily: {
				primary: ['Poppins']
			},
			padding: {
				'fluid-video': '56.25%'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: { 200: '#006845', 400: '#CF0921' },
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			red: colors.red,
			yellow: colors.amber,
			green: colors.emerald,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink
		}
	},
	plugins: []
};

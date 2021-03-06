/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'immich-primary': '#4250AF',
				'immich-bg': '#f6f8fe',
				'immich-fg': 'black'
			},
			fontFamily: {
				'immich-title': ['Snowburst One', 'cursive']
			}
		}
	},
	plugins: []
};

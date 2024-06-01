// rollup.config.mjs
export default {
	input: 'build/bootstrap.js',
    output: {
        file: 'src/assets/js/bootstrap.js',
		esModule: false,
		name: "bsbundle",
		format: "umd",
    },
};
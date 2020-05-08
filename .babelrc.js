module.exports = function (api) {
    api.cache(true);

    // const presets = [ ... ];
    const plugins = [
        'babel-plugin-styled-components',
        { 'fileName': false, 'minify': true, 'transpileTemplateLiterals': true, 'pure': true },
    ];

    return {
        // presets,
        plugins,
    };
};

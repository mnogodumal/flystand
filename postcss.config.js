module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-discard-comments'),
        // require('cssnano')({ preset: ['default', { discardComments: { removeAll: true } }] }) // Uncomment this for minifued css
    ]
}
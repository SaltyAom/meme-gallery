module.exports = {
    mode: 'jit',
    purge: {
        preserveHtmlElements: false,
        content: ['src/**/*.[j|t]s[x]']
    },
    darkMode: 'media',
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms')
    ]
}

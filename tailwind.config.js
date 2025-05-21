/* @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['font-sans', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                'primary-foreground': 'var(--primary-foreground)',
                secondary: 'var(--secondary)',
                'secondary-foreground': 'var(--secondary-foreground)',
                destructive: 'var(--destructive)',
                green: 'var(--green)',
                warm: 'var(--warm)',
                creamforeground: 'var(--cream-foreground)',
                muted: 'var(--muted)',
            }
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
};
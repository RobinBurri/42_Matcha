/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        theme: {
            colors: {
                primary: '#f43f5e',

                secondary: '#f000b8',

                accent: '#1dcdbc',

                neutral: '#2b3440',

                'base-100': '#ffffff',

                info: '#3abff8',

                success: '#36d399',

                warning: '#fbbd23',

                error: '#f87272',
            },
        },
    },
    plugins: [],
}

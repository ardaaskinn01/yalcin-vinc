/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E63946', // Vibrant Red
                secondary: '#222222', // Dark Gray/Black
                dark: '#111111',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                accent: "#f26e24",
            },
        },
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                "light": {
                    ...require("daisyui/src/theming/themes")["light"],
                    "accent": "#f26e24",
                },
                "dark": {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "accent": "#f26e24",
                },
            },
        ]
    },
}


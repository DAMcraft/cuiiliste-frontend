/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                accent: "#f26e24",
            },
            backgroundImage: {
                "cuii-banner-background": "url('/img/cuii_bg.webp')",
            }
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
                    "--lessimportant": "#a6a6a6",
                },
                "dark": {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "accent": "#f26e24",
                    "--lessimportant": "#737373",
                },
            },
        ]
    },
}


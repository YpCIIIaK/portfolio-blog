/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ccd6f6',
            h1: {
              color: '#ccd6f6',
            },
            h2: {
              color: '#ccd6f6',
            },
            h3: {
              color: '#ccd6f6',
            },
            strong: {
              color: '#64ffda',
            },
            code: {
              color: '#64ffda',
            },
            'pre code': {
              color: '#ccd6f6',
              backgroundColor: '#112240',
            },
            a: {
              color: '#64ffda',
              '&:hover': {
                color: '#64ffda',
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#005dc1',
          secondary: '#f2f6fb',
          accent: '#ff6e40',
          heading: '#333',
          text: '#555',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          raleway: ['Raleway', 'sans-serif'],
        },
        boxShadow: {
          custom: '0 4px 20px rgba(0,0,0,0.08)',
        },
        transitionProperty: {
          height: 'height',
          spacing: 'margin, padding',
        }
      },
    },
    plugins: [],
  }
  
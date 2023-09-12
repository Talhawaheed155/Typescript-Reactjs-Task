module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    // Add any other content sources you need
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'brown-1': '#ffcb4d',
        'brown-2': '#cfa339',
        'brown-3':'#88681a',
        'brown-2': '#b38a25',
        'red-1': '#ff4200',
        'red-2':'#ff571c',
        'yellow-1': '#fbee55'
      },
    },
  },
  plugins: [],
};

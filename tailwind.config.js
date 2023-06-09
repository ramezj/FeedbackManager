/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors:{
      'heyfeedback':'#181818',
      'heyfeedback-hover':"#151515",
      'MVP':'#090909',
      'form':'#0f0f0f'
    }
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ]
}

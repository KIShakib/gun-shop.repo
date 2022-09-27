/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fab3fc",
        
"secondary": "#f4bb89",
        
"accent": "#6f8bf2",
        
"neutral": "#1E1E25",
        
"base-100": "#212A45",
        
"info": "#86D3E4",
        
"success": "#0D6D5A",
        
"warning": "#F79218",
        
"error": "#EE4C49",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

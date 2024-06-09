/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
        custom: ['Monaco', 'monospace'],
        custom1: ['Merriweather', 'serif'],
        custom2:['SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}



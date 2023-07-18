/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-bg': '#F1F2F6',
        'rich-black': '#051014',
        'jet': '#2E2F2F',
        'ash': '#ACBDBA',
        'azure': '#CDDDDD',
        'rose-quartz': '#A599B5',
        'midnight-green': '#19535F',
        'cerulean': '#007EA7',
        'redwood': '#AA5042',
        'dutch-white': '#F2E3BC'
      },
      fontFamily: {
        sans: ['Work sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['monospace']
      }
    },
  },
  plugins: [],
}


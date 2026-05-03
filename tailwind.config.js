/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-red': '#D90A14',
        'gym-orange': '#CD4E17',
        'gym-dark': '#0D0D0D',
        'gym-card': '#1A1A1A',
        'gym-grey': '#262626',
        'gym-light-grey': '#3D3D3D',
        'gym-text-grey': '#9CA3AF',
      },
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

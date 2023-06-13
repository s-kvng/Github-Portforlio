/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: '"Exo 2"',
    },
    container: {
      padding: {
        DEFAULT: '25px',
      },
      center :true,
    },
    extend: {
      colors: {
        body: '#1D1F23',
        primary: '#151618',
        accent: {
          DEFAULT: '#F6CD46',
          hover: '#E1B72E',
        },
      },
      backgroundColor : {
        'bgModal' : 'rgba(138, 146, 154, 0.533)',
      },
      keyframes : {
        modalAnimation: {
          '0%' : {transform : 'translate(-50%, -50%) scale(0) rotate3d(0, 2, 0, 60deg)' },
          '100%' : {transform : 'translate(-50% ,-50%) scale(1) rotate3d(0, 2, 0, 360deg)'},
        }
      },
      animation : {
        modalAnimation : 'modalAnimation 1s ease-in-out',
      },
    },

  },
  plugins: [],
}


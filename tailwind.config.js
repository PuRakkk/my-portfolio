/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FBF9F5',
          100: '#F5F2EB',
          200: '#EBE6DC',
          300: '#DDD5C7',
          400: '#C7BCAB',
          500: '#A89B87',
          600: '#8A7C68',
          700: '#6E6252',
          800: '#52483D',
          900: '#383129',
          950: '#221D18',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9E3',
          200: '#FDF0B8',
          300: '#FBE485',
          400: '#F5C842',
          500: '#E5A823',
          600: '#C28514',
          700: '#945E0B',
          800: '#75460F',
          900: '#5E3812',
        },
        navy: {
          950: '#070A12',
          900: '#0B0F19',
          850: '#0F172A',
          800: '#141E34',
          750: '#1A2744',
          700: '#243356',
          600: '#334773',
          500: '#48639C',
        },
        dark: {
          950: '#060709',
          900: '#0B0D13',
          850: '#10131C',
          800: '#151924',
          750: '#1B2130',
          700: '#232B3E',
          600: '#303B54',
          500: '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(229, 168, 35, 0.25)',
        'glow-sm': '0 0 15px -3px rgba(229, 168, 35, 0.2)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [], 
}


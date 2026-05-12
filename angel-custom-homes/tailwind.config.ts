import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        achBlack: '#070707',
        achGold: '#C9A45C',
        achWhite: '#F7F3EC',
        achWarm: '#E8DFD1'
      },
      fontFamily: {
        serif: ['var(--font-display)'],
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#3498db', // A bright blue
          light: '#5dade2',
          dark: '#2980b9',
        },
        secondary: {
          DEFAULT: '#5B21B6', // Dark violet
          light: '#7C3AED',
          dark: '#4C1D95',
        },
        accent: {
          DEFAULT: '#f1c40f', // A bright yellow
          light: '#f4d03f',
          dark: '#d4ac0d',
        },
        neutral: {
          DEFAULT: '#95a5a6', // A cool gray
          light: '#bdc3c7',
          dark: '#7f8c8d',
        },
        space: {
          dark: '#2c3e50', // A deep blue-gray for dark backgrounds
          light: '#34495e', // A lighter blue-gray for contrast
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

export default config;

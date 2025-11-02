/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // --- BASE COLORS ---
        // Light Mode values are defined first (no prefix)
        border: 'rgba(0, 0, 0, 0.1)',
        input: 'transparent',
        'input-background': '#f3f3f5',
        ring: '#aaaaaa', // oklch(0.708 0 0)
        background: '#ffffff',
        foreground: '#262626', // oklch(0.145 0 0)

        // Dark Mode values are defined with the 'dark:' prefix
        'dark:border': '#454545', // oklch(0.269 0 0)
        'dark:input': '#454545', // oklch(0.269 0 0)
        'dark:input-background': '#454545', // oklch(0.269 0 0)
        'dark:ring': '#717171', // oklch(0.439 0 0)
        'dark:background': '#262626', // oklch(0.145 0 0)
        'dark:foreground': '#fbfbfb', // oklch(0.985 0 0)

        // --- COMPONENTS & UTILITY COLORS ---
        card: {
          DEFAULT: '#ffffff',
          foreground: '#262626',
          'dark:DEFAULT': '#262626',
          'dark:foreground': '#fbfbfb',
        },
        popover: {
          DEFAULT: '#ffffff', // oklch(1 0 0)
          foreground: '#262626',
          'dark:DEFAULT': '#262626',
          'dark:foreground': '#fbfbfb',
        },
        primary: {
          DEFAULT: '#030213',
          foreground: '#ffffff', // oklch(1 0 0)
          'dark:DEFAULT': '#fbfbfb', // oklch(0.985 0 0)
          'dark:foreground': '#353535', // oklch(0.205 0 0)
        },
        secondary: {
          DEFAULT: '#f0f0f2', // oklch(0.95 0.0058 264.53)
          foreground: '#030213',
          'dark:DEFAULT': '#454545', // oklch(0.269 0 0)
          'dark:foreground': '#fbfbfb',
        },
        muted: {
          DEFAULT: '#ececf0',
          foreground: '#717182',
          'dark:DEFAULT': '#454545',
          'dark:foreground': '#aaaaaa',
        },
        accent: {
          DEFAULT: '#e9ebef',
          foreground: '#030213',
          'dark:DEFAULT': '#454545',
          'dark:foreground': '#fbfbfb',
        },
        destructive: {
          DEFAULT: '#d4183d',
          foreground: '#ffffff',
          'dark:DEFAULT': '#6b323c', // oklch(0.396 0.141 25.723)
          'dark:foreground': '#b37176', // oklch(0.637 0.237 25.331)
        },

        // Specific UI elements
        'switch-background': '#cbced4',
        'dark:switch-background': '#454545', // dark:secondary

        // --- CHART COLORS ---
        chart: {
          1: '#b16a50', // oklch(0.646 0.222 41.116)
          2: '#7f8ea6', // oklch(0.6 0.118 184.704)
          3: '#4b556f', // oklch(0.398 0.07 227.392)
          4: '#f3895e', // oklch(0.828 0.189 84.429)
          5: '#e2886a', // oklch(0.769 0.188 70.08)

          'dark:1': '#6f3d99', // oklch(0.488 0.243 264.376)
          'dark:2': '#b7d4af', // oklch(0.696 0.17 162.48)
          'dark:3': '#e2886a', // oklch(0.769 0.188 70.08)
          'dark:4': '#9f49a3', // oklch(0.627 0.265 303.9)
          'dark:5': '#b76d54', // oklch(0.645 0.246 16.439)
        },

        // --- SIDEBAR COLORS ---
        sidebar: {
          DEFAULT: '#fbfbfb', // oklch(0.985 0 0)
          foreground: '#262626',
          border: '#e8e8e8', // oklch(0.922 0 0)
          ring: '#aaaaaa',
          
          'dark:DEFAULT': '#353535', // oklch(0.205 0 0)
          'dark:foreground': '#fbfbfb',
          'dark:border': '#454545',
          'dark:ring': '#717171',

          primary: {
            DEFAULT: '#030213',
            foreground: '#fbfbfb',
            'dark:DEFAULT': '#6f3d99',
            'dark:foreground': '#fbfbfb',
          },
          accent: {
            DEFAULT: '#f5f5f5', // oklch(0.97 0 0)
            foreground: '#353535',
            'dark:DEFAULT': '#454545',
            'dark:foreground': '#fbfbfb',
          },
        },
      },

      // --- BORDER RADIUS (Uses Calc, which is supported) ---
      borderRadius: {
        lg: '0.625rem',
        md: 'calc(0.625rem - 2px)',
        sm: 'calc(0.625rem - 4px)',
        xl: 'calc(0.625rem + 4px)',
      },

      // --- FONT WEIGHT ---
      fontWeight: {
        normal: '400',
        medium: '500',
      },

    },
  },
  plugins: [],
}
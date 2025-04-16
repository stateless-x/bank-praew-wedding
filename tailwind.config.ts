import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Wedding theme colors - simplified to just the specified colors
        maroon: {
          DEFAULT: "#761213",
          light: "#8a2223",
          dark: "#5e0e0f",
        },
        taupe: {
          DEFAULT: "#beb09b",
          light: "#d0c5b5",
          dark: "#a99c87",
        },
        gray: {
          DEFAULT: "#b0b1b0",
          light: "#c5c6c5",
          dark: "#919291",
        },
        coral: {
          DEFAULT: "#ec8b8a",
          light: "#f2a5a4",
          dark: "#d68471",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  daisyui: {
    themes: [
      {
        wedding: {
          primary: "#761213", // Maroon
          "primary-focus": "#8a2223", // Lighter maroon
          "primary-content": "#ffffff", // White
          secondary: "#d68471", // Darker coral
          "secondary-focus": "#ec8b8a", // Coral
          "secondary-content": "#ffffff", // White
          accent: "#beb09b", // Taupe
          "accent-focus": "#a99c87", // Darker taupe
          "accent-content": "#ffffff", // White
          neutral: "#f5f3ee", // Light cream
          "neutral-focus": "#ebe7dc", // Slightly darker cream
          "neutral-content": "#761213", // Maroon
          "base-100": "#ffffff", // White
          "base-200": "#f5f3ee", // Light cream
          "base-300": "#ebe7dc", // Slightly darker cream
          "base-content": "#761213", // Maroon
          info: "#ec8b8a", // Coral
          success: "#36d399", // Green
          warning: "#d68471", // Darker coral
          error: "#761213", // Maroon
        },
      },
    ],
  },
} satisfies Config

export default config

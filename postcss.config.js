module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tailwindcss/**/*.{js,jsx,ts,tsx}"
  ],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: ['border-red-500', 'focus:border-red-500', 'focus:ring-red-500'],
    },
  },
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

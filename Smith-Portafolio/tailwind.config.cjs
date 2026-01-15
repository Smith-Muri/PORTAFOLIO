module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff2b2b'
        }
      }
    }
  },
  // Safelist to ensure dynamic and responsive utilities are included
  safelist: [
    // Common typographic sizes and responsive variants
    { pattern: /^(text|sm:text|md:text|lg:text)-/ },
    { pattern: /^(bg|from|via|to|hover:bg|hover:text)-/ },
    { pattern: /^(px|py|p|m|w|h|gap|grid|container|mx-auto|rounded)-/ },
    'text-4xl','sm:text-6xl','md:text-7xl','text-3xl','text-lg','font-extrabold','font-semibold','drop-shadow-lg'
  ],
  plugins: []
};

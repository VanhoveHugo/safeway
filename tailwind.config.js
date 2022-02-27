// npx tailwindcss -i src/styles/tailwind.css -o src/styles/globals.css --watch
module.exports = {
  content: ["./**/*.tsx"],
  purge: ["./**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

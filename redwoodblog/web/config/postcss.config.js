const path = require('path')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('tailwindcss')(path.resolve(__dirname, '../tailwind.config.js')),
    require('autoprefixer')
  ],
}

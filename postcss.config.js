/**
  PostCSS configuration aligning Tailwind CSS v4 with the dedicated plugin
  Includes autoprefixer for cross-browser CSS support
*/

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss(), autoprefixer()],
}

import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'
import { fr } from '@formkit/i18n'

export default defineFormKitConfig({
  // rules: {},
  locales: {fr},
  locale: 'fr',
  config: {
    rootClasses,
  }, 
})
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import 'tailwindcss/tailwind.css'
import '@radix-ui/themes/styles.css'
import App from 'components/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Theme>
    <App />
  </Theme>
)

serviceWorkerRegistration.unregister()

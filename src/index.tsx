import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import { RecoilRoot } from 'recoil'
import 'tailwindcss/tailwind.css'
import '@radix-ui/themes/styles.css'
import App from '@/components/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1
    }
  }
})

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Theme>
        <App />
      </Theme>
    </RecoilRoot>
  </QueryClientProvider>
)

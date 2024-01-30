import Router from './components/Router/Router'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

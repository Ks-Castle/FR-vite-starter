import { Flex } from '@radix-ui/themes'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <Flex justify="center" gap="2" className="bg-gray-400">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            App
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Test
          </h1>
        </Flex>
      </div>
    </div>
  )
}

export default App

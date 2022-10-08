import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { InfinitePeople } from './components/people/infintePeople'

const queryClient = new QueryClient()

const App:React.FC = () => {

  return(
    <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Infinite SWAPI</h1>
          <InfinitePeople />
        </div>
          <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App;

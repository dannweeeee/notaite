'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type Props = {
    children: React.ReactNode // the application that we want to wrap with the provider
}

const queryClient = new QueryClient()

const Provider = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default Provider
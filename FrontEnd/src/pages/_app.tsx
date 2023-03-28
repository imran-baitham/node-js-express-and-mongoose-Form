import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Hydrated>
  )
}

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : <div></div>
}

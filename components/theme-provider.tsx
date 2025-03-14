'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Efeito para garantir que o componente só seja renderizado no cliente
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Renderiza um placeholder durante a renderização do servidor
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

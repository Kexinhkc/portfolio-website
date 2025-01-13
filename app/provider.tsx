"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // During initial render and hydration: no theme classes
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

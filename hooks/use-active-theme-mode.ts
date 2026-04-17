'use client'

import { useMemo } from 'react'
import { useTheme } from 'next-themes'

export type ActiveThemeMode = 'light' | 'black'

export function useActiveThemeMode() {
  const { resolvedTheme, theme } = useTheme()

  const activeThemeMode = useMemo<ActiveThemeMode>(() => {
    if (theme === 'black') {
      return 'black'
    }

    if (theme === 'light') {
      return 'light'
    }

    return resolvedTheme === 'dark' ? 'black' : 'light'
  }, [theme, resolvedTheme])

  return {
    activeThemeMode,
    resolvedTheme,
    theme,
  }
}

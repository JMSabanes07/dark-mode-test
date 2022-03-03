import { useState, createContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'components/theme'
import { GlobalStyles } from 'components/theme/globalStyles'

export const Context = createContext()

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setIsloading(false)
  }, [])

  const toggle = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }
  if (isLoading) return <></>
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Context.Provider
        value={{
          theme,
          toggle,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

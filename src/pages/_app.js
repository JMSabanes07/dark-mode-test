import { ThemeContext } from 'contexts/themeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  )
}

export default MyApp

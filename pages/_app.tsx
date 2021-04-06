import type { AppProps } from 'next/app'
import ThemeProvider from '../components/ThemeProvider/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

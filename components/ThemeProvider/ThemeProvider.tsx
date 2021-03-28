import { ReactNode } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --font: 'Roboto', sans-serif;

    --font-size-h1: 6rem; 
    --font-size-h2: 3.75rem;
    --font-size-h3: 3rem;
    --font-size-h4: 2.125rem;
    --font-size-h5: 1.5rem;
    --font-size-h6: 1.25rem;
    --font-size-subtitle-1: 1rem;
    --font-size-subtitle-2: 1rem;
    --font-size-body-1: 1rem;
    --font-size-body-2: 0.875rem;

    --line-height-h1: 1.25;
    --line-height-h2: 1.33;
    --line-height-h3: 1.33;
    --line-height-h4: 1.30;
    --line-height-h5: 1.32;
    --line-height-h6: 1.38;
    --line-height-subtitle-1: 1.50;
    --line-height-subtitle-2: 1.42;
    --line-height-body-1: 1.50;
    --line-height-body-2: 1.42;

    --line--spacing-h1: -0.015em;
    --line--spacing-h2: -0.01em;
    --line--spacing-h3: -0.005em;
    --line--spacing-h4: 0.00735em;
    --line--spacing-h5: 0em;
    --line--spacing-h6: 0.0075em;
    --line--spacing-subtitle-1: 0.005em;
    --line--spacing-subtitle-2: 0.005em;
    --line--spacing-body-1: 0.0168em;
    --line--spacing-body-2: 0.0168em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: var(--font);
    font-weight: 400;
  }
`

export const theme = {
  variantMapping: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
  },
}

interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </>
  )
}

export default ThemeProvider

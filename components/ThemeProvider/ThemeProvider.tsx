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
    --line--spaciqng-h3: -0.005em;
    --line--spacing-h4: 0.00735em;
    --line--spacing-h5: 0em;
    --line--spacing-h6: 0.0075em;
    --line--spacing-subtitle-1: 0.005em;
    --line--spacing-subtitle-2: 0.005em;
    --line--spacing-body-1: 0.0168em;
    --line--spacing-body-2: 0.0168em;

    --color-grey-1: #E0E0E0;
    --color-grey-2: #C0C0C0;
    --color-grey-3: #A1A1A1;
    --color-grey-4: #818181;
    --color-grey-5: #616161;
    --color-grey-6: #414141;

    --color-pink-1: #FAC1D6;
    --color-pink-2: #F584AD;
    --color-pink-3: #F04684;
    --color-pink-4: #E1125E;
    --color-pink-5: #A90E46;
    --color-pink-6: #70092F;

    --color-red-1: #FCD0CF;
    --color-red-2: #FAA09E;
    --color-red-3: #F7716E;
    --color-red-4: #F5413D;
    --color-red-5: #DA100B;
    --color-red-6: #910B08;

    --color-orange-1: #FBE5C9;
    --color-orange-2: #F6CA92;
    --color-orange-3: #F2B05C;
    --color-orange-4: #ED9526;
    --color-orange-5: #BF710F;
    --color-orange-6: #7F4C0A;

    --color-yellow-1: #FBF3D0;
    --color-yellow-2: #F7E7A1;
    --color-yellow-3: #F4DB71;
    --color-yellow-4: #F0D042;
    --color-yellow-5: #D4B011;
    --color-yellow-6: #8E750B;

    --color-green-1: #C5F2C7;
    --color-green-2: #8CE590;
    --color-green-3: #52D858;
    --color-green-4: #2AB930;
    --color-green-5: #1F8B24;
    --color-green-6: #155D18;

    --color-teal-1: #ABFBF3;
    --color-teal-2: #4EF6E5;
    --color-teal-3: #0CDBC6;
    --color-teal-4: #009E8E;
    --color-teal-5: #00776A;
    --color-teal-6: #004F47;

    --color-blue-1: #C5DCFA;
    --color-blue-2: #8AB9F6;
    --color-blue-3: #5096F1;
    --color-blue-4: #1672EC;
    --color-blue-5: #0F56B3;
    --color-blue-6: #0A3977;

    --color-indigo-1: #C7CDF1;
    --color-indigo-2: #8E9AE3;
    --color-indigo-3: #5668D5;
    --color-indigo-4: #2E41B6;
    --color-indigo-5: #223189;
    --color-indigo-6: #17205B;

    --color-purple-1: #ECB9F9;
    --color-purple-2: #D972F4;
    --color-purple-3: #C52CEE;
    --color-purple-4: #9A0FBF;
    --color-purple-5: #730C8F;
    --color-purple-6: #4D085F;
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
  color: {
    grey: {
      1: 'var(--color-grey-1)',
      2: 'var(--color-grey-2)',
      3: 'var(--color-grey-3)',
      4: 'var(--color-grey-4)',
      5: 'var(--color-grey-5)',
      6: 'var(--color-grey-6)',
    },
    pink: {
      1: 'var(--color-pink-1)',
      2: 'var(--color-pink-2)',
      3: 'var(--color-pink-3)',
      4: 'var(--color-pink-4)',
      5: 'var(--color-pink-5)',
      6: 'var(--color-pink-6)',
    },
    red: {
      1: 'var(--color-red-1)',
      2: 'var(--color-red-2)',
      3: 'var(--color-red-3)',
      4: 'var(--color-red-4)',
      5: 'var(--color-red-5)',
      6: 'var(--color-red-6)',
    },
    orange: {
      1: 'var(--color-orange-1)',
      2: 'var(--color-orange-2)',
      3: 'var(--color-orange-3)',
      4: 'var(--color-orange-4)',
      5: 'var(--color-orange-5)',
      6: 'var(--color-orange-6)',
    },
    yellow: {
      1: 'var(--color-yellow-1)',
      2: 'var(--color-yellow-2)',
      3: 'var(--color-yellow-3)',
      4: 'var(--color-yellow-4)',
      5: 'var(--color-yellow-5)',
      6: 'var(--color-yellow-6)',
    },
    green: {
      1: 'var(--color-green-1)',
      2: 'var(--color-green-2)',
      3: 'var(--color-green-3)',
      4: 'var(--color-green-4)',
      5: 'var(--color-green-5)',
      6: 'var(--color-green-6)',
    },
    teal: {
      1: 'var(--color-teal-1)',
      2: 'var(--color-teal-2)',
      3: 'var(--color-teal-3)',
      4: 'var(--color-teal-4)',
      5: 'var(--color-teal-5)',
      6: 'var(--color-teal-6)',
    },
    blue: {
      1: 'var(--color-blue-1)',
      2: 'var(--color-blue-2)',
      3: 'var(--color-blue-3)',
      4: 'var(--color-blue-4)',
      5: 'var(--color-blue-5)',
      6: 'var(--color-blue-6)',
    },
    indigo: {
      1: 'var(--color-indigo-1)',
      2: 'var(--color-indigo-2)',
      3: 'var(--color-indigo-3)',
      4: 'var(--color-indigo-4)',
      5: 'var(--color-indigo-5)',
      6: 'var(--color-indigo-6)',
    },
    purple: {
      1: 'var(--color-purple-1)',
      2: 'var(--color-purple-2)',
      3: 'var(--color-purple-3)',
      4: 'var(--color-purple-4)',
      5: 'var(--color-purple-5)',
      6: 'var(--color-purple-6)',
    },
  },
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

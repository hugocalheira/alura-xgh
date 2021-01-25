import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../../db.json';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Rock Salt', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
    line-height: 1.5;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          {/* Primary Meta Tags */}
          <title>{db.title}</title>
          <meta name="title" content={db.title} />
          <meta name="description" content={db.description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={db.url} />
          <meta property="og:title" content={db.title} />
          <meta property="og:description" content={db.description} />
          <meta property="og:image" content={db.ogImage} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={db.url} />
          <meta property="twitter:title" content={db.title} />
          <meta property="twitter:description" content={db.description} />
          <meta property="twitter:image" content={db.ogImage} />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('1')
  return <Component {...pageProps} />
}

export default MyApp

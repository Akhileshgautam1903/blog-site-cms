import '@/styles/globals.css'
import Layout from '@/components/Layout'
import 'react-quill/dist/quill.snow.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

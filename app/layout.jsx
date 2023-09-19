import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const metadata = {
  title: 'AR Soundwalk',
  description: 'AR Soundwalk project',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

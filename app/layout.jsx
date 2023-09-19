import '@/global.css'

export const metadata = {
  title: 'AR Soundwalk',
  description: 'AR Soundwalk project',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <body>{children}</body>
    </html>
  )
}

import '@/global.css'

export const metadata = {
  title: 'AR Soundwalk',
  description: 'AR Soundwalk project',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
    <head ><title>AR Soundwalk</title></head>
    <body>{children}</body>
    </html>
  )
}

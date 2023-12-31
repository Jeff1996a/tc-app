import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TicsCode Ecuador',
  description: 'Empresa dedicada a las tecnologías de la  información',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/img/icono-ticscode.png' type='image/png'/>
      </head>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}

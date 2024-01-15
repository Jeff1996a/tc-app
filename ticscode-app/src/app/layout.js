
import './globals.css'
import { Inter } from 'next/font/google'
import { ComplexNavbar } from './components/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TicsCode Ecuador',
  description: 'Empresa dedicada a las tecnologías de la  información',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <nav className="fixed w-full z-20 top-0 left-0 mt-5  px-4">
              <ComplexNavbar ></ComplexNavbar>
        </nav>
        
        {children}

       
      </body>
    </html>
  )
}

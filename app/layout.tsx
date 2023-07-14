import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarayanAI Chatbot',
  description: 'A chatbot that helps you with your outfit and talks like Pablo Carayáni Camara',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='bg-neutral-900 h-full'>
      <body className={`${inter.className} relative bg-gradient-to-b from-black to-neutral-950 to-80% flex flex-col min-h-full`}>
        <Header />
        <main className='p-4 h-full flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  )
}

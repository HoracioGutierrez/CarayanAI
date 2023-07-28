import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Script from 'next/script'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'CarayanAI - %s',
    default : 'CarayanAI ChatBot'
  },
  description: 'A chatbot that helps you with your outfit and talks like Pablo Carayáni Camara',
  keywords : ["Pablo","Carayani","Next.js","AI","Chatbot","vercel"],
  authors : [{name : "Horacio Gutierrez" , url : "https://instagram.com/horagutierrez"}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es" className='bg-neutral-900 h-full'>
      <body className={`${inter.className} relative bg-gradient-to-b from-black to-neutral-950 to-80% flex flex-col min-h-full`}>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6042247264770566"
          async
          crossOrigin='anonymous'
          strategy="lazyOnload"
        />
        <Header />
        <main className='p-4 h-full flex flex-col grow'>
          {children}
        </main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  )
}

'use client'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from 'next-auth/react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <ToastContainer />
        <SessionProvider>
        <div>{children}</div>
          </SessionProvider>
      </body>
    </html>
  )
}

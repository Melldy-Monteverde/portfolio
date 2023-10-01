import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const meta = [
  {property:"og:title", content:'Lex monteverde'},
  {property:"og:site_name", content:'Lex monteverde portfolio'},
  {property:"og:description", content:'Lex monteverde portfolio'},
  {property:"og:url", content:'lexmonteverdevs'},
  {property:"og:image", content:'/biopic.jpg'},
]

export const metadata = {
  title: 'Lex Monteverde Portfolio',
  description: 'Lex Monteverde Portfolio page fot get contact',
  meta
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

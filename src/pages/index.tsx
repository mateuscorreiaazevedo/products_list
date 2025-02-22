import { Geist, Geist_Mono } from 'next/font/google'

const _geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const _geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <h1 aria-roledescription="heading">Olá</h1>
    </div>
  )
}

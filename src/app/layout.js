import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NATTO - Portfolio Website',
  description: 'Created by mohammad_emmon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ['cyrillic'],
  display: "swap",
})

export const metadata = {
  title: 'Connect',
  description: 'Build Meaningful Connections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

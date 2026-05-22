import { Metadata } from "next"
import { Geist, Geist_Mono, Jost } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "Nike",
  description: "An e-commerce platform for Nike",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jost.className} antialiased`}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

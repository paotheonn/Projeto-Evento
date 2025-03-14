import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EventHub - Descubra e Participe de Eventos Incríveis",
  description: "Uma plataforma para descobrir e se inscrever em eventos acontecendo ao seu redor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <main className="min-h-screen pt-16 pb-8">{children}</main>
          <footer className="border-t py-6 bg-white">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © 2024 EventHub. Todos os direitos reservados.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
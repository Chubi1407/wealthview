import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wealthview",
  description: "Your unified wealth dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className} style={{ background: "#141414" }}>
        <Sidebar />
        <div className="ml-56 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
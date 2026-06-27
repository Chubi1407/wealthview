import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"

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
<body className={`${geist.className}`} style={{ background: "#141414" }}>
          <Sidebar />
        {/* Main content sits to the right of the sidebar */}
        <main className="ml-60 min-h-screen p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
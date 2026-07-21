import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SessionWrapper from "@/components/SessionWrapper"
import "./globals.css"
import Script from "next/script"

export const metadata = { title: "GetMeAChai", description: "Fund your creators" }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </SessionWrapper>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

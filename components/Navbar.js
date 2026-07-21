"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between p-4 bg-black text-white sticky top-0 z-50">
      <Link href="/" className="font-bold text-xl">GetMeAChai ☕</Link>
      <div>
        {session? <>
          <Link href="/dashboard" className="mr-4">Dashboard</Link>
          <button onClick={() => signOut()}>Logout</button>
        </> : <button onClick={() => signIn("github")}>Login</button>}
      </div>
    </nav>
  )
}

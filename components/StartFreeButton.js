"use client"
import { signIn } from "next-auth/react"
export default function StartFreeButton() {
  return (
    <button onClick={() => signIn("github")} className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800">
      Start My Page — It's Free
    </button>
  )
}

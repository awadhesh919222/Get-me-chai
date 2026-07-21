"use client"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => { if (session) router.push("/dashboard"); }, [session]);
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">Login to continue</h1>
      <button onClick={() => signIn("github")} className="bg-black text-white px-6 py-2 rounded mt-5">Continue with Github</button>
    </div>
  )
}

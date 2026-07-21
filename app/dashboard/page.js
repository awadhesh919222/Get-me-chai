import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import DashboardForm from "@/components/DashboardForm"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  await connectDB();
  const user = await User.findOne({ email: session.user.email }).lean();
  if(!user) redirect("/");
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="mb-6 text-gray-600">Your page: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{process.env.NEXTAUTH_URL}/{user.username}</span></p>
      <DashboardForm user={JSON.parse(JSON.stringify(user))} />
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <b>Note:</b> Razorpay keys save karne ke baad apna public page check karo. Agar keys galat honge to payment fail hoga.
      </div>
    </div>
  )
}

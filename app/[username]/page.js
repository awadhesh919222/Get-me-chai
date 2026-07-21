import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import Payment from "@/models/Payment"
import PaymentPage from "@/components/PaymentPage"
import { notFound } from "next/navigation"

export default async function UsernamePage({ params }) {
  const { username } = await params;
  await connectDB();
  const user = await User.findOne({ username }).lean();
  if (!user) return notFound();
  const payments = await Payment.find({ to_user: username, done: true }).sort({ createdAt: -1 }).lean();
  return <PaymentPage username={username} user={JSON.parse(JSON.stringify(user))} payments={JSON.parse(JSON.stringify(payments))} />
}

import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { razorpayid, razorpaysecret } = await req.json();
  await User.findOneAndUpdate({ email: session.user.email }, { razorpayid, razorpaysecret });
  return Response.json({ success: true });
}

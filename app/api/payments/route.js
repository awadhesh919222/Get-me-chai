import connectDB from "@/lib/mongodb"
import Payment from "@/models/Payment"

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const p = await Payment.create(data);
  return Response.json({ success: true, payment: p });
}

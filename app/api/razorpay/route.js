import connectDB from "@/lib/mongodb"

export async function POST(req) {
  // Fake mode - always return dummy order
  const { amount } = await req.json();
  return Response.json({
    id: "order_FAKE_" + Date.now(),
    amount: Number(amount)*100,
    currency: "INR",
    status: "created",
    fake: true
  });
}

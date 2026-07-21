export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 max-w-6xl mx-auto">
      <div className="border p-6 rounded-xl shadow">⚡ <b>GitHub OAuth</b><p>One click login, no password</p></div>
      <div className="border p-6 rounded-xl shadow">💸 <b>Your Money</b><p>Direct to your Razorpay account</p></div>
      <div className="border p-6 rounded-xl shadow">🚀 <b>Public Page</b><p>/{'{username}'} pe page share karo</p></div>
    </div>
  )
}

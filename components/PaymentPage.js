"use client"
import { useState } from "react"

export default function PaymentPage({ username, user, payments }) {
  const [amount, setAmount] = useState(50);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const total = payments.reduce((a, b) => a + b.amount, 0);

  const pay = async () => {
    if(!name || !amount) return alert("Name and amount required");
    
    // FAKE PAYMENT MODE - No Razorpay needed
    console.log("Fake payment processing...");
    
    await fetch("/api/payments", {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        name, message, amount: Number(amount), to_user: username,
        oid: "FAKE_" + Date.now(), done: true
      })
    });
    alert(`Thanks ${name}! ₹${amount} ka fake payment ho gaya ☕ (Razorpay disabled)`);
    window.location.reload();
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="w-full bg-yellow-50 border border-yellow-200 p-3 rounded mb-5 text-center text-sm">
        ⚠️ Demo Mode ON - Razorpay disabled. Payments are fake, only for demo.
      </div>
      <div className="w-full h-[200px] bg-gray-200 rounded-xl mb-10 flex items-center justify-center">
        <img src={user.profilepic} className="w-20 h-20 rounded-full" alt="" />
        <div className="ml-5"><h1 className="text-3xl font-bold">@{username}</h1><p>is building cool stuff</p></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">Supporters ({payments.length})</h2>
          <p className="mb-4">Total Raised: ₹{total} (Fake)</p>
          <div className="space-y-2">
            {payments.length==0 && <p>No payments yet - Be first!</p>}
            {payments.map(p => <div key={p._id} className="border p-3 rounded flex justify-between"><span><b>{p.name}</b> — {p.message}</span><span>₹{p.amount}</span></div>)}
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-50 p-6 rounded-xl border h-fit">
          <h3 className="font-bold text-xl mb-3">Buy {username} a Chai (DEMO)</h3>
          <div className="flex gap-2 my-3">
            {[10, 50, 100, 500].map(v => <button key={v} onClick={() => setAmount(v)} className={`px-4 py-2 rounded ${amount==v ? 'bg-black text-white' : 'bg-white border'}`}>₹{v}</button>)}
          </div>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="w-full p-3 my-2 border rounded" />
          <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Say something nice..." className="w-full p-3 my-2 border rounded" />
          <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className="w-full p-3 my-2 border rounded" />
          <button onClick={pay} className="bg-green-600 text-white w-full p-3 rounded-lg mt-2">Fake Pay ₹{amount} (No Razorpay)</button>
          <p className="text-xs text-gray-500 mt-2 text-center">Baad me Razorpay keys add karke real payment on kar sakte ho</p>
        </div>
      </div>
    </div>
  )
}

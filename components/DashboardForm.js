"use client"
import { useState } from "react"
export default function DashboardForm({ user }) {
  const [form, setForm] = useState({ razorpayid: user.razorpayid || "", razorpaysecret: user.razorpaysecret || "" });
  const [saving, setSaving] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/user/update", { method: "POST", body: JSON.stringify(form), headers:{"Content-Type":"application/json"} });
    const data = await res.json();
    setSaving(false);
    if (data.success) alert("Keys updated!");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-white p-6 rounded-xl border">
      <label className="font-semibold">Razorpay Key ID</label>
      <input value={form.razorpayid} onChange={(e) => setForm({...form, razorpayid: e.target.value})} placeholder="rzp_test_xxxx" className="border p-3 rounded" />
      <label className="font-semibold">Razorpay Key Secret</label>
      <input value={form.razorpaysecret} onChange={(e) => setForm({...form, razorpaysecret: e.target.value})} placeholder="secret" className="border p-3 rounded" />
      <button type="submit" className="bg-black text-white p-3 rounded">{saving? "Saving...":"Save Keys"}</button>
    </form>
  )
}

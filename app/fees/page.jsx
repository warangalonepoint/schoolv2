"use client";
import { useEffect, useState } from "react";
import { getFees, getStudentForDemo } from "@/lib/supabase";
import FeeCard from "@/components/fee-card";

export default function FeesPage() {
  const [due, setDue] = useState([]);
  const [paid, setPaid] = useState([]);

  useEffect(() => {
    (async () => {
      const s = await getStudentForDemo();
      if (s?.id) {
        const res = await getFees(s.id);
        setDue(res.due || []);
        setPaid(res.paid || []);
      }
    })();
  }, []);

  const firstDue = due?.[0];

  return (
    <div style={{ paddingTop: 16 }}>
      <h2>Fees</h2>
      <div style={{ height: 10 }} />
      <FeeCard dueAmount={firstDue?.amount_due} dueDate={firstDue?.due_date} />

      <div id="details" style={{ height: 16 }} />
      <h3 style={{ marginTop: 16 }}>History</h3>
      <div className="grid">
        {paid.length === 0 && <div className="small">No past payments.</div>}
        {paid.map((p) => (
          <div key={p.id} className="card" style={{ padding: 12 }}>
            <div className="row" style={{ justifyContent:"space-between" }}>
              <b>{p.term}</b>
              <span className="badge">PAID</span>
            </div>
            <div className="small">Amount: ₹{p.amount_paid}</div>
            <div className="small">Date: {p.paid_date || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

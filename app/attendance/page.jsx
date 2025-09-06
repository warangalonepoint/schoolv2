"use client";
import { useEffect, useState } from "react";
import { getAttendanceSummary, getStudentForDemo } from "@/lib/supabase";

export default function AttendancePage() {
  const [summary, setSummary] = useState({ present: 0, absent: 0, working: 0 });
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
  });

  useEffect(() => {
    (async () => {
      const s = await getStudentForDemo();
      const res = await getAttendanceSummary(s?.id, month);
      setSummary(res);
    })();
  }, [month]);

  return (
    <div style={{ paddingTop: 16 }}>
      <h2>Attendance</h2>
      <div className="row" style={{ margin: "10px 0" }}>
        <input className="input" type="month" value={month} onChange={e => setMonth(e.target.value)} />
      </div>
      <div className="grid grid-3">
        <div className="card" style={{ padding: 16 }}>
          <div className="small">Overall Attendance %</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
            {summary.working ? ((summary.present/summary.working)*100).toFixed(2) : "0.00"}%
          </div>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <div className="small">Total Present</div>
          <div style={{ fontWeight: 800, fontSize: 22 }}>{summary.present}</div>
        </div>
        <div className="card" style={{ padding: 16 }}>
          <div className="small">Total Working</div>
          <div style={{ fontWeight: 800, fontSize: 22 }}>{summary.working}</div>
        </div>
      </div>
    </div>
  );
}

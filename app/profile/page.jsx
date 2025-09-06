"use client";
import { useEffect, useState } from "react";
import { getStudentForDemo } from "@/lib/supabase";

export default function ProfilePage() {
  const [s, setS] = useState(null);
  useEffect(() => { (async () => setS(await getStudentForDemo()))(); }, []);

  const row = (k, v) => (
    <div className="row" style={{ justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid var(--border)" }}>
      <div className="small">{k}</div><div><b>{v || "-NA-"}</b></div>
    </div>
  );

  return (
    <div style={{ paddingTop: 16 }}>
      <h2>Student Profile</h2>
      <div style={{ height: 10 }} />
      <div className="card" style={{ padding: 16 }}>
        <div className="row" style={{ gap:12, alignItems:"center" }}>
          <div style={{ width:72, height:72, borderRadius:999, background:"#e5e7eb" }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>{s?.name || "Demo Student"}</div>
            <div className="small">{s?.class || "Grade 6"} — {s?.section || "A"}</div>
          </div>
        </div>
        <hr />
        {row("Aadhaar Number", s?.aadhaar)}
        {row("PEN Number", s?.pen)}
        {row("APAAR No", s?.apaar)}
        {row("Date Of Birth", s?.dob)}
        {row("Admission Type", s?.admission_type || "Day Scholar")}
        {row("School Transport", s?.transport || "No")}
        {row("Blood Group", s?.blood_group)}
      </div>
    </div>
  );
}

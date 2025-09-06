"use client";
import ThemeToggle from "@/components/theme-toggle";

export default function Header({ student }) {
  return (
    <div className="header">
      <div className="container" style={{ padding: "12px 16px" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="row" style={{ gap: 10 }}>
            <div className="chip" style={{ fontWeight: 800 }}>GULLAPALLY AADHYA</div>
          </div>
          <ThemeToggle />
        </div>
        <div className="row" style={{ gap: 16, marginTop: 8, overflowX: "auto" }}>
          {["What’s New", "Attendance", "Timetable", "Report Card"].map((x) => (
            <div key={x} className="card" style={{ padding: "8px 12px", background: "rgba(255,255,255,.14)", border: "0", color:"#fff" }}>{x}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

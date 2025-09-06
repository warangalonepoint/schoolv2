import Link from "next/link";

function Tile({ href, title, emoji }) {
  return (
    <Link href={href} className="card" style={{ padding: 12, textDecoration:"none", color:"inherit" }}>
      <div className="row" style={{ justifyContent:"space-between" }}>
        <div className="row" style={{ gap:10 }}><span style={{ fontSize: 22 }}>{emoji}</span><b>{title}</b></div>
        <span>›</span>
      </div>
    </Link>
  );
}

export default function SectionTiles() {
  return (
    <div className="grid" style={{ marginTop: 12 }}>
      <div className="small" style={{ fontWeight: 700, margin: "8px 2px" }}>SIS</div>
      <div className="grid grid-3">
        <Tile href="/attendance" title="Attendance" emoji="📅" />
        <Tile href="/menu#timetable" title="Timetable" emoji="⏱️" />
        <Tile href="/menu#learning" title="Learning" emoji="▶️" />
        <Tile href="/menu#hallticket" title="Hall Ticket" emoji="🎟️" />
      </div>

      <div className="small" style={{ fontWeight: 700, margin: "16px 2px 8px" }}>Finance</div>
      <div className="grid grid-3">
        <Tile href="/fees" title="Pay Fee" emoji="💳" />
        <Tile href="/fees#details" title="Fee Details" emoji="📈" />
        <Tile href="/menu#miscfee" title="Misc Fee" emoji="✂️" />
      </div>

      <div className="small" style={{ fontWeight: 700, margin: "16px 2px 8px" }}>Communication</div>
      <div className="grid grid-3">
        <Tile href="/notifications" title="Announcements" emoji="📣" />
        <Tile href="/menu#assignments" title="Assignments" emoji="📝" />
        <Tile href="/menu#chat" title="Student Wall" emoji="💬" />
      </div>
    </div>
  );
}

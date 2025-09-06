export default function MenuPage() {
  const sections = [
    ["SIS", [
      ["Attendance","/attendance","📅"],
      ["Learning","#learning","▶️"],
      ["Timetable","#timetable","⏱️"],
      ["Hall Ticket","#hallticket","🎟️"]
    ]],
    ["Finance", [
      ["Misc Fee","#miscfee","✂️"],
      ["Pay Fee","/fees","💳"],
      ["Fee Details","/fees#details","📈"]
    ]],
    ["Communication", [
      ["Announcements","/notifications","📣"],
      ["Assignments","#assignments","📝"],
      ["Student Wall","#chat","💬"]
    ]]
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <h2>Menu</h2>
      {sections.map(([title, items]) => (
        <div key={title} style={{ marginTop: 12 }}>
          <div className="card" style={{ background:"var(--brand)", color:"#fff", border:0, padding:"8px 12px", fontWeight:800 }}>{title}</div>
          <div className="grid grid-3" style={{ marginTop: 12 }}>
            {items.map(([t,href,emoji]) => (
              <a key={t} href={href} className="card" style={{ padding:"16px", textDecoration:"none", color:"inherit" }}>
                <div style={{ fontSize: 26 }}>{emoji}</div>
                <div style={{ marginTop: 6, fontWeight: 700 }}>{t}</div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

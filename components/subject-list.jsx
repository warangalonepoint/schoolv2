function Row({ letter, title, by }) {
  return (
    <div className="card" style={{ padding: 14, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div className="row">
        <div style={{ width:36, height:36, borderRadius:999, border:"2px solid #ef4444", display:"grid", placeItems:"center", marginRight:12 }}>{letter}</div>
        <div>
          <div style={{ fontWeight:800 }}>{title}</div>
          <div className="small">by {by}</div>
        </div>
      </div>
      <div>›</div>
    </div>
  );
}

export default function SubjectList() {
  const rows = [
    ["C","COMPUTER","—"],
    ["F","FRENCH","PRASHANTH L"],
    ["D","dance","—"],
    ["M","music","MOSES P"],
    ["S","swimming","RAJESH MADDELA"],
    ["S","skating","ARUN ARUN"]
  ];
  return (
    <div className="grid" style={{ marginTop:12 }}>
      {rows.map(([l,t,b]) => <Row key={t} letter={l} title={t} by={b} />)}
    </div>
  );
}

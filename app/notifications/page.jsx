"use client";
import { useEffect, useState } from "react";
import { getAnnouncements } from "@/lib/supabase";

export default function NotificationsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => { (async () => setItems(await getAnnouncements()))(); }, []);

  return (
    <div style={{ paddingTop: 16 }}>
      <h2>Announcements</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {items.length === 0 && <div className="small">No announcements.</div>}
        {items.map(a => (
          <div key={a.id} className="card" style={{ padding: 12 }}>
            <div className="row" style={{ justifyContent:"space-between" }}>
              <b>{a.title}</b>
              <span className="small">{a.date?.slice(0,10)}</span>
            </div>
            <div style={{ marginTop: 6 }}>{a.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

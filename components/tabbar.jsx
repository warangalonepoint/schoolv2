"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/fees", label: "Fee" },
  { href: "/menu", label: "Menu" },
  { href: "/notifications", label: "Notifications" },
  { href: "/profile", label: "Profile" }
];

export default function TabBar() {
  const path = usePathname();
  return (
    <nav className="tabbar row" style={{ justifyContent: "space-around" }}>
      {tabs.map(t => (
        <Link key={t.href} href={t.href} className={path === t.href ? "active" : ""}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

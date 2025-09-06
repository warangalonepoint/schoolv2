import "./globals.css";
import TabBar from "@/components/tabbar";

export const metadata = {
  title: "CampusOne",
  description: "School PWA – fast, installable, offline"
};

function registerSW() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    });
  }
}

export default function RootLayout({ children }) {
  registerSW();
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b5fff" />
      </head>
      <body>
        <main className="container" style={{ paddingBottom: 72 }}>
          {children}
        </main>
        <TabBar />
      </body>
    </html>
  );
}

import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner card" style={{ padding: 8 }}>
      <Image src="/hero.jpg" alt="Campus banner" width={1200} height={600} style={{ width:"100%", height:"auto", borderRadius:12 }} priority />
    </div>
  );
}

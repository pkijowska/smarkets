import Link from "next/link";

export default async function Home() {
  return (
    <div className="center">
      <p>Home page content coming soon</p>
      <Link href="/events/football">{"> "} View events</Link>
    </div>
  );
}

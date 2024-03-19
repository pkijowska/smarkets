import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center">
      <h3>404 Not Found</h3>
      <p>Could not find the requested page.</p>
      <Link href="/events/football">{"> "} Go Back</Link>
    </div>
  );
}

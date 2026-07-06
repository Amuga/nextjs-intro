import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white/50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Cool Inc.
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-sm hover:underline">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

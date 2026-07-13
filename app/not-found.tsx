import Link from "next/link";
export default function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>I have no recollection of this place</h1>
      <h2>
        You have encountered my 404 page, please return to the{" "}
        <Link href="/" className="text-blue-400">
          Home
        </Link>{" "}
        page and pretend this never happened.
      </h2>
    </section>
  );
}

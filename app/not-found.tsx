import Link from "next/link";
export default function NotFoundPage() {
  return (
    <section className="not-found text-center">
      <h1 className="text-3xl">404 Not Found</h1>
      <h2 className="text-2xl">I have no recollection of this place...</h2>
      <h2 className="text-xl">
        You have encountered my 404 page, please return to the{" "}
        <Link href="/" className="text-blue-400">
          Home
        </Link>{" "}
        page and pretend this never happened.
      </h2>
    </section>
  );
}

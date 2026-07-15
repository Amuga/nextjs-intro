import Link from "next/link";
import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import { getCharacters } from "@/data/getCharacters";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}
export default async function Home({ searchParams }: HomeProps) {
  const { page } = await searchParams;
  const currentPage = isNaN(Number(page)) ? 1 : Number(page);
  const apiCharacters = await getCharacters(currentPage);

  return (
    <section className="flex flex-col gap-2">
      <Hero />
      <EventList characters={apiCharacters} />
      <div className="flex gap-3 justify-between text-xl text-blue-900">
        <Link
          href={currentPage > 1 ? `/?page=${currentPage - 1}` : "/"}
          scroll={false}
        >
          {currentPage === 1 ? "" : "Previous"}
        </Link>
        <Link href={`/?page=${currentPage + 1}`} scroll={false}>
          Next
        </Link>
      </div>
    </section>
  );
}

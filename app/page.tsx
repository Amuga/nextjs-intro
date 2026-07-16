import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import Pagination from "@/components/Pagination";
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
      <Pagination currentPage={currentPage} />
    </section>
  );
}

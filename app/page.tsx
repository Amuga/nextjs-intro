import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import { getCharacters } from "@/data/getCharacters";

export default async function Home() {
  const apiCharacters = await getCharacters();

  console.log(apiCharacters);

  return (
    <section className="flex flex-col gap-2">
      <Hero />
      <EventList characters={apiCharacters} />
    </section>
  );
}

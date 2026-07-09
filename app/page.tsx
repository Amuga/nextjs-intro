import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import data from "@/data/characters.json";
import { Character } from "@/types/types";
export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <Hero />
      <EventList characters={data.chars as Character[]} />
    </section>
  );
}

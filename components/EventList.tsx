import { Character } from "@/types/types";
import EventCard from "./EventCard";

export default function EventList({ characters }: { characters: Character[] }) {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-2xl">Some &quot;API&quot; Practice</h2>
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-4">
        {characters.map((char: Character) => {
          return <EventCard key={char.id} char={char} />;
        })}
      </ul>
    </section>
  );
}

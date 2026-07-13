import Link from "next/link";
import Image from "next/image";
import { Character, Species } from "@/types/types";

//Used the EventCardProps props here instead just to try both different ways
interface EventCardProps {
  char: Character;
}

const speciesColors: Record<Species, string> = {
  HUMAN: "bg-blue-900",
  ALIEN: "bg-green-900",
  ROBOT: "bg-gray-900",
  HEAD: "bg-cyan-900",
  MUTANT: "bg-emerald-900",
  MONSTER: "bg-indigo-900",
  UNKNOWN: "bg-yellow-900",
};

export default function EventCard({
  char: { id, name, species, status, image },
}: EventCardProps) {
  const speciesClass = speciesColors[species] ?? "bg-slate-400";
  return (
    <li
      className={`rounded mb-4 border border-gray-300 ${speciesClass} hover:scale-105 transition-transform`}
    >
      <Link href={`/character/${id}`} className="block">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={200}
            height={150}
            className="rounded transition-transform"
          />
        ) : (
          <p className="p-4">This character&apos;s face is unknown</p>
        )}
        <div className="card-info bg-black/10 m-2 flex flex-col gap-1 p-2 rounded capitalize">
          <p>Name: {name.toLowerCase()}</p>
          <p>Species: {species.toLowerCase()}</p>
          <p>Status: {status.toLowerCase()}</p>
        </div>
      </Link>
    </li>
  );
}

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
      className={`wrap-break-word rounded border border-gray-300 ${speciesClass} hover:scale-105 transition-transform`}
    >
      <Link
        href={`/character/${id}`}
        className="flex flex-1 h-full flex-col gap-2"
      >
        <div className="flex-2 flex items-center h-40 w-full">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={250}
              height={150}
              className="object-fit h-40 w-full"
            />
          ) : (
            <p className="p-4 text-center">
              There are no records for this character&apos;s face
            </p>
          )}
        </div>
        <div className="flex flex-col flex-1 justify-between card-info bg-black/10 gap-1 p-2 rounded capitalize text-sm mb-2 mx-2">
          <p>Name: {name.toLowerCase()}</p>
          <p>Species: {species.toLowerCase()}</p>
          <p>Status: {status.toLowerCase()}</p>
        </div>
      </Link>
    </li>
  );
}

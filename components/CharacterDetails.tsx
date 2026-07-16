import Image from "next/image";
import { Character } from "@/types/types";

interface CharacterDetailsProps {
  character: Character;
}

export default function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <div className="rounded-lg border border-gray-300 shadow-sm overflow-hidden bg-blue-700/10">
      <div className="relative h-72 w-full content-center">
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name}
            loading="eager"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <p className="text-center">No image for this character</p>
        )}
      </div>

      <div className="p-6 space-y-3">
        <h1 className="text-3xl font-semibold">{character.name}</h1>
        <p className="text-sm text-gray-500">ID: {character.id}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-cyan-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Species
            </p>
            <p className="mt-1 text-lg font-medium">{character.species}</p>
          </div>

          <div className="rounded-lg bg-cyan-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Status
            </p>
            <p className="mt-1 text-lg font-medium">{character.status}</p>
          </div>

          <div className="rounded-lg bg-cyan-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Gender
            </p>
            <p className="mt-1 text-lg font-medium">{character.gender}</p>
          </div>

          <div className="rounded-lg bg-cyan-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Created
            </p>
            <p className="mt-1 text-lg font-medium">
              {new Date(character.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

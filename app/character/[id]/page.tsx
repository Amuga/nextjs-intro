import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCharacter } from "@/data/getCharacters";
import CharacterDetails from "@/components/CharacterDetails";

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const character = await getCharacter(id);

  if (!character?.id) {
    notFound();
  }

  return (
    <article className="max-w-7xl mx-auto p-6 md:px-12 w-full">
      <Link
        href="/"
        className="text-sm text-sky-700 hover:underline block mb-6"
      >
        ← Back to home
      </Link>
      <CharacterDetails character={character} />
    </article>
  );
}

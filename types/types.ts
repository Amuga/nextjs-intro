export type Species =
  | "HUMAN"
  | "ROBOT"
  | "HEAD"
  | "ALIEN"
  | "MUTANT"
  | "MONSTER"
  | "UNKNOWN";

export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: Species;
  createdAt: string;
  image: string;
}

export interface CharacterResponseData {
  items: Character[];
  total: number;
  page: number;
  pages: number;
}

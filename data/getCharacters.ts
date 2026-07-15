import { Character } from "@/types/types";

interface CharactersResponseData {
  items: Character[];
  total: number;
  page: number;
  pages: number;
}

const BASEURL = "https://futuramaapi.com/api/";
type HttpMethod = "GET" | "POST" | "PUT";
enum REQTYPE {
  get = "GET",
  put = "PUT",
  post = "POST",
}

//Can further scale to accept error messages etc and do the fetch in the actual helper
const makeReq = (
  requestType: HttpMethod,
  endpoint: string,
): Promise<Response> => {
  const headers = new Headers();
  const url = BASEURL + endpoint;
  headers.set("Content-Type", "application/json");

  const req = new Request(url, {
    method: requestType,
    headers,
  });

  return fetch(req);
};

export const getCharacters = async (): Promise<Character[]> => {
  const res = await makeReq(REQTYPE.get, "characters");
  if (!res.ok) {
    throw new Error("Computer says no " + res.statusText);
  }
  const jsonData: CharactersResponseData = await res.json();

  return jsonData.items;
};

export const getCharacter = async (id: string): Promise<Character> => {
  const res = await makeReq(REQTYPE.get, "characters/" + id);

  const character = await res.json();
  return character ?? null;
};

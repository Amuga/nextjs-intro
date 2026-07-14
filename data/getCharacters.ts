import { CharacterResponseData, Character } from "@/types/types";

const BASEURL = "https://futuramaapi.com/api/";

export const getCharacters = async (): Promise<Character[]> => {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  const options = {
    method: "GET",
    headers: headers,
  };

  const res = await fetch(BASEURL + "characters", options);
  if (!res.ok) {
    throw new Error("Computer says no " + res.statusText);
  }
  const jsonData: CharacterResponseData = await res.json();

  return jsonData.items;
};

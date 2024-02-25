import fetch from "node-fetch";

(async function () {
  let url = "https://rickandmortyapi.com/api/character";
  const characters = [];

  do {
    const response = await fetch(url);
    const data = await response.json();
    url = data.info.next;
    characters.push(...data.results);
  } while (url);
  const statuses = new Set(characters.map((character) => character.status));
  const species = new Set(characters.map((character) => character.species));
  const types = new Set(characters.map((character) => character.type));
  const genders = new Set(characters.map((character) => character.gender));
  const jsonOut = JSON.stringify({
    species: [...species],
    types: [...types],
    statuses: [...statuses],
    genders: [...genders],
  });
  console.log(
    "const data: {statuses: string[];species: string[]; types: string[]; genders: string[]}",
    `= ${jsonOut};`,
    "export default data",
  );
})();

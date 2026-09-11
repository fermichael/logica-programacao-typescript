let films = ["Duna: Parte 2", "Divertida Mente 2"];

export const toUpperCaseStrings = (arr: string[]) => {
  return arr.map((value) => value.toUpperCase());
};

console.log(toUpperCaseStrings(films));

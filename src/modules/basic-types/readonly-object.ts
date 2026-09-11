type Programmer = {
  readonly name: string;
  age: number;
  skills: string[];
  others: { [key: string]: string | number };
};

let programmer = {
  name: "Michael",
  age: 25,
  skills: ["TypeScript", "JavaScript"],
  others: { city: "Brasília", cep: 123 },
};

function showProgrammer(value: Programmer) {
  programmer.name = "Lari";
  console.log(value);
}

showProgrammer(programmer);

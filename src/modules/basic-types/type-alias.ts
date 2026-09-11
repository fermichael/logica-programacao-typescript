type Programmer = {
  name: string;
  age: number;
  skills: string[];
};

let programmer = {
  name: "Michael",
  age: 25,
  skills: ["TypeScript", "JavaScript"],
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer(programmer);

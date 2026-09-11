let programmer: {
  name: "Michael";
  age: 25;
  skills: ["TypeScript", "JavaScript"];
};

export function showProgrammer(programmer: {
  name: string;
  age: number;
  skills: string[];
}) {
  console.log(programmer);
}

console.log();

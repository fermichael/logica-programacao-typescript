type Adress = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Adress[];
};

const addresses: Adress[] = [
  { cep: "00000-000", default: false },
  { cep: "00000-001", default: true },
  { cep: "00000-003", default: false },
];

const customer: Customer = {
  addresses: addresses,
};

function findTrue(customer: Customer): Adress | undefined {
  return customer.addresses.find((addresses) => addresses.default);
}

const verdadeiro = findTrue(customer);

console.log(verdadeiro);

const addresses = [
    { cep: "00000-000", default: false },
    { cep: "00000-001", default: true },
    { cep: "00000-003", default: false },
];
const customer = {
    addresses: addresses,
};
function findTrue(customer) {
    return customer.addresses.find((addresses) => addresses.default);
}
const verdadeiro = findTrue(customer);
console.log(verdadeiro);
export {};

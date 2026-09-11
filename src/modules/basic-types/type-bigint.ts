export const bootstrap = (): void => {
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 -> o maior inteiro "seguro"

  console.log(9007199254740991 + 1); // 9007199254740992 (ok, ainda certo)
  console.log(9007199254740991 + 2); // 9007199254740992 (ERRADO! deveria ser 993, mas repetiu o mesmo número)
};
//adicionar n no final transformar em bigint

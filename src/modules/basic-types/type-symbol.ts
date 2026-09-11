export const bootstrap = (): void => {
  const title: symbol = Symbol("HOME");
  const pageTitle: symbol = Symbol("HOME");

  if (title === pageTitle) {
    console.log("São iguais");
  } else {
    console.log("São coisas completamente diferentes");
  }

  const titleBloqueado: symbol = Symbol("title");

  const Page = { title: "HOME", [titleBloqueado]: "Página principal" };
  console.log(Page);
};

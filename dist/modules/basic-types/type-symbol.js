export const bootstrap = () => {
    const title = Symbol("HOME");
    const pageTitle = Symbol("HOME");
    if (title === pageTitle) {
        console.log("São iguais");
    }
    else {
        console.log("São coisas completamente diferentes");
    }
    const titleBloqueado = Symbol("title");
    const Page = { title: "HOME", [titleBloqueado]: "Página principal" };
    console.log(Page);
};

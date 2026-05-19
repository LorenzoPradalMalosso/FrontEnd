"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderizarPerfil(u) {
    console.log(`ID: ${u.id}`);
    console.log(`Função: ${u.isAdmin ? "Administrador" : "Funcionário"}`);
    console.log(`Nome: ${u.nome} (${u.email})`);
    console.log("======================");
}
console.log("Lista de Usuários");
console.log("======================");
const usuarios = [
    {
        id: 1,
        nome: "Lorenzo",
        email: "lpmalosso@gmail.com",
        isAdmin: true,
    },
    {
        id: 2,
        nome: "Murilo",
        email: "murilodovigo@gmail.com",
        isAdmin: false,
    },
    {
        id: 3,
        nome: "Kaio",
        email: "kaiomartinez@gmail.com",
        isAdmin: false,
    },
];
usuarios.forEach((usuario) => {
    renderizarPerfil(usuario);
});
//# sourceMappingURL=index.js.map
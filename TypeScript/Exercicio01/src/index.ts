interface Usuario {
    id: number;
    nome: string;
    email: string;
    isAdmin: boolean;
}

function renderizarPerfil(u: Usuario): void{
    console.log(`ID: ${u.id}`);
    console.log(`Função: ${u.isAdmin ? "Administrador" : "Funcionário"}`);
    console.log(`Nome: ${u.nome} (${u.email})`);
    console.log("======================");
}

console.log("Lista de Usuários");
console.log("======================");

const usuarios: Usuario[] = [
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

usuarios.forEach((usuario) =>{
    renderizarPerfil(usuario);
})
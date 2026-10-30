let clientes = [];
let resposta;

do {
    let nome = prompt("Digite o nome do cliente:");

    clientes.push(nome);

    resposta = prompt("Deseja inserir mais algum nome? (sim/não)");

} while (resposta=== "sim");

alert("Lista de clientes cadastrados:\n" + clientes.join("\n"));

console.log("Clientes cadastrados:", clientes);
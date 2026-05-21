const estoqueVinho = {};
function cadastrarVinho(){
    while(confirm("Você deseja cadastrar um vinho ?")){
        const nomeVinho = prompt("Informe o nome do vinho: ");
        const novoEstoqueVinho = parseInt(prompt("Informe a quantidade de vinho a ser armazenada: "));
        const safraVinho = parseInt(prompt("Indique qual a safra do vinho: "));
        const tipoVinho = prompt("Indique qual o tipo do vinho: ");
        estoqueVinho[nomeVinho] = (estoqueVinho[nomeVinho] ?? 0) + novoEstoqueVinho;
        alert(`${nomeVinho} foi adicionado e agora existem ${estoqueVinho[nomeVinho]} desse vinho !`);
        }
}
cadastrarVinho();
function listarVinhos() {
  for (const nome in estoqueVinho) {
    const v = estoqueVinho[nome];
    alert(`${nome} | Tipo: ${v.tipo} | Safra: ${v.safra} | Quantidade: ${v.quantidade}`);
  }
}
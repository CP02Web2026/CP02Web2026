const estoqueVinho = {};
let contador = 0;
function cadastrarVinho(){
    while(confirm("Você deseja cadastrar um vinho ?")){
        let nomeVinho = prompt("Informe o nome do vinho: ");
        while (nomeVinho == null){
           nomeVinho = prompt("Informe o nome do vinho: ");
        }
        let novoEstoqueVinho = parseInt(prompt("Informe a quantidade de vinho a ser armazenada: "));
        while(novoEstoqueVinho == null){
            novoEstoqueVinho = parseInt(prompt("Informe a quantidade de vinho a ser armazenada: "));
        }
        let safraVinho = parseInt(prompt("Indique qual a safra do vinho: "));
        while (safraVinho == null){
            safraVinho = parseInt(prompt("Indique qual a safra do vinho: "));
        }
        let tipoVinho = prompt("Indique qual o tipo do vinho: ");
        while (tipoVinho == null){
            tipoVinho = prompt("Indique qual o tipo do vinho: ");
        }
        estoqueVinho[nomeVinho] = {
            quantidade: (estoqueVinho[nomeVinho]?.quantidade ?? 0) + novoEstoqueVinho,
            safra: safraVinho,
            tipo: tipoVinho
        }
        alert(`${nomeVinho} foi adicionado e agora existem ${estoqueVinho[nomeVinho].quantidade} desse vinho !`);
        contador += 1;
        }
}
function listarVinhos() {
  for (const nome in estoqueVinho) {
    const v = estoqueVinho[nome];
    alert(`${nome} | Tipo: ${v.tipo} | Safra: ${v.safra} | Quantidade: ${v.quantidade}`);
  }
}
function verificarEstoque(){
    const nomeVinho = prompt("Informe o nome do vinho que deseja verificar: ");
    if (estoqueVinho[nomeVinho].quantidade < 5){
        alert(`O estoque está baixo, possuem ${estoqueVinho[nomeVinho].quantidade} unidades em estoque`);
    }
    else{
        alert(`O estoque do vinho ${nomeVinho} é de ${estoqueVinho[nomeVinho].quantidade}`);
    }
}
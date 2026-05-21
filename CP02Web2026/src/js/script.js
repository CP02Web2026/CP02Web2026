const estoqueVinho = {};
let contator = 0;
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
        estoqueVinho[nomeVinho] = (estoqueVinho[nomeVinho] ?? 0) + novoEstoqueVinho;
        alert(`${nomeVinho} foi adicionado e agora existem ${estoqueVinho[nomeVinho]} desse vinho !`);
        contator += 1;
        }
}
function listarVinhos() {
  for (const nome in estoqueVinho) {
    const v = estoqueVinho[nome];
    alert(`${nome} | Tipo: ${v.tipoVinho} | Safra: ${v.safraVinho} | Quantidade: ${v.novoEstoqueVinho}`);
  }
}
function verificarEstoque(){
    const nomeVinho = prompt("Informe o nome do vinho que deseja verificar: ");
    if (estoqueVinho[nomeVinho] < 5){
        alert(`O estoque está baixo, possuem ${estoqueVinho[nomeVinho]} unidades em estoque`);
    }
    else{
        alert(`O estoque do vinho ${nomeVinho} é de ${estoqueVinho[nomeVinho]}`);
    }
}
const estoqueVinho = {};
let contador = 0;
let contadorBaixo = 0;
function cadastrarVinho(){
    while(confirm("Você deseja cadastrar um vinho ?")){
        let nomeVinho = prompt("Informe o nome do vinho: ");
        if (nomeVinho === null) continue;{
        }
        let novoEstoqueVinho = parseInt(prompt("Informe a quantidade de vinho a ser armazenada: "));
        if (novoEstoqueVinho === null) continue;{
        }
        let safraVinho = parseInt(prompt("Indique qual a safra do vinho: "));
        if (safraVinho === null) continue;{
        }
        let tipoVinho = prompt("Indique qual o tipo do vinho: ");
        if (tipoVinho === null) continue;{
        }
        estoqueVinho[nomeVinho] = {
            quantidade: (estoqueVinho[nomeVinho]?.quantidade ?? 0) + novoEstoqueVinho,
            safra: safraVinho,
            tipo: tipoVinho
        }
        alert(`${nomeVinho} foi adicionado e agora existem ${estoqueVinho[nomeVinho].quantidade} desse vinho !`);
        contador += 1;
        vinhosCadastrados();

        if (estoqueVinho[nomeVinho].quantidade < 5) {
            contadorBaixo += 1;
            vinhosBaixos();
        }

        vinhoMaisAntigo();
    }
        
}
function listarVinhos() {
  for (const nome in estoqueVinho) {
    const v = estoqueVinho[nome];
    alert(`${nome} | Tipo: ${v.tipo} | Safra: ${v.safra} | Quantidade: ${v.quantidade}`);
  }
}
function verificarEstoque() {
    const nomeVinho = prompt("Informe o nome do vinho que deseja verificar: ");
    if (!estoqueVinho[nomeVinho]) {
        alert("Vinho não encontrado no estoque.");
        return;
    }
    const qtd = estoqueVinho[nomeVinho].quantidade;
    if (qtd < 5) {
        alert(`Estoque baixo: ${qtd} unidades.`);
    } else {
        alert(`O estoque de ${nomeVinho} é de ${qtd} unidades.`);
    }
}

function vinhosCadastrados() {
    const elemento = document.getElementById("contadorVinhos");
    elemento.textContent = `Vinhos cadastrados: ${contador}`;
}

function vinhosBaixos() {
    const elemento = document.getElementById("vinhoBaixo");
    elemento.textContent = `Vinhos com estoque baixo: ${contadorBaixo}`;
}

function vinhoMaisAntigo() {
    let nomeAntigo = null;
    let safraAntiga = Infinity; 

    for (const nome in estoqueVinho) {
        if (estoqueVinho[nome].safra < safraAntiga) {
            safraAntiga = estoqueVinho[nome].safra; 
            nomeAntigo = nome;                      
        }
    }

    const elemento = document.getElementById("vinhoAntigo");
    if (nomeAntigo) {
        elemento.textContent = `Vinho mais antigo: ${nomeAntigo} (${safraAntiga})`;
    }
}
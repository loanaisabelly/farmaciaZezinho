import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { ProdutoController } from "./Controller/ProdutoController";
import { Medicamento } from "./src/util/model/medicamento";
import { Cosmetico } from "./src/util/model/Cosmetico";

export function main(this: any) {

    let opcao, id, tipo, preco: number;
    let nome, generico, fragancia: string;

    let tipoProduto = ['Medicamento', 'Cosmético'];

    // Instanciar um Objeto da Classe ProdutoController
    const produtoControlle = new ProdutoController();

    produtoControlle.cadastrar(new Medicamento(produtoControlle.gerarId(), "Tylenol", 1, 9.50, "Paracetamol"))
    produtoControlle.cadastrar(new Medicamento(produtoControlle.gerarId(), "Sabonete Rexona", 2, 6.00, "Sun"))
    produtoControlle.cadastrar(new Medicamento(produtoControlle.gerarId(), "TDesodorante Rexona", 2, 12.00, "Sun"))

    while (true) {

        console.log( colors.fg.green, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                FARMÁCIA DO ZEZINHO                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6){
            console.log(colors.fg.green, 
                "\nObrigada por escolher a Farmácia do Zezinho. Volte Sempre!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.green, 
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");
 
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
 
                preco = readlinesync.questionFloat("Digite o preco: ");

                switch(tipo){
                    case 1: 
                    generico = readlinesync.question("Digite o Nome Generico do Produto: ");
                    produtoControlle.cadastrar(new Medicamento(produtoControlle.gerarId(), nome, tipo, preco, generico))
                    break;

                    case 2:
                       fragancia = readlinesync.question("Digite a Fragância do Produto: ");
                        produtoControlle.cadastrar(new Cosmetico(produtoControlle.gerarId(), nome, tipo, preco, fragancia))

                    break;
                }        
                keyPress()
                break;


            case 2:
                console.log(colors.fg.green, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);
                    produtoControlle.listarTodas();

                keyPress()
                break;



            case 3:
                console.log( colors.fg.green,
                    "\n\nBuscar Produtos por ID\n\n", colors.reset);
                   id = readlinesync.questionInt("Digite o Id: ")
                   produtoControlle.procurarPorId(id);

                keyPress()
                break;


            case 4:
                console.log(colors.fg.green, 
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);
                    id = readlinesync.questionInt("Digite o Id do Produto: ");
 
                // Verifica se o Produto existe
                let produto = produtoControlle.buscarNoArray(id);
 
                if (produto !== null) {
 
                    nome = readlinesync.question("Digite o Nome do Produto: ");
 
                    tipo = produto.tipo;
 
                    preco = readlinesync.questionFloat("Digite o preco: ");
 
                    switch (tipo) {
                        case 1:
                            generico = readlinesync.question("Digite o Nome Generico do Medicamento: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            produtoControlle.atualizar(new Medicamento(id,
                                nome, tipo, preco, generico));
                            break;
                        case 2:
                            fragancia = readlinesync.question("Digite a frangancia do Cosmetico: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            produtoControlle.atualizar(new Cosmetico(id,
                                nome, tipo, preco, fragancia));
                            break;
                    }
 
                } else
                    console.log("Produto não Encontrado!")

                keyPress()
                break;


            case 5:
                console.log(colors.fg.green, 
                    "\n\nApagar o Produto\n\n", colors.reset);
                 console.log("\n\nDigite o Id do Produto: \n\n");
                  id = readlinesync.questionInt(" "); 
                  produtoControlle.deletar(id);
                keyPress()
                break;

            default:
                console.log(colors.fg.green, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Loana Isabelly ");
    console.log("Generation Brasil ");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log( " ");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
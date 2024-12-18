import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../src/util/colors";
import { Produto } from "../src/util/model/Produto";



export class ProdutoController implements ProdutoRepository{


    listaProdutos = new Array<Produto>();

    public id: number = 0;
    listaContas: any;
    

    procurarPorId(id: number): void {
    let buscaProduto = this.buscarNoArray(id);
         
        if (buscaProduto != null) {
          buscaProduto.visualizar();
        } else
        console.log(colors.fg.red, "\nO produto Id: " + id
         + " não foi encontrado!", colors.reset);
    }


    listarTodas(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());

        // Outra forma de utilizar o For
        // for(let produto of this.listaProdutos){
        // produto.visualizar()};

    }


    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O Produto foi Cadastrado com Sucesso!")
    }


    atualizar(produto: Produto): void {
    let buscaProduto = this.buscarNoArray(this.id);
         
    if (buscaProduto != null) {
       this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
       console.log(colors.fg.green, "\nO Produto Id: " + produto.id + 
        " foi atualizada com sucesso!", colors.reset);
     } else
        console.log(colors.fg.red, "\nO Produto Id: " + produto.id + 
        " não foi encontrado!", colors.reset);
    }


    deletar(id: number): void {
    let buscaProduto = this.buscarNoArray(id);
         
     if (buscaProduto != null) {
        this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
        console.log(colors.fg.green,"\nO Produto Id: " + id + 
        " foi apagada com sucesso!", colors.reset);
        
    }else
        console.log(colors.fg.red,"\nO Produto Id: " + id + 
        " não foi encontrado!", colors.reset);
    }


 // METODOS AUXILIARES

    // Gerar ID do Produto
    public gerarId(): number {
        return ++this.id;
    }

    /*Checa se uma Produto existe*/
    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

    
}
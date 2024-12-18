import { Produto } from "../src/util/model/Produto";

export interface ProdutoRepository {

	// CRUD da produto
	procurarPorId(id: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(id: number): void;
	
	
	
}

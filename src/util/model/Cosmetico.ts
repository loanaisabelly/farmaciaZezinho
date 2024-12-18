import { Produto } from "./Produto";

export class Cosmetico extends Produto{

   private _fragancia: string;
    


    //Metodo construtor
    constructor(id:number, nome:string, tipo:number, preco: number, fragancia: string){
    super(id,nome,tipo,preco);
    this._fragancia = fragancia;
    }
   
    //metodos GET E SET 


  
    public get fragancia(): string {
        return this._fragancia;
    }

    public set fragancia(value: string) {
        this._fragancia = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Fragância: " + this._fragancia);
    }


  }
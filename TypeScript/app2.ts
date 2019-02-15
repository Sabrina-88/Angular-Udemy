//import { Carro, qlqcoisa } from './Carro';
import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
/* class Carro {
	private modelo: string
	private numeroDePortas: number
	private velocidade: number = 3

    constructor(modelo: string, 
        numeroDePortas: number){ // é aqui que ele interpreta o que é modelo e possui string, o que é porta é possui number
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
	public acelerar(): void { // quando usamos void indica que a função não terá return
		this.velocidade = this.velocidade + 10

	}

	public parar(): void {
		this.velocidade = 0
	}

	public velocidadeAtual(): number{
		return this.velocidade
	}
} */

/* let carroA = new Carro("Veloster", 3) // aqui estamos instanciando o objeto, assim tiramos o objeto do seu respectivo molde Carro(), e assim podemos exibir esse objeto
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
 */
/* 
 class Concessionaria {
	 private endereco: string
	 private listaDeCarros: Array<Carro>

constructor(endereco: string, listaDeCarros: Array<Carro>){ 
	this.endereco = endereco
	this.listaDeCarros = listaDeCarros
}

	 public fornecerEndereco(): string{
		 return this.endereco
	 }
	 public mostrarListaDeCarros(): Array<Carro> {
		 return this.listaDeCarros
	 }
 } */

// let concessionaria = new Concessionaria('Avenida Paulista');
// console.log(concessionaria)

/* class Pessoa{
	private nome: string
	private carroPreferido: string
	private carro: Carro
	private testeObj : {} 
	constructor(nome: string, carroPreferido: string, testeObj: {})
	{
		this.nome = nome,
		this.carroPreferido = carroPreferido
		this.testeObj = testeObj
	}

	public dizerNome():string{
		return this.nome
	}
	public dizerCarroPreferido():string {
		return this.carroPreferido
	}
	public comprarCarro(carro: Carro): void { //void pois por enquanto nao vai retornar nada
		 this.carro = carro // this carro vai receber esse carro por parametro
	}
	public dizerCarroQueTem(): Carro{
		return this.carro
	}

} */

/*let cliente = new Pessoa ("Allan", "Audi")
console.log(cliente)
console.log(cliente.dizerCarroPreferido())//console.log da funcao carro preferido */


 /*criar obj de lista de carros*/
  let carroA = new Carro('dodge journey', 4); /* variavel carroA recebe a instancia da classe Carro() que é a forma do ovo de pascoa, ou em outras palavras: variavel carroA é o ovo feito na forma de Carro(), carroA referente a Carro(). Estou passando, o modelo e numero de portas*/
   let carroB = new Carro('veloster', 3);
   let carroC = new Carro('cerato', 4);

	/*montar a lista de carros da concessionaria, array de obj*/
	let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
	//console.log('esta é lista de carros '  listaDeCarros);

	let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
	//  exibir s lista de carros
	//console.log(concessionaria.mostrarListaDeCarros());

	//comprar o carro

	let cliente = new Pessoa('Joao', 'cerato');

	concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
		if(carro['modelo'] == cliente.dizerCarroPreferido()){
				//comprar carro
				cliente.comprarCarro(carro);
		}
		else{
			console.log('não temos esse carro ')
		}
	});


	console.log(cliente.dizerCarroQueTem());

	let testeObj : {} = {
		nome: 'Sabrina',
		idade: 30
	};
	console.log(testeObj.nome);
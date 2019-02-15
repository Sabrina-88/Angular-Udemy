import  Carro from './Carro';
export default class Pessoa{
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
	public dizerCarroQueTem(): Carro {
		return this.carro
	}

}

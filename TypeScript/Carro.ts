export default class Carro {
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
}

export let qlqcoisa: string = 'Sabrina maravilhosa';
console.log(this.qlqcoisa);
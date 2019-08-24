import {Piscina} from "./exercicio8"

let cal = new Piscina(6,75)

console.log(`Custo da piscina: R$ ` + cal.custoTotal().toFixed(2))
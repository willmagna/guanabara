let num = [5,3,8,2,9,3]
/*
num[3] = 6
num.push(7) //solocar na ultimo elemento 
num.length //length é um atributo e não um método
num.sort() //ordem crescente

*/

//console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(4) //indexOf procura o valor que você quer e diz qual o index desse valor
if(pos == -1){  //-1 é o retorno quando o valor não é encontrado dentro do vetor. Assim como em Uniface
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}
let n: number = 2

let funcao = function (nm: number):/*void*/ boolean{
    if(n%2 == 0){
        //console.log('Par')
        return true
    }
    else{
        //console.log('Ímpar')
        return false
    }
}

console.log(funcao(n))
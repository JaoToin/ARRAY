//DECLARAR ARRAY

// no array é possivel ter varios dados, difente da variavel que só é possivel armazenar 1

//ordem do armazenamentos no array 

// é nessecario por nome no array como numeros
            //   0   1   2    3    4  5     6
const numeros = [10, 50, 60, 300, 70, 900, 850]

console.log(numeros[3])

numeros[2] = 124

// adicionando o nome do array e mostrando ele no console 

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])


// numeros.length é para ilutrar todos os elementos do array
// for é o mais ultilizado na coleção de dados como o array

for( i = 0; i < numeros.length; i++){
     console.log(numeros[i])
}

//for each
// num do elemento = elem, localização dele = i => pode ser qual quer nome conforme o que for fazer com esse assunto , pode ser no caso possibilidade ou qualquer outro nome

// se adicionar uma outro parametro no foreach ele mostrara o array completo


    //funções do array
    //adicionar elemento ao final do array
    numeros.push(1500)

    //adicionar elemento no inicio do array
    numeros.unshift(2560)

    //função SPLICE
    //remover elemnetos a aparti de uma  posição
    numeros.splice(3,2)

    //adicionar elementos 
    numeros.splice(4,0,9999)

    //substituir elementos
    //            posição é o primeiro numero, quantas eu quero alterar é o segundo numero, o novo numero no array é o terceiro numero entre os parentesses
    numeros.splice(2,1,9999)




    console.log('--------depois do splice-----')

numeros.forEach((elem, i) =>{
    console.log(i, elem)
})

     // usando o for of
    // tem que criar uma variavel cont 
    var cont = 0
    // monta a estrutura
for (var elem of numeros){
    
    // adicionar o mais mais para contar todos os valores do array
    cont++

    // ilustrando no console
    console.log(cont, elem)
}


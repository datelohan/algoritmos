const gerarArray =  (tamanho,min,max) =>{
    const array = [];
    for(let i = 0; i < tamanho; i++){
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;

}

const meuArray = gerarArray(20,1,100);

const ordernarArray = (array) =>{
    const listLeft = [];
    for(let i = 0; i < array.length; i++){
        
    }
}
// console.log(meuArray.length);

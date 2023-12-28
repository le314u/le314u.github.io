//const locate = ["Escola","Hospital","Farmácia","Faculdade","Cruzeiro","Cinema","Zoológico","Padaria","Supermercado","Praia","Casamento","Museu","Teatro","Dentista","Clube","Hospício"]

const locate = [
    "Escola", "Hospital", "Farmácia", "Faculdade", "Cruzeiro",
    "Cinema", "Zoológico", "Padaria", "Supermercado", "Praia",
    "Casamento", "Museu", "Teatro", "Dentista", "Clube", "Hospício",
    "Restaurante", "Biblioteca", "Parque", "Estádio", "Estação de Trem",
    "Café", "Estúdio de Arte", "Loja de Roupas", "Jardim Botânico",
    "Posto de Gasolina", "Aeroporto", "Spa", "Aquário", "Arena Esportiva",
    "Galeria de Arte", "Ponto de Ônibus", "Planetário", "Cervejaria",
    "Estúdio de Música", "Circo"
  ];
  
  
// Array Deslocado
function shiftedArray(array, key){
    let shift = key % locate.length
    let sub_1 = locate.slice(shift, array.length+1)
    let sub_2 = locate.slice(0, shift)    
    let vet = sub_1.concat(sub_2)
    return vet
}

// Faz um somatorio Acumulado da string
function hash(string) {
    const dictionary = "0123456789abcdefghijklmnopqrstuvwxyz";
    const BASE = dictionary.length;
    const content = string.toLowerCase();
    let sum = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        const char = content[i];
        let num = dictionary.indexOf(char);
        num = (num === -1) ? 0 : num;
        sum += num * (BASE ** i);
    }
    return sum;
}

// Cria uma nova Chave
function createKey(cod){
    // Divide a chave em duas partes
    let [key_1, key_2] = ["",""]
    for (let index = 0; index < cod.length; index++) {
        (index % 2 ) ? key_1 += cod[index] : key_2 += cod[index] 
    }
    // Transforma cada parte da chave em um inteiro
    let [keyHash_1, keyHash_2] = [hash(key_1), hash(key_2)] 
    return [keyHash_1, keyHash_2]
}


//Verifica se é o espião
function isSpy(key){
    let numPlayer = sessionStorage.getItem("numPlayer")
    let maxPlayer = sessionStorage.getItem("maxPlayer")
    return ((key % maxPlayer)+1) == numPlayer
}

//mostra a onde esta
function local(key){
    let array = shiftedArray(locate,key)
    return array[0]
}

export default {
    local:local,
    isSpy:isSpy,
    createKey:createKey,
    hash:hash,
    shiftedArray:shiftedArray,
    locate:locate,
};
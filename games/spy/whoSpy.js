const locate = ["Escola","Hospital","Farmácia","Faculdade","Cruzeiro","Cinema","Zoológico","Padaria","Supermercado","Praia","Casamento","Museu","Teatro","Dentista","Clube","Hospício"]

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

//Mostra na Tela
function result(keys){
    if( isSpy(keys[1])){
        document.getElementById("conteudo").innerHTML="Você é O Espião"
    }else {
        document.getElementById("conteudo").innerHTML="Você esta no(a) "+local(keys[0])
    }
    
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
/////////////////////////////////
//MANIPULAÇÃO PAGINA
/////////////////////////////////


let toggleable = true;
let time = 5000; // 5000 milissegundos = 5 segundos
function toggleElements() {
    const editable = document.getElementById('editable');
    const result = document.getElementById('result');
    const body = document.getElementById('body');
    const header = document.getElementById('header').getElementsByClassName('modal-header')[0]
    if(toggleable){
        // Alternar as classes para mostrar ou ocultar os elementos
        editable.classList.toggle('collapse');
        result.classList.toggle('collapse');
        body.classList.toggle('collapse');
        header.classList.toggle('d-flex');
        header.classList.toggle('justify-content-center');
        header.classList.toggle('align-items-center');
        
                toggleable=false;
        setTimeout(function() {
            editable.classList.toggle('collapse');
            result.classList.toggle('collapse');
            body.classList.toggle('collapse');
            header.classList.toggle('d-flex');
            header.classList.toggle('justify-content-center');
            header.classList.toggle('align-items-center');
                        toggleable = true;
        }, time);
    }
}


const key = document.getElementById('key');
const oldKey = document.getElementById('oldKey');

function replace(event) {
    let regex = /[^a-zA-Z0-9]/g;
    let value_aux = key.value
    if (value_aux.match(regex)) {
        value_aux = value_aux.replace(regex, '');
    }
    while (value_aux.length < 5) {
        value_aux = "0"+value_aux 
    }
    value_aux = value_aux.slice(1)
    key.value = value_aux


};

key.addEventListener('input',(event)=>{
    replace(event);
    const key = document.getElementById('key').value.toString()
    document.getElementById("oldKey").innerHTML="Key:"+key+" -> "+hash(key)
    result( createKey(key) )

})



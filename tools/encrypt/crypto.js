class Criptografia{

    static table_encode = Object.freeze( {
    'a':'n',
    'b':'o',
    'c':'p',
    'd':'q',
    'e':'r',
    'f':'s',
    'g':'t',
    'h':'u',
    'i':'v',
    'j':'w',
    'k':'x',
    'l':'y',
    'm':'z',
    'n':'m',
    'o':'l',
    'p':'k',
    'q':'j',
    'r':'i',
    's':'h',
    't':'g',
    'u':'f',
    'v':'e',
    'w':'d',
    'x':'c',
    'y':'b',
    'z':'a',
    
    
    'A':'Z',
    'B':'Y',
    'C':'X',
    'D':'W',
    'E':'V',
    'F':'U',
    'G':'T',
    'H':'S',
    'I':'R',
    'J':'Q',
    'K':'P',
    'L':'O',
    'M':'N',
    'N':'A',
    'O':'B',
    'P':'C',
    'Q':'D',
    'R':'E',
    'S':'F',
    'T':'G',
    'U':'H',
    'V':'I',
    'W':'J',
    'X':'K',
    'Y':'L',
    'Z':'M',
    


    '0':'9',
    '1':'0',
    '2':'8',
    '3':'1',
    '4':'7',
    '5':'2',
    '6':'6',
    '7':'3',
    '8':'5',
    '9':'4',
    })

    static table_decode = Object.freeze( {
    'n':'a',
    'o':'b',
    'p':'c',
    'q':'d',
    'r':'e',
    's':'f',
    't':'g',
    'u':'h',
    'v':'i',
    'w':'j',
    'x':'k',
    'y':'l',
    'z':'m',
    'm':'n',
    'l':'o',
    'k':'p',
    'j':'q',
    'i':'r',
    'h':'s',
    'g':'t',
    'f':'u',
    'e':'v',
    'd':'w',
    'c':'x',
    'b':'y',
    'a':'z',
    
    
    'Z':'A',
    'Y':'B',
    'X':'C',
    'W':'D',
    'V':'E',
    'U':'F',
    'T':'G',
    'S':'H',
    'R':'I',
    'Q':'J',
    'P':'K',
    'O':'L',
    'N':'M',
    'A':'N',
    'B':'O',
    'C':'P',
    'D':'Q',
    'E':'R',
    'F':'S',
    'G':'T',
    'H':'U',
    'I':'V',
    'J':'W',
    'K':'X',
    'L':'Y',
    'M':'Z',
    


    '9':'0',
    '0':'1',
    '8':'2',
    '1':'3',
    '7':'4',
    '2':'5',
    '6':'6',
    '3':'7',
    '5':'8',
    '4':'9',
    })

    static Direction = Object.freeze( {
        LEFT: 'L',
        RIGHT: 'R',
    });

    constructor(key){
        this.key = '';
        this.arranjo = '';
        this._createKEY(key)
    }

    //Converte o par ordenado em um offSet
    getOffSet(word) {
        let offsets = 0;
        for (let char of word) {
            if (char >= 'A' && char <= 'Z') {
                offsets += char.charCodeAt(0) - 65;
            } else if (char >= 'a' && char <= 'z') {
                offsets += char.charCodeAt(0) - 97;
            } else if (char >= '0' && char <= '9') {
                offsets += char.charCodeAt(0) - 48;
            }
        }
        return offsets;
    }
    
    //Faz o deslocamento para a direita ou esquerda
    deslocate(char, offSet, direction){
        // Para letras maiúsculas (A-Z)
        if (char >= 'A' && char <= 'Z') {
            if(direction == Criptografia.Direction.RIGHT){
                return String.fromCharCode(((char.charCodeAt(0) - 65 + offSet) % 26 + 26) % 26 + 65);
            }else  if(direction == Criptografia.Direction.LEFT){
                return String.fromCharCode(((char.charCodeAt(0) - 65 - offSet )% 26 + 26) % 26 + 65);
            }
        // Para letras minúsculas (a-z)
        } else if (char >= 'a' && char <= 'z') {
            if(direction == Criptografia.Direction.RIGHT){
                return String.fromCharCode(((char.charCodeAt(0) - 97 + offSet) % 26 + 26) % 26 + 97);
            }else if(direction == Criptografia.Direction.LEFT){
                return String.fromCharCode(((char.charCodeAt(0) - 97 - offSet )% 26 + 26) % 26 + 97);
            }
        // Para números (0-9)
        } else if (char >= '0' && char <= '9') {
            if(direction == Criptografia.Direction.RIGHT){
                return String.fromCharCode(((char.charCodeAt(0) - 48 + offSet) % 10 + 10) % 10 + 48);
            }else if(direction == Criptografia.Direction.LEFT){
                return String.fromCharCode(((char.charCodeAt(0) - 48 - offSet )% 10 + 10) % 10 + 48);
            }
        } 
        return char;
    };


    /*
    Suponha que existam tabelas que vão de e+0 até e+25
    A orden dos fatores nao altera o produto pois
    Modificar a Entrada e a Tabela da na mesma
    (e)=>e+1  (e)=>e+2 ... eu modifico a função
    (e)=>e (e+1)=>e+1 ... eu modifico a entrada

    A diferença é que focar na entrada eu nao preciso me preucupar com sobreposição da saida igual para funções diferentes
    */

    encode(text) {
        let index = 0
        const next=()=>index = index >= this.arranjo.length-1 ? 0 : index+1
        return text.split('').map(char => {
            let aux = char
            let input = this.deslocate(char, this.getOffSet(this.arranjo[index]),Criptografia.Direction.RIGHT )
            if(Criptografia.table_encode[input]){
                aux = Criptografia.table_encode[input]
            }
            //console.log(char, this.arranjo[index],this.getOffSet(this.arranjo[index]),input,"=>",aux)
            next()
            return aux
        }).join('');
    }

    decode(text) {  
        let index = 0
        const next=()=>index = index >= this.arranjo.length-1 ? 0 : index+1
        return text.split('').map(char => {
            let aux = char
            if(Criptografia.table_decode[char]){
                aux = Criptografia.table_decode[char]
            } 
            let input = this.deslocate(aux, this.getOffSet(this.arranjo[index]),Criptografia.Direction.LEFT )
            //console.log( `${this.arranjo[index]}>${this.getOffSet(this.arranjo[index])}<    ${char} => ${aux} => ${input}`)

            next()
            return input
        }).join('');
    }


    _createKEY(key_str){
        this.key = key_str;

        //Quero um algoritimo que dada a seguinte proposta: tenho um numero X e Quero dividir X de maneira que    A+B = X   A e B sejam primos entre si e A*B seja o maior numero possivel

        // Função para calcular o Máximo Divisor Comum (MDC)
        function mdc(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        // Função para encontrar os melhores A e B
        function encontrarMelhorDivisao(X) {
            let melhorA = 1;
            let melhorB = X - 1;
            let maiorProduto = 0;

            // Iterar sobre os valores possíveis de A
            for (let A = 1; A <= Math.floor(X / 2); A++) {
                let B = X - A;

                // Verificar se A e B são primos entre si (mdc(A, B) == 1)
                if (mdc(A, B) === 1) {
                    let produto = A * B;

                    // Atualizar se o produto é maior que o maior encontrado
                    if (produto > maiorProduto) {
                        melhorA = A;
                        melhorB = B;
                        maiorProduto = produto;
                    }
                }
            }

            return { A: melhorA, B: melhorB, produto: maiorProduto };
        }

        function make_arranjo(key1, key2) {
            let arranjo = [];
            for (let i of key1) {
                for (let j of key2) {
                    arranjo.push(i + j);
                }
            }
            return arranjo;
        }



        // Descobre o maior arranjo possivel  com A+B=X
        let resultado = encontrarMelhorDivisao(key_str.length);
        
        const KEY_A = key_str.substring(0, resultado.A)
        const KEY_B = key_str.substring(resultado.A, resultado.A + resultado.B)
        
        //Cria o arranjo        
        this.arranjo = make_arranjo(KEY_A, KEY_B);
        
        // console.log(`KEY_A: ${resultado.A}, KEY_B: ${resultado.B}, Total: ${resultado.produto}`);
    }

}
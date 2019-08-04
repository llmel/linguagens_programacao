// First problem - Day 0 - Hello World
/*
var teste = 5
print();

function print () {
	console.log(`Variável ${teste} é do tipo ${typeof teste}`);
}
*/

// Second problem - Day 0 - Data Types
/*
performOperation("12","4.35","is a great site");

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';    

// Um jeito bem prático de transformar string em número.
    console.log(firstInteger + (+secondInteger));

    console.log(firstDecimal + (+secondDecimal));
    
    console.log(firstString + secondString);
}
*/

/*
// Third problem - Day 1 - Functions
const valor = 5;

console.log(fatorial(valor));
// Recursividade em nível profissional
function fatorial (n) {
	if (n > 1) {
		return n * fatorial(n - 1);
	}
	return 1;
}

// Fibonacci
const valor = 6;

console.log(fibonacci(valor));
// Recursividade nível God.
function fibonacci(n){
    if (n > 2) {
        console.log(`fibonacci(${n - 1}) + fibonacci(${n - 2})`);
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        console.log(`0`);
        return 0;
    }
    console.log(`1`);
    return 1;
}
*/
//const pi = Math.PI;
//console.log(pi);

// Isso é considerado true porque é um objeto.
/*
var teste = new Boolean(false);
if (teste) {
    console.log("pourra");
}
*/

// Day 2 - Conditional statements
/*
var teste = 3;
switch (teste) {
    case 2:
        console.log("É dois");
        break;
    case 5:
        console.log("É cinco");
        break;
    default:
        console.log("Valor não englobado nos cases");
}
*/

// Converter em string
/*
var numero = 2;
var string = String(numero);
console.log(typeof numero);
console.log(typeof string);
*/

// Método para saber qual a letra está na posição informada de uma string
/*
var meu_nome = "Leo";
var letra_desejada = 0;
console.log(meu_nome.charAt(letra_desejada));
*/

// Método para juntar duas strings
/*
var string1 = "L";
var string2 = "eo";
var juncao = string1.concat(string2);
console.log(juncao);
*/

// Método para verificar se existe algo especifico dentro da string
/*
var nome = "Leonardo Melo";
console.log(nome.includes('m'));
console.log(nome.includes('M'));
*/

// Método para verificar o que tem no final de uma string. Retorna um booleano, igual o caso de cima.
// String.endsWith();

// Método para descobrir em qual posição na string um valor se encontra. Se o valor passado não for encontrado ou nenhum valor for passado, é retornado o valor -1.
/*
var nome = "Leonardo";
console.log(nome.indexOf("l"));    
console.log(nome.indexOf("e"));    // Funciona com duas ou mais letras também("en")
console.log(nome.indexOf("e",2));
*/

// Método igual indexOf, só de do final para o começo:
// String.lastIndexOf();

// Método String.match() - Retorna um objeto com 4 propriedades em caso true: a substring encontrada, a posição desta substring, a string completa e grupos. Em caso false: retorna null. Possível utilizar expressões regulares como argumento.
/*
var teste = "HackerRank";
console.log(teste.match("a"));
*/

// Método para controlar quantas vezes você deseja que a string apareça.
/*
var nome = "Leo ";
console.log(nome.repeat(3));
*/

// Método para substituir algo na string
/*
var nome = "Lneon";      
console.log(nome.replace("n",""));  // Substitui só o primeiro "n" encontrado.
*/

// String.search() - A mesma coisa que o indexOf() e o lastIndexOf() - só que suporta regular expressions.

// String.slice() - Método para recortar uma parte específica da string.
/*
var nome = "Leonardo";
console.log(nome.slice(0,3)); // Os argumentos são números das posições na string, para indicar onde queremos recortar.
*/

// String.split() - Método para transformar a string em um vetor.
/*
let nome = "Leonardo";
console.log(nome.split("")); // Retorna cada letra em uma posição diferente.
console.log(nome.split("o")); // Divide a string em cada ocorrência do argumento passado (Dá pra usar isso pra contar a quantidade de "o" nesse nome).
console.log(nome.split()); // Retorna a string completa como única posição.
*/

// String.startsWith() - Igual String.endsWith().

// String.substr() - Igual String.slice().

// String.substring() - Igual String.substr().

// String.toLowerCase() & String.toUpperCase() - Converter para minúscula e maiúscula.

// String.trim() - Remove os espaços em branco. Tanto do fim quanto do início.



// Day 2 - Loops
/*
vowelsAndConsonants("Leonardo");

function vowelsAndConsonants(s) {
    let palavra = String(s);
    let vogais = [];
    let consoantes = [];
    for (contador = 0; contador < palavra.length; contador++) {
        var letra = palavra.charAt(contador);
        switch (letra) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vogais.push(letra);
                break;
            default:
                consoantes.push(letra);
        }
    }
    for (var indice of vogais) {
        console.log(indice);
    }
    for (var indice of consoantes) {
        console.log(indice);
    }
}
*/


// Método para percorrer um array / vetor
/*
var vetor = ['new', 'way'];

vetor.forEach(function(e, i, array) {
    // 'i' is the index
    // 'e' is the element
    console.log(i + ' ' + e);
});
*/

// Método para remover último elemento do vetor
// vetor.pop();

// Método para remover primeiro elemento do vetor
// vetor.shift();  // Dá pra salvar em uma variável o elemento removido

// Método para adicionar como primeiro elemento do vetor
// vetor.unshift("primeiro");

// Método indexOf de string funciona também com vetor

// Método para remover uma posição específica do vetor
/*
var vetor = ['a','b','c','d','e'];
vetor.splice(2,1);    // splice(indice,qtd_de_elementos);
console.log(vetor);
*/


// Day 3 - Arrays
/*
var numeros = [10,10];
console.log(segundo_maior_numero(numeros));

function segundo_maior_numero(nums) {
    let numeros_recebidos = nums;
    numeros_recebidos.sort(ordenar);
    let numeros_ordenados_distintos = [numeros_recebidos[0]];
    let segundo_maior;
    for (var contador = 0; contador < numeros_recebidos.length; contador++) {
        if (numeros_recebidos[contador] != numeros_ordenados_distintos[numeros_ordenados_distintos.length - 1]) {
            numeros_ordenados_distintos.push(numeros_recebidos[contador]);
        }
    }
    segundo_maior = numeros_ordenados_distintos[numeros_ordenados_distintos.length - 2];
    if (numeros_recebidos.length <= 1 || (numeros_recebidos.length == 2 && numeros_recebidos[0] == numeros_recebidos[1])) {
        return ("Informe ao menos dois números distintos");
    }
    return segundo_maior;
}

function ordenar(a,b) {
    return a > b;
}
*/


// Day 3 - Try, Catch e Finally 
// Métodos de array - reverse e join.
    // Maneira difícil de fazer, e ainda que não atendeu aos requisitos
/*
reverseString(1234)
function reverseString(s) {
    let palavra = s;
    try {
        palavra = verificar_tipo(palavra);
    }
    catch(e) {
        console.log(e);
    }
    finally {
        console.log(palavra);
    }
}

function verificar_tipo(p) {
    if (typeof p != typeof "String") {
        throw "Informação passada não é String";
    } else {
        p = p.split("");
        p = p.reverse();
        p = p.join("");
        return p;
    }
}
*/
    // Maneira simples de fazer
/*
function reverseString(s) {
    let palavra = s;
    try {
        palavra = s.split("");
        palavra = palavra.reverse();
        palavra = palavra.join("");
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        console.log(palavra);
    }
}
*/
    
// Tratamento de erro - Verificar se número é positivo
/*
function positivar() {
    try {
        console.log(isPositive(-1));
    }
    catch(e) {
        console.log(e);
    }
}

function isPositive(a) {
    if (a < 0) {
        throw Error("Negative Error");
    } else if (a == 0) {
        throw Error("Zero Error");
    } else {
        return "YES";
    }
}
*/

// Day 4 - Objetos Javascript

// Instanciar através de Object.create é estranho, ele mostra vazio, mas se pede
// para mostrar uma propriedade, ele mostra.
/*
var x = {
    a: 5, 
    foo: function() {
        return this.a * this.a;
    }
};

var o = Object.create(x);
console.log(o);
console.log(o.a);
*/

// Instanciando um objeto: retângulo.
/*
console.log(Rectangle(2,3));
function Rectangle(a, b) {
    let retangulo = new Object();
    retangulo.length = a;
    retangulo.width = b;
    retangulo.perimeter = 2 * (a + b);
    retangulo.area = a * b;
    return retangulo;
}
// Solução mais correta - Função construtora;
console.log(new Rectangle(2,3));
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (this.length + this.width);
    this.area = this.length * this.width;
    return this;
}
*/

// For of para percorrer array de objetos;
/*
let a = [{x:1,y:2},{x:2,y:2}];
console.log(getCount(a));
function getCount(objects) {
    let contagem = 0;
    for (let i of objects) {
        if (i.x == i.y) {
            contagem++;
        }
    }
    return contagem;
}
*/


// Classes

// Adicionando método na propriedade de prototipo:
/*
function fruta (nome,cor) {      // Isso é uma função construtora de um objeto.
    this.nome = nome;
    this.cor = cor;
}
fruta.prototype.informacoes = function () {
    return `A fruta ${this.nome} é ${this.cor}`;
}
let limao = new fruta("Limão","Verde");
console.log(limao.informacoes());
*/

// Declaração de classe
/*
class Poligono {              // Nomes de classes são escritos em TitleCase.
    constructor(altura,largura) {
        this.altura = altura;
        this.largura = largura;
    }
}
let p = new Poligono (1,2);
console.log(p);
*/

// Great way 
/*
new Polygon([2,3,4]);
function Polygon(sides) {  
    this.side = sides;
    console.log(this.side.length);
}
*/

// Day 4 - Classes - Resolvi utilizando classes funcionais.
/*
// Entendi o problema de maneira errada e fiz o que não precisava:
let poligono = new Polygon([2,3,4]);
console.log(poligono.perimeter());
function Polygon(sides) {
    this.sides = sides;
    this.perimeter = function () {
        let frase = `${this.sides[0]}`;
        let soma = this.sides[0];
        for (let i = 1; i < this.sides.length;i++) {
            frase += ` + ${this.sides[i]}`;
            soma += this.sides[i];
        }
        frase += ` = ${soma}`;
        return frase;
    }
}

// Diferença entre for in e for of:
// Isso...
function Polygon(lados) {
    this.lados = lados;
    this.perimeter = function () {
        let soma = 0;
        for (let i of this.lados) {
            soma += i;
        }
        return soma;
    }
}
// É igual a isso:
function Polygon(lados) {
    this.lados = lados;
    this.perimeter = function () {
        let soma = 0;
        for (let i in this.lados) {
            soma += this.lados[i];
        }
        return soma;
    }
}
*/

// Exemplo de Subclasse e Superclasse.
/*
class Animal {
    constructor(name) {
        this.animalType = 'Animal'
        this.name = name;
    }
    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'Dog';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}
// Instanciando um novo cachorro.
let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();
// Instanciando um novo animal.
spot = new Animal('Lion');
spot.type();
spot.speak();
*/

// Acessando método com keyword super.
/*
class Retangulo {
    constructor (a,l) {
        this.a = a;
        this.l = l;
    }
    area(s) {
        return s*s;
    }
}
class Quadrado extends Retangulo {
    areaa(s) {
        return super.area(s);
    }
}
let q = new Quadrado(3,4);
console.log(q.areaa(q.l));
*/


// Template Literals - Funções passando parâmetros de string e valores
/*
var a = 5;
var b = 10;

function foo(strings, ...values) {
    let a = values[0];
    let b = values[1];

    return `Sum ${a + b}
Product ${a * b} 
Division ${b / a}`;
}

console.log(foo`Num1 ${10}
Num2 ${2} `);
*/

// Day 5 - Template Literals
/*
console.log(sides`${140}${48}`);
function sides(literals, ...expressions) {  
    let a = expressions[0];
    let p = expressions[1];
    let s1, s2;                             
    let resultado = [];              
    s1 = ( p + Math.sqrt(p ** 2 - (16 * a)) ) / 4;
    s2 = ( p - Math.sqrt(p ** 2 - (16 * a)) ) / 4;
    resultado.push(s1, s2);
    resultado.sort(function (a, b) { return a > b });
    return resultado;
}
*/


// Day 5 - Arrow Functions - Funções de flechas
/*
function modifyArray(nums) {
    const corrigir = n => {
        for (let i in n) {
            n[i] % 2 == 0 ? n[i] *= 2 : n[i] *= 3;
        }
        return n;
    }
    return corrigir(nums);
}
*/


// Day 6 - Bitwise Operators - Operação lógica bit a bit
/*
console.log(getMaxLessThanK(2,2));

function getMaxLessThanK (n,k) {
    if ((k-1 | k) <= n) {
        return (k-1);
    } else {
        return (k-2);
    }
}


function getMaxLessThanK(n,k) {
    let elementos = [];
    let resultado = [];
    for ( c1 = 1 ; c1 <= n ; c1++ ) {
        elementos.push(c1);
    }
    for ( c2 = 0 ; c2 < elementos.length - 1 ; c2++ ) {
        let c3 = c2+1;
        while (c3 < elementos.length) {
            let bit_a_bit = elementos[c2] & elementos[c3];
            resultado.push(bit_a_bit);
            c3++;
        }
    }
    resultado.sort((a,b)=>b-a);
    for (i in resultado) {
        if (resultado[i] < k) {
            resultado = resultado[i];
            break;
        }
    }
    return resultado;
}
function getMaxLessThanK(n, k) {
    var max = 0;
    var summ;
    for (var b = 1; b <= n; b++) {
        for (var a = 1; a < b; a++) {
            summ = a & b;
            if ( summ < k ) {
                if ( summ > max) max = summ;
            }
        }
    }
    return max;
}
*/


// Matrizes Javascript - Conteúdo do problem solving.
/*
var matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

mostrar_matriz(matriz);

function mostrar_matriz (matrix) {
    for ( i = 0 ; i < matrix.length ; i++ ) {        
        console.log(matrix[i]);
    }
}
*/


// Exemplo de debug - Tentativa de solução do quadrado mágico.
// Exemplo que demonstra a importância de testes massivos.
/*
var matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(formingMagicSquare(matriz));
function formingMagicSquare(s) {
    let verificacao = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            for (let k = 1; k <= 9; k++) {
                if (s[i][j] == k) {
                    verificacao[k - 1]++;
                    break;
                }
            }
        }
    }
    let repetido;
    let faltante;
    let faltante_final;
    let custo_conta = 0;
    let custo_temp = 10;
    let custo_final = 0;
    for (let l = 0; l < verificacao.length; l++) {
        if (verificacao[l] > 1) {
            repetido = l + 1;
            console.log(repetido);
            for (let m = 1; m < verificacao[l]; m++) {
                custo_temp = 10;
                for (let n = 0; n < verificacao.length; n++) {
                    if (verificacao[n] == 0) {
                        faltante = n + 1;
                        console.log(faltante);
                        repetido > faltante ? custo_conta = repetido - faltante : custo_conta = faltante - repetido;
                        if (custo_conta < custo_temp) {
                            custo_temp = custo_conta;
                            console.log(custo_temp);
                            faltante_final = n;
                            console.log(faltante_final);
                        }
                        console.log("fim de loop");
                    }
                }
                custo_final += custo_temp;
                verificacao[faltante_final]++;
            }
        }
    }
    return custo_final;
}
*/


// Day 7 - Regular Expressions I
/*
console.log(regexVar().test("abce"));
function regexVar() {
    
    var re = new RegExp("^([aeiou]).*\\1$");
    // Quando atribuímos o objeto RegExp a uma variável, ela se torna uma string, e por isso ignora a barra (porque é um caracter de fuga em strings). Então devemos colocar duas barras para que seja registrada uma.
    
    return re;
}
*/

// Regular Expression II
/*
console.log(regexVar().test("abMr.c"))
function regexVar() {

    var re = new RegExp("^(Mr|Mrs|Ms|Dr|Er)\\.[A-Za-z]+$");

    return re;
}
*/

// Regular Expression III
/*
function regexVar() {
    var re = new RegExp("\\d+", "g");
    return re;
}
*/


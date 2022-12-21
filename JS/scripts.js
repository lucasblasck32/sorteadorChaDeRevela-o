console.log('Bem vindos ao Starter')

console.log("Lucas")
console.log('Lucas')
console.log(`Lucas`)
console.log(`Lucas ${1+1}`)

/*
    Number

    No JavaScript temos 4 tipos de números
    
    inteiros // 22
    os reais ou float // 83.1)
    o Not a Number // NaN
    infinito // Infinity
*/

console.log(22)
console.log(12.5)
console.log(12.5 + "abc") // NaN
console.log(Infinity)


/*
    Boolean

    true // verdadeiro
    flase // falso
*/

console.log(true)
console.log(false)

/*
    Undefined vs Null

    No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

    Undefined
        Indefinido

    Null
        Nulo
        Objeto que não possui nada dentro
        Diferente de indefinido
*/

/*
    Object

    O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.

    Object
        Objeto
        Propriedades / Atributos
        Funcionalidades / Métodos

        {propriedade: "valor"}
*/

console.log({
    name: "Lucas",
    idade: "29",
    andar: function() {
        console.log('andar')
    }
})

/*
    Array

    O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

    Array (Vetores)
        Uma lista
        Agrupamento de dados

        ["Lucas", 36]
*/

console.log([
    "Arroz",
    "Feijão",
    "Ovos",
    "Carne",
    "Frango"
])
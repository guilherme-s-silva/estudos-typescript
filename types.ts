//boolean
let isOpen: boolean;
isOpen = true

//string
let message: string
message = `teste ${isOpen}`

//number - aceita hexadecimal, decimal, etc...
let total: number
total = 2202

//array - (type[], Array<type>)
let items: number[]
items = [5, 2, 4]

let values: Array<string>
values = ['foo', 'bar']

//tuple - array em que se pode definir os tipos e quantidade dos itens
let title: [number, string]
title = [1, 'foo']

//enum - cria um conjunto de chave e valor para facilitar a chamada do valor
enum colors {
    white = '#FFF',
    black = '#000'
}

//any - pode ser qualquer coisa (usar é considerado má prática)
let anything: any
anything = 123123

//void - (vazio)
function logger(): void{
    console.log('foo')
}

//null e undefined - não é aconselhável usar
type bla = string | undefined

//never
function error(): never {
    throw new Error('error');
}

//object
let cart: object
cart = {
    key: 'foo',
    model: 'bar'
}

/* ----------------------------- */

//Type inference

let message2 = 'mensagem'
message2 = 'nova mensagem'
//nesse caso, o typescript não te deixa mudar o valor de message 2 por já ser definido como string

window.addEventListener('click', (e) => {
    console.log(e.target)
})
//nesse caso, o typescript já sabe que o tipo de 'e' é MouseEvent, então avisa caso use uma propriedade que não existe

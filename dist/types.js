"use strict";
//boolean
let isOpen;
isOpen = true;
//string
let message;
message = `teste ${isOpen}`;
//number - aceita hexadecimal, decimal, etc...
let total;
total = 2202;
//array - (type[], Array<type>)
let items;
items = [5, 2, 4];
let values;
values = ['foo', 'bar'];
//tuple - array em que se pode definir os tipos e quantidade dos itens
let title;
title = [1, 'foo'];
//enum - cria um conjunto de chave e valor para facilitar a chamada do valor
var colors;
(function (colors) {
    colors["white"] = "#FFF";
    colors["black"] = "#000";
})(colors || (colors = {}));
//any - pode ser qualquer coisa (usar é considerado má prática)
let anything;
anything = 123123;
//void - (vazio)
function logger() {
    console.log('foo');
}
//never
function error() {
    throw new Error('error');
}
//object
let cart;
cart = {
    key: 'foo',
    model: 'bar'
};
/* ----------------------------- */
//Type inference
let message2 = 'mensagem';
message2 = 'nova mensagem';
//nesse caso, o typescript não te deixa mudar o valor de message 2 por já ser definido como string
window.addEventListener('click', (e) => {
    console.log(e.target);
});
//nesse caso, o typescript já sabe que o tipo de 'e' é MouseEvent, então avisa caso use uma propriedade que não existe

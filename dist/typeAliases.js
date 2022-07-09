"use strict";
//type aliases e union
//facilita a tipagem e diminui o código, uma vez que evita repetições das tipagens
function logDetails(id, item) {
    console.log(`Um produto com id ${id} e título ${item}`);
}
logDetails(123, 'teste');
logDetails('hello', 'world');
function logInfo(id, user) {
    console.log(`Um usuário com id ${id} e nome ${user}`);
}
logInfo(123, 'teste');
logInfo('foo', 'bar');
function renderPlatform(platform) {
    return platform;
}
const account = {
    id: 123,
    name: 'test',
    email: 'test@example.com'
};
const char = {
    nickname: 'test',
    level: 50
};
//mescla os tipos, criando tipos mais complexos
const player = {
    id: 123,
    name: 'testPlayer',
    nickname: 'testPlayer',
    level: 75
};

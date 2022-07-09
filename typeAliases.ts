//type aliases e union

type Id = number | string
//facilita a tipagem e diminui o código, uma vez que evita repetições das tipagens

function logDetails(id: Id, item:string) {
    console.log(`Um produto com id ${id} e título ${item}`)
}

logDetails(123, 'teste')
logDetails('hello', 'world')

function logInfo(id: Id, user: string) {
    console.log(`Um usuário com id ${id} e nome ${user}`)
}

logInfo(123, 'teste')
logInfo('foo', 'bar')

type Platform = 'Windows' | 'Linux' | 'Mac'
function renderPlatform(platform: Platform) {
    return platform
}

/* ------------------------------ */

//intersection

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
    //a interrogação indica que é opcional
}

const account: AccountInfo = {
    id: 123,
    name: 'test',
    email: 'test@example.com'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: 'test',
    level: 50
}

type PlayerInfo = AccountInfo & CharInfo;
//mescla os tipos, criando tipos mais complexos

const player: PlayerInfo = {
    id: 123,
    name: 'testPlayer',
    nickname: 'testPlayer',
    level: 75
}
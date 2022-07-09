class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number){
       this.name = name;
       this.age = age;
    }

    logDetails(): void {
        console.log(`O usuário ${this.name} tem ${this.age} anos de idade`)
    }
}

const user = new UserAccount('foo', 30);
console.log(user);
user.logDetails();


class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age)

        this.nickname = nickname;
        this.level = level;
    }
}

const foo = new CharAccount('foo', 30, 'bar', 50);
console.log(foo);

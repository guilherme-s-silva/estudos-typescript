"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`O usuário ${this.name} tem ${this.age} anos de idade`);
    }
}
const user = new UserAccount('foo', 30);
console.log(user);
user.logDetails();
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const foo = new CharAccount('foo', 30, 'bar', 50);
console.log(foo);

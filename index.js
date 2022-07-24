class Animal {
    move() {
        return 'Go!';
    }
}

class Dog extends Animal{
    constructor(name, age) {
        super()
        this.name = name;
        this.age = age;
    }

    run(s) {
        return `Speed ${s * this.age}`;
    }
}

const dog2 = new Dog('Sam', 6);

console.log(dog2)
console.log(dog2.run(3))

//iniciar con clase Person simple, agregar interfaz IPerson, luego IAddress, luego IHero
//luego crear la clase Person que implemente IPerson, y luego crear un objeto de tipo Person
//luego crear un objeto de tipo IHero que implemente IPerson
//luego crear una clase Hero que implemente IHero
//luego crear un objeto de tipo Hero
interface IPerson {
    firstName: string
    lastName: string
    address?: IAddress
}
interface IAddress {
    city: string
    state: string
    country: string
}
interface IHero extends IPerson {
    heroName: string
    superPowers: string[]
    isActive: boolean
}

class Person implements IPerson {
    public firstName: string //string | undefined resolvería el warning, pero mejor agregar el constructor
    public lastName: string
    public address?: IAddress //el signo de interrogación indica que es opcional
    constructor(firstName: string, lastName: string, address?: IAddress) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

//extensión de la clase Person para crear un héroe
//la clase Hero implementa la interfaz IHero, que a su vez extiende IPerson
//esto permite que Hero tenga todas las propiedades de Person, además de las específicas de héroes
//esto es un ejemplo de herencia y polimorfismo en TypeScript
//la herencia permite que Hero herede las propiedades y métodos de Person
//el polimorfismo permite que Hero pueda ser tratado como un tipo de Person, pero con propiedades adicionales específicas de héroes
//Toda clase que extienda de otra clase debe llamar al constructor de la clase padre usando super()

export class Hero extends Person implements IHero {
    public heroName: string
    public superPowers: string[]
    public isActive: boolean
    constructor(firstName: string, lastName: string, heroName: string, superPowers: string[], isActive: boolean, address?: IAddress) {
        super(firstName, lastName, address)
        this.heroName = heroName
        this.superPowers = superPowers
        this.isActive = isActive
    }
    getHeroDetails(): string {
        return `${this.getFullName()} is known as ${this.heroName}.\nKnown powers:${this.superPowers.join(", ")}.\nActive: ${this.isActive ? "Yes" : "No"}`
    }
}

const kent = new Person("Clark", "Kent", {
    city: "Metropolis",
    state: "Kansas",
    country: "USA"
})

const superman = new Hero("Clark", "Kent", "Superman", ["Flight", "Super Strength", "X-ray Vision"], true, {
    city: "Metropolis",
    state: "Kansas",
    country: "USA"
})

console.log(`Full name: ${kent.getFullName()}`)
console.log(`Sensitive info: ${superman.getHeroDetails()}`) 
//Principios de Composición sobre Herencia
//En lugar de crear una jerarquía de clases, se pueden usar objetos compuestos para lograr la misma funcionalidad
//Esto se puede lograr mediante la creación de clases que contengan instancias de otras clases
//Esto permite una mayor flexibilidad y reutilización de código.
//Copiamos el ejemplo anterior y quitamos los extends. Para el método getFullName() de Person, usamos una instancia de Person dentro de Hero. this.person.getFullName() en lugar de this.getFullName().

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
interface IHero {
    heroName: string
    superPowers: string[]
    isActive: boolean
}

class Person implements IPerson {
    public firstName: string
    public lastName: string
    public address?: IAddress
    constructor(firstName: string, lastName: string, address?: IAddress) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}


class Hero implements IHero {
    public person: Person
    public heroName: string
    public superPowers: string[]
    public isActive: boolean
    constructor(firstName: string, lastName: string, heroName: string, superPowers: string[], isActive: boolean, address?: IAddress) {
        this.person = new Person(firstName, lastName, address)
        // Aquí se usa composición, Hero contiene una instancia de Person
        // Esto permite que Hero tenga todas las propiedades y métodos de Person
        // sin necesidad de heredar de ella
        this.heroName = heroName
        this.superPowers = superPowers
        this.isActive = isActive
    }
    getHeroDetails(): string {
        return `${this.person.getFullName()} is known as ${this.heroName}.\nKnown powers:${this.superPowers.join(", ")}.\nActive: ${this.isActive ? "Yes" : "No"}`
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
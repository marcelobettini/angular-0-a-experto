//Los tipos de utilidad son tipos predefinidos en TypeScript que nos permiten manipular tipos de manera más sencilla
//Partial. Permite para crear un tipo que tenga todas las propiedades de otro tipo, pero todas opcionales.
type User = {
    name: string
    age: number
    email: string
}
type PartialUser = Partial<User> // Todas las propiedades son opcionales
const user: PartialUser = {
    name: "John Doe" //sólo name es obligatorio
    // age y email son opcionales
}
console.log(user)

//Readonly. Permite crear un tipo que tenga todas las propiedades de otro tipo, pero todas son de solo lectura. Caso de uso común es cuando queremos evitar que un objeto sea modificado después de su creación. 
type ReadonlyUser = Readonly<User> // Todas las propiedades son de solo lectura
const readonlyUser: ReadonlyUser = {
    name: "Jane Doe",
    age: 30,
    email: "jane.doe@example.com"
}
// readonlyUser.name = "New Name" // Esto causará un error porque name es de solo lectura

//Record. Permite crear un tipo que tenga un conjunto de propiedades con un tipo específico. Es útil para crear objetos con claves dinámicas. Caso de uso común es cuando queremos crear un objeto que tenga un conjunto de propiedades con un tipo específico, como un objeto de configuración o un diccionario. 
type RecordExample = Record<string, number> // Un objeto con claves de tipo string y valores de tipo number
const record: RecordExample = {
    "key1": 1,
    "key2": 2,
    "key3": 3
}

//Caso de la vida real:
type Product = {
    id: number
    name: string
    price: number
}
type ShoppingCart = Record<string, Product> // Un objeto con claves de tipo string y valores de tipo Product
const shoppingCart: ShoppingCart = {
    "product1": { id: 1, name: "Laptop", price: 999.99 },
    "product2": { id: 2, name: "Smartphone", price: 499.99 },
    "product3": { id: 3, name: "Oak Desk", price: 199.99 },
    "product4": { id: 4, name: "Office Chair", price: 89.99 }
}
const totalPrice = Object.values(shoppingCart).reduce((acc, product) => acc + product.price, 0)
console.log(`Total Price: $${totalPrice.toFixed(2)}`)

//Pick. Permite crear un tipo que tenga un subconjunto de las propiedades de otro tipo. Es útil cuando queremos crear un tipo que tenga solo algunas propiedades de otro tipo, como cuando queremos crear un tipo que tenga solo las propiedades necesarias para una función o un componente.
type PickExample = Pick<User, "name" | "email"> // Un tipo que tiene solo las propiedades name y email de User
const pickUser: PickExample = {
    name: "Alice",
    email: "alice@example.com"
}

//Omit. Permite crear un tipo que tenga todas las propiedades de otro tipo, excepto algunas propiedades específicas. Es útil cuando queremos crear un tipo que tenga todas las propiedades de otro tipo, excepto algunas propiedades que no necesitamos.
type OmitExample = Omit<User, "email"> // Un tipo que tiene todas las propiedades de User, excepto email
const omitUser: OmitExample = {
    name: "Bob",
    age: 25
    // email es omitido
}
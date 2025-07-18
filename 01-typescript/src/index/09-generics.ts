//Genéricos en TypeScript
//Los genéricos permiten crear componentes reutilizables que pueden trabajar con diferentes tipos de datos
//Esto se logra mediante el uso de parámetros de tipo, que se definen entre ángulos <T>
//Los genéricos son especialmente útiles en colecciones, como arreglos y objetos.
//Permiten definir funciones, clases e interfaces que pueden trabajar con cualquier tipo de dato sin usar el tipo 'any'.

// function typeInferrer(arg:any):any {
function typeInferrer(arg) {
    return arg
}
const word = typeInferrer("Hello World")
//Aquí tenemos a word como un "any" y si miramos la firma de la función typeInferrer, vemos que no tiene un tipo definido.
console.log(word.toFixed(2)) // Esto causará un error de tipo porque 'toFixed' no es un método de tipo 'any'
//Esto es problemático porque no tenemos información sobre el tipo de dato que se está pasando a la función
//Si pasamos un número, no podremos usar métodos específicos de string, y viceversa
//Esto puede llevar a errores en tiempo de ejecución si no se maneja correctamente
//Para evitar esto, podemos usar genéricos para definir el tipo de dato que se espera
function typeInferrerGeneric<T>(arg: T) {
    return arg
}

const wordGeneric = typeInferrerGeneric<string>("Hello World")
console.log(wordGeneric.toUpperCase()) // Ahora wordGeneric es de tipo string y podemos usar métodos específicos de string sin errores de tipo
const numberGeneric = typeInferrerGeneric<number>(42.788865)
console.log(numberGeneric.toFixed(2)) // numberGeneric es de tipo number y podemos usar métodos específicos de number sin errores de tipo

//También podemos usar genéricos con arreglos
function arrayInferrerGeneric<T>(arg: T[]): T[] {
    return arg
}
const numbersArray = arrayInferrerGeneric<number>([1, 2, 3, 4, 5])
for (const number of numbersArray) {
    console.log(number * 2) // Aquí numbersArray es de tipo number[]
}
const stringsArray = arrayInferrerGeneric<string>(["Hello", "World", "Generics"])
for (const str of stringsArray) {
    console.log(str.toUpperCase()) // Aquí stringsArray es de tipo string[]
}
//Los genéricos también se pueden usar en clases
class GenericBox<T> {
    private content: T
    constructor(content: T) {
        this.content = content
    }
    getContent(): T {
        return this.content
    }
}
const numberBox = new GenericBox<number>(123)
const stringBox = new GenericBox<string>("Hello Generics")
console.log(numberBox.getContent()) // 123
console.log(stringBox.getContent()) // Hello Generics

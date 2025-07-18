const jsTools: string[] = ["React", "Angular", "Vue", "React Native", "Svelte"]
jsTools.forEach((tool, idx) => {
    console.log(`${idx + 1} - ${tool}`)
})

// al hacer hover vemos el tipo del objeto
const melville = {
    firstName: "Herman",
    lastName: "Melville",
    books: ["Moby Dick", "White Jacket", "Billy Budd", "Isle of the Cross"],
    born: 1819,
    city: "New York",
    country: "USA",
    died: 1891,
    go: true
}

// podemos resolverlo en línea, pero no es reutilizable
const cortazar: {
    firstName: string,
    lastName: string,
    books: string[],
    born: number,
    city: string,
    country: string,
    died: number | "alive",
} = {
    firstName: "Julio",
    lastName: "Cortázar",
    books: ["Rayuela", "Bestiario", "Final del juego", "Casa tomada"],
    born: 1914,
    city: "Bruselas",
    country: "Bélgica",
    died: 1984,

}

// podemos crear una interfaz reusable -> al transpilar a JavaScript, se elimina la interfaz
// pero TypeScript la usa para validar el código y autocompletar
// las interfaces son una forma de definir un tipo de objeto
// luego la exportaremos
export interface Author {
    firstName: string
    lastName: string
    books: string[]
    born: number
    city: string
    country: string
    died: number | "alive"
    // bestSeller?: string // el signo de interrogación indica que es opcional
    // podemos definir métodos dentro de la interfaz
    // getFullName: () => string
}

//luego lo exportaremos
export const vargasLlosa: Author = {
    firstName: "Mario",
    lastName: "Vargas Llosa",
    books: ["La ciudad y los perros", "La casa verde", "El Paraíso en la otra esquina", "La fiesta del chivo"],
    born: 1936,
    city: "Arequipa",
    country: "Perú",
    died: 2025,

}

const authors: Author[] = []
authors.push(melville)
authors.push(cortazar)
authors.push(vargasLlosa)
for (const author of authors) {
    console.log(author)
}

//agregar el método getFullName a la interfaz Author y la prop opcional bestSeller
//actualizar los objetos
export { }
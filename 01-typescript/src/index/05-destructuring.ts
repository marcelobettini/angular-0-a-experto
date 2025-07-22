//Object Destructuring in TypeScript
interface IMovie {
    title: string
    director: string
    year: number
}
interface IActor {
    firstName: string
    lastName: string
    placeOfBirth: {
        city: string
        country: string
    }
    movies: IMovie[]
}

const actor01: IActor = {
    firstName: 'Leonardo',
    lastName: 'DiCaprio',
    placeOfBirth: {
        city: 'Los Angeles',
        country: 'USA',
    },
    movies: [
        { title: 'Titanic', director: 'James Cameron', year: 1997 },
        { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
        { title: 'The Revenant', director: 'Alejandro González Iñárritu', year: 2015 },
        { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
    ],
}

// console.log(actor01.firstName + ' ' + actor01.lastName + '. Born in ' + actor01.placeOfBirth.city + ', ' + actor01.placeOfBirth.country)
// console.log("Top Movies: ")
// console.log(actor01.movies.map(movie => `${movie.title} - ${movie.year}`).join('\n'))
const { firstName, lastName, placeOfBirth: { city, country }, movies } = actor01

console.log(`${firstName} ${lastName}. Born in ${city}, ${country}.`)
console.log("Top Movies:")
console.log(movies.map(({ title, year }) => `${title} - ${year}`).join('\n'))

// Array Destructuring in TypeScript
const diCaprioMovies: IMovie[] = [
    { title: 'Titanic', director: 'James Cameron', year: 1997 },
    { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { title: 'The Revenant', director: 'Alejandro González Iñárritu', year: 2015 },
    { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
    { title: 'Django Unchained', director: 'Quentin Tarantino', year: 2012 },
    { title: 'Catch Me If You Can', director: 'Steven Spielberg', year: 2002 },
    { title: 'Shutter Island', director: 'Martin Scorsese', year: 2010 },
    { title: 'The Wolf of Wall Street', director: 'Martin Scorsese', year: 2013 },
    { title: 'Gangs of New York', director: 'Martin Scorsese', year: 2002 },
    { title: 'The Aviator', director: 'Martin Scorsese', year: 2004 },
    { title: 'The Great Gatsby', director: 'Baz Luhrmann', year: 2013 },
]

diCaprioMovies.sort((a, b) => a.year - b.year)
console.log(diCaprioMovies)
const [first, second, ...rest] = diCaprioMovies //saltear valores con comas: mostrar
console.log(`First Movie: ${first.title} (${first.year})`)
console.log(`Second Movie: ${second.title} (${second.year})`)
console.log("Rest of the Movies:")
rest.forEach(movie => console.log(`${movie.title} (${movie.year})`))

// Function Destructuring in TypeScript
function displayActorInfo({ firstName, lastName, placeOfBirth: { city, country }, movies }: IActor): void {
    console.log(`${firstName} ${lastName}. Born in ${city}, ${country}.`)
    console.log("Top Movies:")
    console.log(movies.map(({ title, year }) => `${title} - ${year}`).join('\n'))
}
const actor02: IActor = {
    firstName: 'Brad',
    lastName: 'Pitt',
    placeOfBirth: {
        city: 'Shawnee',
        country: 'USA',
    },
    movies: [
        { title: '12 Monkeys', director: 'Terry Gilliam', year: 1995 },
        { title: 'Se7en', director: 'David Fincher', year: 1995 },
        { title: 'Fight Club', director: 'David Fincher', year: 1999 },
        { title: 'Ocean\'s Eleven', director: 'Steven Soderbergh', year: 2001 },
        { title: 'Troy', director: 'Wolfgang Petersen', year: 2004 },
        { title: 'Mr. & Mrs. Smith', director: 'Doug Liman', year: 2005 },
        { title: 'The Curious Case of Benjamin Button', director: 'David Fincher', year: 2008 },
        { title: 'Inglourious Basterds', director: 'Quentin Tarantino', year: 2009 },
        { title: 'Moneyball', director: 'Bennett Miller', year: 2011 },
        { title: 'World War Z', director: 'Marc Forster', year: 2013 },
        { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019 },
    ],
}
displayActorInfo(actor02)

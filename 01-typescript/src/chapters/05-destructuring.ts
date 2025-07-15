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

export { }
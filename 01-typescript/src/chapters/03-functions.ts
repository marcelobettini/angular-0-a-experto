/**
 * 
 * @param message - The message to log to the console.
 * This function logs a message to the console.
 */
function messenger(message: string): void {
    console.log(message)
}

messenger('Hello, TypeScript!')

/**
* This function generates Fibonacci numbers up to a given limit.
@param n - The number of Fibonacci numbers to generate.
* @returns A string containing the Fibonacci numbers separated by commas.
*/
function fibonacciNumbers(n: number): string {
    const fib: number[] = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib.join(', ')
}

console.log(fibonacciNumbers(14))
console.log(fibonacciNumbers(25))


/**
*
* This function checks if a given string is a palindrome.
* @param str - The string to check.
* @returns True if the string is a palindrome, false otherwise.
*/
const isPalindrome = (str: string): boolean => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    // Check if the cleaned string is the same forwards and backwards
    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}
console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('Amigo, no gima')) // true
console.log(isPalindrome('Anita lava la tina')) // true
console.log(isPalindrome('hello world')) // false

/**
 * Function with optional and default parameters.
 * @param name - The name of the person defaulted to "Guest User".
 * @param tokens - The number of tokens (optional).
 * @returns A greeting message.
 */
function greet(name: string = "Guest User", tokens?: number): string {
    return `Hello, ${name || " guest"}. You have ${tokens || "no"} tokens.`
}
console.log(greet('Alice', 25)) // Hello, Alice. You are 25 years old.
console.log(greet('Bob')) // Hello, Bob. You are 30 years old.

/**
 * Function with object as a parameter
 */
import type { Author } from './02-arrays-objects-interfaces'
import { vargasLlosa } from './02-arrays-objects-interfaces'
function addBookToAuthor(author: Author, book: string): void {
    author.books.push(book)
}
addBookToAuthor(vargasLlosa, 'La llamada de la tribu')
console.log(vargasLlosa.books)
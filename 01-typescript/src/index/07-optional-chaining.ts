/* 
La diferencia principal entre || y ?? está en cómo manejan los valores "falsy":

Operador OR lógico (||)
Devuelve el primer valor truthy que encuentra
Considera como falsy: false, 0, "", null, undefined, NaN

Operador Nullish Coalescing (??)
Devuelve el primer valor que NO sea null o undefined
Solo considera como nullish: null y undefined
*/

const user = {
    address: {
        country: ""  // string vacío
    }
}

// Con ||
const country1 = user.address?.country || "Country not specified"
console.log(country1) // "Country not specified"

// Con ??
const country2 = user.address?.country ?? "Country not specified"
console.log(country2) // ""

/* 
Usa ?? cuando quieras preservar valores como 0, "", o false y solo reemplazar null/undefined
Usa || cuando quieras reemplazar cualquier valor falsy con un valor por defecto
En tu ejemplo, si country puede ser una cadena vacía válida, deberías usar ??. Si una cadena vacía debe tratarse como "no especificado", usa ||
*/
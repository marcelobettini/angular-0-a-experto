interface Product {
    id: number
    name: string
    price: number
    category: string
}

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics"
}
const product2: Product = {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    category: "Electronics"
}
const product3: Product = {
    id: 3,
    name: "Oak Desk",
    price: 199.99,
    category: "Furniture"
}
const product4: Product = {
    id: 4,
    name: "Office Chair",
    price: 89.99,
    category: "Furniture"
}

const shoppingCart: Product[] = [product4, product3, product2, product1]
const taxRate = 0.21 // 21% tax rate

// according to Clean Code, when a function takes more than 3 parameters, it is better to use an object


type CalculateTotalOptions = {
    products: Product[]
    taxRate: number            // 0.21 para 21 %
    discountPercentage?: number // 0–100
    locale?: string            // ej. 'es-AR'
    currency?: string          // ej. 'ARS'
}

function calculateTotal(options: CalculateTotalOptions) {
    const {
        products,
        taxRate,
        discountPercentage = 0,
        locale = 'es-AR',
        currency = 'ARS'
    } = options

    // 1. Precio de lista
    const listPrice = products.reduce((acc, p) => acc + p.price, 0)

    // 2. Descuento
    const discountAmount = listPrice * (discountPercentage / 100)

    // 3. Subtotal (precio tras descuento)
    const subTotal = listPrice - discountAmount

    // 4. Impuestos
    const taxAmount = subTotal * taxRate

    // 5. Total final
    const total = subTotal + taxAmount

    // Formateador de moneda
    const fmt = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
    })

    return {
        listPrice: fmt.format(listPrice),
        discountAmount: fmt.format(discountAmount),
        subTotal: fmt.format(subTotal),
        taxAmount: fmt.format(taxAmount),
        total: fmt.format(total)
    }
}

const result = calculateTotal({
    products: shoppingCart,
    taxRate: taxRate,
    discountPercentage: 12   // 12 % de descuento
})
const { listPrice, discountAmount, subTotal, taxAmount, total } = result
console.log(`TICKET DE COMPRA:
- Precio de lista: ${listPrice}
- Descuento: ${discountAmount}
- Subtotal: ${subTotal}
- Impuestos: ${taxAmount}
- Total: ${total}
`)

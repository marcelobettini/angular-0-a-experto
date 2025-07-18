// antes de resolver la interfaza, hacer hover y copiar la definición de la interfaz

interface IAddress {
    number: number | string
    street: string
    city: string
    country: string
}

interface IEmployee {
    fullName: string
    dob: string
    email: string
    address: IAddress
    printAddress: () => string
}

const employee: IEmployee = {
    fullName: 'Marcos Novoa Carrillo',
    dob: '25-12-1975',
    email: 'marcos_novoa@tesla.com',
    address: {
        number: 2040,
        street: 'Main St',
        city: 'NY',
        country: 'USA',
    },
    printAddress() {
        return this.address.number + ' ' + this.address.street + ', ' +
            this.address.city + ', ' + this.address.country
    }
}


console.log(employee.printAddress())

export { }
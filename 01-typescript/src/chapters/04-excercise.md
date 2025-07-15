```ts
/*
    ===== Implementa una interfaz  =====
*/


const employee = {
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


console.log( employee.printAddress());

export {};
```
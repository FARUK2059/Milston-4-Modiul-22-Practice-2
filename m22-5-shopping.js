                                          //  Modiul --- 22.5
                                            

// Concept ===>   Total Shopping Price Calculet


const products = [
    {name: 'shampoo', price: 300 },
    {name: 'loshon', price: 170 },
    {name: 'freshwash', price: 120 },
    {name: 'rexona', price: 155 },
    {name: 'tuthpast', price: 33 },
]

function getShoppingTotal(products){
    // console.log(products);
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('aj total shopping cost', total);

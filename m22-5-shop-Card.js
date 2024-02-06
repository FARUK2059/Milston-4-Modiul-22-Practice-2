                                          //  Modiul --- 22.5 extra
                                            

// Concept ===>   Total Shopping Price Calculet of Card


const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'loshon', price: 170, quantity: 3},
    {name: 'freshwash', price: 120, quantity :5},
    {name: 'rexona', price: 155, quantity : 4},
    {name: 'tuthpast', price: 33, quantity : 7},
]


function cardTotal(products){
    // console.log(products);
    let total = 0;
    for(const product of products){
        // console.log(product);
        const thisProductCost = product.price * product.quantity;
        total= total+ thisProductCost
    }
    return total
}

const shoppingcost = cardTotal(products);
console.log('aj total khoros hoilo', shoppingcost );
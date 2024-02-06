                                          //  Modiul --- 22.3 extra
                                            

// Concept ===>   Calculate shopping Price
                            //  start Modiul

                                        

/*
******** Total Shopping Price Calculation

*** Shirt price -->  500
*** pant price -->  300
*** Shoe price -->  900
*/ 



function shoppingPrice( shirtQuantity, pantQuantity, shoeQuantity){
    // console.log(shoppingPrice);
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    // console.log(perPantPrice);

    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = perShoePrice * shoeQuantity;

    const totalShoppingPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalShoppingPrice;
}

const price = shoppingPrice( 5, 7, 3);
console.log('total shopping cost', price);
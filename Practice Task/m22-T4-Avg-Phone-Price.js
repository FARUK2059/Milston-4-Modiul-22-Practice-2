                                          //  Modiul --- 22 
                                            

// Concept ===>   The average price of phone

                            //  ** Taskes -- 4 **

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]

// const mobile = phones[0].price;
// console.log(mobile);

function findAveragePhonePrice(phones){
    // console.log(phones);
    const phoneItem = phones.length;
    // console.log(phoneItem);
    
    let totalPhonePrice = 0;
    for (const phone of phones){
        const phonePrice = phone.price;
        // console.log(phonePrice);
        totalPhonePrice = totalPhonePrice + phonePrice;
        // console.log(totalPhonePrice);
    }
    const avgPhonePrice = totalPhonePrice / phoneItem;
    // console.log(avgPhonePrice);
    return avgPhonePrice;
}

const avgPhonePrice = findAveragePhonePrice(phones);
console.log('All phone price average is :', avgPhonePrice);
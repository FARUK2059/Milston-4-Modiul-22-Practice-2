                                          //  Modiul --- 22.4
                                            

// Concept ===>   Find Lowest mobile

const mobiles =[
    { name : 'Samsung', price: 20000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Symphony', price: 10000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Vivo', price: 15000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Xiomi', price: 18000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'IPhone', price: 70000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Redmi', price: 25000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
]


function getCheapesPhone(mobiles){
    // console.log(mobiles);
    let min = mobiles[0];
    for(const phone of mobiles){
        // console.log(phone);
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapesPhone(mobiles);
console.log('cheapest phone is', cheap);
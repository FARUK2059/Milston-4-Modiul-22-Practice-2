                                          //  Modiul --- 22.4 extra
                                            

// Concept ===>   Find Max price mobile

const mobiles =[
    { name : 'Samsung', price: 20000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Symphony', price: 10000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Vivo', price: 15000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Xiomi', price: 18000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'IPhone', price: 70000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
    { name : 'Redmi', price: 25000, camera: '12MP', color: 'black', cheeps: 'SneepDragon', display: 'Supper amoled'},
]


function getHighPhone(mobiles){
    // console.log(mobiles);
    let Max = mobiles[0];
    for(const phone of mobiles){
        // console.log(phone);
        if(phone.price > Max.price){
            Max = phone
        }
    }
    return Max;
}

const heights = getHighPhone(mobiles);
console.log('cheapest phone is', heights);
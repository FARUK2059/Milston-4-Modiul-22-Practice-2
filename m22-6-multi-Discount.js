                                          //  Modiul --- 22.6
                                            

// Concept ===>   (Advanced) Multi-Layer Discount Price Calculation

/**
 ******* Up to 100 ---> 100
 ******* More then (100-200) -----> 90
 ******* More then 200 -----> 70
 *******
 **/ 


 function discountedPrice(quantity){
    // console.log(quantity);
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }

    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }

    else{
        const total = quantity * 70;
        return total;
    }
 }


//  const total = discountedPrice(12);
//  const total = discountedPrice(150);
 const total = discountedPrice(220);
 console.log('total discount Price is', total);
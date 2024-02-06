                                          //  Modiul --- 22.6 extra
                                            

// Concept ===>   (Advanced) Multi-Layer Discount Price Calculation



function layerDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }

    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remaningTotal = remainingQuantity * second100Price;
        const total = first100Total + remaningTotal;
        return total;
    }

    else {
        const first100Total = 100 * first100Price;
        const second100Totla = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remaningTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Totla + remaningTotal;
        return total;
    }
}

// const total = layerDiscountedTotal(90);
// const total = layerDiscountedTotal(120);
const total = layerDiscountedTotal(230);
console.log('total leyer multi-Discount Price', total);



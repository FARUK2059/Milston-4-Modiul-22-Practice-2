                                          //  Modiul --- 22
                                            

// Concept ===>   Find The Lowest Number
                            //  start Modiul

                                        

/*
******** Find the Min Number

********  Practice Task   1
*/ 

const lowestnumber = [167, 190, 120, 165, 137]


function numOfMin(numbers){
    // console.log(numbers);
    let min = numbers[0];
    for(const num of numbers){
        // console.log(min)
        if(num < min){
            min = num;
        }

    }
    return min;

}


const min = numOfMin(lowestnumber);
console.log('min value is', min);

                                          //  Modiul --- 22.2 extra
                                            

// Concept ===>   Who Is The Smollest? Find The min Number In An Array
                            //  start Modiul

                                        

/*
******** Find the Min Number
*/ 

const heights = [ 7, 12, 19, 4, 76, 14, 12, 73 ]


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


const min = numOfMin(heights);
console.log('min value is', min);

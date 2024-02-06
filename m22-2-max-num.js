                                          //  Modiul --- 22.3
                                            

// Concept ===>   Who Is The Tallest? Find The Max Number In An Array
                            //  start Modiul

                                        

/*
******** Wood Calculation
*/ 

const heights = [ 5, 12, 27, 19, 76, 14, 12, 73 ]


function numOfMax(numbers){
    // console.log(numbers);
    let max = numbers[0];
    for(const num of numbers){
        // console.log(max)
        if(num > max){
            max = num;
        }

    }
    return max;

}


const Max = numOfMax(heights);
console.log('max value is', Max);

                                          //  Modiul --- 22
                                            

// Concept ===>   Find the friend with the smallest name.
                            //  start Modiul

                                        

/*
******** Find the Lowest Number

********  Practice Task   2
*/ 

const lowestname = ['rahim', 'robin', 'rafi', 'ron', 'rashed']


function findSmallestName(lowestname) {
    // console.log(lowestname);
    let smellestName = lowestname[0];
    for (let i = 1; i < lowestname.length; i++){
        // console.log(lowestname);
        if (lowestname[i].length < smellestName.length){
            smellestName = lowestname[i];
        }
    }
    return smellestName;
}

const smallname = findSmallestName(lowestname);
console.log('The lowest name is', smallname);



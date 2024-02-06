                                          //  Modiul --- 22
                                            

// Concept ===>   Calculate Total Electronic Budget

                                        
/*
********  Practice Task   2
*/ 


// const electronicItem = [
//     {laptop: 35000 },
//     {tablet: 15000 },
//     {mobile: 20000 },
// ]

function calculateElectronicsBudget(electronicItem){
    // console.log(electronicItem);

    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalbudget = laptop + tablet + mobile;
    return totalbudget;
}

const totalbudget = calculateElectronicsBudget(electronicItem);
console.log('total money required', totalbudget);
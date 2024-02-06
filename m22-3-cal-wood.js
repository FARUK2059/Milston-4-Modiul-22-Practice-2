                                          //  Modiul --- 22.3
                                            

// Concept ===>   Use Add And Multiplication To Calculate Wood Requirements
                            //  start Modiul

                                        

/*
******** Find Total Wood

*** chair = > 3 cft
*** chair = > 10 cft
*** chair = > 50 cft
*/ 



function woodQuantity( chairQuantity, tableQuantity, bedQuantity){
    // console.log(woodQuantity);
    const perChairWood = 3;
    const perTableWood = 11;
    const perBedWood = 45;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;


    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity( 5, 8, 4);
console.log('wood needed', wood);
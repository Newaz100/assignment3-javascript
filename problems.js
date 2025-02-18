function calculateVAT( price ) {
    if( typeof price === "number" && price >= 0){
        const amount =  price * 7.5 / 100;
        return amount;
    }
    else{
        return "Invalid" ;
    }
}



console.log(calculateVAT(1000));
console.log(calculateVAT(-50));


function  validContact( contact ) {
    if( typeof contact === "string" && contact.length == 11 && contact.startsWith('01') && !contact.includes(" ") ){

        return true;
    }
    else if( typeof contact === "string" ){

        return false;
    }
    else{
        return "Invalid";
    }
}


console.log(validContact("01712345678"));
console.log(validContact("12345678901")); 


function  willSuccess( marks ) {

    if(!Array.isArray(marks)){
        return "Invalid";
    }

    let passCount = 0, failCount = 0;
    for(const mark of marks){
        if (typeof mark !== "number" || mark < 0 || mark > 100) {
            return "Invalid"; 
        }

        if (mark >= 50) {
            passCount++;
        } else {
            failCount++;
        }
        
    }
    if(passCount>failCount){
            return true;
        }
    else{
        return false;
    }
}




console.log(willSuccess([60, 70, 80, 90]));
console.log(willSuccess([30, 40, 20, 50]));  













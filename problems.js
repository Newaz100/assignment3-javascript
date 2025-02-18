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












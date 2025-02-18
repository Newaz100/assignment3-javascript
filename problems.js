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

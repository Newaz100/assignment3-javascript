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



function  validProposal( person1 , person2 ){
    if (
        typeof person1 !== "object" || person1 === null ||
        typeof person2 !== "object" || person2 === null ||
        typeof person1.name !== "string" || typeof person2.name !== "string" ||
        typeof person1.age !== "number" || person1.age < 0 ||
        typeof person2.age !== "number" || person2.age < 0 ||
        (person1.gender !== "male" && person1.gender !== "female") ||
        (person2.gender !== "male" && person2.gender !== "female")
    ){
        
            return "Invalid";
    }
    
    if (person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7) {
            return true;
    }

    return false;
}



console.log(validProposal(
    { name: "Alice", age: 25, gender: "female" }, 
    { name: "Bob", age: 30, gender: "male" }
));  


console.log(validProposal(
    { name: "Charlie", age: 40, gender: "male" }, 
    { name: "David", age: 25, gender: "male" }
));  



function  calculateSleepTime( times ) {
    let totalSecond = 0;
    let hour = 0;
    let min = 0;
    let sec = 0;
    if(!Array.isArray(times)){
        return "Invalid";
    }

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number' || times[i] <= 0) {
            return "Invalid";
        }
    }

    for(const time of times){
        totalSecond = totalSecond + time;
        hour = Math.floor(totalSecond / 3600);
        min = Math.floor((totalSecond % 3600) / 60);
        sec = totalSecond % 60;
    }
    

    return {hour: hour,minute: min,second: sec};
}


console.log(calculateSleepTime([3600, 1800, 600]));  

console.log(calculateSleepTime([-500, 300]));  












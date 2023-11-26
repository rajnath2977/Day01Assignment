function checkNumberType (numvalue){
    if(numvalue >0) {

        return "The Number is greater than Zero"
        }
    else if (numvalue<0){
        return "The Number is less than Zero"
    }
else (numvalue =0) 
    return "The Number is equal to Zero"

}

let verifiedvalue = checkNumberType(10)
console.log(verifiedvalue)
verifiedvalue = checkNumberType(-10)
console.log(verifiedvalue)
verifiedvalue = checkNumberType(0)
console.log(verifiedvalue)

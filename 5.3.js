// Create a simple password validation function that takes a
// password string as an argument.
// If the length of the password is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.

//1. Create a function that uses an if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.


// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.


const passwordValidationA =(password) => 
{
    if(password.length >7 )
    {
        return "Strong";
    }
    else{
        return "Weak";
    }
};


const passwordValidationB =(password) => 
{
    let res = password.length >7 ? "Strong": "Weak";
    return res;
}

const passwordValidationC =(password) => 
{
    let res = password.length >7 ? "Strong": "Weak";
    return res;
}


const passwordValidationAdvanced =(password) => 
{
    let res = password.length >7 && password.toLowerCase()!=password ? "Very Strong": password.length == 7? "Strong":password.length<7? "Weak":null;
    return res;
}

//test
res = passwordValidationAdvanced("abcYefEg");
console.log(res);
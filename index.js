const uppre_case= require("swap-case").uppre_case;

function greet(name){
    console.log(uppre_case(`hey there ${name}`));
}

greet("reetam");
module.exports= greet;
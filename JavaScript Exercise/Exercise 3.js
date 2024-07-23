function Ex3(){
    //Math.random generates a number between 0 and 1
    //Math.floor rounds down the result to the nearest integer

    let num1 = Math.floor(Math.random()*51);
    let num2 = Math.floor(Math.random()*51);

    //make an "if" statement to check all three of these conditions
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50){
        return true; 
        } else {
         return false;
        }
    }

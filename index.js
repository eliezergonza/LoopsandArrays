//Only Odds
//Pseudocode:  
    // Declare Example Array.  Create temp array to hold odd numbers from the original array
    // Loop through each item in the array to verify if is odd using the modular operator
    // Push odd number into temp array

    let myNumbers = [2,4,6,8,10,11,12];
    let oddNumbers = [];

    for (let i = 0; i < myNumbers.length; i++){
      if (myNumbers[i] % 2 === 1){
        oddNumbers.push(myNumbers[i]);
      }
    }

    console.log(oddNumbers);

//Vowel Vs Consonant
//Pseudocode:  
    // Declare a variable for the sample string
    // Create two counters.  One for the vowels and one for the consonants
    // Loop through the sentence identifying the vowels and constants using an if statement
   
    const sentence = "textbook"
    let vowelCounter = 0;
    let consonantCounter = 0;
    
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" ||
      sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") {
        vowelCounter++
    }
    else
      consonantCounter++
    }
    
    console.log(`${sentence} has ${consonantCounter} consonants and ${vowelCounter} vowels`);

//Revese Array
//Pseudocode:  
    // Declare example array.  Create temp array to hold the reverse array
    // Loop through each item going backwards using a for loop staring at the end of the array using array length
    // Push each array item into temp array

    let inputArray = [1,2,3];
    let reverseNumbers = [];

    for (let i = inputArray.length-1; i >= 0; i--){
      if (inputArray[i]){
        reverseNumbers.push(inputArray[i]);
      }
    }

    console.log(reverseNumbers);

//FizzBuzz
//Pseudocode:  
    // Crate an array to store the numbers from 1 to 10
    // Loop through each number in the array up to 100
    // Use the modular to verify if multiple of 3 or 5
    // Using if else statement generate Fiz for multiple of 3 and Buzz for multiple of  of 5.  FizBuzz for both

    let oneToOneHundred = [];

    for (let i = 1; i <= 100; i++){

      if(i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz");
      }
      else if(i % 3 === 0){
        console.log("Fizz");
      }
      else if(i % 5 === 0){
        console.log("Buzz");
      }
      else{
        console.log(i);
      }
        
    }

   
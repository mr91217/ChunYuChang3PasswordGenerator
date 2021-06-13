// Assignment code here


function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
  
};

function getRandomMix() {
  return mix[Math.floor(Math.random() * mix.length)];
};

function getRandomNumber() {
  var value = Math.floor(Math.random() * numbers.length);
  return value;  
};

function case1() {
  var length = prompt("how many letters do you need");
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  emptyString = "";
    for (var i = 0, n = alphabet.length; i < length; ++i) {
      emptyString += alphabet.charAt(Math.floor(Math.random() * n));
    }
    return emptyString;
 
}

function case2() {
  
  var length = prompt("how many letters do you need");
  var mix = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-=+ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  emptyString = "";
    for (var i = 0, n = mix.length; i < length; ++i) {
      emptyMix += mix.charAt(Math.floor(Math.random() * n));
    }
    return emptyMix;
  
}

function case3() {
  
  var length = prompt("how many letters do you need");
  var numbers = "0123456789";
        emptyNumber = "";
    for (var i = 0, n = numbers.length; i < length; ++i) {
      emptyNumber += numbers.charAt(Math.floor(Math.random() * n));
    }
    return emptyNumber;
  
}

function case4() {
  var length = prompt("how many letters do you need"),
        charset = "abcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
  




function question() {
  
   
  var letter = prompt("do you need 1.Alphabet only 2.Mix 3.Numbers only 4.Mix with lowercase ")
  
  letter = parseInt(letter);

  switch (letter) {
    case 1:
      return case1();
      
    case 2:
      return case2();
      
    case 3:
      return case3();
    
    case 4:
      return case4();
    
    
    default:
      window.alert("You did not pick a valid option. Try again.");
      return question();
      
  }
  
}

function generatePassword() {
  
  
  

} 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = question();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


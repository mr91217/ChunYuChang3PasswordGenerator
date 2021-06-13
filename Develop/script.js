// Assignment code here

function case1() {
  var length = prompt("how many letters do you need? (Please take at least 8 words but no longer than 128 words)");
  while (length > 128 || length < 8) {
    length = prompt("At least 8 words and no longer than 128 words");
  }  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  emptyString = "";
    for (var i = 0, n = alphabet.length; i < length; ++i) {
      emptyString += alphabet.charAt(Math.floor(Math.random() * n));
    }
    return emptyString;
 
}

function case2() {
  
  var length = prompt("how many letters do you need? (Please take at least 8 words but no longer than 128 words)");
  while (length > 128 || length < 8) {
    length = prompt("At least 8 words and no longer than 128 words");
  }
  var numbers = "0123456789";
        emptyNumber = "";
    for (var i = 0, n = numbers.length; i < length; ++i) {
      emptyNumber += numbers.charAt(Math.floor(Math.random() * n));
    }
    return emptyNumber;
  
}

function case3() {
  var length = prompt("how many letters do you need? (Please take at least 8 words but no longer than 128 words)");
  while (length > 128 || length < 8) {
    length = prompt("At least 8 words and no longer than 128 words");
  }
  var lowercase = "abcdefghijklmnopqrstuvwxyz0123456789";
  var emptylowercase = "";
    for (var i = 0, n = lowercase.length; i < length; ++i) {
        emptylowercase += lowercase.charAt(Math.floor(Math.random() * n));
    }
    return emptylowercase;
}

function case4() {
  
  var length = prompt("how many letters do you need? (Please take at least 8 words but no longer than 128 words)");
  while (length > 128 || length < 8) {
    length = prompt("At least 8 words and no longer than 128 words");
  }  var mix = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-=+ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  emptyMix = "";
    for (var i = 0, n = mix.length; i < length; ++i) {
      emptyMix += mix.charAt(Math.floor(Math.random() * n));
    }
    return emptyMix;
  
}

/**********************************************************/

var timerEl = document.getElementById('countdown');
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      
      window.close();
    }
  }, 1000);
}

/************************************************/

function generatePassword() {  
   
  var letter = prompt("1.Alphabet only 2.Numbers only 3.Numbers with lowercase 4.Mix with special character 5.Exit")
  while (letter === null) {
    alert("Thanks for using!");
    return "Click the Button again if you need it!";
  }
  
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
    
    case 5:
      countdown();
      return "Thanks for using, it will be closed after 5 secs";
    
    default:
      window.alert("You did not pick a valid option. Try again.");
      return generatePassword();
      
  }
  
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


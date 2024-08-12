const CHARACTERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
  "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
  "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  let passwordLength = 8;

  function getRanadomChar() {
    let randomChar = Math.floor(Math.random() * CHARACTERS.length);
    return CHARACTERS[randomChar];
  }
  function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      randomPassword += getRanadomChar();
    }
      return randomPassword;
  }
   function displayPasswords() {
    const PASSWORD_ONE = generateRandomPassword();
    const PASSWORD_TWO = generateRandomPassword();
  
  //displaying password on the input field
  document.querySelector('.display-generated-pw1').value = PASSWORD_ONE;
  document.querySelector('.display-generated-pw2').value = PASSWORD_TWO;
  } 
  //adding event listener to the "Generate Password" button
  document.querySelector('.generate-password').addEventListener('click', displayPasswords);

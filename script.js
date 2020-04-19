// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
    var length = 0;

    while (true)
    {
      var lenghtStr = prompt("Please enter length of the password");
      if (lenghtStr === null)
        return;
      else
        length = parseInt(lenghtStr);
      

      if(length >= 8 && length <= 128)
      {
        localStorage.setItem('lenght',length);        
        break;
       }
  
    }
    var lowercase=window.confirm("Include lowercases?");
    var uppercase=window.confirm("Include uppercases?");
    var numeric=window.confirm("Include numbers?");
    var special=window.confirm("Include special chars?");

    var options = {lower: lowercase, upper:uppercase, number:numeric, spchar:special};

    var password = generatePassword(length, options);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword(length, options)
{
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";

    console.log(length);
    console.log(options);

    for (var x = 0; x < length;) {
        var i = Math.floor(Math.random() * chars.length);
        var passchar= chars.charAt(i);
        

        if(chars.charAt(i) == passchar.toUpperCase() && options.upper)
        {
          console.log("Char " +i +" : "+passchar);
          console.log("allowed UpperCase");
          pass += chars.charAt(i);
          x++;
        }
        if(chars.charAt(i) == passchar.toLowerCase() && options.lower)
        {
          console.log("Char " +i +" : "+passchar);
          console.log("Allowed Lower Case");
          pass += chars.charAt(i);
          x++;
        }
        if(!isNaN(passchar) && options.number)
        {
          console.log("Char " +i +" : "+passchar);
          console.log("Allowed Numbers");
          pass += chars.charAt(i);
          x++;
        }
        if(isSpecialChar(passchar) && options.spchar)
        {
          console.log("Char " +i +" : "+passchar);
          console.log("Allowed Special");
          pass += chars.charAt(i);
          x++;
        }
    }

    if(pass=="")
      alert("Please allow multiple options");
    else
      return pass;

}


function isSpecialChar(char) {
  //Regex for Valid Characters i.e. Alphabets and Numbers.
  var regex = /^[A-Za-z0-9]+$/

  //Validate TextBox value against the Regex.
  var isValid = regex.test(char);
  //console.log(isValid);
  return !isValid;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

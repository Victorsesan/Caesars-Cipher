function rot13(str) {
  let charCode = 0;
  let strArr = [];
  strArr = str.split(""); // split the string into array
  for (let i = 0; i < strArr.length; i++) {
    charCode = strArr[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      if (charCode > 77) {
        charCode = charCode - 13;
      }
      else {
        charCode = charCode + 13;
      }

      strArr.splice(i,1,String.fromCharCode(charCode));
    }
  }
  return strArr.join('');
}

rot13("SERR PBQR PNZC");

//I took an empty array & store the string passed as arguments by using String split method.
//example : let str = "An Apple"; str.split(''); this will give the result as ['A', 'n', ' ', 'A', 'p', 'p', 'l', 'e'];
//Iterate the array using for loop
//Inside the loop , take the ASCII char code of the first index and store it in a variable.
//I checked if the ASCII value lies between 65 and 90 i.e Capital alphabets.
//If condition is true , check if ASCII value is greater than 77 i.e greater than 'M' , if it is true then subtract 13 from the ascii value , else if it is less than 77 than add 13 to the ascii value.
//I replaced character at that index with the corresponding new ASCII code obtained from step 5 using splice and String.fromCharCode
//After the entire loop is completed i need to join the array using the join method.


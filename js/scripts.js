// business logic
var pigLatin = function(inputWord) {
  //change input string to lower case
  var inputWord = inputWord.toLowerCase();
  //set array of vowels to compare string to
  var vowels = ["a","e","i","o","u"];
  //turn input string into array
  var inputArray = inputWord.split("");
  //check array for spaces
  var badInputs = [" ", "0", "1", "2", "3", ]
  //initialize variable to tell .slice and .splice where to cut
  var spliceIndex = 0
  //set spliceIndex based on how many consonants are at beginning of word
  for (var i = 0; i < inputArray.length; i++) {
    if (vowels.includes(inputArray[i])) {break;}
    else {spliceIndex++}
  }
  //Find if the input is a single word with no spaces or special characters
  if (/[" "]/.test(inputArray)) {
    alert("Please enter a single word with no spaces");
  }
  else if (/[1-9]/.test(inputArray)) {
    alert("Please don't enter any numbers!");
  }
  else {
    //find if first letter of the inputted word is in the array called vowels
    if (vowels.includes(inputArray[0])) {
      inputArray.push("ay");
      var outputArray = inputArray.slice();
    }
    //find a q, cut out the u with the q
    else if (inputArray[(spliceIndex-1)] === "q") {
      var firstLetter = inputArray.slice(0,(spliceIndex+1));
      firstLetter.push("ay");
      inputArray.splice(0,(spliceIndex+1));
      var outputArray = inputArray.concat(firstLetter);
    }
    //cut out beginning of word; up to first vowel. append to end of word
    else {
      var firstLetter = inputArray.slice(0,spliceIndex);
      firstLetter.push("ay");
      inputArray.splice(0,spliceIndex);
      var outputArray = inputArray.concat(firstLetter);

    }
    //return a string
    return outputArray.join('');
  }

};

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //pull variable from form on page
    var inputWord = $("input#pig").val();
    //call piglatin function and return result of the function to variable called result
    var result = pigLatin(inputWord);
    //send result variable to page
    $("#result").text(result);

    $("#result").show();
  });
});

// business logic
var pigLatin = function(inputWord) {
  var inputWord = inputWord.toLowerCase();
  var vowels = ["a","e","i","o","u"];
  debugger;
  var inputArray = inputWord.split("");
  //find if first letter of the inputted word is in the array called vowels
  if (vowels.includes(inputArray[0])) {
    inputArray.push("ay");
  }
  else {
    var firstLetter = inputArray[0];
    inputArray.splice(0,1);
    inputArray.push(firstLetter, "ay");
  }
  return inputArray.join('');
};

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputWord = $("input#pig").val();
    var result = pigLatin(inputWord);
    $("#result").text(result);

    $("#result").show();
  });
});

// business logic
var pigLatin = function(inputWord) {
  var inputWord = inputWord.toLowerCase();
  var vowels = ["a","e","i","o","u"];
  var inputArray = inputWord.split("");
  var spliceIndex = 0
  for (var i = 0; i < inputArray.length; i++) {
    if (vowels.includes(inputArray[i])) {break;}
    else {spliceIndex++}
  }
  //find if first letter of the inputted word is in the array called vowels
  if (vowels.includes(inputArray[0])) {
    inputArray.push("ay");
    var outputArray = inputArray.slice();
  }
  else {
    var firstLetter = inputArray.slice(0,spliceIndex);
    firstLetter.push("ay");
    inputArray.splice(0,spliceIndex);
    var outputArray = inputArray.concat(firstLetter);

  }
  return outputArray.join('');
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

$(document).ready (function(){

  $("input").click(function(sentence) {
    var answerPrompt = prompt("Write you sentence here!");

    alert("Your sentence to be encrypted is " + '"' + answerPrompt + '"');

    // var replacer = /(^.|\S^.)(.*)(.$|.\.$)/;
    //
    // var splitUser = userSentence.match(replacer);
    //
    // console.log(splitUser);

    function replacer(match, p1, p2, p3) {
      var firstLast = [p1, "", p3].join("");
      return firstLast.toUpperCase();
    };
    var firstLastUpper = answerPrompt.match(/(^.|\S^.)(.*)(.$|.\.$)/);

		// function reverseAnswer(string){
      // var firstLastUpper = answerPrompt.replace(/(^.|\S^.)(.*)(.$|.\.$)/, replacer);
    	// var switchFirstLastUpper = firstLastUpper.replace(/(^.|^.\S)(.$|.\.$)/, '$2$1');
    	// var divideAnswer = (answerPrompt.length / 2);
    	// var replace = answerPrompt.charAt(divideAnswer);
    	// var concate = (replace + answerPrompt + switchFirstLastUpper);
      // var split = concate.split("");
      // var reverse = split.reverse();
      // var join = reverse.join("");
    //   return firstLastUpper;
    // };

    console.log(firstLastUpper);

  });

});

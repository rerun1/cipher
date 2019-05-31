$(document).ready (function(){

  $("input").click(function(sentence) {
    var userSentence = prompt("Write you sentence here!");

    // alert("Your sentence to be encrypted is " + '"' + userSentence + '"');

    console.log(userSentence);

    function replacer(match, p1, p2, p3) {
      // p1 is first character, p2 all middle characters, and p3 last characters//
      var firstLast = [p1, "", p3].join("");
      return firstLast.toUpperCase();
    };

    var firstLastUpper = userSentence.replace(/(^.|^.\S)(.*)(.$|.\.$)/, replacer);

    console.log(firstLastUpper);

    var firstLastSwitch = firstLastUpper.replace(/(^.|^.\S)(.$|.\.$)/, '$2$1');

    console.log(firstLastSwitch);

    var switchAdd = userSentence + firstLastSwitch;

    console.log(switchAdd);

    var userSentenceDivide = userSentence.charAt(Math.floor(userSentence.length / 2));

    console.log(userSentenceDivide);

    var encryptUser = userSentenceDivide + switchAdd;

    console.log(encryptUser);

    function reverseEncrypt() {
      var splitEncrypt = encryptUser.split("");
      var reverseSplit = splitEncrypt.reverse();
      var joinEncrypt = reverseSplit.join("");
      return joinEncrypt;
    };

    console.log(reverseEncrypt(encryptUser));

  });

});

var findReplace = function(phrase, wordFind, wordReplace) {
  var phraseArray = phrase.split(" ");
  var resultArray = []

  for(var i = 0; i < phraseArray.length; i+=1) {
    var wordOn = phraseArray[i].split("");
    var punc = "";
    var frontPunc = "";

    //tests for punctuation -- separates punctuation from word//
    if (/[,.?\-!''""]/.test(wordOn[wordOn.length - 1]) && /[,.?\-!''""]/.test(wordOn[0])) {
      punc = wordOn.pop();
      frontPunc = wordOn.shift();
    } else if (/[,.?\-!''""]/.test(wordOn[0])) {
      frontPunc = wordOn.shift();
    } else if (/[,.?\-!''""]/.test(wordOn[wordOn.length -1])) {
      punc = wordOn.pop();
    };

    //if word found to replace, replaces and rejoins punctuation//
    if (wordOn.join("").toLowerCase() === wordFind) {
      resultArray.push(frontPunc + wordReplace + punc);
    } else {
      resultArray.push(phraseArray[i]);
    };
  };

  return resultArray.join(" ");
}


$(document).ready(function() {
  $('form').submit(function(event) {
    var result = findReplace(($('#phrase').val()), ($('#wordFind').val()), ($('#wordReplace').val()));

    $('#results').text(result);
    $('#results').show();
    $('.basic.modal')
      .modal('show')
      .transition('fadeIn')
    ;
    event.preventDefault();
  });
});

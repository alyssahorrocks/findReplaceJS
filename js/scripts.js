var findReplace = function(phrase, wordFind, wordReplace) {
  var phraseArray = phrase.split(" ");
  var replacementArray = []

  for(var i = 0; i < phraseArray.length; i+=1) {
    var wordOn = phraseArray[i].split("");
    var punc = "";
    var frontPunc = "";

    if (/[,.?\-!''""]/.test(wordOn[wordOn.length - 1]) && /[,.?\-!''""]/.test(wordOn[0])) {
      punc = wordOn.pop();
      frontPunc = wordOn.shift();
    } else if (/[,.?\-!''""]/.test(wordOn[0])) {
      frontPunc = wordOn.shift();
    } else if (/[,.?\-!''""]/.test(wordOn[wordOn.length -1])) {
      punc = wordOn.pop();
    };

    if (wordOn.join("").toLowerCase() === wordFind) {
      replacementArray.push(frontPunc + wordReplace + punc);
    } else {
      replacementArray.push(phraseArray[i]);
    };
  };

  return replacementArray.join(" ");
}

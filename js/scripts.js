var findReplace = function(phrase, wordFind, wordReplace) {
  var phraseArray = phrase.split(" ");
  var replacementArray = []

  for(var i = 0; i < phraseArray.length; i+=1) {
    var wordOn = phraseArray[i].split("");

    if (/[,.?\-!''""]/.test(wordOn[wordOn.length - 1])) {
      var punc = wordOn.pop();
    } else if (/[,.?\-!''""]/.test(wordOn[0])) {
      var punc = wordOn.shift();
    } else {
      var punc = "";
    };

    if (wordOn.join("") === wordFind) {
      replacementArray.push(wordReplace + punc);
    } else {
      replacementArray.push(phraseArray[i]);
    };
  };

  return replacementArray.join(" ");
}

var findReplace = function(phrase, wordFind, wordReplace) {
  var phraseArray = phrase.split(" ");
  var replacementArray = []
  
  for(var i = 0; i < phraseArray.length; i+=1) {
    if (phraseArray[i] === wordFind) {
      replacementArray.push(wordReplace);
    } else {
      replacementArray.push(phraseArray[i]);
    };
  };

  return replacementArray.join(" ");
}

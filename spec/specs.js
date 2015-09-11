describe('findReplace', function() {
  it('replace a single given word with another in a phrase', function() {
    expect(findReplace('the sky is green', 'green', 'blue')).to.equal('the sky is blue');
  });

  it('replace multiple instances of a word with another', function() {
    expect(findReplace('the green ridge mountains are green', 'green', 'blue')).to.equal('the blue ridge mountains are blue');
  });

  it('replace words in a phrase regardless of beginning or ending punctuation', function() {
    expect(findReplace('the near !sand, the dear sand, whatever fate', 'sand', 'land')).to.equal('the near !land, the dear land, whatever fate');
  });

  it('replaces words in a phrase case insensitive', function() {
    expect(findReplace('In the Sand of the Sky', 'sand', 'Land')).to.equal('In the Land of the Sky');
  });
});

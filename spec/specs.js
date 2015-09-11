describe('findReplace', function() {
  it('replace a single given word with another in a phrase', function() {
    expect(findReplace('the sky is green', 'green', 'blue')).to.equal('the sky is blue');
  });

  it('replace multiple instances of a word with another', function() {
    expect(findReplace('the green ridge mountains are green', 'green', 'blue')).to.equal('the blue ridge mountains are blue');
  });
});

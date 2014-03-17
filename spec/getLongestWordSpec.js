describe("getLongestWord", function() {
  it("should return the longest word", function() {
  	expect(coderbyte.getLongestWord("I can eat alot")).toEqual("alot");
  });

  it("should consider only characters that are leters", function() {
  	expect(coderbyte.getLongestWord("I can eat alot")).toEqual("alot");
  });

  it("should return the first appearance of a word if more than one word have the longest length", function() {
  	expect(coderbyte.getLongestWord("I can jump high.")).toEqual("jump");
  });
});
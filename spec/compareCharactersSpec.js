describe("compareCharactersSpec", function() {
  it("should return false if a string contains an odd number of characters", function() {
  	expect(coderbyte.compareCharacters("xoxox")).toEqual(false);
  });

  it("should return false if a string contains an unequal number of all characters", function() {
  	expect(coderbyte.compareCharacters("xoxoxx")).toEqual(false);
  });

  it("should return true if a string contains an equal number of all characters", function() {
  	expect(coderbyte.compareCharacters("xoxo")).toEqual(true);
  });
})
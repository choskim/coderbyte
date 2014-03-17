describe("swapCase", function() {
  it("should swap the cases for each character representing a letter in a string", function() {
    expect(coderbyte.swapCase("Hello World")).toEqual("hELLO wORLD");
  });

  it("should leave characters representing non-letters unchanged", function() {
    expect(coderbyte.swapCase("Hi, Cho!")).toEqual("hI, cHO!");
  });
});
describe("insertDash", function() {
  it("should insert a dash between two consequtive integers when each integer has an odd value", function() {
    expect(coderbyte.insertDash(1235)).toEqual("123-5");
  });
});
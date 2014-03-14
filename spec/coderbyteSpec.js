describe("coderbyte", function() {
  it("should include a global namespace called coderbyte", function() {
    expect(coderbyte).toEqual(jasmine.any(Object));
  });
});
describe("coderbyte", function() {
	it("should include a global namespace called coderbyte", function() {
		expect(coderbyte).toEqual(jasmine.any(Object));
	});

	describe("reverseString", function() {
		it("should reverse a string", function() {
      expect(coderbyte.reverseString("dog")).toEqual("god");
		});
	});

});
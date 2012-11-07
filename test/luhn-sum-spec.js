describe("calculate luhn sum for given values", function() {
  it("return 3 when given a number", function() {
    expect(luhn.sum("7992739871")).toEqual(3);
  });
});

describe("check whether lumn sum is correct", function() {
  it("return false when given incorrect luhn number ", function() {
    expect(luhn.isValid("79927398710")).toEqual(false);
  });

  it("return true when given correct luhn number ", function() {
    expect(luhn.isValid("79927398713")).toEqual(true);
  });

});

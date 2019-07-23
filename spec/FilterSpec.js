describe("Filter", function() {
  var filter

  beforeEach(function() {
    filter = new Filter([80,90,120])
  });

  it("should take an array as an argument", function() {
    expect(Array.isArray(filter._soundwave)).toEqual(true)
  });

  it("should apply upper limit", function() {
    filter.setUpperLimit(120);
    expect(filter._upperLimit).toEqual(120)
  });

  it("should apply lower limit", function() {
    filter.setLowerLimit(80);
    expect(filter._lowerLimit).toEqual(80)
  })

  it("should display the soundwave array", function() {
    expect(filter.showSoundwave()).toEqual([80,90,120])
  });

  it("should change items below lowerLimit to lowerLimit", function() {
    filter.checkLevels()
    expect(filter.showSoundwave()).toEqual([90,90,110])
  });

  it("should change items above upperLimit to upperLimit", function() {
    filter.checkLevels()
    expect(filter.showSoundwave()).toEqual([90,90,110])
  })

});

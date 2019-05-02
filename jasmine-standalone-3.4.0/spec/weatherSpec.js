describe('Weather', function(){

  var weather = new Weather

  it('has the function "isStorm"', function(){
    expect(weather.isStorm()).toBeDefined();
  });

  it('has been called', function(){
    spyOn(weather, 'isStorm');
    weather.isStorm();
    expect(weather.isStorm).toHaveBeenCalled();
  });

  it('has been called', function(){
    spyOn(weather, 'isStorm').and.returnValue(false)
    expect(weather.isStorm()).toEqual(false)
  });

  it('has been called', function(){
    spyOn(weather, 'isStorm').and.returnValue(true)
    expect(weather.isStorm()).toEqual(true)
  });

});

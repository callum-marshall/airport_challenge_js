
describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  });

  describe('land', function() {
    it('receives plane', function() {
      spyOn(airport.weather, 'isStorm').and.returnValue(false)
      expect(airport.land(plane)).toEqual(plane);
    });

    it('raises error weather is stormy', function() {
      spyOn(airport.weather, 'isStorm').and.returnValue(true)
      expect(
        function() {airport.land(plane); } ).toThrowError('too stormy to land')
    });
  });

  describe('takeOff', function() {
    it('allows plane to take off', function() {
      spyOn(airport.weather, 'isStorm').and.returnValue(false)
      airport.land(plane)
      expect(airport.takeOff(plane)).toEqual(plane);
    });

    it('raises error if weather is stormy', function(){
      spyOn(airport.weather, 'isStorm').and.returnValue(true)
      expect(
        function() {airport.takeOff(plane); } ).toThrowError('too stormy to take off')
    });
  });
});

// spyOn(Plane, 'land');

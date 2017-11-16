const frogJumps = require('../lib/frog-jumps.js');
describe('frogJumps', () => {
    describe('when start is equal to end', () => {
      it('should return 0', () => {
        const result = frogJumps(10, 10, 5);
        expect(result).toEqual(0);
      });
    });


    describe('when jumpLength is 0', () => {
      it('should return 0', () => {
        const result = frogJumps(10, 10, 0);
        expect(result).toEqual(0);
      });
    });


    describe('when destination is exactly one jump away', () => {
      it('should return 1', () => {
        expect(frogJumps(5,15,10)).toEqual(1);
      });
    });


    // describe('when jumplength x jumps <= end', () => {
    //   it('should still work', () => {
    //     expect(frogJumps(1,11,2)).toBeGreaterThanOrEqual(11);
    //   });
    // });


    // describe('when number of jumps exceeds end', () => {
    //   it('it should stop', () => {
    //     expect(frogJumps(1,21,6)).toEqual(1);
    //   });
    // });


    // describe('when destination is exactly one jump away', () => {
    //   it('should return 1', () => {
    //     expect(frogJumps(5,15,10)).toEqual(1);
    //   });
    // });


    // describe('when destination is exactly one jump away', () => {
    //   it('should return 1', () => {
    //     expect(frogJumps(5,15,10)).toEqual(1);
    //   });
    // });



});
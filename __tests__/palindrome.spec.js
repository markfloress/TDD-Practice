const isDrome = require('../lib/palindrome.js');
describe('isDrome', () => {

  const input1 = 'mom'
  const input2 = 'racecar'
  const input3 = 'black'
  const input4 = 4
  
    describe('when input is not a palindrome', () => {
      it('should return false', () => {
        const result = isDrome(input3);
        expect(result).toBe(false);
      });
    });

    describe('when input is a palindrome', () => {
      it('should return true', () => {
        const result = isDrome(input1);
        expect(result).toBe(true);
      });
    });

    describe('when input not a string', () => {
      it('should return false', () => {
        const result = isDrome(input4);
        expect(result).toBe(false);
      });
    });
});
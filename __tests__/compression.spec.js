const isDrome = require('../lib/compression.js');
describe('compression', () => {

  const input = "aaabbbccc"
  const input2 = "112233"
  const input3 = "abcabc"
  const input4 = 6
  
  
    describe('string compression from aaabbbccc', () => {
      it('should return a3b3c3', () => {
        const result = isDrome(input);
        expect(result).toEqual('a3b3c3');
      });
    });

    describe('string compression from 112233', () => {
      it('should return 122232', () => {
        const result = isDrome(input2);
        expect(result).toEqual('122232');
      });
    });

    describe('string compression from abcabc', () => {
      it('should return a1b1c1a1b1c1', () => {
        const result = isDrome(input3);
        expect(result).toEqual('a1b1c1a1b1c1');
      });
    });

    describe('string compression is not a string', () => {
      it('should return false', () => {
        const result = isDrome(input4);
        expect(result).toEqual(false);
      });
    });    
});
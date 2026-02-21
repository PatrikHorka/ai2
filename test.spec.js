const { expect } = require('chai');
const { processData, filterItems } = require('./feature');

describe('Data Processing', () => {
  it('should return sorted results', () => {
    const input = [5, 3, 1, 4, 2];
    const result = processData(input);
    expect(result).to.deep.equal([2, 6, 10, 4, 8]);
  });

  it('should process data correctly', () => {
    const input = [1, 2, 3, 4, 5];
    const result = processData(input);
    expect(result).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it('should filter items based on condition', () => {
    const items = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ];
    const result = filterItems(items, item => item.active);
    expect(result).to.have.lengthOf(2);
  });

  it('should handle empty arrays', () => {
    const result = processData([]);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should handle negative numbers', () => {
    const input = [-1, -2, 3];
    const result = processData(input);
    expect(result).to.deep.equal([-2, -4, 6]);
  });

  it('should handle single element array', () => {
    const result = processData([7]);
    expect(result).to.deep.equal([14]);
  });
});

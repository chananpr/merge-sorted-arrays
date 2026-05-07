import { merge } from './merge';

describe('merge', () => {
  it('merges the example case', () => {
    const c1 = [9, 6, 3];
    const c2 = [1, 4, 7];
    const c3 = [2, 5, 8];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('returns empty when all inputs are empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it('works when only collection_1 has values', () => {
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
  });

  it('works when only collection_2 has values', () => {
    expect(merge([], [1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('works when only collection_3 has values', () => {
    expect(merge([], [], [10, 20, 30])).toEqual([10, 20, 30]);
  });

  it('handles arrays of different lengths', () => {
    const c1 = [100, 50];
    const c2 = [1, 2, 3, 4];
    const c3 = [5];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 50, 100]);
  });

  it('handles duplicate values across arrays', () => {
    const c1 = [5, 3, 1];
    const c2 = [1, 3, 5];
    const c3 = [3, 3, 3];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 3, 3, 3, 3, 3, 5, 5]);
  });

  it('handles negative numbers', () => {
    const c1 = [0, -5, -10];
    const c2 = [-8, -3, 2];
    const c3 = [-7, -1, 4];
    expect(merge(c1, c2, c3)).toEqual([-10, -8, -7, -5, -3, -1, 0, 2, 4]);
  });

  it('handles single-element arrays', () => {
    expect(merge([2], [1], [3])).toEqual([1, 2, 3]);
  });

  it('does not mutate the input arrays', () => {
    const c1 = [9, 6, 3];
    const c2 = [1, 4, 7];
    const c3 = [2, 5, 8];
    const c1Copy = [...c1];
    const c2Copy = [...c2];
    const c3Copy = [...c3];
    merge(c1, c2, c3);
    expect(c1).toEqual(c1Copy);
    expect(c2).toEqual(c2Copy);
    expect(c3).toEqual(c3Copy);
  });

  it('produces ascending output for a larger random-ish case', () => {
    const c1 = [99, 80, 42, 17, 5];
    const c2 = [0, 6, 10, 50, 51, 60];
    const c3 = [3, 7, 18, 22, 30, 70, 90];
    const result = merge(c1, c2, c3);
    expect(result.length).toBe(c1.length + c2.length + c3.length);
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
});

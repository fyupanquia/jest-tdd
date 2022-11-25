import {describe, it ,expect} from '@jest/globals';
import clamp from '../src/clamp'

describe('clamp', () => {
  it('clamps all values between a lower and upper bound', () => {
    expect(clamp(-20, 60)([21, 18, 19, 1000, 21, -99, 0 ,17]))
    .toEqual([21, 18, 19, 60, 21, -20, 0 ,17])
  })
  it('returns an empty array when ipassed an empty array', () => {
    expect(clamp(-20, 60)([]))
    .toEqual([])
  })
})

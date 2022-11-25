import {describe, it ,expect} from '@jest/globals';
import plunck from '../src/plunck'

describe('plunck', () => {
  it('plucks all values in the object under given property', () => {
    const result = plunck([
        {
            city: "Berlin",
            country: "Germany"
        },
        {
            city: "Paris",
            country: "France"
        },
        {
            city: "Rome",
            country: "Italy"
        }
    ],["city"])
    expect(result).toEqual(['Berlin', 'Paris', 'Rome'])
  })
  it('plucks anumbers from the object', () => {
    const result = plunck([
        {
            age: 25,
            name: "my name"
        },
        {
            age: 28,
            name: "my name"
        },
        {
            age: 27,
            name: "my name"
        }
    ],["age"])
    expect(result).toEqual([25,28,27])
  })
})

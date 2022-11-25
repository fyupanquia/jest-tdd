import {describe, it ,expect} from '@jest/globals';
import pick from '../src/pick'

describe('pick', () => {
  it('only returns the requested properties', () => {
    const result = pick({
      email: 'aa@hotmail.com',
      password: '123456',
      username: 'aa'
    }, ['email', 'username'])

    expect(result).toMatchObject({
      email: 'aa@hotmail.com',
      username: 'aa'
    })
  })
  it('must not have the property random', () => {
    const result = pick({
      email: 'aa@hotmail.com',
      password: '123456',
      username: 'aa'
    }, ["username"])

    expect(result).not.toHaveProperty("random")
  })
  it('only returns an empty object', () => {
    const result = pick({
      email: 'aa@hotmail.com',
      password: '123456',
      username: 'aa'
    }, [])

    expect(result).toMatchObject({})
  })
})

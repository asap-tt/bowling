import { expect, test } from 'vitest'
import { Bowling } from './Bowling'

test('dummy test', () => {
  expect(new Bowling()).toBeInstanceOf(Bowling)
})
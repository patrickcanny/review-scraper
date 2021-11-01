import { jest } from '@jest/globals'
import cheerio from 'cheerio'
import { process, extractRating } from '../src/processor.js'

jest.doMock('cheerio', () => {
  load: jest.fn()
})

describe('process', () => {
  let result, reviews
  beforeAll(() => {
    reviews = [
      {},
      {},
      {}
    ]
    result = process()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should load as many reviews as there are in the input', () => {
    expect(global.cheerio.load).toHaveBeenCalledTimes(reviews.length)
  })

  it('should extractRating for each review', () => {
    expect(extractRating).toHaveBeenCalledTimes(reviews.length)
  })

  it('should return the same number of processed reviews as input reviews', () => {
    expect(result.length).toBe(reviews.length)
  })
})
describe('extractRating', () => {
  let result
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should extract the rating from an element', () => {
    let element
    result = extractRating(element)
    expect(result).toBe(5)
  })

  it('should return 0 if the rating is not in the rating map', () => {
    let element
    result = extractRating(element)
    expect(result).toBe(0)
  })
})
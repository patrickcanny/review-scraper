import { jest } from '@jest/globals'
import { scrape } from '../src/scraper.js'
import { process, extractRating } from '../src/processor.js'
import cheerio from 'cheerio'

describe('processor', () => {
  let result, reviews

  beforeAll(async () => {
    reviews = await scrape()
    result = process(reviews)
  })

  describe('process', () => {
    afterAll(() => {
      jest.clearAllMocks()
    })

    it('should return the same number of processed reviews as input reviews', () => {
      expect(result.length).toBe(reviews.length)
    })
  })

  describe('extractRating', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it('should extract the rating from an element', () => {
      let $ = cheerio.load(reviews[0])
      let rating = $('.rating-static')
      result = extractRating(rating)
      expect(result).toBe(5)
    })

    it('should return 0 if the rating is not in the rating map', () => {
      let $ = cheerio.load(reviews[0])
      let rating = $('.bogus-classname')
      result = extractRating(rating)
      expect(result).toBe(0)
    })
  })
})
import { jest } from '@jest/globals'
import { analyze, numberOfReviewsToShow } from '../src/analyzer.js'

describe('analyze', () => {
  const mockReview1 = {
    text: 'Coronet has the best lines of all day cruisers.',
    overallRating: 5
  }

  const mockReview2 = {
    text: 'Pastel-colored 1980s day cruisers from Florida are ugly',
    overallRating: 4.5
  }

  const mockReview3 = {
    text: 'Pastel-colored 1980s day cruisers from Florida are ugly',
    overallRating: 2
  }

  const mockReview4 = {
    text: 'day cruisers from Florida are ugly',
    overallRating: 2
  }

  const mockReviews = [
    mockReview1,
    mockReview2,
    mockReview3,
    mockReview4
  ]

  let result

  beforeAll(() => {
    global.console.log = jest.fn()
    result = analyze(mockReviews)
  })

  it('should add sentiment data to each review', () => {
    result.map(element => expect(element.sentiment).toBeTruthy())
  })

  it('should only return 3 reviews', () => {
    expect(result.length).toBe(numberOfReviewsToShow)
  })
})
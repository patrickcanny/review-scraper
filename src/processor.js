/**
 * processor.js - parses input DOM nodes into simpler data structures
 */
import cheerio from 'cheerio'

/**
 * @const ratingMap - a mapping of rating classnames to actual
 * rating integers.
 */
const ratingMap = {
  'rating-00': 0,
  'rating-05': 0.5,
  'rating-10': 1,
  'rating-15': 1.5,
  'rating-20': 2,
  'rating-25': 2.5,
  'rating-30': 3,
  'rating-35': 3.5,
  'rating-40': 4,
  'rating-45': 4.5,
  'rating-50': 5
}

/**
 * Creates a data structure for processed reviews that includes
 * the review text as well as the overall rating for the dealer
 * @param {Node[]} reviews the list of DOM nodes that classify as
 * valid reviews of the dealership in question
 * @returns {Object[]} list of objects that represent reviews with
 * the following shape:
 * {
 *   text: String - the review text
 *   overallRating: Number - the overall rating given to the dealer by the review 
 * } 
 */
export const process = (reviews) => {
  let processedReviews = []
  reviews.map((review) => {
    const $ = cheerio.load(review)
    const processedReview = {}

    // extract the actual review text
    processedReview.text = $('.review-content').text()

    // extract the overall rating from the review
    const rating = $('.rating-static')
    processedReview.overallRating = extractRating(rating)

    // finally, add the processed review to the list
    processedReviews.push(processedReview)
  })
  return processedReviews
}

/**
 * Extracts the actual review rating from an element
 * @param {Node} element the DOM element representing a review
 * @returns {Number} the actual review rating
 */
export const extractRating = (element) => {
  try {
    const ratingString = element
      .attr('class')
      .split(' ')
      .find(className => /^rating-[0-9]/.test(className))
    return ratingMap[ratingString] || 0
  } catch (e) {
    console.log('There was an error processing this element', element, e)
  }
}
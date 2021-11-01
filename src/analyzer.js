import Sentiment from 'sentiment'

/**
 * @const numberOfReviewsToShow - the number of reviews to return. These are the n
 * best reviews as scored by the analyzer.
 */
const numberOfReviewsToShow = 3

/**
 * Analyze a list of review objects and determine which are the top 3 most positive reviews
 * This will use some light sentiment analysis as well as look at the actual dealer rating.
 * @param {Object[]} reviews the list of input review objects
 * @returns {Object[]} the top 3 reviews scored for overwhelming positivity
 */
export const analyze = (reviews) => {
  console.log('Analyzing Reviews for Positivity...')
  const sentiment = new Sentiment()
  reviews
    .map(review => review.sentiment = sentiment.analyze(review.text) || { score: 0 })

  return reviews
    .sort((a, b) => b.sentiment.score - a.sentiment.score)
    .slice(0, numberOfReviewsToShow)
}
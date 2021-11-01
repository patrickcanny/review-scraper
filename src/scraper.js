/**
 * scraper.js - the code used to scrape a set of reviews from dealerrater.com in this project
 */
import axios from 'axios'
import cheerio from 'cheerio'

/**
 * @const baseURL - the base URL for dealerrater.com's reviews of McKaig Chevrolet Buick
 */
const baseURL = 'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685'

/**
 * @const queryParams - the params that get appended to the base URL for the review page
 */
const queryParams = '?filter=#link'

/**
 * @const numberOfPages - the number of pages to scrape reviews for (initially 5)
 */
const numberOfPages = 5

/**
 * @const reviewSelector - the document query selector used to designate what a review is.
 * 
 * For this project, the page designates divs with class 'review-entry' as a review
 */
const reviewSelector = '.review-entry'

/**
 * scrape - aggregates reviews from the first numberOfPages pages of reviews for the baseURL specified
 * above and returns the result as an array 
 * @returns { Node[] } a list of DOM nodes that match the reviewSelector defined above (aka review divs)
 */
export const scrape = async () => {
  console.log(`Scraping ${numberOfPages} pages of reviews for McKaig Chevrolet Buick...`)
  let reviews = []
  try {
    for (let pageNo = 1; pageNo <= numberOfPages; pageNo++) {
      const url = `${baseURL}/page${pageNo}/${queryParams}`

      const response = await axios.get(url)

      // log response status as a sanity check
      console.log(response.status)

      // load the response data into a parsable tree where we can extract content
      const $ = cheerio.load(response.data)
      $(reviewSelector).each((i, review) => reviews.push(review))
    }
  } catch (e) {
    console.log('THERE WAS AN ERROR!!!!', e)
  }
  return reviews
}
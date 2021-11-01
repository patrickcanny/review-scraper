/**
 * main.js - The interface for all utilities this project provides. This provides
 * a high-level order of operations for what should happen in the project, and how data
 * should be passed around
 * 
 * The project will first scrape reviews from the web. Then, it will process the reviews into
 * a more simple and concise format. Finally, the processed reviews will be analyzed, and the 
 * results for the three most overly positive reviews will be printed.
 */
import { scrape } from './src/scraper.js'
import { process } from './src/processor.js'
import { analyze } from './src/analyzer.js'

const reviews = await scrape()
const processedReviews = await process(reviews)
const results = await analyze(processedReviews)

results
  ? results.map((result) => console.log({
    text: result.text,
    dealerStarRating: result.overallRating,
    positivityScore: result.sentiment.score
  }))
  : console.log('There were no results!')
# Review Scraper
Scrape car dealer reviews for overly positive endorsements, outputting the top 3 most positive reviews.

# Description
This is a NodeJS application that scrapes DealerRater.com and identifies "overly positive" reviews for a particular dealer, McKaig Chevrolet Buick.

# Prerequisites
This project runs on NodeJS (LTS version, v16.9.0) and manages packages with npm. Both of these tools can be found for download [here](https://nodejs.org/en/download/).

This tool also makes use of the following libraries:
- [axios](https://axios-http.com/): a simple, promise-based http client for node.js
- [cheerio](https://cheerio.js.org/): a subset of jQuery implemented for server-based applications and commonly used in web scraping
- [sentiment](https://www.npmjs.com/package/sentiment): NodeJS Sentiment Analysis tool for analyzing reviews for positivity
- [jest](https://jestjs.io/): JavaScript unit testing framework

## Installation
After cloning the repository locally and ensuring that you have downloaded the LTS version of node.js (I recommend running `which node` to ensure that the version is correct at v16.9.0), you can install the dependencies with the command `npm ci`.

If you encounter issues running the application with the commands below, the first thing to do would be to double-check your node version and ensure that it is v16.9.0. I use the tool [nvm](https://github.com/nvm-sh/nvm) to manage the node version on my machine, but it is not required as long as your node version is correct.

# Running the project
To run the scraper and view the results, use command

```npm run main```

To run unit tests, use command

```npm run test```

# Review Scoring Criteria
For this project, I decided to use a sentiment analysis library to analyze the positivity of the review text, and used the resulting score to rank the reviews in order of their overall positivity.

For reference, the library I decided to use is called [sentiment](https://www.npmjs.com/package/sentiment). It uses a fairly simple algorithm to determine the overall positivity or negativity of a given input string. The details can be seen [here](https://www.npmjs.com/package/sentiment#how-it-works). This approach seems to do a pretty good job at identifying reviews with a large number of positive words, and is a fairly simple implementation.

This approach does have some drawbacks:
- A "highly positive" review seems to be biased towards the number of AFINN words that are in the sentence. It is possible that some positive reviews would have few AFINN words.
- It currently does not take into account the actual review ratings that the reviewer gave the dealer (i.e. "5 stars"). I have included this data in the logs for reference, and it potentially could be used to further refine the results.

## Areas for improvement/future work
There are a few places where this code could be improved:
- Adding some kind of linting/formatting tool (i.e. ESLint) for ensuring consistent coding standards.
- I could not find a good way to mock cheerio in my unit tests, so in order to test the processor I had to actually run the scraper code in the unit test, which makes that particular test less like a unit test and more like an integration test.
- There are additional elements on the page that could be scraped to gather more data. There are reviews for individual aspects of the dealerships, and those review scores could be used to find which reviews are most positive. Additionally, it may be possible to affiliate specific employees with positive reviews to further refine the positivity score.
- This project relies on an experimental feature that allows ES module imports in jest. If I were to start over, I may take a more minimalistic approach and lean more heavily on CommonJS syntax rather than ES syntax in order to avoid using experimental features.
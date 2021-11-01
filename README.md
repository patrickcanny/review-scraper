# review-scraper
Scrape car dealer reviews for overly positive endorsements

# Description
This is a NodeJS application that scrapes DealerRater.com and identifies "overly positive" reviews for a particular dealer, McKaig Chevrolet Buick.

# Prerequisites
This project runs on NodeJS (LTS version) and manages packages with npm. Both of these tools can be found for download [here](https://nodejs.org/en/download/).

This tool also makes use of the following libraries:
- [axios](https://axios-http.com/): a simple, promise-based http client for node.js
- [cheerio](https://cheerio.js.org/): a subset of jQuery implemented for server-based applications and commonly used in web scraping
- [jest](https://jestjs.io/): JavaScript unit testing framework

# Running the project
In order to run the project, you must first install the prerequiste dependencies. Fortunately, this can be done using
``` npm ci ```

To run the scraper and view the results, use command

```npm run main```

To run unit tests, use command

```npm run test```
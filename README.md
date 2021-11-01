# review-scraper
Scrape car dealer reviews for overly positive endorsements

# Description
This is a NodeJS application that scrapes DealerRater.com and identifies "overly positive" reviews for a particular dealer, McKaig Chevrolet Buick.

# Prerequisites
This project uses NodeJS (version 12.19.0 to be precise) and manages packages with npm (same version as node). Both of these tools can be found here

This tool also makes use of the following libraries:
- [axios](https://axios-http.com/): a simple, promise-based http client for node.js
- [cheerio](https://cheerio.js.org/): a subset of jQuery implemented for server-based applications and commonly used in web scraping
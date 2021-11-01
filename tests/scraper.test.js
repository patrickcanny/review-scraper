import { jest } from '@jest/globals'
import axios from 'axios'
import { scrape } from '../src/scraper.js'

describe('scrape', () => {
  let result
  beforeAll(async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data: {}
    })
    global.console.log = jest.fn()
    result = await scrape()
  })

  it('should log 1 startup log and 5 statuses', () => {
    expect(global.console.log).toHaveBeenCalledTimes(6)
  })

  it('should call console.log with correct status', () => {
    expect(global.console.log).toHaveBeenCalledWith(200)
  })
})
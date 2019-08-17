const utilityFunctions = require('../app/utils/utilityFunctions');
var chai = require('chai');
var assert = chai.assert;


describe('testing the web scraper function', () => {
    it('should return og parameters when present along with title description and images', () => {
      let htmlInput = `<!DOCTYPE html>
      <html lang="mul" class="no-js">
      <head>
      <meta charset="utf-8">
      <title>Wikipedia</title>
      <meta name="description" content="Wikipedia is a free online encyclopedia."></head>
      <img src="/image1"/>
      <img src="/image2"/>
      <img src="/image3"/>
      </html>`;

      let output = JSON.stringify({"title":"Wikipedia","description":"Wikipedia is a free online encyclopedia.",
    "images": ["/image1","/image2","/image3"]
    })

      assert.equal(JSON.stringify(utilityFunctions.scrapeMetaData(htmlInput)), output)
    })
})
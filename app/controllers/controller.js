const request = require('request-promise');
const utilityFunctions = require('../utils/utilityFunctions');

exports.scrapeURL = (req, res, next) => {
const url = req.body.url;

request(url)
.then((response) => {
let resObj = utilityFunctions.scrapeMetaData(response)
res.end(JSON.stringify(resObj));
})
.catch((err) => {
   next(err);
})
}
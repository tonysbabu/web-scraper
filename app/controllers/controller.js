const request = require('request-promise');
const utilityFunctions = require('../utils/utilityFunctions');

exports.scrapeURL = (req, res, next) => {
const url = req.body.url;

request(url)
.then((response) => {
let resObj = utilityFunctions.scrapeMetaData(response)
res.status(200).send({status: 'SUCCESS', data:resObj});
})
.catch((err) => {
    console.log("ERror", JSON.stringify(err));
    res.status(400).send({status: 'FAILURE', message: err.message})
   //next(err);
})
}
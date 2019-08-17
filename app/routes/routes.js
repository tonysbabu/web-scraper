module.exports = (app) => {
const controller = require('../controllers/controller.js');
app.post('/scrape-url', controller.scrapeURL);

}
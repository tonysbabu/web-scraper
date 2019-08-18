module.exports = (app) => {
const controller = require('../controllers/controller.js');
app.get('/', (req, res) => res.send(`Welcome to web scraper app`));
app.post('/scrape-url', controller.scrapeURL);

}
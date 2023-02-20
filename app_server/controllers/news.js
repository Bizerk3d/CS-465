/* GET room view */
const newsList = (req, res) => {
    res.render('news', { title: 'Travlr Getaways' });
};

module.exports = {
    newsList
};
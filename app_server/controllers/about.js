/* GET room view */
const aboutList = (req, res) => {
    res.render('about', { title: 'Travlr Getaways' });
};

module.exports = {
    aboutList
};
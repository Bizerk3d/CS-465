/* GET travel view */
const travel = (req, res) => {
    let pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
};
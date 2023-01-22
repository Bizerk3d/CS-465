/* GET room view */
const contactList = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways' });
};

module.exports = {
    contactList
};
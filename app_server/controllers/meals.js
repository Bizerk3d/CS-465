const fs = require('fs');

let meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/* GET room view */
const mealsList = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', meals });
};

module.exports = {
    mealsList
};
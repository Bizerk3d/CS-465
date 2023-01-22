const fs = require('fs');

let rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

/* GET room view */
const roomsList = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', rooms });
};

module.exports = {
    roomsList
};
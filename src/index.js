var names = ["test", "pedro", "jhon"];
var randomNames = require('unique-random-array');

module.exports = {
    all: names,
    random: randomNames(names)
};
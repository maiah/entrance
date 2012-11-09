var entities = require('./entities');

var maiah = new entities.Employee();
//maiah.firstName = 'Maiah';
maiah.lastName = 'Macariola';
maiah.address = 'Manila';

console.dir(maiah);

var resourceful = require('resourceful');

var Creature = resourceful.define('creature');

Creature.property('diet'); // Defaults to String
Creature.property('vertebrate', Boolean);
Creature.property('belly', Array);

Creature.prototype.feed = function (food) {
  this.belly.push(food);
};

var wolf = new Creature({
  vertebrate: true
});

//wolf.feed('squirrel');
//console.log(wolf);

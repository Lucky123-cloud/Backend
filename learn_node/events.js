const EventEmitter = require('events');
const celebrity = new EventEmitter();


//subscribe to celebrity for observer 1
celebrity.on('race win', function() {
    console.log('Congratulations! You are the best');
});

//subscribe to celebrity for observer 1
celebrity.on('race win', function() {
    console.log('Boo I could have done better than that');
});

celebrity.emit('race win');
const axios = require('axios');


axios.get('https://www.wikipedia.org')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('We ran everything');
    })
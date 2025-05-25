const { request, get } = require('https');


// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunck) => {
//         console.log(`Data chunck: ${chunck}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     })
// })

// req.end();


get('https://www.google.com', (res) => {
    res.on('data', (chunck) => {
        console.log(`We got the data chunk which is: ${chunck}`)
    })
    res.on('end', ()=>{
        console.log("No more data loading...")
    })
})
 
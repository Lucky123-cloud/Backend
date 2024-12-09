// const bigNumber = require('./modules_in_node')

import { largeNumber } from "./modules_in_node.js";

const a = largeNumber;
const b = 7;

setTimeout(() => {
    console.log(a + b)
}, 3000)
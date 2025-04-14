const fs = require('fs'); 
const assert = require('assert'); 

eval(fs.readFileSync('code.js') + '');

let graph1 = [[1, 2, 3, 4], [0, 6], [0, 7], [0, 8], [0, 5], [4], [1], [2], [3]]; 
let graph2 = [[3, 8], [6], [5, 8], [0], [7, 8], [2], [1, 8], [4], [0, 2, 4, 6]]; 

let graph3 = [[1, 5], [0, 2], [1, 3], [2, 4], [3, 5], [4, 0]]; 
let graph4 = [[2, 5], [3, 5], [0, 4], [1, 4], [2, 3], [0, 1]]; 

let graph5 = [[1], [0, 2, 3], [1, 3], [1, 2, 4], [3]]; 
let graph6 = [[2, 3, 4], [3], [0], [0, 1, 4], [0, 3]]; 

assert(are_isomorphic(graph1, graph2) == true); 
assert(are_isomorphic(graph3, graph4) == true); 
assert(are_isomorphic(graph5, graph6) == true); 
assert(are_isomorphic(graph1, graph3) == false); 
assert(are_isomorphic(graph4, graph5) == false); 
assert(are_isomorphic(graph6, graph2) == false); 
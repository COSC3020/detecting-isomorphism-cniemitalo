function are_isomorphic(graph1, graph2) {
    //check if number of vertices is the same 
    if (graph1.length !== graph2.length) {
        return false; 
    } 

    //check if number of edges is the same 
    if (numberEdges(graph1) !== numberEdges(graph2)) {
        return false; 
    }

    //check if degree sequences are the same 
    let graph1DS = getDegreeSequences(graph1);
    let graph2DS = getDegreeSequences(graph2); 
    if (!arraysEqual(graph1DS, graph2DS)) {
        return false; 
    }

    //find all permutations and test if one is a valid match
    //ChatGPT helped me with generating the permutations 
    let permutations = getPermutations([...Array(graph1.length).keys()]); 
    for (let permutation of permutations) {
        if (isValid(graph1, graph2, permutation)) {
            return true; 
        }
    }

    //if a permutation isn't a match, it's not isomorphic 
    return false;
}

function numberEdges(graph) {
    let num = 0; 
    let visited = []; 

    //iterate through the adjacency list, checking if the edge
    //has already been counted before adding it to visited and increasing num
    for (let i = 0; i < graph.length; i++) {
        for(let neighbor of graph[i]) {
            //avoid counting double edges 
            let edge = [Math.min(i, neighbor), Math.max(i, neighbor)]; 
            
            if (!visited.includes(edge)) {
                num++; 
                visited.push(edge); 
            }
        }
    }
    //return count of edges 
    return num; 
}

//finds the number of vertices each vertex is connected to (degree sequences)
function getDegreeSequences(graph) {
    let degrees = [];

    for (let vertex in graph) {
        degrees.push(graph[vertex].length); 
    }
    
    //sort in ascending order for comparision
    return degrees.sort((a, b) => a - b); 
}

//recursively get every permutation of the graph 
//ChatGPT helped me with this function 
function getPermutations(array) {
    if (array.length == 0) {
        return [[]]; 
    }

    let result = []; 
    //for every vertex in the graph, it pulls one out
    //and recursively generates every other variation of the 
    //remaining vertices, and appends them all to result 
    for (let i = 0; i < array.length; i++) {
        let rest = array.slice(0,i).concat(array.slice(i+1)); 
        let permutations = getPermutations(rest); 
        permutations.forEach(p => result.push([array[i], ...p])); 
    }
    return result; 
}

//checks if the permutation is a valid match, meaning they're isomoprhic 
//ChatGPT helped me with this function
function isValid(graph1, graph2, permutation) {
    let permutedGraph = graph1.map(() => []); 

    //remaps graph1 according to each permutation
    for (let i = 0; i < graph1.length; i++) {
        for (let neighbor of graph1[i]) {
            if (!permutedGraph[permutation[i]]) {
                permutedGraph[permutation[i]] = []; 
            }
            permutedGraph[permutation[i]].push(permutation[neighbor]); 
        }
    }

    //sort graphs before comparing them 
    for (let i = 0; i < permutedGraph.length; i++) {
        permutedGraph[i].sort((a, b) => a - b);
    }

    //compare if newly mapped graph1 is the same as graph2 (they're isomorphic)
    for (let i = 0; i < graph2.length; i++) {
        graph2[i].sort((a, b) => a - b); 
        if (!arraysEqual(permutedGraph[i], graph2[i])) {
            return false; 
        }
    }
    
    return true; 
}

//checks if two arrays are equal 
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    let sorted1 = array1.sort((a,b) => a - b); 
    let sorted2 = array2.sort((a,b) => a - b);
    
    for (let i = 0; i < array1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false; 
        }
    }
    return true; 
}

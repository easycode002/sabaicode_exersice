const points = [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}];

const [firstPoint, ...otherPoints] = points;

console.log(firstPoint); // Output: {x: 1, y: 2}
console.log(otherPoints); // Output: [{x: 2, y: 3}, {x: 3, y: 4}]

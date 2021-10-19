/*Week 2*/



/*Q1 */
let angle = 43.851;
let al = 24.75;

function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180);
}

let b=al*getTanFromDegrees(angle);
console.log(b.toFixed(2))



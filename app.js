
fibonacci = () => {
var fibon = [0, 1];
for(var i=fibon.length; i<50; i++) {
  fibon[i] = fibon[i-2] + fibon[i-1];
}
console.log(fibon);
}

fibonacci();
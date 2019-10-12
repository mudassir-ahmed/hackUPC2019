console.log("done");

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var midpoint = Math.floor(array.length / 2);
console.log(midpoint);
binarySearch(array, 10, 0, 19);

//binarySearch
function binarySearch(arr, required, lowerBound, upperBound){
  var midpoint = Math.floor(upperBound / 2);
  if (midpoint == required){
    console.log("found");
  }
  if (midpoint < required){
    binarySearch
  }

  else {

  }
}

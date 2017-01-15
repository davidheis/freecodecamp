
// Write a function that splits an array (first argument) into groups the length of size 
// (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  
  var newArr = [];
  var size2 = size;
  
  for(var i = 0; i < arr.length; i+= size){
    var subArr = arr.slice(i, size2);
    newArr.push(subArr);
    size2+=size;
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  var split2ndIndex = arr[1].toLowerCase().split('');
  var result = false;
  var firstArrIndex = arr[0].toLowerCase();

  for(var i = 0; i < split2ndIndex.length; i++){
    if(firstArrIndex.indexOf(split2ndIndex[i]) !== -1){
      result = true;
    }else {
      result = false;
     break;
    }
  }
  return result;
}

mutation(["hello", "neo"]);

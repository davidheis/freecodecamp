// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) { 
 arr = arr.filter(function(x){
   if(x !== false){
     return x;
   }
 });
  return arr;
}

bouncer([7, "ate", "", false, 9]);

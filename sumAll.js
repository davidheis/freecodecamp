function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = [];
    for (var i=min; i <= max; i++){
        temp.push(i);
    }

    temp = temp.reduce(function(a,b){
    	console.log('a='+ a + 'b= ' + b)
    	return a+b
    })
  return(temp);
}

sumAll([1, 4]);
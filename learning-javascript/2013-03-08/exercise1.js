function exercizio (n) {
	var array=[];
	for (var i = 0; i <= n; i++) {
		array[i]=i;
	};
	console.log(array);
	var filterResult = array.filter(function(item){
 		return (item%2===0);
	});
	//return  filterResult
	var mapResult = filterResult.map(function(item){
   		return item * 2;
	});

	return mapResult;
}
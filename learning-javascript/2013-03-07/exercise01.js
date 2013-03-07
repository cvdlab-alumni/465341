function identity(n){
	var string="";
	for (var i = 1; i<= n; i++) {
		for (var j = 1; j <= n; j++) {
			if (i===j) {
				string=string+"1"+" ";
				}
			else {
				string=string+"0"+" ";
			}
		}
	console.log(string);
	string="";
	}
}
console.log("ciao");
var string="";
for (var j = 1; j<= 10; j++) {
	for (var i = 1; i <= 10; i++) {
		string=string+(i*j)+" ";
	}
	console.log(string);
	string="";
}
console.log("");
console.log("");
var string2="";
for (var jj = 1; jj<= 10; jj++) {
	for (var ii = 1; ii <= 10; ii++) {
		if (ii==jj) {
			string2=string2+"1"+" ";
			}
		else {
			string2=string2+"0"+" ";
		}
	}
	console.log(string2);
	string2="";
}
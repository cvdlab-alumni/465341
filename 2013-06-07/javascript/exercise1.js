var BROWN = [150/255, 75/255, 0/255];
var CYAN = [21/255, 189/255, 255/255];
var GREEN = [0/255, 192/255, 77/255];
var domain = INTERVALS(1)(50);
var controlpoints = new Array()
var curveMapping = new Array()
var curve = new Array()
z_random = new Array()
z_random2 = new Array()
z_random3 = new Array()
z_random4 = new Array()
z_random5 = new Array()
z_random6 = new Array()
for (var i = 0; i <= 19; i++) {
	z_random[i]= Math.random()*3
	z_random2[i]= Math.random()*3
	z_random3[i]= Math.random()*3
	z_random4[i]= Math.random()*70
	z_random5[i]=Math.random()*3
	z_random6[i]=Math.random()*3
	controlpoints[i] = [[-0,i*2.5,z_random[i]],[5,i*2.5,z_random2[i]],[10,i*2.5,z_random3[i]],[15,i*2.5,z_random4[i]],[20,i*2.5,z_random5[i]],[25,i*2.5,z_random6[i]],[30,i*2.5,Math.random()*3],[35,i*2.5,Math.random()*3],[40,i*2.5,Math.random()*50],[45,i*2.5,Math.random()*30],[50,i*2.5,Math.random()]];
	curveMapping[i] = BEZIER(S0)(controlpoints[i]);
	curve[i] = MAP(curveMapping[i])(domain);
	//DRAW(curve[i]);
}
 
var domain2 = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)]);
var out = COLOR(BROWN)(MAP(BEZIER(S1)(
	[curveMapping[0],
	curveMapping[1],
	curveMapping[2],
	curveMapping[3],
	curveMapping[4],
	curveMapping[5],
	curveMapping[6],
	curveMapping[7],
	curveMapping[8],
	curveMapping[9],
	curveMapping[10],
	curveMapping[11],
	curveMapping[12],
	curveMapping[13],
	curveMapping[14],
	curveMapping[15],
	curveMapping[16],
	curveMapping[17],
	curveMapping[18],
	curveMapping[19],
	]))(domain2));
DRAW(out)
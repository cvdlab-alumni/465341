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

var dx = 20;
var dy = 20;
var dz = 0.01;

var lake = CUBOID([dx,dy,dz]);
var TraslateLake= T([0,1,2])([20,0,((z_random5[0]+z_random5[1]+z_random5[2],z_random6[0]+z_random6[1]+z_random6[2])/6)+5.5])(COLOR(CYAN)(lake))
DRAW(TraslateLake)



var domain_tree = DOMAIN([[0,2*PI]])([36]);
var circle = function (r,h,dx,dy) {
  return function (v) {
    return [r*SIN(v[0])+dx, r*COS(v[0])+dy,h];
  };
};
var mapping = circle(1.3,1,0,0);
var mapping2 = circle(0.5,0,0,0);
var mapping3 = circle(0.5,2,0,0);
var domain_tree2 = PROD1x1([INTERVALS(2*PI)(50), INTERVALS(1)(50)])
var tronco = COLOR(BROWN)(MAP(BEZIER(S1)([mapping2, mapping3]))(domain_tree2))
var cono = COLOR(GREEN)(MAP(BEZIER(S1)([mapping, [0,0,3]]))(domain_tree2))
var alpha=0;
if (50<z_random4[0]<60){
	alpha=3
}
if (60<z_random4[0]<70){
	alpha=4
}
if (30<=z_random4[0]<=50){
	alpha=1.5
}

if (z_random4[0]<=10){
	alpha=0
}

tree=T([0, 1, 2])([5,0,((z_random[1]+z_random[0])/2)+alpha])(STRUCT([tronco,cono]))
tree2=T([0, 1, 2])([5,2,((z_random[1]+z_random[0])/2)+alpha])(STRUCT([tronco,cono]))
tree3=T([0, 1, 2])([2.5,0,((z_random[1]+z_random[0])/2)])(STRUCT([tronco,cono]))
tree4=T([0, 1, 2])([2.5,2.2,((z_random[1]+z_random[0])/2)])(STRUCT([tronco,cono]))
tree5=T([0, 1, 2])([2.5,4.5,((z_random[1]+z_random[0])/2)])(STRUCT([tronco,cono]))
tree6=T([0, 1, 2])([5,4.5,((z_random[1]+z_random[0])/2)+alpha])(STRUCT([tronco,cono]))
DRAW(STRUCT([tree,tree2,tree3,tree4,tree5,tree6]))

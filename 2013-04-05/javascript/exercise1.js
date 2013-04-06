//pilastri quadrati
var pillars01 = SIMPLEX_GRID([[-4,-14,4],[-4,-17,4,-14,4,-35,4,-35,4],[35]]);
//DRAW(pillars01);

//pilastri sferici
function f_circle(r){
var domain=DOMAIN([[0,PI],[0,2*PI]])([24,36]);
var mapping=function(v){
	var a = v[0];
	var b = v[1];

	var u = r*SIN(a)*COS(b);
	var v = r*SIN(a)*SIN(b);

	return [u,v];
}
var model_circle =MAP(mapping)(domain);
return model_circle;
}
var circle =  T([0,1])([4+14+2,2])(f_circle(2));
var column1 = EXTRUDE([35])(circle)
//DRAW(column1);

var circle2 = T([0,1])([4+14+4+70+2,2])(f_circle(2));
var column2 = EXTRUDE([35])(circle2)
//DRAW(column2);

var circle3 = T([0,1])([4+14+4+70+2,4+35+2])(f_circle(2));
var column3 = EXTRUDE([35])(circle3)
//DRAW(column3);

var circle4 = T([0,1])([4+14+4+70+2,4+35+4+35+2])(f_circle(2));
var column4 = EXTRUDE([35])(circle4)
//DRAW(column4);

var circle5 = T([0,1])([4+14+4+70+2,4+35+4+35+4+35+2])(f_circle(2));
var column5 = EXTRUDE([35])(circle5)
//DRAW(column5);

var circle6 = T([0,1])([4+14+4+70+2,4+35+4+35+4+35+4+35+2])(f_circle(2));
var column6 = EXTRUDE([35])(circle6)
//DRAW(column6);

pillars0 = STRUCT([column1,column2,column3,column4,column6,column5,pillars01])
//DRAW(pillars0);

//pilastri primo piano
//pilastri quadrati
var pillars02 = SIMPLEX_GRID([[-4,-14,4,-70,4],[4,-35,4,-35,4,-35,-4,-35,4],[-35,-4,31]]);
var pillars021 = SIMPLEX_GRID([[-4,-14,-4,-70,4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-35,-4,31]]);
//DRAW(pillars02);

//pilastri sferici
var circle12 = T([0,1,2])([4+14+2,4+35+4+35+4+35+2,35+4]) (f_circle(2));
var column1_2 = EXTRUDE([35])(circle12);
//DRAW(column1_2);

pillars1 = STRUCT([column1_2,pillars02,pillars021])
//DRAW(pillars1);

//pilastri secondo piano
//pilastri quadrati
var pillars031 = SIMPLEX_GRID([[-4,-14,4],[4,-35,4,-35,4,-35,4,-35,4],[-35,-4,-31,4,31]]);
var pillars032 = SIMPLEX_GRID([[-4,-14,-4,-70,4],[4,-35,4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,31]]);

pillars2 = STRUCT([pillars031,pillars032])
//DRAW(pillars2);

//pilastri quarto piano
var pillars041 = SIMPLEX_GRID([[-4,-14,4],[-4,-35,-4,-35,4,-35,4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars042 = SIMPLEX_GRID([[-4,-14,-4,-70,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars043 = SIMPLEX_GRID([[4],[-4,-35,-4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars044 = SIMPLEX_GRID([[-4,-15,2],[-1,2,-37,2],[-35,-4,-31,-4,-31,-4,31]]);

pillars3 = STRUCT([pillars041,pillars042,pillars043,pillars044])

building = STRUCT([pillars0,pillars1,pillars2,pillars3])
DRAW(building);

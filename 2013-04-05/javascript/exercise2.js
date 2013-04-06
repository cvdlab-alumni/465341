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
var circle12 = EXTRUDE([35])(f_circle(2));
var column1_2 =T([0,1,2])([4+14+2,4+35+4+35+4+35+2,35+4])  (circle12);
//DRAW(column1_2);

pillars1 = STRUCT([column1_2,pillars02,pillars021])
//DRAW(pillars1);

//pilastri secondo piano
//pilastri quadrati
var pillars031 = SIMPLEX_GRID([[-4,-14,4],[4,-35,4,-35,4,-35,4,-35,4],[-35,-4,-31,4,31]]);
var pillars032 = SIMPLEX_GRID([[-4,-14,-4,-70,4],[4,-35,4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,31]]);

pillars2 = STRUCT([pillars031,pillars032])
//DRAW(pillars2);

//pilastri terzo piano
var pillars041 = SIMPLEX_GRID([[-4,-14,4],[-4,-35,-4,-35,4,-35,4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars042 = SIMPLEX_GRID([[-4,-14,-4,-70,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars043 = SIMPLEX_GRID([[4],[-4,-35,-4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
var pillars044 = SIMPLEX_GRID([[-4,-15,2],[-1,2,-37,2],[-35,-4,-31,-4,-31,-4,31]]);

pillars3 = STRUCT([pillars041,pillars042,pillars043,pillars044])

pillars = STRUCT([pillars0,pillars1,pillars2,pillars3])



//pavimento piano terra
var floor011 = SIMPLEX_GRID([[-4,14,2],[4,17],[4]]);
var floor012 = SIMPLEX_GRID([[-4,-14,-2,2],[-2,2,17],[4]]);
DRAW(floor011);

var floor01 = SIMPLEX_GRID([[-4,14,2],[4,35,4,35,4,35,4],[4]]);
var floor011 = SIMPLEX_GRID([[-4,-14,-2,2],[-2,2,35,4,35,4,35,4],[4]]);
var floor012 = SIMPLEX_GRID([[-4,-14,-4,38],[-4,-17,-4,35,4,35,4,14],[4]]);
var floor013 = SIMPLEX_GRID([[-4,-14,-4,-38,7],[-4,-17,-4,10],[4]]);

function f_circle(r){
var domain=DOMAIN([[0,PI],[0,PI]])([24,36]);
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
var circle_floor1 =  T([0,1])([4+14+4+38+7,4+17+4+5])(R([0,1])(-PI/2)(f_circle(5)));
var circle_floor11 = EXTRUDE([4])(circle_floor1);

var floor014 = SIMPLEX_GRID([[-4,30],[-4,-35,-4,-35,-4,-35,-4,15],[4]]);
var circle_floor2 =  T([0,1])([4+14+1,4+35+4+35+4+35+4+15])(f_circle(15));
var circle_floor12 = EXTRUDE([4])(circle_floor2);

var floor015 = SIMPLEX_GRID([[-4,-14,-4,12],[-4,-35,-4,-35,-4,-35,4],[4]]);
var floor016 = SIMPLEX_GRID([[-4,-14,-4,-12,-4,12],[-4,-35,-4,-35,-4,-35,10],[4]]);

floor0 = STRUCT([floor01,floor011,floor012,floor013,circle_floor11,floor014,circle_floor12,floor015,floor016])
//DRAW(floor0);

//pavimento primo piano

var floor021 = SIMPLEX_GRID([[-4,14,4,70],[-1,4,17,4,14],[-35,4]]);
var floor022 = SIMPLEX_GRID([[-4,15],[-1,-4,-17,-4,-14,-50,27,4,35],[-35,4]]);
var floor023 = SIMPLEX_GRID([[-4,-15,3,70],[-1,-4,-17,-4,-14,50,27,4,35],[-35,4]]);
var floor024 = SIMPLEX_GRID([[-4,13],[10],[-35,4]]);
var floor024T = T([0,1])([4,-8])(floor024);
floor1 = STRUCT([floor021,floor022,floor023,floor024T]);
//DRAW(floor1);


//pavimento secondo piano
var floor031 = SIMPLEX_GRID([[-4,15],[-4,13,-50,4,35,4,35,11],[-35,-4,-31,4]]);
var floor032 = SIMPLEX_GRID([[-4,-15,4,70],[-4,-13,-50,-11,4,35,4,35],[-35,-4,-31,4]]);

var r_points = [ [0,0] , [0,15] , [74,15] ];
var r_cells = [[0,1,2]];
var triangle2D = SIMPLICIAL_COMPLEX(r_points)(r_cells);
var triangle3D = EXTRUDE([4])(triangle2D);
var triangle3DT= T([0,1,2])([4+14,13+50,31+4+31+4])(triangle3D);
floor2 = STRUCT([floor031,floor032,triangle3DT]);
//DRAW(floor2);

//pavimento terzo piano

var floor041 = SIMPLEX_GRID([[-2,2,14,4,70],[-4,35,4,35,4],[-35,-4,-31,-4,-31,4]]);
var floor042 = SIMPLEX_GRID([[-2,-2,-15,3,70],[-4,-35,-4,-35,-4,35,4,35],[-35,-4,-31,-4,-31,4]]);
var floor043 = SIMPLEX_GRID([[-2,-2,15],[-4,-35,-4,-35,4,-50,24],[-35,-4,-31,-4,-31,4]]);

floor3 = STRUCT([floor041,floor042,floor043]);
//DRAW(floor3);


//pavimento quarto piano

var floor051 = SIMPLEX_GRID([[4,14,4],[4,35,4,35,4,35,4,35],[-35,-4,-31,-4,-31,-4,-31,4]]);
var floor052 = SIMPLEX_GRID([[-4,-14,-4,70],[-4,-35,-4,-35,-4,35,4,35],[-35,-4,-31,-4,-31,-4,-31,4]]);


floor4 = STRUCT([floor051,floor052]);
//DRAW(floor4);



building = STRUCT([floor0,floor1,floor2,floor3,floor4,pillars])
DRAW(building);


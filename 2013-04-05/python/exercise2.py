GRID = COMP([INSR(PROD),AA(QUOTE)])


#pilastri quadrati
pillars01 = GRID([[-4,-14,4],[-4,-17,4,-14,4,-35,4,-35,4],[35]]);


#pilastri sferici

f_circle = CYLINDER([2,35])(20);


circle =  T([1,2])([4+14+2,2])(f_circle);


circle2 = T([1,2])([4+14+4+70+2,2])(f_circle);



circle3 = T([1,2])([4+14+4+70+2,4+35+2])(f_circle);



circle4 = T([1,2])([4+14+4+70+2,4+35+4+35+2])(f_circle);



circle5 = T([1,2])([4+14+4+70+2,4+35+4+35+4+35+2])(f_circle);



circle6 = T([1,2])([4+14+4+70+2,4+35+4+35+4+35+4+35+2])(f_circle);



pillars0 = STRUCT([circle,circle2,circle3,circle4,circle6,circle5,pillars01])


#pilastri primo piano
#pilastri quadrati
pillars02 = GRID([[-4,-14,4,-70,4],[4,-35,4,-35,4,-35,-4,-35,4],[-35,-4,31]]);
pillars021 = GRID([[-4,-14,-4,-70,4],[-4,-35,-4,-35,-4,-35,4,-35,-4],[-35,-4,31]]);


#pilastri sferici
circle12 = T([1,2,3])([4+14+2,4+35+4+35+4+35+2,35+4]) (f_circle);


pillars1 = STRUCT([circle12,pillars02,pillars021])


#pilastri secondo piano
#pilastri quadrati
pillars031 = GRID([[-4,-14,4],[4,-35,4,-35,4,-35,4,-35,4],[-35,-4,-31,4,31]]);
pillars032 = GRID([[-4,-14,-4,-70,4],[4,-35,4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,31]]);

pillars2 = STRUCT([pillars031,pillars032])


#pilastri quarto piano
pillars041 = GRID([[-4,-14,4],[-4,-35,-4,-35,4,-35,4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
pillars042 = GRID([[-4,-14,-4,-70,4],[-4,-35,-4,-35,4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
pillars043 = GRID([[4],[-4,-35,-4,-35,-4,-35,-4,-35,4],[-35,-4,-31,-4,-31,-4,31]]);
pillars044 = GRID([[-4,-15,2],[-1,2,-37,2],[-35,-4,-31,-4,-31,-4,31]]);

pillars3 = STRUCT([pillars041,pillars042,pillars043,pillars044])





#pavimento piano terra
floor011 = GRID([[-4,14,2],[4,17],[4]]);
floor012 = GRID([[-4,-14,-2,2],[-2,2,17],[4]]);


floor01 = GRID([[-4,14,2],[4,35,4,35,4,35,4],[4]]);
floor011 = GRID([[-4,-14,-2,2],[-2,2,35,4,35,4,35,4],[4]]);
floor012 = GRID([[-4,-14,-4,38],[-4,-17,-4,35,4,35,4,14],[4]]);
floor013 = GRID([[-4,-14,-4,-38,7],[-4,-17,-4,10],[4]]);

f_circle2 = CYLINDER([5,4])(20);
f_circle3 = CYLINDER([15,4])(20);
circle_floor1 =  T([1,2])([4+14+4+38+7,4+17+4+5])(R([1,2])(-PI/2)(f_circle2));

floor014 = GRID([[-4,30],[-4,-35,-4,-35,-4,-35,-4,15],[4]]);
circle_floor2 =  T([1,2])([4+14+1,4+35+4+35+4+35+4+15])(f_circle3);

floor015 = GRID([[-4,-14,-4,12],[-4,-35,-4,-35,-4,-35,4],[4]]);
floor016 = GRID([[-4,-14,-4,-12,-4,12],[-4,-35,-4,-35,-4,-35,10],[4]]);

floor0 = STRUCT([floor01,floor011,floor012,floor013,circle_floor2,floor014,circle_floor1,floor015,floor016])


#pavimento primo piano

floor021 = GRID([[-4,14,4,70],[-1,4,17,4,14],[-35,4]]);
floor022 = GRID([[-4,15],[-1,-4,-17,-4,-14,-50,27,4,35],[-35,4]]);
floor023 = GRID([[-4,-15,3,70],[-1,-4,-17,-4,-14,50,27,4,35],[-35,4]]);
floor024 = GRID([[-4,13],[10],[-35,4]]);
floor024T = T([1,2])([4,-8])(floor024);
floor1 = STRUCT([floor021,floor022,floor023,floor024T]);



#pavimento secondo piano
floor031 = GRID([[-4,15],[-4,13,-50,4,35,4,35,11],[-35,-4,-31,4]]);
floor032 = GRID([[-4,-15,4,70],[-4,-13,-50,-11,4,35,4,35],[-35,-4,-31,4]]);


triangle2D = MKPOL([[[0,0],[0,15],[74,15]],[[1,2,3]],None]);
triangle3D = PROD([triangle2D,Q(4)]);
triangle3DT= T([1,2,3])([4+14,13+50,31+4+31+4])(triangle3D);
floor2 = STRUCT([floor031,floor032,triangle3DT]);


#pavimento terzo piano

floor041 = GRID([[-2,2,14,4,70],[-4,35,4,35,4],[-35,-4,-31,-4,-31,4]]);
floor042 = GRID([[-2,-2,-15,3,70],[-4,-35,-4,-35,-4,35,4,35],[-35,-4,-31,-4,-31,4]]);
floor043 = GRID([[-2,-2,15],[-4,-35,-4,-35,4,-50,24],[-35,-4,-31,-4,-31,4]]);

floor3 = STRUCT([floor041,floor042,floor043]);



#pavimento quarto piano

floor051 = GRID([[4,14,4],[4,35,4,35,4,35,4,35],[-35,-4,-31,-4,-31,-4,-31,4]]);
floor052 = GRID([[-4,-14,-4,70],[-4,-35,-4,-35,-4,35,4,35],[-35,-4,-31,-4,-31,-4,-31,4]]);


floor4 = STRUCT([floor051,floor052]);




building = STRUCT([floor0,floor1,floor2,floor3,floor4,pillars0,pillars1,pillars2,pillars3])
VIEW(building);

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

building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building);




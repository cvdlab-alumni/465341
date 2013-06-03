!(function (exports){

  var fs = require('fs');

  var plasm_lib = require('plasm.js');
  var obj = plasm_lib.plasm;
  var fun = plasm_lib.plasm_fun;
  var plasm = obj.plasm;
  var Plasm = obj.Plasm;

  var root = this;

  Object.keys(fun).forEach(function (k) { 
    root[k] = fun[k];
  });

  var p = new Plasm();
  fun.PLASM(p);


  var scmodel = (function () {
var domain = DOMAIN([[0,2*PI]])([36]);

//definisco una funzione circle che dato come parametro un raggio ritorna questa funzione di mappatura

var circle = function (r,h,dx,dy) {
  return function (v) {
    return [r*SIN(v[0])+dx, r*COS(v[0])+dy,h];
  };
};

var mapping = circle(0.2,0,0.2,0.2);
var mapping2 = circle(0.2,5.6,0.2,0.2);
var piedino1 = circle(0.1,-0.1,0.2,0.2);

var model = MAP(mapping)(domain);

//DRAW(model);

var domain2 = PROD1x1([INTERVALS(2*PI)(50), INTERVALS(1)(50)])

var gamba1 = T([1])([5.6])(MAP(BEZIER(S1)([piedino1,mapping, mapping2]))(domain2))

var gamba2 = T([0,1])([4.3,5.6])(MAP(BEZIER(S1)([piedino1,mapping, mapping2]))(domain2))

var mapping3 = circle(0.2,0,0.2,0.2);
var mapping4 = circle(0.2,4.8,0.2,0.2);

var gamba3 = MAP(BEZIER(S1)([piedino1,mapping3, mapping4]))(domain2)


var gamba4 = T([0])([4.3])(MAP(BEZIER(S1)([piedino1,mapping3, mapping4]))(domain2))


var mapping5 = circle(0.12,0.2,0.2,0.2);
var mapping6 = circle(0.12,4.5,0.2,0.2);

var gamba5 = T([1,2])([5.6,3.5])(ROTATE([0,2])([PI/2])(MAP(BEZIER(S1)([mapping5, mapping6]))(domain2)))
var gamba6 = T([2])([4.8])(ROTATE([0,2])([PI/2])(MAP(BEZIER(S1)([mapping5, mapping6]))(domain2)))

var mapping7 = circle(0.2,9.5,0.2,-0.4);
var spalliera1 = MAP(BEZIER(S1)([mapping4, mapping7]))(domain2)
var spalliera2 =  T([0])([4.3])(MAP(BEZIER(S1)([mapping4, mapping7]))(domain2))

gambe= STRUCT([gamba1,gamba2,gamba3,gamba4,gamba5,gamba6,spalliera1,spalliera2])
//DRAW(gambe)

var piedino2 = circle(0.18,-0.2,0.2,0.2)
var gommino1 = COLOR([0,0,0,1])(MAP(BEZIER(S1)([piedino1,piedino2]))(domain2))
var gommino11 = COLOR([0,0,0,1])(MAP(BEZIER(S1)([piedino2,[0.2,0.2,-0.20001]]))(domain2))

var gommino2 = COLOR([0,0,0,1])(T([0])([4.3])(MAP(BEZIER(S1)([piedino1,piedino2]))(domain2)))
var gommino22 = COLOR([0,0,0,1])(T([0])([4.3])(MAP(BEZIER(S1)([piedino2,[0.2,0.2,-0.20001]]))(domain2)))

var gommino3 = COLOR([0,0,0,1])(T([1])([5.6])(MAP(BEZIER(S1)([piedino1,piedino2]))(domain2)))
var gommino33 = COLOR([0,0,0,1])(T([1])([5.6])(MAP(BEZIER(S1)([piedino2,[0.2,0.2,-0.20001]]))(domain2)))

var gommino4 = COLOR([0,0,0,1])(T([0,1])([4.3,5.6])(MAP(BEZIER(S1)([piedino1,piedino2]))(domain2)))
var gommino44 = COLOR([0,0,0,1])(T([0,1])([4.3,5.6])(MAP(BEZIER(S1)([piedino2,[0.2,0.2,-0.20001]]))(domain2)))

var gommini = STRUCT([gommino1,gommino11,gommino2,gommino22,gommino3,gommino33,gommino4,gommino44])
//DRAW(gommini)

var dominio_hermite = INTERVALS(1)(20);
var controlpoints = [[0,5.8,4.6],[0,0.1,5.8],[0, -7, 0],[ 0,0,6]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(dominio_hermite);

var controlpoints2= [[0.4,5.8,4.6],[0.4,0.1,5.8],[0, -7, 0],[ 0,0,6]];
var curveMapping2 = CUBIC_HERMITE(S0)(controlpoints2);
var curve2 = MAP(curveMapping2)(dominio_hermite);

var controlpoints3 = [[4.3,5.8,4.6],[4.3,0.1,5.8],[0, -7, 0],[ 0,0,6]];
var curveMapping3 = CUBIC_HERMITE(S0)(controlpoints3);
var curve3 = MAP(curveMapping3)(dominio_hermite);

var controlpoints4= [[4.7,5.8,4.6],[4.7,0.1,5.8],[0, -7, 0],[ 0,0,6]];
var curveMapping4 = CUBIC_HERMITE(S0)(controlpoints4);
var curve4 = MAP(curveMapping4)(dominio_hermite);

//poggiamano
var controlpoints5= [[0,5.8,5.6],[-0.7,5.8,6.4],[0, 0, 1],[ -1,0,0]];
var curveMapping5 = CUBIC_HERMITE(S0)(controlpoints5);
var curve5 = MAP(curveMapping5)(dominio_hermite);

var controlpoints6= [[0.4,5.8,5.6],[-0.7,5.8,6.8],[0, 0, 1.5],[ -1.5,0,0]];
var curveMapping6 = CUBIC_HERMITE(S0)(controlpoints6);
var curve6 = MAP(curveMapping6)(dominio_hermite);

curve_hermite=STRUCT([curve,curve2,curve3,curve4,curve5,curve6])
//DRAW(curve_hermite)


var dominio_sup_hermite = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);
var sup_hermite1 = CUBIC_HERMITE(S1)([curveMapping,curveMapping2,[0,0,0.8],[0,0,-0.8]]);
var out1 = MAP(sup_hermite1)(dominio_sup_hermite);
var sup_hermite2 = CUBIC_HERMITE(S1)([curveMapping,curveMapping2,[0,0,-0.8],[0,0,0.8]]);
var out2 = MAP(sup_hermite2)(dominio_sup_hermite);

var sup_hermite3 = CUBIC_HERMITE(S1)([curveMapping3,curveMapping4,[0,0,0.8],[0,0,-0.8]]);
var out3 = MAP(sup_hermite3)(dominio_sup_hermite);
var sup_hermite4 = CUBIC_HERMITE(S1)([curveMapping3,curveMapping4,[0,0,-0.8],[0,0,0.8]]);
var out4 = MAP(sup_hermite4)(dominio_sup_hermite);

//poggiamano
var sup_hermite5 = CUBIC_HERMITE(S1)([curveMapping5,curveMapping6,[0,0.75,0],[0,-0.75,0]]);
var out5 = MAP(sup_hermite5)(dominio_sup_hermite);
var sup_hermite6 = CUBIC_HERMITE(S1)([curveMapping5,curveMapping6,[0,-0.75,0],[0,0.75,0]]);
var out6 = MAP(sup_hermite6)(dominio_sup_hermite);
var out7 = T([0,1])([0.4+4.3,5.8+5.8])(ROTATE([0,1])(PI)(out6))
var out8 = T([0,1])([0.4+4.3,5.8+5.8])(ROTATE([0,1])(PI)(out5))
var out = STRUCT([out1,out2,out3,out4,out5,out6,out7,out8])
//DRAW(out)

model=STRUCT([gambe,out,gommini])
DRAW(model)


var mapping_gancio = circle(0.05,0,0,0);
var mapping_gancio2 = circle(0.05,0.4,0,0);
var gancio = T([0,2])([0.4,0.1])(ROTATE([0,2])([PI/2])(MAP(BEZIER(S1)([mapping_gancio, mapping_gancio2]))(domain2)))

var torusSurface1 = T([0])([0.8])(ROTATE([0,2])([PI/2])(TORUS_SURFACE([0.08, 0.1])([8,8])))
var torusSurface2 = T([0])([0.15])(torusSurface1)
var torusSurface3 = T([0])([0.15])(torusSurface2)

var mapping_elastico = circle(0.05,0,0,0);
var mapping_elastico2 = circle(0.05,2.7,0,0);
var elastico = COLOR(1,1,1,1)(T([0])([1])(ROTATE([0,2])([PI/2])(MAP(BEZIER(S1)([mapping_elastico, mapping_elastico2]))(domain2))))

var molla = (STRUCT([torusSurface1,torusSurface2,torusSurface3,gancio]))
var molla2 = T([0])([4.7])(ROTATE([0,1])(-PI)(molla))


var corda_array = new Array (26);
corda_array[0]=T([1,2])([5.6,4.4])(STRUCT([molla,molla2,elastico]))
DRAW(corda_array[0])
for (var i = 1; i <= 10; i++) {
  corda_array[i]=T([1])([-0.4])(corda_array[i-1])
  DRAW(corda_array[i])
};

corda_array[11]=T([1,2])([0.2,5.1])(STRUCT([molla,molla2,elastico]))
DRAW(corda_array[10])
for (var i = 12; i <= 21; i++) {
  corda_array[i]=T([1,2])([-0.05,0.4])(corda_array[i-1])
  DRAW(corda_array[i])
};
corda_array[22]=corda_array[10]
for (var i = 23; i <= 25; i++) {
  corda_array[i]=T([1,2])([-0.4,0.15])(corda_array[i-1])
  DRAW(corda_array[i])
};
corda_array[26]=T([1,2])([-0.3,0.15])(corda_array[25])
DRAW(corda_array[26])
//corde=STRUCT([corda_array[0],corda_array[1],corda_array[2],corda_array[3],corda_array[4],corda_array[5],corda_array[6],corda_array[7],corda_array[8],corda_array[9],corda_array[10],corda_array[11],corda_array[12],corda_array[13],corda_array[14],corda_array[15],corda_array[16],corda_array[17],corda_array[18],corda_array[19],corda_array[20],corda_array[21],corda_array[22],corda_array[23],corda_array[24],corda_array[25],corda_array[26]])
//model=STRUCT([gambe,out,gommini,corde])

//non ho unito tutto gli oggetti corda_array per motivi di tempistica
model=STRUCT([gambe,out,gommini])
DRAW(model)
  return model
  })();

  exports.author = 'robtesta87';
  exports.category = 'others';
  exports.scmodel = scmodel;

  if (!module.parent) {
    fs.writeFile('./data.json', JSON.stringify(scmodel.toJSON()));
  }

}(this));
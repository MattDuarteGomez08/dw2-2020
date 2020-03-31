var Origen=[];
function generador() {
  var x =(Math.random(0,1))*100;
  return Math.floor(x);
}
for (var i = 0; i<10; i++){
  Origen[i]=generador();
}
console.log("Origen = "+Origen);
var Destino = [];
Destino = Origen;
function ordena(y,z){
  return y-z;
}
Destino.sort(ordena)
console.log("Destino = "+Destino);
function mileToKilometer(melis){
    var kilometer = melis *1.60934;
    return kilometer; 
}
var marathon =mileToKilometer(26.2);
console.log('Marathon in kilometer:', marathon);
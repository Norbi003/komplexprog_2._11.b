function check(){
    var a = Number(document.getElementById('halozati').value);
    var b = Number(document.getElementById('programozasi').value);
    var c = Number(document.getElementById('weblapi').value);
    var d = Number(document.getElementById('szobeli').value);
    console.log(a,b,c,d);
    var osszesen = document.getElementById('eredmeny').innerHTML = a+b+c+d;
    var pont = 0;


    if (osszesen>=120) {
        pont = 5;
    }
    else if (osszesen>=90) {
        pont = 4;
    }
    else if (osszesen>=60) {
        pont = 3;
    }
    else if (osszesen>=38) {
        pont = 2;
    }
    else {
       pont = 1;
   }

    var ja = Number(document.getElementById('mennyi').innerHTML = pont);
    return false;


}
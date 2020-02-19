module.exports = function reverse (n) {
// why not?
//written by inikonzs
var m=0;
n=n<0?-n:n; //Math.abs(n);
while (n>0){
    m=m*10+n%10;
    n=(n-(n%10))/10;  //Math.trunc(n/10);
}
return m;
//too easy
//return Number.parseInt((n+"").split("").reverse().join("")); 

}

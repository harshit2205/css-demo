 "use strict";
 var value1 = "";


 function clickActivated() {
     var k = document.getElementById("inputData").value;
     if (isNaN(k)) throw "bad input";
     else {
         printFabonacci(k);
         printconstant(k);
         document.getElementById("demo").innerHTML = value1;
     }
 }


 function printFabonacci(n) {
     var a = 0,
         b = 1,
         temp;
     for (let i = 0; i <= n; i++) {
         value1 = value1 + a + " " + b + "<br> ";
         temp = a + b;
         a = b;
         b = temp;
     }
     return value1;
 }


 function printconstant(n) {
     for (let i = 0; i <= n; i++) {
         value1 = value1 + 100 + "<br> ";
     }
     return value1;
 }
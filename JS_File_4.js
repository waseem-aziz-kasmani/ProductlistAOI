function login_1(){
let y = document.getElementById("PW1").value;
let x = document.getElementById("PW2");
const z = localStorage.getItem("Var1");
alert("PSS WD : " + z); 
if (x.checked == true){

   localStorage.setItem("Var1",y);
   
} else {
  alert("else");
}
}

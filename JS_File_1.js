function ShowPW(){
   var x = document.getElementById("NVA1");
  if (x.style.display === "none") {
     x.style.display = "block";
  }  else {
     x.style.display = "none";
  }
}
function login(){
let x = document.getElementById("PW1").value;
localStorage.PWD = x;  
 if (x === "111aoi222"){
  document.getElementById("NVB").style.display = "block";
  document.getElementById("NVA").style.display = "none";
  document.getElementById("NVA1").style.display = "none";
} else {
  alert("incorrect Password");
}
}
function BTT(){  
    var x = document.getElementById("NVN1");
  if (x.style.display === "none") {
    ALL1();
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function BTT1(){  
    var x = document.getElementById("B1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT2(){  
    var x = document.getElementById("B2");
  if (x.style.display === "none") {
  
    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
    
  } else {
    x.style.display = "none";
  }
}
function BTT3(){  
    var x = document.getElementById("B3");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT4(){  
    var x = document.getElementById("B4");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT5(){  
    var x = document.getElementById("B5");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT6(){  
    var x = document.getElementById("B6");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT7(){  
    var x = document.getElementById("B7");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function BTT8(){  
    var x = document.getElementById("B8");
  if (x.style.display === "none") {

    x.style.display = "block";
    document.getElementById("NVN1").style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function ALL1(){
document.getElementById("B1").style.display = "none";
document.getElementById("B2").style.display = "none";
document.getElementById("B3").style.display = "none";
document.getElementById("B4").style.display = "none";
document.getElementById("B5").style.display = "none";
document.getElementById("B6").style.display = "none";
document.getElementById("B7").style.display = "none";
document.getElementById("B8").style.display = "none";
}  

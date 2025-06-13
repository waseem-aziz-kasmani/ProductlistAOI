function RememberPW() {
  let PS =  document.getElementById("PW1").value;
  
  if (localStorage.PS1) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
document.getElementById("demo").innerHTML = localStorage.clickcount;
}

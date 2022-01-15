let ad = document.querySelector("#firstName");
let soyad = document.querySelector("#lastName");
let ataAdi = document.querySelector("#fathersName");
let telNomre = document.querySelector("#telNumber");
let unvan = document.querySelector("#location");
let ele = document.getElementsByName("study");


function sifirla(){
ad.value = "";
soyad.value="";
ataAdi.value="";
telNomre.value="";
unvan.value="";

document.querySelector('input[name="working"]:checked').checked = false;
document.querySelector('input[name="marriage"]:checked').checked = false;
for(let i=0;i<ele.length;i++)
      ele[i].checked = false;
}

function confirm(){
let tbl = document.getElementById("myTable");
let row = tbl.insertRow();
let cell1 = row.insertCell();
let cell2 = row.insertCell();
let cell3 = row.insertCell();
let cell4 = row.insertCell();
let cell5 = row.insertCell();
let cell6 = row.insertCell();
let cell7 = row.insertCell();

cell1.textContent = ad.value;
cell2.textContent = soyad.value;
cell3.textContent = ataAdi.value;
cell4.textContent = unvan.value;




}
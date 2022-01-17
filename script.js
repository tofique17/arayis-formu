let ad = document.querySelector("#firstName");
let soyad = document.querySelector("#lastName");
let ataAdi = document.querySelector("#fathersName");
let telNomre = document.querySelector("#telNumber");
let unvan = document.querySelector("#location");
let ele = document.getElementsByName("study");

const cb1 = document.querySelector('#marriage');
const cb2 = document.querySelector('#working');

const ortaChecker = document.querySelector('#orta');
const aliChecker = document.querySelector('#ali');
const tamortaChecker = document.querySelector('#tamorta');

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

if(cb1.checked){
      cell7.textContent = "Bəli";
}
else{
      cell7.textContent = "Xeyr"; //checking marriage
}

if(cb2.checked){
      cell6.textContent = "Bəli";
} else{
      cell6.textContent = "Xeyr"; //checking working
}

if(aliChecker.checked){
      cell5.textContent = "Ali";
}

if(ortaChecker.checked){
      cell5.textContent = "Orta";
}

if(tamortaChecker.checked){
      cell5.textContent = "Tam orta";
}

}
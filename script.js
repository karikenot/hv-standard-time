function startTime() {
const days = ["Juli", "Cleonus", "Atrestus", "Agustus", "September", "Oktober", "November"]; // "Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"
const d = new Date();
let date = d.getUTCHours();
let month = days[d.getDay()];
document.getElementById("hvdate").innerHTML = "Tanggal: " + (date + 7) + " " + month + " " + "2073";

let hour = d.getMinutes(); // hourcal artinya calculated hour
hourCal = hour / 2.5
let h = Math.trunc(hourCal); //h itu hourcal yang sudah dihapus desimalnya

let m = d.getSeconds();
h = checkTime(h);
m = checkTime(m);
document.getElementById("hvtime").innerHTML = "Pukul: " + h + ":" + m;
setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  //nambahin nol nilai digit 1
    return i;
}

const days = ["Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"];
const d = new Date();
let date = d.getUTCHours();
let month = days[d.getDay()];
document.getElementById("hvdate").innerHTML = "Tanggal: " + (date + 7) + " " + month + " " + "2073";

let hour = d.getMinutes(); // hourcal artinya calculated hour
hourCal = hour / 2.5
let num = hourCal;
let hourNod = Math.trunc(num); //hournod itu hourcal yang sudah dihapus desimalnya

let minute = d.getSeconds();
hourNod = checkTime(hourNod);
minute = checkTime(minute);
document.getElementById("hvtime").innerHTML = "Pukul: " + hourNod + ":" + minute;
setTimeout(startTime, 1000);
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  //nambahin nol nilai digit 1
    return i;
}
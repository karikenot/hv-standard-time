const days = ["Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"];
const d = new Date();
let date = d.getHours();
let month = days[d.getDay()];
let hour = d.getMinutes();
let minute = d.getSeconds();
document.getElementById("hvdate").innerHTML = "Tanggal: " + (date - 1) + " " + month + " " + "2073";
document.getElementById("hvtime").innerHTML = "Pukul: " + hour + ":" + minute
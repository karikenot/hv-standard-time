function startTime() {
const days = ["Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"]; // "Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"
const d = new Date();// "Juli", "Cleonus", "Atrestus", "Agustus", "September", "Oktober", "November"
let date = d.getUTCHours();
let month = days[d.getDay()];
document.getElementById("hvdate").innerHTML = (date + 7) + " " + month + " " + "2075";

let hour = d.getMinutes(); // hourcal artinya calculated hour
hourCal = hour / 2.5
let h = Math.trunc(hourCal); //h itu hourcal yang sudah dihapus desimalnya

let m = d.getSeconds();
h = checkTime(h);
m = checkTime(m);
document.getElementById("hvtime").innerHTML = h + ":" + m;
setTimeout(startTime, 1000);

let sevilleH = h - 9;
let pilsetaH = h + 3;
let centeriumH = h + 11;

sevilleH = fixWorldClock(sevilleH);
pilsetaH = fixWorldClock(pilsetaH);
centeriumH = fixWorldClock(centeriumH);

document.getElementById("seville").innerHTML = sevilleH + ":" + m;
document.getElementById("pilseta").innerHTML = pilsetaH + ":" + m;
document.getElementById("centerium").innerHTML = centeriumH + ":" + m;

window.hGlobal = h;

}

if( hGlobal == 1) {
    document.getElementById('timepic').src='timepic/hvtime1.png';
} else if (hGlobal == 2) {
    document.getElementById('timepic').src='timepic/hvtime2.png';
} else if (hGlobal == 3) {
    document.getElementById('timepic').src='timepic/hvtime3.png';
} else if (hGlobal == 4) {
    document.getElementById('timepic').src='timepic/hvtime4.png';
} else if (hGlobal == 5) {
    document.getElementById('timepic').src='timepic/hvtime5.png';
} else if (hGlobal == 6) {
    document.getElementById('timepic').src='timepic/hvtime6.png';
} else if (hGlobal == 7) {
    document.getElementById('timepic').src='timepic/hvtime7.png';
} else if (hGlobal == 8) {
    document.getElementById('timepic').src='timepic/hvtime8.png';
} else if (hGlobal == 9) {
    document.getElementById('timepic').src='timepic/hvtime9.png';
} else if (hGlobal == 10) {
    document.getElementById('timepic').src='timepic/hvtime10.png';
} else if (hGlobal == 11) {
    document.getElementById('timepic').src='timepic/hvtime11.png';
} else if (hGlobal == 12) {
    document.getElementById('timepic').src='timepic/hvtime12.png';
} else if (hGlobal == 13) {
    document.getElementById('timepic').src='timepic/hvtime13.png';
} else if (hGlobal == 14) {
    document.getElementById('timepic').src='timepic/hvtime14.png';
} else if (hGlobal == 15) {
    document.getElementById('timepic').src='timepic/hvtime15.png';
} else if (hGlobal == 16) {
    document.getElementById('timepic').src='timepic/hvtime16.png';
} else if (hGlobal == 17) {
    document.getElementById('timepic').src='timepic/hvtime17.png';
} else if (hGlobal == 18) {
    document.getElementById('timepic').src='timepic/hvtime18.png';
} else if (hGlobal == 19) {
    document.getElementById('timepic').src='timepic/hvtime19.png';
} else if (hGlobal == 20) {
    document.getElementById('timepic').src='timepic/hvtime20.png';
} else if (hGlobal == 21) {
    document.getElementById('timepic').src='timepic/hvtime21.png';
} else if (hGlobal == 22) {
    document.getElementById('timepic').src='timepic/hvtime22.png';
} else if (hGlobal == 23) {
    document.getElementById('timepic').src='timepic/hvtime23.png';
}  else {
    document.getElementById('timepic').src='timepic/hvtime24.png';
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  //nambahin nol nilai digit 1
    return i;
}

function fixWorldClock(i) {
    if (i < 0) {i = i * (-1) + 12};
    if (i > 24) {i = i - 24}
    return i;
}

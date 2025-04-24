let hrs= document.getElementById("hrs");
let min= document.getElementById("min");
let sec= document.getElementById("sec");
let year= document.getElementById("year");
let month= document.getElementById("month");
let date= document.getElementById("date");

setInterval(()=>{
    let currentTime= new Date();
    year.innerHTML=currentTime.getFullYear();
    month.innerHTML=(currentTime.getMonth()<10?"0":"")+currentTime.getMonth();
    date.innerHTML=(currentTime.getDate()<10?"0":"")+currentTime.getDate();

    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000);
// let currentTime= new Date();
// console.log(currentTime);

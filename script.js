let hourdiv = document.querySelector(".hour");
let minutediv = document.querySelector(".minute");
let seconddiv = document.querySelector(".second");




setInterval(function(){
    let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let hourmove = 30 * hour + 1/2 * minute;
let minutemove = 6 * minute ;
let secondmove = 6 * second;


    hourdiv.style.transform= `rotate(${hourmove}deg)`;
    minutediv.style.transform= `rotate(${minutemove}deg)`;
    seconddiv.style.transform= `rotate(${secondmove}deg)`;
    
}, 1000)
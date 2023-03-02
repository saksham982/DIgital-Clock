let hours;
let a;
let min;
let date;
setInterval(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     a= new Date();
    hours=a.getHours();
    if (hours <10){
        hours ="0"+hours;
    }
    min=a.getMinutes();
    if (min <10){
        min ="0"+min;
    }
    date=a.toLocaleDateString(undefined, options)
    document.getElementById("hour").innerText=hours;   
    document.getElementById("min").innerText=min; 
    document.getElementById("date").innerText=date; 
}, 1000);
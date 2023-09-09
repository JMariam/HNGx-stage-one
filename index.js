const time = document.getElementById('time');
const day = document.getElementById('day');


setInterval(() => {
    let d = new Date();
    time.innerHTML = d.getTime();


    day.innerHTML = d.toDateString()
}, 1000);
    





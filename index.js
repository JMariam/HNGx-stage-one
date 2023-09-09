const time = document.getElementById('time');
const d = new Date();
const day = d.getDay()

// current day of the week
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.getElementById('day').innerHTML = dayList[day]

// UTCTime in milliseconds
time.innerHTML = d.getTime();


    





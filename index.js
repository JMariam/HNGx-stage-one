setInterval(() => {
const d = new Date();
const day = d.getDay()

// current day of the week
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.getElementById('day').innerHTML = dayList[day]

// UTCTime in milliseconds

    const hour = d.getUTCHours();
    const minutes = d.getUTCMinutes();
    const seconds = d.getUTCSeconds();
    const milliSeconds = d.getUTCMilliseconds();

    const currentUTCTime = 
    hour * 3600000 +
    minutes * 60000 + 
    seconds * 1000 +
    milliSeconds;

    document.getElementById('time').innerHTML = currentUTCTime
}, 1000);



    





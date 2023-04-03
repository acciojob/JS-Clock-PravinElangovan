 setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * (hr % 12) + (min / 2); //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation+90}deg)`;
    minute.style.transform = `rotate(${min_rotation+90}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
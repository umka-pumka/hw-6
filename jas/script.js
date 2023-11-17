

let count =document.getElementById('count');
let time =document.getElementById('time');
let countPerSecond =document.getElementById('count-per-second');
let click =document.getElementById('click');
let reset =document.getElementById('reset');



let i = 0;
let interval;
let timeout;
let timeValue = time.value

click.onclick = () => {
    if (i == 0) {
        interval = setInterval(() => {
            time.value = Math.max(0, time.value - 0.1).toFixed(1);
        }, 100);
        timeout = setTimeout(() => {
            click.disabled = true;
            countPerSecond.textContent = i / 10;
            clearInterval(interval);
        }, timeValue * 10000);
    }
    i++;
    count.textContent = i;
}

reset.onclick = ()  =>{
    i = 0;
    clearTimeout(timeout);
    count.textContent = i;
    countPerSecond.textContent = 0;
    click.removeAttribute('disabled');
    clearInterval(interval)
    time.value = 10;
}

time.onchange = (event) =>{
    if(event.target.value < 5){
        event.target.value = 5;
        timeValue = event.target.value;
    }else if(event.target.value > 15){
        event.target.value = 15;
        timeValue = event.target.value;
    }else{
        timeValue = event.target.value
    }
}


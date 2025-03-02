/**
 * Write your challenge solution here
 */

//getting the refrences


//for Digital clock
function updateClock(){

    
    let digitalClock = document.querySelector('.digital-clock')
    let date = document.querySelector('.date')
    
    // console.log(digitalClock,date)
    
    let NewDate = new Date();
    
    let hours = NewDate.getHours % 12 || 12
    const minutes = NewDate.getMinutes() < 10 ? `0${NewDate.getMinutes()}` : NewDate.getMinutes();
    const seconds = NewDate.getSeconds() < 10 ? `0${NewDate.getSeconds()}` : NewDate.getSeconds();
    const ampm = NewDate.getHours() >= 12 ? "PM" : "AM";
    
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    digitalClock.innerText = `${hours.toString().padStart(2,'0')}:${minutes}:${seconds}:${ampm}`;
    date.innerText = NewDate.toLocaleDateString(undefined, options);
    
    
    //Analog Clock
    
    const hourHand = document.querySelector(".hand.hour");
    const minuteHand = document.querySelector(".hand.minute");
    const secondHand = document.querySelector(".hand.second");
    
    const hoursRotation = ((hours % 12) * 30) + (minutes * 0.5);
    const minutesRotation = (minutes * 6) + (seconds * 0.1)
    const secondRotation = (seconds * 6)
    hourHand.style.transform = `translateX(-50%) rotate(${hoursRotation}deg)`
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesRotation}deg)`
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`
}

let clock = document.querySelector('.clock')
setInterval(updateClock,1000)
updateClock()
for(let i = 1;i<=12;i++){
    const number = document.createElement("div");
    number.className = "number"
    number.style.setProperty("--rotation", `${i * 30}deg`);
    const span = document.createElement("span");
    span.innerText = i;
    number.appendChild(span)
    clock.appendChild(number)
}
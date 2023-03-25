let sort_speed_slider = document.getElementById('sortSpeed');
sort_speed_slider.addEventListener("input", delay);
let delay_time;
function delay(){
    delay_time = Math.abs(sort_speed_slider.value);
    return delay_time
}

let c_delay = 0;
function div_update(arrDiv, height, color){
        setTimeout(() => {
            arrDiv.style =  "margin:"+ arrMargin + "%; background-color:" + color + "; width:" + (100/arrSize-(2*arrMargin)) + "%; height:" + height + "%;"; 
        }, c_delay += delay());
}



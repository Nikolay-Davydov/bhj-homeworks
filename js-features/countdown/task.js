
function caunterTime() {
    const startTime = document.getElementById('timer');    
    startTime.textContent = startTime.textContent - 1;   
    if (startTime.textContent == 0) {
        alert(' Вы победили в конкурсе!');
        clearInterval(timeId);
    } 
}

let competition = caunterTime

let timeId = setInterval(competition, 1000)


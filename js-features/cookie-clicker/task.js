let imgCookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

imgCookie.onclick = () => {
    let clicks = ++clickerCounter.textContent;    
    if (clicks % 2 == 0) {
        imgCookie.width += 50;
    }
    else {
        imgCookie.width -= 50;
    }
    //console.log(Number(clicks))
}


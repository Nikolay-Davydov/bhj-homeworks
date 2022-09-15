const rotatorCaseArray = Array.from(document.querySelectorAll('.rotator__case'));
let count = 0;

setInterval(rotator, 1000);

function rotator() {
    rotatorCaseArray[count].classList.toggle('rotator__case_active');
    count++;
    
    if (count >= rotatorCaseArray.length) {
        count = 0;
        rotatorCaseArray[count].classList.toggle('rotator__case_active');
    } else {
        rotatorCaseArray[count].classList.toggle('rotator__case_active');
    }
}
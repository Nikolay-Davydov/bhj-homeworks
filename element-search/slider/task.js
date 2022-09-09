const items = Array.from(document.getElementsByClassName('slider__item'));
const itemsNumber = items.length;

const nextArrow = Array.from(document.getElementsByClassName('slider__arrow_next'));
const prevArrow = Array.from(document.getElementsByClassName('slider__arrow_prev'));

    nextArrow[0].onclick = () => {
        let activeItem = document.querySelector('.slider__item_active');
        let activeItemNumber = items.indexOf(activeItem);                             

        activeNumber = () => {
            return items.indexOf(activeItem);
        }                  

        if(activeItemNumber === itemsNumber-1) {
            items[activeItemNumber].classList.remove('slider__item_active');           
            items[0].classList.add('slider__item_active');          
        }

        items[activeItemNumber].classList.remove('slider__item_active');  
        activeItemNumber++;
        items[activeItemNumber].classList.add('slider__item_active');
    }

    prevArrow[0].onclick = () => {        
        let activeItem = document.querySelector('.slider__item_active');
        let activeItemNumber = items.indexOf(activeItem);                  

        activeNumber = function() {
            return items.indexOf(activeItem);
        }

        if(activeItemNumber === 0) {
            items[activeItemNumber].classList.remove('slider__item_active');          
            items[itemsNumber-1].classList.add('slider__item_active'); 
        }

        items[activeItemNumber].classList.remove('slider__item_active');  
        activeItemNumber--;
        items[activeItemNumber].classList.add('slider__item_active');
    }

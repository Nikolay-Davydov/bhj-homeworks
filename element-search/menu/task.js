let subMenues = Array.from(document.querySelectorAll('.menu_sub'));

for(let i = 0; i < subMenues.length; i++) {
  let x = subMenues[i];
  
  x.parentElement.querySelector('.menu__link').onclick = () => {

    function notX(value) {      
      return value != x;
    }
    
    let filteredActive = subMenues.filter(notX);    

    for(let element of filteredActive) {
      element.classList.remove('menu_active');
    }
        
    if(x.classList.contains('menu_active')) {
      x.classList.remove('menu_active');
      return false;        
      }    
        
      x.classList.add('menu_active');      
      return false;
    }
}

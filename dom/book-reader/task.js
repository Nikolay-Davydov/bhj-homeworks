const fontSizeAll = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

for(let fontSize of fontSizeAll) {    
    fontSize.addEventListener('click', (event) => {    
        for(let button of fontSizeAll) {
            button.classList.remove('font-size_active');        
        }
        book.classList.remove('book_fs-small');                
        book.classList.remove('book_fs-big');                 
        event.target.classList.add('font-size_active');           
        if(event.target.classList.contains('font-size_small')) {  
            book.classList.add('book_fs-small');
        } 
        else if(event.target.classList.contains('font-size_big')) {         
            book.classList.add('book_fs-big');
        }
        event.preventDefault(); 
    })     
}

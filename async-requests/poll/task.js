const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = new XMLHttpRequest();
const answersSet = document.querySelector('.poll__answers');
const question = document.querySelector('.poll__title');

xhr.open('GET', url);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {        
        let data = JSON.parse(xhr.responseText);        
        let answers = data.data.answers;

        question.insertAdjacentText('afterbegin', data.data.title);
        
        for(let i = 0; i < answers.length; i++) {
            answersSet.insertAdjacentHTML('beforebegin', `<button class="poll__answer">
            ${answers[i]}
          </button>` );
        }

        let buttons = document.querySelectorAll('.poll__answer');
               
        for(let button of buttons) {
            button.addEventListener('click', event => {
                alert('Спасибо, ваш голос засчитан!');
                event.preventDefault();
            })
        }
    }
})

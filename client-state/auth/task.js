const signinBlock = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const xhr = new XMLHttpRequest();

signinButton.addEventListener('click', enter);

function sayHello(user) {
    welcome.classList.add('welcome_active');
    welcome.innerHTML = `Добро пожаловать, пользователь #
    <span id="${user}">${user}</span>`;
}

function enter(event) {
    event.preventDefault();

    let formData = new FormData(document.forms[0]);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);    
    xhr.send(formData);    
    xhr.onreadystatechange = function() {    
        if (xhr.readyState != 4) return;    
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            let authJSON = JSON.parse(xhr.responseText);
            if (authJSON.success) {
                signinBlock.classList.remove('signin_active');
                sayHello(authJSON.user_id);
                localStorage.setItem("user_id", authJSON.user_id);
            }
            else {
                signinForm.reset();
                alert('Неверный логин/пароль!');
            }
        }
    }
}

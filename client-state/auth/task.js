const signinBlock = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id')
let logoutBtn = document.getElementById('logout__btn');
const xhr = new XMLHttpRequest();

signinButton.addEventListener('click', enter);
logoutBtn.addEventListener('click', exit);
document.addEventListener('DOMContentLoaded', restoreLogin);

function restoreLogin() {
    let userId = localStorage.getItem('user_id'); 
    if (userId != null) {
        signinBlock.classList.remove('signin_active');
        sayHello(userId);
    }
    else {
        signinBlock.classList.add('signin_active');
    }
}

function sayHello(user) {
    welcome.classList.add('welcome_active');    
    userId.innerHTML = user;     
}

function exit() {
    console.log('Выход');
    localStorage.removeItem('user_id');
    console.log(localStorage);
    welcome.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
    document.location.reload();
}

function enter(event) {
    event.preventDefault();

    let formData = new FormData(signinForm);
    
    xhr.responseType = 'json';
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);    
    xhr.send(formData);
    xhr.onload = function() {   
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            let authJSON = xhr.response;
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

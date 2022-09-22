const url = 'https://netology-slow-rest.herokuapp.com';
const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const items = document.querySelector('#items');

xhr.open('GET', url);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        
        let data = JSON.parse(xhr.responseText);
        let currencies = data.response.Valute;
        let values = Array.from(Object.values(currencies));
        
        for(let i = 0; i < values.length; i++) {
            items.insertAdjacentHTML('beforeend', `   
            <div class="item">       
            <div class="item__code">
                ${values[i].CharCode}
            </div>
            <div class="item__value">
                ${values[i].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            `);
        }
    }
})

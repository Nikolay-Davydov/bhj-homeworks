const interestAll = document.querySelectorAll('.interest');

for(let interest of interestAll) {
    interest.addEventListener('change', event => {
        let interestClosest = event.target.closest('.interest');           
        let interestClosestAll = interestClosest.querySelectorAll('.interest');

        for(let item of interestClosestAll) {
            let checkbox = item.querySelector('.interest__check');
            event.target.checked === true ? checkbox.checked = true : checkbox.checked = false;
        }
    })
}

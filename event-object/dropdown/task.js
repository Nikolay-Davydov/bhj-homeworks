const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");


dropdownValue.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list_active");
})

function enter(event) {
	dropdownValue.textContent = event.target.textContent;
	dropdownList.classList.remove("dropdown__list_active");
	event.preventDefault();
}

dropdownList.addEventListener("click", enter);

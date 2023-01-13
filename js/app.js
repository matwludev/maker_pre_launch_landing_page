const form = document.querySelector(".footer__contact");
const email = document.querySelector(".footer__contact-email");

window.onload = () => {
	form.reset();
};

form.addEventListener("submit", function (elem) {
	elem.preventDefault();
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (!email.value.match(regex) || email.value == "") {
		email.nextElementSibling.style.display = "inline";
	} else {
		email.nextElementSibling.style.display = "none";
		alert("Thank you for let us notify you!");
		form.reset();
	}
});

email.addEventListener("blur", function (e) {
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (!email.value.match(regex) || email.value == "") {
		email.nextElementSibling.style.display = "inline";
	} else {
		email.nextElementSibling.style.display = "none";
	}
});

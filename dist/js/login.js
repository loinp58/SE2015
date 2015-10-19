var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');


var formLogin = document.getElementById('formLogin');

if (formLogin.attachEvent) {
	formLogin.attachEvent('submit', onFormSubmit);
}
else {
	formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
	if (e.preventDefault) e.preventDefault();

	var username = inputUsername.value;
	var password = inputPassword.value;

	if (username == "admin" && password == "123456") {
		window.location = "/pages/adminSE";
	}
	else {
		alert("Không thành công");
	}
}
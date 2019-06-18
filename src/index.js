import './styles/style.scss';

var modal = document.getElementById("myModal");
			var formModal = document.getElementById("myModalForm");

document.getElementById("myBtn").onclick = function() {
	modal.style.display = "list-item";
};
document.getElementById("add_post").onclick = function() {
	formModal.style.display = "list-item";
};
document.getElementById("yes").onclick = function() {
	modal.style.display = "none";
};
document.getElementById("cancel").onclick = function() {
	modal.style.display = "none";
	formModal.style.display = "none";
};
document.getElementById("discard").onclick = function() {
	formModal.style.display = "none";
};
document.getElementById("add").onclick = function() {
	formModal.style.display = "none";
};

let toggle = document.querySelector('#theme');

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('funky')) {
    // Turning the theme off:
    document.body.classList.remove('funky');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
    toggle.style.background = "pink";
  } else {
    document.body.classList.add('funky');
    toggle.style.background = "grey";
  }
});
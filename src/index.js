"use strict";
import './styles/style.scss';
import Header from './views/components/Header.js';
import Menu from './views/components/Menu.js';
import Home from './views/pages/Home.js';
import Post from './views/pages/Post.js';
import Utils from './Utils.js'

const routes = {
  '/': Home,
   '/post/id': Post
};

const router = async () => {
  const header = null || document.getElementById('headerId');
  const menu = null || document.getElementById('menuId');
  const content = null || document.getElementById('postsId');
  header.innerHTML = await Header.render();
  await Header.after_render();
  menu.innerHTML = await Menu.render();
  await Menu.after_render();

  let request = Utils.parseRequestURL()

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/id' : '') + (request.verb ? '/' + request.verb : '')

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] //? routes[parsedURL] : Error404
  content.innerHTML = await page.render();
  await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


var modal = document.getElementById("myModal");
var formModal = document.getElementById("myModalForm");

// document.getElementById("myBtn").onclick = function () {
//   modal.style.display = "list-item";
// };
document.getElementById("add_post").onclick = function () {
  formModal.style.display = "list-item";
};
document.getElementById("yes").onclick = function () {
  modal.style.display = "none";
};
document.getElementById("cancel").onclick = function () {
  modal.style.display = "none";
  formModal.style.display = "none";
};
document.getElementById("discard").onclick = function () {
  formModal.style.display = "none";
};
document.getElementById("add").onclick = function () {
  formModal.style.display = "none";
};

let toggle = document.querySelector('#theme');

toggle.addEventListener('click', function (e) {
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
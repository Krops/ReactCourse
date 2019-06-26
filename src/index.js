import './styles/style.scss';

var modal = document.getElementById("myModal");
var formModal = document.getElementById("myModalForm");

document.getElementById("myBtn").onclick = function () {
  modal.style.display = "list-item";
};
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

"use strict";

import Home         from './views/pages/Home.js'
// import About        from './views/pages/About.js'
// import Error404     from './views/pages/Error404.js'
// import PostShow     from './views/pages/PostShow.js'
// import Register     from './views/pages/Register.js'

import Navbar       from './views/components/Header.js/index.js'
import Bottombar    from './views/components/Bottombar.js' 

import Utils        from './Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    // , '/about'      : About
    // , '/post/:id'      : PostShow
    // , '/addPost'   : Register
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementsByClassName('box header');
    const content = null || document.getElementsByClassName('box posts');
    const menu = null || document.getElementsByClassName('box menu');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    menu.innerHTML = await Bottombar.render();
    await Bottombar.after_render();



    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] //? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
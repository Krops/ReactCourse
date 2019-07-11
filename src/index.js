/* eslint-disable import/extensions */

import './styles/style.scss';
import Header from './views/components/Header.js';
import Menu from './views/components/Menu.js';
import Home from './views/pages/Home.js';
import Post from './views/pages/Post.js';
import Delete from './views/pages/Delete.js';
import AddPost from './views/pages/AddPost.js';
import Update from './views/pages/Update.js';
import Utils from './Utils.js';

const routes = {
  '/': Home,
  '/post/id': Post,
  '/deletepost/id': Delete,
  '/addpost': AddPost,
  '/updatepost/id': Update,
};

const router = async () => {
  const header = null || document.getElementById('headerId');
  const menu = null || document.getElementById('menuId');
  const content = null || document.getElementById('postsId');
  header.innerHTML = await Header.render();
  menu.innerHTML = await Menu.render();

  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/id' : '') + (request.verb ? `/${request.verb}` : '');
  const page = routes[parsedURL];
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);


const toggle = document.querySelector('#theme');

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  if (document.body.classList.contains('funky')) {
    document.body.classList.remove('funky');
    toggle.style.background = 'pink';
  } else {
    document.body.classList.add('funky');
    toggle.style.background = 'grey';
  }
});

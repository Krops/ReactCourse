/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import Utils from '../../Utils.js';

const updatePost = async (id, theme, description) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      theme,
      description,
    }),
  };
  console.log(id);
  return fetch(`http://localhost:4000/api/posts/${id}`, options)
    .then(response => response.json())
    .catch(error => error.status);
};
const getPost = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`http://localhost:4000/api/posts/${id}`, options)
    .then(response => response.json())
    .catch(error => error.status);
};
const Update = {
  render: async () => {
    const request = Utils.parseRequestURL();
    const post = await getPost(request.id);
    return /* html */`
    <div id="postbody">
    <div>Theme:<input type="text" name="theme" value="${post.theme}" id="themeId"><div id="themewarnId"></div><br></div>
    <div>Description:<input type="text" value="${post.description}" name="description" id="descrId"><div id="descwarnId"></div><br></div>
    <button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
    <button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
    <div id="warnId"></div></div>`;
  },
  after_render: async () => {
    document.getElementById('cancel').addEventListener('click', () => {
      window.history.back();
    });
    document.getElementById('yes').addEventListener('click', () => {
      const themeWarn = document.getElementById('themewarnId');
      const descWarn = document.getElementById('descwarnId');
      const theme = document.getElementById('themeId');
      const description = document.getElementById('descrId');
      if (theme.value.length < 5) {
        themeWarn.innerText = 'Theme should be greater then 5!';
        console.log('1');
      } else if (theme.value.length > 1000) {
        themeWarn.innerText = 'Theme should be smaller then 1000!';
        console.log('2');
      } else {
        themeWarn.innerText = '';
        console.log('5');
      }
      if (description.value.length < 5) {
        descWarn.innerText = 'Description should be greater then 5!';
        console.log('3');
      } else if (description.value.length > 1000) {
        descWarn.innerText = 'Description should be smaller then 1000!';
        console.log('4');
      } else {
        descWarn.innerText = '';
        console.log('6');
      }
      const postId = Utils.parseRequestURL().id;
      updatePost(postId, theme.value, description.value).then((response) => {
        if (response !== undefined) {
          document.getElementById('warnId').innerText = response;
        } else {
          document.getElementById('warnId').innerText = 'Post Added';
          window.location.href = `#/post/${postId}`;
        }
      });
    });
  },
};

export default Update;

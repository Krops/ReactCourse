import { serverUrl } from '../../Configs';

const addPost = async (theme, description) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      theme,
      description,
    }),
  };
  return fetch(`${serverUrl}/api/addPost`, options)
    .then(response => response.json())
    .catch(error => error.status);
};
const AddPost = {
  render: async () => /* html */`
  <div id="postbody">
  <div>Theme:<input type="text" name="theme" id="themeId"><div id="themewarnId"></div><br></div>
  <div>Description:<input type="text" name="description" id="descrId"><div id="descwarnId"></div><br></div>
  <button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
  <button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
  <div id="warnId"></div>
  </div>`,
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
      } else if (theme.value.length > 1000) {
        themeWarn.innerText = 'Theme should be smaller then 1000!';
      } else {
        themeWarn.innerText = '';
      }
      if (description.value.length < 5) {
        descWarn.innerText = 'Description should be greater then 5!';
      } else if (description.value.length > 1000) {
        descWarn.innerText = 'Description should be smaller then 1000!';
      } else {
        descWarn.innerText = '';
      }

      addPost(theme.value, description.value).then((response) => {
        if (response !== undefined) {
          document.getElementById('warnId').innerText = response;
        } else {
          document.getElementById('warnId').innerText = 'Post Added';
          window.location.href = '/';
        }
      });
    });
  },
};

export default AddPost;

// eslint-disable-next-line import/extensions
import {serverUrl, Utils} from '../../Utils.js';

const deletePost = async (id) => {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${serverUrl}/api/posts/${id}`, options)
    .then(response => response.json())
    .catch(error => error.status);
};
const Delete = {
  render: async () => /* html */`
    <h2 style="text-transform: uppercase;">Delete this post?</h2>
    <button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
    <button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
    <div id="warnId"></div>`,
  after_render: async () => {
    document.getElementById('yes').addEventListener('click', () => {
      deletePost(Utils.parseRequestURL().id).then((response) => {
        if (response !== undefined) {
          document.getElementById('warnId').innerText = response;
        } else {
          document.getElementById('warnId').innerText = 'Post Deleted';
          window.location.href = '/';
        }
      });
    });
    document.getElementById('cancel').addEventListener('click', () => {
      window.history.back();
    });
  },
};

export default Delete;

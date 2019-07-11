// eslint-disable-next-line import/extensions
import Utils from '../../Utils.js';

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

const Post = {
  render: async () => {
    const request = Utils.parseRequestURL();
    const post = await getPost(request.id);
    return /* html */`
    <div class="posts">
    <h2 class="inline">${post.theme}</h2>
    <span class="inline">at 11/06/1992</span>
    <!-- Button trigger modal -->
    <a id="myBtn" type="button" class="fas fa-trash-alt inline" href="#/deletepost/${post.id}"></a>
    <a id="myBtn2" type="button" class="fas fa-plus-square inline" href="#/updatepost/${post.id}"></a>
    <div>${post.description}</div>
    </div>`;
  },
  after_render: async () => console.log('No after render'),
};

export default Post;

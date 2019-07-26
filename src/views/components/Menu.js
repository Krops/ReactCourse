import { serverUrl } from '../../Configs';

const getPostsList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${serverUrl}/api/posts`, options).then(response => response.json()).catch(error => error.status);
};

const Menu = {
  render: async () => {
    const posts = await getPostsList();
    return /* html */`
    <h2>Posts:</h2>${posts.map(post => /* html */`<a href="#/post/${post.id}">${post.theme}</a>`).join('<br>')}
    <hr>
    <div>Number of posts: ${posts.length}</div>
    <hr>
    <a href="#/addpost" id="add_post" class="inline button4"><i
    class="fas fa-plus-square"></i>Add Post</a>`;
  },
};

export default Menu;

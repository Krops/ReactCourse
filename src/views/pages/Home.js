import { serverUrl } from '../../Configs';

const getPostsList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${serverUrl}/api/posts`, options)
    .then(response => response.json())
    .catch(error => error.status);
};

const Home = {
  render: async () => {
    const posts = await getPostsList();
    return /* html */`
        <div class="post">${posts.map(post => /* html */`<h2 class="inline">
        <a href="#/post/${post.id}">${post.theme}</a></h2>
        <span class="inline">at 11/06/1992</span>
        <!-- Button trigger modal -->
        <a id="myBtn" type="button" class="fas fa-trash-alt inline" href="#/deletepost/${post.id}"></a>
        <div>${post.description}</div>`).join('\n')}</div>`;
  },
  after_render: async () => {},
};

export default Home;

let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/api/posts`, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Menu = {
   render : async () => {
       let posts = await getPostsList()
       let view =  /*html*/`
       <h2>Posts:</h2>
       <a href="#1">First blog theme</a><br>
       <a href="#2">Second blog theme</a><br>
       <a href="#3">Third blog theme</a><br>
       <a href="#4">Fourth blog theme</a><br>
       <a href="#5">Fifth blog theme</a>
       <hr>
       <div>Number of posts: 5</div>
       <hr>
       <button id="theme" style="background-color: pink" type="button" class="fas fa-tshirt"></button>
                   ${ posts.map(post => 
                       /*html*/`<li><a href="#/p/${post.id}">${post.theme}</a></li>`
                       ).join('\n ')
                   }
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Menu;
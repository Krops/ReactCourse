console.log("kekekr")
let getPostsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:4000/api/posts`, options)
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
       ${ posts.map(post => 
        /*html*/`<a href="#/post/${post.id}">${post.theme}</a>`
        ).join('<br>')
        }
       <hr>
       <div>Number of posts: ${ posts.length }</div>
       <hr>`
       return view
   }
   , after_render: async () => {
   }

}

export default Menu;
import Utils        from './../../Utils.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:4000/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Post = {
    render : async () => {
        console.info("hedfsdf");
        let request = Utils.parseRequestURL()
        let post = await getPost(request.id)
        return /*html*/`
        <div class="post">
        <h2 class="inline">${post.theme}</h2>
        <span class="inline">at 11/06/1992</span>
					<!-- Button trigger modal -->
					<a id="myBtn" type="button" class="fas fa-trash-alt inline" href="#/deletepost/${post.id}"></a>
					<div>
                    ${post.description}
                    </div>
                    </div>
        `
    }
    , after_render: async () => {
    }
}

export default Post;
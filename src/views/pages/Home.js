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

let Home = {
    render: async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
       <div class="post">
       ${ posts.map(post =>
        /*html*/`<h2 class="inline"><a href="#/post/${post.id}">${post.theme}</a></h2>
        <span class="inline">at 11/06/1992</span>
					<!-- Button trigger modal -->
					<a id="myBtn" type="button" class="fas fa-trash-alt inline" href="#/deletepost/${post.id}"></a>
					<div>
                    ${post.description}
					</div>`
        ).join('\n')
            }				
				</div>`
        return view
    }
    , after_render: async () => {
    }

}

export default Home;
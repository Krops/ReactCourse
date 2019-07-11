import Utils from './../../Utils.js'
let deletePost = async (id) => {
    const options = {
        method: 'DELETE'
    };
    return await fetch(`http://localhost:4000/api/posts/` + id, options)
        .then(response => response.json())
        .catch(error => error.status);
}
let Delete = {
    render: async () => {
        return /*html*/`
        <h2 style="text-transform: uppercase;">Delete this post?</h2>
			<button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
            <button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
            <div id="warnId"></div>
        `
    }
    , after_render: async () => {
        document.getElementById("yes").addEventListener("click", () => {
            deletePost(Utils.parseRequestURL().id).then(response => {
                if (response != undefined) {
                    document.getElementById("warnId").innerText = response;
                } else {
                    document.getElementById("warnId").innerText = "Post Deleted";
                    window.location.href = "/"
                }
            })

        })
        document.getElementById("cancel").addEventListener("click", () => {
            window.history.back();
        })
    }
}

export default Delete;
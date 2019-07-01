let AddPost = {
    render : async () => {
        return /*html*/`
        <form>
				<div>
					<div>Theme:<input type="text" name="theme"><br></div>
					<div>Description:<input type="text" name="description"></div>
				</div>
			</form>
        `
    }
    , after_render: async () => {
    }
}

export default AddPost;
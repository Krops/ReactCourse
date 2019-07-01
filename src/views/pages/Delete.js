let Delete = {
    render : async () => {
        return /*html*/`
        <h2 style="text-transform: uppercase;">Delete this post?</h2>
			<button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
			<button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
        `
    }
    , after_render: async () => {
    }
}

export default Delete;
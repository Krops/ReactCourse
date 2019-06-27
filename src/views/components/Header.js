console.log("hellow")
let Header = {
    render: async () => {
        let view =  /*html*/`
        <h1>Kropik Blog</h1>`
        return view
    },
    after_render: async () => { }

}

export default Header;
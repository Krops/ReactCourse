console.log("hellow")
let Header = {
    render: async () => {
        let view =  /*html*/`
        <div class="box header"><h1><a href="#/">Krop Blog</a></h1></div>`
        return view
    },
    after_render: async () => { }

}

export default Header;
var _ = require('lodash');
let addPost = async (theme, description) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            'theme': theme,
            'description': description
        }
    };
    try {
        const response = await fetch(`http://localhost:4000/api/addPost`, options)

        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}
let AddPost = {
    render: async () => {
        return /*html*/`
        <div id="postbody">
        
					<div>Theme:<input type="text" name="theme" id="themeId"><div id="themewarnId"></div><br></div>
          <div>Description:<input type="text" name="description" id="descrId"><div id="descwarnId"></div><br></div>
          <button id="yes" type="button" class="fas fa-check-circle button4">YES</button>
      <button id="cancel" type="button" class="fas fa-ban button4">CANCEL</button>
      <div id="warnId"></div>
				</div>
        `
    }
    , after_render: async () => {
        document.getElementById("yes").addEventListener("click", () => {
            let themeWarn = document.getElementById("themewarnId");
            let descWarn = document.getElementById("descwarnId");
            let theme = document.getElementById("themeId");
            let description = document.getElementById("descrId");
            if (theme.value.length < 5) {
                themeWarn.innerText = "Theme should be greater then 5!";
                console.log("1")
            }
            else if (theme.value.length > 1000) {
                themeWarn.innerText = "Theme should be smaller then 1000!";
                console.log("2")
            }else if (5 < theme.value.length < 1000) {
                themeWarn.innerText = "";
                console.log("5")
            }
            if (description.value.length < 5) {
                descWarn.innerText = "Description should be greater then 5!";
                console.log("3")
            }
            else if (description.value.length > 1000) {
                descWarn.innerText = "Description should be smaller then 1000!";
                console.log("4")
            }
            
            else if (5 < description.value.length < 1000) {
                descWarn.innerText = "";
                console.log("6")
            }

        })
        // let response = await addPost(theme, description)
        // if (_.isEmpty()){
        //   document.getElementById("postbody").innerHTML = "Post added!"; 
        // } else
        // {
        //   document.getElementById("warnId").innerHTML = response;
        // }
    }
}

export default AddPost;
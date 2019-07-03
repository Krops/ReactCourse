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
    render : async () => {
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
      document.getElementById("yes").addEventListener ("click",  () => {
        let themeWarn = document.getElementById("themewarnId");
        let descWarn = document.getElementById("descwarnId");
        let theme       = document.getElementById("themeId");
        let description        = document.getElementById("descrId");
        if (theme.length < 5) {
          themeWarn.innerHTML = "Theme should be greater then 5!";
        }
        else if (theme.length > 1000) {
          themeWarn.innerHTML = "Theme should be smaller then 1000!";
        }
        if (description.length < 5) {
          descWarn.innerHTML = "Description should be greater then 5!";
        }
        else if (description.length > 1000) {
          descWarn.innerHTML = "Description should be smaller then 1000!";
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
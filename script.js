
//found url
let url = "https://swapi.co/api/peopel/"
fetch(url)
    /*headers : {
        'x-api-key': '
    }*/
.then(res => {
    //console logged to find position
    console.log(':)', res);
    return res.json();
})

let body = document.querySelector(".grid");
let img =document.querySelector(".img")

fetch(url).then(res => {

    return res.json();
})
    .then
      
    }
})

//create a div that is within the body but outside the main grid 
//hide the div (default)
//create eventlistener for each pic to show the div (if hidden)
//have a button to hide the div (if shown)
//name
//films
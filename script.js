
//found url
let url = "https://swapi.co/api/people/"
fetch(url)
    /*headers : {
        'x-api-key': '
    }*/
.then(res => {
    //console logged to find position
    console.log(':)', res);
    return res.json();
})

let grid = document.querySelector(".grid");
let img =document.querySelectorAll(".img");
let bill = document.querySelector("#img1");
let luke = document.querySelector("#img2");
let leia = document.querySelector("#img3");
let kenobi = document.querySelector("#img4");

fetch(url).then(res => {

    return res.json();
})
    .then
      
    
})

//create a div that is within the body but outside the main grid 
//hide the div (default)
//create eventlistener for each pic to show the div (if hidden)
//have a button to hide the div (if shown)
//name
//films
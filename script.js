
//found url
let url = "https://bungie-net.github.io"
fetch(url).then(res => {
    //console logged to find position
    console.log(':)', res);
    return res.json();
})

let body = document.querySelector(".grid");
let img =document.querySelector(".img")

fetch(url).then(res => {
    return res.json();
})
    .then(res => {
    for (let i = 0; i < url.length; i++) {
        if (url.length = 8) {
            return url;
        }
       let dimg = res[0].url
        img.setAttribute('src', dimg);
    }
})
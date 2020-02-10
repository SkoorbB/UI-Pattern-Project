let grid = document.querySelector(".grid");
let img = document.querySelectorAll(".img");
let leia = document.querySelector("#img3");
let kenobi = document.querySelector("#img4");
let card = document.querySelector(".card")
let cardH = document.querySelector(".cardGH")
let cardL = document.querySelector(".cardGL")
let cardImg = document.querySelector("#cardGI")
//found url
//let url = "https://swapi.co/api/people/"
//fetch(url)
    /*headers : {
        'x-api-key': '
    }*/
    /*.then(res => {
        //console logged to find position
        console.log(':)', res);
        return res.json();
    })*/

    let bill = document.querySelector("#img1")
    let url = "https://swapi.co/api/people/"
    
  bill.addEventListener("click", function (e) {
    e.preventDefault();
    fetch(url).then(res => {
        return res.json();
})
    .then(res => {
        document.querySelector(".card").style.display = "block";
        let name = res.results[8].name;
        console.log(name);
        document.querySelector("#cardGI").setAttribute("src", "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406")
        let cardN = document.createTextNode(name);
        document.querySelector(".cardGH").appendChild(cardN)
        //setattribute of name 
  
        })
        .then(res => {
        console.log(res.results[8].birth)
        let lists = document.createElement("li")
        document.querySelector(".cardGL").appendChild(lists)
        //steatrribute of lists
        let billBY = res.results[8].birth-year
        let bY1 = document.createTextNode(billBY)
        lists.appendChild(bY1)

    })
    console.log("bill");

})
 
    /*let offB = document.querySelector(".cardGB")
offB.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".card").style.display = "none";
})*/

//create a div that is within the body but outside the main grid 
//hide the div (default)
//create eventlistener for each pic to show the div (if hidden)
//have a button to hide the div (if shown)
//name
//films

    let luke = document.querySelector("#img2");
    
  luke.addEventListener("click", function (e) {
    e.preventDefault();
    fetch(url).then(res => {
        return res.json();
})
    .then(res => {
        document.querySelector(".card").style.display = "block";
        let name = res.results[0].name;
        console.log(name);
        document.querySelector("#cardGI").setAttribute("src", "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406")
        let cardN = document.createTextNode(name);
        document.querySelector(".cardGH").appendChild(cardN)

        //setattribute of name 
        })
        .then(res => {
        console.log(res.results[0].birth-year)
        let lists = document.createElement("li")
        document.querySelector(".cardGL").appendChild(lists)
        //steatrribute of lists
        let lukeBY= res.results[0].birth-year
        let bY2 = document.createTextNode(lukeBY)
        lists.appendChild(bY2)

    })
    console.log("luke");

})
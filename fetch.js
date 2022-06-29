let JokeAPI = document.getElementById("JokeAPI");
let responseText = document.getElementsByClassName("apiResponse")[0];
JokeAPI.addEventListener("click", function(){
    document.getElementsByClassName("apiSource")[0].innerHTML = "JOKE API";
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response)=> response.json())
    .then((data) => (responseText.innerHTML = data.joke));
});

let KanyeAPI = document.getElementById("KanyeAPI");
KanyeAPI.addEventListener("click", function(){
    document.getElementsByClassName("apiSource")[0].innerHTML = "Kanye API";
    fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data)=> (responseText.innerHTML = data.quote));
});

let UniAPI = document.getElementById("UniversityAPI");
UniAPI.addEventListener("click", function(){
    document.getElementsByClassName("apiSource")[0].innerHTML = "University API";
    fetch("http://universities.hipolabs.com/search?country=Hong+Kong")
    .then((response)=> response.json())
    .then((data)=> {
    responseText.innerHTML = "";
    data.map((obj) => {
        let p = document.createElement("p");
        p.innerHTML = obj.name;
        responseText.append(p);
    });
});
});


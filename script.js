const URL = "http://www.omdbapi.com/?apikey=";
const key = "b19732b0";
const inputfield = document.getElementById("search");
const formEl = document.querySelector(".forms");
const movietitleEL = document.querySelector("#movietitle");
const posterEl = document.querySelector("#poster");
const ratedEl = document.querySelector("#rated");
const genreEl = document.querySelector("#genre");
const plotEl = document.querySelector("#plot");
const ratingsEl = document.querySelector("#rating");
const listBtn = document.querySelector("#addtolist");
const firstMovie = document.querySelector("#firstmovie")
const secondMovie = document.querySelector("#secondmovie")
const thirdMovie = document.querySelector("#thirdtmovie")
const fourthtMovie = document.querySelector("#fourthmovie")
const fifthMovie = document.querySelector("#fifthmovie")
const sixthMovie = document.querySelector("#sixthmovie")
const firstPlot = document.querySelector("#firstplot")
const firstRated = document.querySelector("#firstrated")
const firstGenre = document.querySelector("#firstgenre")
const firstTitle = document.querySelector("#firsttitle")
const firstPoster = document.querySelector("#firstposter")
function movieSearch(e) {
  e.preventDefault();
  fetch("http://www.omdbapi.com/?apikey=b19732b0&t=" + inputfield.value)
    .then(function (foo) {
      return foo.json();
    })
    .then(function (foo) {
      console.log(foo.Title);
      movietitleEL.textContent = foo.Title;
      posterEl.setAttribute("src", foo.Poster);
      ratedEl.textContent = foo.Rated;
      genreEl.textContent = foo.Genre;
      plotEl.textContent = foo.Plot;
      // ratingsEl.textContent = foo.Ratings
      listBtn.classList.remove("hidden");
    });
}

formEl.addEventListener("submit", movieSearch);
function movieToList(e) {
  

}
listBtn.addEventListener("click", function(){
  fetch("http://www.omdbapi.com/?apikey=b19732b0&t=" + inputfield.value)
    .then(function (foo) {
      return foo.json();
    })
    .then(function (foo) {
      console.log(foo.Title);
      firstPlot.textContent= foo.Plot
      firstRated.textContent= foo.Rated
      firstGenre.textContent= foo.Genre
      firstPoster.textContent= foo.Poster
      firstTitle.textContent= foo.Title

      firstMovie.append(firstPlot,firstRated,firstGenre,firstTitle,firstPoster)
})

var watchListForm = document.querySelector("watchList-form");
var movieText = document.querySelector("movie-text");
var toWatch = document.querySelector("watchListItems");
var carouselEl = document.querySelector(".carousel");
var movieModal = document.querySelector(".collapsible");
var gladiatorEl = document.querySelector("#gladiatorPlot");
var departedEl = document.querySelector("#departedPlot");
var hot_tubEL = document.querySelector("#hot-tubPlot");
var guardiansEl = document.querySelector("#guardiansPlot");
var jjEl = document.querySelector("#jjPlot");
var shutterEl= document.querySelector("#shutterPlot");

function gladiatorInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0172495")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  gladiatorEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}

function departedInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0144048")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  departedEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function hottubInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt1231587")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  hot_tubEL.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function guardiansInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt2015381")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  guardiansEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function jjInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt0068762")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  jjEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
function shutterInfo(e) {
  e.preventDefault();
  console.log("info");
fetch("http://www.omdbapi.com/?apikey=b19732b0&i=tt1130884")
 .then(function(foo){
   return foo.json();
}).then(function(foo){
  shutterEl.textContent = foo.Plot;
  console.log(foo.Plot);
})
}
//Here is your key: b19732b0
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b19732b0



movieModal.addEventListener("click", shutterInfo)
movieModal.addEventListener("click", guardiansInfo)
movieModal.addEventListener("click", gladiatorInfo)
movieModal.addEventListener("click", jjInfo)
movieModal.addEventListener("click", hottubInfo)
movieModal.addEventListener("click", departedInfo)
})

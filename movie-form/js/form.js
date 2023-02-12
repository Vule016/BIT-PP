var inputTitle = document.getElementById("title");
var inputLength = document.getElementById("length");
var inputGenre = document.getElementById("genre");
var movieList = document.getElementById("movie-list");
var inputDate = document.getElementById("date");
var programList = document.getElementById("program-list");
var dropdownMovie = document.getElementById("dropdown-movie");
var dropdownProgram = document.getElementById("dropdown-program");
var festival = new Festival;


var createMovieButton = document.getElementById("movie-button");
var createProgramButton = document.getElementById("button-program");
var addMovieToProgramButton = document.getElementById("addMovieToProgram");


function createMovie() {
    var movieTitle = inputTitle.value;
    var movieLength = inputLength.value;
    var movieGenre = inputGenre.value;



    var movieObject = new Movie(movieTitle, movieLength, movieGenre);

    var errorTitle = document.getElementById('error-title');
    if (movieTitle) {
        errorTitle.innerHTML = "";
    } else {
        errorTitle.innerHTML = " Please Enter Movie Title";
        errorTitle.style.color = "red";
        throw new Error("title required")
    }

    var errorLength = document.getElementById('error-length');
    if (movieLength) {
        errorLength.innerHTML = "";
    } else {
        errorLength.innerHTML = " Please Enter Movie Length";
        errorLength.style.color = "red";
        throw new Error("length required")
    }

    var errorGenre = document.getElementById('error-genre');
    if (movieGenre) {
        errorGenre.innerHTML = "";
    } else {
        errorGenre.innerHTML = " Please Enter Movie Genre";
        errorGenre.style.color = "red";
        throw new Error("genre required")
    }


    var movieLi = document.createElement("li");
    movieLi.textContent = movieObject.getData();

    movieList.appendChild(movieLi);

    var movieIndex = festival.addMovieAndGetIndex(movieObject);


    var movieOption = document.createElement("option");
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute('value', movieIndex);
    dropdownMovie.appendChild(movieOption);

    inputTitle.value = "";
    inputLength.value = "";
    inputGenre.value = "";

    var selectedDropdownOption = dropdownProgram.getElementsByTagName("option");
}

function createProgram() {
    var programDate = inputDate.value;
    var errorDate = document.getElementById('error-date');
    if (programDate) {
        errorDate.innerHTML = "";
    } else {
        errorDate.innerHTML = " Date required!";
        errorDate.style.color = "red";
        throw new Error("date required")
    }

    var programObject = new Program(programDate);

    var programLi = document.createElement("li");
    programLi.textContent = programObject.getData();
    programList.appendChild(programLi);

    var programIndex = festival.addProgramAndGetIndex(programObject) + 1;


    var programOption = document.createElement("option");
    programOption.textContent = programObject.getData();
    programOption.setAttribute('value', programIndex);
    dropdownProgram.appendChild(programOption);

    inputDate.value = "";
    var selectedDropdownOption = dropdownProgram.getElementsByTagName("option");
}


function addMovieToProgram() {
    var whichMovieIndex = dropdownMovie.value;
    var whichProgramIndex = dropdownProgram.value;
    var whichMovieToAdd = festival.listOfAllMovies[whichMovieIndex];
    var whichProgram = festival.listOfAllPrograms[whichProgramIndex - 1];  

    whichProgram.addMovie(whichMovieToAdd);

    var programsUl = programList.getElementsByTagName("li");
    programsUl[whichProgramIndex - 1].textContent = whichProgram.getData();

    var selectedDropdownOption = dropdownProgram.getElementsByTagName("option");
    selectedDropdownOption[whichProgramIndex].textContent = whichProgram.getData();

    console.log(programsUl)
    console.log(selectedDropdownOption)
}


createMovieButton.addEventListener('click', createMovie)
createProgramButton.addEventListener('click', createProgram);
addMovieToProgramButton.addEventListener('click', addMovieToProgram);




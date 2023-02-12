function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.getData = function() {
        return this.title + ", " + this.length + "min" + ", " + this.genre;
    }
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.moviesSum = function() {
        var sum = 0;
        this.listOfMovies.forEach(function(el) {
            sum += parseFloat(el.length);
        });
        return sum;
    }
    this.getData = function() {
        return this.date.toDateString() + ", " + this.listOfMovies.length + " movies, duration: " + this.moviesSum() + " min";
    }
    this.addMovie = function(movieObject) {
        return this.listOfMovies.push(movieObject);

    }
}

function Festival() {
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
    this.addMovieAndGetIndex = function(movieObject) {
        this.listOfAllMovies.push(movieObject);
        return this.listOfAllMovies.length - 1;
    }
    this.addProgramAndGetIndex = function(programObject) {
        this.listOfAllPrograms.push(programObject);
        return this.listOfAllPrograms.length - 1;
    }
}
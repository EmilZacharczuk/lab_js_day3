const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  return this.films.map(film => film.title)
}

Cinema.prototype.findByTitle = function(title) {
  const films = this.films.filter(film => film.title === title)
  return films[0]
}

Cinema.prototype.findByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre)
}

Cinema.prototype.findByYear = function(year) {
  const movies = this.films.filter(film => film.year === year)
  return movies.length > 0 ? true : false
}

Cinema.prototype.findFilmLength = function(length) {
  const moviesOverLength = this.films.map(movie => movie.length >= length)
  const moviesOverLength2 = moviesOverLength.reduce((boolean, film) => {
    if (film === false) {
      return boolean = false
    }
  }, true)
  return moviesOverLength2;
  // const moviesOverLength = this.films.filter(movie => movie.length >=  length)
  // return moviesOverLength.length === this.films.length ? true : false

}

Cinema.prototype.totalFilmTime = function() {
  return this.films.reduce((total, film) => total += film.length, 0)
}
Cinema.prototype.findByProperty = function(property, value) {
  return this.films.filter(film => film[property] === value)
}
module.exports = Cinema;

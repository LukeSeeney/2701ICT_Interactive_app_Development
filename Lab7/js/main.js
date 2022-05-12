var Book = /** @class */ (function () {
    function Book(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }
    Book.prototype.display = function () {
        console.log("".concat(this.year, ", ").concat(this.author, ", \"").concat(this.title, "\""));
    };
    return Book;
}());
var Movie = /** @class */ (function () {
    function Movie(year, Director, title) {
        this.year = year;
        this.Director = Director;
        this.title = title;
    }
    Movie.prototype.display = function () {
        console.log("".concat(this.year, ", ").concat(this.Director, ", \"").concat(this.title, "\""));
    };
    return Movie;
}());
var book = new Book(1776, "Adam Smith", "The Nature and Cause of the Wealth of Nations");
book.display();
var movie = new Movie(1992, "The Last of the Mohicans", "Michael Mann");
movie.display();

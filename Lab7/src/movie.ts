class Movie implements Item {
    constructor(public year, public Director, public title){}
    display() {
    console.log(`${this.year}, ${this.Director}, "${this.title}"`);
    }
   }

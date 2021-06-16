import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   newType:string = "empty";

   constructor() { }

   ngOnInit() {
   }

  //  addMovie(movie: string): void {
  //    if (movie.length > 0) {
  //      if (!this.movies.includes(movie)) {
  //        this.movies.push(movie);
  //        this.newType = "empty"
  //      } else {
  //        this.newType = movie;
  //      }
  //    } else {
  //      this.newType = "";
  //    }
  //  }

  addMovie(movie:string): string {
    let errorMsg = "";
    if (movie === "") {
      errorMsg = "Please enter title.";
    } else if (this.movies.includes(movie)) {
      errorMsg = `${movie} is already listed.`;
    } else {
      this.movies.push(movie);
    }
    return errorMsg;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.scss']
})
export class MovieSuggestionsComponent implements OnInit {
  public suggestedMovies: any = []

  constructor() {
    this.suggestedMovies = [
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      },
      {
        title: "Fast and Furious",
        movieType: "Part Two",
        reason: "a lot of incomplete stories",
        imageBase64: "/assets/images/incredibles 3.jpg"
      }
    ]
  }

  ngOnInit(): void {}

}

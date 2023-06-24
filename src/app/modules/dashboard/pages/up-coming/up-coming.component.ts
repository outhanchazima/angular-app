import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
})
export class UpComingComponent implements OnInit {
  public movies: any[] = []

  constructor(private moviesService: MovieService) {
    this.moviesService.upComingMovies().subscribe({
      next: (response) => {
        console.log(response);
        this.movies = [response];
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnInit(): void {
    console.log("moviee--------")
  }
}

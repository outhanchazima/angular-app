import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
})
export class UpComingComponent implements OnInit {
  public movies: any[] = []

  constructor(private moviesService: MovieService) {
      }

  ngOnInit(): void {
    this.moviesService.upComingMovies().subscribe({
      next: (response) => {
        console.log(response);
        this.movies = [];
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}

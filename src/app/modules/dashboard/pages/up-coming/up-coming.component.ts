import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
})
export class UpComingComponent implements OnInit {
  public movies: any[] = []
  public currentPage = 1
  public limit = 4


  constructor(private moviesService: MovieService) {
    this.fetchMovieData()
  }

  fetchMovieData(): void {
    this.moviesService.upComingMovies(this.currentPage, this.limit).subscribe({
      next: (resp) => {
        this.movies = resp.results;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  nextPage(): void {
    this.currentPage++;
    this.fetchMovieData();
  }

  previousPage(): void {
    this.currentPage--;
    this.fetchMovieData();
  }

  ngOnInit(): void {}
}

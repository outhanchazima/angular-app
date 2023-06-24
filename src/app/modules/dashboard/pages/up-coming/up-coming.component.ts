import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
})
export class UpComingComponent implements OnInit {
  public movies: any[] = []
  currentPage = 1


  constructor(private moviesService: MovieService) {
    this.moviesService.upComingMovies(this.currentPage).subscribe({
      next: (resp) => {
        this.movies = resp.results;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  fetchMovieData(): void {
    this.moviesService.upComingMovies(this.currentPage).subscribe({
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

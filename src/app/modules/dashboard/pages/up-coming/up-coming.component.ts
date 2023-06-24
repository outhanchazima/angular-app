import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
})
export class UpComingComponent implements OnInit {
  public movies: any[] = []
  public currentPage = 1
  public limit = 4

  // Searching Properties
  public searchQuery: any = '';
  public isSearching = false;
  private searchSubject = new Subject<string>();


  constructor(private moviesService: MovieService) {
    this.fetchMovieData()
  }

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(1000), // Wait for 1 second of inactivity
      distinctUntilChanged() // Emit only if the search query changes
    ).subscribe(() => {
      this.currentPage = 1; // Reset to the first page when searching
      this.searchMovieData();
    });
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

  searchMovieData() {
    console.log(this.searchQuery, "search query")

    if (this.searchQuery.length < 3) {
      this.movies = []; // Clear movies array if the search query is less than 3 characters
      return;
    }

    this.isSearching = true;

    this.moviesService.searchMovie(this.searchQuery).subscribe({
      next: (resp) => {
        this.movies = resp.Search;
        this.isSearching = false;
      },
      error: (e) => {
        console.error(e);
        this.isSearching = false;
      },
      complete: () => console.info('complete')
    })
  }

  onSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchQuery = inputValue;
    this.searchSubject.next(inputValue);
  }
}

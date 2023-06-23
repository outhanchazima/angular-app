import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public upComingMovies() {
    return this.http.get(
      'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      {
        headers: {
          'X-RapidAPI-Key': '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      }
    )
  }
}

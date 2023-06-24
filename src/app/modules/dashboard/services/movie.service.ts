import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public upComingMovies(currentPage: number = 1, limit: number = 4): Observable<any> {
    const qParams = new HttpParams().set('page', currentPage.toString()).set("limit", limit.toString());

    return this.http.get<any>(
      'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      {
        headers: {
          'X-RapidAPI-Key': '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        },
        params: qParams
      }
    )
  }

  public searchMovie(searchTerm: string, limit: number = 4): Observable<any> {
    const params = new HttpParams().set('limit', limit.toString()).set('s', searchTerm.toString())

    return this.http.get<any>(
      "http://www.omdbapi.com",
      {
        params
      }
    )
  }
}

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public upComingMovies(currentPage: number = 1): Observable<any> {
    const qParams = new HttpParams().set('page', currentPage.toString());

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
}

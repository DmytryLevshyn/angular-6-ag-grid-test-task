import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map, filter, switchMap, flatMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const dataUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private http: HttpClient
  ) { }

  getData() : Observable<any>{
    return this.http.get(dataUrl, httpOptions).pipe(
      map(res => {
        return (res as any).items.map(item => item.snippet)
      })
    )
  }

}

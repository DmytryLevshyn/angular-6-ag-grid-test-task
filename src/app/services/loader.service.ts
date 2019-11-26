import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoItem } from '../models/video-item'

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

  getData() : Observable<VideoItem[]>{
    return this.http.get(dataUrl, httpOptions).pipe(
      map(res => {
        return (res as any).items.map((item: Object) => {
          return new VideoItem({ videoId: (item as any).id.videoId , ...(item as any).snippet })
        })
      })
    )
  }

}

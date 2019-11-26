import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { take, switchMap} from 'rxjs/operators';
import { LoaderService } from "../services/loader.service";
import { VideoItem } from '../models/video-item';

@Injectable({
    providedIn: 'root'
})
export class VideoDataResolver implements Resolve<any> {

  constructor(private loader: LoaderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VideoItem[]> {
    return this.loader.getData().pipe(
        take(1),
        switchMap(res => {
          const result = res;
          return of(result);
        })
    )
  }
}
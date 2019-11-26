import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { take, map, filter, switchMap, flatMap } from 'rxjs/operators';
import { LoaderService } from "../services/loader.service";

@Injectable({
    providedIn: 'root'
})
export class VideoDataResolver implements Resolve<any> {

  constructor(private loader: LoaderService) { }

  //   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.loader.getData().pipe(
        take(1),
        switchMap(res => {
          const result = res;
          return of(result);
        })
    )
  }
}
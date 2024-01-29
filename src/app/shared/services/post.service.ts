import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postUrl: string = `${environment.baseUrl}/posts.json`;
  private postObj$: Subject<Ipost> = new Subject<Ipost>();
  postObjObs$ = this.postObj$.asObservable();
  private updatePost$: Subject<Ipost> = new Subject<Ipost>();
  updateObjPost$ = this.updatePost$.asObservable();
  constructor(private _Http: HttpClient) {}

  getAllPosts(): Observable<Array<Ipost>> {
    return this._Http.get<Ipost>(this.postUrl).pipe(
      tap((res) => console.log(res)),
      map((res: any) => {
        console.log(res);
        let postArray: Array<any> = [];
        for (const key in res) {
          console.log(res[key]);
          postArray.push({ ...res[key], id: key });
        }
        return postArray;
      })
    );
  }

  sendPostObj(post: Ipost) {
    return this.postObj$.next(post);
  }

  sendupdatePost(uPost: Ipost) {
    return this.updatePost$.next(uPost);
  }

  createSinglePost(post: Ipost) {
    return this._Http.post(this.postUrl, post);
  }

  updatePOstObj(upPost: Ipost): Observable<Ipost> {
    let updatePost = `${environment.baseUrl}/posts/${upPost.id}.json`;
    return this._Http.patch<Ipost>(this.postUrl, updatePost);
  }
}

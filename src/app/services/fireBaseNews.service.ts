import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class newsServices {
  subjectobservable = new Subject();
  myprofilepick: any;

  constructor(private http: HttpClient) {
    this.myprofilepick = 'https://visionnairecorp.files.wordpress.com/2019/05/250px-iron_man_bleeding_edge.jpg';
    this.subjectobservable.subscribe((img: string) => {
      this.myprofilepick = img;
      console.log('ziraj', this.myprofilepick);
      // this.id
    });
  }


  // storeServers(servers: any[]) {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   console.log(servers);
  //   return this.http.put("", servers, { headers: headers });
  // }

  // getNewSection() {
  //   return this.http.get("").pipe(
  //     map((response: Response) => {
  //       const data: any = response;
  //       for (const server of data) {
  //         server.name = "FETCHED_" + server.name;
  //       }
  //       return data;
  //     }),
  //     catchError((error: Response) => {
  //       return Observable.throw("Something went wrong");
  //     })
  //   );
  // }

  // getNewSection() {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   map((response: Response) => {
  //     return this.http.get("https://socialwebsite-ac36c.firebaseio.com/", {
  //       headers: headers
  //     });
  //   });
  // }

  getNewSection() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get('https://socialwebsite-ac36c.firebaseio.com/ashok.json', { headers })
      .pipe(
        map((response: Response) => {
          console.log(response);
          return response;
        })
      );
  }

  postNewSection() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('https://socialwebsite-ac36c.firebaseio.com/ashok.json', { headers })
      .pipe(
        map((response: Response) => {
          console.log(response);
          return response;
        })
      );
  }
  onlyObservable() {
    return new Observable(observer => {
      setTimeout(() => observer.next('https://visionnairecorp.files.wordpress.com/2019/05/250px-iron_man_bleeding_edge.jpg'), 4000);
    });
  }


  profilePhotoObservable() {
    return new Observable(observer => {
      setTimeout(() => observer.next(this.myprofilepick), 2000);
    });
  }

}

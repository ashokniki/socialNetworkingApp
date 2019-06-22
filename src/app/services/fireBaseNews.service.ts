import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class newsServices {
  constructor(private http: HttpClient) {}
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
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .get("https://socialwebsite-ac36c.firebaseio.com/ashok.json", { headers })
      .pipe(
        map((response: Response) => {
          console.log(response);
          return response;
        })
      );
  }
}

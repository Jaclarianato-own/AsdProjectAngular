import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class Rest {

    httpOptions: any = null;    

    constructor(
        private http: HttpClient,

      ) { }
    
      setHeader() {
        this.httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
      }



      getUrl(url: string): string {
        return environment.baseUrl + url;
      }

      request( url:string): Observable<any> {
        this.setHeader();
        return this.http.get<any>(
          this.getUrl(url),
          this.httpOptions
        );
      }
      
  }
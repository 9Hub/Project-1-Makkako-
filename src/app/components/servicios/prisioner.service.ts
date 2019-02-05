import {Injectable} from '@angular/core';

import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { Observable,BehaviorSubject } from 'rxjs';



@Injectable()
export class PrisionerService{

    httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Authorization':'authkey',
          'userid':'1'
        })
    };
    private url = 'http://192.168.1.203:3000/api/persona';  
    constructor(private http: HttpClient ){}

    getPrisioner(): Observable<any>{
        //return this.http.get('http://192.168.1.5:3000/api/persona', this.httpOptions);
        return this.http.get(this.url, this.httpOptions);
    }

    postPricioner(form): Observable<any>{
        return this.http.post<any>(this.url,form);
    }

}
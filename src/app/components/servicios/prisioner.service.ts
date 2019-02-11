import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class PrisionerService{

    httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Authorization':'authkey',
          'userid':'1'
        })
    };

    private url:string = 'http://xxxxxxxxxx';
    constructor(private http: HttpClient ){}

    getPrisioner(): Observable<any>{
        return this.http.get(this.url,this.httpOptions);
    }

    addPricioner(formJon): Observable<any>{
        return this.http.post(this.url, formJon);
    }
    
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentsService {
  getSortedAllstudents: any;

   constructor(private _httpClient:HttpClient){}

  getallstudentdata():Observable<any>{
    return this._httpClient.get('https://62abe711bd0e5d29af16f450.mockapi.io/Students');
  }

  filterStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?filter=" +term);
  }

  getallstudentdata1(pageNo:number):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?limit=10&page=" +pageNo);
  }

  getSortedallstudentsdata(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?sortBy="+column+"&order="+order );
  }
  delete(id:string):Observable<any>{
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+id)
  }
}
 
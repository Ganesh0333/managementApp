import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {

  constructor(private _httpClient:HttpClient) { }

  getStudentDetails(data:any){
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/Students",data)
  }

  delete(id:string){
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+id)
  }
}

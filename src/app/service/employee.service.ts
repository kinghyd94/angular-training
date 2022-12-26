import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) { }

  getAllEmployees(){
   return this.http.get(this.url);
  }
  postEmployee(name: any, salary:any, gender:any){
    this.http.post(name, salary, gender);
  }
  deleteEmployee(id:any){
    this.http.delete(this.url+id)
  }
}

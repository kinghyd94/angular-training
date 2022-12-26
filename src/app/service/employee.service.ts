import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private url = "http://localhost:3000/employees";
  constructor(private http: HttpClient) { }

  getAllEmployees(){
   return this.http.get(this.url);
  }
  postEmployee(empObj:any){
    return this.http.post(this.url, empObj);
  }
  deleteEmployee(id:any){
    let finalUrl = this.url+"/"+id;
   return this.http.delete(finalUrl);
  }
  updateEmployee(id: number,employeeObj: any){
    return this.http.patch(this.url+"/"+id,employeeObj);
  }
}

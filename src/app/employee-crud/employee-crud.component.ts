import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {
  allEmployees: any;
  columnHeader: any;
  name:any = '';
  salary: any = '';
  gender: any = ''
constructor(private employeeService:EmployeeService){}
ngOnInit(): void {
  this.employeeService.getAllEmployees().subscribe((employees)=>{
    this.allEmployees = employees;
    this.columnHeader = Object.keys(this.allEmployees[0]);
    this.columnHeader.push('Action')
  });

}

addEmployee(name: any, sal:any, gender:any){
  this.employeeService.postEmployee(name, sal,gender);
}
delEmployee(id:any){
  this.employeeService.deleteEmployee(id)
}

}

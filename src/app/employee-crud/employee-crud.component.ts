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
  id:any;
  name:any = '';
  salary: any = '';
  gender: any = ''
  newDynamic: any = {};
  hideButton: boolean = true;
constructor(private employeeService:EmployeeService){}
ngOnInit(): void {
  this.employeeService.getAllEmployees().subscribe((employees)=>{
    this.allEmployees = employees;
    this.columnHeader = Object.keys(this.allEmployees[0]);
    this.columnHeader.push('Action')
  });

}

addEmployee(name: any, sal:any, gender:any){
  this.newDynamic = {
    name: name, 
    salary:sal,
    gender:gender
  }
  this.employeeService.postEmployee(this.newDynamic).subscribe((empResponse)=>{
    this.employeeService.getAllEmployees().subscribe((employees)=>{
      this.allEmployees = empResponse;
      this.columnHeader = Object.keys(this.allEmployees[0]);
      this.columnHeader.push('Action')
    });
  });
}
delEmployee(id:any){
  this.employeeService.deleteEmployee(id).subscribe((response)=>{
    this.employeeService.getAllEmployees().subscribe((employees)=>{
      this.allEmployees = employees;
      this.columnHeader = Object.keys(this.allEmployees[0]);
      this.columnHeader.push('Action')
    });
  })
}
editEmployee(id:number,name: any, sal:any, gender:any) {
    this.name = name;
    this.salary = sal;
    this.gender = gender;
    this.id = id;
    this.hideButton = false;
}

updateEmployee(name: any, sal:any, gender:any){
  this.newDynamic = {
    name: name, 
    salary:sal,
    gender:gender
  }
  this.employeeService.updateEmployee(this.id, this.newDynamic).subscribe((empResponse)=>{
    this.employeeService.getAllEmployees().subscribe((employees)=>{
      this.allEmployees = employees;
      this.columnHeader = Object.keys(this.allEmployees[0]);
      this.columnHeader.push('Action')
    });
  });
  this.name = '';
  this.salary = '';
  this.gender = '';
  this.id = '';
  this.hideButton = true;

}

}

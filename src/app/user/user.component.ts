import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'angular-training';
  url ='https://jsonplaceholder.typicode.com/users';
  url2 ='https://api.publicapis.org/entries';
  users:any;
  allEntries: any;
  entriesObj: any;
  columnHeader: any;
  displayloader: boolean = false;
  usersObj: any;
  finalUsers: any;

  constructor(private http: HttpClient){}
  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    fetch(this.url).then((response)=>{
    let usersObj = response.json();
    usersObj.then((userData) =>{
      this.users = userData;
    },
    (error)=>{
      console.log(error)
    }
    )
    
    })
  }

  getAllEntries(){
    this.displayloader = true;
    this.http.get(this.url2).subscribe(entry=>{
      this.entriesObj = entry;
      this.allEntries = this.entriesObj.entries;
      this.columnHeader = Object.keys(this.allEntries[0]);
      this.displayloader = false;
    })
  }
}

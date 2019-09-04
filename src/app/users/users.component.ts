import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private http : HttpClient ) { }

  private users : any[];
  //private user : any[];

  ngOnInit() {

     this.http.get("../assets/users.json").subscribe(
      (res : any)=>{
          console.log("List of users ", res);
          this.users = res;
      },
      (err)=>{
        console.log("Error is ",err);
      },
    )
  }

  /* showData(x){
    this.user = x;
  } */

}

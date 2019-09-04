import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user : any[];

  constructor( private http : HttpClient, private ac : ActivatedRoute) { }

  ngOnInit() {

    this.ac.params.subscribe((param)=>{

      console.log(param);

      //this.http.get("../assets/users.json/"+param.id).subscribe(
        this.http.get("https://jsonplaceholder.typicode.com/users/"+param.id).subscribe(

        (res : any)=>{
          console.log(res);

          this.user = res;
        }
      )
    })
  }

}

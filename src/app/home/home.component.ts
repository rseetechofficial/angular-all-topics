import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private Obj : any [] = [
    { name : "Ramesh", age : 24, pic : '../assets/images/mavatar.jpg' },
    { name : "Raju", age : 23, pic : '../assets/images/mavatar.jpg' }
 ]

  constructor( ) { }

  private your_name : string ="Ramesh Kumar"  

  ngOnInit() {

  }

}

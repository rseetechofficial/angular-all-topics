import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  private frm : FormGroup;

  ngOnInit() {

    this.frm = new FormGroup({
      name : new FormControl(null, [Validators.required, Validators.minLength(5), 
        Validators.maxLength(15), Validators.pattern("^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$")])
    })

  }

}

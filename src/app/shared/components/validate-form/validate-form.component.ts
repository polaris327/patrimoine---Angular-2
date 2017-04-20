import { Component, OnInit } from '@angular/core';
import { DataToSubmit } from "../dataToSubmit";

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  myData = new DataToSubmit('Nom', 'Prénom', 'Email', 'Message'); // this is our data instance

  constructor() { }

  ngOnInit() {
  }

  submitted = false; //form not submited : default
  data: string; //this variable contains our data

  //Show data after form submit and set submitted to true
  onSubmit(data) {
    this.submitted = true;
    this.data = JSON.stringify(data, null, 2);
    console.log(this.data);
  }
}

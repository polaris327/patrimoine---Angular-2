import { Component, OnInit, Input } from '@angular/core';
import { DataToSubmit } from "../dataToSubmit";
import { CustomService } from '../../services/custom.service';
import { InitLoadCustomService } from '../../services/init-load-custom.service';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  myData = new DataToSubmit('Nom', 'Prénom', 'Email', 'Message'); // this is our data instance

  constructor(
    private _customService: CustomService,
    private _initLoadCustomService: InitLoadCustomService
  ) { }

  ngOnInit() {
  }

  error:string = '';
  submitted = false; //form not submited : default
  data: string; //this variable contains our data


  @Input()
    products:any[];

  //Show data after form submit and set submitted to true
  onSubmit(data) {
    //console.log("EACH_ITEM...", Object.keys(data));
    //this.submitted = true;
    //let str:string = '';
    //data['liste des patrimoines']=[];
    //this.products.forEach((item, index) => {
    //  data['liste des patrimoines'][index] = this._initLoadCustomService.docData[item]['superfields']['opération'];
    //});

    let ret_string = '';

    Object.keys(data).forEach(key => {
      ret_string += key + ':' + data[key] + ',';
    });

    console.log(ret_string);

    //Object.entries(data).forEach(([key, value]) => {
    //  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
    //});
    //Object.keys(data).forEach((key, index) => {
    //  console.log(key + ' ' + Object.keys(index)); // "a 5", "b 7", "c 9"
    //});
    //console.log(str);
    let postData: any = {
      "doc":
      {
        "note": data,
        "percent": "50",
        "accounted": ["g_58e6223ce96bf068f54e3f6c"],
        "type": "note"
      }
    };
    this._customService.postForm(postData).subscribe(
        postResponse => {

      }, error => {
        this.error = error;
      }
    );

    this.data = JSON.stringify(postData, null, 2);
    //console.log(this.data);
  }
}

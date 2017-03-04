import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items:any = [
    {
      id: '0',
      title: 'MORILLON',
      image: '../../../assets/img/PH-city1.jpg',
      address: 'Morillons(rue des), 22-26, Robert Lindet(rue), 21-25',
      arrondissement: '75015',
      classement: 'Paris Habitat'
    },
    {
      id: '1',
      title: 'CHATILLON SOUS BAGNEUX',
      image: '../../../assets/img/PH-city2.jpg',
      address: 'Roissys(rue des), 142',
      arrondissement: '92020',
      classement: 'Paris Habitat'
    }
  ]
}

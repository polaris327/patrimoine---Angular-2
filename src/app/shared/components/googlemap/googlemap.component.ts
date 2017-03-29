import { Component, OnInit, Input } from '@angular/core';
import { GeocodingService } from "./geocoding.service";

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  //public location = new Location();

  constructor(
    private geocoder: GeocodingService
  ) {
    console.log("GOOGLEMAPCOMP..........");
    this.geocoder.geocode("21bis rue claude bernard PARIS");
  }

  ngOnInit() {
  }

  @Input()
    items:any = [];

  // google maps zoom level
  zoom: number = 8;

  //// initial center position for the map
  //lat: number = 48.833866;
  //lng: number = 2.29746;

  //clickedMarker(label: string, index: number) {
  //  console.log(`clicked the marker: ${label || index}`)
  //}
  //
  //mapClicked($event: any) {
  //  this.markers.push({
  //    lat: $event.coords.lat,
  //    lng: $event.coords.lng
  //  });
  //}
  //
  //markerDragEnd(m: marker, $event: any) {
  //  console.log('dragEnd', m, $event);
  //}
  //
  //markers: marker[] = [
  //  {
  //    lat: 51.673858,
  //    lng: 7.815982,
  //    label: 'A',
  //    draggable: true
  //  },
  //  {
  //    lat: 51.373858,
  //    lng: 7.215982,
  //    label: 'B',
  //    draggable: false
  //  },
  //  {
  //    lat: 51.723858,
  //    lng: 7.895982,
  //    label: 'C',
  //    draggable: true
  //  }
  //]
}

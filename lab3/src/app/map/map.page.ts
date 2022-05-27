import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare let google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: any;


  constructor() { }

  ngOnInit() {
    let latLng = new google.maps.LatLng(-27.9628,153.3814);
    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });
    
    let infoWindow = new google.maps.InfoWindow({
      content: '<h4> Griffith University Gold Coast </h4>'
    });
    google.maps.event.addListener(marker, 'click', () =>{
      infoWindow.open(this.map, marker)
    });
  }
}

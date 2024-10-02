import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent  {
  public selectedId: string ='';

  constructor( private placeService: PlacesService,
    private mapService: MapService,
   ) { }

  get isLoadingPlaces(): boolean {
    return this.placeService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placeService.places;
  }
    
  flyTo( place: Feature ){
    this.selectedId = place.id;
    
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }

  getDirections( place: Feature){
    if (!this.placeService.userLocation) throw Error('No hay userLocation')

      this.placeService.deletePlaces();
      
    const start = this.placeService.userLocation;
    const end = place.center as [number, number];


        this.mapService.getRouteBetweenPoints(start, end);

  }
  }

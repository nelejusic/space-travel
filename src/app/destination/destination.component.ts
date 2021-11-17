import { DestinationService } from './destination.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(private destinationService : DestinationService) { }

  ngOnInit(): void {
  }
  planetImg="../../assets/destination/image-moon.png"
  planet='MOON'
  planetDescription=` See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`
  avgDistanceToPlanet= '  384,400 km'
  avgTravelTIme = '3 days'
  onTabChange(event:MatTabChangeEvent){
    this.setData(event.tab.textLabel)
  }
  setData(planetName){
    this.destinationService.planetArray.forEach(element => {
        if(planetName === element.planetSelector){
          this.planet = element.planet;
          this.planetDescription = element.planetDescription;
          this.avgDistanceToPlanet = element.avgDistanceToPlanet;
          this.avgTravelTIme = element.avgTravelTIme;
          this.planetImg = element.planetImg
        }
    });
    console.log('to je to')
  }
}
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

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
    
    if(event.tab.textLabel==="01 MOON"){
      this.planet = 'MOON'
      this.planetDescription = ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.`
      this.avgTravelTIme='3 days'
      this.planetImg ="../../assets/destination/image-moon.png"
    } 
     if(event.tab.textLabel==="02 MARS"){
      this.planet = 'MARS'
      this.planetDescription = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!`
      this.avgDistanceToPlanet=' 225 mil. km'
      this.avgTravelTIme='9 Months'
      this.planetImg = "../../assets/destination/image-mars.png"

    } 
     if(event.tab.textLabel==="03 EUROPA"){
      this.planet = 'EUROPA'
      this.planetDescription = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.`
      this.avgDistanceToPlanet=  '628 mil. km'
      this.avgTravelTIme='3 years'
      this.planetImg = "../../assets/destination/image-europa.png"



    }
      if(event.tab.textLabel==="04 TITAN"){
      this.planet = 'TITAN'
      this.planetDescription = ` The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.
    `
      this.avgDistanceToPlanet=  '1.6 bil. km'
      this.avgTravelTIme ='7 year'
      this.planetImg = "../../assets/destination/image-titan.png"

    } 
  }
}
import { Injectable } from "@angular/core";

Injectable()
export class DestinationService {

 
    planetArray = [
        {
        planetSelector: '01 MOON',
        planet : 'MOON',
        planetDescription : ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.`,
        avgDistanceToPlanet: '  384,400 km',
        avgTravelTIme:'3 days',
        planetImg :"../../assets/destination/image-moon.png",
    },
     {  planetSelector: "02 MARS",
        planet : 'MARS',
        planetDescription : `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!`,
        avgDistanceToPlanet:' 225 mil. km',
        avgTravelTIme:'9 Months',
        planetImg :"../../assets/destination/image-mars.png",
     },
    {   planetSelector: '03 EUROPA',    
        planet :  'EUROPA',
        planetDescription : `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.`,
        avgDistanceToPlanet:'628 mil. km',
        avgTravelTIme:'3 years',
        planetImg :"../../assets/destination/image-europa.png",
     },
    {   planetSelector: "04 TITAN",
        planet : 'TITAN',
        planetDescription : ` The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn.`,
        avgDistanceToPlanet :'1.6 bil. km',
        avgTravelTIme :'7 year',
        planetImg : "../../assets/destination/image-titan.png"
    }




]

}
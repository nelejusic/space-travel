import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  crewMemberImg= "../../assets/crew/image-douglas-hurley.png"
  crewMember=' Douglas Hurley'
  memberResume=` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`
  role= 'COMANDER'
  onTabChange(event:MatTabChangeEvent){
    "02 Douglas Hurley"
    if (event.tab.textLabel === 'DOUGLAS H.'){
      this.crewMemberImg= "../../assets/crew/image-douglas-hurley.png"
      this.crewMember='Douglas Hurley'
      this.memberResume=` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`
      this.role= 'COMANDER' 
      } 
       if (event.tab.textLabel === 'ANOUSHEH A.'){
      this.crewMemberImg= "../../assets/crew/image-anousheh-ansari.png"
      this.crewMember='Anousheh Ansari'
      this.memberResume=` Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `
      this.role= 'FLIGHT COMANDER' 
      }   
      if (event.tab.textLabel === 'VICTOR G.'){
      this.crewMemberImg= "../../assets/crew/image-victor-glover.png"
      this.crewMember='Victor Glover'
      this.memberResume=` Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.  `
      this.role= 'PILOT' 
      }  
        if (event.tab.textLabel === 'MARK S.'){
      this.crewMemberImg= "../../assets/crew/image-mark-shuttleworth.png"
      this.crewMember='Mark Shuttleworth'
      this.memberResume=` ark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.  `
      this.role= 'Mission Specialist ' 
      }
  }
}
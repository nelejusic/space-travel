import { CrewService } from './crew.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(private crewService: CrewService) { }

  ngOnInit(): void {
  }
  crewMemberImg= "../../assets/crew/image-douglas-hurley.png"
  crewMemberFull=' Douglas Hurley'
  memberResume=` Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`
  role= 'COMANDER'
  onTabChange(event:MatTabChangeEvent){
      this.setData(event.tab.textLabel)
  }

  setData(name:string){
    console.log('to je to')
    this.crewService.crewArray.forEach((crewMember)=>{
            if(name===crewMember.crewMemberName){
              this.crewMemberFull = crewMember.crewMemberFullName
              this.crewMemberImg = crewMember.crewMemberImg
              this.memberResume = crewMember.memberResume
              this.role= crewMember.role
            }
    })
  }
}
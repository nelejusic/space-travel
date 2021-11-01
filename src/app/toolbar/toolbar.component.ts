import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: '00 HOME',
            link: './home',
            index: 0
        }, {
            label: '01 DESTINATION',
            link: './destination',
            index: 1
        }, {
            label: '02 CREW',
            link: './crew',
            index: 2
        },  {
            label: '03 TECHNOLOGY',
            link: './technology',
            index: 2
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}

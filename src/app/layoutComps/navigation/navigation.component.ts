import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  
})

export class NavigationComponent implements OnInit {
  naviClick = false;
   @Output() mobileMenuChange = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  mobileNavToggle(){
    this.naviClick = !this.naviClick;
    this.mobileMenuChange.emit(this.naviClick)
  }
  checkClick(){
    if(this.naviClick == true){
      return this.naviClick = false;
    }
  }
}

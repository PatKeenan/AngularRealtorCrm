import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crmProject';
  appHeight;
  noScroll = false;
  menuCloseIfOpen = false;


  ngOnInit(): void {
    this.appHeight = window.innerHeight;
  }

  menucloseCheck(){
    if (this.noScroll === false){
      return this.menuCloseIfOpen 
    }else{
      return this.menuCloseIfOpen = false
    }
  }

}


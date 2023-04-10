import { Component } from '@angular/core';
import {sideNavToggle} from "./sidebar/navData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  public isSidebarCollapsed : boolean = false
  public screenWidth  : number= 0;

  ontoggleSideNav(data : sideNavToggle):void {
    this.screenWidth = data.screenWidth;
    this.isSidebarCollapsed = data.collapsed;


  }
}

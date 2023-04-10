import {Component, EventEmitter, Output} from '@angular/core';
import {navData, sideNavToggle} from "./navData";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() ontoggleSideNav : EventEmitter<sideNavToggle> = new EventEmitter();
  public screenWidth: number = 0;
  public collapsed: boolean = false
  public navData  = navData
  togglecolapse() {
    this.collapsed= !this.collapsed;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
  closeSidebar() {
    this.collapsed=false;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
}

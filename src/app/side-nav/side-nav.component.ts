import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  navItems: Array<NavItem>;
  constructor() {
    this.navItems = [
      new NavItem('Home', 'bi-house-fill', '#hero', true),
      new NavItem('About', 'bi-person', '#about'),
      new NavItem('Resume', 'bi-file-text', '#resume'),
      new NavItem('Portfolio', 'bi-layout-text-window-reverse', '#portfolio'),
    ];
  }
  ngOnInit(): void {}

  navItemClick(item: NavItem) {
    this.navItems.forEach((e) => {
      if (e.id !== item.id) e.active = false;
      else e.active = true;
    });
  }
}

class NavItem {
  description: string;
  aClassName = 'nav-link scrollto';
  iconName: string;
  id: string;
  active = false;
  constructor(
    description: string,
    iconName: string,
    id: string,
    active: boolean = false
  ) {
    this.description = description;
    this.iconName = iconName;
    this.id = id;
    this.active = active;
  }
}
  
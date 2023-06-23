import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../models/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss'],
})
export class NavbarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem[]>{};

  constructor() {}

  ngOnInit(): void {}
}

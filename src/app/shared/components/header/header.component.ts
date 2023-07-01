import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../../services/resolution/resolution.service';
import { MEDIUM } from 'src/foundations/responsive/responsive';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menus = [
    {
      opened: false,
      title: 'Our stores markets',
      submenus: [{ title: 'Item 1' }, { title: 'Item 2' }],
    },
    {
      opened: false,
      title: 'Our farm',
      submenus: [{ title: 'Item 1' }, { title: 'Item 2' }],
    },
    {
      opened: false,
      title: 'Our story',
      submenus: [{ title: 'Item 1' }, { title: 'Item 2' }],
    },
    {
      opened: false,
      title: 'Home delivery',
      submenus: [{ title: 'Item 1' }, { title: 'Item 2' }],
    },
  ];

  login = true;

  session = { name: 'Andres F' };

  isMobile = screen.width < MEDIUM;

  constructor(private resolutionService: ResolutionService) {}

  ngOnInit() {
    this.resolutionService.resizeListener.subscribe((response) => {
      this.isMobile = response < MEDIUM;
    });
  }

  closeMenus() {
    this.menus.forEach((menu) => (menu.opened = false));
  }

  openMenu() {}
}

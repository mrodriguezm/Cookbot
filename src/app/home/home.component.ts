import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    isDropdownOpen = false;
    menuItems = ['Item 1', 'Item 2', 'Item 3'];
  


}

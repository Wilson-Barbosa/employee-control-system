import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RegisterComponent } from './components/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SearchComponent,
    SideMenuComponent,
    RegisterComponent,
    RouterLink,
    RouterLinkActive
  ],
})
export class AppComponent {
  title = 'Employee Control System';
}

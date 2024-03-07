import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Fitness';
}

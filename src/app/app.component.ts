import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Model2Component } from './model2/model2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Model2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
 {
   title = 'Model' ;
}

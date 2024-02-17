import { Component } from '@angular/core';

@Component({
  selector: 'app-model2',
  standalone: true,
  imports: [],
  templateUrl: './model2.component.html',
  styleUrl: './model2.component.css'
})
export class Model2Component
 {
  public name : string ="";

  public CourseEvent()
  {
    this.name = "Angular Web Development";
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
 {
   @Input() public Hello : string ="";

   @Output() public Hie = new EventEmitter();

   public SendHie()
   {
    this.Hie.emit ('Hello From Child');
   }
}

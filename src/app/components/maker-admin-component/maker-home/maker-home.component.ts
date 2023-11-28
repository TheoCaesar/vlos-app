import { Component } from '@angular/core';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent {
  triggerFilter($event: Event) {
    throw new Error('Method not implemented.');
  }

  triggerSearch($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }

  addMasterAnchor() {}
  addProgram() {}
}

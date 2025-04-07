import { Component } from '@angular/core';

import pets from '../data/pets';
import { PetComponent } from './pet/pet.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PetComponent, NgIf],
})
export class AppComponent {
  title = 'TASK-NG-Pets-Directives';
  pets = pets;
}

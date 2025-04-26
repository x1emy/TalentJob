import { Component } from '@angular/core';
import { VacanciesComponent } from '../vacancies/vacancies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VacanciesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}

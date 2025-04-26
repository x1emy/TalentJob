import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // редирект с пустого пути
  { path: 'home', component: HomeComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'vacancy/:id', component: VacancyDetailComponent },

  // Можно добавить "страницу не найдена":
  { path: '**', redirectTo: 'home' }
];

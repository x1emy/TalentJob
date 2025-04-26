import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { VacancyService, Vacancy } from './vacancy.service'; // Assuming the service path
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule]
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  filters = {
    category: '',
    salary: 0,
    jobType: ''
  };
  searchText: string = '';

  categories: string[] = ['IT', 'HR', 'Финансы', 'Маркетинг', 'Образование'];
  jobTypes: string[] = ['Полная занятость', 'Частичная занятость', 'Удалённая работа'];

  constructor(private vacancyService: VacancyService, private router: Router) {}

  ngOnInit(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.vacancyService.getVacancies(this.searchText, this.filters).subscribe((data: Vacancy[]) => {
      this.vacancies = data;
    });
  }

  applyFilters(): void {
    this.loadVacancies();
  }

  onSearchChange(): void {
    this.loadVacancies();
  }

  onApplyToVacancy(id: number): void {
    // Redirect to vacancy details page
    this.router.navigate(['/vacancy', id]);
  }

  // This function allows scrolling to the bottom of the page smoothly
  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
}

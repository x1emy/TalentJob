import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VacancyService, Vacancy } from '../vacancies/vacancy.service';

interface ApplicationForm {
  full_name: string;
  email: string;
  phone: string;
  message: string;
  vacancy_id: number;
}

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  
  vacancy: Vacancy | null = null;
  applicationData: ApplicationForm = {
    full_name: '',
    email: '',
    phone: '',
    message: '',
    vacancy_id: 0
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private vacancyService: VacancyService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const vacancyId = this.getVacancyId();
    this.applicationData.vacancy_id = vacancyId;
    this.loadVacancy(vacancyId);
  }

  private getVacancyId(): number {
    const id = this.route.snapshot.paramMap.get('id');
    return id ? +id : 0;
  }

  private loadVacancy(id: number): void {
    this.vacancyService.getVacancies('', {}).subscribe({
      next: (vacancies) => {
        this.vacancy = vacancies.find(v => v.id === id) || null;
      },
      error: (err) => {
        console.error('Failed to load vacancy:', err);
      }
    });
  }

  onApply(): void {
    if (!this.vacancy) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post('http://127.0.0.1:8000/api/applications/', this.applicationData)
      .subscribe({
        next: () => {
          this.submitSuccess = true;
          this.isSubmitting = false;
          this.resetForm();
        },
        error: (err) => {
          console.error('Application submission error:', err);
          this.submitError = true;
          this.isSubmitting = false;
        }
      });
  }

  private resetForm(): void {
    this.applicationData = {
      full_name: '',
      email: '',
      phone: '',
      message: '',
      vacancy_id: this.vacancy?.id || 0
    };
  }
}
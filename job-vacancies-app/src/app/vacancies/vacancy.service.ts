import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Vacancy {
  id: number;
  title: string;
  description: string;
  category: string;
  salary: number;
  jobType: string;
  
  companyName: string;
  companyLogo?: string;
  industry: string;
  companySize: string;
  companyRating?: number;
  location: string;
  employmentType: string;
  experience: string;
  postDate: string | Date;
  views?: number;
  responsibilities: string[];
  requirements: string[];
  additionalSkills?: string[];
  benefits?: Array<{
    icon: string;
    text: string;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  private vacancies: Vacancy[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Разработка UI с использованием Angular, HTML, CSS.',
      category: 'IT',
      salary: 800000,
      jobType: 'Полная занятость',
      companyName: 'TOO TechSolutions KZ',
      companyLogo: 'assets/7.png',
      industry: 'IT услуги',
      companySize: '50-100 сотрудников',
      companyRating: 4.5,
      location: 'Алматы',
      employmentType: 'Офис/гибрид',
      experience: '3+ года',
      postDate: '2023-05-10',
      views: 245,
      responsibilities: [
        'Разработка пользовательских интерфейсов',
        'Оптимизация производительности',
        'Участие в код-ревью'
      ],
      requirements: [
        'Опыт работы с Angular от 2 лет',
        'Знание TypeScript',
        'Опыт работы с RxJS',
        'Понимание REST API'
      ],
      additionalSkills: [
        'Опыт работы с NgRx',
        'Знание UI/UX принципов'
      ],
      benefits: [
        { icon: 'fas fa-medal', text: 'Конкурентная зарплата' },
        { icon: 'fas fa-home', text: 'Гибкий график' },
        { icon: 'fas fa-umbrella-beach', text: 'Оплачиваемый отпуск' }
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      description: 'Разработка серверной логики на Node.js, Go.',
      category: 'IT',
      salary: 900000,
      jobType: 'Полная занятость',
      companyName: 'TOO Digital Innovations',
      companyLogo: 'assets/2.png',
      industry: 'Финтех',
      companySize: '100-200 сотрудников',
      companyRating: 4.7,
      location: 'Астана',
      employmentType: 'Офис',
      experience: '4+ года',
      postDate: '2023-05-15',
      views: 189,
      responsibilities: [
        'Разработка API',
        'Оптимизация запросов к БД',
        'Интеграция с внешними сервисами'
      ],
      requirements: [
        'Опыт работы с Node.js от 3 лет',
        'Знание Go',
        'Опыт работы с PostgreSQL',
        'Понимание микросервисной архитектуры'
      ],
      additionalSkills: [
        'Опыт работы с Docker',
        'Знание Kubernetes'
      ],
      benefits: [
        { icon: 'fas fa-medal', text: 'Премии по результатам' },
        { icon: 'fas fa-dumbbell', text: 'Спортзал в офисе' },
        { icon: 'fas fa-car', text: 'Парковка' }
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      description: 'Автоматизация CI/CD, Docker, Kubernetes.',
      category: 'IT',
      salary: 1000000,
      jobType: 'Полная занятость',
      companyName: 'TOO CloudSystems',
      companyLogo: 'assets/3.png',
      industry: 'Облачные технологии',
      companySize: '200-500 сотрудников',
      companyRating: 4.8,
      location: 'Алматы',
      employmentType: 'Удаленная работа',
      experience: '5+ лет',
      postDate: '2023-05-20',
      views: 156,
      responsibilities: [
        'Настройка CI/CD процессов',
        'Мониторинг инфраструктуры',
        'Автоматизация развертывания'
      ],
      requirements: [
        'Опыт работы с Kubernetes',
        'Знание Terraform',
        'Опыт работы с AWS/GCP',
        'Навыки работы с Bash/Python'
      ],
      additionalSkills: [
        'Сертификаты AWS/GCP',
        'Опыт работы с ArgoCD'
      ],
      benefits: [
        { icon: 'fas fa-laptop', text: 'Техника за счет компании' },
        { icon: 'fas fa-globe', text: 'Международные проекты' },
        { icon: 'fas fa-book', text: 'Обучение за счет компании' }
      ]
    },
    // Остальные вакансии с аналогичной структурой
    {
      id: 4,
      title: 'Data Scientist',
      description: 'Работа с данными, машинное обучение, Python.',
      category: 'IT',
      salary: 950000,
      jobType: 'Удалённая работа',
      companyName: 'TOO DataInsights',
      companyLogo: 'assets/4.png',
      industry: 'Аналитика данных',
      companySize: '50-100 сотрудников',
      companyRating: 4.6,
      location: 'Астана',
      employmentType: 'Гибкий график',
      experience: '3+ года',
      postDate: '2023-05-18',
      views: 132,
      responsibilities: [
        'Анализ больших данных',
        'Разработка ML моделей',
        'Визуализация данных'
      ],
      requirements: [
        'Опыт работы с Python',
        'Знание Pandas, NumPy, Scikit-learn',
        'Опыт работы с SQL',
        'Понимание статистики'
      ],
      additionalSkills: [
        'Опыт работы с TensorFlow/PyTorch',
        'Знание Spark'
      ],
      benefits: [
        { icon: 'fas fa-chart-line', text: 'Работа с передовыми технологиями' },
        { icon: 'fas fa-brain', text: 'Участие в конференциях' }
      ]
    },
    // Остальные вакансии можно заполнить по аналогии
    // Для примера оставлю несколько с минимальными данными
    {
      id: 5,
      title: 'UX/UI Designer',
      description: 'Проектирование пользовательских интерфейсов.',
      category: 'IT',
      salary: 700000,
      jobType: 'Частичная занятость',
      companyName: 'TOO DesignPro',
      companyLogo: 'assets/5.png',
      industry: 'Дизайн студия',
      companySize: '10-50 сотрудников',
      location: 'Алматы',
      employmentType: 'Гибкий график',
      experience: '2+ года',
      postDate: '2023-05-22',
      responsibilities: [
        'Создание дизайн-макетов',
        'Прототипирование интерфейсов',
        'Тестирование UX'
      ],
      requirements: [
        'Опыт работы с Figma',
        'Знание принципов UX',
        'Портфолио работ'
      ]
    },
    {
      id: 6,
      title: 'QA Engineer',
      description: 'Тестирование веб-приложений, написание тест-кейсов.',
      category: 'IT',
      salary: 600000,
      jobType: 'Полная занятость',
      companyName: 'TOO QualityAssurance',
      companyLogo: 'assets/6.png',
      industry: 'QA услуги',
      companySize: '100-200 сотрудников',
      location: 'Астана',
      employmentType: 'Офис',
      experience: '1+ год',
      postDate: '2023-05-25',
      responsibilities: [
        'Написание тест-кейсов',
        'Ручное тестирование',
        'Составление отчетов'
      ],
      requirements: [
        'Опыт тестирования веб-приложений',
        'Базовые знания SQL',
        'Аналитическое мышление'
      ]
    }
    // Остальные вакансии можно оставить с базовыми полями
    // или заполнить по аналогии с первыми примерами
  ];

  getVacancies(searchText: string, filters: any): Observable<Vacancy[]> {
    let result = this.vacancies;

    if (searchText) {
      const text = searchText.toLowerCase();
      result = result.filter(v =>
        v.title.toLowerCase().includes(text) ||
        v.description.toLowerCase().includes(text) ||
        (v.companyName && v.companyName.toLowerCase().includes(text))
      );
    }

    if (filters.category) {
      result = result.filter(v => v.category === filters.category);
    }

    if (filters.salary) {
      result = result.filter(v => v.salary >= filters.salary);
    }

    if (filters.jobType) {
      result = result.filter(v => v.jobType === filters.jobType);
    }

    if (filters.location) {
      result = result.filter(v => v.location === filters.location);
    }

    if (filters.experience) {
      result = result.filter(v => v.experience === filters.experience);
    }

    return of(result);
  }

  getVacancyById(id: number): Observable<Vacancy | undefined> {
    const vacancy = this.vacancies.find(v => v.id === id);
    return of(vacancy);
  }
}
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Импорт HttpClient
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Добавляем провайдер для HttpClient
    provideRouter(routes),
    // Другие глобальные провайдеры...
  ]
}).catch(err => console.error(err));
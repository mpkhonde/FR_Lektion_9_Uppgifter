import { ApplicationConfig } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from './app.routes';
import { provideZoneChangeDetection } from "@angular/core";


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter( routes),
    provideHttpClient(withFetch()),
  ],
};
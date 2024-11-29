import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import {routes} from './app/app.routes';
import { AppComponent } from './app/app.component';

 bootstrapApplication(AppComponent, {
   providers: [
     provideRouter(routes)  // Provide the router configuration
   ]
 }).catch( r => console.log(r));


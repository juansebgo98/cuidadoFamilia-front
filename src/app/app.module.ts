import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PantallaPrincipalComponent } from './Pages/pantalla-principal/pantalla-principal.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/pantalla-principal', pathMatch: 'full' },
  { path: 'pantalla-principal', component: PantallaPrincipalComponent },
  // Agrega más rutas aquí según sea necesario
];

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

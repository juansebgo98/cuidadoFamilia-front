import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the FormsModule
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Pages/login/login.component'; // Import the MatDatepickerModule
import { PantallaPrincipalComponent } from './Pages/pantalla-principal/pantalla-principal.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'principal', component: PantallaPrincipalComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
  // Agrega más rutas aquí según sea necesario
];
@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

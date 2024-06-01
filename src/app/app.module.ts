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
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoginComponent } from './Pages/login/login.component'; // Import the MatDatepickerModule
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'principal', component: PantallaPrincipalComponent, canActivate: [AuthGuard]},
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

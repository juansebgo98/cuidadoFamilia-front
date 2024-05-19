import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { addDays, startOfDay } from 'date-fns';
import { Evento } from '../Entity/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  constructor() {}

  cargarEventos(): Observable<Evento[]> {
    const eventos: Evento[] = [
      new Evento(1, startOfDay(new Date()), addDays(startOfDay(new Date()), 1), 'Consulta Médica', 'assets/icons/cirujano.png','Cita'),
      new Evento(2, addDays(startOfDay(new Date()), -1), addDays(startOfDay(new Date()), 2), 'Medicina 1', 'assets/icons/medicina.png','Mecidamento'),
      new Evento(3, addDays(startOfDay(new Date()), 3), addDays(startOfDay(new Date()), 4), 'Medicina 2', 'assets/icons/medicina.png','Mecidamento'),
      new Evento(4, addDays(startOfDay(new Date()), -5), addDays(startOfDay(new Date()), -3), 'Consulta General', 'assets/icons/cirujano.png','Cita'),
      new Evento(5, addDays(startOfDay(new Date()), 7), addDays(startOfDay(new Date()), 7), 'Revisión Anual', 'assets/icons/medicina.png','Cita')
    ];
    return of(eventos);
  }
}

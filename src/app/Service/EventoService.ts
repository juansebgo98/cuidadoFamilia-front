import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { addDays, startOfDay } from 'date-fns';
import { Evento } from '../Entity/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  constructor() { }

  cargarEventos(): Observable<Evento[]> {
    const eventos: Evento[] = [
      new Evento(1, addDays(startOfDay(new Date()), 1), addDays(startOfDay(new Date()), 1), 'Consulta Médica', 'Cita'),
      new Evento(2, addDays(startOfDay(new Date()), -2), addDays(startOfDay(new Date()), -2), 'Paracetamol','Mecidamento'),
      new Evento(3, addDays(startOfDay(new Date()), -4), addDays(startOfDay(new Date()), -4), 'Frenadol', 'Mecidamento'),
      new Evento(4, addDays(startOfDay(new Date()), -5), addDays(startOfDay(new Date()), -5), 'Consulta General', 'Cita'),
      new Evento(5, addDays(startOfDay(new Date()), 2), addDays(startOfDay(new Date()), 5), 'Baja Padre enfermo', 'Permiso'),
      new Evento(6, addDays(startOfDay(new Date()), 7), addDays(startOfDay(new Date()), 7), 'Revisión Anual', 'Cita')
    ];
    return of(eventos);
  }
}

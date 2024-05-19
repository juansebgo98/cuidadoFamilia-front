import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView, CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { isSameDay, isSameMonth } from 'date-fns';
import { EventoService } from 'src/app/Service/EventoService';

registerLocaleData(localeEs);

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PantallaPrincipalComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  eventos: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;
  locale: string = 'es';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  
  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos(): void {
    this.eventoService.cargarEventos().subscribe(eventos => {
      this.eventos = eventos.map(evento => ({
        id: evento.id,
        start: new Date(evento.start),
        end: new Date(evento.end),
        title: evento.title,
        color: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        meta: { iconClass: this.getIconClass(evento.tipo) }
      }));
    });
  }

  getIconClass(tipo: string): string {
    switch (tipo) {
      case 'Mecidamento':
        return 'fa-pills';
      case 'Cita':
        return 'fa-user-doctor';
      // Añade más casos según sea necesario
      default:
        return 'fa-question-circle';
    }
  }

  eventClicked(event: CalendarEvent<any>): void {
    // Maneja el evento de clic en el evento
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  agregarNuevoEvento(): void {
    // Lógica para agregar un nuevo evento
  }
}

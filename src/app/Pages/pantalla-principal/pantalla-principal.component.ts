import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
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
        meta: { iconUrl: evento.iconUrl }
      }));
    });
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
}

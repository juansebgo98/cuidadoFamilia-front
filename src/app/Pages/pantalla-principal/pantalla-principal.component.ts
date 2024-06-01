import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { EventoService } from 'src/app/Service/Evento.service';
import { EventTransformService } from 'src/app/Service/event-transform.service';

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

  constructor(
    private eventoService: EventoService,
    private eventTransformService: EventTransformService
  ) { }

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos(): void {
    this.eventoService.cargarEventos().subscribe(data => {
      const eventosMedicamentos = this.eventTransformService.transformMedicamento(data.medicamentos);
      const eventosTickets = this.eventTransformService.transformTicket(data.tickets);
      const eventosCitasMedicas = this.eventTransformService.transformCitamedica(data.citasMedicas);
      const eventosComentarios = this.eventTransformService.transformComentario(data.comentarios);
      const eventosInformesMedicos = this.eventTransformService.transformInformeMedico(data.informesMedicos);
      const eventosPermisosLaborales = this.eventTransformService.transformPermisoLaboral(data.permisosLaborales);

      this.eventos = [
        ...eventosMedicamentos,
        ...eventosTickets,
        ...eventosCitasMedicas,
        ...eventosComentarios,
        ...eventosInformesMedicos,
        ...eventosPermisosLaborales
      ];
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

  agregarNuevoEvento(): void {
    // Lógica para agregar un nuevo evento
  }
}

import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Medicamento } from '../Entity/Medicamento';
import { Ticket } from '../Entity/Ticket';
import { CitaMedica } from '../Entity/CitaMedica';
import { Comentario } from '../Entity/Comentario';
import { InformeMedico } from '../Entity/InformeMedico';
import { PermisoLaboral } from '../Entity/PermisoLaboral';

@Injectable({
    providedIn: 'root'
})
export class EventTransformService {

    constructor() { }

    transformMedicamento(medicamentos: Medicamento[]): CalendarEvent[] {
        return medicamentos.map(medicamento => ({
            start: new Date(),
            title: `Medicamento: ${medicamento.nombre}`,
            color: { primary: '#ad2121', secondary: '#FAE3E3' },
            meta: {
                iconClass: 'fa-pills'
            }
        }));
    }

    transformTicket(tickets: Ticket[]): CalendarEvent[] {
        return tickets.map(ticket => ({
            start: new Date(ticket.fechaDeCompra),
            title: 'Ticket Comprado',
            color: { primary: '#1e90ff', secondary: '#D1E8FF' },
            meta: {
                iconClass: 'fa-receipt'
            }
        }));
    }

    transformCitamedica(citasMedicas: CitaMedica[]): CalendarEvent[] {
        return citasMedicas.map(cita => ({
            start: new Date(cita.fechaYHora),
            title: `Cita Médica: ${cita.descripcion}`,
            color: { primary: '#e3bc08', secondary: '#FDF1BA' },
            meta: {
                iconClass: 'fa-user-doctor'
            }
        }));
    }

    transformComentario(comentarios: Comentario[]): CalendarEvent[] {
        return comentarios.map(comentario => ({
            start: new Date(comentario.fechaYHoraDelComentario),
            title: `Comentario de ${comentario.usuario?.nombre}`,
            color: { primary: '#800080', secondary: '#E6E6FA' },
            meta: {
                iconClass: 'fa-comment'
            }
        }));
    }

    transformInformeMedico(informes: InformeMedico[]): CalendarEvent[] {
        return informes.map(informe => ({
            start: new Date(informe.fechaDelInforme),
            title: `Informe Médico: ${informe.descripcion}`,
            color: { primary: '#008000', secondary: '#C8E6C9' },
            meta: {
                iconClass: 'fa-file-medical'
            }
        }));
    }

    transformPermisoLaboral(permisos: PermisoLaboral[]): CalendarEvent[] {
        return permisos.map(permiso => ({
            start: new Date(permiso.fechaDeInicioDelPermiso),
            end: new Date(permiso.fechaDeFinDelPermiso),
            title: `Permiso Laboral: ${permiso.descripcion}`,
            color: { primary: '#ffa500', secondary: '#FFD700' },
            meta: {
                iconClass: 'fa-mug-hot'
            }
        }));
    }
}

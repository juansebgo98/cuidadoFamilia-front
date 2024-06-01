import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CitaMedica } from '../Entity/CitaMedica';
import { Comentario } from '../Entity/Comentario';
import { InformeMedico } from '../Entity/InformeMedico';
import { Medicamento } from '../Entity/Medicamento';
import { PermisoLaboral } from '../Entity/PermisoLaboral';
import { PersonaMayor } from '../Entity/PersonaMayor';
import { Ticket } from '../Entity/Ticket';
import { Usuario } from '../Entity/Usuario';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  cargarEventos(): Observable<any> {
    const usuarios: Usuario[] = [
      { id: 1, nombre: 'Juan Pérez', nombreDeUsuario: 'jperez', contrasena: 'password', email: 'juan@example.com', telefono: '123456789', fechaAlta: new Date(), fechaUltimaModificacion: null },
      { id: 2, nombre: 'María López', nombreDeUsuario: 'mlopez', contrasena: 'password', email: 'maria@example.com', telefono: '987654321', fechaAlta: new Date(), fechaUltimaModificacion: null },
    ];

    const personasMayores: PersonaMayor[] = [
      { id: 1, nombre: 'Ana García', fechaDeNacimiento: new Date('1930-01-15'), direccion: 'Calle Falsa 123', fechaAlta: new Date(), fechaUltimaModificacion: null },
      { id: 2, nombre: 'Pedro Fernández', fechaDeNacimiento: new Date('1940-05-20'), direccion: 'Avenida Siempre Viva 456', fechaAlta: new Date(), fechaUltimaModificacion: null },
    ];

    const medicamentos: Medicamento[] = [
      { id: 1, nombre: 'Aspirina', cantidadActual: 20, cantidadMinimaRequerida: 5, cantidadDePastillasPorDia: 1, frecuenciaDeDosificacion: 'Diaria', personaMayor: personasMayores[0] },
      { id: 2, nombre: 'Paracetamol', cantidadActual: 15, cantidadMinimaRequerida: 5, cantidadDePastillasPorDia: 2, frecuenciaDeDosificacion: 'Diaria', personaMayor: personasMayores[1] },
    ];

    const tickets: Ticket[] = [
      { id: 1, fechaDeCompra: new Date('2024-05-20'), citaMedica: null, personaMayor: personasMayores[0] },
      { id: 2, fechaDeCompra: new Date('2024-05-22'), citaMedica: null, personaMayor: personasMayores[1] },
    ];

    const citasMedicas: CitaMedica[] = [
      { id: 1, fechaYHora: new Date('2024-05-23T10:00:00'), descripcion: 'Consulta General', lugar: 'Hospital Central', tipoDeCita: 'General', personaMayor: personasMayores[0] },
      { id: 2, fechaYHora: new Date('2024-05-25T11:30:00'), descripcion: 'Especialista Cardiología', lugar: 'Clínica del Corazón', tipoDeCita: 'Especialista', personaMayor: personasMayores[1] },
    ];

    const comentarios: Comentario[] = [
      { id: 1, contenido: 'Comentario de prueba 1', fechaYHoraDelComentario: new Date('2024-05-26'), usuario: usuarios[0], personaMayor: personasMayores[0] },
      { id: 2, contenido: 'Comentario de prueba 2', fechaYHoraDelComentario: new Date('2024-05-27'), usuario: usuarios[1], personaMayor: personasMayores[1] },
    ];

    const informesMedicos: InformeMedico[] = [
      { id: 1, fechaDelInforme: new Date('2024-05-28'), descripcion: 'Informe Médico General', citamedica: citasMedicas[0] },
      { id: 2, fechaDelInforme: new Date('2024-05-30'), descripcion: 'Informe Cardiológico', citamedica: citasMedicas[1] },
    ];

    const permisosLaborales: PermisoLaboral[] = [
      { id: 1, fechaDeInicioDelPermiso: new Date('2024-06-01'), fechaDeFinDelPermiso: new Date('2024-06-03'), descripcion: 'Permiso por enfermedad', estado: 'Aprobado', usuario: usuarios[0] },
      { id: 2, fechaDeInicioDelPermiso: new Date('2024-06-04'), fechaDeFinDelPermiso: new Date('2024-06-06'), descripcion: 'Permiso por asuntos personales', estado: 'Pendiente', usuario: usuarios[1] },
    ];

    return of({
      medicamentos,
      tickets,
      citasMedicas,
      comentarios,
      informesMedicos,
      permisosLaborales
    });
  }
}

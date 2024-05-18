import { CitaMedica } from './CitaMedica';

export interface InformeMedico {
  id: number;
  fechaDelInforme: Date;
  descripcion: string;
  citamedica: CitaMedica | null; // Puede ser null si no está asociado a ninguna cita médica
}

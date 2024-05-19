import { CitaMedica } from "./CitaMedica";
import { PersonaMayor } from "./PersonaMayor";


export interface Ticket {
  id: number;
  fechaDeCompra: Date;
  citaMedica: CitaMedica | null; // Puede ser null si no está asociado a ninguna cita médica
  personaMayor: PersonaMayor | null; // Puede ser null si no está asociado a ninguna persona mayor
}

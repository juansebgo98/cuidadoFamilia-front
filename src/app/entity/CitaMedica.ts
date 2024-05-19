import { PersonaMayor } from "./PersonaMayor";

export interface CitaMedica {
  id: number;
  fechaYHora: Date;
  descripcion: string;
  lugar: string;
  tipoDeCita: string;
  personaMayor: PersonaMayor | null; // Puede ser null si no está asociado a ninguna persona mayor
}

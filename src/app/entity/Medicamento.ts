import { PersonaMayor } from "./PersonaMayor";

export interface Medicamento {
  id: number;
  nombre: string;
  cantidadActual: number;
  cantidadMinimaRequerida: number;
  cantidadDePastillasPorDia: number;
  frecuenciaDeDosificacion: string;
  personaMayor: PersonaMayor | null; // Puede ser null si no está asociado a ninguna persona mayor
}

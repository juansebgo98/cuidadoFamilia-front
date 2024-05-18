import { Usuario } from './Usuario';

export interface PermisoLaboral {
  id: number;
  fechaDeInicioDelPermiso: Date;
  fechaDeFinDelPermiso: Date;
  descripcion: string;
  estado: string;
  usuario: Usuario | null; // Puede ser null si no está asociado a ningún usuario
}

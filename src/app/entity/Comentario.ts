import { Usuario } from './Usuario';
import { PersonaMayor } from './PersonaMayor';

export interface Comentario {
  id: number;
  contenido: string;
  fechaYHoraDelComentario: Date;
  usuario: Usuario | null; // Puede ser null si no está asociado a ningún usuario
  personaMayor: PersonaMayor | null; // Puede ser null si no está asociado a ninguna persona mayor
}

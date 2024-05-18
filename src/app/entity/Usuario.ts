export interface Usuario {
    id: number;
    nombre: string;
    nombreDeUsuario: string;
    contrasena: string;
    email: string;
    telefono: string;
    fechaAlta: Date;
    fechaUltimaModificacion: Date | null; // Puede ser null si no tiene fecha de modificación
}
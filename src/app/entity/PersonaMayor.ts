export interface PersonaMayor {
    id: number;
    nombre: string;
    fechaDeNacimiento: Date;
    direccion: string;
    fechaAlta: Date;
    fechaUltimaModificacion: Date | null; // Puede ser null si no tiene fecha de modificación
}
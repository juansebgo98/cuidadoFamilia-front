export class Evento {
    id: number;
    start: Date;
    end: Date;
    title: string;
    iconUrl: string; // Actualizar el nombre de la propiedad para mayor claridad
  
    constructor(id: number, start: Date, end: Date, title: string, iconUrl: string) {
      this.id = id;
      this.start = start;
      this.end = end;
      this.title = title;
      this.iconUrl = iconUrl;
    }
  }
  
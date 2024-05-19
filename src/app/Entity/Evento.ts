export class Evento {
    id: number;
    start: Date;
    end: Date;
    title: string;
    tipo: string;
  
    constructor(id: number, start: Date, end: Date, title: string,tipo: string) {
      this.id = id;
      this.start = start;
      this.end = end;
      this.title = title;
      this.tipo = tipo;
    }
  }
  
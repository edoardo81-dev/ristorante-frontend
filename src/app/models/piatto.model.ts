export interface Piatto {
  id?: number;

  nome: string;
  categoria: string;
  prezzo: number;

  // opzionali
  descrizione?: string;
  ingredienti?: string;
  immagine?: string;
}

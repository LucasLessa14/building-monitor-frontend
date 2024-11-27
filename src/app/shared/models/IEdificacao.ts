import { ISensores } from "./ISensores";

export interface IEdificacao {
  id?: string;
  nome: string;
  endereco: string;
  tipo: string;
  status: string;
  sensores: ISensores[];
}

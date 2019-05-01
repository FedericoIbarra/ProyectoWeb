import { Plan } from './plan';

export class User {
        public id: number;
        public username: string;
        public password: string;
        public edad: number;
        public nombre: string;
        public apellido: string;
        public pesoEnKG: number;
        public planesPersonales: Plan[];
        // public historial: Historial
   constructor(){ }
}
